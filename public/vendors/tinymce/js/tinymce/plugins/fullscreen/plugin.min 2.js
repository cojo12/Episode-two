/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.16 (2019-09-24)
 */
!function(a){"use strict";function e(){}function d(e){return function(){return e}}function n(){return c}var r,t=function(e){function n(){return r}var r=e;return{get:n,set:function(e){r=e},clone:function(){return t(n())}}},o=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(e){return{isFullscreen:function(){return null!==e.get()}}},u=d(!1),s=d(!0),c=(r={fold:function(e,n){return e()},is:u,isSome:u,isNone:s,getOr:m,getOrThunk:l,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:d(null),getOrUndefined:d(undefined),or:m,orThunk:l,map:n,each:e,bind:n,exists:u,forall:s,filter:n,equals:f,equals_:f,toArray:function(){return[]},toString:d("none()")},Object.freeze&&Object.freeze(r),r);function f(e){return e.isNone()}function l(e){return e()}function m(e){return e}function h(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"==n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n}(e)===n}}function g(e,n){return-1!==e.indexOf(n)}function v(e,n,r){if(!D(r))throw a.console.error("Invalid call to CSS.set. Property ",n,":: Value ",r,":: Element ",e),new Error("CSS value must be a string: "+r);!function(e){return e.style!==undefined&&F(e.style.getPropertyValue)}(e)||e.style.setProperty(n,r)}function O(e,n){var r=e.dom();!function(e,n){for(var r=R(e),t=0,o=r.length;t<o;t++){var i=r[t];n(e[i],i)}}(n,function(e,n){v(r,n,e)})}function S(e,n){var r=function(e,n){for(var r=0;r<e.length;r++){var t=e[r];if(t.test(n))return t}return undefined}(e,n);if(!r)return{major:0,minor:0};function t(e){return Number(n.replace(r,"$"+e))}return j(t(1),t(2))}function w(e,n){return function(){return n===e}}function x(e,n){return function(){return n===e}}function E(e,n){var r=String(n).toLowerCase();return function(e,n){for(var r=0,t=e.length;r<t;r++){var o=e[r];if(n(o,r))return A.some(o)}return A.none()}(e,function(e){return e.search(r)})}function p(n){return function(e){return g(e,n)}}var N,T,y,C,b=function(r){function e(){return o}function n(e){return e(r)}var t=d(r),o={fold:function(e,n){return n(r)},is:function(e){return r===e},isSome:s,isNone:u,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(e){return b(e(r))},each:function(e){e(r)},bind:n,exists:n,forall:n,filter:function(e){return e(r)?o:c},toArray:function(){return[r]},toString:function(){return"some("+r+")"},equals:function(e){return e.is(r)},equals_:function(e,n){return e.fold(u,function(e){return n(r,e)})}};return o},A={some:b,none:n,from:function(e){return null===e||e===undefined?c:b(e)}},D=h("string"),F=h("function"),_=Array.prototype.slice,R=(F(Array.from)&&Array.from,Object.keys),M=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:d(e)}},P={fromHtml:function(e,n){var r=(n||a.document).createElement("div");if(r.innerHTML=e,!r.hasChildNodes()||1<r.childNodes.length)throw a.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return M(r.childNodes[0])},fromTag:function(e,n){var r=(n||a.document).createElement(e);return M(r)},fromText:function(e,n){var r=(n||a.document).createTextNode(e);return M(r)},fromDom:M,fromPoint:function(e,n,r){var t=e.dom();return A.from(t.elementFromPoint(n,r)).map(M)}},L=(a.Node.ATTRIBUTE_NODE,a.Node.CDATA_SECTION_NODE,a.Node.COMMENT_NODE,a.Node.DOCUMENT_NODE,a.Node.DOCUMENT_TYPE_NODE,a.Node.DOCUMENT_FRAGMENT_NODE,a.Node.ELEMENT_NODE,a.Node.TEXT_NODE,a.Node.PROCESSING_INSTRUCTION_NODE,a.Node.ENTITY_REFERENCE_NODE,a.Node.ENTITY_NODE,a.Node.NOTATION_NODE,"undefined"!=typeof a.window?a.window:Function("return this;")(),tinymce.util.Tools.resolve("tinymce.dom.DOMUtils")),k=function(e,n){e.fire("FullscreenStateChanged",{state:n})},I=function(){return j(0,0)},j=function(e,n){return{major:e,minor:n}},H={nu:j,detect:function(e,n){var r=String(n).toLowerCase();return 0===e.length?I():S(e,r)},unknown:I},W="Firefox",U=function(e){var n=e.current;return{current:n,version:e.version,isEdge:w("Edge",n),isChrome:w("Chrome",n),isIE:w("IE",n),isOpera:w("Opera",n),isFirefox:w(W,n),isSafari:w("Safari",n)}},q={unknown:function(){return U({current:undefined,version:H.unknown()})},nu:U,edge:d("Edge"),chrome:d("Chrome"),ie:d("IE"),opera:d("Opera"),firefox:d(W),safari:d("Safari")},B="Windows",V="Android",X="Solaris",z="FreeBSD",Y=function(e){var n=e.current;return{current:n,version:e.version,isWindows:x(B,n),isiOS:x("iOS",n),isAndroid:x(V,n),isOSX:x("OSX",n),isLinux:x("Linux",n),isSolaris:x(X,n),isFreeBSD:x(z,n)}},G={unknown:function(){return Y({current:undefined,version:H.unknown()})},nu:Y,windows:d(B),ios:d("iOS"),android:d(V),linux:d("Linux"),osx:d("OSX"),solaris:d(X),freebsd:d(z)},$=function(e,r){return E(e,r).map(function(e){var n=H.detect(e.versionRegexes,r);return{current:e.name,version:n}})},J=function(e,r){return E(e,r).map(function(e){var n=H.detect(e.versionRegexes,r);return{current:e.name,version:n}})},K=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Q=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return g(e,"edge/")&&g(e,"chrome")&&g(e,"safari")&&g(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,K],search:function(e){return g(e,"chrome")&&!g(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return g(e,"msie")||g(e,"trident")}},{name:"Opera",versionRegexes:[K,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:p("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:p("firefox")},{name:"Safari",versionRegexes:[K,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(g(e,"safari")||g(e,"mobile/"))&&g(e,"applewebkit")}}],Z=[{name:"Windows",search:p("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return g(e,"iphone")||g(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:p("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:p("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:p("linux"),versionRegexes:[]},{name:"Solaris",search:p("sunos"),versionRegexes:[]},{name:"FreeBSD",search:p("freebsd"),versionRegexes:[]}],ee={browsers:d(Q),oses:d(Z)},ne=function(e){var n=ee.browsers(),r=ee.oses(),t=$(n,e).fold(q.unknown,q.nu),o=J(r,e).fold(G.unknown,G.nu);return{browser:t,os:o,deviceType:function(e,n,r){var t=e.isiOS()&&!0===/ipad/i.test(r),o=e.isiOS()&&!t,i=e.isAndroid()&&3===e.version.major,u=e.isAndroid()&&4===e.version.major,s=t||i||u&&!0===/mobile/i.test(r),c=e.isiOS()||e.isAndroid(),a=c&&!s,f=n.isSafari()&&e.isiOS()&&!1===/safari/i.test(r);return{isiPad:d(t),isiPhone:d(o),isTablet:d(s),isPhone:d(a),isTouch:d(c),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:d(f)}}(o,t,e)}},re={detect:(y=!(N=function(){var e=a.navigator.userAgent;return ne(e)}),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return y||(y=!0,T=N.apply(null,e)),T})},te=L.DOM,oe=a.window.visualViewport,ie=re.detect().browser.isSafari()&&oe!==undefined?(C=function(){var n=t(A.none());return{clear:function(){n.set(A.none())},set:function(e){n.set(A.some(e))},isSet:function(){return n.get().isSome()},on:function(e){n.get().each(e)}}}(),{bind:function(e){C.set(e),ue(),oe.addEventListener("resize",ue),oe.addEventListener("scroll",ue)},unbind:function(){C.on(function(){oe.removeEventListener("scroll",ue),oe.removeEventListener("resize",ue)}),C.clear()}}):{bind:e,unbind:e};function ue(){a.window.requestAnimationFrame(function(){C.on(function(e){return O(e,{top:oe.offsetTop+"px",left:oe.offsetLeft+"px",height:oe.height+"px",width:oe.width+"px"})})})}function se(r,t){return function(n){n.setActive(null!==t.get());function e(e){return n.setActive(e.state)}return r.on("FullscreenStateChanged",e),function(){return r.off("FullscreenStateChanged",e)}}}var ce=function(e,n){var r,t,o,i=a.document.body,u=a.document.documentElement,s=n.get();if(r=(t=e.getContainer()).style,o=e.getContentAreaContainer().firstChild.style,s)o.width=s.iframeWidth,o.height=s.iframeHeight,s.containerWidth&&(r.width=s.containerWidth),s.containerHeight&&(r.height=s.containerHeight),te.removeClass(i,"tox-fullscreen"),te.removeClass(u,"tox-fullscreen"),te.removeClass(t,"tox-fullscreen"),function(e){a.window.scrollTo(e.x,e.y)}(s.scrollPos),n.set(null),k(e,!1),ie.unbind(),e.off("remove",ie.unbind);else{var c={scrollPos:function(){var e=te.getViewPort();return{x:e.x,y:e.y}}(),containerWidth:r.width,containerHeight:r.height,iframeWidth:o.width,iframeHeight:o.height};o.width=o.height="100%",r.width=r.height="",te.addClass(i,"tox-fullscreen"),te.addClass(u,"tox-fullscreen"),te.addClass(t,"tox-fullscreen"),ie.bind(P.fromDom(t)),e.on("remove",ie.unbind),n.set(c),k(e,!0)}},ae=function(e,n){e.addCommand("mceFullScreen",function(){ce(e,n)})},fe=function(e,n){e.ui.registry.addToggleMenuItem("fullscreen",{text:"Fullscreen",shortcut:"Meta+Shift+F",onAction:function(){return e.execCommand("mceFullScreen")},onSetup:se(e,n)}),e.ui.registry.addToggleButton("fullscreen",{tooltip:"Fullscreen",icon:"fullscreen",onAction:function(){return e.execCommand("mceFullScreen")},onSetup:se(e,n)})};!function de(){o.add("fullscreen",function(e){var n=t(null);return e.settings.inline||(ae(e,n),fe(e,n),e.addShortcut("Meta+Shift+F","","mceFullScreen")),i(n)})}()}(window);