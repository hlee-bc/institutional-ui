import{q as Y,s as X,d as J,c as Q,v as U,w as Z,x as ee,a as P,l as te,f as re}from"./index-c-eVI8SP.js";import{r as a}from"./index-BCtMShv3.js";import{t as ne}from"./AntdIcon-CurcBfQd.js";import{f as E}from"./CSSMotionList-4Nb43TCA.js";var O=a.createContext(null);function ie(e){var t=e.children,r=e.onBatchResize,n=a.useRef(0),i=a.useRef([]),o=a.useContext(O),s=a.useCallback(function(c,u,f){n.current+=1;var d=n.current;i.current.push({size:c,element:u,data:f}),Promise.resolve().then(function(){d===n.current&&(r==null||r(i.current),i.current=[])}),o==null||o(c,u,f)},[r,o]);return a.createElement(O.Provider,{value:s},t)}var I=function(){if(typeof Map<"u")return Map;function e(t,r){var n=-1;return t.some(function(i,o){return i[0]===r?(n=o,!0):!1}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(r){var n=e(this.__entries__,r),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(r,n){var i=e(this.__entries__,r);~i?this.__entries__[i][1]=n:this.__entries__.push([r,n])},t.prototype.delete=function(r){var n=this.__entries__,i=e(n,r);~i&&n.splice(i,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];r.call(n,s[1],s[0])}},t}()}(),C=typeof window<"u"&&typeof document<"u"&&window.document===document,_=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),oe=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(_):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),se=2;function ae(e,t){var r=!1,n=!1,i=0;function o(){r&&(r=!1,e()),n&&c()}function s(){oe(o)}function c(){var u=Date.now();if(r){if(u-i<se)return;n=!0}else r=!0,n=!1,setTimeout(s,t);i=u}return c}var ue=20,ce=["top","right","bottom","left","width","height","size","weight"],fe=typeof MutationObserver<"u",he=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=ae(this.refresh.bind(this),ue)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var r=this.observers_,n=r.indexOf(t);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return t.forEach(function(r){return r.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!C||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),fe?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!C||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var r=t.propertyName,n=r===void 0?"":r,i=ce.some(function(o){return!!~n.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),L=function(e,t){for(var r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},p=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||_},B=y(0,0,0,0);function g(e){return parseFloat(e)||0}function k(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(n,i){var o=e["border-"+i+"-width"];return n+g(o)},0)}function ve(e){for(var t=["top","right","bottom","left"],r={},n=0,i=t;n<i.length;n++){var o=i[n],s=e["padding-"+o];r[o]=g(s)}return r}function de(e){var t=e.getBBox();return y(0,0,t.width,t.height)}function le(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return B;var n=p(e).getComputedStyle(e),i=ve(n),o=i.left+i.right,s=i.top+i.bottom,c=g(n.width),u=g(n.height);if(n.boxSizing==="border-box"&&(Math.round(c+o)!==t&&(c-=k(n,"left","right")+o),Math.round(u+s)!==r&&(u-=k(n,"top","bottom")+s)),!be(e)){var f=Math.round(c+o)-t,d=Math.round(u+s)-r;Math.abs(f)!==1&&(c-=f),Math.abs(d)!==1&&(u-=d)}return y(i.left,i.top,c,u)}var pe=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof p(e).SVGGraphicsElement}:function(e){return e instanceof p(e).SVGElement&&typeof e.getBBox=="function"}}();function be(e){return e===p(e).document.documentElement}function me(e){return C?pe(e)?de(e):le(e):B}function _e(e){var t=e.x,r=e.y,n=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return L(s,{x:t,y:r,width:n,height:i,top:r,right:t+n,bottom:i+r,left:t}),s}function y(e,t,r,n){return{x:e,y:t,width:r,height:n}}var ge=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=me(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),ye=function(){function e(t,r){var n=_e(r);L(this,{target:t,contentRect:n})}return e}(),Re=function(){function e(t,r,n){if(this.activeObservations_=[],this.observations_=new I,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=r,this.callbackCtx_=n}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof p(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)||(r.set(t,new ge(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof p(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)&&(r.delete(t),r.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&t.activeObservations_.push(r)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new ye(n.target,n.broadcastRect())});this.callback_.call(t,r,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),j=typeof WeakMap<"u"?new WeakMap:new I,G=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=he.getInstance(),n=new Re(t,r,this);j.set(this,n)}return e}();["observe","unobserve","disconnect"].forEach(function(e){G.prototype[e]=function(){var t;return(t=j.get(this))[e].apply(t,arguments)}});var we=function(){return typeof _.ResizeObserver<"u"?_.ResizeObserver:G}(),v=new Map;function Ee(e){e.forEach(function(t){var r,n=t.target;(r=v.get(n))===null||r===void 0||r.forEach(function(i){return i(n)})})}var F=new we(Ee);function Oe(e,t){v.has(e)||(v.set(e,new Set),F.observe(e)),v.get(e).add(t)}function Ce(e,t){v.has(e)&&(v.get(e).delete(t),v.get(e).size||(F.unobserve(e),v.delete(e)))}var ze=function(e){Y(r,e);var t=X(r);function r(){return J(this,r),t.apply(this,arguments)}return Q(r,[{key:"render",value:function(){return this.props.children}}]),r}(a.Component);function Me(e,t){var r=e.children,n=e.disabled,i=a.useRef(null),o=a.useRef(null),s=a.useContext(O),c=typeof r=="function",u=c?r(i):r,f=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),d=!c&&a.isValidElement(u)&&U(u),q=d?Z(u):null,N=ee(q,i),z=function(){var l;return E(i.current)||(i.current&&te(i.current)==="object"?E((l=i.current)===null||l===void 0?void 0:l.nativeElement):null)||E(o.current)};a.useImperativeHandle(t,function(){return z()});var M=a.useRef(e);M.current=e;var x=a.useCallback(function(h){var l=M.current,A=l.onResize,V=l.data,S=h.getBoundingClientRect(),R=S.width,w=S.height,b=h.offsetWidth,m=h.offsetHeight,T=Math.floor(R),D=Math.floor(w);if(f.current.width!==T||f.current.height!==D||f.current.offsetWidth!==b||f.current.offsetHeight!==m){var W={width:T,height:D,offsetWidth:b,offsetHeight:m};f.current=W;var $=b===Math.round(R)?R:b,K=m===Math.round(w)?w:m,H=P(P({},W),{},{offsetWidth:$,offsetHeight:K});s==null||s(H,h,V),A&&Promise.resolve().then(function(){A(H,h)})}},[]);return a.useEffect(function(){var h=z();return h&&!n&&Oe(h,x),function(){return Ce(h,x)}},[i.current,n]),a.createElement(ze,{ref:o},d?a.cloneElement(u,{ref:N}):u)}var xe=a.forwardRef(Me),Ae="rc-observer-key";function Se(e,t){var r=e.children,n=typeof r=="function"?[r]:ne(r);return n.map(function(i,o){var s=(i==null?void 0:i.key)||"".concat(Ae,"-").concat(o);return a.createElement(xe,re({},e,{key:s,ref:o===0?t:void 0}),i)})}var Te=a.forwardRef(Se);Te.Collection=ie;export{Te as R};
