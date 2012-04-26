/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);/*
 * jQuery UI 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.1",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;/*
 * jQuery UI Slider 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	ui.core.js
 */(function(a){a.widget("ui.slider",a.extend({},a.ui.mouse,{_init:function(){var b=this,c=this.options;this._keySliding=false;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");this.range=a([]);if(c.range){if(c.range===true){this.range=a("<div></div>");if(!c.values){c.values=[this._valueMin(),this._valueMin()]}if(c.values.length&&c.values.length!=2){c.values=[c.values[0],c.values[0]]}}else{this.range=a("<div></div>")}this.range.appendTo(this.element).addClass("ui-slider-range");if(c.range=="min"||c.range=="max"){this.range.addClass("ui-slider-range-"+c.range)}this.range.addClass("ui-widget-header")}if(a(".ui-slider-handle",this.element).length==0){a('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}if(c.values&&c.values.length){while(a(".ui-slider-handle",this.element).length<c.values.length){a('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}}this.handles=a(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(d){d.preventDefault()}).hover(function(){a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");a(this).addClass("ui-state-focus")}).blur(function(){a(this).removeClass("ui-state-focus")});this.handles.each(function(d){a(this).data("index.ui-slider-handle",d)});this.handles.keydown(function(i){var f=true;var e=a(this).data("index.ui-slider-handle");if(b.options.disabled){return}switch(i.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:f=false;if(!b._keySliding){b._keySliding=true;a(this).addClass("ui-state-active");b._start(i,e)}break}var g,d,h=b._step();if(b.options.values&&b.options.values.length){g=d=b.values(e)}else{g=d=b.value()}switch(i.keyCode){case a.ui.keyCode.HOME:d=b._valueMin();break;case a.ui.keyCode.END:d=b._valueMax();break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g==b._valueMax()){return}d=g+h;break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g==b._valueMin()){return}d=g-h;break}b._slide(i,e,d);return f}).keyup(function(e){var d=a(this).data("index.ui-slider-handle");if(b._keySliding){b._stop(e,d);b._change(e,d);b._keySliding=false;a(this).removeClass("ui-state-active")}});this._refreshValue()},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy()},_mouseCapture:function(d){var e=this.options;if(e.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();var h={x:d.pageX,y:d.pageY};var j=this._normValueFromMouse(h);var c=this._valueMax()-this._valueMin()+1,f;var k=this,i;this.handles.each(function(l){var m=Math.abs(j-k.values(l));if(c>m){c=m;f=a(this);i=l}});if(e.range==true&&this.values(1)==e.min){f=a(this.handles[++i])}this._start(d,i);k._handleIndex=i;f.addClass("ui-state-active").focus();var g=f.offset();var b=!a(d.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=b?{left:0,top:0}:{left:d.pageX-g.left-(f.width()/2),top:d.pageY-g.top-(f.height()/2)-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};j=this._normValueFromMouse(h);this._slide(d,i,j);return true},_mouseStart:function(b){return true},_mouseDrag:function(d){var b={x:d.pageX,y:d.pageY};var c=this._normValueFromMouse(b);this._slide(d,this._handleIndex,c);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._handleIndex=null;this._clickOffset=null;return false},_detectOrientation:function(){this.orientation=this.options.orientation=="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(d){var c,h;if("horizontal"==this.orientation){c=this.elementSize.width;h=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{c=this.elementSize.height;h=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}var f=(h/c);if(f>1){f=1}if(f<0){f=0}if("vertical"==this.orientation){f=1-f}var e=this._valueMax()-this._valueMin(),i=f*e,b=i%this.options.step,g=this._valueMin()+i-b;if(b>(this.options.step/2)){g+=this.options.step}return parseFloat(g.toFixed(5))},_start:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("start",d,b)},_slide:function(f,e,d){var g=this.handles[e];if(this.options.values&&this.options.values.length){var b=this.values(e?0:1);if((e==0&&d>=b)||(e==1&&d<=b)){d=b}if(d!=this.values(e)){var c=this.values();c[e]=d;var h=this._trigger("slide",f,{handle:this.handles[e],value:d,values:c});var b=this.values(e?0:1);if(h!==false){this.values(e,d,(f.type=="mousedown"&&this.options.animate),true)}}}else{if(d!=this.value()){var h=this._trigger("slide",f,{handle:this.handles[e],value:d});if(h!==false){this._setData("value",d,(f.type=="mousedown"&&this.options.animate))}}}},_stop:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("stop",d,b)},_change:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("change",d,b)},value:function(b){if(arguments.length){this._setData("value",b);this._change(null,0)}return this._value()},values:function(b,e,c,d){if(arguments.length>1){this.options.values[b]=e;this._refreshValue(c);if(!d){this._change(null,b)}}if(arguments.length){if(this.options.values&&this.options.values.length){return this._values(b)}else{return this.value()}}else{return this._values()}},_setData:function(b,d,c){a.widget.prototype._setData.apply(this,arguments);switch(b){case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue(c);break;case"value":this._refreshValue(c);break}},_step:function(){var b=this.options.step;return b},_value:function(){var b=this.options.value;if(b<this._valueMin()){b=this._valueMin()}if(b>this._valueMax()){b=this._valueMax()}return b},_values:function(b){if(arguments.length){var c=this.options.values[b];if(c<this._valueMin()){c=this._valueMin()}if(c>this._valueMax()){c=this._valueMax()}return c}else{return this.options.values}},_valueMin:function(){var b=this.options.min;return b},_valueMax:function(){var b=this.options.max;return b},_refreshValue:function(c){var f=this.options.range,d=this.options,l=this;if(this.options.values&&this.options.values.length){var i,h;this.handles.each(function(p,n){var o=(l.values(p)-l._valueMin())/(l._valueMax()-l._valueMin())*100;var m={};m[l.orientation=="horizontal"?"left":"bottom"]=o+"%";a(this).stop(1,1)[c?"animate":"css"](m,d.animate);if(l.options.range===true){if(l.orientation=="horizontal"){(p==0)&&l.range.stop(1,1)[c?"animate":"css"]({left:o+"%"},d.animate);(p==1)&&l.range[c?"animate":"css"]({width:(o-lastValPercent)+"%"},{queue:false,duration:d.animate})}else{(p==0)&&l.range.stop(1,1)[c?"animate":"css"]({bottom:(o)+"%"},d.animate);(p==1)&&l.range[c?"animate":"css"]({height:(o-lastValPercent)+"%"},{queue:false,duration:d.animate})}}lastValPercent=o})}else{var j=this.value(),g=this._valueMin(),k=this._valueMax(),e=k!=g?(j-g)/(k-g)*100:0;var b={};b[l.orientation=="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[c?"animate":"css"](b,d.animate);(f=="min")&&(this.orientation=="horizontal")&&this.range.stop(1,1)[c?"animate":"css"]({width:e+"%"},d.animate);(f=="max")&&(this.orientation=="horizontal")&&this.range[c?"animate":"css"]({width:(100-e)+"%"},{queue:false,duration:d.animate});(f=="min")&&(this.orientation=="vertical")&&this.range.stop(1,1)[c?"animate":"css"]({height:e+"%"},d.animate);(f=="max")&&(this.orientation=="vertical")&&this.range[c?"animate":"css"]({height:(100-e)+"%"},{queue:false,duration:d.animate})}}}));a.extend(a.ui.slider,{getter:"value values",version:"1.7.1",eventPrefix:"slide",defaults:{animate:false,delay:0,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null}})})(jQuery);;(function(){function e(a,b){try{for(var c in b)Object.defineProperty(a.prototype,c,{value:b[c],enumerable:!1})}catch(d){a.prototype=b}}function g(a){var b=-1,c=a.length,d=[];while(++b<c)d.push(a[b]);return d}function h(a){return Array.prototype.slice.call(a)}function k(){}function n(){return this}function o(a,b,c){return function(){var d=c.apply(b,arguments);return arguments.length?a:d}}function p(a){return a!=null&&!isNaN(a)}function q(a){return a.length}function s(a){return a==null}function t(a){return a.replace(/(^\s+)|(\s+$)/g,"").replace(/\s+/g," ")}function u(a){var b=1;while(a*b%1)b*=10;return b}function x(){}function y(a){function d(){var c=b,d=-1,e=c.length,f;while(++d<e)(f=c[d].on)&&f.apply(this,arguments);return a}var b=[],c=new k;return d.on=function(d,e){var f=c.get(d),g;return arguments.length<2?f&&f.on:(f&&(f.on=null,b=b.slice(0,g=b.indexOf(f)).concat(b.slice(g+1)),c.remove(d)),e&&b.push(c.set(d,{on:e})),a)},d}function B(a,b){return b-(a?1+Math.floor(Math.log(a+Math.pow(10,1+Math.floor(Math.log(a)/Math.LN10)-b))/Math.LN10):1)}function C(a){return a+""}function D(a){var b=a.lastIndexOf("."),c=b>=0?a.substring(b):(b=a.length,""),d=[];while(b>0)d.push(a.substring(b-=3,b+3));return d.reverse().join(",")+c}function F(a,b){return{scale:Math.pow(10,(8-b)*3),symbol:a}}function L(a){return function(b){return b<=0?0:b>=1?1:a(b)}}function M(a){return function(b){return 1-a(1-b)}}function N(a){return function(b){return.5*(b<.5?a(2*b):2-a(2-2*b))}}function O(a){return a}function P(a){return function(b){return Math.pow(b,a)}}function Q(a){return 1-Math.cos(a*Math.PI/2)}function R(a){return Math.pow(2,10*(a-1))}function S(a){return 1-Math.sqrt(1-a*a)}function T(a,b){var c;return arguments.length<2&&(b=.45),arguments.length<1?(a=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/a),function(d){return 1+a*Math.pow(2,10*-d)*Math.sin((d-c)*2*Math.PI/b)}}function U(a){return a||(a=1.70158),function(b){return b*b*((a+1)*b-a)}}function V(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}function W(){d3.event.stopPropagation(),d3.event.preventDefault()}function X(){var a=d3.event,b;while(b=a.sourceEvent)a=b;return a}function Y(a){var b=new x,c=0,d=arguments.length;while(++c<d)b[arguments[c]]=y(b);return b.of=function(c,d){return function(e){try{var f=e.sourceEvent=d3.event;e.target=a,d3.event=e,b[e.type].apply(c,d)}finally{d3.event=f}}},b}function $(a){return a=="transform"?d3.interpolateTransform:d3.interpolate}function _(a,b){return b=b-(a=+a)?1/(b-a):0,function(c){return(c-a)*b}}function ba(a,b){return b=b-(a=+a)?1/(b-a):0,function(c){return Math.max(0,Math.min(1,(c-a)*b))}}function bb(a,b,c){return new bc(a,b,c)}function bc(a,b,c){this.r=a,this.g=b,this.b=c}function bd(a){return a<16?"0"+Math.max(0,a).toString(16):Math.min(255,a).toString(16)}function be(a,b,c){var d=0,e=0,f=0,g,h,i;g=/([a-z]+)\((.*)\)/i.exec(a);if(g){h=g[2].split(",");switch(g[1]){case"hsl":return c(parseFloat(h[0]),parseFloat(h[1])/100,parseFloat(h[2])/100);case"rgb":return b(bg(h[0]),bg(h[1]),bg(h[2]))}}return(i=bh.get(a))?b(i.r,i.g,i.b):(a!=null&&a.charAt(0)==="#"&&(a.length===4?(d=a.charAt(1),d+=d,e=a.charAt(2),e+=e,f=a.charAt(3),f+=f):a.length===7&&(d=a.substring(1,3),e=a.substring(3,5),f=a.substring(5,7)),d=parseInt(d,16),e=parseInt(e,16),f=parseInt(f,16)),b(d,e,f))}function bf(a,b,c){var d=Math.min(a/=255,b/=255,c/=255),e=Math.max(a,b,c),f=e-d,g,h,i=(e+d)/2;return f?(h=i<.5?f/(e+d):f/(2-e-d),a==e?g=(b-c)/f+(b<c?6:0):b==e?g=(c-a)/f+2:g=(a-b)/f+4,g*=60):h=g=0,bi(g,h,i)}function bg(a){var b=parseFloat(a);return a.charAt(a.length-1)==="%"?Math.round(b*2.55):b}function bi(a,b,c){return new bj(a,b,c)}function bj(a,b,c){this.h=a,this.s=b,this.l=c}function bk(a,b,c){function f(a){return a>360?a-=360:a<0&&(a+=360),a<60?d+(e-d)*a/60:a<180?e:a<240?d+(e-d)*(240-a)/60:d}function g(a){return Math.round(f(a)*255)}var d,e;return a%=360,a<0&&(a+=360),b=b<0?0:b>1?1:b,c=c<0?0:c>1?1:c,e=c<=.5?c*(1+b):c+b-c*b,d=2*c-e,bb(g(a+120),g(a),g(a-120))}function bl(a){return j(a,br),a}function bs(a){return function(){return bm(a,this)}}function bt(a){return function(){return bn(a,this)}}function bv(a,b){function f(){if(b=this.classList)return b.add(a);var b=this.className,d=b.baseVal!=null,e=d?b.baseVal:b;c.lastIndex=0,c.test(e)||(e=t(e+" "+a),d?b.baseVal=e:this.className=e)}function g(){if(b=this.classList)return b.remove(a);var b=this.className,d=b.baseVal!=null,e=d?b.baseVal:b;e=t(e.replace(c," ")),d?b.baseVal=e:this.className=e}function h(){(b.apply(this,arguments)?f:g).call(this)}var c=new RegExp("(^|\\s+)"+d3.requote(a)+"(\\s+|$)","g");if(arguments.length<2){var d=this.node();if(e=d.classList)return e.contains(a);var e=d.className;return c.lastIndex=0,c.test(e.baseVal!=null?e.baseVal:e)}return this.each(typeof b=="function"?h:b?f:g)}function bw(a){return{__data__:a}}function bx(a){return function(){return bq(this,a)}}function by(a){return arguments.length||(a=d3.ascending),function(b,c){return a(b&&b.__data__,c&&c.__data__)}}function bA(a){return j(a,bB),a}function bC(a,b,c){j(a,bG);var d=new k,e=d3.dispatch("start","end"),f=bO;return a.id=b,a.time=c,a.tween=function(b,c){return arguments.length<2?d.get(b):(c==null?d.remove(b):d.set(b,c),a)},a.ease=function(b){return arguments.length?(f=typeof b=="function"?b:d3.ease.apply(d3,arguments),a):f},a.each=function(b,c){return arguments.length<2?bP.call(a,b):(e.on(b,c),a)},d3.timer(function(g){return a.each(function(h,i,j){function p(a){return o.active>b?r():(o.active=b,d.forEach(function(a,b){(tween=b.call(l,h,i))&&k.push(tween)}),e.start.call(l,h,i),q(a)||d3.timer(q,0,c),1)}function q(a){if(o.active!==b)return r();var c=(a-m)/n,d=f(c),g=k.length;while(g>0)k[--g].call(l,d);if(c>=1)return r(),bI=b,e.end.call(l,h,i),bI=0,1}function r(){return--o.count||delete l.__transition__,1}var k=[],l=this,m=a[j][i].delay,n=a[j][i].duration,o=l.__transition__||(l.__transition__={active:0,count:0});++o.count,m<=g?p(g):d3.timer(p,m,c)}),1},0,c),a}function bE(a,b,c){return c!=""&&bD}function bF(a,b){function d(a,d,e){var f=b.call(this,a,d);return f==null?e!=""&&bD:e!=f&&c(e,f)}function e(a,d,e){return e!=b&&c(e,b)}var c=$(a);return typeof b=="function"?d:b==null?bE:(b+="",e)}function bP(a){var b=bI,c=bO,d=bM,e=bN;bI=this.id,bO=this.ease();for(var f=0,g=this.length;f<g;f++)for(var h=this[f],i=0,j=h.length;i<j;i++){var k=h[i];k&&(bM=this[f][i].delay,bN=this[f][i].duration,a.call(k=k.node,k.__data__,i,f))}return bI=b,bO=c,bM=d,bN=e,this}function bT(){var a,b=Date.now(),c=bQ;while(c)a=b-c.then,a>=c.delay&&(c.flush=c.callback(a)),c=c.next;var d=bU()-b;d>24?(isFinite(d)&&(clearTimeout(bS),bS=setTimeout(bT,d)),bR=0):(bR=1,bV(bT))}function bU(){var a=null,b=bQ,c=Infinity;while(b)b.flush?b=a?a.next=b.next:bQ=b.next:(c=Math.min(c,b.then+b.delay),b=(a=b).next);return c}function bW(a){var b=[a.a,a.b],c=[a.c,a.d],d=bY(b),e=bX(b,c),f=bY(bZ(c,b,-e))||0;b[0]*c[1]<c[0]*b[1]&&(b[0]*=-1,b[1]*=-1,d*=-1,e*=-1),this.rotate=(d?Math.atan2(b[1],b[0]):Math.atan2(-c[0],c[1]))*b$,this.translate=[a.e,a.f],this.scale=[d,f],this.skew=f?Math.atan2(e,f)*b$:0}function bX(a,b){return a[0]*b[0]+a[1]*b[1]}function bY(a){var b=Math.sqrt(bX(a,a));return b&&(a[0]/=b,a[1]/=b),b}function bZ(a,b,c){return a[0]+=c*b[0],a[1]+=c*b[1],a}function ca(a,b){var c=a.ownerSVGElement||a;if(c.createSVGPoint){var d=c.createSVGPoint();if(b_<0&&(window.scrollX||window.scrollY)){c=d3.select(document.body).append("svg").style("position","absolute").style("top",0).style("left",0);var e=c[0][0].getScreenCTM();b_=!e.f&&!e.e,c.remove()}return b_?(d.x=b.pageX,d.y=b.pageY):(d.x=b.clientX,d.y=b.clientY),d=d.matrixTransform(a.getScreenCTM().inverse()),[d.x,d.y]}var f=a.getBoundingClientRect();return[b.clientX-f.left-a.clientLeft,b.clientY-f.top-a.clientTop]}function cb(){}function cc(a){var b=a[0],c=a[a.length-1];return b<c?[b,c]:[c,b]}function cd(a){return a.rangeExtent?a.rangeExtent():cc(a.range())}function ce(a,b){var c=0,d=a.length-1,e=a[c],f=a[d],g;f<e&&(g=c,c=d,d=g,g=e,e=f,f=g);if(g=f-e)b=b(g),a[c]=b.floor(e),a[d]=b.ceil(f);return a}function cf(){return Math}function cg(a,b,c,d){function g(){var g=Math.min(a.length,b.length)>2?cn:cm,i=d?ba:_;return e=g(a,b,i,c),f=g(b,a,i,d3.interpolate),h}function h(a){return e(a)}var e,f;return h.invert=function(a){return f(a)},h.domain=function(b){return arguments.length?(a=b.map(Number),g()):a},h.range=function(a){return arguments.length?(b=a,g()):b},h.rangeRound=function(a){return h.range(a).interpolate(d3.interpolateRound)},h.clamp=function(a){return arguments.length?(d=a,g()):d},h.interpolate=function(a){return arguments.length?(c=a,g()):c},h.ticks=function(b){return ck(a,b)},h.tickFormat=function(b){return cl(a,b)},h.nice=function(){return ce(a,ci),g()},h.copy=function(){return cg(a,b,c,d)},g()}function ch(a,b){return d3.rebind(a,b,"range","rangeRound","interpolate","clamp")}function ci(a){return a=Math.pow(10,Math.round(Math.log(a)/Math.LN10)-1),{floor:function(b){return Math.floor(b/a)*a},ceil:function(b){return Math.ceil(b/a)*a}}}function cj(a,b){var c=cc(a),d=c[1]-c[0],e=Math.pow(10,Math.floor(Math.log(d/b)/Math.LN10)),f=b/d*e;return f<=.15?e*=10:f<=.35?e*=5:f<=.75&&(e*=2),c[0]=Math.ceil(c[0]/e)*e,c[1]=Math.floor(c[1]/e)*e+e*.5,c[2]=e,c}function ck(a,b){return d3.range.apply(d3,cj(a,b))}function cl(a,b){return d3.format(",."+Math.max(0,-Math.floor(Math.log(cj(a,b)[2])/Math.LN10+.01))+"f")}function cm(a,b,c,d){var e=c(a[0],a[1]),f=d(b[0],b[1]);return function(a){return f(e(a))}}function cn(a,b,c,d){var e=[],f=[],g=0,h=Math.min(a.length,b.length)-1;a[h]<a[0]&&(a=a.slice().reverse(),b=b.slice().reverse());while(++g<=h)e.push(c(a[g-1],a[g])),f.push(d(b[g-1],b[g]));return function(b){var c=d3.bisect(a,b,1,h)-1;return f[c](e[c](b))}}function co(a,b){function d(c){return a(b(c))}var c=b.pow;return d.invert=function(b){return c(a.invert(b))},d.domain=function(e){return arguments.length?(b=e[0]<0?cr:cq,c=b.pow,a.domain(e.map(b)),d):a.domain().map(c)},d.nice=function(){return a.domain(ce(a.domain(),cf)),d},d.ticks=function(){var d=cc(a.domain()),e=[];if(d.every(isFinite)){var f=Math.floor(d[0]),g=Math.ceil(d[1]),h=c(d[0]),i=c(d[1]);if(b===cr){e.push(c(f));for(;f++<g;)for(var j=9;j>0;j--)e.push(c(f)*j)}else{for(;f<g;f++)for(var j=1;j<10;j++)e.push(c(f)*j);e.push(c(f))}for(f=0;e[f]<h;f++);for(g=e.length;e[g-1]>i;g--);e=e.slice(f,g)}return e},d.tickFormat=function(a,e){arguments.length<2&&(e=cp);if(arguments.length<1)return e;var f=a/d.ticks().length,g=b===cr?(h=-1e-12,Math.floor):(h=1e-12,Math.ceil),h;return function(a){return a/c(g(b(a)+h))<f?e(a):""}},d.copy=function(){return co(a.copy(),b)},ch(d,a)}function cq(a){return Math.log(a<0?0:a)/Math.LN10}function cr(a){return-Math.log(a>0?0:-a)/Math.LN10}function cs(a,b){function e(b){return a(c(b))}var c=ct(b),d=ct(1/b);return e.invert=function(b){return d(a.invert(b))},e.domain=function(b){return arguments.length?(a.domain(b.map(c)),e):a.domain().map(d)},e.ticks=function(a){return ck(e.domain(),a)},e.tickFormat=function(a){return cl(e.domain(),a)},e.nice=function(){return e.domain(ce(e.domain(),ci))},e.exponent=function(a){if(!arguments.length)return b;var f=e.domain();return c=ct(b=a),d=ct(1/b),e.domain(f)},e.copy=function(){return cs(a.copy(),b)},ch(e,a)}function ct(a){return function(b){return b<0?-Math.pow(-b,a):Math.pow(b,a)}}function cu(a,b){function f(b){return d[((c.get(b)||c.set(b,a.push(b)))-1)%d.length]}function g(b,c){return d3.range(a.length).map(function(a){return b+c*a})}var c,d,e;return f.domain=function(d){if(!arguments.length)return a;a=[],c=new k;var e=-1,g=d.length,h;while(++e<g)c.has(h=d[e])||c.set(h,a.push(h));return f[b.t](b.x,b.p)},f.range=function(a){return arguments.length?(d=a,e=0,b={t:"range",x:a},f):d},f.rangePoints=function(c,h){arguments.length<2&&(h=0);var i=c[0],j=c[1],k=(j-i)/(a.length-1+h);return d=g(a.length<2?(i+j)/2:i+k*h/2,k),e=0,b={t:"rangePoints",x:c,p:h},f},f.rangeBands=function(c,h){arguments.length<2&&(h=0);var i=c[1]<c[0],j=c[i-0],k=c[1-i],l=(k-j)/(a.length+h);return d=g(j+l*h,l),i&&d.reverse(),e=l*(1-h),b={t:"rangeBands",x:c,p:h},f},f.rangeRoundBands=function(c,h){arguments.length<2&&(h=0);var i=c[1]<c[0],j=c[i-0],k=c[1-i],l=Math.floor((k-j)/(a.length+h)),m=k-j-(a.length-h)*l;return d=g(j+Math.round(m/2),l),i&&d.reverse(),e=Math.round(l*(1-h)),b={t:"rangeRoundBands",x:c,p:h},f},f.rangeBand=function(){return e},f.rangeExtent=function(){return cc(b.x)},f.copy=function(){return cu(a,b)},f.domain(a)}function cz(a,b){function d(){var d=0,f=a.length,g=b.length;c=[];while(++d<g)c[d-1]=d3.quantile(a,d/g);return e}function e(a){return isNaN(a=+a)?NaN:b[d3.bisect(c,a)]}var c;return e.domain=function(b){return arguments.length?(a=b.filter(function(a){return!isNaN(a)}).sort(d3.ascending),d()):a},e.range=function(a){return arguments.length?(b=a,d()):b},e.quantiles=function(){return c},e.copy=function(){return cz(a,b)},d()}function cA(a,b,c){function f(b){return c[Math.max(0,Math.min(e,Math.floor(d*(b-a))))]}function g(){return d=c.length/(b-a),e=c.length-1,f}var d,e;return f.domain=function(c){return arguments.length?(a=+c[0],b=+c[c.length-1],g()):[a,b]},f.range=function(a){return arguments.length?(c=a,g()):c},f.copy=function(){return cA(a,b,c)},g()}function cB(a){function b(a){return+a}return b.invert=b,b.domain=b.range=function(c){return arguments.length?(a=c.map(b),b):a},b.ticks=function(b){return ck(a,b)},b.tickFormat=function(b){return cl(a,b)},b.copy=function(){return cB(a)},b}function cE(a){return a.innerRadius}function cF(a){return a.outerRadius}function cG(a){return a.startAngle}function cH(a){return a.endAngle}function cI(a){function g(d){return d.length<1?null:"M"+e(a(cJ(this,d,b,c)),f)}var b=cK,c=cL,d=cM,e=cN.get(d),f=.7;return g.x=function(a){return arguments.length?(b=a,g):b},g.y=function(a){return arguments.length?(c=a,g):c},g.interpolate=function(a){return arguments.length?(cN.has(a+="")||(a=cM),e=cN.get(d=a),g):d},g.tension=function(a){return arguments.length?(f=a,g):f},g}function cJ(a,b,c,d){var e=[],f=-1,g=b.length,h=typeof c=="function",i=typeof d=="function",j;if(h&&i)while(++f<g)e.push([c.call(a,j=b[f],f),d.call(a,j,f)]);else if(h)while(++f<g)e.push([c.call(a,b[f],f),d]);else if(i)while(++f<g)e.push([c,d.call(a,b[f],f)]);else while(++f<g)e.push([c,d]);return e}function cK(a){return a[0]}function cL(a){return a[1]}function cO(a){var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];while(++b<c)e.push("L",(d=a[b])[0],",",d[1]);return e.join("")}function cP(a){var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];while(++b<c)e.push("V",(d=a[b])[1],"H",d[0]);return e.join("")}function cQ(a){var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];while(++b<c)e.push("H",(d=a[b])[0],"V",d[1]);return e.join("")}function cR(a,b){return a.length<4?cO(a):a[1]+cU(a.slice(1,a.length-1),cV(a,b))}function cS(a,b){return a.length<3?cO(a):a[0]+cU((a.push(a[0]),a),cV([a[a.length-2]].concat(a,[a[1]]),b))}function cT(a,b,c){return a.length<3?cO(a):a[0]+cU(a,cV(a,b))}function cU(a,b){if(b.length<1||a.length!=b.length&&a.length!=b.length+2)return cO(a);var c=a.length!=b.length,d="",e=a[0],f=a[1],g=b[0],h=g,i=1;c&&(d+="Q"+(f[0]-g[0]*2/3)+","+(f[1]-g[1]*2/3)+","+f[0]+","+f[1],e=a[1],i=2);if(b.length>1){h=b[1],f=a[i],i++,d+="C"+(e[0]+g[0])+","+(e[1]+g[1])+","+(f[0]-h[0])+","+(f[1]-h[1])+","+f[0]+","+f[1];for(var j=2;j<b.length;j++,i++)f=a[i],h=b[j],d+="S"+(f[0]-h[0])+","+(f[1]-h[1])+","+f[0]+","+f[1]}if(c){var k=a[i];d+="Q"+(f[0]+h[0]*2/3)+","+(f[1]+h[1]*2/3)+","+k[0]+","+k[1]}return d}function cV(a,b){var c=[],d=(1-b)/2,e,f=a[0],g=a[1],h=1,i=a.length;while(++h<i)e=f,f=g,g=a[h],c.push([d*(g[0]-e[0]),d*(g[1]-e[1])]);return c}function cW(a){if(a.length<3)return cO(a);var b=1,c=a.length,d=a[0],e=d[0],f=d[1],g=[e,e,e,(d=a[1])[0]],h=[f,f,f,d[1]],i=[e,",",f];dc(i,g,h);while(++b<c)d=a[b],g.shift(),g.push(d[0]),h.shift(),h.push(d[1]),dc(i,g,h);b=-1;while(++b<2)g.shift(),g.push(d[0]),h.shift(),h.push(d[1]),dc(i,g,h);return i.join("")}function cX(a){if(a.length<4)return cO(a);var b=[],c=-1,d=a.length,e,f=[0],g=[0];while(++c<3)e=a[c],f.push(e[0]),g.push(e[1]);b.push(c$(db,f)+","+c$(db,g)),--c;while(++c<d)e=a[c],f.shift(),f.push(e[0]),g.shift(),g.push(e[1]),dc(b,f,g);return b.join("")}function cY(a){var b,c=-1,d=a.length,e=d+4,f,g=[],h=[];while(++c<4)f=a[c%d],g.push(f[0]),h.push(f[1]);b=[c$(db,g),",",c$(db,h)],--c;while(++c<e)f=a[c%d],g.shift(),g.push(f[0]),h.shift(),h.push(f[1]),dc(b,g,h);return b.join("")}function cZ(a,b){var c=a.length-1,d=a[0][0],e=a[0][1],f=a[c][0]-d,g=a[c][1]-e,h=-1,i,j;while(++h<=c)i=a[h],j=h/c,i[0]=b*i[0]+(1-b)*(d+j*f),i[1]=b*i[1]+(1-b)*(e+j*g);return cW(a)}function c$(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]}function dc(a,b,c){a.push("C",c$(c_,b),",",c$(c_,c),",",c$(da,b),",",c$(da,c),",",c$(db,b),",",c$(db,c))}function dd(a,b){return(b[1]-a[1])/(b[0]-a[0])}function de(a){var b=0,c=a.length-1,d=[],e=a[0],f=a[1],g=d[0]=dd(e,f);while(++b<c)d[b]=g+(g=dd(e=f,f=a[b+1]));return d[b]=g,d}function df(a){var b=[],c,d,e,f,g=de(a),h=-1,i=a.length-1;while(++h<i)c=dd(a[h],a[h+1]),Math.abs(c)<1e-6?g[h]=g[h+1]=0:(d=g[h]/c,e=g[h+1]/c,f=d*d+e*e,f>9&&(f=c*3/Math.sqrt(f),g[h]=f*d,g[h+1]=f*e));h=-1;while(++h<=i)f=(a[Math.min(i,h+1)][0]-a[Math.max(0,h-1)][0])/(6*(1+g[h]*g[h])),b.push([f||0,g[h]*f||0]);return b}function dg(a){return a.length<3?cO(a):a[0]+cU(a,df(a))}function dh(a){var b,c=-1,d=a.length,e,f;while(++c<d)b=a[c],e=b[0],f=b[1]+cC,b[0]=e*Math.cos(f),b[1]=e*Math.sin(f);return a}function di(a){function j(f){if(f.length<1)return null;var j=cJ(this,f,b,d),k=cJ(this,f,b===c?dj(j):c,d===e?dk(j):e);return"M"+g(a(k),i)+"L"+h(a(j.reverse()),i)+"Z"}var b=cK,c=cK,d=0,e=cL,f,g,h,i=.7;return j.x=function(a){return arguments.length?(b=c=a,j):c},j.x0=function(a){return arguments.length?(b=a,j):b},j.x1=function(a){return arguments.length?(c=a,j):c},j.y=function(a){return arguments.length?(d=e=a,j):e},j.y0=function(a){return arguments.length?(d=a,j):d},j.y1=function(a){return arguments.length?(e=a,j):e},j.interpolate=function(a){return arguments.length?(cN.has(a+="")||(a=cM),g=cN.get(f=a),h=g.reverse||g,j):f},j.tension=function(a){return arguments.length?(i=a,j):i},j.interpolate("linear")}function dj(a){return function(b,c){return a[c][0]}}function dk(a){return function(b,c){return a[c][1]}}function dl(a){return a.source}function dm(a){return a.target}function dn(a){return a.radius}function dp(a){return a.startAngle}function dq(a){return a.endAngle}function dr(a){return[a.x,a.y]}function ds(a){return function(){var b=a.apply(this,arguments),c=b[0],d=b[1]+cC;return[c*Math.cos(d),c*Math.sin(d)]}}function dt(){return 64}function du(){return"circle"}function dv(a){var b=Math.sqrt(a/Math.PI);return"M0,"+b+"A"+b+","+b+" 0 1,1 0,"+ -b+"A"+b+","+b+" 0 1,1 0,"+b+"Z"}function dz(a,b){a.attr("transform",function(a){return"translate("+b(a)+",0)"})}function dA(a,b){a.attr("transform",function(a){return"translate(0,"+b(a)+")"})}function dB(a,b,c){e=[];if(c&&b.length>1){var d=cc(a.domain()),e,f=-1,g=b.length,h=(b[1]-b[0])/++c,i,j;while(++f<g)for(i=c;--i>0;)(j=+b[f]-i*h)>=d[0]&&e.push(j);for(--f,i=0;++i<c&&(j=+b[f]+i*h)<d[1];)e.push(j)}return e}function dG(){dE||(dE=d3.select("body").append("div").style("visibility","hidden").style("top",0).style("height",0).style("width",0).style("overflow-y","scroll").append("div").style("height","2000px").node().parentNode);var a=d3.event,b;try{dE.scrollTop=1e3,dE.dispatchEvent(a),b=1e3-dE.scrollTop}catch(c){b=a.wheelDelta||-a.detail*5}return b}function dH(a){var b=a.source,c=a.target,d=dJ(b,c),e=[b];while(b!==d)b=b.parent,e.push(b);var f=e.length;while(c!==d)e.splice(f,0,c),c=c.parent;return e}function dI(a){var b=[],c=a.parent;while(c!=null)b.push(a),a=c,c=c.parent;return b.push(a),b}function dJ(a,b){if(a===b)return a;var c=dI(a),d=dI(b),e=c.pop(),f=d.pop(),g=null;while(e===f)g=e,e=c.pop(),f=d.pop();return g}function dM(a){a.fixed|=2}function dN(a){a!==dL&&(a.fixed&=1)}function dO(){dL.fixed&=1,dK=dL=null}function dP(){dL.px=d3.event.x,dL.py=d3.event.y,dK.resume()}function dQ(a,b,c){var d=0,e=0;a.charge=0;if(!a.leaf){var f=a.nodes,g=f.length,h=-1,i;while(++h<g){i=f[h];if(i==null)continue;dQ(i,b,c),a.charge+=i.charge,d+=i.charge*i.cx,e+=i.charge*i.cy}}if(a.point){a.leaf||(a.point.x+=Math.random()-.5,a.point.y+=Math.random()-.5);var j=b*c[a.point.index];a.charge+=a.pointCharge=j,d+=j*a.point.x,e+=j*a.point.y}a.cx=d/a.charge,a.cy=e/a.charge}function dR(a){return 20}function dS(a){return 1}function dU(a){return a.x}function dV(a){return a.y}function dW(a,b,c){a.y0=b,a.y=c}function dZ(a){return d3.range(a.length)}function d$(a){var b=-1,c=a[0].length,d=[];while(++b<c)d[b]=0;return d}function d_(a){var b=1,c=0,d=a[0][1],e,f=a.length;for(;b<f;++b)(e=a[b][1])>d&&(c=b,d=e);return c}function ea(a){return a.reduce(eb,0)}function eb(a,b){return a+b[1]}function ec(a,b){return ed(a,Math.ceil(Math.log(b.length)/Math.LN2+1))}function ed(a,b){var c=-1,d=+a[0],e=(a[1]-d)/b,f=[];while(++c<=b)f[c]=e*c+d;return f}function ee(a){return[d3.min(a),d3.max(a)]}function ef(a,b){return d3.rebind(a,b,"sort","children","value"),a.links=ej,a.nodes=function(b){return ek=!0,(a.nodes=a)(b)},a}function eg(a){return a.children}function eh(a){return a.value}function ei(a,b){return b.value-a.value}function ej(a){return d3.merge(a.map(function(a){return(a.children||[]).map(function(b){return{source:a,target:b}})}))}function el(a,b){return a.value-b.value}function em(a,b){var c=a._pack_next;a._pack_next=b,b._pack_prev=a,b._pack_next=c,c._pack_prev=b}function en(a,b){a._pack_next=b,b._pack_prev=a}function eo(a,b){var c=b.x-a.x,d=b.y-a.y,e=a.r+b.r;return e*e-c*c-d*d>.001}function ep(a){function l(a){b=Math.min(a.x-a.r,b),c=Math.max(a.x+a.r,c),d=Math.min(a.y-a.r,d),e=Math.max(a.y+a.r,e)}var b=Infinity,c=-Infinity,d=Infinity,e=-Infinity,f=a.length,g,h,i,j,k;a.forEach(eq),g=a[0],g.x=-g.r,g.y=0,l(g);if(f>1){h=a[1],h.x=h.r,h.y=0,l(h);if(f>2){i=a[2],eu(g,h,i),l(i),em(g,i),g._pack_prev=i,em(i,h),h=g._pack_next;for(var m=3;m<f;m++){eu(g,h,i=a[m]);var n=0,o=1,p=1;for(j=h._pack_next;j!==h;j=j._pack_next,o++)if(eo(j,i)){n=1;break}if(n==1)for(k=g._pack_prev;k!==j._pack_prev;k=k._pack_prev,p++)if(eo(k,i))break;n?(o<p||o==p&&h.r<g.r?en(g,h=j):en(g=k,h),m--):(em(g,i),h=i,l(i))}}}var q=(b+c)/2,r=(d+e)/2,s=0;for(var m=0;m<f;m++){var t=a[m];t.x-=q,t.y-=r,s=Math.max(s,t.r+Math.sqrt(t.x*t.x+t.y*t.y))}return a.forEach(er),s}function eq(a){a._pack_next=a._pack_prev=a}function er(a){delete a._pack_next,delete a._pack_prev}function es(a){var b=a.children;b&&b.length?(b.forEach(es),a.r=ep(b)):a.r=Math.sqrt(a.value)}function et(a,b,c,d){var e=a.children;a.x=b+=d*a.x,a.y=c+=d*a.y,a.r*=d;if(e){var f=-1,g=e.length;while(++f<g)et(e[f],b,c,d)}}function eu(a,b,c){var d=a.r+c.r,e=b.x-a.x,f=b.y-a.y;if(d&&(e||f)){var g=b.r+c.r,h=Math.sqrt(e*e+f*f),i=Math.max(-1,Math.min(1,(d*d+h*h-g*g)/(2*d*h))),j=Math.acos(i),k=i*(d/=h),l=Math.sin(j)*d;c.x=a.x+k*e+l*f,c.y=a.y+k*f-l*e}else c.x=a.x+d,c.y=a.y}function ev(a){return 1+d3.max(a,function(a){return a.y})}function ew(a){return a.reduce(function(a,b){return a+b.x},0)/a.length}function ex(a){var b=a.children;return b&&b.length?ex(b[0]):a}function ey(a){var b=a.children,c;return b&&(c=b.length)?ey(b[c-1]):a}function ez(a,b){return a.parent==b.parent?1:2}function eA(a){var b=a.children;return b&&b.length?b[0]:a._tree.thread}function eB(a){var b=a.children,c;return b&&(c=b.length)?b[c-1]:a._tree.thread}function eC(a,b){var c=a.children;if(c&&(e=c.length)){var d,e,f=-1;while(++f<e)b(d=eC(c[f],b),a)>0&&(a=d)}return a}function eD(a,b){return a.x-b.x}function eE(a,b){return b.x-a.x}function eF(a,b){return a.depth-b.depth}function eG(a,b){function c(a,d){var e=a.children;if(e&&(i=e.length)){var f,g=null,h=-1,i;while(++h<i)f=e[h],c(f,g),g=f}b(a,d)}c(a,null)}function eH(a){var b=0,c=0,d=a.children,e=d.length,f;while(--e>=0)f=d[e]._tree,f.prelim+=b,f.mod+=b,b+=f.shift+(c+=f.change)}function eI(a,b,c){a=a._tree,b=b._tree;var d=c/(b.number-a.number);a.change+=d,b.change-=d,b.shift+=c,b.prelim+=c,b.mod+=c}function eJ(a,b,c){return a._tree.ancestor.parent==b.parent?a._tree.ancestor:c}function eK(a){return{x:a.x,y:a.y,dx:a.dx,dy:a.dy}}function eL(a,b){var c=a.x+b[3],d=a.y+b[0],e=a.dx-b[1]-b[3],f=a.dy-b[0]-b[2];return e<0&&(c+=e/2,e=0),f<0&&(d+=f/2,f=0),{x:c,y:d,dx:e,dy:f}}function eM(a){return a.map(eN).join(",")}function eN(a){return/[",\n]/.test(a)?'"'+a.replace(/\"/g,'""')+'"':a}function eP(a,b){return function(c){return c&&a.hasOwnProperty(c.type)?a[c.type](c):b}}function eQ(a){return"m0,"+a+"a"+a+","+a+" 0 1,1 0,"+ -2*a+"a"+a+","+a+" 0 1,1 0,"+2*a+"z"}function eR(a,b){eS.hasOwnProperty(a.type)&&eS[a.type](a,b)}function eT(a,b){eR(a.geometry,b)}function eU(a,b){for(var c=a.features,d=0,e=c.length;d<e;d++)eR(c[d].geometry,b)}function eV(a,b){for(var c=a.geometries,d=0,e=c.length;d<e;d++)eR(c[d],b)}function eW(a,b){for(var c=a.coordinates,d=0,e=c.length;d<e;d++)b.apply(null,c[d])}function eX(a,b){for(var c=a.coordinates,d=0,e=c.length;d<e;d++)for(var f=c[d],g=0,h=f.length;g<h;g++)b.apply(null,f[g])}function eY(a,b){for(var c=a.coordinates,d=0,e=c.length;d<e;d++)for(var f=c[d][0],g=0,h=f.length;g<h;g++)b.apply(null,f[g])}function eZ(a,b){b.apply(null,a.coordinates)}function e$(a,b){for(var c=a.coordinates[0],d=0,e=c.length;d<e;d++)b.apply(null,c[d])}function e_(a){return a.source}function fa(a){return a.target}function fb(a,b){function q(a){var b=Math.sin(o-(a*=o))/p,c=Math.sin(a)/p,f=b*g*d+c*m*j,i=b*g*e+c*m*k,l=b*h+c*n;return[Math.atan2(i,f)/eO,Math.atan2(l,Math.sqrt(f*f+i*i))/eO]}var c=a[0]*eO,d=Math.cos(c),e=Math.sin(c),f=a[1]*eO,g=Math.cos(f),h=Math.sin(f),i=b[0]*eO,j=Math.cos(i),k=Math.sin(i),l=b[1]*eO,m=Math.cos(l),n=Math.sin(l),o=q.d=Math.acos(Math.max(-1,Math.min(1,h*n+g*m*Math.cos(i-c)))),p=Math.sin(o);return q}function fe(a){var b=0,c=0;for(;;){if(a(b,c))return[b,c];b===0?(b=c+1,c=0):(b-=1,c+=1)}}function ff(a,b,c,d){var e,f,g,h,i,j,k;return e=d[a],f=e[0],g=e[1],e=d[b],h=e[0],i=e[1],e=d[c],j=e[0],k=e[1],(k-g)*(h-f)-(i-g)*(j-f)>0}function fg(a,b,c){return(c[0]-b[0])*(a[1]-b[1])<(c[1]-b[1])*(a[0]-b[0])}function fh(a,b,c,d){var e=a[0],f=b[0],g=c[0],h=d[0],i=a[1],j=b[1],k=c[1],l=d[1],m=e-g,n=f-e,o=h-g,p=i-k,q=j-i,r=l-k,s=(o*p-r*m)/(r*n-o*q);return[e+s*n,i+s*q]}function fj(a,b){var c={list:a.map(function(a,b){return{index:b,x:a[0],y:a[1]}}).sort(function(a,b){return a.y<b.y?-1:a.y>b.y?1:a.x<b.x?-1:a.x>b.x?1:0}),bottomSite:null},d={list:[],leftEnd:null,rightEnd:null,init:function(){d.leftEnd=d.createHalfEdge(null,"l"),d.rightEnd=d.createHalfEdge(null,"l"),d.leftEnd.r=d.rightEnd,d.rightEnd.l=d.leftEnd,d.list.unshift(d.leftEnd,d.rightEnd)},createHalfEdge:function(a,b){return{edge:a,side:b,vertex:null,l:null,r:null}},insert:function(a,b){b.l=a,b.r=a.r,a.r.l=b,a.r=b},leftBound:function(a){var b=d.leftEnd;do b=b.r;while(b!=d.rightEnd&&e.rightOf(b,a));return b=b.l,b},del:function(a){a.l.r=a.r,a.r.l=a.l,a.edge=null},right:function(a){return a.r},left:function(a){return a.l},leftRegion:function(a){return a.edge==null?c.bottomSite:a.edge.region[a.side]},rightRegion:function(a){return a.edge==null?c.bottomSite:a.edge.region[fi[a.side]]}},e={bisect:function(a,b){var c={region:{l:a,r:b},ep:{l:null,r:null}},d=b.x-a.x,e=b.y-a.y,f=d>0?d:-d,g=e>0?e:-e;return c.c=a.x*d+a.y*e+(d*d+e*e)*.5,f>g?(c.a=1,c.b=e/d,c.c/=d):(c.b=1,c.a=d/e,c.c/=e),c},intersect:function(a,b){var c=a.edge,d=b.edge;if(!c||!d||c.region.r==d.region.r)return null;var e=c.a*d.b-c.b*d.a;if(Math.abs(e)<1e-10)return null;var f=(c.c*d.b-d.c*c.b)/e,g=(d.c*c.a-c.c*d.a)/e,h=c.region.r,i=d.region.r,j,k;h.y<i.y||h.y==i.y&&h.x<i.x?(j=a,k=c):(j=b,k=d);var l=f>=k.region.r.x;return l&&j.side==="l"||!l&&j.side==="r"?null:{x:f,y:g}},rightOf:function(a,b){var c=a.edge,d=c.region.r,e=b.x>d.x;if(e&&a.side==="l")return 1;if(!e&&a.side==="r")return 0;if(c.a===1){var f=b.y-d.y,g=b.x-d.x,h=0,i=0;!e&&c.b<0||e&&c.b>=0?i=h=f>=c.b*g:(i=b.x+b.y*c.b>c.c,c.b<0&&(i=!i),i||(h=1));if(!h){var j=d.x-c.region.l.x;i=c.b*(g*g-f*f)<j*f*(1+2*g/j+c.b*c.b),c.b<0&&(i=!i)}}else{var k=c.c-c.a*b.x,l=b.y-k,m=b.x-d.x,n=k-d.y;i=l*l>m*m+n*n}return a.side==="l"?i:!i},endPoint:function(a,c,d){a.ep[c]=d;if(!a.ep[fi[c]])return;b(a)},distance:function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)}},f={list:[],insert:function(a,b,c){a.vertex=b,a.ystar=b.y+c;for(var d=0,e=f.list,g=e.length;d<g;d++){var h=e[d];if(a.ystar>h.ystar||a.ystar==h.ystar&&b.x>h.vertex.x)continue;break}e.splice(d,0,a)},del:function(a){for(var b=0,c=f.list,d=c.length;b<d&&c[b]!=a;++b);c.splice(b,1)},empty:function(){return f.list.length===0},nextEvent:function(a){for(var b=0,c=f.list,d=c.length;b<d;++b)if(c[b]==a)return c[b+1];return null},min:function(){var a=f.list[0];return{x:a.vertex.x,y:a.ystar}},extractMin:function(){return f.list.shift()}};d.init(),c.bottomSite=c.list.shift();var g=c.list.shift(),h,i,j,k,l,m,n,o,p,q,r,s,t;for(;;){f.empty()||(h=f.min());if(g&&(f.empty()||g.y<h.y||g.y==h.y&&g.x<h.x))i=d.leftBound(g),j=d.right(i),n=d.rightRegion(i),s=e.bisect(n,g),m=d.createHalfEdge(s,"l"),d.insert(i,m),q=e.intersect(i,m),q&&(f.del(i),f.insert(i,q,e.distance(q,g))),i=m,m=d.createHalfEdge(s,"r"),d.insert(i,m),q=e.intersect(m,j),q&&f.insert(m,q,e.distance(q,g)),g=c.list.shift();else if(!f.empty())i=f.extractMin(),k=d.left(i),j=d.right(i),l=d.right(j),n=d.leftRegion(i),o=d.rightRegion(j),r=i.vertex,e.endPoint(i.edge,i.side,r),e.endPoint(j.edge,j.side,r),d.del(i),f.del(j),d.del(j),t="l",n.y>o.y&&(p=n,n=o,o=p,t="r"),s=e.bisect(n,o),m=d.createHalfEdge(s,t),d.insert(k,m),e.endPoint(s,fi[t],r),q=e.intersect(k,m),q&&(f.del(k),f.insert(k,q,e.distance(q,n))),q=e.intersect(m,l),q&&f.insert(m,q,e.distance(q,n));else break}for(i=d.right(d.leftEnd);i!=d.rightEnd;i=d.right(i))b(i.edge)}function fk(){return{leaf:!0,nodes:[],point:null}}function fl(a,b,c,d,e,f){if(!a(b,c,d,e,f)){var g=(c+e)*.5,h=(d+f)*.5,i=b.nodes;i[0]&&fl(a,i[0],c,d,g,h),i[1]&&fl(a,i[1],g,d,e,h),i[2]&&fl(a,i[2],c,h,g,f),i[3]&&fl(a,i[3],g,h,e,f)}}function fm(a){return{x:a[0],y:a[1]}}function fo(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function fq(a,b,c,d){var e,f,g=0,h=b.length,i=c.length;while(g<h){if(d>=i)return-1;e=b.charCodeAt(g++);if(e==37){f=fw[b.charAt(g++)];if(!f||(d=f(a,c,d))<0)return-1}else if(e!=c.charCodeAt(d++))return-1}return d}function fx(a,b,c){return fz.test(b.substring(c,c+=3))?c:-1}function fy(a,b,c){fA.lastIndex=0;var d=fA.exec(b.substring(c,c+10));return d?c+=d[0].length:-1}function fB(a,b,c){var d=fC.get(b.substring(c,c+=3).toLowerCase());return d==null?-1:(a.m=d,c)}function fD(a,b,c){fE.lastIndex=0;var d=fE.exec(b.substring(c,c+12));return d?(a.m=fF.get(d[0].toLowerCase()),c+=d[0].length):-1}function fH(a,b,c){return fq(a,fv.c.toString(),b,c)}function fI(a,b,c){return fq(a,fv.x.toString(),b,c)}function fJ(a,b,c){return fq(a,fv.X.toString(),b,c)}function fK(a,b,c){fT.lastIndex=0;var d=fT.exec(b.substring(c,c+4));return d?(a.y=+d[0],c+=d[0].length):-1}function fL(a,b,c){fT.lastIndex=0;var d=fT.exec(b.substring(c,c+2));return d?(a.y=fM()+ +d[0],c+=d[0].length):-1}function fM(){return~~((new Date).getFullYear()/1e3)*1e3}function fN(a,b,c){fT.lastIndex=0;var d=fT.exec(b.substring(c,c+2));return d?(a.m=d[0]-1,c+=d[0].length):-1}function fO(a,b,c){fT.lastIndex=0;var d=fT.exec(b.substring(c,c+2));return d?(a.d=+d[0],c+=d[0].length):-1}function fP(a,b,c){fT.lastIndex=0;var d=fT.exec(b.substring(c,c+2));return d?(a.H=+d[0],c+=d[0].length):-1}function fQ(a,b,c){fT.lastIndex=0;var d=fT.exec(b.substring(c,c+2));return d?(a.M=+d[0],c+=d[0].length):-1}function fR(a,b,c){fT.lastIndex=0;var d=fT.exec(b.substring(c,c+2));return d?(a.S=+d[0],c+=d[0].length):-1}function fS(a,b,c){fT.lastIndex=0;var d=fT.exec(b.substring(c,c+3));return d?(a.L=+d[0],c+=d[0].length):-1}function fU(a,b,c){var d=fV.get(b.substring(c,c+=2).toLowerCase());return d==null?-1:(a.p=d,c)}function fW(a){var b=a.getTimezoneOffset(),c=b>0?"-":"+",d=~~(Math.abs(b)/60),e=Math.abs(b)%60;return c+fr(d)+fr(e)}function fY(a){return a.toISOString()}function fZ(a,b,c){function d(b){var c=a(b),d=f(c,1);return b-c<d-b?c:d}function e(c){return b(c=a(new fn(c-1)),1),c}function f(a,c){return b(a=new fn(+a),c),a}function g(a,d,f){var g=e(a),h=[];if(f>1)while(g<d)c(g)%f||h.push(new Date(+g)),b(g,1);else while(g<d)h.push(new Date(+g)),b(g,1);return h}function h(a,b,c){try{fn=fo;var d=new fo;return d._=a,g(d,b,c)}finally{fn=Date}}a.floor=a,a.round=d,a.ceil=e,a.offset=f,a.range=g;var i=a.utc=f$(a);return i.floor=i,i.round=f$(d),i.ceil=f$(e),i.offset=f$(f),i.range=h,a}function f$(a){return function(b,c){try{fn=fo;var d=new fo;return d._=b,a(d,c)._}finally{fn=Date}}}function f_(a,b,c){function d(b){return a(b)}return d.invert=function(b){return gb(a.invert(b))},d.domain=function(b){return arguments.length?(a.domain(b),d):a.domain().map(gb)},d.nice=function(a){var b=ga(d.domain());return d.domain([a.floor(b[0]),a.ceil(b[1])])},d.ticks=function(c,e){var f=ga(d.domain());if(typeof 
c!="function"){var g=f[1]-f[0],h=g/c,i=d3.bisect(gf,h);if(i==gf.length)return b.year(f,c);if(!i)return a.ticks(c).map(gb);Math.log(h/gf[i-1])<Math.log(gf[i]/h)&&--i,c=b[i],e=c[1],c=c[0].range}return c(f[0],new Date(+f[1]+1),e)},d.tickFormat=function(){return c},d.copy=function(){return f_(a.copy(),b,c)},d3.rebind(d,a,"range","rangeRound","interpolate","clamp")}function ga(a){var b=a[0],c=a[a.length-1];return b<c?[b,c]:[c,b]}function gb(a){return new Date(a)}function gc(a){return function(b){var c=a.length-1,d=a[c];while(!d[1](b))d=a[--c];return d[0](b)}}function gd(a){var b=new Date(a,0,1);return b.setFullYear(a),b}function ge(a){var b=a.getFullYear(),c=gd(b),d=gd(b+1);return b+(a-c)/(d-c)}function gn(a){var b=new Date(Date.UTC(a,0,1));return b.setUTCFullYear(a),b}function go(a){var b=a.getUTCFullYear(),c=gn(b),d=gn(b+1);return b+(a-c)/(d-c)}Date.now||(Date.now=function(){return+(new Date)});try{document.createElement("div").style.setProperty("opacity",0,"")}catch(a){var b=CSSStyleDeclaration.prototype,c=b.setProperty;b.setProperty=function(a,b,d){c.call(this,a,b+"",d)}}d3={version:"2.8.1"};var f=h;try{f(document.documentElement.childNodes)[0].nodeType}catch(i){f=g}var j=[].__proto__?function(a,b){a.__proto__=b}:function(a,b){for(var c in b)a[c]=b[c]};d3.map=function(a){var b=new k;for(var c in a)b.set(c,a[c]);return b},e(k,{has:function(a){return l+a in this},get:function(a){return this[l+a]},set:function(a,b){return this[l+a]=b},remove:function(a){return a=l+a,a in this&&delete this[a]},keys:function(){var a=[];return this.forEach(function(b){a.push(b)}),a},values:function(){var a=[];return this.forEach(function(b,c){a.push(c)}),a},entries:function(){var a=[];return this.forEach(function(b,c){a.push({key:b,value:c})}),a},forEach:function(a){for(var b in this)b.charCodeAt(0)===m&&a.call(this,b.substring(1),this[b])}});var l="\0",m=l.charCodeAt(0);d3.functor=function(a){return typeof a=="function"?a:function(){return a}},d3.rebind=function(a,b){var c=1,d=arguments.length,e;while(++c<d)a[e=arguments[c]]=o(a,b,b[e]);return a},d3.ascending=function(a,b){return a<b?-1:a>b?1:a>=b?0:NaN},d3.descending=function(a,b){return b<a?-1:b>a?1:b>=a?0:NaN},d3.mean=function(a,b){var c=a.length,d,e=0,f=-1,g=0;if(arguments.length===1)while(++f<c)p(d=a[f])&&(e+=(d-e)/++g);else while(++f<c)p(d=b.call(a,a[f],f))&&(e+=(d-e)/++g);return g?e:undefined},d3.median=function(a,b){return arguments.length>1&&(a=a.map(b)),a=a.filter(p),a.length?d3.quantile(a.sort(d3.ascending),.5):undefined},d3.min=function(a,b){var c=-1,d=a.length,e,f;if(arguments.length===1){while(++c<d&&((e=a[c])==null||e!=e))e=undefined;while(++c<d)(f=a[c])!=null&&e>f&&(e=f)}else{while(++c<d&&((e=b.call(a,a[c],c))==null||e!=e))e=undefined;while(++c<d)(f=b.call(a,a[c],c))!=null&&e>f&&(e=f)}return e},d3.max=function(a,b){var c=-1,d=a.length,e,f;if(arguments.length===1){while(++c<d&&((e=a[c])==null||e!=e))e=undefined;while(++c<d)(f=a[c])!=null&&f>e&&(e=f)}else{while(++c<d&&((e=b.call(a,a[c],c))==null||e!=e))e=undefined;while(++c<d)(f=b.call(a,a[c],c))!=null&&f>e&&(e=f)}return e},d3.extent=function(a,b){var c=-1,d=a.length,e,f,g;if(arguments.length===1){while(++c<d&&((e=g=a[c])==null||e!=e))e=g=undefined;while(++c<d)(f=a[c])!=null&&(e>f&&(e=f),g<f&&(g=f))}else{while(++c<d&&((e=g=b.call(a,a[c],c))==null||e!=e))e=undefined;while(++c<d)(f=b.call(a,a[c],c))!=null&&(e>f&&(e=f),g<f&&(g=f))}return[e,g]},d3.random={normal:function(a,b){return arguments.length<2&&(b=1),arguments.length<1&&(a=0),function(){var c,d,e;do c=Math.random()*2-1,d=Math.random()*2-1,e=c*c+d*d;while(!e||e>1);return a+b*c*Math.sqrt(-2*Math.log(e)/e)}}},d3.sum=function(a,b){var c=0,d=a.length,e,f=-1;if(arguments.length===1)while(++f<d)isNaN(e=+a[f])||(c+=e);else while(++f<d)isNaN(e=+b.call(a,a[f],f))||(c+=e);return c},d3.quantile=function(a,b){var c=(a.length-1)*b+1,d=Math.floor(c),e=a[d-1],f=c-d;return f?e+f*(a[d]-e):e},d3.transpose=function(a){return d3.zip.apply(d3,a)},d3.zip=function(){if(!(e=arguments.length))return[];for(var a=-1,b=d3.min(arguments,q),c=new Array(b);++a<b;)for(var d=-1,e,f=c[a]=new Array(e);++d<e;)f[d]=arguments[d][a];return c},d3.bisector=function(a){return{left:function(b,c,d,e){arguments.length<3&&(d=0),arguments.length<4&&(e=b.length);while(d<e){var f=d+e>>1;a.call(b,b[f],f)<c?d=f+1:e=f}return d},right:function(b,c,d,e){arguments.length<3&&(d=0),arguments.length<4&&(e=b.length);while(d<e){var f=d+e>>1;c<a.call(b,b[f],f)?e=f:d=f+1}return d}}};var r=d3.bisector(function(a){return a});d3.bisectLeft=r.left,d3.bisect=d3.bisectRight=r.right,d3.first=function(a,b){var c=0,d=a.length,e=a[0],f;arguments.length===1&&(b=d3.ascending);while(++c<d)b.call(a,e,f=a[c])>0&&(e=f);return e},d3.last=function(a,b){var c=0,d=a.length,e=a[0],f;arguments.length===1&&(b=d3.ascending);while(++c<d)b.call(a,e,f=a[c])<=0&&(e=f);return e},d3.nest=function(){function f(c,g){if(g>=b.length)return e?e.call(a,c):d?c.sort(d):c;var h=-1,i=c.length,j=b[g++],l,m,n=new k,o,p={};while(++h<i)(o=n.get(l=j(m=c[h])))?o.push(m):n.set(l,[m]);return n.forEach(function(a){p[a]=f(n.get(a),g)}),p}function g(a,d){if(d>=b.length)return a;var e=[],f=c[d++],h;for(h in a)e.push({key:h,values:g(a[h],d)});return f&&e.sort(function(a,b){return f(a.key,b.key)}),e}var a={},b=[],c=[],d,e;return a.map=function(a){return f(a,0)},a.entries=function(a){return g(f(a,0),0)},a.key=function(c){return b.push(c),a},a.sortKeys=function(d){return c[b.length-1]=d,a},a.sortValues=function(b){return d=b,a},a.rollup=function(b){return e=b,a},a},d3.keys=function(a){var b=[];for(var c in a)b.push(c);return b},d3.values=function(a){var b=[];for(var c in a)b.push(a[c]);return b},d3.entries=function(a){var b=[];for(var c in a)b.push({key:c,value:a[c]});return b},d3.permute=function(a,b){var c=[],d=-1,e=b.length;while(++d<e)c[d]=a[b[d]];return c},d3.merge=function(a){return Array.prototype.concat.apply([],a)},d3.split=function(a,b){var c=[],d=[],e,f=-1,g=a.length;arguments.length<2&&(b=s);while(++f<g)b.call(d,e=a[f],f)?d=[]:(d.length||c.push(d),d.push(e));return c},d3.range=function(a,b,c){arguments.length<3&&(c=1,arguments.length<2&&(b=a,a=0));if((b-a)/c===Infinity)throw new Error("infinite range");var d=[],e=u(Math.abs(c)),f=-1,g;a*=e,b*=e,c*=e;if(c<0)while((g=a+c*++f)>b)d.push(g/e);else while((g=a+c*++f)<b)d.push(g/e);return d},d3.requote=function(a){return a.replace(v,"\\$&")};var v=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;d3.round=function(a,b){return b?Math.round(a*(b=Math.pow(10,b)))/b:Math.round(a)},d3.xhr=function(a,b,c){var d=new XMLHttpRequest;arguments.length<3?(c=b,b=null):b&&d.overrideMimeType&&d.overrideMimeType(b),d.open("GET",a,!0),b&&d.setRequestHeader("Accept",b),d.onreadystatechange=function(){d.readyState===4&&c(d.status<300?d:null)},d.send(null)},d3.text=function(a,b,c){function d(a){c(a&&a.responseText)}arguments.length<3&&(c=b,b=null),d3.xhr(a,b,d)},d3.json=function(a,b){d3.text(a,"application/json",function(a){b(a?JSON.parse(a):null)})},d3.html=function(a,b){d3.text(a,"text/html",function(a){if(a!=null){var c=document.createRange();c.selectNode(document.body),a=c.createContextualFragment(a)}b(a)})},d3.xml=function(a,b,c){function d(a){c(a&&a.responseXML)}arguments.length<3&&(c=b,b=null),d3.xhr(a,b,d)};var w={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};d3.ns={prefix:w,qualify:function(a){var b=a.indexOf(":"),c=a;return b>=0&&(c=a.substring(0,b),a=a.substring(b+1)),w.hasOwnProperty(c)?{space:w[c],local:a}:a}},d3.dispatch=function(){var a=new x,b=-1,c=arguments.length;while(++b<c)a[arguments[b]]=y(a);return a},x.prototype.on=function(a,b){var c=a.indexOf("."),d="";return c>0&&(d=a.substring(c+1),a=a.substring(0,c)),arguments.length<2?this[a].on(d):this[a].on(d,b)},d3.format=function(a){var b=z.exec(a),c=b[1]||" ",d=b[3]||"",e=b[5],f=+b[6],g=b[7],h=b[8],i=b[9],j=1,k="",l=!1;h&&(h=+h.substring(1)),e&&(c="0",g&&(f-=Math.floor((f-1)/4)));switch(i){case"n":g=!0,i="g";break;case"%":j=100,k="%",i="f";break;case"p":j=100,k="%",i="r";break;case"d":l=!0,h=0;break;case"s":j=-1,i="r"}return i=="r"&&!h&&(i="g"),i=A.get(i)||C,function(a){if(l&&a%1)return"";var b=a<0&&(a=-a)?"−":d;if(j<0){var m=d3.formatPrefix(a,h);a*=m.scale,k=m.symbol}else a*=j;a=i(a,h);if(e){var n=a.length+b.length;n<f&&(a=(new Array(f-n+1)).join(c)+a),g&&(a=D(a)),a=b+a}else{g&&(a=D(a)),a=b+a;var n=a.length;n<f&&(a=(new Array(f-n+1)).join(c)+a)}return a+k}};var z=/(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,A=d3.map({g:function(a,b){return a.toPrecision(b)},e:function(a,b){return a.toExponential(b)},f:function(a,b){return a.toFixed(b)},r:function(a,b){return d3.round(a,b=B(a,b)).toFixed(Math.max(0,Math.min(20,b)))}}),E=["y","z","a","f","p","n","μ","m","","k","M","G","T","P","E","Z","Y"].map(F);d3.formatPrefix=function(a,b){var c=0;return a&&(a<0&&(a*=-1),b&&(a=d3.round(a,B(a,b))),c=1+Math.floor(1e-12+Math.log(a)/Math.LN10),c=Math.max(-24,Math.min(24,Math.floor((c<=0?c+1:c-1)/3)*3))),E[8+c/3]};var G=P(2),H=P(3),I=function(){return O},J=d3.map({linear:I,poly:P,quad:function(){return G},cubic:function(){return H},sin:function(){return Q},exp:function(){return R},circle:function(){return S},elastic:T,back:U,bounce:function(){return V}}),K=d3.map({"in":O,out:M,"in-out":N,"out-in":function(a){return N(M(a))}});d3.ease=function(a){var b=a.indexOf("-"),c=b>=0?a.substring(0,b):a,d=b>=0?a.substring(b+1):"in";return c=J.get(c)||I,d=K.get(d)||O,L(d(c.apply(null,Array.prototype.slice.call(arguments,1))))},d3.event=null,d3.interpolate=function(a,b){var c=d3.interpolators.length,d;while(--c>=0&&!(d=d3.interpolators[c](a,b)));return d},d3.interpolateNumber=function(a,b){return b-=a,function(c){return a+b*c}},d3.interpolateRound=function(a,b){return b-=a,function(c){return Math.round(a+b*c)}},d3.interpolateString=function(a,b){var c,d,e,f=0,g=0,h=[],i=[],j,k;Z.lastIndex=0;for(d=0;c=Z.exec(b);++d)c.index&&h.push(b.substring(f,g=c.index)),i.push({i:h.length,x:c[0]}),h.push(null),f=Z.lastIndex;f<b.length&&h.push(b.substring(f));for(d=0,j=i.length;(c=Z.exec(a))&&d<j;++d){k=i[d];if(k.x==c[0]){if(k.i)if(h[k.i+1]==null){h[k.i-1]+=k.x,h.splice(k.i,1);for(e=d+1;e<j;++e)i[e].i--}else{h[k.i-1]+=k.x+h[k.i+1],h.splice(k.i,2);for(e=d+1;e<j;++e)i[e].i-=2}else if(h[k.i+1]==null)h[k.i]=k.x;else{h[k.i]=k.x+h[k.i+1],h.splice(k.i+1,1);for(e=d+1;e<j;++e)i[e].i--}i.splice(d,1),j--,d--}else k.x=d3.interpolateNumber(parseFloat(c[0]),parseFloat(k.x))}while(d<j)k=i.pop(),h[k.i+1]==null?h[k.i]=k.x:(h[k.i]=k.x+h[k.i+1],h.splice(k.i+1,1)),j--;return h.length===1?h[0]==null?i[0].x:function(){return b}:function(a){for(d=0;d<j;++d)h[(k=i[d]).i]=k.x(a);return h.join("")}},d3.interpolateTransform=function(a,b){var c=[],d=[],e,f=d3.transform(a),g=d3.transform(b),h=f.translate,i=g.translate,j=f.rotate,k=g.rotate,l=f.skew,m=g.skew,n=f.scale,o=g.scale;return h[0]!=i[0]||h[1]!=i[1]?(c.push("translate(",null,",",null,")"),d.push({i:1,x:d3.interpolateNumber(h[0],i[0])},{i:3,x:d3.interpolateNumber(h[1],i[1])})):i[0]||i[1]?c.push("translate("+i+")"):c.push(""),j!=k?d.push({i:c.push(c.pop()+"rotate(",null,")")-2,x:d3.interpolateNumber(j,k)}):k&&c.push(c.pop()+"rotate("+k+")"),l!=m?d.push({i:c.push(c.pop()+"skewX(",null,")")-2,x:d3.interpolateNumber(l,m)}):m&&c.push(c.pop()+"skewX("+m+")"),n[0]!=o[0]||n[1]!=o[1]?(e=c.push(c.pop()+"scale(",null,",",null,")"),d.push({i:e-4,x:d3.interpolateNumber(n[0],o[0])},{i:e-2,x:d3.interpolateNumber(n[1],o[1])})):(o[0]!=1||o[1]!=1)&&c.push(c.pop()+"scale("+o+")"),e=d.length,function(a){var b=-1,f;while(++b<e)c[(f=d[b]).i]=f.x(a);return c.join("")}},d3.interpolateRgb=function(a,b){a=d3.rgb(a),b=d3.rgb(b);var c=a.r,d=a.g,e=a.b,f=b.r-c,g=b.g-d,h=b.b-e;return function(a){return"#"+bd(Math.round(c+f*a))+bd(Math.round(d+g*a))+bd(Math.round(e+h*a))}},d3.interpolateHsl=function(a,b){a=d3.hsl(a),b=d3.hsl(b);var c=a.h,d=a.s,e=a.l,f=b.h-c,g=b.s-d,h=b.l-e;return function(a){return bk(c+f*a,d+g*a,e+h*a).toString()}},d3.interpolateArray=function(a,b){var c=[],d=[],e=a.length,f=b.length,g=Math.min(a.length,b.length),h;for(h=0;h<g;++h)c.push(d3.interpolate(a[h],b[h]));for(;h<e;++h)d[h]=a[h];for(;h<f;++h)d[h]=b[h];return function(a){for(h=0;h<g;++h)d[h]=c[h](a);return d}},d3.interpolateObject=function(a,b){var c={},d={},e;for(e in a)e in b?c[e]=$(e)(a[e],b[e]):d[e]=a[e];for(e in b)e in a||(d[e]=b[e]);return function(a){for(e in c)d[e]=c[e](a);return d}};var Z=/[-+]?(?:\d*\.?\d+)(?:[eE][-+]?\d+)?/g;d3.interpolators=[d3.interpolateObject,function(a,b){return b instanceof Array&&d3.interpolateArray(a,b)},function(a,b){return(typeof a=="string"||typeof b=="string")&&d3.interpolateString(a+"",b+"")},function(a,b){return(typeof b=="string"?bh.has(b)||/^(#|rgb\(|hsl\()/.test(b):b instanceof bc||b instanceof bj)&&d3.interpolateRgb(a,b)},function(a,b){return!isNaN(a=+a)&&!isNaN(b=+b)&&d3.interpolateNumber(a,b)}],d3.rgb=function(a,b,c){return arguments.length===1?a instanceof bc?bb(a.r,a.g,a.b):be(""+a,bb,bk):bb(~~a,~~b,~~c)},bc.prototype.brighter=function(a){a=Math.pow(.7,arguments.length?a:1);var b=this.r,c=this.g,d=this.b,e=30;return!b&&!c&&!d?bb(e,e,e):(b&&b<e&&(b=e),c&&c<e&&(c=e),d&&d<e&&(d=e),bb(Math.min(255,Math.floor(b/a)),Math.min(255,Math.floor(c/a)),Math.min(255,Math.floor(d/a))))},bc.prototype.darker=function(a){return a=Math.pow(.7,arguments.length?a:1),bb(Math.floor(a*this.r),Math.floor(a*this.g),Math.floor(a*this.b))},bc.prototype.hsl=function(){return bf(this.r,this.g,this.b)},bc.prototype.toString=function(){return"#"+bd(this.r)+bd(this.g)+bd(this.b)};var bh=d3.map({aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"});bh.forEach(function(a,b){bh.set(a,be(b,bb,bk))}),d3.hsl=function(a,b,c){return arguments.length===1?a instanceof bj?bi(a.h,a.s,a.l):be(""+a,bf,bi):bi(+a,+b,+c)},bj.prototype.brighter=function(a){return a=Math.pow(.7,arguments.length?a:1),bi(this.h,this.s,this.l/a)},bj.prototype.darker=function(a){return a=Math.pow(.7,arguments.length?a:1),bi(this.h,this.s,a*this.l)},bj.prototype.rgb=function(){return bk(this.h,this.s,this.l)},bj.prototype.toString=function(){return this.rgb().toString()};var bm=function(a,b){return b.querySelector(a)},bn=function(a,b){return b.querySelectorAll(a)},bo=document.documentElement,bp=bo.matchesSelector||bo.webkitMatchesSelector||bo.mozMatchesSelector||bo.msMatchesSelector||bo.oMatchesSelector,bq=function(a,b){return bp.call(a,b)};typeof Sizzle=="function"&&(bm=function(a,b){return Sizzle(a,b)[0]},bn=function(a,b){return Sizzle.uniqueSort(Sizzle(a,b))},bq=Sizzle.matchesSelector);var br=[];d3.selection=function(){return bz},d3.selection.prototype=br,br.select=function(a){var b=[],c,d,e,f;typeof a!="function"&&(a=bs(a));for(var g=-1,h=this.length;++g<h;){b.push(c=[]),c.parentNode=(e=this[g]).parentNode;for(var i=-1,j=e.length;++i<j;)(f=e[i])?(c.push(d=a.call(f,f.__data__,i)),d&&"__data__"in f&&(d.__data__=f.__data__)):c.push(null)}return bl(b)},br.selectAll=function(a){var b=[],c,d;typeof a!="function"&&(a=bt(a));for(var e=-1,g=this.length;++e<g;)for(var h=this[e],i=-1,j=h.length;++i<j;)if(d=h[i])b.push(c=f(a.call(d,d.__data__,i))),c.parentNode=d;return bl(b)},br.attr=function(a,b){function d(){this.removeAttribute(a)}function e(){this.removeAttributeNS(a.space,a.local)}function f(){this.setAttribute(a,b)}function g(){this.setAttributeNS(a.space,a.local,b)}function h(){var c=b.apply(this,arguments);c==null?this.removeAttribute(a):this.setAttribute(a,c)}function i(){var c=b.apply(this,arguments);c==null?this.removeAttributeNS(a.space,a.local):this.setAttributeNS(a.space,a.local,c)}a=d3.ns.qualify(a);if(arguments.length<2){var c=this.node();return a.local?c.getAttributeNS(a.space,a.local):c.getAttribute(a)}return this.each(b==null?a.local?e:d:typeof b=="function"?a.local?i:h:a.local?g:f)},br.classed=function(a,b){var c=a.split(bu),d=c.length,e=-1;if(arguments.length>1){while(++e<d)bv.call(this,c[e],b);return this}while(++e<d)if(!bv.call(this,c[e]))return!1;return!0};var bu=/\s+/g;br.style=function(a,b,c){function d(){this.style.removeProperty(a)}function e(){this.style.setProperty(a,b,c)}function f(){var d=b.apply(this,arguments);d==null?this.style.removeProperty(a):this.style.setProperty(a,d,c)}return arguments.length<3&&(c=""),arguments.length<2?window.getComputedStyle(this.node(),null).getPropertyValue(a):this.each(b==null?d:typeof b=="function"?f:e)},br.property=function(a,b){function c(){delete this[a]}function d(){this[a]=b}function e(){var c=b.apply(this,arguments);c==null?delete this[a]:this[a]=c}return arguments.length<2?this.node()[a]:this.each(b==null?c:typeof b=="function"?e:d)},br.text=function(a){return arguments.length<1?this.node().textContent:this.each(typeof a=="function"?function(){var b=a.apply(this,arguments);this.textContent=b==null?"":b}:a==null?function(){this.textContent=""}:function(){this.textContent=a})},br.html=function(a){return arguments.length<1?this.node().innerHTML:this.each(typeof a=="function"?function(){var b=a.apply(this,arguments);this.innerHTML=b==null?"":b}:a==null?function(){this.innerHTML=""}:function(){this.innerHTML=a})},br.append=function(a){function b(){return this.appendChild(document.createElementNS(this.namespaceURI,a))}function c(){return this.appendChild(document.createElementNS(a.space,a.local))}return a=d3.ns.qualify(a),this.select(a.local?c:b)},br.insert=function(a,b){function c(){return this.insertBefore(document.createElementNS(this.namespaceURI,a),bm(b,this))}function d(){return this.insertBefore(document.createElementNS(a.space,a.local),bm(b,this))}return a=d3.ns.qualify(a),this.select(a.local?d:c)},br.remove=function(){return this.each(function(){var a=this.parentNode;a&&a.removeChild(this)})},br.data=function(a,b){function g(a,c){var d,e=a.length,f=c.length,g=Math.min(e,f),l=Math.max(e,f),m=[],n=[],o=[],p,q;if(b){var r=new k,s=[],t,u=c.length;for(d=-1;++d<e;)t=b.call(p=a[d],p.__data__,d),r.has(t)?o[u++]=p:r.set(t,p),s.push(t);for(d=-1;++d<f;)t=b.call(c,q=c[d],d),r.has(t)?(m[d]=p=r.get(t),p.__data__=q,n[d]=o[d]=null):(n[d]=bw(q),m[d]=o[d]=null),r.remove(t);for(d=-1;++d<e;)r.has(s[d])&&(o[d]=a[d])}else{for(d=-1;++d<g;)p=a[d],q=c[d],p?(p.__data__=q,m[d]=p,n[d]=o[d]=null):(n[d]=bw(q),m[d]=o[d]=null);for(;d<f;++d)n[d]=bw(c[d]),m[d]=o[d]=null;for(;d<l;++d)o[d]=a[d],n[d]=m[d]=null}n.update=m,n.parentNode=m.parentNode=o.parentNode=a.parentNode,h.push(n),i.push(m),j.push(o)}var c=-1,d=this.length,e,f;if(!arguments.length){a=new Array(d=(e=this[0]).length);while(++c<d)if(f=e[c])a[c]=f.__data__;return a}var h=bA([]),i=bl([]),j=bl([]);if(typeof a=="function")while(++c<d)g(e=this[c],a.call(e,e.parentNode.__data__,c));else while(++c<d)g(e=this[c],a);return i.enter=function(){return h},i.exit=function(){return j},i},br.datum=br.map=function(a){return arguments.length<1?this.property("__data__"):this.property("__data__",a)},br.filter=function(a){var b=[],c,d,e;typeof a!="function"&&(a=bx(a));for(var f=0,g=this.length;f<g;f++){b.push(c=[]),c.parentNode=(d=this[f]).parentNode;for(var h=0,i=d.length;h<i;h++)(e=d[h])&&a.call(e,e.__data__,h)&&c.push(e)}return bl(b)},br.order=function(){for(var a=-1,b=this.length;++a<b;)for(var c=this[a],d=c.length-1,e=c[d],f;--d>=0;)if(f=c[d])e&&e!==f.nextSibling&&e.parentNode.insertBefore(f,e),e=f;return this},br.sort=function(a){a=by.apply(this,arguments);for(var b=-1,c=this.length;++b<c;)this[b].sort(a);return this.order()},br.on=function(a,b,c){arguments.length<3&&(c=!1);var d="__on"+a,e=a.indexOf(".");return e>0&&(a=a.substring(0,e)),arguments.length<2?(e=this.node()[d])&&e._:this.each(function(e,f){function i(a){var c=d3.event;d3.event=a;try{b.call(g,g.__data__,f)}finally{d3.event=c}}var g=this,h=g[d];h&&(g.removeEventListener(a,h,h.$),delete g[d]),b&&(g.addEventListener(a,g[d]=i,i.$=c),i._=b)})},br.each=function(a){for(var b=-1,c=this.length;++b<c;)for(var d=this[b],e=-1,f=d.length;++e<f;){var g=d[e];g&&a.call(g,g.__data__,e,b)}return this},br.call=function(a){return a.apply(this,(arguments[0]=this,arguments)),this},br.empty=function(){return!this.node()},br.node=function(a){for(var b=0,c=this.length;b<c;b++)for(var d=this[b],e=0,f=d.length;e<f;e++){var g=d[e];if(g)return g}return null},br.transition=function(){var a=[],b,c;for(var d=-1,e=this.length;++d<e;){a.push(b=[]);for(var f=this[d],g=-1,h=f.length;++g<h;)b.push((c=f[g])?{node:c,delay:bM,duration:bN}:null)}return bC(a,bI||++bH,Date.now())};var bz=bl([[document]]);bz[0].parentNode=bo,d3.select=function(a){return typeof a=="string"?bz.select(a):bl([[a]])},d3.selectAll=function(a){return typeof a=="string"?bz.selectAll(a):bl([f(a)])};var bB=[];d3.selection.enter=bA,d3.selection.enter.prototype=bB,bB.append=br.append,bB.insert=br.insert,bB.empty=br.empty,bB.node=br.node,bB.select=function(a){var b=[],c,d,e,f,g;for(var h=-1,i=this.length;++h<i;){e=(f=this[h]).update,b.push(c=[]),c.parentNode=f.parentNode;for(var j=-1,k=f.length;++j<k;)(g=f[j])?(c.push(e[j]=d=a.call(f.parentNode,g.__data__,j)),d.__data__=g.__data__):c.push(null)}return bl(b)};var bD={},bG=[],bH=0,bI=0,bJ=0,bK=250,bL=d3.ease("cubic-in-out"),bM=bJ,bN=bK,bO=bL;bG.call=br.call,d3.transition=function(a){return arguments.length?bI?a.transition():a:bz.transition()},d3.transition.prototype=bG,bG.select=function(a){var b=[],c,d,e;typeof a!="function"&&(a=bs(a));for(var f=-1,g=this.length;++f<g;){b.push(c=[]);for(var h=this[f],i=-1,j=h.length;++i<j;)(e=h[i])&&(d=a.call(e.node,e.node.__data__,i))?("__data__"in e.node&&(d.__data__=e.node.__data__),c.push({node:d,delay:e.delay,duration:e.duration})):c.push(null)}return bC(b,this.id,this.time).ease(this.ease())},bG.selectAll=function(a){var b=[],c,d,e;typeof a!="function"&&(a=bt(a));for(var f=-1,g=this.length;++f<g;)for(var h=this[f],i=-1,j=h.length;++i<j;)if(e=h[i]){d=a.call(e.node,e.node.__data__,i),b.push(c=[]);for(var k=-1,l=d.length;++k<l;)c.push({node:d[k],delay:e.delay,duration:e.duration})}return bC(b,this.id,this.time).ease(this.ease())},bG.attr=function(a,b){return this.attrTween(a,bF(a,b))},bG.attrTween=function(a,b){function d(a,d){var e=b.call(this,a,d,this.getAttribute(c));return e===bD?(this.removeAttribute(c),null):e&&function(a){this.setAttribute(c,e(a))}}function e(a,d){var e=b.call(this,a,d,this.getAttributeNS(c.space,c.local));return e===bD?(this.removeAttributeNS(c.space,c.local),null):e&&function(a){this.setAttributeNS(c.space,c.local,e(a))}}var c=d3.ns.qualify(a);return this.tween("attr."+a,c.local?e:d)},bG.style=function(a,b,c){return arguments.length<3&&(c=""),this.styleTween(a,bF(a,b),c)},bG.styleTween=function(a,b,c){return arguments.length<3&&(c=""),this.tween("style."+a,function(d,e){var f=b.call(this,d,e,window.getComputedStyle(this,null).getPropertyValue(a));return f===bD?(this.style.removeProperty(a),null):f&&function(b){this.style.setProperty(a,f(b),c)}})},bG.text=function(a){return this.tween("text",function(b,c){this.textContent=typeof a=="function"?a.call(this,b,c):a})},bG.remove=function(){return this.each("end.transition",function(){var a;!this.__transition__&&(a=this.parentNode)&&a.removeChild(this)})},bG.delay=function(a){var b=this;return b.each(typeof a=="function"?function(c,d,e){b[e][d].delay=a.apply(this,arguments)|0}:(a|=0,function(c,d,e){b[e][d].delay=a}))},bG.duration=function(a){var b=this;return b.each(typeof a=="function"?function(c,d,e){b[e][d].duration=Math.max(1,a.apply(this,arguments)|0)}:(a=Math.max(1,a|0),function(c,d,e){b[e][d].duration=a}))},bG.transition=function(){return this.select(n)};var bQ=null,bR,bS;d3.timer=function(a,b,c){var d=!1,e,f=bQ;if(arguments.length<3){if(arguments.length<2)b=0;else if(!isFinite(b))return;c=Date.now()}while(f){if(f.callback===a){f.then=c,f.delay=b,d=!0;break}e=f,f=f.next}d||(bQ={callback:a,then:c,delay:b,next:bQ}),bR||(bS=clearTimeout(bS),bR=1,bV(bT))},d3.timer.flush=function(){var a,b=Date.now(),c=bQ;while(c)a=b-c.then,c.delay||(c.flush=c.callback(a)),c=c.next;bU()};var bV=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,17)};d3.transform=function(a){var b=document.createElementNS(d3.ns.prefix.svg,"g"),c={a:1,b:0,c:0,d:1,e:0,f:0};return(d3.transform=function(a){b.setAttribute("transform",a);var d=b.transform.baseVal.consolidate();return new bW(d?d.matrix:c)})(a)},bW.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var b$=180/Math.PI;d3.mouse=function(a){return ca(a,X())};var b_=/WebKit/.test(navigator.userAgent)?-1:0;d3.touches=function(a,b){return arguments.length<2&&(b=X().touches),b?f(b).map(function(b){var c=ca(a,b);return c.identifier=b.identifier,c}):[]},d3.scale={},d3.scale.linear=function(){return cg([0,1],[0,1],d3.interpolate,!1)},d3.scale.log=function(){return co(d3.scale.linear(),cq)};var cp=d3.format(".0e");cq.pow=function(a){return Math.pow(10,a)},cr.pow=function(a){return-Math.pow(10,-a)},d3.scale.pow=function(){return cs(d3.scale.linear(),1)},d3.scale.sqrt=function(){return d3.scale.pow().exponent(.5)},d3.scale.ordinal=function(){return cu([],{t:"range",x:[]})},d3.scale.category10=function(){return d3.scale.ordinal().range(cv)},d3.scale.category20=function(){return d3.scale.ordinal().range(cw)},d3.scale.category20b=function(){return d3.scale.ordinal().range(cx)},d3.scale.category20c=function(){return d3.scale.ordinal().range(cy)};var cv=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],cw=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"],cx=["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6"],cy=["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"];d3.scale.quantile=function(){return cz([],[])},d3.scale.quantize=function(){return cA(0,1,[0,1])},d3.scale.identity=function(){return cB([0,1])},d3.svg={},d3.svg.arc=function(){function e(){var e=a.apply(this,arguments),f=b.apply(this,arguments),g=c.apply(this,arguments)+cC,h=d.apply(this,arguments)+cC,i=(h<g&&(i=g,g=h,h=i),h-g),j=i<Math.PI?"0":"1",k=Math.cos(g),l=Math.sin(g),m=Math.cos(h),n=Math.sin(h);return i>=cD?e?"M0,"+f+"A"+f+","+f+" 0 1,1 0,"+ -f+"A"+f+","+f+" 0 1,1 0,"+f+"M0,"+e+"A"+e+","+e+" 0 1,0 0,"+ -e+"A"+e+","+e+" 0 1,0 0,"+e+"Z":"M0,"+f+"A"+f+","+f+" 0 1,1 0,"+ -f+"A"+f+","+f+" 0 1,1 0,"+f+"Z":e?"M"+f*k+","+f*l+"A"+f+","+f+" 0 "+j+",1 "+f*m+","+f*n+"L"+e*m+","+e*n+"A"+e+","+e+" 0 "+j+",0 "+e*k+","+e*l+"Z":"M"+f*k+","+f*l+"A"+f+","+f+" 0 "+j+",1 "+f*m+","+f*n+"L0,0"+"Z"}var a=cE,b=cF,c=cG,d=cH;return e.innerRadius=function(b){return arguments.length?(a=d3.functor(b),e):a},e.outerRadius=function(a){return arguments.length?(b=d3.functor(a),e):b},e.startAngle=function(a){return arguments.length?(c=d3.functor(a),e):c},e.endAngle=function(a){return arguments.length?(d=d3.functor(a),e):d},e.centroid=function(){var e=(a.apply(this,arguments)+b.apply(this,arguments))/2,f=(c.apply(this,arguments)+d.apply(this,arguments))/2+cC;return[Math.cos(f)*e,Math.sin(f)*e]},e};var cC=-Math.PI/2,cD=2*Math.PI-1e-6;d3.svg.line=function(){return cI(Object)};var cM="linear",cN=d3.map({linear:cO,"step-before":cP,"step-after":cQ,basis:cW,"basis-open":cX,"basis-closed":cY,bundle:cZ,cardinal:cT,"cardinal-open":cR,"cardinal-closed":cS,monotone:dg}),c_=[0,2/3,1/3,0],da=[0,1/3,2/3,0],db=[0,1/6,2/3,1/6];d3.svg.line.radial=function(){var a=cI(dh);return a.radius=a.x,delete a.x,a.angle=a.y,delete a.y,a},cP.reverse=cQ,cQ.reverse=cP,d3.svg.area=function(){return di(Object)},d3.svg.area.radial=function(){var a=di(dh);return a.radius=a.x,delete a.x,a.innerRadius=a.x0,delete a.x0,a.outerRadius=a.x1,delete a.x1,a.angle=a.y,delete a.y,a.startAngle=a.y0,delete a.y0,a.endAngle=a.y1,delete a.y1,a},d3.svg.chord=function(){function f(c,d){var e=g(this,a,c,d),f=g(this,b,c,d);return"M"+e.p0+i(e.r,e.p1,e.a1-e.a0)+(h(e,f)?j(e.r,e.p1,e.r,e.p0):j(e.r,e.p1,f.r,f.p0)+i(f.r,f.p1,f.a1-f.a0)+j(f.r,f.p1,e.r,e.p0))+"Z"}function g(a,b,f,g){var h=b.call(a,f,g),i=c.call(a,h,g),j=d.call(a,h,g)+cC,k=e.call(a,h,g)+cC;return{r:i,a0:j,a1:k,p0:[i*Math.cos(j),i*Math.sin(j)],p1:[i*Math.cos(k),i*Math.sin(k)]}}function h(a,b){return a.a0==b.a0&&a.a1==b.a1}function i(a,b,c){return"A"+a+","+a+" 0 "+ +(c>Math.PI)+",1 "+b}function j(a,b,c,d){return"Q 0,0 "+d}var a=dl,b=dm,c=dn,d=cG,e=cH;return f.radius=function(a){return arguments.length?(c=d3.functor(a),f):c},f.source=function(b){return arguments.length?(a=d3.functor(b),f):a},f.target=function(a){return arguments.length?(b=d3.functor(a),f):b},f.startAngle=function(a){return arguments.length?(d=d3.functor(a),f):d},f.endAngle=function(a){return arguments.length?(e=d3.functor(a),f):e},f},d3.svg.diagonal=function(){function d(d,e){var f=a.call(this,d,e),g=b.call(this,d,e),h=(f.y+g.y)/2,i=[f,{x:f.x,y:h},{x:g.x,y:h},g];return i=i.map(c),"M"+i[0]+"C"+i[1]+" "+i[2]+" "+i[3]}var a=dl,b=dm,c=dr;return d.source=function(b){return arguments.length?(a=d3.functor(b),d):a},d.target=function(a){return arguments.length?(b=d3.functor(a),d):b},d.projection=function(a){return arguments.length?(c=a,d):c},d},d3.svg.diagonal.radial=function(){var a=d3.svg.diagonal(),b=dr,c=a.projection;return a.projection=function(a){return arguments.length?c(ds(b=a)):b},a},d3.svg.mouse=d3.mouse,d3.svg.touches=d3.touches,d3.svg.symbol=function(){function c(c,d){return(dw.get(a.call(this,c,d))||dv)(b.call(this,c,d))}var a=du,b=dt;return c.type=function(b){return arguments.length?(a=d3.functor(b),c):a},c.size=function(a){return arguments.length?(b=d3.functor(a),c):b},c};var dw=d3.map({circle
:dv,cross:function(a){var b=Math.sqrt(a/5)/2;return"M"+ -3*b+","+ -b+"H"+ -b+"V"+ -3*b+"H"+b+"V"+ -b+"H"+3*b+"V"+b+"H"+b+"V"+3*b+"H"+ -b+"V"+b+"H"+ -3*b+"Z"},diamond:function(a){var b=Math.sqrt(a/(2*dy)),c=b*dy;return"M0,"+ -b+"L"+c+",0"+" 0,"+b+" "+ -c+",0"+"Z"},square:function(a){var b=Math.sqrt(a)/2;return"M"+ -b+","+ -b+"L"+b+","+ -b+" "+b+","+b+" "+ -b+","+b+"Z"},"triangle-down":function(a){var b=Math.sqrt(a/dx),c=b*dx/2;return"M0,"+c+"L"+b+","+ -c+" "+ -b+","+ -c+"Z"},"triangle-up":function(a){var b=Math.sqrt(a/dx),c=b*dx/2;return"M0,"+ -c+"L"+b+","+c+" "+ -b+","+c+"Z"}});d3.svg.symbolTypes=dw.keys();var dx=Math.sqrt(3),dy=Math.tan(30*Math.PI/180);d3.svg.axis=function(){function k(k){k.each(function(){var k=d3.select(this),l=h==null?a.ticks?a.ticks.apply(a,g):a.domain():h,m=i==null?a.tickFormat?a.tickFormat.apply(a,g):String:i,n=dB(a,l,j),o=k.selectAll(".minor").data(n,String),p=o.enter().insert("line","g").attr("class","tick minor").style("opacity",1e-6),q=d3.transition(o.exit()).style("opacity",1e-6).remove(),r=d3.transition(o).style("opacity",1),s=k.selectAll("g").data(l,String),t=s.enter().insert("g","path").style("opacity",1e-6),u=d3.transition(s.exit()).style("opacity",1e-6).remove(),v=d3.transition(s).style("opacity",1),w,x=cd(a),y=k.selectAll(".domain").data([0]),z=y.enter().append("path").attr("class","domain"),A=d3.transition(y),B=a.copy(),C=this.__chart__||B;this.__chart__=B,t.append("line").attr("class","tick"),t.append("text"),v.select("text").text(m);switch(b){case"bottom":w=dz,p.attr("y2",d),r.attr("x2",0).attr("y2",d),t.select("line").attr("y2",c),t.select("text").attr("y",Math.max(c,0)+f),v.select("line").attr("x2",0).attr("y2",c),v.select("text").attr("x",0).attr("y",Math.max(c,0)+f).attr("dy",".71em").attr("text-anchor","middle"),A.attr("d","M"+x[0]+","+e+"V0H"+x[1]+"V"+e);break;case"top":w=dz,p.attr("y2",-d),r.attr("x2",0).attr("y2",-d),t.select("line").attr("y2",-c),t.select("text").attr("y",-(Math.max(c,0)+f)),v.select("line").attr("x2",0).attr("y2",-c),v.select("text").attr("x",0).attr("y",-(Math.max(c,0)+f)).attr("dy","0em").attr("text-anchor","middle"),A.attr("d","M"+x[0]+","+ -e+"V0H"+x[1]+"V"+ -e);break;case"left":w=dA,p.attr("x2",-d),r.attr("x2",-d).attr("y2",0),t.select("line").attr("x2",-c),t.select("text").attr("x",-(Math.max(c,0)+f)),v.select("line").attr("x2",-c).attr("y2",0),v.select("text").attr("x",-(Math.max(c,0)+f)).attr("y",0).attr("dy",".32em").attr("text-anchor","end"),A.attr("d","M"+ -e+","+x[0]+"H0V"+x[1]+"H"+ -e);break;case"right":w=dA,p.attr("x2",d),r.attr("x2",d).attr("y2",0),t.select("line").attr("x2",c),t.select("text").attr("x",Math.max(c,0)+f),v.select("line").attr("x2",c).attr("y2",0),v.select("text").attr("x",Math.max(c,0)+f).attr("y",0).attr("dy",".32em").attr("text-anchor","start"),A.attr("d","M"+e+","+x[0]+"H0V"+x[1]+"H"+e)}if(a.ticks)t.call(w,C),v.call(w,B),u.call(w,B),p.call(w,C),r.call(w,B),q.call(w,B);else{var D=B.rangeBand()/2,E=function(a){return B(a)+D};t.call(w,E),v.call(w,E)}})}var a=d3.scale.linear(),b="bottom",c=6,d=6,e=6,f=3,g=[10],h=null,i,j=0;return k.scale=function(b){return arguments.length?(a=b,k):a},k.orient=function(a){return arguments.length?(b=a,k):b},k.ticks=function(){return arguments.length?(g=arguments,k):g},k.tickValues=function(a){return arguments.length?(h=a,k):h},k.tickFormat=function(a){return arguments.length?(i=a,k):i},k.tickSize=function(a,b,f){if(!arguments.length)return c;var g=arguments.length-1;return c=+a,d=g>1?+b:c,e=g>0?+arguments[g]:c,k},k.tickPadding=function(a){return arguments.length?(f=+a,k):f},k.tickSubdivide=function(a){return arguments.length?(j=+a,k):j},k},d3.svg.brush=function(){function g(a){a.each(function(){var a=d3.select(this),e=a.selectAll(".background").data([0]),f=a.selectAll(".extent").data([0]),l=a.selectAll(".resize").data(d,String),m;a.style("pointer-events","all").on("mousedown.brush",k).on("touchstart.brush",k),e.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),f.enter().append("rect").attr("class","extent").style("cursor","move"),l.enter().append("g").attr("class",function(a){return"resize "+a}).style("cursor",function(a){return dC[a]}).append("rect").attr("x",function(a){return/[ew]$/.test(a)?-3:null}).attr("y",function(a){return/^[ns]/.test(a)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),l.style("display",g.empty()?"none":null),l.exit().remove(),b&&(m=cd(b),e.attr("x",m[0]).attr("width",m[1]-m[0]),i(a)),c&&(m=cd(c),e.attr("y",m[0]).attr("height",m[1]-m[0]),j(a)),h(a)})}function h(a){a.selectAll(".resize").attr("transform",function(a){return"translate("+e[+/e$/.test(a)][0]+","+e[+/^s/.test(a)][1]+")"})}function i(a){a.select(".extent").attr("x",e[0][0]),a.selectAll(".extent,.n>rect,.s>rect").attr("width",e[1][0]-e[0][0])}function j(a){a.select(".extent").attr("y",e[0][1]),a.selectAll(".extent,.e>rect,.w>rect").attr("height",e[1][1]-e[0][1])}function k(){function x(){var a=d3.event.changedTouches;return a?d3.touches(d,a)[0]:d3.mouse(d)}function y(){d3.event.keyCode==32&&(q||(r=null,s[0]-=e[1][0],s[1]-=e[1][1],q=2),W())}function z(){d3.event.keyCode==32&&q==2&&(s[0]+=e[1][0],s[1]+=e[1][1],q=0,W())}function A(){var a=x(),d=!1;t&&(a[0]+=t[0],a[1]+=t[1]),q||(d3.event.altKey?(r||(r=[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2]),s[0]=e[+(a[0]<r[0])][0],s[1]=e[+(a[1]<r[1])][1]):r=null),o&&B(a,b,0)&&(i(m),d=!0),p&&B(a,c,1)&&(j(m),d=!0),d&&(h(m),l({type:"brush",mode:q?"move":"resize"}))}function B(a,b,c){var d=cd(b),g=d[0],h=d[1],i=s[c],j=e[1][c]-e[0][c],k,l;q&&(g-=i,h-=j+i),k=Math.max(g,Math.min(h,a[c])),q?l=(k+=i)+j:(r&&(i=Math.max(g,Math.min(h,2*r[c]-k))),i<k?(l=k,k=i):l=i);if(e[0][c]!==k||e[1][c]!==l)return f=null,e[0][c]=k,e[1][c]=l,!0}function C(){A(),m.style("pointer-events","all").selectAll(".resize").style("display",g.empty()?"none":null),d3.select("body").style("cursor",null),u.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),l({type:"brushend"}),W()}var d=this,k=d3.select(d3.event.target),l=a.of(d,arguments),m=d3.select(d),n=k.datum(),o=!/^(n|s)$/.test(n)&&b,p=!/^(e|w)$/.test(n)&&c,q=k.classed("extent"),r,s=x(),t,u=d3.select(window).on("mousemove.brush",A).on("mouseup.brush",C).on("touchmove.brush",A).on("touchend.brush",C).on("keydown.brush",y).on("keyup.brush",z);if(q)s[0]=e[0][0]-s[0],s[1]=e[0][1]-s[1];else if(n){var v=+/w$/.test(n),w=+/^n/.test(n);t=[e[1-v][0]-s[0],e[1-w][1]-s[1]],s[0]=e[v][0],s[1]=e[w][1]}else d3.event.altKey&&(r=s.slice());m.style("pointer-events","none").selectAll(".resize").style("display",null),d3.select("body").style("cursor",k.style("cursor")),l({type:"brushstart"}),A(),W()}var a=Y(g,"brushstart","brush","brushend"),b=null,c=null,d=dD[0],e=[[0,0],[0,0]],f;return g.x=function(a){return arguments.length?(b=a,d=dD[!b<<1|!c],g):b},g.y=function(a){return arguments.length?(c=a,d=dD[!b<<1|!c],g):c},g.extent=function(a){var d,h,i,j,k;return arguments.length?(f=[[0,0],[0,0]],b&&(d=a[0],h=a[1],c&&(d=d[0],h=h[0]),f[0][0]=d,f[1][0]=h,b.invert&&(d=b(d),h=b(h)),h<d&&(k=d,d=h,h=k),e[0][0]=d|0,e[1][0]=h|0),c&&(i=a[0],j=a[1],b&&(i=i[1],j=j[1]),f[0][1]=i,f[1][1]=j,c.invert&&(i=c(i),j=c(j)),j<i&&(k=i,i=j,j=k),e[0][1]=i|0,e[1][1]=j|0),g):(a=f||e,b&&(d=a[0][0],h=a[1][0],f||(d=e[0][0],h=e[1][0],b.invert&&(d=b.invert(d),h=b.invert(h)),h<d&&(k=d,d=h,h=k))),c&&(i=a[0][1],j=a[1][1],f||(i=e[0][1],j=e[1][1],c.invert&&(i=c.invert(i),j=c.invert(j)),j<i&&(k=i,i=j,j=k))),b&&c?[[d,i],[h,j]]:b?[d,h]:c&&[i,j])},g.clear=function(){return f=null,e[0][0]=e[0][1]=e[1][0]=e[1][1]=0,g},g.empty=function(){return b&&e[0][0]===e[1][0]||c&&e[0][1]===e[1][1]},d3.rebind(g,a,"on")};var dC={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},dD=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]];d3.behavior={},d3.behavior.drag=function(){function c(){this.on("mousedown.drag",d).on("touchstart.drag",d)}function d(){function j(){var a=c.parentNode,b=d3.event.changedTouches;return b?d3.touches(a,b)[0]:d3.mouse(a)}function k(){if(!c.parentNode)return l();var a=j(),b=a[0]-g[0],e=a[1]-g[1];h|=b|e,g=a,W(),d({type:"drag",x:a[0]+f[0],y:a[1]+f[1],dx:b,dy:e})}function l(){d({type:"dragend"}),h&&(W(),d3.event.target===e&&i.on("click.drag",m,!0)),i.on("mousemove.drag",null).on("touchmove.drag",null).on("mouseup.drag",null).on("touchend.drag",null)}function m(){W(),i.on("click.drag",null)}var c=this,d=a.of(c,arguments),e=d3.event.target,f,g=j(),h=0,i=d3.select(window).on("mousemove.drag",k).on("touchmove.drag",k).on("mouseup.drag",l,!0).on("touchend.drag",l,!0);b?(f=b.apply(c,arguments),f=[f.x-g[0],f.y-g[1]]):f=[0,0],d({type:"dragstart"})}var a=Y(c,"drag","dragstart","dragend"),b=null;return c.origin=function(a){return arguments.length?(b=a,c):b},d3.rebind(c,a,"on")},d3.behavior.zoom=function(){function l(){this.on("mousedown.zoom",r).on("mousewheel.zoom",s).on("mousemove.zoom",t).on("DOMMouseScroll.zoom",s).on("dblclick.zoom",u).on("touchstart.zoom",v).on("touchmove.zoom",w).on("touchend.zoom",v)}function m(b){return[(b[0]-a[0])/c,(b[1]-a[1])/c]}function n(b){return[b[0]*c+a[0],b[1]*c+a[1]]}function o(a){c=Math.max(e[0],Math.min(e[1],a))}function p(b,c){c=n(c),a[0]+=b[0]-c[0],a[1]+=b[1]-c[1]}function q(b){h&&h.domain(g.range().map(function(b){return(b-a[0])/c}).map(g.invert)),j&&j.domain(i.range().map(function(b){return(b-a[1])/c}).map(i.invert)),d3.event.preventDefault(),b({type:"zoom",scale:c,translate:a})}function r(){function h(){d=1,p(d3.mouse(a),g),q(b)}function i(){d&&W(),e.on("mousemove.zoom",null).on("mouseup.zoom",null),d&&d3.event.target===c&&e.on("click.zoom",j)}function j(){W(),e.on("click.zoom",null)}var a=this,b=f.of(a,arguments),c=d3.event.target,d=0,e=d3.select(window).on("mousemove.zoom",h).on("mouseup.zoom",i),g=m(d3.mouse(a));window.focus(),W()}function s(){b||(b=m(d3.mouse(this))),o(Math.pow(2,dG()*.002)*c),p(d3.mouse(this),b),q(f.of(this,arguments))}function t(){b=null}function u(){var a=d3.mouse(this),b=m(a);o(d3.event.shiftKey?c/2:c*2),p(a,b),q(f.of(this,arguments))}function v(){var a=d3.touches(this),e=Date.now();d=c,b={},a.forEach(function(a){b[a.identifier]=m(a)}),W();if(a.length===1&&e-k<500){var g=a[0],h=m(a[0]);o(c*2),p(g,h),q(f.of(this,arguments))}k=e}function w(){var a=d3.touches(this),c=a[0],e=b[c.identifier];if(g=a[1]){var g,h=b[g.identifier];c=[(c[0]+g[0])/2,(c[1]+g[1])/2],e=[(e[0]+h[0])/2,(e[1]+h[1])/2],o(d3.event.scale*d)}p(c,e),q(f.of(this,arguments))}var a=[0,0],b,c=1,d,e=dF,f=Y(l,"zoom"),g,h,i,j,k;return l.translate=function(b){return arguments.length?(a=b.map(Number),l):a},l.scale=function(a){return arguments.length?(c=+a,l):c},l.scaleExtent=function(a){return arguments.length?(e=a==null?dF:a.map(Number),l):e},l.x=function(a){return arguments.length?(h=a,g=a.copy(),l):h},l.y=function(a){return arguments.length?(j=a,i=a.copy(),l):j},d3.rebind(l,f,"on")};var dE,dF=[0,Infinity];d3.layout={},d3.layout.bundle=function(){return function(a){var b=[],c=-1,d=a.length;while(++c<d)b.push(dH(a[c]));return b}},d3.layout.chord=function(){function j(){var a={},j=[],l=d3.range(e),m=[],n,o,p,q,r;b=[],c=[],n=0,q=-1;while(++q<e){o=0,r=-1;while(++r<e)o+=d[q][r];j.push(o),m.push(d3.range(e)),n+=o}g&&l.sort(function(a,b){return g(j[a],j[b])}),h&&m.forEach(function(a,b){a.sort(function(a,c){return h(d[b][a],d[b][c])})}),n=(2*Math.PI-f*e)/n,o=0,q=-1;while(++q<e){p=o,r=-1;while(++r<e){var s=l[q],t=m[s][r],u=d[s][t],v=o,w=o+=u*n;a[s+"-"+t]={index:s,subindex:t,startAngle:v,endAngle:w,value:u}}c.push({index:s,startAngle:p,endAngle:o,value:(o-p)/n}),o+=f}q=-1;while(++q<e){r=q-1;while(++r<e){var x=a[q+"-"+r],y=a[r+"-"+q];(x.value||y.value)&&b.push(x.value<y.value?{source:y,target:x}:{source:x,target:y})}}i&&k()}function k(){b.sort(function(a,b){return i((a.source.value+a.target.value)/2,(b.source.value+b.target.value)/2)})}var a={},b,c,d,e,f=0,g,h,i;return a.matrix=function(f){return arguments.length?(e=(d=f)&&d.length,b=c=null,a):d},a.padding=function(d){return arguments.length?(f=d,b=c=null,a):f},a.sortGroups=function(d){return arguments.length?(g=d,b=c=null,a):g},a.sortSubgroups=function(c){return arguments.length?(h=c,b=null,a):h},a.sortChords=function(c){return arguments.length?(i=c,b&&k(),a):i},a.chords=function(){return b||j(),b},a.groups=function(){return c||j(),c},a},d3.layout.force=function(){function r(a){return function(b,c,d,e,f){if(b.point!==a){var g=b.cx-a.x,h=b.cy-a.y,i=1/Math.sqrt(g*g+h*h);if((e-c)*i<k){var j=b.charge*i*i;return a.px-=g*j,a.py-=h*j,!0}if(b.point&&isFinite(i)){var j=b.pointCharge*i*i;a.px-=g*j,a.py-=h*j}}return!b.charge}}function s(b){dM(dL=b),dK=a}var a={},b=d3.dispatch("start","tick","end"),c=[1,1],d,e,f=.9,g=dR,h=dS,i=-30,j=.1,k=.8,l,m=[],n=[],o,p,q;return a.tick=function(){if((e*=.99)<.005)return b.end({type:"end",alpha:e=0}),!0;var a=m.length,d=n.length,g,h,k,l,s,t,u,v,w;for(h=0;h<d;++h){k=n[h],l=k.source,s=k.target,v=s.x-l.x,w=s.y-l.y;if(t=v*v+w*w)t=e*p[h]*((t=Math.sqrt(t))-o[h])/t,v*=t,w*=t,s.x-=v*(u=l.weight/(s.weight+l.weight)),s.y-=w*u,l.x+=v*(u=1-u),l.y+=w*u}if(u=e*j){v=c[0]/2,w=c[1]/2,h=-1;if(u)while(++h<a)k=m[h],k.x+=(v-k.x)*u,k.y+=(w-k.y)*u}if(i){dQ(g=d3.geom.quadtree(m),e,q),h=-1;while(++h<a)(k=m[h]).fixed||g.visit(r(k))}h=-1;while(++h<a)k=m[h],k.fixed?(k.x=k.px,k.y=k.py):(k.x-=(k.px-(k.px=k.x))*f,k.y-=(k.py-(k.py=k.y))*f);b.tick({type:"tick",alpha:e})},a.nodes=function(b){return arguments.length?(m=b,a):m},a.links=function(b){return arguments.length?(n=b,a):n},a.size=function(b){return arguments.length?(c=b,a):c},a.linkDistance=function(b){return arguments.length?(g=d3.functor(b),a):g},a.distance=a.linkDistance,a.linkStrength=function(b){return arguments.length?(h=d3.functor(b),a):h},a.friction=function(b){return arguments.length?(f=b,a):f},a.charge=function(b){return arguments.length?(i=typeof b=="function"?b:+b,a):i},a.gravity=function(b){return arguments.length?(j=b,a):j},a.theta=function(b){return arguments.length?(k=b,a):k},a.alpha=function(c){return arguments.length?(e?c>0?e=c:e=0:c>0&&(b.start({type:"start",alpha:e=c}),d3.timer(a.tick)),a):e},a.start=function(){function s(a,c){var d=t(b),e=-1,f=d.length,g;while(++e<f)if(!isNaN(g=d[e][a]))return g;return Math.random()*c}function t(){if(!l){l=[];for(d=0;d<e;++d)l[d]=[];for(d=0;d<f;++d){var a=n[d];l[a.source.index].push(a.target),l[a.target.index].push(a.source)}}return l[b]}var b,d,e=m.length,f=n.length,j=c[0],k=c[1],l,r;for(b=0;b<e;++b)(r=m[b]).index=b,r.weight=0;o=[],p=[];for(b=0;b<f;++b)r=n[b],typeof r.source=="number"&&(r.source=m[r.source]),typeof r.target=="number"&&(r.target=m[r.target]),o[b]=g.call(this,r,b),p[b]=h.call(this,r,b),++r.source.weight,++r.target.weight;for(b=0;b<e;++b)r=m[b],isNaN(r.x)&&(r.x=s("x",j)),isNaN(r.y)&&(r.y=s("y",k)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);q=[];if(typeof i=="function")for(b=0;b<e;++b)q[b]=+i.call(this,m[b],b);else for(b=0;b<e;++b)q[b]=i;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){d||(d=d3.behavior.drag().origin(Object).on("dragstart",s).on("drag",dP).on("dragend",dO)),this.on("mouseover.force",dM).on("mouseout.force",dN).call(d)},d3.rebind(a,b,"on")};var dK,dL;d3.layout.partition=function(){function c(a,b,d,e){var f=a.children;a.x=b,a.y=a.depth*e,a.dx=d,a.dy=e;if(f&&(h=f.length)){var g=-1,h,i,j;d=a.value?d/a.value:0;while(++g<h)c(i=f[g],b,j=i.value*d,e),b+=j}}function d(a){var b=a.children,c=0;if(b&&(f=b.length)){var e=-1,f;while(++e<f)c=Math.max(c,d(b[e]))}return 1+c}function e(e,f){var g=a.call(this,e,f);return c(g[0],0,b[0],b[1]/d(g[0])),g}var a=d3.layout.hierarchy(),b=[1,1];return e.size=function(a){return arguments.length?(b=a,e):b},ef(e,a)},d3.layout.pie=function(){function f(g,h){var i=g.map(function(b,c){return+a.call(f,b,c)}),j=+(typeof c=="function"?c.apply(this,arguments):c),k=((typeof e=="function"?e.apply(this,arguments):e)-c)/d3.sum(i),l=d3.range(g.length);b!=null&&l.sort(b===dT?function(a,b){return i[b]-i[a]}:function(a,c){return b(g[a],g[c])});var m=[];return l.forEach(function(a){m[a]={data:g[a],value:d=i[a],startAngle:j,endAngle:j+=d*k}}),m}var a=Number,b=dT,c=0,e=2*Math.PI;return f.value=function(b){return arguments.length?(a=b,f):a},f.sort=function(a){return arguments.length?(b=a,f):b},f.startAngle=function(a){return arguments.length?(c=a,f):c},f.endAngle=function(a){return arguments.length?(e=a,f):e},f};var dT={};d3.layout.stack=function(){function g(h,i){var j=h.map(function(b,c){return a.call(g,b,c)}),k=j.map(function(a,b){return a.map(function(a,b){return[e.call(g,a,b),f.call(g,a,b)]})}),l=b.call(g,k,i);j=d3.permute(j,l),k=d3.permute(k,l);var m=c.call(g,k,i),n=j.length,o=j[0].length,p,q,r;for(q=0;q<o;++q){d.call(g,j[0][q],r=m[q],k[0][q][1]);for(p=1;p<n;++p)d.call(g,j[p][q],r+=k[p-1][q][1],k[p][q][1])}return h}var a=Object,b=dZ,c=d$,d=dW,e=dU,f=dV;return g.values=function(b){return arguments.length?(a=b,g):a},g.order=function(a){return arguments.length?(b=typeof a=="function"?a:dX.get(a)||dZ,g):b},g.offset=function(a){return arguments.length?(c=typeof a=="function"?a:dY.get(a)||d$,g):c},g.x=function(a){return arguments.length?(e=a,g):e},g.y=function(a){return arguments.length?(f=a,g):f},g.out=function(a){return arguments.length?(d=a,g):d},g};var dX=d3.map({"inside-out":function(a){var b=a.length,c,d,e=a.map(d_),f=a.map(ea),g=d3.range(b).sort(function(a,b){return e[a]-e[b]}),h=0,i=0,j=[],k=[];for(c=0;c<b;++c)d=g[c],h<i?(h+=f[d],j.push(d)):(i+=f[d],k.push(d));return k.reverse().concat(j)},reverse:function(a){return d3.range(a.length).reverse()},"default":dZ}),dY=d3.map({silhouette:function(a){var b=a.length,c=a[0].length,d=[],e=0,f,g,h,i=[];for(g=0;g<c;++g){for(f=0,h=0;f<b;f++)h+=a[f][g][1];h>e&&(e=h),d.push(h)}for(g=0;g<c;++g)i[g]=(e-d[g])/2;return i},wiggle:function(a){var b=a.length,c=a[0],d=c.length,e=0,f,g,h,i,j,k,l,m,n,o=[];o[0]=m=n=0;for(g=1;g<d;++g){for(f=0,i=0;f<b;++f)i+=a[f][g][1];for(f=0,j=0,l=c[g][0]-c[g-1][0];f<b;++f){for(h=0,k=(a[f][g][1]-a[f][g-1][1])/(2*l);h<f;++h)k+=(a[h][g][1]-a[h][g-1][1])/l;j+=k*a[f][g][1]}o[g]=m-=i?j/i*l:0,m<n&&(n=m)}for(g=0;g<d;++g)o[g]-=n;return o},expand:function(a){var b=a.length,c=a[0].length,d=1/b,e,f,g,h=[];for(f=0;f<c;++f){for(e=0,g=0;e<b;e++)g+=a[e][f][1];if(g)for(e=0;e<b;e++)a[e][f][1]/=g;else for(e=0;e<b;e++)a[e][f][1]=d}for(f=0;f<c;++f)h[f]=0;return h},zero:d$});d3.layout.histogram=function(){function e(e,f){var g=[],h=e.map(b,this),i=c.call(this,h,f),j=d.call(this,i,h,f),k,f=-1,l=h.length,m=j.length-1,n=a?1:1/l,o;while(++f<m)k=g[f]=[],k.dx=j[f+1]-(k.x=j[f]),k.y=0;f=-1;while(++f<l)o=h[f],o>=i[0]&&o<=i[1]&&(k=g[d3.bisect(j,o,1,m)-1],k.y+=n,k.push(e[f]));return g}var a=!0,b=Number,c=ee,d=ec;return e.value=function(a){return arguments.length?(b=a,e):b},e.range=function(a){return arguments.length?(c=d3.functor(a),e):c},e.bins=function(a){return arguments.length?(d=typeof a=="number"?function(b){return ed(b,a)}:d3.functor(a),e):d},e.frequency=function(b){return arguments.length?(a=!!b,e):a},e},d3.layout.hierarchy=function(){function e(f,h,i){var j=b.call(g,f,h),k=ek?f:{data:f};k.depth=h,i.push(k);if(j&&(m=j.length)){var l=-1,m,n=k.children=[],o=0,p=h+1;while(++l<m)d=e(j[l],p,i),d.parent=k,n.push(d),o+=d.value;a&&n.sort(a),c&&(k.value=o)}else c&&(k.value=+c.call(g,f,h)||0);return k}function f(a,b){var d=a.children,e=0;if(d&&(i=d.length)){var h=-1,i,j=b+1;while(++h<i)e+=f(d[h],j)}else c&&(e=+c.call(g,ek?a:a.data,b)||0);return c&&(a.value=e),e}function g(a){var b=[];return e(a,0,b),b}var a=ei,b=eg,c=eh;return g.sort=function(b){return arguments.length?(a=b,g):a},g.children=function(a){return arguments.length?(b=a,g):b},g.value=function(a){return arguments.length?(c=a,g):c},g.revalue=function(a){return f(a,0),a},g};var ek=!1;d3.layout.pack=function(){function c(c,d){var e=a.call(this,c,d),f=e[0];f.x=0,f.y=0,es(f);var g=b[0],h=b[1],i=1/Math.max(2*f.r/g,2*f.r/h);return et(f,g/2,h/2,i),e}var a=d3.layout.hierarchy().sort(el),b=[1,1];return c.size=function(a){return arguments.length?(b=a,c):b},ef(c,a)},d3.layout.cluster=function(){function d(d,e){var f=a.call(this,d,e),g=f[0],h,i=0,j,k;eG(g,function(a){var c=a.children;c&&c.length?(a.x=ew(c),a.y=ev(c)):(a.x=h?i+=b(a,h):0,a.y=0,h=a)});var l=ex(g),m=ey(g),n=l.x-b(l,m)/2,o=m.x+b(m,l)/2;return eG(g,function(a){a.x=(a.x-n)/(o-n)*c[0],a.y=(1-(g.y?a.y/g.y:1))*c[1]}),f}var a=d3.layout.hierarchy().sort(null).value(null),b=ez,c=[1,1];return d.separation=function(a){return arguments.length?(b=a,d):b},d.size=function(a){return arguments.length?(c=a,d):c},ef(d,a)},d3.layout.tree=function(){function d(d,e){function h(a,c){var d=a.children,e=a._tree;if(d&&(f=d.length)){var f,g=d[0],i,k=g,l,m=-1;while(++m<f)l=d[m],h(l,i),k=j(l,i,k),i=l;eH(a);var n=.5*(g._tree.prelim+l._tree.prelim);c?(e.prelim=c._tree.prelim+b(a,c),e.mod=e.prelim-n):e.prelim=n}else c&&(e.prelim=c._tree.prelim+b(a,c))}function i(a,b){a.x=a._tree.prelim+b;var c=a.children;if(c&&(e=c.length)){var d=-1,e;b+=a._tree.mod;while(++d<e)i(c[d],b)}}function j(a,c,d){if(c){var e=a,f=a,g=c,h=a.parent.children[0],i=e._tree.mod,j=f._tree.mod,k=g._tree.mod,l=h._tree.mod,m;while(g=eB(g),e=eA(e),g&&e)h=eA(h),f=eB(f),f._tree.ancestor=a,m=g._tree.prelim+k-e._tree.prelim-i+b(g,e),m>0&&(eI(eJ(g,a,d),a,m),i+=m,j+=m),k+=g._tree.mod,i+=e._tree.mod,l+=h._tree.mod,j+=f._tree.mod;g&&!eB(f)&&(f._tree.thread=g,f._tree.mod+=k-j),e&&!eA(h)&&(h._tree.thread=e,h._tree.mod+=i-l,d=a)}return d}var f=a.call(this,d,e),g=f[0];eG(g,function(a,b){a._tree={ancestor:a,prelim:0,mod:0,change:0,shift:0,number:b?b._tree.number+1:0}}),h(g),i(g,-g._tree.prelim);var k=eC(g,eE),l=eC(g,eD),m=eC(g,eF),n=k.x-b(k,l)/2,o=l.x+b(l,k)/2,p=m.depth||1;return eG(g,function(a){a.x=(a.x-n)/(o-n)*c[0],a.y=a.depth/p*c[1],delete a._tree}),f}var a=d3.layout.hierarchy().sort(null).value(null),b=ez,c=[1,1];return d.separation=function(a){return arguments.length?(b=a,d):b},d.size=function(a){return arguments.length?(c=a,d):c},ef(d,a)},d3.layout.treemap=function(){function i(a,b){var c=-1,d=a.length,e,f;while(++c<d)f=(e=a[c]).value*(b<0?0:b),e.area=isNaN(f)||f<=0?0:f}function j(a){var b=a.children;if(b&&b.length){var c=e(a),d=[],f=b.slice(),g,h=Infinity,k,n=Math.min(c.dx,c.dy),o;i(f,c.dx*c.dy/a.value),d.area=0;while((o=f.length)>0)d.push(g=f[o-1]),d.area+=g.area,(k=l(d,n))<=h?(f.pop(),h=k):(d.area-=d.pop().area,m(d,n,c,!1),n=Math.min(c.dx,c.dy),d.length=d.area=0,h=Infinity);d.length&&(m(d,n,c,!0),d.length=d.area=0),b.forEach(j)}}function k(a){var b=a.children;if(b&&b.length){var c=e(a),d=b.slice(),f,g=[];i(d,c.dx*c.dy/a.value),g.area=0;while(f=d.pop())g.push(f),g.area+=f.area,f.z!=null&&(m(g,f.z?c.dx:c.dy,c,!d.length),g.length=g.area=0);b.forEach(k)}}function l(a,b){var c=a.area,d,e=0,f=Infinity,g=-1,i=a.length;while(++g<i){if(!(d=a[g].area))continue;d<f&&(f=d),d>e&&(e=d)}return c*=c,b*=b,c?Math.max(b*e*h/c,c/(b*f*h)):Infinity}function m(a,c,d,e){var f=-1,g=a.length,h=d.x,i=d.y,j=c?b(a.area/c):0,k;if(c==d.dx){if(e||j>d.dy)j=d.dy;while(++f<g)k=a[f],k.x=h,k.y=i,k.dy=j,h+=k.dx=Math.min(d.x+d.dx-h,j?b(k.area/j):0);k.z=!0,k.dx+=d.x+d.dx-h,d.y+=j,d.dy-=j}else{if(e||j>d.dx)j=d.dx;while(++f<g)k=a[f],k.x=h,k.y=i,k.dx=j,i+=k.dy=Math.min(d.y+d.dy-i,j?b(k.area/j):0);k.z=!1,k.dy+=d.y+d.dy-i,d.x+=j,d.dx-=j}}function n(b){var d=g||a(b),e=d[0];return e.x=0,e.y=0,e.dx=c[0],e.dy=c[1],g&&a.revalue(e),i([e],e.dx*e.dy/e.value),(g?k:j)(e),f&&(g=d),d}var a=d3.layout.hierarchy(),b=Math.round,c=[1,1],d=null,e=eK,f=!1,g,h=.5*(1+Math.sqrt(5));return n.size=function(a){return arguments.length?(c=a,n):c},n.padding=function(a){function b(b){var c=a.call(n,b,b.depth);return c==null?eK(b):eL(b,typeof c=="number"?[c,c,c,c]:c)}function c(b){return eL(b,a)}if(!arguments.length)return d;var f;return e=(d=a)==null?eK:(f=typeof a)==="function"?b:f==="number"?(a=[a,a,a,a],c):c,n},n.round=function(a){return arguments.length?(b=a?Math.round:Number,n):b!=Number},n.sticky=function(a){return arguments.length?(f=a,g=null,n):f},n.ratio=function(a){return arguments.length?(h=a,n):h},ef(n,a)},d3.csv=function(a,b){d3.text(a,"text/csv",function(a){b(a&&d3.csv.parse(a))})},d3.csv.parse=function(a){var b;return d3.csv.parseRows(a,function(a,c){if(c){var d={},e=-1,f=b.length;while(++e<f)d[b[e]]=a[e];return d}return b=a,null})},d3.csv.parseRows=function(a,b){function j(){if(f.lastIndex>=a.length)return d;if(i)return i=!1,c;var b=f.lastIndex;if(a.charCodeAt(b)===34){var e=b;while(e++<a.length)if(a.charCodeAt(e)===34){if(a.charCodeAt(e+1)!==34)break;e++}f.lastIndex=e+2;var g=a.charCodeAt(e+1);return g===13?(i=!0,a.charCodeAt(e+2)===10&&f.lastIndex++):g===10&&(i=!0),a.substring(b+1,e).replace(/""/g,'"')}var h=f.exec(a);return h?(i=h[0].charCodeAt(0)!==44,a.substring(b,h.index)):(f.lastIndex=a.length,a.substring(b))}var c={},d={},e=[],f=/\r\n|[,\r\n]/g,g=0,h,i;f.lastIndex=0;while((h=j())!==d){var k=[];while(h!==c&&h!==d)k.push(h),h=j();if(b&&!(k=b(k,g++)))continue;e.push(k)}return e},d3.csv.format=function(a){return a.map(eM).join("\n")},d3.geo={};var eO=Math.PI/180;d3.geo.azimuthal=function(){function i(b){var f=b[0]*eO-e,i=b[1]*eO,j=Math.cos(f),k=Math.sin(f),l=Math.cos(i),m=Math.sin(i),n=a!=="orthographic"?h*m+g*l*j:null,o,p=a==="stereographic"?1/(1+n):a==="gnomonic"?1/n:a==="equidistant"?(o=Math.acos(n),o?o/Math.sin(o):0):a==="equalarea"?Math.sqrt(2/(1+n)):1,q=p*l*k,r=p*(h*l*j-g*m);return[c*q+d[0],c*r+d[1]]}var a="orthographic",b,c=200,d=[480,250],e,f,g,h;return i.invert=function(b){var f=(b[0]-d[0])/c,i=(b[1]-d[1])/c,j=Math.sqrt(f*f+i*i),k=a==="stereographic"?2*Math.atan(j):a==="gnomonic"?Math.atan(j):a==="equidistant"?j:a==="equalarea"?2*Math.asin(.5*j):Math.asin(j),l=Math.sin(k),m=Math.cos(k);return[(e+Math.atan2(f*l,j*g*m+i*h*l))/eO,Math.asin(m*h-(j?i*l*g/j:0))/eO]},i.mode=function(b){return arguments.length?(a=b+"",i):a},i.origin=function(a){return arguments.length?(b=a,e=b[0]*eO,f=b[1]*eO,g=Math.cos(f),h=Math.sin(f),i):b},i.scale=function(a){return arguments.length?(c=+a,i):c},i.translate=function(a){return arguments.length?(d=[+a[0],+a[1]],i):d},i.origin([0,0])},d3.geo.albers=function(){function i(a){var b=f*(eO*a[0]-e),i=Math.sqrt(g-2*f*Math.sin(eO*a[1]))/f;return[c*i*Math.sin(b)+d[0],c*(i*Math.cos(b)-h)+d[1]]}function j(){var c=eO*b[0],d=eO*b[1],j=eO*a[1],k=Math.sin(c),l=Math.cos(c);return e=eO*a[0],f=.5*(k+Math.sin(d)),g=l*l+2*f*k,h=Math.sqrt(g-2*f*Math.sin(j))/f,i}var a=[-98,38],b=[29.5,45.5],c=1e3,d=[480,250],e,f,g,h;return i.invert=function(a){var b=(a[0]-d[0])/c,i=(a[1]-d[1])/c,j=h+i,k=Math.atan2(b,j),l=Math.sqrt(b*b+j*j);return[(e+k/f)/eO,Math.asin((g-l*l*f*f)/(2*f))/eO]},i.origin=function(b){return arguments.length?(a=[+b[0],+b[1]],j()):a},i.parallels=function(a){return arguments.length?(b=[+a[0],+a[1]],j()):b},i.scale=function(a){return arguments.length?(c=+a,i):c},i.translate=function(a){return arguments.length?(d=[+a[0],+a[1]],i):d},j()},d3.geo.albersUsa=function(){function e(e){var f=e[0],g=e[1];return(g>50?b:f<-140?c:g<21?d:a)(e)}var a=d3.geo.albers(),b=d3.geo.albers().origin([-160,60]).parallels([55,65]),c=d3.geo.albers().origin([-160,20]).parallels([8,18]),d=d3.geo.albers().origin([-60,10]).parallels([8,18]);return e.scale=function(f){return arguments.length?(a.scale(f),b.scale(f*.6),c.scale(f),d.scale(f*1.5),e.translate(a.translate())):a.scale()},e.translate=function(f){if(!arguments.length)return a.translate();var g=a.scale()/1e3,h=f[0],i=f[1];return a.translate(f),b.translate([h-400*g,i+170*g]),c.translate([h-190*g,i+200*g]),d.translate([h+580*g,i+430*g]),e},e.scale(a.scale())},d3.geo.bonne=function(){function g(g){var h=g[0]*eO-c,i=g[1]*eO-d;if(e){var j=f+e-i,k=h*Math.cos(i)/j;h=j*Math.sin(k),i=j*Math.cos(k)-f}else h*=Math.cos(i),i*=-1;return[a*h+b[0],a*i+b[1]]}var a=200,b=[480,250],c,d,e,f;return g.invert=function(d){var g=(d[0]-b[0])/a,h=(d[1]-b[1])/a;if(e){var i=f+h,j=Math.sqrt(g*g+i*i);h=f+e-j,g=c+j*Math.atan2(g,i)/Math.cos(h)}else h*=-1,g/=Math.cos(h);return[g/eO,h/eO]},g.parallel=function(a){return arguments.length?(f=1/Math.tan(e=a*eO),g):e/eO},g.origin=function(a){return arguments.length?(c=a[0]*eO,d=a[1]*eO,g):[c/eO,d/eO]},g.scale=function(b){return arguments.length?(a=+b,g):a},g.translate=function(a){return arguments.length?(b=[+a[0],+a[1]],g):b},g.origin([0,0]).parallel(45)},d3.geo.equirectangular=function(){function c(c){var d=c[0]/360,e=-c[1]/360;return[a*d+b[0],a*e+b[1]]}var a=500,b=[480,250];return c.invert=function(c){var d=(c[0]-b[0])/a,e=(c[1]-b[1])/a;return[360*d,-360*e]},c.scale=function(b){return arguments.length?(a=+b,c):a},c.translate=function(a){return arguments.length?(b=[+a[0],+a[1]],c):b},c},d3.geo.mercator=function(){function c(c){var d=c[0]/360,e=-(Math.log(Math.tan(Math.PI/4+c[1]*eO/2))/eO)/360;return[a*d+b[0],a*Math.max(-0.5,Math.min(.5,e))+b[1]]}var a=500,b=[480,250];return c.invert=function(c){var d=(c[0]-b[0])/a,e=(c[1]-b[1])/a;return[360*d,2*Math.atan(Math.exp(-360*e*eO))/eO-90]},c.scale=function(b){return arguments.length?(a=+b,c):a},c.translate=function(a){return arguments.length?(b=[+a[0],+a[1]],c):b},c},d3.geo.path=function(){function d(c,d){return typeof a=="function"&&(b=eQ(a.apply(this,arguments))),f(c)||null}function e(a){return c(a).join(",")}function h(a){var b=k(a[0]),c=0,d=a.length;while(++c<d)b-=k(a[c]);return b}function i(a){var b=d3.geom.polygon(a[0].map(c)),d=b.area(),e=b.centroid(d<0?(d*=-1,1):-1),f=e[0],g=e[1],h=d,i=0,j=a.length;while(++i<j)b=d3.geom.polygon(a[i].map(c)),d=b.area(),e=b.centroid(d<0?(d*=-1,1):-1),f-=e[0],g-=e[1],h-=d;return[f,g,6*h]}function k(a){return Math.abs(d3.geom.polygon(a.map(c)).area())}var a=4.5,b=eQ(a),c=d3.geo.albersUsa(),f=eP({FeatureCollection:function(a){var b=[],c=a.features,d=-1,e=c.length;while(++d<e)b.push(f(c[d].geometry));return b.join("")},Feature:function(a){return f(a.geometry)},Point:function(a){return"M"+e(a.coordinates)+b},MultiPoint:function(a){var c=[],d=a.coordinates,f=-1,g=d.length;while(++f<g)c.push("M",e(d[f]),b);return c.join("")},LineString:function(a){var b=["M"],c=a.coordinates,d=-1,f=c.length;while(++d<f)b.push(e(c[d]),"L");return b.pop(),b.join("")},MultiLineString:function(a){var b=[],c=a.coordinates,d=-1,f=c.length,g,h,i;while(++d<f){g=c[d],h=-1,i=g.length,b.push("M");while(++h<i)b.push(e(g[h]),"L");b.pop()}return b.join("")},Polygon:function(a){var b=[],c=a.coordinates,d=-1,f=c.length,g,h,i;while(++d<f){g=c[d],h=-1;if((i=g.length-1)>0){b.push("M");while(++h<i)b.push(e(g[h]),"L");b[b.length-1]="Z"}}return b.join("")},MultiPolygon:function(a){var b=[],c=a.coordinates,d=-1,f=c.length,g,h,i,j,k,l;while(++d<f){g=c[d],h=-1,i=g.length;while(++h<i){j=g[h],k=-1;if((l=j.length-1)>0){b.push("M");while(++k<l)b.push(e(j[k]),"L");b[b.length-1]="Z"}}}return b.join("")},GeometryCollection:function(a){var b=[],c=a.geometries,d=-1,e=c.length;while(++d<e)b.push(f(c[d]));return b.join("")}}),g=d.area=eP({FeatureCollection:function(a){var b=0,c=a.features,d=-1,e=c.length;while(++d<e)b+=g(c[d]);return b},Feature:function(a){return g(a.geometry)},Polygon:function(a){return h(a.coordinates)},MultiPolygon:function(a){var b=0,c=a.coordinates,d=-1,e=c.length;while(++d<e)b+=h(c[d]);return b},GeometryCollection:function(a){var b=0,c=a.geometries,d=-1,e=c.length;while(++d<e)b+=g(c[d]);return b}},0),j=d.centroid=eP({Feature:function(a){return j(a.geometry)},Polygon:function(a){var b=i(a.coordinates);return[b[0]/b[2],b[1]/b[2]]},MultiPolygon:function(a){var b=0,c=a.coordinates,d,e=0,f=0,g=0,h=-1,j=c.length;while(++h<j)d=i(c[h]),e+=d[0],f+=d[1],g+=d[2];return[e/g,f/g]}});return d.projection=function(a){return c=a,d},d.pointRadius=function(c){return typeof c=="function"?a=c:(a=+c,b=eQ(a)),d},d},d3.geo.bounds=function(a){var b=Infinity,c=Infinity,d=-Infinity,e=-Infinity;return eR(a,function(a,f){a<b&&(b=a),a>d&&(d=a),f<c&&(c=f),f>e&&(e=f)}),[[b,c],[d,e]]};var eS={Feature:eT,FeatureCollection:eU,GeometryCollection:eV,LineString:eW,MultiLineString:eX,MultiPoint:eW,MultiPolygon:eY,Point:eZ,Polygon:e$};d3.geo.circle=function(){function e(){}function f(a){return d.distance(a)<c}function h(a){var b=-1,e=a.length,f=[],g,h,j,k,l;while(++b<e)l=d.distance(j=a[b]),l<c?(h&&f.push(fb(h,j)((k-c)/(k-l))),f.push(j),g=h=null):(h=j,!g&&f.length&&(f.push(fb(f[f.length-1],h)((c-k)/(l-k))),g=h)),k=l;return h&&f.length&&(l=d.distance(j=f[0]),f.push(fb(h,j)((k-c)/(k-l)))),i(f)}function i(a){var b=0,c=a.length,e,f,g=c?[a[0]]:a,h,i=d.source();while(++b<c){h=d.source(a[b-1])(a[b]).coordinates;for(e=0,f=h.length;++e<f;)g.push(h[e])}return d.source(i),g}var a=[0,0],b=89.99,c=b*eO,d=d3.geo.greatArc().target(Object);e.clip=function(b){return d.source(typeof a=="function"?a.apply(this,arguments):a),g(b)};var g=eP({FeatureCollection:function(a){var b=a.features.map(g).filter(Object);return b&&(a=Object.create(a),a.features=b,a)},Feature:function(a){var b=g(a.geometry);return b&&(a=Object.create(a),a.geometry=b,a)},Point:function(a){return f
(a.coordinates)&&a},MultiPoint:function(a){var b=a.coordinates.filter(f);return b.length&&{type:a.type,coordinates:b}},LineString:function(a){var b=h(a.coordinates);return b.length&&(a=Object.create(a),a.coordinates=b,a)},MultiLineString:function(a){var b=a.coordinates.map(h).filter(function(a){return a.length});return b.length&&(a=Object.create(a),a.coordinates=b,a)},Polygon:function(a){var b=a.coordinates.map(h);return b[0].length&&(a=Object.create(a),a.coordinates=b,a)},MultiPolygon:function(a){var b=a.coordinates.map(function(a){return a.map(h)}).filter(function(a){return a[0].length});return b.length&&(a=Object.create(a),a.coordinates=b,a)},GeometryCollection:function(a){var b=a.geometries.map(g).filter(Object);return b.length&&(a=Object.create(a),a.geometries=b,a)}});return e.origin=function(b){return arguments.length?(a=b,e):a},e.angle=function(a){return arguments.length?(c=(b=+a)*eO,e):b},e.precision=function(a){return arguments.length?(d.precision(a),e):d.precision()},e},d3.geo.greatArc=function(){function d(){var d=typeof a=="function"?a.apply(this,arguments):a,e=typeof b=="function"?b.apply(this,arguments):b,f=fb(d,e),g=c/f.d,h=0,i=[d];while((h+=g)<1)i.push(f(h));return i.push(e),{type:"LineString",coordinates:i}}var a=e_,b=fa,c=6*eO;return d.distance=function(){var c=typeof a=="function"?a.apply(this,arguments):a,d=typeof b=="function"?b.apply(this,arguments):b;return fb(c,d).d},d.source=function(b){return arguments.length?(a=b,d):a},d.target=function(a){return arguments.length?(b=a,d):b},d.precision=function(a){return arguments.length?(c=a*eO,d):c/eO},d},d3.geo.greatCircle=d3.geo.circle,d3.geom={},d3.geom.contour=function(a,b){var c=b||fe(a),d=[],e=c[0],f=c[1],g=0,h=0,i=NaN,j=NaN,k=0;do k=0,a(e-1,f-1)&&(k+=1),a(e,f-1)&&(k+=2),a(e-1,f)&&(k+=4),a(e,f)&&(k+=8),k===6?(g=j===-1?-1:1,h=0):k===9?(g=0,h=i===1?-1:1):(g=fc[k],h=fd[k]),g!=i&&h!=j&&(d.push([e,f]),i=g,j=h),e+=g,f+=h;while(c[0]!=e||c[1]!=f);return d};var fc=[1,0,1,1,-1,0,-1,1,0,0,0,0,-1,0,-1,NaN],fd=[0,-1,0,0,0,-1,0,0,1,-1,1,1,0,-1,0,NaN];d3.geom.hull=function(a){if(a.length<3)return[];var b=a.length,c=b-1,d=[],e=[],f,g,h=0,i,j,k,l,m,n,o,p;for(f=1;f<b;++f)a[f][1]<a[h][1]?h=f:a[f][1]==a[h][1]&&(h=a[f][0]<a[h][0]?f:h);for(f=0;f<b;++f){if(f===h)continue;j=a[f][1]-a[h][1],i=a[f][0]-a[h][0],d.push({angle:Math.atan2(j,i),index:f})}d.sort(function(a,b){return a.angle-b.angle}),o=d[0].angle,n=d[0].index,m=0;for(f=1;f<c;++f)g=d[f].index,o==d[f].angle?(i=a[n][0]-a[h][0],j=a[n][1]-a[h][1],k=a[g][0]-a[h][0],l=a[g][1]-a[h][1],i*i+j*j>=k*k+l*l?d[f].index=-1:(d[m].index=-1,o=d[f].angle,m=f,n=g)):(o=d[f].angle,m=f,n=g);e.push(h);for(f=0,g=0;f<2;++g)d[g].index!==-1&&(e.push(d[g].index),f++);p=e.length;for(;g<c;++g){if(d[g].index===-1)continue;while(!ff(e[p-2],e[p-1],d[g].index,a))--p;e[p++]=d[g].index}var q=[];for(f=0;f<p;++f)q.push(a[e[f]]);return q},d3.geom.polygon=function(a){return a.area=function(){var b=0,c=a.length,d=a[c-1][0]*a[0][1],e=a[c-1][1]*a[0][0];while(++b<c)d+=a[b-1][0]*a[b][1],e+=a[b-1][1]*a[b][0];return(e-d)*.5},a.centroid=function(b){var c=-1,d=a.length,e=0,f=0,g,h=a[d-1],i;arguments.length||(b=-1/(6*a.area()));while(++c<d)g=h,h=a[c],i=g[0]*h[1]-h[0]*g[1],e+=(g[0]+h[0])*i,f+=(g[1]+h[1])*i;return[e*b,f*b]},a.clip=function(b){var c,d=-1,e=a.length,f,g,h=a[e-1],i,j,k;while(++d<e){c=b.slice(),b.length=0,i=a[d],j=c[(g=c.length)-1],f=-1;while(++f<g)k=c[f],fg(k,h,i)?(fg(j,h,i)||b.push(fh(j,k,h,i)),b.push(k)):fg(j,h,i)&&b.push(fh(j,k,h,i)),j=k;h=i}return b},a},d3.geom.voronoi=function(a){var b=a.map(function(){return[]});return fj(a,function(a){var c,d,e,f,g,h;a.a===1&&a.b>=0?(c=a.ep.r,d=a.ep.l):(c=a.ep.l,d=a.ep.r),a.a===1?(g=c?c.y:-1e6,e=a.c-a.b*g,h=d?d.y:1e6,f=a.c-a.b*h):(e=c?c.x:-1e6,g=a.c-a.a*e,f=d?d.x:1e6,h=a.c-a.a*f);var i=[e,g],j=[f,h];b[a.region.l.index].push(i,j),b[a.region.r.index].push(i,j)}),b.map(function(b,c){var d=a[c][0],e=a[c][1];return b.forEach(function(a){a.angle=Math.atan2(a[0]-d,a[1]-e)}),b.sort(function(a,b){return a.angle-b.angle}).filter(function(a,c){return!c||a.angle-b[c-1].angle>1e-10})})};var fi={l:"r",r:"l"};d3.geom.delaunay=function(a){var b=a.map(function(){return[]}),c=[];return fj(a,function(c){b[c.region.l.index].push(a[c.region.r.index])}),b.forEach(function(b,d){var e=a[d],f=e[0],g=e[1];b.forEach(function(a){a.angle=Math.atan2(a[0]-f,a[1]-g)}),b.sort(function(a,b){return a.angle-b.angle});for(var h=0,i=b.length-1;h<i;h++)c.push([e,b[h],b[h+1]])}),c},d3.geom.quadtree=function(a,b,c,d,e){function k(a,b,c,d,e,f){if(isNaN(b.x)||isNaN(b.y))return;if(a.leaf){var g=a.point;g?Math.abs(g.x-b.x)+Math.abs(g.y-b.y)<.01?l(a,b,c,d,e,f):(a.point=null,l(a,g,c,d,e,f),l(a,b,c,d,e,f)):a.point=b}else l(a,b,c,d,e,f)}function l(a,b,c,d,e,f){var g=(c+e)*.5,h=(d+f)*.5,i=b.x>=g,j=b.y>=h,l=(j<<1)+i;a.leaf=!1,a=a.nodes[l]||(a.nodes[l]=fk()),i?c=g:e=g,j?d=h:f=h,k(a,b,c,d,e,f)}var f,g=-1,h=a.length;h&&isNaN(a[0].x)&&(a=a.map(fm));if(arguments.length<5)if(arguments.length===3)e=d=c,c=b;else{b=c=Infinity,d=e=-Infinity;while(++g<h)f=a[g],f.x<b&&(b=f.x),f.y<c&&(c=f.y),f.x>d&&(d=f.x),f.y>e&&(e=f.y);var i=d-b,j=e-c;i>j?e=c+i:d=b+j}var m=fk();return m.add=function(a){k(m,a,b,c,d,e)},m.visit=function(a){fl(a,m,b,c,d,e)},a.forEach(m.add),m},d3.time={};var fn=Date;fo.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){fp.setUTCDate.apply(this._,arguments)},setDay:function(){fp.setUTCDay.apply(this._,arguments)},setFullYear:function(){fp.setUTCFullYear.apply(this._,arguments)},setHours:function(){fp.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){fp.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){fp.setUTCMinutes.apply(this._,arguments)},setMonth:function(){fp.setUTCMonth.apply(this._,arguments)},setSeconds:function(){fp.setUTCSeconds.apply(this._,arguments)},setTime:function(){fp.setTime.apply(this._,arguments)}};var fp=Date.prototype;d3.time.format=function(a){function c(c){var d=[],e=-1,f=0,g,h;while(++e<b)a.charCodeAt(e)==37&&(d.push(a.substring(f,e),(h=fv[g=a.charAt(++e)])?h(c):g),f=e+1);return d.push(a.substring(f,e)),d.join("")}var b=a.length;return c.parse=function(b){var c={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},d=fq(c,a,b,0);if(d!=b.length)return null;"p"in c&&(c.H=c.H%12+c.p*12);var e=new fn;return e.setFullYear(c.y,c.m,c.d),e.setHours(c.H,c.M,c.S,c.L),e},c.toString=function(){return a},c};var fr=d3.format("02d"),fs=d3.format("03d"),ft=d3.format("04d"),fu=d3.format("2d"),fv={a:function(a){return d3_time_weekdays[a.getDay()].substring(0,3)},A:function(a){return d3_time_weekdays[a.getDay()]},b:function(a){return fG[a.getMonth()].substring(0,3)},B:function(a){return fG[a.getMonth()]},c:d3.time.format("%a %b %e %H:%M:%S %Y"),d:function(a){return fr(a.getDate())},e:function(a){return fu(a.getDate())},H:function(a){return fr(a.getHours())},I:function(a){return fr(a.getHours()%12||12)},j:function(a){return fs(1+d3.time.dayOfYear(a))},L:function(a){return fs(a.getMilliseconds())},m:function(a){return fr(a.getMonth()+1)},M:function(a){return fr(a.getMinutes())},p:function(a){return a.getHours()>=12?"PM":"AM"},S:function(a){return fr(a.getSeconds())},U:function(a){return fr(d3.time.sundayOfYear(a))},w:function(a){return a.getDay()},W:function(a){return fr(d3.time.mondayOfYear(a))},x:d3.time.format("%m/%d/%y"),X:d3.time.format("%H:%M:%S"),y:function(a){return fr(a.getFullYear()%100)},Y:function(a){return ft(a.getFullYear()%1e4)},Z:fW,"%":function(a){return"%"}},fw={a:fx,A:fy,b:fB,B:fD,c:fH,d:fO,e:fO,H:fP,I:fP,L:fS,m:fN,M:fQ,p:fU,S:fR,x:fI,X:fJ,y:fL,Y:fK},fz=/^(?:sun|mon|tue|wed|thu|fri|sat)/i,fA=/^(?:Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/i;d3_time_weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var fC=d3.map({jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11}),fE=/^(?:January|February|March|April|May|June|July|August|September|October|November|December)/ig,fF=d3.map({january:0,february:1,march:2,april:3,may:4,june:5,july:6,august:7,september:8,october:9,november:10,december:11}),fG=["January","February","March","April","May","June","July","August","September","October","November","December"],fT=/\s*\d+/,fV=d3.map({am:0,pm:1});d3.time.format.utc=function(a){function c(a){try{fn=fo;var c=new fn;return c._=a,b(c)}finally{fn=Date}}var b=d3.time.format(a);return c.parse=function(a){try{fn=fo;var c=b.parse(a);return c&&c._}finally{fn=Date}},c.toString=b.toString,c};var fX=d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");d3.time.format.iso=Date.prototype.toISOString?fY:fX,fY.parse=function(a){return new Date(a)},fY.toString=fX.toString,d3.time.second=fZ(function(a){return new fn(Math.floor(a/1e3)*1e3)},function(a,b){a.setTime(a.getTime()+Math.floor(b)*1e3)},function(a){return a.getSeconds()}),d3.time.seconds=d3.time.second.range,d3.time.seconds.utc=d3.time.second.utc.range,d3.time.minute=fZ(function(a){return new fn(Math.floor(a/6e4)*6e4)},function(a,b){a.setTime(a.getTime()+Math.floor(b)*6e4)},function(a){return a.getMinutes()}),d3.time.minutes=d3.time.minute.range,d3.time.minutes.utc=d3.time.minute.utc.range,d3.time.hour=fZ(function(a){var b=a.getTimezoneOffset()/60;return new fn((Math.floor(a/36e5-b)+b)*36e5)},function(a,b){a.setTime(a.getTime()+Math.floor(b)*36e5)},function(a){return a.getHours()}),d3.time.hours=d3.time.hour.range,d3.time.hours.utc=d3.time.hour.utc.range,d3.time.day=fZ(function(a){return new fn(a.getFullYear(),a.getMonth(),a.getDate())},function(a,b){a.setDate(a.getDate()+b)},function(a){return a.getDate()-1}),d3.time.days=d3.time.day.range,d3.time.days.utc=d3.time.day.utc.range,d3.time.dayOfYear=function(a){var b=d3.time.year(a);return Math.floor((a-b)/864e5-(a.getTimezoneOffset()-b.getTimezoneOffset())/1440)},d3_time_weekdays.forEach(function(a,b){a=a.toLowerCase(),b=7-b;var c=d3.time[a]=fZ(function(a){return(a=d3.time.day(a)).setDate(a.getDate()-(a.getDay()+b)%7),a},function(a,b){a.setDate(a.getDate()+Math.floor(b)*7)},function(a){var c=d3.time.year(a).getDay();return Math.floor((d3.time.dayOfYear(a)+(c+b)%7)/7)-(c!==b)});d3.time[a+"s"]=c.range,d3.time[a+"s"].utc=c.utc.range,d3.time[a+"OfYear"]=function(a){var c=d3.time.year(a).getDay();return Math.floor((d3.time.dayOfYear(a)+(c+b)%7)/7)}}),d3.time.week=d3.time.sunday,d3.time.weeks=d3.time.sunday.range,d3.time.weeks.utc=d3.time.sunday.utc.range,d3.time.weekOfYear=d3.time.sundayOfYear,d3.time.month=fZ(function(a){return new fn(a.getFullYear(),a.getMonth(),1)},function(a,b){a.setMonth(a.getMonth()+b)},function(a){return a.getMonth()}),d3.time.months=d3.time.month.range,d3.time.months.utc=d3.time.month.utc.range,d3.time.year=fZ(function(a){return new fn(a.getFullYear(),0,1)},function(a,b){a.setFullYear(a.getFullYear()+b)},function(a){return a.getFullYear()}),d3.time.years=d3.time.year.range,d3.time.years.utc=d3.time.year.utc.range;var gf=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],gg=[[d3.time.second,1],[d3.time.second,5],[d3.time.second,15],[d3.time.second,30],[d3.time.minute,1],[d3.time.minute,5],[d3.time.minute,15],[d3.time.minute,30],[d3.time.hour,1],[d3.time.hour,3],[d3.time.hour,6],[d3.time.hour,12],[d3.time.day,1],[d3.time.day,2],[d3.time.week,1],[d3.time.month,1],[d3.time.month,3],[d3.time.year,1]],gh=[[d3.time.format("%Y"),function(a){return!0}],[d3.time.format("%B"),function(a){return a.getMonth()}],[d3.time.format("%b %d"),function(a){return a.getDate()!=1}],[d3.time.format("%a %d"),function(a){return a.getDay()&&a.getDate()!=1}],[d3.time.format("%I %p"),function(a){return a.getHours()}],[d3.time.format("%I:%M"),function(a){return a.getMinutes()}],[d3.time.format(":%S"),function(a){return a.getSeconds()}],[d3.time.format(".%L"),function(a){return a.getMilliseconds()}]],gi=d3.scale.linear(),gj=gc(gh);gg.year=function(a,b){return gi.domain(a.map(ge)).ticks(b).map(gd)},d3.time.scale=function(){return f_(d3.scale.linear(),gg,gj)};var gk=gg.map(function(a){return[a[0].utc,a[1]]}),gl=[[d3.time.format.utc("%Y"),function(a){return!0}],[d3.time.format.utc("%B"),function(a){return a.getUTCMonth()}],[d3.time.format.utc("%b %d"),function(a){return a.getUTCDate()!=1}],[d3.time.format.utc("%a %d"),function(a){return a.getUTCDay()&&a.getUTCDate()!=1}],[d3.time.format.utc("%I %p"),function(a){return a.getUTCHours()}],[d3.time.format.utc("%I:%M"),function(a){return a.getUTCMinutes()}],[d3.time.format.utc(":%S"),function(a){return a.getUTCSeconds()}],[d3.time.format.utc(".%L"),function(a){return a.getUTCMilliseconds()}]],gm=gc(gl);gk.year=function(a,b){return gi.domain(a.map(go)).ticks(b).map(gn)},d3.time.scale.utc=function(){return f_(d3.scale.linear(),gk,gm)}})();/*
    http://www.JSON.org/json2.js
    2011-10-19

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());// Underscore.js 1.3.1
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function q(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return false;switch(e){case "[object String]":return a==String(c);case "[object Number]":return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var f=d.length;f--;)if(d[f]==a)return true;d.push(a);var f=0,g=true;if(e=="[object Array]"){if(f=a.length,g=f==c.length)for(;f--;)if(!(g=f in a==f in c&&q(a[f],c[f],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return false;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&q(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,
h)&&!f--)break;g=!f}}d.pop();return g}var r=this,G=r._,n={},k=Array.prototype,o=Object.prototype,i=k.slice,H=k.unshift,l=o.toString,I=o.hasOwnProperty,w=k.forEach,x=k.map,y=k.reduce,z=k.reduceRight,A=k.filter,B=k.every,C=k.some,p=k.indexOf,D=k.lastIndexOf,o=Array.isArray,J=Object.keys,s=Function.prototype.bind,b=function(a){return new m(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else r._=b;b.VERSION="1.3.1";var j=b.each=
b.forEach=function(a,c,d){if(a!=null)if(w&&a.forEach===w)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===n)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===n)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(x&&a.map===x)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==
null&&(a=[]);if(y&&a.reduce===y)return e&&(c=b.bind(c,e)),f?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){f?d=c.call(e,d,a,b,i):(d=a,f=true)});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(z&&a.reduceRight===z)return e&&(c=b.bind(c,e)),f?a.reduceRight(c,d):a.reduceRight(c);var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=
function(a,c,b){var e;E(a,function(a,g,h){if(c.call(b,a,g,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(A&&a.filter===A)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(B&&a.every===B)return a.every(c,b);j(a,function(a,g,h){if(!(e=
e&&c.call(b,a,g,h)))return n});return e};var E=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(C&&a.some===C)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return n});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return p&&a.indexOf===p?a.indexOf(c)!=-1:b=E(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});
return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){f==0?b[0]=a:(d=Math.floor(Math.random()*(f+1)),b[f]=b[d],b[d]=a)});return b};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,g){return{value:a,criteria:c.call(d,a,b,g)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,
c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=
b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,g,h){if(0==h||(c===true?b.last(d)!=g:!b.include(d,g)))d[d.length]=g,e[e.length]=a[h];return d},[]);
return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1));return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,
d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(p&&a.indexOf===p)return a.indexOf(c);for(d=0,e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(D&&a.lastIndexOf===D)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};
var F=function(){};b.bind=function(a,c){var d,e;if(a.bind===s&&s)return s.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));F.prototype=a.prototype;var b=new F,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,
c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;var b;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);i()},c));g?h=true:
a.apply(d,e);i();g=true}};b.debounce=function(a,b){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=null;a.apply(e,f)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};
b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=J||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.defaults=function(a){j(i.call(arguments,
1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return q(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=o||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};
b.isArguments=function(a){return l.call(a)=="[object Arguments]"};if(!b.isArguments(arguments))b.isArguments=function(a){return!(!a||!b.has(a,"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};
b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return I.call(a,b)};b.noConflict=function(){r._=G;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),
function(c){K(c,b[c]=a[c])})};var L=0;b.uniqueId=function(a){var b=L++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/.^/,u=function(a){return a.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape||t,function(a,b){return"',_.escape("+
u(b)+"),'"}).replace(d.interpolate||t,function(a,b){return"',"+u(b)+",'"}).replace(d.evaluate||t,function(a,b){return"');"+u(b).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);return c?e(c,b):function(a){return e.call(this,a,b)}};b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var v=function(a,c){return c?b(a).chain():a},K=function(a,c){m.prototype[a]=
function(){var a=i.call(arguments);H.call(a,this._wrapped);return v(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return v(d,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return v(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=
true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var Mustache = (typeof module !== "undefined" && module.exports) || {};

(function (exports) {

  exports.name = "mustache.js";
  exports.version = "0.5.0-dev";
  exports.tags = ["{{", "}}"];
  exports.parse = parse;
  exports.compile = compile;
  exports.render = render;
  exports.clearCache = clearCache;

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  var _toString = Object.prototype.toString;
  var _isArray = Array.isArray;
  var _forEach = Array.prototype.forEach;
  var _trim = String.prototype.trim;

  var isArray;
  if (_isArray) {
    isArray = _isArray;
  } else {
    isArray = function (obj) {
      return _toString.call(obj) === "[object Array]";
    };
  }

  var forEach;
  if (_forEach) {
    forEach = function (obj, callback, scope) {
      return _forEach.call(obj, callback, scope);
    };
  } else {
    forEach = function (obj, callback, scope) {
      for (var i = 0, len = obj.length; i < len; ++i) {
        callback.call(scope, obj[i], i, obj);
      }
    };
  }

  var spaceRe = /^\s*$/;

  function isWhitespace(string) {
    return spaceRe.test(string);
  }

  var trim;
  if (_trim) {
    trim = function (string) {
      return string == null ? "" : _trim.call(string);
    };
  } else {
    var trimLeft, trimRight;

    if (isWhitespace("\xA0")) {
      trimLeft = /^\s+/;
      trimRight = /\s+$/;
    } else {
      // IE doesn't match non-breaking spaces with \s, thanks jQuery.
      trimLeft = /^[\s\xA0]+/;
      trimRight = /[\s\xA0]+$/;
    }

    trim = function (string) {
      return string == null ? "" :
        String(string).replace(trimLeft, "").replace(trimRight, "");
    };
  }

  var escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;'
  };

  function escapeHTML(string) {
    return String(string).replace(/&(?!\w+;)|[<>"']/g, function (s) {
      return escapeMap[s] || s;
    });
  }

  /**
   * Adds the `template`, `line`, and `file` properties to the given error
   * object and alters the message to provide more useful debugging information.
   */
  function debug(e, template, line, file) {
    file = file || "<template>";

    var lines = template.split("\n"),
        start = Math.max(line - 3, 0),
        end = Math.min(lines.length, line + 3),
        context = lines.slice(start, end);

    var c;
    for (var i = 0, len = context.length; i < len; ++i) {
      c = i + start + 1;
      context[i] = (c === line ? " >> " : "    ") + context[i];
    }

    e.template = template;
    e.line = line;
    e.file = file;
    e.message = [file + ":" + line, context.join("\n"), "", e.message].join("\n");

    return e;
  }

  /**
   * Looks up the value of the given `name` in the given context `stack`.
   */
  function lookup(name, stack, defaultValue) {
    if (name === ".") {
      return stack[stack.length - 1];
    }

    var names = name.split(".");
    var lastIndex = names.length - 1;
    var target = names[lastIndex];

    var value, context, i = stack.length, j, localStack;
    while (i) {
      localStack = stack.slice(0);
      context = stack[--i];

      j = 0;
      while (j < lastIndex) {
        context = context[names[j++]];

        if (context == null) {
          break;
        }

        localStack.push(context);
      }

      if (context && typeof context === "object" && target in context) {
        value = context[target];
        break;
      }
    }

    // If the value is a function, call it in the current context.
    if (typeof value === "function") {
      value = value.call(localStack[localStack.length - 1]);
    }

    if (value == null)  {
      return defaultValue;
    }

    return value;
  }

  function renderSection(name, stack, callback, inverted) {
    var buffer = "";
    var value =  lookup(name, stack);

    if (inverted) {
      // From the spec: inverted sections may render text once based on the
      // inverse value of the key. That is, they will be rendered if the key
      // doesn't exist, is false, or is an empty list.
      if (value == null || value === false || (isArray(value) && value.length === 0)) {
        buffer += callback();
      }
    } else if (isArray(value)) {
      forEach(value, function (value) {
        stack.push(value);
        buffer += callback();
        stack.pop();
      });
    } else if (typeof value === "object") {
      stack.push(value);
      buffer += callback();
      stack.pop();
    } else if (typeof value === "function") {
      var scope = stack[stack.length - 1];
      var scopedRender = function (template) {
        return render(template, scope);
      };
      buffer += value.call(scope, callback(), scopedRender) || "";
    } else if (value) {
      buffer += callback();
    }

    return buffer;
  }

  /**
   * Parses the given `template` and returns the source of a function that,
   * with the proper arguments, will render the template. Recognized options
   * include the following:
   *
   *   - file     The name of the file the template comes from (displayed in
   *              error messages)
   *   - tags     An array of open and close tags the `template` uses. Defaults
   *              to the value of Mustache.tags
   *   - debug    Set `true` to log the body of the generated function to the
   *              console
   *   - space    Set `true` to preserve whitespace from lines that otherwise
   *              contain only a {{tag}}. Defaults to `false`
   */
  function parse(template, options) {
    options = options || {};

    var tags = options.tags || exports.tags,
        openTag = tags[0],
        closeTag = tags[tags.length - 1];

    var code = [
      'var buffer = "";', // output buffer
      "\nvar line = 1;", // keep track of source line number
      "\ntry {",
      '\nbuffer += "'
    ];

    var spaces = [],      // indices of whitespace in code on the current line
        hasTag = false,   // is there a {{tag}} on the current line?
        nonSpace = false; // is there a non-space char on the current line?

    // Strips all space characters from the code array for the current line
    // if there was a {{tag}} on it and otherwise only spaces.
    var stripSpace = function () {
      if (hasTag && !nonSpace && !options.space) {
        while (spaces.length) {
          code.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    };

    var sectionStack = [], updateLine, nextOpenTag, nextCloseTag;

    var setTags = function (source) {
      tags = trim(source).split(/\s+/);
      nextOpenTag = tags[0];
      nextCloseTag = tags[tags.length - 1];
    };

    var includePartial = function (source) {
      code.push(
        '";',
        updateLine,
        '\nvar partial = partials["' + trim(source) + '"];',
        '\nif (partial) {',
        '\n  buffer += render(partial,stack[stack.length - 1],partials);',
        '\n}',
        '\nbuffer += "'
      );
    };

    var openSection = function (source, inverted) {
      var name = trim(source);

      if (name === "") {
        throw debug(new Error("Section name may not be empty"), template, line, options.file);
      }

      sectionStack.push({name: name, inverted: inverted});

      code.push(
        '";',
        updateLine,
        '\nvar name = "' + name + '";',
        '\nvar callback = (function () {',
        '\n  return function () {',
        '\n    var buffer = "";',
        '\nbuffer += "'
      );
    };

    var openInvertedSection = function (source) {
      openSection(source, true);
    };

    var closeSection = function (source) {
      var name = trim(source);
      var openName = sectionStack.length != 0 && sectionStack[sectionStack.length - 1].name;

      if (!openName || name != openName) {
        throw debug(new Error('Section named "' + name + '" was never opened'), template, line, options.file);
      }

      var section = sectionStack.pop();

      code.push(
        '";',
        '\n    return buffer;',
        '\n  };',
        '\n})();'
      );

      if (section.inverted) {
        code.push("\nbuffer += renderSection(name,stack,callback,true);");
      } else {
        code.push("\nbuffer += renderSection(name,stack,callback);");
      }

      code.push('\nbuffer += "');
    };

    var sendPlain = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += lookup("' + trim(source) + '",stack,"");',
        '\nbuffer += "'
      );
    };

    var sendEscaped = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += escapeHTML(lookup("' + trim(source) + '",stack,""));',
        '\nbuffer += "'
      );
    };

    var line = 1, c, callback;
    for (var i = 0, len = template.length; i < len; ++i) {
      if (template.slice(i, i + openTag.length) === openTag) {
        i += openTag.length;
        c = template.substr(i, 1);
        updateLine = '\nline = ' + line + ';';
        nextOpenTag = openTag;
        nextCloseTag = closeTag;
        hasTag = true;

        switch (c) {
        case "!": // comment
          i++;
          callback = null;
          break;
        case "=": // change open/close tags, e.g. {{=<% %>=}}
          i++;
          closeTag = "=" + closeTag;
          callback = setTags;
          break;
        case ">": // include partial
          i++;
          callback = includePartial;
          break;
        case "#": // start section
          i++;
          callback = openSection;
          break;
        case "^": // start inverted section
          i++;
          callback = openInvertedSection;
          break;
        case "/": // end section
          i++;
          callback = closeSection;
          break;
        case "{": // plain variable
          closeTag = "}" + closeTag;
          // fall through
        case "&": // plain variable
          i++;
          nonSpace = true;
          callback = sendPlain;
          break;
        default: // escaped variable
          nonSpace = true;
          callback = sendEscaped;
        }

        var end = template.indexOf(closeTag, i);

        if (end === -1) {
          throw debug(new Error('Tag "' + openTag + '" was not closed properly'), template, line, options.file);
        }

        var source = template.substring(i, end);

        if (callback) {
          callback(source);
        }

        // Maintain line count for \n in source.
        var n = 0;
        while (~(n = source.indexOf("\n", n))) {
          line++;
          n++;
        }

        i = end + closeTag.length - 1;
        openTag = nextOpenTag;
        closeTag = nextCloseTag;
      } else {
        c = template.substr(i, 1);

        switch (c) {
        case '"':
        case "\\":
          nonSpace = true;
          code.push("\\" + c);
          break;
        case "\r":
          // Ignore carriage returns.
          break;
        case "\n":
          spaces.push(code.length);
          code.push("\\n");
          stripSpace(); // Check for whitespace on the current line.
          line++;
          break;
        default:
          if (isWhitespace(c)) {
            spaces.push(code.length);
          } else {
            nonSpace = true;
          }

          code.push(c);
        }
      }
    }

    if (sectionStack.length != 0) {
      throw debug(new Error('Section "' + sectionStack[sectionStack.length - 1].name + '" was not closed properly'), template, line, options.file);
    }

    // Clean up any whitespace from a closing {{tag}} that was at the end
    // of the template without a trailing \n.
    stripSpace();

    code.push(
      '";',
      "\nreturn buffer;",
      "\n} catch (e) { throw {error: e, line: line}; }"
    );

    // Ignore `buffer += "";` statements.
    var body = code.join("").replace(/buffer \+= "";\n/g, "");

    if (options.debug) {
      if (typeof console != "undefined" && console.log) {
        console.log(body);
      } else if (typeof print === "function") {
        print(body);
      }
    }

    return body;
  }

  /**
   * Used by `compile` to generate a reusable function for the given `template`.
   */
  function _compile(template, options) {
    var args = "view,partials,stack,lookup,escapeHTML,renderSection,render";
    var body = parse(template, options);
    var fn = new Function(args, body);

    // This anonymous function wraps the generated function so we can do
    // argument coercion, setup some variables, and handle any errors
    // encountered while executing it.
    return function (view, partials) {
      partials = partials || {};

      var stack = [view]; // context stack

      try {
        return fn(view, partials, stack, lookup, escapeHTML, renderSection, render);
      } catch (e) {
        throw debug(e.error, template, e.line, options.file);
      }
    };
  }

  // Cache of pre-compiled templates.
  var _cache = {};

  /**
   * Clear the cache of compiled templates.
   */
  function clearCache() {
    _cache = {};
  }

  /**
   * Compiles the given `template` into a reusable function using the given
   * `options`. In addition to the options accepted by Mustache.parse,
   * recognized options include the following:
   *
   *   - cache    Set `false` to bypass any pre-compiled version of the given
   *              template. Otherwise, a given `template` string will be cached
   *              the first time it is parsed
   */
  function compile(template, options) {
    options = options || {};

    // Use a pre-compiled version from the cache if we have one.
    if (options.cache !== false) {
      if (!_cache[template]) {
        _cache[template] = _compile(template, options);
      }

      return _cache[template];
    }

    return _compile(template, options);
  }

  /**
   * High-level function that renders the given `template` using the given
   * `view` and `partials`. If you need to use any of the template options (see
   * `compile` above), you must compile in a separate step, and then call that
   * compiled function.
   */
  function render(template, view, partials) {
    return compile(template)(view, partials);
  }

})(Mustache);// Backbone.js 0.9.1

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var i=this,r=i.Backbone,s=Array.prototype.slice,t=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:i.Backbone={};g.VERSION="0.9.1";var f=i._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var h=i.jQuery||i.Zepto||i.ender;g.setDomLibrary=function(a){h=a};g.noConflict=function(){i.Backbone=r;return this};g.emulateHTTP=!1;g.emulateJSON=!1;g.Events={on:function(a,b,c){for(var d,a=a.split(/\s+/),e=this._callbacks||(this._callbacks={});d=a.shift();){d=e[d]||(e[d]=
{});var f=d.tail||(d.tail=d.next={});f.callback=b;f.context=c;d.tail=f.next={}}return this},off:function(a,b,c){var d,e,f;if(a){if(e=this._callbacks)for(a=a.split(/\s+/);d=a.shift();)if(f=e[d],delete e[d],b&&f)for(;(f=f.next)&&f.next;)if(!(f.callback===b&&(!c||f.context===c)))this.on(d,f.callback,f.context)}else delete this._callbacks;return this},trigger:function(a){var b,c,d,e;if(!(d=this._callbacks))return this;e=d.all;for((a=a.split(/\s+/)).push(null);b=a.shift();)e&&a.push({next:e.next,tail:e.tail,
event:b}),(c=d[b])&&a.push({next:c.next,tail:c.tail});for(e=s.call(arguments,1);c=a.pop();){b=c.tail;for(d=c.event?[c.event].concat(e):e;(c=c.next)!==b;)c.callback.apply(c.context||this,d)}return this}};g.Events.bind=g.Events.on;g.Events.unbind=g.Events.off;g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=j(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");if(!this.set(a,
{silent:!0}))throw Error("Can't create an invalid model");delete this._changed;this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(g.Model.prototype,g.Events,{idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.attributes[a];return this._escapedAttributes[a]=f.escape(null==b?"":""+b)},has:function(a){return null!=
this.attributes[a]},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof g.Model&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=this.attributes,k=this._escapedAttributes,n=this._previousAttributes||{},h=this._setting;this._changed||(this._changed={});this._setting=!0;for(e in d)if(a=d[e],f.isEqual(b[e],a)||delete k[e],c.unset?delete b[e]:b[e]=
a,this._changing&&!f.isEqual(this._changed[e],a)&&(this.trigger("change:"+e,this,a,c),this._moreChanges=!0),delete this._changed[e],!f.isEqual(n[e],a)||f.has(b,e)!=f.has(n,e))this._changed[e]=a;h||(!c.silent&&this.hasChanged()&&this.change(c),this._setting=!1);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,
e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};c.wait&&(e=f.clone(this.attributes));a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var k=this,h=c.success;c.success=function(a,b,e){b=k.parse(a,e);c.wait&&(b=f.extend(d||{},b));if(!k.set(b,c))return!1;h?h(k,a):k.trigger("sync",k,a,c)};c.error=g.wrapError(c.error,
k,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d();a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=j(this.collection,"url")||j(this,"urlRoot")||o();return this.isNew()?
a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){if(this._changing||!this.hasChanged())return this;this._moreChanges=this._changing=!0;for(var b in this._changed)this.trigger("change:"+b,this,this._changed[b],a);for(;this._moreChanges;)this._moreChanges=!1,this.trigger("change",this,a);this._previousAttributes=f.clone(this.attributes);
delete this._changed;this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this._changed):this._changed&&f.has(this._changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this._changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},
isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});g.Collection=function(a,b){b||(b={});b.comparator&&(this.comparator=b.comparator);this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(g.Collection.prototype,g.Events,{model:g.Model,initialize:function(){},
toJSON:function(){return this.map(function(a){return a.toJSON()})},add:function(a,b){var c,d,e,g,h,i={},j={};b||(b={});a=f.isArray(a)?a.slice():[a];for(c=0,d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");if(i[g=e.cid]||this._byCid[g]||null!=(h=e.id)&&(j[h]||this._byId[h]))throw Error("Can't add the same model to a collection twice");i[g]=j[h]=e}for(c=0;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=
e.id&&(this._byId[e.id]=e);this.length+=d;t.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;for(c=0,d=this.models.length;c<d;c++)if(i[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?a.slice():[a];for(c=0,d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,
1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},get:function(a){return null==a?null:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",
this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,{silent:!0,parse:b.parse});b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,
b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId={};this._byCid={}},_prepareModel:function(a,b){a instanceof g.Model?a.collection||
(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),
function(a){g.Collection.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)};var u=/:\w+/g,v=/\*\w+/g,w=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(g.Router.prototype,g.Events,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new g.History);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=
this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(w,"\\$&").replace(u,"([^/]+)").replace(v,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,
b){return a.exec(b).slice(1)}});g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")};var m=/^[#\/]/,x=/msie [\w.]+/,l=!1;f.extend(g.History.prototype,g.Events,{interval:50,getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=window.location.hash;a=decodeURIComponent(a);a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(m,"")},start:function(a){if(l)throw Error("Backbone.history has already been started");
this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=x.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=h('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?h(window).bind("popstate",
this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?h(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));this.fragment=a;l=!0;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&
(this.fragment=a.hash.replace(m,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},stop:function(){h(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);l=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.iframe.location.hash));
if(a==this.fragment||a==decodeURIComponent(this.fragment))return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(window.location.hash)},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!l)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(m,"");this.fragment==c||this.fragment==decodeURIComponent(c)||(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=
this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.iframe.location.hash)&&(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,
"")+"#"+b):a.hash=b}});g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var y=/^(\S+)\s*(.*)$/,p="model,collection,el,id,attributes,className,tagName".split(",");f.extend(g.View.prototype,g.Events,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);
b&&h(a).attr(b);c&&h(a).html(c);return a},setElement:function(a,b){this.$el=h(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=j(this,"events"))){this.undelegateEvents();for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Event "'+a[b]+'" does not exist');var d=b.match(y),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+
this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=p.length;b<c;b++){var d=p[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,!1);else{var a=j(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});g.Model.extend=g.Collection.extend=g.Router.extend=g.View.extend=function(a,b){var c=z(this,a,b);c.extend=this.extend;return c};
var A={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=A[a],e={type:d,dataType:"json"};c.url||(e.url=j(b,"url")||o());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",
d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return h.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var q=function(){},z=function(a,b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);q.prototype=a.prototype;d.prototype=new q;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},j=function(a,b){return!a||!a[b]?
null:f.isFunction(a[b])?a[b]():a[b]},o=function(){throw Error('A "url" property or function must be specified');}}).call(this);/*
 * zClip :: jQuery ZeroClipboard v1.1.1
 * http://steamdev.com/zclip
 *
 * Copyright 2011, SteamDev
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: Wed Jun 01, 2011
 */

