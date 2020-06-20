/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.16 (2019-09-24)
 */
!function(r){"use strict";function n(){}function u(n){return function(){return n}}function e(){return l}var t,o=function(n){function e(){return t}var t=n;return{get:e,set:function(n){t=n},clone:function(){return o(e())}}},i=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=function(n){return{isEnabled:function(){return n.get()}}},a=function(n,e){return n.fire("VisualChars",{state:e})},f=u(!1),s=u(!0),l=(t={fold:function(n,e){return n()},is:f,isSome:f,isNone:s,getOr:g,getOrThunk:m,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:u(null),getOrUndefined:u(undefined),or:g,orThunk:m,map:e,each:n,bind:e,exists:f,forall:s,filter:e,equals:d,equals_:d,toArray:function(){return[]},toString:u("none()")},Object.freeze&&Object.freeze(t),t);function d(n){return n.isNone()}function m(n){return n()}function g(n){return n}function N(e){return function(n){return function(n){if(null===n)return"null";var e=typeof n;return"object"==e&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":e}(n)===e}}function v(n,e){for(var t=0,r=n.length;t<r;t++){e(n[t],t)}}function p(n){return n.dom().nodeValue}function h(n,e,t){!function(n,e,t){if(!(L(t)||P(t)||R(t)))throw r.console.error("Invalid call to Attr.set. Key ",e,":: Value ",t,":: Element ",n),new Error("Attribute value was not simple");n.setAttribute(e,t+"")}(n.dom(),e,t)}function E(n,e){n.dom().removeAttribute(e)}function T(n,e){var t=function(n,e){var t=n.dom().getAttribute(e);return null===t?undefined:t}(n,e);return t===undefined||""===t?[]:t.split(" ")}function O(n){return n.dom().classList!==undefined}function y(n,e){return function(n,e,t){var r=T(n,e).concat([t]);return h(n,e,r.join(" ")),!0}(n,"class",e)}function b(n,e){return function(n,e,t){var r=function(n,e){for(var t=[],r=0,o=n.length;r<o;r++){var u=n[r];e(u,r)&&t.push(u)}return t}(T(n,e),function(n){return n!==t});return 0<r.length?h(n,e,r.join(" ")):E(n,e),!1}(n,"class",e)}function D(n){0===(O(n)?n.dom().classList:function(n){return T(n,"class")}(n)).length&&E(n,"class")}function C(n,e){var t,r="";for(t in n)r+=t;return new RegExp("["+r+"]",e?"g":"")}function A(n){var e,t="";for(e in n)t&&(t+=","),t+="span.mce-"+n[e];return t}function _(n){return"span"===n.nodeName.toLowerCase()&&n.classList.contains("mce-nbsp-wrap")}function w(u,n){var e=W.filterDescendants(F.fromDom(n),W.isMatch);v(e,function(n){var e=n.dom().parentNode;if(_(e))!function(n,e){O(n)?n.dom().classList.add(e):y(n,e)}(F.fromDom(e),H.nbspClass);else{for(var t=W.replaceWithSpans(p(n)),r=u.dom.create("div",null,t),o=void 0;o=r.lastChild;)u.dom.insertAfter(o,n.dom());u.dom.remove(n.dom())}})}function M(e,n){var t=e.dom.select(H.selector,n);v(t,function(n){_(n)?function(n,e){O(n)?n.dom().classList.remove(e):b(n,e);D(n)}(F.fromDom(n),H.nbspClass):e.dom.remove(n,!0)})}function S(t,r){return function(e){e.setActive(r.get());function n(n){return e.setActive(n.state)}return t.on("VisualChars",n),function(){return t.off("VisualChars",n)}}}var k,x=function(t){function n(){return o}function e(n){return n(t)}var r=u(t),o={fold:function(n,e){return e(t)},is:function(n){return t===n},isSome:s,isNone:f,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:n,orThunk:n,map:function(n){return x(n(t))},each:function(n){n(t)},bind:e,exists:e,forall:e,filter:function(n){return n(t)?o:l},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(n){return n.is(t)},equals_:function(n,e){return n.fold(f,function(n){return e(t,n)})}};return o},I=function(n){return null===n||n===undefined?l:x(n)},L=N("string"),P=N("boolean"),B=N("function"),R=N("number"),V=Array.prototype.slice,U=(B(Array.from)&&Array.from,r.Node.ATTRIBUTE_NODE,r.Node.CDATA_SECTION_NODE,r.Node.COMMENT_NODE,r.Node.DOCUMENT_NODE,r.Node.DOCUMENT_TYPE_NODE,r.Node.DOCUMENT_FRAGMENT_NODE,r.Node.ELEMENT_NODE,r.Node.TEXT_NODE),j=(r.Node.PROCESSING_INSTRUCTION_NODE,r.Node.ENTITY_REFERENCE_NODE,r.Node.ENTITY_NODE,r.Node.NOTATION_NODE,"undefined"!=typeof r.window?r.window:Function("return this;")(),k=U,function(n){return function(n){return n.dom().nodeType}(n)===k}),q=function(n){if(null===n||n===undefined)throw new Error("Node cannot be null or undefined");return{dom:u(n)}},F={fromHtml:function(n,e){var t=(e||r.document).createElement("div");if(t.innerHTML=n,!t.hasChildNodes()||1<t.childNodes.length)throw r.console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node");return q(t.childNodes[0])},fromTag:function(n,e){var t=(e||r.document).createElement(n);return q(t)},fromText:function(n,e){var t=(e||r.document).createTextNode(n);return q(t)},fromDom:q,fromPoint:function(n,e,t){var r=n.dom();return I(r.elementFromPoint(e,t)).map(q)}},G={"\xa0":"nbsp","\xad":"shy"},H={charMap:G,regExp:C(G),regExpGlobal:C(G,!0),selector:A(G),nbspClass:"mce-nbsp",charMapToRegExp:C,charMapToSelector:A},Y=function(n){return'<span data-mce-bogus="1" class="mce-'+H.charMap[n]+'">'+n+"</span>"},z=function(n,e){var t=[],r=function(n,e){for(var t=n.length,r=new Array(t),o=0;o<t;o++){var u=n[o];r[o]=e(u,o)}return r}(n.dom().childNodes,F.fromDom);return v(r,function(n){e(n)&&(t=t.concat([n])),t=t.concat(z(n,e))}),t},W={isMatch:function(n){return j(n)&&p(n)!==undefined&&H.regExp.test(p(n))},filterDescendants:z,findParentElm:function(n,e){for(;n.parentNode;){if(n.parentNode===e)return n;n=n.parentNode}},replaceWithSpans:function(n){return n.replace(H.regExpGlobal,Y)}},K=w,X=M,J=function(n){var e=n.getBody(),t=n.selection.getBookmark(),r=W.findParentElm(n.selection.getNode(),e);r=r!==undefined?r:e,M(n,r),w(n,r),n.selection.moveToBookmark(t)},Q=function(n,e){var t,r=n.getBody(),o=n.selection;e.set(!e.get()),a(n,e.get()),t=o.getBookmark(),!0===e.get()?K(n,r):X(n,r),o.moveToBookmark(t)},Z=function(n,e){n.addCommand("mceVisualChars",function(){Q(n,e)})},$=tinymce.util.Tools.resolve("tinymce.util.Delay"),nn=function(e,t){var r=$.debounce(function(){J(e)},300);!1!==e.settings.forced_root_block&&e.on("keydown",function(n){!0===t.get()&&(13===n.keyCode?J(e):r())})},en=function(n){return n.getParam("visualchars_default_state",!1)},tn=function(e,t){e.on("init",function(){var n=!en(e);t.set(n),Q(e,t)})};!function rn(){i.add("visualchars",function(n){var e=o(!1);return Z(n,e),function(n,e){n.ui.registry.addToggleButton("visualchars",{tooltip:"Show invisible characters",icon:"paragraph",onAction:function(){return n.execCommand("mceVisualChars")},onSetup:S(n,e)}),n.ui.registry.addToggleMenuItem("visualchars",{text:"Show invisible characters",onAction:function(){return n.execCommand("mceVisualChars")},onSetup:S(n,e)})}(n,e),nn(n,e),tn(n,e),c(e)})}()}(window);