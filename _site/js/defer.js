var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return "function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return "object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return "number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return "number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return "children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i){r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n+=1){G(t.childNodes[n],e)}}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType){return!1}var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n){return n.call(t,e)}var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e){return T.Z()}if("string"==typeof e){if(e=e.trim(),"<"==e[0]&&l.test(e)){r=T.fragment(e,RegExp.$1,i),e=null}else{if(i!==t){return n(i).find(e)}r=T.qsa(a,e)}}else{if(Z(e)){return n(a).ready(e)}if(T.isZ(e)){return e}if(A(e)){r=k(e)}else{if(D(e)){r=[e],e=null}else{if(l.test(e)){r=T.fragment(e.trim(),RegExp.$1,i),e=null}else{if(i!==t){return n(i).find(e)}r=T.qsa(a,e)}}}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return "boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);){if(e===t){return!0}}return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t){return!1}return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t)){for(r=0;r<t.length;r+=1){n=e(t[r],r),null!=n&&i.push(n)}}else{for(o in t){n=e(t[o],o),null!=n&&i.push(n)}}return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n+=1){if(e.call(t[n],n,t[n])===!1){return t}}}else{for(i in t){if(e.call(t[i],i,t[i])===!1){return t}}}return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t){this.each(function(t){e.call(this,t)||i.push(this)})}else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return -1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));){i=i!==e&&!$(i)&&i.parentNode}return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;){i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0})}return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e){var i=n(t).get(0),r=i.parentNode||this.length>1}return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;){t=e.first()}n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return "string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType){if(D(n)){for(e in n){X(this,e,n[e])}}else{X(this,n,J(this,i,t,this.getAttribute(n)))}}}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t){return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)})}if(!this.length){return null}var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o){return}if(r=getComputedStyle(o,""),"string"==typeof t){return o.style[C(t)]||r.getPropertyValue(t)}if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t)){i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))})}else{for(e in t){t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))})}}return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t){return W(this,"")}i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");){t=t.offsetParent}return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s){t=t.cloneNode(!0)}else{if(!o){return n(t).remove()}}o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(u){function l(k){return k._zid||(k._zid=e++)}function h(k,A,z,q){if(A=r(A),A.ns){var B=d(A.ns)}return(t[l(k)]||[]).filter(function(C){return!(!C||A.e&&C.e!=A.e||A.ns&&!B.test(C.ns)||z&&l(C.fn)!==l(z)||q&&C.sel!=q)})}function r(q){var k=(""+q).split(".");return{e:k[0],ns:k.slice(1).sort().join(" ")}}function d(k){return new RegExp("(?:^| )"+k.replace(" "," .* ?")+"(?: |$)")}function m(q,k){return q.del&&!w&&q.e in f||!!k}function g(k){return c[k]||w&&f[k]||k}function x(z,C,F,D,k,G,A){var B=l(z),q=t[B]||(t[B]=[]);C.split(/\s/).forEach(function(J){if("ready"==J){return u(document).ready(F)}var I=r(J);I.fn=F,I.sel=k,I.e in c&&(F=function(L){var K=L.relatedTarget;return!K||K!==this&&!u.contains(this,K)?I.fn.apply(this,arguments):void 0}),I.del=G;var H=G||F;I.proxy=function(K){if(K=j(K),!K.isImmediatePropagationStopped()){K.data=D;var L=H.apply(z,K._args==o?[K]:[K].concat(K._args));return L===!1&&(K.preventDefault(),K.stopPropagation()),L}},I.i=q.length,q.push(I),"addEventListener"in z&&z.addEventListener(g(I.e),I.proxy,m(I,A))})}function y(k,B,z,q,C){var A=l(k);(B||"").split(/\s/).forEach(function(D){h(k,D,z,q).forEach(function(F){delete t[A][F.i],"removeEventListener"in k&&k.removeEventListener(g(F.e),F.proxy,m(F,C))})})}function j(k,q){return(q||!k.isDefaultPrevented)&&(q||(q=k),u.each(v,function(B,z){var A=q[B];k[B]=function(){return this[z]=n,A&&A.apply(q,arguments)},k[z]=b}),(q.defaultPrevented!==o?q.defaultPrevented:"returnValue"in q?q.returnValue===!1:q.getPreventDefault&&q.getPreventDefault())&&(k.isDefaultPrevented=n)),k}function S(k){var z,q={originalEvent:k};for(z in k){E.test(z)||k[z]===o||(q[z]=k[z])}return j(q,k)}var o,e=1,i=Array.prototype.slice,s=u.isFunction,p=function(k){return "string"==typeof k},t={},a={},w="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",u.event={add:x,remove:y},u.proxy=function(z,q){var A=2 in arguments&&i.call(arguments,2);if(s(z)){var k=function(){return z.apply(q,A?A.concat(i.call(arguments)):arguments)};return k._zid=l(z),k}if(p(q)){return A?(A.unshift(z[q],z),u.proxy.apply(null,A)):u.proxy(z[q],z)}throw new TypeError("expected function")},u.fn.bind=function(q,k,z){return this.on(q,k,z)},u.fn.unbind=function(q,k){return this.off(q,k)},u.fn.one=function(k,A,z,q){return this.on(k,A,z,q,1)};var n=function(){return!0},b=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,v={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};u.fn.delegate=function(q,k,z){return this.on(k,q,z)},u.fn.undelegate=function(q,k,z){return this.off(k,q,z)},u.fn.live=function(q,k){return u(document.body).delegate(this.selector,q,k),this},u.fn.die=function(q,k){return u(document.body).undelegate(this.selector,q,k),this},u.fn.on=function(F,z,D,B,q){var C,k,A=this;return F&&!p(F)?(u.each(F,function(G,H){A.on(G,z,D,H,q)}),A):(p(z)||s(B)||B===!1||(B=D,D=z,z=o),(s(D)||D===!1)&&(B=D,D=o),B===!1&&(B=b),A.each(function(H,G){q&&(C=function(I){return y(G,I.type,B),B.apply(this,arguments)}),z&&(k=function(K){var I,J=u(K.target).closest(z,G).get(0);return J&&J!==G?(I=u.extend(S(K),{currentTarget:J,liveFired:G}),(C||B).apply(J,[I].concat(i.call(arguments,1)))):void 0}),x(G,F,B,D,z,k||C)}))},u.fn.off=function(q,A,z){var k=this;return q&&!p(q)?(u.each(q,function(B,C){k.off(B,A,C)}),k):(p(A)||s(z)||z===!1||(z=A,A=o),z===!1&&(z=b),k.each(function(){y(this,q,z,A)}))},u.fn.trigger=function(q,k){return q=p(q)||u.isPlainObject(q)?u.Event(q):j(q),q._args=k,this.each(function(){q.type in f&&"function"==typeof this[q.type]?this[q.type]():"dispatchEvent"in this?this.dispatchEvent(q):u(this).triggerHandler(q,k)})},u.fn.triggerHandler=function(A,z){var q,k;return this.each(function(B,C){q=S(p(A)?u.Event(A):A),q._args=z,q.target=C,u.each(h(C,A.type||A),function(F,D){return k=D.proxy(q),q.isImmediatePropagationStopped()?!1:void 0})}),k},("focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error").split(" ").forEach(function(k){u.fn[k]=function(q){return 0 in arguments?this.bind(k,q):this.trigger(k)}}),u.Event=function(k,A){p(k)||(A=k,k=A.type);var z=document.createEvent(a[k]||"Events"),q=!0;if(A){for(var B in A){"bubbles"==B?q=!!A[B]:z[B]=A[B]}}return z.initEvent(k,q,!0),j(z)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++ &&p(e,null,"ajaxStart")}function m(e){e.global&&! --t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return ""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i)){return t.ajax(i)}var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings){void 0===o[i]&&(o[i]=t.ajaxSettings[i])}d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u){return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s)}var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers){for(r in o.headers){m(r,o.headers[r])}}if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else{y(S.statusText||null,S.status?"error":"abort",S,o,s)}}},g(S,o)===!1){return S.abort(),y(null,"abort",S,o,s),S}if(o.xhrFields){for(r in o.xhrFields){S[r]=o.xhrFields[r]}}var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p){T.apply(S,p[r])}return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length){return this}var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(b){b.fn.serializeArray=function(){var g,e,a=[],h=function(c){return c.forEach?c.forEach(h):void a.push({name:g,value:c})};return this[0]&&b.each(this[0].elements,function(d,c){e=c.type,g=c.name,g&&"fieldset"!=c.nodeName.toLowerCase()&&!c.disabled&&"submit"!=e&&"reset"!=e&&"button"!=e&&"file"!=e&&("radio"!=e&&"checkbox"!=e||c.checked)&&h(b(c).val())}),a},b.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(d){a.push(encodeURIComponent(d.name)+"="+encodeURIComponent(d.value))}),a.join("&")},b.fn.submit=function(a){if(0 in arguments){this.bind("submit",a)}else{if(this.length){var d=b.Event("submit");this.eq(0).trigger(d),d.isDefaultPrevented()||this.get(0).submit()}}return this}}(Zepto),function(e){"__proto__"in{}||e.extend(e.zepto,{Z:function(b,a){return b=b||[],e.extend(b,e.fn),b.selector=a||"",b.__Z=!0,b},isZ:function(a){return "array"===e.type(a)&&"__Z"in a}});try{getComputedStyle(void 0)}catch(d){var f=getComputedStyle;window.getComputedStyle=function(b){try{return f(b)}catch(a){return null}}}}(Zepto);!function(B){function p(h,b,d,f){return Math.abs(h-b)>=Math.abs(d-f)?h-b>0?"Left":"Right":d-f>0?"Up":"Down"}function l(){o=null,a.last&&(a.el.trigger("longTap"),a={})}function n(){o&&clearTimeout(o),o=null}function e(){r&&clearTimeout(r),i&&clearTimeout(i),u&&clearTimeout(u),o&&clearTimeout(o),r=i=u=o=null,a={}}function s(b){return("touch"==b.pointerType||b.pointerType==b.MSPOINTER_TYPE_TOUCH)&&b.isPrimary}function t(d,b){return d.type=="pointer"+b||d.type.toLowerCase()=="mspointer"+b}var r,i,u,o,c,a={},g=750;B(document).ready(function(){var h,j,k,d,f=0,b=0;"MSGesture"in window&&(c=new MSGesture,c.target=document.body),B(document).bind("MSGestureEnd",function(m){var q=m.velocityX>1?"Right":m.velocityX<-1?"Left":m.velocityY>1?"Down":m.velocityY<-1?"Up":null;q&&(a.el.trigger("swipe"),a.el.trigger("swipe"+q))}).on("touchstart MSPointerDown pointerdown",function(m){(!(d=t(m,"down"))||s(m))&&(k=d?m:m.touches[0],m.touches&&1===m.touches.length&&a.x2&&(a.x2=void 0,a.y2=void 0),h=Date.now(),j=h-(a.last||h),a.el=B("tagName"in k.target?k.target:k.target.parentNode),r&&clearTimeout(r),a.x1=k.pageX,a.y1=k.pageY,j>0&&250>=j&&(a.isDoubleTap=!0),a.last=h,o=setTimeout(l,g),c&&d&&c.addPointer(m.pointerId))}).on("touchmove MSPointerMove pointermove",function(m){(!(d=t(m,"move"))||s(m))&&(k=d?m:m.touches[0],n(),a.x2=k.pageX,a.y2=k.pageY,f+=Math.abs(a.x1-a.x2),b+=Math.abs(a.y1-a.y2))}).on("touchend MSPointerUp pointerup",function(m){(!(d=t(m,"up"))||s(m))&&(n(),a.x2&&Math.abs(a.x1-a.x2)>30||a.y2&&Math.abs(a.y1-a.y2)>30?u=setTimeout(function(){a.el.trigger("swipe"),a.el.trigger("swipe"+p(a.x1,a.x2,a.y1,a.y2)),a={}},0):"last"in a&&(30>f&&30>b?i=setTimeout(function(){var q=B.Event("tap");q.cancelTouch=e,a.el.trigger(q),a.isDoubleTap?(a.el&&a.el.trigger("doubleTap"),a={}):r=setTimeout(function(){r=null,a.el&&a.el.trigger("singleTap"),a={}},250)},0):a={}),f=b=0)}).on("touchcancel MSPointerCancel pointercancel",e),B(window).on("scroll",e)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(b){B.fn[b]=function(d){return this.on(b,d)}})}(Zepto);

// My JS
Zepto(function($) {

    // ============= Home Page =============== //
    // =============           =============== //

    var verse_button = $('.verse-button');
    var icons_button = $('.social-button');

    var verse_popup = $('.pop-up.verse');
    var icons_popup = $('.pop-up.social-icons');

    // Makes sure Zepto adds class, so function only works if Zepto exists.
    // "hide" class is so that div does not show up on page load.

    // $('.pop-up').addClass('hide');
    $('.pop-up').addClass('active-jq');

    // Make sure remove hide class so transition occurs after page load
    setTimeout(function() {
        $('.pop-up').removeClass('hide');
    }, 1000);

    $('.close').on('click', function(e) {
        $('.pop-up').addClass('active-jq');

        // Make sure to close the correct pop up
        if ($(this).parent().hasClass('verse')) {
            verse_button.removeClass('active');
        } else if ($(this).parent().hasClass('social-icons')) {
            icons_button.removeClass('active');
        }
    })

    // Touch Move event is so that it works on first click for Safari in iPhones/iPads.
    verse_button.on('click touchmove', function(e) {
        // Hide the icon's pop up if they are open
        icons_popup.addClass('active-jq');
        icons_button.removeClass('active');

        verse_popup.removeClass('hide');
        verse_popup.toggleClass('active-jq');
        $(this).toggleClass('active');
    })

    icons_button.on('click touchmove', function(e) {
        // Hide the verse pop up if is open
        verse_popup.addClass('active-jq');
        verse_button.removeClass('active');

        icons_popup.removeClass('hide');
        icons_popup.toggleClass('active-jq');
        $(this).toggleClass('active');
    })

    // ============= About Page =============== //
    // =============           =============== //

    // 1. Add image class from the div that was clicked to the current active image div
    // 2. Remove current image class from the div that has an active class
    // 3. Remove active class
    // 4. Remove image class from the clicked div
    // 5. Add active class to the clicked div.

    $('.image-container').on("click", function(e) {

        var index = $(this).attr('class').split("-")[2];
        var index_active = $('.slideshow .image-container.active').index() + 1;

        $('.slideshow .image-container.active').removeClass('image-' + index_active);
        $('.slideshow .image-container.active').addClass('image-' + index);

        $('.image-container').removeClass('active');
        $(this).removeClass('image-' + index);
        $(this).addClass('active');
    })

    $('.image-container .image').on("click", function(e) {
        $('.image-container .image').removeClass('active');
        $(this).addClass('active');
    })

    $('.button.contact').on("click", function (e) {
      e.stopPropagation();
      var elm = document.getElementById('contact-me');
      $('#contact-me').addClass('active');
      var newone = elm.cloneNode(true);
      elm.parentNode.replaceChild(newone, elm);
    })

    // Code help from: https://gist.github.com/benjamincharity/6058688
    function smoothScroll(el, to, duration) {
        if (duration < 0) {
            return;
        }
        var difference = to - $(window).scrollTop();
        var perTick = difference / duration * 10;
        this.scrollToTimerCache = setTimeout(function() {
            if (!isNaN(parseInt(perTick, 10))) {
                window.scrollTo(0, $(window).scrollTop() + perTick);
                smoothScroll(el, to, duration - 10);
            }
        }.bind(this), 10);
    }

    // Scroll to specific div using zepto. (It will still scroll even without javascript)
    // Help from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*="#"]:not([href="#"])').on("click", function(e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                smoothScroll($(window), target.offset().top, 500);
            }
        }
    })

    // ============= Portfolio Page =============== //
    // =============                =============== //
    var currentIndex = 1;
    var portfolio_amount = $('.portfolio-items').length;
    var dots = $('.dots').children();

    // Previous Function
    function prevSlide () {
      currentIndex -= 1;
      if (currentIndex < 1) {
        currentIndex = portfolio_amount;
      }
      // Add color to active dot
      $('.dots .fa').removeClass('fa-active');
      $(dots[currentIndex - 1].firstElementChild).addClass('fa-active');
      // Change portfolio image
      $('.portfolio-items').removeClass('show-item');
      $('.portfolio-' + currentIndex).addClass('show-item');
      // Add transition to mobile image
      $('.mobile-image').removeClass('show-item');
      $('.portfolio-' + currentIndex + ' .mobile-image').addClass('show-item');
    }

    // Next Function
    function nextSlide () {
      currentIndex += 1;
      if (currentIndex > portfolio_amount) {
        currentIndex = 1;
      }
      // Add color to active dot
      $('.dots .fa').removeClass('fa-active');
      $(dots[currentIndex - 1].firstElementChild).addClass('fa-active');
      // Change portfolio image
      $('.portfolio-items').removeClass('show-item');
      $('.portfolio-' + currentIndex).addClass('show-item');
      // Add transition to mobile image
      $('.mobile-image').removeClass('show-item');
      $('.portfolio-' + currentIndex + ' .mobile-image').addClass('show-item');
    }

    // Previous Click
    $('.prev').click(function(e) {
      e.preventDefault();
      prevSlide();
    });

    // Mobile Swipe Left
    $('.portfolio-slider').swipeLeft(function(){
      prevSlide();
    })

    // Next Click
    $('.next').click(function(e) {
      e.preventDefault();
      nextSlide();
    });

    // Mobile Swipe Right
    $('.portfolio-slider').swipeRight(function(){
      nextSlide();
    })

    // Use dots to automatically go to a slide-down
    $('.dots .fa-stack').on('click touchmove', function() {
      var dot_number = $(this)[0].dataset.number;
      $('.portfolio-items').removeClass('show-item');
      $('.portfolio-' + dot_number).addClass('show-item');

      $('.mobile-image').removeClass('show-item');
      $('.portfolio-' + dot_number + ' .mobile-image').addClass('show-item');

      $('.dots .fa').removeClass('fa-active');
      $(dots[dot_number - 1].firstElementChild).addClass('fa-active');
    });

    // ================= Resume Modal ============== //
    // =================              ============== //

    //select all the a tag with name equal to modal
    $('a[name=resume-modal]').click(function(e) {
        e.preventDefault();
        $('body').addClass('no-scroll');
        $('.modal-cover').addClass('modal-background');
        $('.modal-window').addClass('modal-show');
    });
    $('.modal-window .close-resume').click(function(e) {
        e.preventDefault();
        $('.modal-cover').removeClass('modal-background');
        $('.modal-window').removeClass('modal-show');
        $('body').removeClass('no-scroll');
    });

    // ================= Close Menu ============== //
    // =================            ============== //
    $('a[name=menu-modal]').click(function(e) {
        e.preventDefault();
        $('body').addClass('no-scroll');
        $('.menu-header').removeClass('hidden');
    });
    $('a[name=close-menu]').click(function(e) {
        e.preventDefault();
        $('.menu-header').addClass('hidden');
        $('body').removeClass('no-scroll');
    });

    // ================= Countdown ============== //
    // =================           ============== //
    // Reference: https://codepen.io/SitePoint/pen/MwNPVq

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    // var deadline = new Date(Date.parse(new Date()) + 222 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', "November 22 2017");

    $('.open-countdown').click(function(e) {
        e.preventDefault();
        $('.modal-cover').addClass('modal-background countdown');
        $('.countdown-section').removeClass('hidden-countdown');
        $(this).addClass('hidden');
    });

    $('a.close-countdown').click(function(e) {
        e.preventDefault();
        $('.modal-cover').removeClass('modal-background countdown');
        $('.countdown-section').addClass('hidden-countdown');
        $('.open-countdown').removeClass('hidden');
    });

})