(function(a){a.fn.zclip=function(c){if(typeof c=="object"&&!c.length){var b=a.extend({path:"ZeroClipboard.swf",copy:null,beforeCopy:null,afterCopy:null,clickAfter:true,setHandCursor:true,setCSSEffects:true},c);return this.each(function(){var e=a(this);if(e.is(":visible")&&(typeof b.copy=="string"||a.isFunction(b.copy))){ZeroClipboard.setMoviePath(b.path);var d=new ZeroClipboard.Client();if(a.isFunction(b.copy)){e.bind("zClip_copy",b.copy)}if(a.isFunction(b.beforeCopy)){e.bind("zClip_beforeCopy",b.beforeCopy)}if(a.isFunction(b.afterCopy)){e.bind("zClip_afterCopy",b.afterCopy)}d.setHandCursor(b.setHandCursor);d.setCSSEffects(b.setCSSEffects);d.addEventListener("mouseOver",function(f){e.trigger("mouseenter")});d.addEventListener("mouseOut",function(f){e.trigger("mouseleave")});d.addEventListener("mouseDown",function(f){e.trigger("mousedown");if(!a.isFunction(b.copy)){d.setText(b.copy)}else{d.setText(e.triggerHandler("zClip_copy"))}if(a.isFunction(b.beforeCopy)){e.trigger("zClip_beforeCopy")}});d.addEventListener("complete",function(f,g){if(a.isFunction(b.afterCopy)){e.trigger("zClip_afterCopy")}else{if(g.length>500){g=g.substr(0,500)+"...\n\n("+(g.length-500)+" characters not shown)"}e.removeClass("hover");alert("Copied text to clipboard")}if(b.clickAfter){e.trigger("click")}});d.glue(e[0],e.parent()[0]);a(window).bind("load resize",function(){d.reposition()})}})}else{if(typeof c=="string"){return this.each(function(){var f=a(this);c=c.toLowerCase();var e=f.data("zclipId");var d=a("#"+e+".zclip");if(c=="remove"){d.remove();f.removeClass("active hover")}else{if(c=="hide"){d.hide();f.removeClass("active hover")}else{if(c=="show"){d.show()}}}})}}}})(jQuery);var ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(a){if(typeof(a)=="string"){a=document.getElementById(a)}if(!a.addClass){a.hide=function(){this.style.display="none"};a.show=function(){this.style.display=""};a.addClass=function(b){this.removeClass(b);this.className+=" "+b};a.removeClass=function(d){var e=this.className.split(/\s+/);var b=-1;for(var c=0;c<e.length;c++){if(e[c]==d){b=c;c=e.length}}if(b>-1){e.splice(b,1);this.className=e.join(" ")}return this};a.hasClass=function(b){return !!this.className.match(new RegExp("\\s*"+b+"\\s*"))}}return a},setMoviePath:function(a){this.moviePath=a},dispatch:function(d,b,c){var a=this.clients[d];if(a){a.receiveEvent(b,c)}},register:function(b,a){this.clients[b]=a},getDOMObjectPosition:function(c,a){var b={left:0,top:0,width:c.width?c.width:c.offsetWidth,height:c.height?c.height:c.offsetHeight};if(c&&(c!=a)){b.left+=c.offsetLeft;b.top+=c.offsetTop}return b},Client:function(a){this.handlers={};this.id=ZeroClipboard.nextId++;this.movieId="ZeroClipboardMovie_"+this.id;ZeroClipboard.register(this.id,this);if(a){this.glue(a)}}};ZeroClipboard.Client.prototype={id:0,ready:false,movie:null,clipText:"",handCursorEnabled:true,cssEffects:true,handlers:null,glue:function(d,b,e){this.domElement=ZeroClipboard.$(d);var f=99;if(this.domElement.style.zIndex){f=parseInt(this.domElement.style.zIndex,10)+1}if(typeof(b)=="string"){b=ZeroClipboard.$(b)}else{if(typeof(b)=="undefined"){b=document.getElementsByTagName("body")[0]}}var c=ZeroClipboard.getDOMObjectPosition(this.domElement,b);this.div=document.createElement("div");this.div.className="zclip";this.div.id="zclip-"+this.movieId;$(this.domElement).data("zclipId","zclip-"+this.movieId);var a=this.div.style;a.position="absolute";a.left=""+c.left+"px";a.top=""+c.top+"px";a.width=""+c.width+"px";a.height=""+c.height+"px";a.zIndex=f;if(typeof(e)=="object"){for(addedStyle in e){a[addedStyle]=e[addedStyle]}}b.appendChild(this.div);this.div.innerHTML=this.getHTML(c.width,c.height)},getHTML:function(d,a){var c="";var b="id="+this.id+"&width="+d+"&height="+a;if(navigator.userAgent.match(/MSIE/)){var e=location.href.match(/^https/i)?"https://":"http://";c+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+e+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+d+'" height="'+a+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+b+'"/><param name="wmode" value="transparent"/></object>'}else{c+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+d+'" height="'+a+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+b+'" wmode="transparent" />'}return c},hide:function(){if(this.div){this.div.style.left="-2000px"}},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML="";var a=document.getElementsByTagName("body")[0];try{a.removeChild(this.div)}catch(b){}this.domElement=null;this.div=null}},reposition:function(c){if(c){this.domElement=ZeroClipboard.$(c);if(!this.domElement){this.hide()}}if(this.domElement&&this.div){var b=ZeroClipboard.getDOMObjectPosition(this.domElement);var a=this.div.style;a.left=""+b.left+"px";a.top=""+b.top+"px"}},setText:function(a){this.clipText=a;if(this.ready){this.movie.setText(a)}},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");if(!this.handlers[a]){this.handlers[a]=[]}this.handlers[a].push(b)},setHandCursor:function(a){this.handCursorEnabled=a;if(this.ready){this.movie.setHandCursor(a)}},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(d,f){d=d.toString().toLowerCase().replace(/^on/,"");switch(d){case"load":this.movie=document.getElementById(this.movieId);if(!this.movie){var c=this;setTimeout(function(){c.receiveEvent("load",null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var c=this;setTimeout(function(){c.receiveEvent("load",null)},100);this.ready=true;return}this.ready=true;try{this.movie.setText(this.clipText)}catch(h){}try{this.movie.setHandCursor(this.handCursorEnabled)}catch(h){}break;case"mouseover":if(this.domElement&&this.cssEffects){this.domElement.addClass("hover");if(this.recoverActive){this.domElement.addClass("active")}}break;case"mouseout":if(this.domElement&&this.cssEffects){this.recoverActive=false;if(this.domElement.hasClass("active")){this.domElement.removeClass("active");this.recoverActive=true}this.domElement.removeClass("hover")}break;case"mousedown":if(this.domElement&&this.cssEffects){this.domElement.addClass("active")}break;case"mouseup":if(this.domElement&&this.cssEffects){this.domElement.removeClass("active");this.recoverActive=false}break}if(this.handlers[d]){for(var b=0,a=this.handlers[d].length;b<a;b++){var g=this.handlers[d][b];if(typeof(g)=="function"){g(this,f)}else{if((typeof(g)=="object")&&(g.length==2)){g[0][g[1]](this,f)}else{if(typeof(g)=="string"){window[g](this,f)}}}}}}};/*
 * modal plugin
 *
 * How to use:
 *  - Attach id="[value]" to modal element (ie. <div>)
 *  - Attach an attr. data-modal-window="#[value]" to the click element that will trigger the modal element (ie: <a>, <span> ...)
 *  - Call the plugin: $('<element>[data-modal-window]').modal();
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

