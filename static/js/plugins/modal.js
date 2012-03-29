/*
 * modal plugin
 *
 * How to use:
 *  - Attach id="[value]" to modal element (ie. <div>)
 *  - Attach an attr. data-modal-window="#[value]" to the click element that will trigger the modal element (ie: <a>, <span> ...)
 *  - Call the plugin: $('<element>[data-modal-window]').modal();
 *    Plugin call should be called at bottom of <body> wrapped in a document ready handler: $(function){ });
 *
 * More on this plugin http://jquerytools.org/demos/
 */


(function($) { 

	// static constructs
	$.tools = $.tools || {version: '@VERSION'};
	
	$.tools.modal = {
		
		addEffect: function(name, loadFn, closeFn) {
			effects[name] = [loadFn, closeFn];	
		},
	
		conf: {  
			close: null,	
			closeOnClick: true,
			closeOnEsc: true,			
			closeSpeed: 'fast',
			effect: 'default',
			
			// since 1.2. fixed positioning not supported by IE6
			fixed: !$.browser.msie || $.browser.version > 6, 
			
			left: 'center',		
			load: false, // 1.2
			mask: true,  
			oneInstance: true,
			speed: 'normal',
			target: null, // target element to be modaled. by default taken from data-modal-window
			top: 'center'
		}
	};

	
	var instances = [], effects = {};
		
	// the default effect. nice and easy!
	$.tools.modal.addEffect('default', 
		
		function(pos, onLoad) {
			
			var conf = this.getConf(),
				 w = $(window);				 
				
			if (!conf.fixed)  {
				pos.top += w.scrollTop();
				pos.left += w.scrollLeft();
			} 
				
			pos.position = conf.fixed ? 'fixed' : 'absolute';
			this.getmodal().css(pos).fadeIn(conf.speed, onLoad); 
			
		}, function(onClose) {
			this.getmodal().fadeOut(this.getConf().closeSpeed, onClose); 			
		}		
	);		

	
	function modal(trigger, conf) {		
		
		// private variables
		var self = this,
			 fire = trigger.add(self),
			 w = $(window), 
			 closers,            
			 modal,
			 opened,
			 maskConf = $.tools.mask && (conf.mask || conf.mask),
			 uid = Math.random().toString().slice(10);		
		
			 
		// mask configuration
		if (maskConf) {			
			if (typeof maskConf == 'string') { maskConf = {color: maskConf}; }
			maskConf.closeOnClick = maskConf.closeOnEsc = false;
		}			 
		 
		// get modal and trigger
		var jq = conf.target || trigger.attr("data-modal-box");
		modal = jq ? $(jq) : null || trigger;	
		
		// modal not found. cannot continue
		if (!modal.length) { throw "Could not find modal: " + jq; }
		
		// trigger's click event
		if (trigger && trigger.index(modal) == -1) {
			trigger.click(function(e) {				
				self.load(e);
				return e.preventDefault();
			});
		}   			
		
		// API methods  
		$.extend(self, {

			load: function(e) {
				
				// can be opened only once
				if (self.isOpened()) { return self; }
				
				// find the effect
		 		var eff = effects[conf.effect];
		 		if (!eff) { throw "modal: cannot find effect : \"" + conf.effect + "\""; }
				
				// close other instances?
				if (conf.oneInstance) {
					$.each(instances, function() {
						this.close(e);
					});
				}
				
				// onBeforeLoad
				e = e || $.Event();
				e.type = "onBeforeLoad";
				fire.trigger(e);				
				if (e.isDefaultPrevented()) { return self; }				

				// opened
				opened = true;
				
				// possible mask effect
				if (maskConf) { $(modal).mask(maskConf); }				
				
				// position & dimensions 
				var top = conf.top,					
					 left = conf.left,
					 oWidth = modal.outerWidth({margin:true}),
					 oHeight = modal.outerHeight({margin:true}); 
				
				if (typeof top == 'string')  {
					top = top == 'center' ? Math.max((w.height() - oHeight) / 2, 0) : 
						parseInt(top, 10) / 100 * w.height();			
				}				
				
				if (left == 'center') { left = Math.max((w.width() - oWidth) / 2, 0); }

				
		 		// load effect  		 		
				eff[0].call(self, {top: top, left: left}, function() {					
					if (opened) {
						e.type = "onLoad";
						fire.trigger(e);
					}
				}); 				

				// mask.click closes modal
				if (maskConf && conf.closeOnClick) {
					$.mask.getMask().one("click", self.close); 
				}
				
				// when window is clicked outside modal, we close
				if (conf.closeOnClick) {
					$(document).on("click." + uid, function(e) { 
						if (!$(e.target).parents(modal).length) { 
							self.close(e); 
						}
					});						
				}						
			
				// keyboard::escape
				if (conf.closeOnEsc) { 

					// one callback is enough if multiple instances are loaded simultaneously
					$(document).on("keydown." + uid, function(e) {
						if (e.keyCode == 27) { 
							self.close(e);	 
						}
					});			
				}

				
				return self; 
			}, 
			
			close: function(e) {

				if (!self.isOpened()) { return self; }
				
				e = e || $.Event();
				e.type = "onBeforeClose";
				fire.trigger(e);				
				if (e.isDefaultPrevented()) { return; }				
				
				opened = false;
				
				// close effect
				effects[conf.effect][1].call(self, function() {
					e.type = "onClose";
					fire.trigger(e); 
				});
				
				// unbind the keyboard / clicking actions
				$(document).off("click." + uid + " keydown." + uid);		  
				
				if (maskConf) {
					$.mask.close();		
				}
				 
				return self;
			}, 
			
			getmodal: function() {
				return modal;	
			},
			
			getTrigger: function() {
				return trigger;	
			},
			
			getClosers: function() {
				return closers;	
			},			

			isOpened: function()  {
				return opened;
			},
			
			// manipulate start, finish and speeds
			getConf: function() {
				return conf;	
			}			
			
		});
		
		// callbacks	
		$.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","), function(i, name) {
				
			// configuration
			if ($.isFunction(conf[name])) { 
				$(self).on(name, conf[name]); 
			}

			// API
			self[name] = function(fn) {
				if (fn) { $(self).on(name, fn); }
				return self;
			};
		});
		
		// close button
		closers = modal.find(conf.close || ".close");		
		
		if (!closers.length && !conf.close) {
			closers = $('<a class="close"></a>');
			modal.prepend(closers);	
		}		
		
		closers.click(function(e) { 
			self.close(e);  
		});	
		
		// autoload
		if (conf.load) { self.load(); }
		
	}
	
	// jQuery plugin initialization
	$.fn.modal = function(conf) {   
		
		// already constructed --> return API
		var el = this.data("modal");
		if (el) { return el; }	  		 
		
		if ($.isFunction(conf)) {
			conf = {onBeforeLoad: conf};	
		}

		conf = $.extend(true, {}, $.tools.modal.conf, conf);
		
		this.each(function() {		
			el = new modal($(this), conf);
			instances.push(el);
			$(this).data("modal", el);	
		});
		
		return conf.api ? el: this;		
	}; 
	
})(jQuery);

