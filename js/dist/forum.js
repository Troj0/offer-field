module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/ReplyComposer"]},,function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(0),a=n(3),u=n.n(a),p=n(5),c=n.n(p);function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,l(t,e)}var f=n(2),d=n.n(f),y=function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var n=e.prototype;return n.init=function(){this.content=this.props.value,this.field=this.props.field,this.answers=this.props.answers},n.view=function(){var t=this;return m("input.FormControl",{placeholder:"please enter bid",value:this.content,oninput:function(e){t.content=e.target.value,t.attrs.onchange(e.target.value)}})},e}(d.a),b=function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var n=e.prototype;return n.init=function(){},n.view=function(){return m("input",{ClassName:"alterbyteBid",placeholder:"please enter bid",value:this.attrs.value,readonly:!0})},e}(d.a);o.a.initializers.add("alterbyte/offer-field",(function(){Object(i.extend)(u.a.prototype,"init",(function(){this.alterbyteBidding=null})),Object(i.extend)(u.a.prototype,"headerItems",(function(t){var e=this;t.add("alterbyte-bidding",y.component({readonly:!1,value:this.alterbyteBidding,onchange:function(t){e.alterbyteBidding=t}}))})),Object(i.extend)(u.a.prototype,"data",(function(t){t.alterbyteBidding=this.alterbyteBidding})),Object(i.extend)(c.a.prototype,"headerItems",(function(t){var e=this.attrs.post,n=(this.attrs.post.data,this.attrs.post.attribute("alterbyteBidding"));if(1!=e.number()&&null!==n){var r=this.attrs.post.attribute("alterbyteBidding")+" ر.س";r&&t.add("alterbyte-bidding",b.component({value:r}))}}))}))}]);
//# sourceMappingURL=forum.js.map