/**
 * Mask plugin
 * works with modal.js
 *
 * More on this plugin http://jquerytools.org/demos/
 */
(function($) { 	

	// static constructs
	$.tools = $.tools || {version: '@VERSION'};
	
	var tool;
	
	tool = $.tools.mask = {
		
		conf: {	
			maskId: 'mask',
			loadSpeed: 'fast',
			closeSpeed: 'fast',
			closeOnClick: true,
			closeOnEsc: true,
			
			// css settings
			zIndex: 9998,
			opacity: 0.8,
			startOpacity: 0.8,
			color: '#fff',
			
			// callbacks
			onLoad: null,
			onClose: null
		}
	};

	function viewport() {
				
		// the horror case
		if ($.browser.msie) {
			
			// if there are no scrollbars then use window.height
			var d = $(document).height(), w = $(window).height();
			
			return [
				window.innerWidth || 							// ie7+
				document.documentElement.clientWidth || 	// ie6  
				document.body.clientWidth, 					// ie6 quirks mode
				d - w < 20 ? w : d
			];
		} 
		
		// other well behaving browsers
		return [$(document).width(), $(document).height()]; 
	} 
	
	function call(fn) {
		if (fn) { return fn.call($.mask); }
	}
	
	var mask, masked, loaded, config, overlayIndex;		
	
	
	$.mask = {
		
		load: function(conf, els) {
			
			// already loaded ?
			if (loaded) { return this; }			
			
			// configuration
			if (typeof conf == 'string') {
				conf = {color: conf};	
			}
			
			// use latest config
			conf = conf || config;
			
			config = conf = $.extend($.extend({}, tool.conf), conf);

			// get the mask
			mask = $("#" + conf.maskId);
				
			// or create it
			if (!mask.length) {
				mask = $('<div/>').attr("id", conf.maskId);
				$("body").append(mask);
			}
			
			// set position and dimensions 			
			var size = viewport();
				
			mask.css({				
				position:'absolute', 
				top: 0, 
				left: 0,
				width: size[0],
				height: size[1],
				display: 'none',
				opacity: conf.startOpacity,					 		
				zIndex: conf.zIndex 
			});
			
			if (conf.color) {
				mask.css("backgroundColor", conf.color);	
			}			
			
			// onBeforeLoad
			if (call(conf.onBeforeLoad) === false) {
				return this;
			}
			
			// esc button
			if (conf.closeOnEsc) {						
				$(document).on("keydown.mask", function(e) {							
					if (e.keyCode == 27) {
						$.mask.close(e);	
					}		
				});			
			}
			
			// mask click closes
			if (conf.closeOnClick) {
				mask.on("click.mask", function(e)  {
					$.mask.close(e);		
				});					
			}			
			
			// resize mask when window is resized
			$(window).on("resize.mask", function() {
				$.mask.fit();
			});
			
			// masked elements
			if (els && els.length) {
				
				overlayIndex = els.eq(0).css("zIndex");

				// make sure element is positioned absolutely or relatively
				$.each(els, function() {
					var el = $(this);
					if (!/relative|absolute|fixed/i.test(el.css("position"))) {
						el.css("position", "relative");		
					}					
				});
			 
				// make elements sit on top of the mask
				masked = els.css({ zIndex: Math.max(conf.zIndex + 1, overlayIndex == 'auto' ? 0 : overlayIndex)});			
			}	
			
			// reveal mask
			mask.css({display: 'block'}).fadeTo(conf.loadSpeed, conf.opacity, function() {
				$.mask.fit(); 
				call(conf.onLoad);
				loaded = "full";
			});
			
			loaded = true;			
			return this;				
		},
		
		close: function() {
			if (loaded) {
				
				// onBeforeClose
				if (call(config.onBeforeClose) === false) { return this; }
					
				mask.fadeOut(config.closeSpeed, function()  {										
					if (masked) {
						masked.css({zIndex: overlayIndex});						
					}				
					loaded = false;
					call(config.onClose);
				});				
				
				// unbind various event listeners
				$(document).off("keydown.mask");
				mask.off("click.mask");
				$(window).off("resize.mask");  
			}
			
			return this; 
		},
		
		fit: function() {
			if (loaded) {
				var size = viewport();				
				mask.css({width: size[0], height: size[1]});
			}				
		},
		
		getMask: function() {
			return mask;	
		},
		
		isLoaded: function(fully) {
			return fully ? loaded == 'full' : loaded;	
		}, 
		
		getConf: function() {
			return config;	
		},
		
		getmasked: function() {
			return masked;	
		}		
	};
	
	$.fn.mask = function(conf) {
		$.mask.load(conf);
		return this;		
	};			
	
	$.fn.mask = function(conf) {
		$.mask.load(conf, this);
		return this;			
	};


})(jQuery);
/*
 * Tooltip plugin
 *
 * More on this plugin http://jquerytools.org/demos/
 */



