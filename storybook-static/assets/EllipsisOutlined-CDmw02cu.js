import{k as qt,w as Gt,v as Yt,_ as A,g as de,f as $,e as x,Y as Wn,a as k,p as ye,B as Xt,x as Bn,q as Hn,s as jn,d as qn,c as Gn,l as Yn}from"./index-c-eVI8SP.js";import{w as Se,_ as re,C as Xn}from"./CSSMotionList-4Nb43TCA.js";import{T as Jt}from"./index-C1ie4bAf.js";import{r as t,R as ee}from"./index-BCtMShv3.js";import{K as le}from"./KeyCode-lh1qUinJ.js";import{F as $e}from"./Overflow-cFj9MF1C.js";import{u as Ye}from"./useMergedState-fwwdJW5A.js";import{i as Zt}from"./index-BoN9lWja.js";import{r as Jn}from"./index-DR9qmNxJ.js";import{i as Zn}from"./isVisible-DhUEo0yb.js";import{o as Ct}from"./useSize-CFdKDM9U.js";import{t as Qn,I as er}from"./AntdIcon-CurcBfQd.js";var tr=le.ESC,nr=le.TAB;function rr(e){var r=e.visible,a=e.triggerRef,n=e.onVisibleChange,i=e.autoFocus,o=e.overlayRef,l=t.useRef(!1),u=function(){if(r){var s,d;(s=a.current)===null||s===void 0||(d=s.focus)===null||d===void 0||d.call(s),n==null||n(!1)}},f=function(){var s;return(s=o.current)!==null&&s!==void 0&&s.focus?(o.current.focus(),l.current=!0,!0):!1},c=function(s){switch(s.keyCode){case tr:u();break;case nr:{var d=!1;l.current||(d=f()),d?s.preventDefault():u();break}}};t.useEffect(function(){return r?(window.addEventListener("keydown",c),i&&Se(f,3),function(){window.removeEventListener("keydown",c),l.current=!1}):function(){l.current=!1}},[r])}var ar=t.forwardRef(function(e,r){var a=e.overlay,n=e.arrow,i=e.prefixCls,o=t.useMemo(function(){var u;return typeof a=="function"?u=a():u=a,u},[a]),l=qt(r,Gt(o));return ee.createElement(ee.Fragment,null,n&&ee.createElement("div",{className:"".concat(i,"-arrow")}),ee.cloneElement(o,{ref:Yt(o)?l:void 0}))}),Re={adjustX:1,adjustY:1},Ie=[0,0],ir={topLeft:{points:["bl","tl"],overflow:Re,offset:[0,-4],targetOffset:Ie},top:{points:["bc","tc"],overflow:Re,offset:[0,-4],targetOffset:Ie},topRight:{points:["br","tr"],overflow:Re,offset:[0,-4],targetOffset:Ie},bottomLeft:{points:["tl","bl"],overflow:Re,offset:[0,4],targetOffset:Ie},bottom:{points:["tc","bc"],overflow:Re,offset:[0,4],targetOffset:Ie},bottomRight:{points:["tr","br"],overflow:Re,offset:[0,4],targetOffset:Ie}},or=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function lr(e,r){var a,n=e.arrow,i=n===void 0?!1:n,o=e.prefixCls,l=o===void 0?"rc-dropdown":o,u=e.transitionName,f=e.animation,c=e.align,h=e.placement,s=h===void 0?"bottomLeft":h,d=e.placements,M=d===void 0?ir:d,C=e.getPopupContainer,I=e.showAction,m=e.hideAction,E=e.overlayClassName,P=e.overlayStyle,p=e.visible,g=e.trigger,b=g===void 0?["hover"]:g,v=e.autoFocus,D=e.overlay,y=e.children,L=e.onVisibleChange,_=re(e,or),K=ee.useState(),T=A(K,2),F=T[0],q=T[1],V="visible"in e?p:F,G=ee.useRef(null),z=ee.useRef(null),j=ee.useRef(null);ee.useImperativeHandle(r,function(){return G.current});var B=function(O){q(O),L==null||L(O)};rr({visible:V,triggerRef:j,onVisibleChange:B,autoFocus:v,overlayRef:z});var Y=function(O){var N=e.onOverlayClick;q(!1),N&&N(O)},te=function(){return ee.createElement(ar,{ref:z,overlay:D,prefixCls:l,arrow:i})},ce=function(){return typeof D=="function"?te:te()},fe=function(){var O=e.minOverlayWidthMatchTrigger,N=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?O:!N},U=function(){var O=e.openClassName;return O!==void 0?O:"".concat(l,"-open")},H=ee.cloneElement(y,{className:de((a=y.props)===null||a===void 0?void 0:a.className,V&&U()),ref:Yt(y)?qt(j,Gt(y)):void 0}),ue=m;return!ue&&b.indexOf("contextMenu")!==-1&&(ue=["click"]),ee.createElement(Jt,$({builtinPlacements:M},_,{prefixCls:l,ref:G,popupClassName:de(E,x({},"".concat(l,"-show-arrow"),i)),popupStyle:P,action:b,showAction:I,hideAction:ue,popupPlacement:s,popupAlign:c,popupTransitionName:u,popupAnimation:f,popupVisible:V,stretch:fe()?"minWidth":"",popup:ce(),onPopupVisibleChange:B,onPopupClick:Y,getPopupContainer:C}),H)}const ra=ee.forwardRef(lr);var Qt=t.createContext(null);function en(e,r){return e===void 0?null:"".concat(e,"-").concat(r)}function tn(e){var r=t.useContext(Qt);return en(r,e)}var ur=["children","locked"],oe=t.createContext(null);function sr(e,r){var a=k({},e);return Object.keys(r).forEach(function(n){var i=r[n];i!==void 0&&(a[n]=i)}),a}function De(e){var r=e.children,a=e.locked,n=re(e,ur),i=t.useContext(oe),o=Wn(function(){return sr(i,n)},[i,n],function(l,u){return!a&&(l[0]!==u[0]||!Zt(l[1],u[1],!0))});return t.createElement(oe.Provider,{value:o},r)}var cr=[],nn=t.createContext(null);function Qe(){return t.useContext(nn)}var rn=t.createContext(cr);function Le(e){var r=t.useContext(rn);return t.useMemo(function(){return e!==void 0?[].concat(ye(r),[e]):r},[r,e])}var an=t.createContext(null),bt=t.createContext({});function zt(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Zn(e)){var a=e.nodeName.toLowerCase(),n=["input","select","textarea","button"].includes(a)||e.isContentEditable||a==="a"&&!!e.getAttribute("href"),i=e.getAttribute("tabindex"),o=Number(i),l=null;return i&&!Number.isNaN(o)?l=o:n&&l===null&&(l=0),n&&e.disabled&&(l=null),l!==null&&(l>=0||r&&l<0)}return!1}function fr(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=ye(e.querySelectorAll("*")).filter(function(n){return zt(n,r)});return zt(e,r)&&a.unshift(e),a}var vt=le.LEFT,dt=le.RIGHT,mt=le.UP,Xe=le.DOWN,Je=le.ENTER,on=le.ESC,_e=le.HOME,Oe=le.END,Ut=[mt,Xe,vt,dt];function vr(e,r,a,n){var i,o="prev",l="next",u="children",f="parent";if(e==="inline"&&n===Je)return{inlineTrigger:!0};var c=x(x({},mt,o),Xe,l),h=x(x(x(x({},vt,a?l:o),dt,a?o:l),Xe,u),Je,u),s=x(x(x(x(x(x({},mt,o),Xe,l),Je,u),on,f),vt,a?u:f),dt,a?f:u),d={inline:c,horizontal:h,vertical:s,inlineSub:c,horizontalSub:s,verticalSub:s},M=(i=d["".concat(e).concat(r?"":"Sub")])===null||i===void 0?void 0:i[n];switch(M){case o:return{offset:-1,sibling:!0};case l:return{offset:1,sibling:!0};case f:return{offset:-1,sibling:!1};case u:return{offset:1,sibling:!1};default:return null}}function dr(e){for(var r=e;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function mr(e,r){for(var a=e||document.activeElement;a;){if(r.has(a))return a;a=a.parentElement}return null}function yt(e,r){var a=fr(e,!0);return a.filter(function(n){return r.has(n)})}function Wt(e,r,a){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var i=yt(e,r),o=i.length,l=i.findIndex(function(u){return a===u});return n<0?l===-1?l=o-1:l-=1:n>0&&(l+=1),l=(l+o)%o,i[l]}var pt=function(r,a){var n=new Set,i=new Map,o=new Map;return r.forEach(function(l){var u=document.querySelector("[data-menu-id='".concat(en(a,l),"']"));u&&(n.add(u),o.set(u,l),i.set(l,u))}),{elements:n,key2element:i,element2key:o}};function pr(e,r,a,n,i,o,l,u,f,c){var h=t.useRef(),s=t.useRef();s.current=r;var d=function(){Se.cancel(h.current)};return t.useEffect(function(){return function(){d()}},[]),function(M){var C=M.which;if([].concat(Ut,[Je,on,_e,Oe]).includes(C)){var I=o(),m=pt(I,n),E=m,P=E.elements,p=E.key2element,g=E.element2key,b=p.get(r),v=mr(b,P),D=g.get(v),y=vr(e,l(D,!0).length===1,a,C);if(!y&&C!==_e&&C!==Oe)return;(Ut.includes(C)||[_e,Oe].includes(C))&&M.preventDefault();var L=function(z){if(z){var j=z,B=z.querySelector("a");B!=null&&B.getAttribute("href")&&(j=B);var Y=g.get(z);u(Y),d(),h.current=Se(function(){s.current===Y&&j.focus()})}};if([_e,Oe].includes(C)||y.sibling||!v){var _;!v||e==="inline"?_=i.current:_=dr(v);var K,T=yt(_,P);C===_e?K=T[0]:C===Oe?K=T[T.length-1]:K=Wt(_,P,v,y.offset),L(K)}else if(y.inlineTrigger)f(D);else if(y.offset>0)f(D,!0),d(),h.current=Se(function(){m=pt(I,n);var G=v.getAttribute("aria-controls"),z=document.getElementById(G),j=Wt(z,m.elements);L(j)},5);else if(y.offset<0){var F=l(D,!0),q=F[F.length-2],V=p.get(q);f(q,!1),L(V)}}c==null||c(M)}}function gr(e){Promise.resolve().then(e)}var Mt="__RC_UTIL_PATH_SPLIT__",Bt=function(r){return r.join(Mt)},hr=function(r){return r.split(Mt)},gt="rc-menu-more";function Cr(){var e=t.useState({}),r=A(e,2),a=r[1],n=t.useRef(new Map),i=t.useRef(new Map),o=t.useState([]),l=A(o,2),u=l[0],f=l[1],c=t.useRef(0),h=t.useRef(!1),s=function(){h.current||a({})},d=t.useCallback(function(p,g){var b=Bt(g);i.current.set(b,p),n.current.set(p,b),c.current+=1;var v=c.current;gr(function(){v===c.current&&s()})},[]),M=t.useCallback(function(p,g){var b=Bt(g);i.current.delete(b),n.current.delete(p)},[]),C=t.useCallback(function(p){f(p)},[]),I=t.useCallback(function(p,g){var b=n.current.get(p)||"",v=hr(b);return g&&u.includes(v[0])&&v.unshift(gt),v},[u]),m=t.useCallback(function(p,g){return p.filter(function(b){return b!==void 0}).some(function(b){var v=I(b,!0);return v.includes(g)})},[I]),E=function(){var g=ye(n.current.keys());return u.length&&g.push(gt),g},P=t.useCallback(function(p){var g="".concat(n.current.get(p)).concat(Mt),b=new Set;return ye(i.current.keys()).forEach(function(v){v.startsWith(g)&&b.add(i.current.get(v))}),b},[]);return t.useEffect(function(){return function(){h.current=!0}},[]),{registerPath:d,unregisterPath:M,refreshOverflowKeys:C,isSubPathKey:m,getKeyPath:I,getKeys:E,getSubPathKeys:P}}function Ae(e){var r=t.useRef(e);r.current=e;var a=t.useCallback(function(){for(var n,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(n=r.current)===null||n===void 0?void 0:n.call.apply(n,[r].concat(o))},[]);return e?a:void 0}var br=Math.random().toFixed(5).toString().slice(2),Ht=0;function yr(e){var r=Ye(e,{value:e}),a=A(r,2),n=a[0],i=a[1];return t.useEffect(function(){Ht+=1;var o="".concat(br,"-").concat(Ht);i("rc-menu-uuid-".concat(o))},[]),n}function ln(e,r,a,n){var i=t.useContext(oe),o=i.activeKey,l=i.onActive,u=i.onInactive,f={active:o===e};return r||(f.onMouseEnter=function(c){a==null||a({key:e,domEvent:c}),l(e)},f.onMouseLeave=function(c){n==null||n({key:e,domEvent:c}),u(e)}),f}function un(e){var r=t.useContext(oe),a=r.mode,n=r.rtl,i=r.inlineIndent;if(a!=="inline")return null;var o=e;return n?{paddingRight:o*i}:{paddingLeft:o*i}}function sn(e){var r=e.icon,a=e.props,n=e.children,i;return r===null||r===!1?null:(typeof r=="function"?i=t.createElement(r,k({},a)):typeof r!="boolean"&&(i=r),i||n||null)}var Mr=["item"];function Ze(e){var r=e.item,a=re(e,Mr);return Object.defineProperty(a,"item",{get:function(){return Xt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),a}var Rr=["title","attribute","elementRef"],Ir=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Sr=["active"],xr=function(e){Hn(a,e);var r=jn(a);function a(){return qn(this,a),r.apply(this,arguments)}return Gn(a,[{key:"render",value:function(){var i=this.props,o=i.title,l=i.attribute,u=i.elementRef,f=re(i,Rr),c=Ct(f,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Xt(!l,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement($e.Item,$({},l,{title:typeof o=="string"?o:void 0},c,{ref:u}))}}]),a}(t.Component),wr=t.forwardRef(function(e,r){var a=e.style,n=e.className,i=e.eventKey;e.warnKey;var o=e.disabled,l=e.itemIcon,u=e.children,f=e.role,c=e.onMouseEnter,h=e.onMouseLeave,s=e.onClick,d=e.onKeyDown,M=e.onFocus,C=re(e,Ir),I=tn(i),m=t.useContext(oe),E=m.prefixCls,P=m.onItemClick,p=m.disabled,g=m.overflowDisabled,b=m.itemIcon,v=m.selectedKeys,D=m.onActive,y=t.useContext(bt),L=y._internalRenderMenuItem,_="".concat(E,"-item"),K=t.useRef(),T=t.useRef(),F=p||o,q=Bn(r,T),V=Le(i),G=function(N){return{key:i,keyPath:ye(V).reverse(),item:K.current,domEvent:N}},z=l||b,j=ln(i,F,c,h),B=j.active,Y=re(j,Sr),te=v.includes(i),ce=un(V.length),fe=function(N){if(!F){var ae=G(N);s==null||s(Ze(ae)),P(ae)}},U=function(N){if(d==null||d(N),N.which===le.ENTER){var ae=G(N);s==null||s(Ze(ae)),P(ae)}},H=function(N){D(i),M==null||M(N)},ue={};e.role==="option"&&(ue["aria-selected"]=te);var X=t.createElement(xr,$({ref:K,elementRef:q,role:f===null?"none":f||"menuitem",tabIndex:o?null:-1,"data-menu-id":g&&I?null:I},Ct(C,["extra"]),Y,ue,{component:"li","aria-disabled":o,style:k(k({},ce),a),className:de(_,x(x(x({},"".concat(_,"-active"),B),"".concat(_,"-selected"),te),"".concat(_,"-disabled"),F),n),onClick:fe,onKeyDown:U,onFocus:H}),u,t.createElement(sn,{props:k(k({},e),{},{isSelected:te}),icon:z}));return L&&(X=L(X,e,{selected:te})),X});function Er(e,r){var a=e.eventKey,n=Qe(),i=Le(a);return t.useEffect(function(){if(n)return n.registerPath(a,i),function(){n.unregisterPath(a,i)}},[i]),n?null:t.createElement(wr,$({},e,{ref:r}))}const Rt=t.forwardRef(Er);var Pr=["className","children"],Nr=function(r,a){var n=r.className,i=r.children,o=re(r,Pr),l=t.useContext(oe),u=l.prefixCls,f=l.mode,c=l.rtl;return t.createElement("ul",$({className:de(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(f==="inline"?"inline":"vertical"),n),role:"menu"},o,{"data-menu-list":!0,ref:a}),i)},It=t.forwardRef(Nr);It.displayName="SubMenuList";function St(e,r){return Qn(e).map(function(a,n){if(t.isValidElement(a)){var i,o,l=a.key,u=(i=(o=a.props)===null||o===void 0?void 0:o.eventKey)!==null&&i!==void 0?i:l,f=u==null;f&&(u="tmp_key-".concat([].concat(ye(r),[n]).join("-")));var c={key:u,eventKey:u};return t.cloneElement(a,c)}return a})}var W={adjustX:1,adjustY:1},Kr={topLeft:{points:["bl","tl"],overflow:W},topRight:{points:["br","tr"],overflow:W},bottomLeft:{points:["tl","bl"],overflow:W},bottomRight:{points:["tr","br"],overflow:W},leftTop:{points:["tr","tl"],overflow:W},leftBottom:{points:["br","bl"],overflow:W},rightTop:{points:["tl","tr"],overflow:W},rightBottom:{points:["bl","br"],overflow:W}},kr={topLeft:{points:["bl","tl"],overflow:W},topRight:{points:["br","tr"],overflow:W},bottomLeft:{points:["tl","bl"],overflow:W},bottomRight:{points:["tr","br"],overflow:W},rightTop:{points:["tr","tl"],overflow:W},rightBottom:{points:["br","bl"],overflow:W},leftTop:{points:["tl","tr"],overflow:W},leftBottom:{points:["bl","br"],overflow:W}};function cn(e,r,a){if(r)return r;if(a)return a[e]||a.other}var _r={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Or(e){var r=e.prefixCls,a=e.visible,n=e.children,i=e.popup,o=e.popupStyle,l=e.popupClassName,u=e.popupOffset,f=e.disabled,c=e.mode,h=e.onVisibleChange,s=t.useContext(oe),d=s.getPopupContainer,M=s.rtl,C=s.subMenuOpenDelay,I=s.subMenuCloseDelay,m=s.builtinPlacements,E=s.triggerSubMenuAction,P=s.forceSubMenuRender,p=s.rootClassName,g=s.motion,b=s.defaultMotions,v=t.useState(!1),D=A(v,2),y=D[0],L=D[1],_=M?k(k({},kr),m):k(k({},Kr),m),K=_r[c],T=cn(c,g,b),F=t.useRef(T);c!=="inline"&&(F.current=T);var q=k(k({},F.current),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),V=t.useRef();return t.useEffect(function(){return V.current=Se(function(){L(a)}),function(){Se.cancel(V.current)}},[a]),t.createElement(Jt,{prefixCls:r,popupClassName:de("".concat(r,"-popup"),x({},"".concat(r,"-rtl"),M),l,p),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:d,builtinPlacements:_,popupPlacement:K,popupVisible:y,popup:i,popupStyle:o,popupAlign:u&&{offset:u},action:f?[]:[E],mouseEnterDelay:C,mouseLeaveDelay:I,onPopupVisibleChange:h,forceRender:P,popupMotion:q,fresh:!0},n)}function Ar(e){var r=e.id,a=e.open,n=e.keyPath,i=e.children,o="inline",l=t.useContext(oe),u=l.prefixCls,f=l.forceSubMenuRender,c=l.motion,h=l.defaultMotions,s=l.mode,d=t.useRef(!1);d.current=s===o;var M=t.useState(!d.current),C=A(M,2),I=C[0],m=C[1],E=d.current?a:!1;t.useEffect(function(){d.current&&m(!1)},[s]);var P=k({},cn(o,c,h));n.length>1&&(P.motionAppear=!1);var p=P.onVisibleChanged;return P.onVisibleChanged=function(g){return!d.current&&!g&&m(!0),p==null?void 0:p(g)},I?null:t.createElement(De,{mode:o,locked:!d.current},t.createElement(Xn,$({visible:E},P,{forceRender:f,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(g){var b=g.className,v=g.style;return t.createElement(It,{id:r,className:b,style:v},i)}))}var $r=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Dr=["active"],Lr=t.forwardRef(function(e,r){var a=e.style,n=e.className,i=e.title,o=e.eventKey;e.warnKey;var l=e.disabled,u=e.internalPopupClose,f=e.children,c=e.itemIcon,h=e.expandIcon,s=e.popupClassName,d=e.popupOffset,M=e.popupStyle,C=e.onClick,I=e.onMouseEnter,m=e.onMouseLeave,E=e.onTitleClick,P=e.onTitleMouseEnter,p=e.onTitleMouseLeave,g=re(e,$r),b=tn(o),v=t.useContext(oe),D=v.prefixCls,y=v.mode,L=v.openKeys,_=v.disabled,K=v.overflowDisabled,T=v.activeKey,F=v.selectedKeys,q=v.itemIcon,V=v.expandIcon,G=v.onItemClick,z=v.onOpenChange,j=v.onActive,B=t.useContext(bt),Y=B._internalRenderSubMenuItem,te=t.useContext(an),ce=te.isSubPathKey,fe=Le(),U="".concat(D,"-submenu"),H=_||l,ue=t.useRef(),X=t.useRef(),O=c??q,N=h??V,ae=L.includes(o),ve=!K&&ae,Te=ce(F,o),Fe=ln(o,H,P,p),ge=Fe.active,xe=re(Fe,Dr),tt=t.useState(!1),we=A(tt,2),Ee=we[0],Ve=we[1],ze=function(J){H||Ve(J)},nt=function(J){ze(!0),I==null||I({key:o,domEvent:J})},Ue=function(J){ze(!1),m==null||m({key:o,domEvent:J})},se=t.useMemo(function(){return ge||(y!=="inline"?Ee||ce([T],o):!1)},[y,ge,T,Ee,o,ce]),rt=un(fe.length),at=function(J){H||(E==null||E({key:o,domEvent:J}),y==="inline"&&z(o,!ae))},We=Ae(function(ie){C==null||C(Ze(ie)),G(ie)}),Be=function(J){y!=="inline"&&z(o,J)},it=function(){j(o)},me=b&&"".concat(b,"-popup"),Pe=t.useMemo(function(){return t.createElement(sn,{icon:y!=="horizontal"?N:void 0,props:k(k({},e),{},{isOpen:ve,isSubMenu:!0})},t.createElement("i",{className:"".concat(U,"-arrow")}))},[y,N,e,ve,U]),he=t.createElement("div",$({role:"menuitem",style:rt,className:"".concat(U,"-title"),tabIndex:H?null:-1,ref:ue,title:typeof i=="string"?i:null,"data-menu-id":K&&b?null:b,"aria-expanded":ve,"aria-haspopup":!0,"aria-controls":me,"aria-disabled":H,onClick:at,onFocus:it},xe),i,Pe),Ne=t.useRef(y);if(y!=="inline"&&fe.length>1?Ne.current="vertical":Ne.current=y,!K){var Me=Ne.current;he=t.createElement(Or,{mode:Me,prefixCls:U,visible:!u&&ve&&y!=="inline",popupClassName:s,popupOffset:d,popupStyle:M,popup:t.createElement(De,{mode:Me==="horizontal"?"vertical":Me},t.createElement(It,{id:me,ref:X},f)),disabled:H,onVisibleChange:Be},he)}var ne=t.createElement($e.Item,$({ref:r,role:"none"},g,{component:"li",style:a,className:de(U,"".concat(U,"-").concat(y),n,x(x(x(x({},"".concat(U,"-open"),ve),"".concat(U,"-active"),se),"".concat(U,"-selected"),Te),"".concat(U,"-disabled"),H)),onMouseEnter:nt,onMouseLeave:Ue}),he,!K&&t.createElement(Ar,{id:me,open:ve,keyPath:fe},f));return Y&&(ne=Y(ne,e,{selected:Te,active:se,open:ve,disabled:H})),t.createElement(De,{onItemClick:We,mode:y==="horizontal"?"vertical":y,itemIcon:O,expandIcon:N},ne)}),xt=t.forwardRef(function(e,r){var a=e.eventKey,n=e.children,i=Le(a),o=St(n,i),l=Qe();t.useEffect(function(){if(l)return l.registerPath(a,i),function(){l.unregisterPath(a,i)}},[i]);var u;return l?u=o:u=t.createElement(Lr,$({ref:r},e),o),t.createElement(rn.Provider,{value:i},u)});function fn(e){var r=e.className,a=e.style,n=t.useContext(oe),i=n.prefixCls,o=Qe();return o?null:t.createElement("li",{role:"separator",className:de("".concat(i,"-item-divider"),r),style:a})}var Tr=["className","title","eventKey","children"],Fr=t.forwardRef(function(e,r){var a=e.className,n=e.title;e.eventKey;var i=e.children,o=re(e,Tr),l=t.useContext(oe),u=l.prefixCls,f="".concat(u,"-item-group");return t.createElement("li",$({ref:r,role:"presentation"},o,{onClick:function(h){return h.stopPropagation()},className:de(f,a)}),t.createElement("div",{role:"presentation",className:"".concat(f,"-title"),title:typeof n=="string"?n:void 0},n),t.createElement("ul",{role:"group",className:"".concat(f,"-list")},i))}),vn=t.forwardRef(function(e,r){var a=e.eventKey,n=e.children,i=Le(a),o=St(n,i),l=Qe();return l?o:t.createElement(Fr,$({ref:r},Ct(e,["warnKey"])),o)}),Vr=["label","children","key","type","extra"];function ht(e,r,a){var n=r.item,i=r.group,o=r.submenu,l=r.divider;return(e||[]).map(function(u,f){if(u&&Yn(u)==="object"){var c=u,h=c.label,s=c.children,d=c.key,M=c.type,C=c.extra,I=re(c,Vr),m=d??"tmp-".concat(f);return s||M==="group"?M==="group"?t.createElement(i,$({key:m},I,{title:h}),ht(s,r,a)):t.createElement(o,$({key:m},I,{title:h}),ht(s,r,a)):M==="divider"?t.createElement(l,$({key:m},I)):t.createElement(n,$({key:m},I,{extra:C}),h,(!!C||C===0)&&t.createElement("span",{className:"".concat(a,"-item-extra")},C))}return null}).filter(function(u){return u})}function jt(e,r,a,n,i){var o=e,l=k({divider:fn,item:Rt,group:vn,submenu:xt},n);return r&&(o=ht(r,l,i)),St(o,a)}var zr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],be=[],Ur=t.forwardRef(function(e,r){var a,n=e,i=n.prefixCls,o=i===void 0?"rc-menu":i,l=n.rootClassName,u=n.style,f=n.className,c=n.tabIndex,h=c===void 0?0:c,s=n.items,d=n.children,M=n.direction,C=n.id,I=n.mode,m=I===void 0?"vertical":I,E=n.inlineCollapsed,P=n.disabled,p=n.disabledOverflow,g=n.subMenuOpenDelay,b=g===void 0?.1:g,v=n.subMenuCloseDelay,D=v===void 0?.1:v,y=n.forceSubMenuRender,L=n.defaultOpenKeys,_=n.openKeys,K=n.activeKey,T=n.defaultActiveFirst,F=n.selectable,q=F===void 0?!0:F,V=n.multiple,G=V===void 0?!1:V,z=n.defaultSelectedKeys,j=n.selectedKeys,B=n.onSelect,Y=n.onDeselect,te=n.inlineIndent,ce=te===void 0?24:te,fe=n.motion,U=n.defaultMotions,H=n.triggerSubMenuAction,ue=H===void 0?"hover":H,X=n.builtinPlacements,O=n.itemIcon,N=n.expandIcon,ae=n.overflowedIndicator,ve=ae===void 0?"...":ae,Te=n.overflowedIndicatorPopupClassName,Fe=n.getPopupContainer,ge=n.onClick,xe=n.onOpenChange,tt=n.onKeyDown;n.openAnimation,n.openTransitionName;var we=n._internalRenderMenuItem,Ee=n._internalRenderSubMenuItem,Ve=n._internalComponents,ze=re(n,zr),nt=t.useMemo(function(){return[jt(d,s,be,Ve,o),jt(d,s,be,{},o)]},[d,s,Ve]),Ue=A(nt,2),se=Ue[0],rt=Ue[1],at=t.useState(!1),We=A(at,2),Be=We[0],it=We[1],me=t.useRef(),Pe=yr(C),he=M==="rtl",Ne=Ye(L,{value:_,postState:function(R){return R||be}}),Me=A(Ne,2),ne=Me[0],ie=Me[1],J=function(R){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function Z(){ie(R),xe==null||xe(R)}S?Jn.flushSync(Z):Z()},dn=t.useState(ne),wt=A(dn,2),mn=wt[0],pn=wt[1],ot=t.useRef(!1),gn=t.useMemo(function(){return(m==="inline"||m==="vertical")&&E?["vertical",E]:[m,!1]},[m,E]),Et=A(gn,2),He=Et[0],lt=Et[1],Pt=He==="inline",hn=t.useState(He),Nt=A(hn,2),pe=Nt[0],Cn=Nt[1],bn=t.useState(lt),Kt=A(bn,2),yn=Kt[0],Mn=Kt[1];t.useEffect(function(){Cn(He),Mn(lt),ot.current&&(Pt?ie(mn):J(be))},[He,lt]);var Rn=t.useState(0),kt=A(Rn,2),je=kt[0],In=kt[1],ut=je>=se.length-1||pe!=="horizontal"||p;t.useEffect(function(){Pt&&pn(ne)},[ne]),t.useEffect(function(){return ot.current=!0,function(){ot.current=!1}},[]);var Ce=Cr(),_t=Ce.registerPath,Ot=Ce.unregisterPath,Sn=Ce.refreshOverflowKeys,At=Ce.isSubPathKey,xn=Ce.getKeyPath,$t=Ce.getKeys,wn=Ce.getSubPathKeys,En=t.useMemo(function(){return{registerPath:_t,unregisterPath:Ot}},[_t,Ot]),Pn=t.useMemo(function(){return{isSubPathKey:At}},[At]);t.useEffect(function(){Sn(ut?be:se.slice(je+1).map(function(w){return w.key}))},[je,ut]);var Nn=Ye(K||T&&((a=se[0])===null||a===void 0?void 0:a.key),{value:K}),Dt=A(Nn,2),Ke=Dt[0],st=Dt[1],Kn=Ae(function(w){st(w)}),kn=Ae(function(){st(void 0)});t.useImperativeHandle(r,function(){return{list:me.current,focus:function(R){var S,Z=$t(),Q=pt(Z,Pe),Ge=Q.elements,ct=Q.key2element,zn=Q.element2key,Ft=yt(me.current,Ge),Vt=Ke??(Ft[0]?zn.get(Ft[0]):(S=se.find(function(Un){return!Un.props.disabled}))===null||S===void 0?void 0:S.key),ke=ct.get(Vt);if(Vt&&ke){var ft;ke==null||(ft=ke.focus)===null||ft===void 0||ft.call(ke,R)}}}});var _n=Ye(z||[],{value:j,postState:function(R){return Array.isArray(R)?R:R==null?be:[R]}}),Lt=A(_n,2),qe=Lt[0],On=Lt[1],An=function(R){if(q){var S=R.key,Z=qe.includes(S),Q;G?Z?Q=qe.filter(function(ct){return ct!==S}):Q=[].concat(ye(qe),[S]):Q=[S],On(Q);var Ge=k(k({},R),{},{selectedKeys:Q});Z?Y==null||Y(Ge):B==null||B(Ge)}!G&&ne.length&&pe!=="inline"&&J(be)},$n=Ae(function(w){ge==null||ge(Ze(w)),An(w)}),Tt=Ae(function(w,R){var S=ne.filter(function(Q){return Q!==w});if(R)S.push(w);else if(pe!=="inline"){var Z=wn(w);S=S.filter(function(Q){return!Z.has(Q)})}Zt(ne,S,!0)||J(S,!0)}),Dn=function(R,S){var Z=S??!ne.includes(R);Tt(R,Z)},Ln=pr(pe,Ke,he,Pe,me,$t,xn,st,Dn,tt);t.useEffect(function(){it(!0)},[]);var Tn=t.useMemo(function(){return{_internalRenderMenuItem:we,_internalRenderSubMenuItem:Ee}},[we,Ee]),Fn=pe!=="horizontal"||p?se:se.map(function(w,R){return t.createElement(De,{key:w.key,overflowDisabled:R>je},w)}),Vn=t.createElement($e,$({id:C,ref:me,prefixCls:"".concat(o,"-overflow"),component:"ul",itemComponent:Rt,className:de(o,"".concat(o,"-root"),"".concat(o,"-").concat(pe),f,x(x({},"".concat(o,"-inline-collapsed"),yn),"".concat(o,"-rtl"),he),l),dir:M,style:u,role:"menu",tabIndex:h,data:Fn,renderRawItem:function(R){return R},renderRawRest:function(R){var S=R.length,Z=S?se.slice(-S):null;return t.createElement(xt,{eventKey:gt,title:ve,disabled:ut,internalPopupClose:S===0,popupClassName:Te},Z)},maxCount:pe!=="horizontal"||p?$e.INVALIDATE:$e.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(R){In(R)},onKeyDown:Ln},ze));return t.createElement(bt.Provider,{value:Tn},t.createElement(Qt.Provider,{value:Pe},t.createElement(De,{prefixCls:o,rootClassName:l,mode:pe,openKeys:ne,rtl:he,disabled:P,motion:Be?fe:null,defaultMotions:Be?U:null,activeKey:Ke,onActive:Kn,onInactive:kn,selectedKeys:qe,inlineIndent:ce,subMenuOpenDelay:b,subMenuCloseDelay:D,forceSubMenuRender:y,builtinPlacements:X,triggerSubMenuAction:ue,getPopupContainer:Fe,itemIcon:O,expandIcon:N,onItemClick:$n,onOpenChange:Tt},t.createElement(an.Provider,{value:Pn},Vn),t.createElement("div",{style:{display:"none"},"aria-hidden":!0},t.createElement(nn.Provider,{value:En},rt)))))}),et=Ur;et.Item=Rt;et.SubMenu=xt;et.ItemGroup=vn;et.Divider=fn;var Wr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},Br=function(r,a){return t.createElement(er,$({},r,{ref:a,icon:Wr}))},aa=t.forwardRef(Br);export{ra as D,et as E,Rt as M,aa as R,xt as S,fn as a,vn as b,Le as u};
