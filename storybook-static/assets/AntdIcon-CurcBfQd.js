import{y as L,z as U,A as W,B as q,l as x,a as l,_ as N,g as G,e as h,f as H,D as J}from"./index-c-eVI8SP.js";import{R as v,r as s}from"./index-BCtMShv3.js";import{_ as R}from"./CSSMotionList-4Nb43TCA.js";import{I as S}from"./index-BoN9lWja.js";function k(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=[];return v.Children.forEach(n,function(r){r==null&&!o.keepEmpty||(Array.isArray(r)?e=e.concat(k(r)):L(r)&&r.props?e=e.concat(k(r.props.children,o)):e.push(r))}),e}function E(n){var o;return n==null||(o=n.getRootNode)===null||o===void 0?void 0:o.call(n)}function K(n){return E(n)instanceof ShadowRoot}function M(n){return K(n)?E(n):null}function Q(n){return n.replace(/-(.)/g,function(o,e){return e.toUpperCase()})}function V(n,o){q(n,"[@ant-design/icons] ".concat(o))}function _(n){return x(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(x(n.icon)==="object"||typeof n.icon=="function")}function I(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(o,e){var r=n[e];switch(e){case"class":o.className=r,delete o.class;break;default:delete o[e],o[Q(e)]=r}return o},{})}function T(n,o,e){return e?v.createElement(n.tag,l(l({key:o},I(n.attrs)),e),(n.children||[]).map(function(r,t){return T(r,"".concat(o,"-").concat(n.tag,"-").concat(t))})):v.createElement(n.tag,l({key:o},I(n.attrs)),(n.children||[]).map(function(r,t){return T(r,"".concat(o,"-").concat(n.tag,"-").concat(t))}))}function z(n){return U(n)[0]}function A(n){return n?Array.isArray(n)?n:[n]:[]}var X=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Y=function(o){var e=s.useContext(S),r=e.csp,t=e.prefixCls,c=e.layer,a=X;t&&(a=a.replace(/anticon/g,t)),c&&(a="@layer ".concat(c,` {
`).concat(a,`
}`)),s.useEffect(function(){var u=o.current,d=M(u);W(a,"@ant-design-icons",{prepend:!c,csp:r,attachTo:d})},[])},Z=["icon","className","onClick","style","primaryColor","secondaryColor"],C={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function nn(n){var o=n.primaryColor,e=n.secondaryColor;C.primaryColor=o,C.secondaryColor=e||z(o),C.calculated=!!e}function on(){return l({},C)}var f=function(o){var e=o.icon,r=o.className,t=o.onClick,c=o.style,a=o.primaryColor,u=o.secondaryColor,d=R(o,Z),y=s.useRef(),m=C;if(a&&(m={primaryColor:a,secondaryColor:u||z(a)}),Y(y),V(_(e),"icon should be icon definiton, but got ".concat(e)),!_(e))return null;var i=e;return i&&typeof i.icon=="function"&&(i=l(l({},i),{},{icon:i.icon(m.primaryColor,m.secondaryColor)})),T(i.icon,"svg-".concat(i.name),l(l({className:r,onClick:t,style:c,"data-icon":i.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},d),{},{ref:y}))};f.displayName="IconReact";f.getTwoToneColors=on;f.setTwoToneColors=nn;function $(n){var o=A(n),e=N(o,2),r=e[0],t=e[1];return f.setTwoToneColors({primaryColor:r,secondaryColor:t})}function en(){var n=f.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var rn=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];$(J.primary);var w=s.forwardRef(function(n,o){var e=n.className,r=n.icon,t=n.spin,c=n.rotate,a=n.tabIndex,u=n.onClick,d=n.twoToneColor,y=R(n,rn),m=s.useContext(S),i=m.prefixCls,g=i===void 0?"anticon":i,j=m.rootClassName,P=G(j,g,h(h({},"".concat(g,"-").concat(r.name),!!r.name),"".concat(g,"-spin"),!!t||r.name==="loading"),e),p=a;p===void 0&&u&&(p=-1);var B=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,D=A(d),b=N(D,2),O=b[0],F=b[1];return s.createElement("span",H({role:"img","aria-label":r.name},y,{ref:o,tabIndex:p,onClick:u,className:P}),s.createElement(f,{icon:r,primaryColor:O,secondaryColor:F,style:B}))});w.displayName="AntdIcon";w.getTwoToneColor=en;w.setTwoToneColor=$;export{w as I,M as g,k as t};