(function($) { 	
	// static constructs
	$.tools = $.tools || {version: '@VERSION'};
	
	$.tools.tooltip = {
		
		conf: { 
			
			// default effect variables
			effect: 'toggle',			
			fadeOutSpeed: "fast",
			predelay: 0,
			delay: 30,
			opacity: 1,			
			tip: 0,
      fadeIE: false, // enables fade effect in IE
			
			// 'top', 'bottom', 'right', 'left', 'center'
			position: ['top', 'center'], 
			offset: [0, 0],
			relative: false,
			cancelDefault: true,
			
			// type to event mapping 
			events: {
				def: 			"mouseenter,mouseleave",
				input: 		"focus,blur",
				widget:		"focus mouseenter,blur mouseleave",
				tooltip:		"mouseenter,mouseleave"
			},
			
			// 1.2
			layout: '<div/>',
			tipClass: 'tooltip'
		},
		
		addEffect: function(name, loadFn, hideFn) {
			effects[name] = [loadFn, hideFn];	
		} 
	};
	
	
	var effects = { 
		toggle: [ 
			function(done) { 
				var conf = this.getConf(), tip = this.getTip(), o = conf.opacity;
				if (o < 1) { tip.css({opacity: o}); }
				tip.show();
				done.call();
			},
			
			function(done) { 
				this.getTip().hide();
				done.call();
			} 
		],
		
		fade: [
			function(done) {
				var conf = this.getConf();
				if (!$.browser.msie || conf.fadeIE) {
					this.getTip().fadeTo(conf.fadeInSpeed, conf.opacity, done);
				}
				else {
					this.getTip().show();
					done();
				}
			},
			function(done) {
				var conf = this.getConf();
				if (!$.browser.msie || conf.fadeIE) {
					this.getTip().fadeOut(conf.fadeOutSpeed, done);
				}
				else {
					this.getTip().hide();
					done();
				}
			}
		]		
	};   

		
	/* calculate tip position relative to the trigger */  	
	function getPosition(trigger, tip, conf) {	

		
		// get origin top/left position 
		var top = conf.relative ? trigger.position().top : trigger.offset().top, 
			 	left = conf.relative ? trigger.position().left : trigger.offset().left,
			 	pos = conf.position[0];

		top  -= tip.outerHeight() - conf.offset[0];
		left += trigger.outerWidth() + conf.offset[1];
		
		// iPad position fix
		if (/iPad/i.test(navigator.userAgent)) {
			top -= $(window).scrollTop();
		}
		
		// adjust Y		
		var height = tip.outerHeight() + trigger.outerHeight();
		if (pos == 'center') 	{ top += height / 2; }
		if (pos == 'bottom') 	{ top += height; }
		
		
		// adjust X
		pos = conf.position[1]; 	
		var width = tip.outerWidth() + trigger.outerWidth();
		if (pos == 'center') 	{ left -= width / 2; }
		if (pos == 'left')   	{ left -= width; }	 
		
		return {top: top, left: left};
	}		

	
	
	function Tooltip(trigger, conf) {

		var self = this, 
			 fire = trigger.add(self),
			 tip,
			 timer = 0,
			 pretimer = 0, 
			 title = trigger.attr("title"),
			 tipAttr = trigger.attr("data-tooltip"),
			 effect = effects[conf.effect],
			 shown,
				 
			 // get show/hide configuration
			 isInput = trigger.is(":input"), 
			 isWidget = isInput && trigger.is(":checkbox, :radio, select, :button, :submit"),			
			 type = trigger.attr("type"),
			 evt = conf.events[type] || conf.events[isInput ? (isWidget ? 'widget' : 'input') : 'def']; 
		
		
		// check that configuration is sane
		if (!effect) { throw "Nonexistent effect \"" + conf.effect + "\""; }					
		
		evt = evt.split(/,\s*/); 
		if (evt.length != 2) { throw "Tooltip: bad events configuration for " + type; } 
		
		
		// trigger --> show  
		trigger.bind(evt[0], function(e) {

			clearTimeout(timer);
			if (conf.predelay) {
				pretimer = setTimeout(function() { self.show(e); }, conf.predelay);	
				
			} else {
				self.show(e);	
			}
			
		// trigger --> hide
		}).bind(evt[1], function(e)  {
			clearTimeout(pretimer);
			if (conf.delay)  {
				timer = setTimeout(function() { self.hide(e); }, conf.delay);	
				
			} else {
				self.hide(e);		
			}
			
		}); 
		
		
		// remove default title
		if (title && conf.cancelDefault) { 
			trigger.removeAttr("title");
			trigger.data("title", title);			
		}		
		
		$.extend(self, {
				
			show: function(e) {  

				// tip not initialized yet
				if (!tip) {
					
					// data-tooltip 
					if (tipAttr) {
						tip = $(tipAttr);

					// single tip element for all
					} else if (conf.tip) { 
						tip = $(conf.tip).eq(0);
						
					// autogenerated tooltip
					} else if (title) { 
						tip = $(conf.layout).addClass(conf.tipClass).appendTo(document.body)
							.hide().append(title);

					// manual tooltip
					} else {	
						tip = trigger.next();  
						if (!tip.length) { tip = trigger.parent().next(); } 	 
					}
					
					if (!tip.length) { throw "Cannot find tooltip for " + trigger;	}
				} 
			 	
			 	if (self.isShown()) { return self; }  
				
			 	// stop previous animation
			 	tip.stop(true, true); 			 	
			 	
				// get position
				var pos = getPosition(trigger, tip, conf);			
		
				// restore title for single tooltip element
				if (conf.tip) {
					tip.html(trigger.data("title"));
				}

				// onBeforeShow
				e = $.Event();
				e.type = "onBeforeShow";
				fire.trigger(e, [pos]);				
				if (e.isDefaultPrevented()) { return self; }
		
				
				// onBeforeShow may have altered the configuration
				pos = getPosition(trigger, tip, conf);
				
				// set position
				tip.css({position:'absolute', top: pos.top, left: pos.left});					
				
				shown = true;
				
				// invoke effect 
				effect[0].call(self, function() {
					e.type = "onShow";
					shown = 'full';
					fire.trigger(e);		 
				});					

	 	
				// tooltip events       
				var event = conf.events.tooltip.split(/,\s*/);

				if (!tip.data("__set")) {
					
					tip.unbind(event[0]).bind(event[0], function() { 
						clearTimeout(timer);
						clearTimeout(pretimer);
					});
					
					if (event[1] && !trigger.is("input:not(:checkbox, :radio), textarea")) { 					
						tip.unbind(event[1]).bind(event[1], function(e) {
	
							// being moved to the trigger element
							if (e.relatedTarget != trigger[0]) {
								trigger.trigger(evt[1].split(" ")[0]);
							}
						}); 
					} 
					
					// bind agein for if same tip element
					if (!conf.tip) tip.data("__set", true);
				}
				
				return self;
			},
			
			hide: function(e) {

				if (!tip || !self.isShown()) { return self; }
			
				// onBeforeHide
				e = $.Event();
				e.type = "onBeforeHide";
				fire.trigger(e);				
				if (e.isDefaultPrevented()) { return; }
	
				shown = false;
				
				effects[conf.effect][1].call(self, function() {
					e.type = "onHide";
					fire.trigger(e);		 
				});
				
				return self;
			},
			
			isShown: function(fully) {
				return fully ? shown == 'full' : shown;	
			},
				
			getConf: function() {
				return conf;	
			},
				
			getTip: function() {
				return tip;	
			},
			
			getTrigger: function() {
				return trigger;	
			}		

		});		

		// callbacks	
		$.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","), function(i, name) {
				
			// configuration
			if ($.isFunction(conf[name])) { 
				$(self).bind(name, conf[name]); 
			}

			// API
			self[name] = function(fn) {
				if (fn) { $(self).bind(name, fn); }
				return self;
			};
		});
		
	}
		
	
	// jQuery plugin implementation
	$.fn.tooltip = function(conf) {
		
		// return existing instance
		var api = this.data("tooltip");
		if (api) { return api; }

		conf = $.extend(true, {}, $.tools.tooltip.conf, conf);
		
		// position can also be given as string
		if (typeof conf.position == 'string') {
			conf.position = conf.position.split(/,?\s/);	
		}
		
		// install tooltip for each entry in jQuery object
		this.each(function() {
			api = new Tooltip($(this), conf); 
			$(this).data("tooltip", api); 
		});
		
		return conf.api ? api: this;		 
	};
		
}) (jQuery);

		

