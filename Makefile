TEMPLATES = templates
STATIC = static

VERSION = ?v=2
PUBLISH = $(TEMPLATES) $(STATIC)
JS_BUILD_LIB = lib.js
JS_BUILD_FILE = app.min.js
CSS_BUILD_FILE = app.min.css

JS_DIR = $(STATIC)/js
CSS_DIR = $(STATIC)/css

PUBLISH_DIR = ./publish

CLOSURE = java -jar build/tools/closure-compiler-v1346.jar
CLOSURE_FLAGS = 

YUI = java -jar build/tools/yuicompressor-2.4.7.jar
YUI_FLAGS = --type css

RSYNC = rsync
RSYNC_FLAGS = -rupE


# ----
include build/js_compile_targets.mk # defines JS_COMPILE_TARGETS
include build/js_concat_targets.mk # defines JS_CONCAT_TARGETS
include build/js_ignore_targets.mk # defines JS_IGNORE_TARGETS
include build/css_files.mk # defines CSS_TARGETS

JS_COMPILE_FILES = $(addprefix $(JS_DIR)/, $(JS_COMPILE_TARGETS)) 
JS_CONCAT_FILES = $(addprefix $(JS_DIR)/, $(JS_CONCAT_TARGETS)) 
JS_IGNORE_FILES = $(addprefix $(JS_DIR)/, $(JS_IGNORE_TARGETS))

CSS_FILES = $(addprefix $(CSS_DIR)/, $(addsuffix .css, $(CSS_TARGETS)))
# ---- 


# Default build target
#
all : skeleton jslib appjs css
	@./build/js_sed_program1.sh $(JS_BUILD_LIB)$(VERSION) <$(TEMPLATES)/index.html >$(PUBLISH_DIR)/$(TEMPLATES)/1.html
	@./build/js_sed_program2.sh $(JS_BUILD_FILE)$(VERSION) <$(PUBLISH_DIR)/$(TEMPLATES)/1.html >$(PUBLISH_DIR)/$(TEMPLATES)/2.html				    
	@./build/css_sed_program.sh $(CSS_BUILD_FILE)$(VERSION) <$(PUBLISH_DIR)/$(TEMPLATES)/2.html >$(PUBLISH_DIR)/$(TEMPLATES)/index.html				    
	@echo 'project built !!'





# JS build
#
jslib : $(PUBLISH_DIR)/$(JS_DIR)/lib.js
	@echo
	@echo concatenated lib no compile

appjs : $(PUBLISH_DIR)/$(JS_DIR)/concat.js 
	@echo
	@echo compiling javascript file $(PUBLISH_DIR)/$(JS_DIR)/$(JS_BUILD_FILE)
	@$(CLOSURE) $(CLOSURE_FLAGS) --js=$< >$(PUBLISH_DIR)/$(JS_DIR)/$(JS_BUILD_FILE)

%lib.js : $(JS_CONCAT_FILES)
	@echo
	@echo concatenating js library files $+
	@echo ... to file $@
	@cat $+ >$@

%concat.js : $(JS_COMPILE_FILES)
	@echo
	@echo concatenating js files $+
	@echo ... to file $@
	@cat $+ >$@





# CSS build
#

css : $(PUBLISH_DIR)/$(CSS_DIR)/concat.css
	@echo
	@echo compiling css file $<
	@$(YUI) $(YUI_FLAGS) <$<  >$(PUBLISH_DIR)/$(CSS_DIR)/$(CSS_BUILD_FILE)

%concat.css: $(CSS_FILES)
	@echo
	@echo concatenating css files $+ 
	@echo ... to file $@
	@cat $+ >$@

skeleton : clean  
	@echo
	@echo making skeleton project
	@test -d $(PUBLISH_DIR) || mkdir $(PUBLISH_DIR)
	@$(RSYNC) $(RSYNC_FLAGS) $(PUBLISH) $(PUBLISH_DIR)
	
	@echo remove all js from publish/
	@rm -Rf $(PUBLISH_DIR)/$(JS_DIR)/*
	
	@echo rsync files below to publish/
	@for i in $(JS_IGNORE_FILES); do \
	  $(RSYNC) -aR $$i $(PUBLISH_DIR) ; \
	  echo keep file: $$i ; \
	done
	
	@rm -Rf $(PUBLISH_DIR)/$(CSS_DIR)/*
	@rm -Rf $(PUBLISH_DIR)/$(CSS_DIR)/.[^.]
	@rm -Rf $(PUBLISH_DIR)/$(CSS_DIR)/.??*

clean : force_target
	@echo
	@echo removing old project
	@rm -Rf $(PUBLISH_DIR)

force_target :
	@true