// set equal heights on columns in a given container 
function equalHeights( cols ) {
	var highestDiv = 0;
	
	cols.each( function() {
		
		var currentHeight = $(this).height();
		if ( currentHeight > highestDiv ) {
			highestDiv = currentHeight;
		}
	});
	
	cols.height( highestDiv );
}

(function( $ ) {
	$.fn.setupCheckboxAll = function( options ) {
		
		var settings = $.extend(
				{	
					closestWrapper: this.closest('ul')
				},
				options
			),
			all_checked = true,
			cb_all = this;

		/*
		cb_all.click(function(e) {
			if ($(this).is(':checked')) {
				settings.closestWrapper.find(':checkbox').not(cb_all).each(function(){
					$(this).attr('checked', 'checked');
					//$(this).change();
				});
			} else {
				settings.closestWrapper.find(':checkbox').not(cb_all).each(function(){
					$(this).removeAttr('checked');;
					//$(this).change();
				});	
			}
		});
		*/
		
		settings.closestWrapper.click(function(e){
			$(this).find(':checkbox').not(cb_all)
			.each(function(e){
				if (!$(this).is(':checked')) {
					all_checked = false;
				}
			});
			if (all_checked) {
				cb_all.attr('checked', 'checked');
			} else {
				cb_all.removeAttr('checked');
				all_checked = true;
			}
		})
		.trigger('click');
		
		return this;
	};
})( jQuery );/*
 * Tabs plugin
 *
 * More on this plugin http://jquerytools.org/demos/
 */


(function($) {
		
	// static constructs
	$.tools = $.tools || {version: '@VERSION'};
	
	$.tools.tabs = {
		
		conf: {
			tabs: 'a',
			current: 'active',
			onBeforeClick: null,
			onClick: null, 
			effect: 'default',
			initialIndex: 0,			
			event: 'click',
			rotate: false,
			
      // slide effect
      slideUpSpeed: 400,
      slideDownSpeed: 400,
			
			// 1.2
			history: false
		},
		
		addEffect: function(name, fn) {
			effects[name] = fn;
		}
		
	};
	
	var effects = {
		
		// simple "toggle" effect
		'default': function(i, done) { 
			this.getPanes().hide().eq(i).show();
			done.call();
		}, 
		
		/*
			configuration:
				- fadeOutSpeed (positive value does "crossfading")
				- fadeInSpeed
		*/
		fade: function(i, done) {		
			
			var conf = this.getConf(),
				 speed = conf.fadeOutSpeed,
				 panes = this.getPanes();
			
			if (speed) {
				panes.fadeOut(speed);	
			} else {
				panes.hide();	
			}

			panes.eq(i).fadeIn(conf.fadeInSpeed, done);	
		},
		
		// for basic accordions
		slide: function(i, done) {
		  var conf = this.getConf();
		  
			this.getPanes().slideUp(conf.slideUpSpeed);
			this.getPanes().eq(i).slideDown(conf.slideDownSpeed, done);			 
		}, 

		/**
		 * AJAX effect
		 */
		ajax: function(i, done)  {			
			this.getPanes().eq(0).load(this.getTabs().eq(i).attr("href"), done);	
		}		
	};   	
	
	/**
	 * Horizontal accordion
	 * 
	 * @deprecated will be replaced with a more robust implementation
	*/
	
	var
	  /**
	  *   @type {Boolean}
	  *
	  *   Mutex to control horizontal animation
	  *   Disables clicking of tabs while animating
	  *   They mess up otherwise as currentPane gets set *after* animation is done
	  */
	  animating,
	  /**
	  *   @type {Number}
	  *   
	  *   Initial width of tab panes
	  */
	  w;
	 
	$.tools.tabs.addEffect("horizontal", function(i, done) {
	  if (animating) return;    // don't allow other animations
	  
	  var nextPane = this.getPanes().eq(i),
	      currentPane = this.getCurrentPane();
	      
		// store original width of a pane into memory
		w || ( w = this.getPanes().eq(0).width() );
		animating = true;
		
		nextPane.show(); // hidden by default
		
		// animate current pane's width to zero
    // animate next pane's width at the same time for smooth animation
    currentPane.animate({width: 0}, {
      step: function(now){
        nextPane.css("width", w-now);
      },
      complete: function(){
        $(this).hide();
        done.call();
        animating = false;
     }
    });
    // Dirty hack...  onLoad, currentPant will be empty and nextPane will be the first pane
    // If this is the case, manually run callback since the animation never occured, and reset animating
    if (!currentPane.length){ 
      done.call(); 
      animating = false;
    }
	});	

	
	function Tabs(root, paneSelector, conf) {
		
		var self = this, 
			 trigger = root.add(this),
			 tabs = root.find(conf.tabs),
			 panes = paneSelector.jquery ? paneSelector : root.children(paneSelector),			 
			 current;
			 
		
		// make sure tabs and panes are found
		if (!tabs.length)  { tabs = root.children(); }
		if (!panes.length) { panes = root.parent().find(paneSelector); }
		if (!panes.length) { panes = $(paneSelector); }
		
		
		// public methods
		$.extend(this, {				
			click: function(i, e) {
			  
				var tab = tabs.eq(i);
				
				if (typeof i == 'string' && i.replace("#", "")) {
					tab = tabs.filter("[href*=" + i.replace("#", "") + "]");
					i = Math.max(tabs.index(tab), 0);
				}
								
				if (conf.rotate) {
					var last = tabs.length -1; 
					if (i < 0) { return self.click(last, e); }
					if (i > last) { return self.click(0, e); }						
				}
				
				if (!tab.length) {
					if (current >= 0) { return self; }
					i = conf.initialIndex;
					tab = tabs.eq(i);
				}				
				
				// current tab is being clicked
				if (i === current) { return self; }
				
				// possibility to cancel click action				
				e = e || $.Event();
				e.type = "onBeforeClick";
				trigger.trigger(e, [i]);				
				if (e.isDefaultPrevented()) { return; }

				// call the effect
				effects[conf.effect].call(self, i, function() {
					current = i;
					// onClick callback
					e.type = "onClick";
					trigger.trigger(e, [i]);
				});			
				
				// default behaviour
				tabs.removeClass(conf.current);	
				tab.addClass(conf.current);				
				
				return self;
			},
			
			getConf: function() {
				return conf;	
			},

			getTabs: function() {
				return tabs;	
			},
			
			getPanes: function() {
				return panes;	
			},
			
			getCurrentPane: function() {
				return panes.eq(current);	
			},
			
			getCurrentTab: function() {
				return tabs.eq(current);	
			},
			
			getIndex: function() {
				return current;	
			}, 
			
			next: function() {
				return self.click(current + 1);
			},
			
			prev: function() {
				return self.click(current - 1);	
			},
			
			destroy: function() {
				tabs.unbind(conf.event).removeClass(conf.current);
				panes.find("a[href^=#]").unbind("click.T"); 
				return self;
			}
		
		});

		// callbacks	
		$.each("onBeforeClick,onClick".split(","), function(i, name) {
				
			// configuration
			if ($.isFunction(conf[name])) {
				$(self).bind(name, conf[name]); 
			}

			// API
			self[name] = function(fn) {
				if (fn) { $(self).bind(name, fn); }
				return self;	
			};
		});
	
		
		if (conf.history && $.fn.history) {
			$.tools.history.init(tabs);
			conf.event = 'history';
		}	
		
		// setup click actions for each tab
		tabs.each(function(i) { 				
			$(this).bind(conf.event, function(e) {
				self.click(i, e);
				return e.preventDefault();
			});			
		});
		
		// cross tab anchor link
		panes.find("a[href^=#]").bind("click.T", function(e) {
			self.click($(this).attr("href"), e);		
		}); 
		
		// open initial tab
		if (location.hash && conf.tabs == "a" && root.find("[href=" +location.hash+ "]").length) {
			self.click(location.hash);

		} else {
			if (conf.initialIndex === 0 || conf.initialIndex > 0) {
				self.click(conf.initialIndex);
			}
		}				
		
	}
	
	
	// jQuery plugin implementation
	$.fn.tabs = function(paneSelector, conf) {
		
		// return existing instance
		var el = this.data("tabs");
		if (el) { 
			el.destroy();	
			this.removeData("tabs");
		}

		if ($.isFunction(conf)) {
			conf = {onBeforeClick: conf};
		}
		
		// setup conf
		conf = $.extend({}, $.tools.tabs.conf, conf);		
		
		
		this.each(function() {				
			el = new Tabs($(this), paneSelector, conf);
			$(this).data("tabs", el); 
		});		
		
		return conf.api ? el: this;		
	};		
		
}) (jQuery); 


/*
 * --------------------------------------------------------------------
 * jQuery-Plugin - selectToUISlider - creates a UI slider component from a select element(s)
 * by Scott Jehl, scott@filamentgroup.com
 * http://www.filamentgroup.com
 * reference article: http://www.filamentgroup.com/lab/update_jquery_ui_16_slider_from_a_select_element/
 * demo page: http://www.filamentgroup.com/examples/slider_v2/index.html
 * 
 * Copyright (c) 2008 Filament Group, Inc
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 *
 * Usage Notes: please refer to our article above for documentation
 *  
 * --------------------------------------------------------------------
 */


jQuery.fn.selectToUISlider = function(settings){
	var selects = jQuery(this);
	
	//accessible slider options
	var options = jQuery.extend({
		labels: 3, //number of visible labels
		tooltip: true, //show tooltips, boolean
		tooltipSrc: 'text',//accepts 'value' as well
		labelSrc: 'value',//accepts 'value' as well	,
		sliderOptions: null
	}, settings);


	//handle ID attrs - selects each need IDs for handles to find them
	var handleIds = (function(){
		var tempArr = [];
		selects.each(function(){
			tempArr.push('handle_'+jQuery(this).attr('id'));
		});
		return tempArr;
	})();
	
	//array of all option elements in select element (ignores optgroups)
	var selectOptions = (function(){
		var opts = [];
		selects.eq(0).find('option').each(function(){
			opts.push({
				value: jQuery(this).attr('value'),
				text: jQuery(this).text()
			});
		});
		return opts;
	})();
	
	//array of opt groups if present
	var groups = (function(){
		if(selects.eq(0).find('optgroup').size()>0){
			var groupedData = [];
			selects.eq(0).find('optgroup').each(function(i){
				groupedData[i] = {};
				groupedData[i].label = jQuery(this).attr('label');
				groupedData[i].options = [];
				jQuery(this).find('option').each(function(){
					groupedData[i].options.push({text: jQuery(this).text(), value: jQuery(this).attr('value')});
				});
			});
			return groupedData;
		}
		else return null;
	})();	
	
	//check if obj is array
	function isArray(obj) {
		return obj.constructor == Array;
	}
	//return tooltip text from option index
	function ttText(optIndex){
		return (options.tooltipSrc == 'text') ? selectOptions[optIndex].text : selectOptions[optIndex].value;
	}
	
	//plugin-generated slider options (can be overridden)
	var sliderOptions = {
		step: 1,
		min: 0,
		orientation: 'horizontal',
		max: selectOptions.length-1,
		values: [0, selectOptions.length-1],
		range: selects.length > 1,//multiple select elements = true
		slide: function(e, ui) {//slide function
				var thisHandle = jQuery(ui.handle);
				//handle feedback 
				var textval = ttText(ui.value);
				thisHandle
					.attr('aria-valuetext', textval)
					.attr('aria-valuenow', ui.value)
					.find('.ui-slider-tooltip .ttContent')
						.text( textval );

				//control original select menu
				var currSelect = jQuery('#' + thisHandle.attr('id').split('handle_')[1]);
				currSelect.find('option').eq(ui.value).attr('selected', 'selected');
		}
		/*
		values: (function(){
			var values = [];
			selects.each(function(){
				values.push( jQuery(this).get(0).selectedIndex );
			});
			return values;
		})()*/
	};
	
	//slider options from settings
	options.sliderOptions = (settings) ? jQuery.extend(sliderOptions, settings.sliderOptions) : sliderOptions;
		
	//select element change event	
	selects.bind('change keyup click', function(){
		var thisIndex = jQuery(this).get(0).selectedIndex;
		var thisHandle = jQuery('#handle_'+ jQuery(this).attr('id'));
		var handleIndex = thisHandle.data('handleNum');
		thisHandle.parents('.ui-slider:eq(0)').slider("values", handleIndex, thisIndex);
	});
	

	//create slider component div
	var sliderComponent = jQuery('<div></div>');

	//CREATE HANDLES
	selects.each(function(i){
		var hidett = '';
		
		//associate label for ARIA
		var thisLabel = jQuery('label[for=' + jQuery(this).attr('id') +']');
		//labelled by aria doesn't seem to work on slider handle. Using title attr as backup
		var labelText = (thisLabel.size()>0) ? 'Slider control for '+ thisLabel.text()+'' : '';
		var thisLabelId = thisLabel.attr('id') || thisLabel.attr('id', 'label_'+handleIds[i]).attr('id');
		
		
		if( options.tooltip == false ){hidett = ' style="display: none;"';}
		jQuery('<a '+
				'href="#" tabindex="0" '+
				'id="'+handleIds[i]+'" '+
				'class="ui-slider-handle" '+
				'role="slider" '+
				'aria-labelledby="'+thisLabelId+'" '+
				'aria-valuemin="'+options.sliderOptions.min+'" '+
				'aria-valuemax="'+options.sliderOptions.max+'" '+
				'aria-valuenow="'+options.sliderOptions.values[i]+'" '+
				'aria-valuetext="'+ttText(options.sliderOptions.values[i])+'" '+
			'><span class="screenReaderContext">'+labelText+'</span>'+
			'<span class="ui-slider-tooltip ui-widget-content ui-corner-all"'+ hidett +'><span class="ttContent"></span>'+
				'<span class="ui-tooltip-pointer-down ui-widget-content"><span class="ui-tooltip-pointer-down-inner"></span></span>'+
			'</span></a>')
			.data('handleNum',i)
			.appendTo(sliderComponent);
	});
	
	//CREATE SCALE AND TICS
	
	//write dl if there are optgroups
	if(groups) {
		var inc = 0;
		var scale = sliderComponent.append('<dl class="ui-slider-scale ui-helper-reset" role="presentation"></dl>').find('.ui-slider-scale:eq(0)');
		jQuery(groups).each(function(h){
			scale.append('<dt style="width: '+ (100/groups.length).toFixed(2) +'%' +'; left:'+ (h/(groups.length-1) * 100).toFixed(2)  +'%' +'"><span>'+this.label+'</span></dt>');//class name becomes camelCased label
			var groupOpts = this.options;
			jQuery(this.options).each(function(i){
				var style = (inc == selectOptions.length-1 || inc == 0) ? 'style="display: none;"' : '' ;
				var labelText = (options.labelSrc == 'text') ? groupOpts[i].text : groupOpts[i].value;
				scale.append('<dd style="left:'+ leftVal(inc) +'"><span class="ui-slider-label">'+ labelText +'</span><span class="ui-slider-tic ui-widget-content"'+ style +'></span></dd>');
				inc++;
			});
		});
	}
	//write ol
	else {
		var scale = sliderComponent.append('<ol class="ui-slider-scale ui-helper-reset" role="presentation"></ol>').find('.ui-slider-scale:eq(0)');
		jQuery(selectOptions).each(function(i){
			var style = (i == selectOptions.length-1 || i == 0) ? 'style="display: none;"' : '' ;
			var labelText = (options.labelSrc == 'text') ? this.text : this.value;
			scale.append('<li style="left:'+ leftVal(i) +'"><span class="ui-slider-label">'+ labelText +'</span><span class="ui-slider-tic ui-widget-content"'+ style +'></span></li>');
		});
	}
	
	function leftVal(i){
		return (i/(selectOptions.length-1) * 100).toFixed(2)  +'%';
		
	}
	

	
	
	//show and hide labels depending on labels pref
	//show the last one if there are more than 1 specified
	if(options.labels > 1) sliderComponent.find('.ui-slider-scale li:last span.ui-slider-label, .ui-slider-scale dd:last span.ui-slider-label').addClass('ui-slider-label-show');

	//set increment
	var increm = Math.max(1, Math.round(selectOptions.length / options.labels));
	//show em based on inc
	for(var j=0; j<selectOptions.length; j+=increm){
		if((selectOptions.length - j) > increm){//don't show if it's too close to the end label
			sliderComponent.find('.ui-slider-scale li:eq('+ j +') span.ui-slider-label, .ui-slider-scale dd:eq('+ j +') span.ui-slider-label').addClass('ui-slider-label-show');
		}
	}

	//style the dt's
	sliderComponent.find('.ui-slider-scale dt').each(function(i){
		jQuery(this).css({
			'left': ((100 /( groups.length))*i).toFixed(2) + '%'
		});
	});
	

	//inject and return 
	sliderComponent
	.insertAfter(jQuery(this).eq(this.length-1))
	.slider(options.sliderOptions)
	.attr('role','application')
	.find('.ui-slider-label')
	.each(function(){
		jQuery(this).css('marginLeft', -jQuery(this).width()/2);
	});
	
	//update tooltip arrow inner color
	sliderComponent.find('.ui-tooltip-pointer-down-inner').each(function(){
				var bWidth = jQuery('.ui-tooltip-pointer-down-inner').css('borderTopWidth');
				var bColor = jQuery(this).parents('.ui-slider-tooltip').css('backgroundColor')
				jQuery(this).css('border-top', bWidth+' solid '+bColor);
	});
	
	var values = sliderComponent.slider('values');
	
	if(isArray(values)){
		jQuery(values).each(function(i){
			sliderComponent.find('.ui-slider-tooltip .ttContent').eq(i).text( ttText(this) );
		});
	}
	else {
		sliderComponent.find('.ui-slider-tooltip .ttContent').eq(0).text( ttText(values) );
	}
	
	this.jqui_slider = sliderComponent;
	return this;
}


