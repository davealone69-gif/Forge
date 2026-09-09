import{a as e,c as t,d as n,f as r,g as i,h as a,i as o,l as s,m as c,o as l,p as u,s as d,t as f,u as p}from"./studio-store-HUrpNmkb.js";import{a as m,d as h,f as g,n as _,p as v,r as y,t as b}from"./index-ABCU8q2g.js";var x=_(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),S=_(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),C=_(`download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),w=_(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),T=_(`message-square`,[[`path`,{d:`M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`,key:`1lielz`}]]),E=v(g(),1),ee=v(h(),1),D=m(),O=Object.defineProperty,te=(e,t)=>O(e,`name`,{value:t,configurable:!0}),k=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=l(`Primitive.${t}`),r=E.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,D.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function ne(e,t){e&&ee.flushSync(()=>e.dispatchEvent(t))}te(ne,`dispatchDiscreteCustomEvent`);var A=globalThis?.document?E.useLayoutEffect:()=>{},re=Object.defineProperty,j=(e,t)=>re(e,`name`,{value:t,configurable:!0});function ie(e,t){return E.useReducer((e,n)=>t[e][n]??e,e)}j(ie,`useStateMachine`);var M=j(e=>{let{present:t,children:n}=e,r=ae(t),i=typeof n==`function`?n({present:r.isPresent}):E.Children.only(n),a=se(r.ref,ce(i));return typeof n==`function`||r.isPresent?E.cloneElement(i,{ref:a}):null},`Presence`);function ae(e){let[t,n]=E.useState(),r=E.useRef(null),i=E.useRef(e),a=E.useRef(`none`),o=E.useRef(void 0),[s,c]=ie(e?`mounted`:`unmounted`,{mounted:{UNMOUNT:`unmounted`,ANIMATION_OUT:`unmountSuspended`},unmountSuspended:{MOUNT:`mounted`,ANIMATION_END:`unmounted`},unmounted:{MOUNT:`mounted`}});return E.useEffect(()=>{s===`mounted`?(a.current=o.current??N(r.current),o.current=void 0):a.current=`none`},[s]),A(()=>{let t=r.current,n=i.current;if(n!==e){let r=a.current,s=N(t);e?(o.current=s,c(`MOUNT`)):s===`none`||t?.display===`none`?c(`UNMOUNT`):c(n&&r!==s?`ANIMATION_OUT`:`UNMOUNT`),i.current=e}},[e,c]),A(()=>{if(t){let e,n=t.ownerDocument.defaultView??window,o=j(a=>{let o=N(r.current).includes(CSS.escape(a.animationName));if(a.target===t&&o&&(c(`ANIMATION_END`),!i.current)){let r=t.style.animationFillMode;t.style.animationFillMode=`forwards`,e=n.setTimeout(()=>{t.style.animationFillMode===`forwards`&&(t.style.animationFillMode=r)})}},`handleAnimationEnd`),s=j(e=>{e.target===t&&(a.current=N(r.current))},`handleAnimationStart`);return t.addEventListener(`animationstart`,s),t.addEventListener(`animationcancel`,o),t.addEventListener(`animationend`,o),()=>{n.clearTimeout(e),t.removeEventListener(`animationstart`,s),t.removeEventListener(`animationcancel`,o),t.removeEventListener(`animationend`,o)}}c(`ANIMATION_END`)},[t,c]),{isPresent:[`mounted`,`unmountSuspended`].includes(s),ref:E.useCallback(e=>{if(e){let t=getComputedStyle(e);r.current=t,o.current=N(t)}else r.current=null;n(e)},[])}}j(ae,`usePresence`);function oe(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}j(oe,`setRef`);function se(...e){let t=E.useRef(e);return t.current=e,E.useCallback(e=>{let n=t.current,r=!1,i=n.map(t=>{let n=oe(t,e);return!r&&typeof n==`function`&&(r=!0),n});if(r)return()=>{for(let e=0;e<i.length;e++){let t=i[e];typeof t==`function`?t():oe(n[e],null)}}},[])}j(se,`useStableComposedRefs`);function N(e){return e?.animationName||`none`}j(N,`getAnimationName`);function ce(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}j(ce,`getElementRef`);var le=Object.defineProperty,P=(e,t)=>le(e,`name`,{value:t,configurable:!0});function ue(e,t){let n=E.createContext(t);n.displayName=e+`Context`;let r=P(e=>{let{children:t,...r}=e,i=E.useMemo(()=>r,Object.values(r));return(0,D.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=E.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return P(i,`useContext`),[r,i]}P(ue,`createContext`);function de(e,t=[]){let n=[];function r(t,r){let i=E.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=P(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=E.useMemo(()=>o,Object.values(o));return(0,D.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=E.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return P(s,`useContext`),[o,s]}P(r,`createContext`);let i=P(()=>{let t=n.map(e=>E.createContext(e));return P(function(n){let r=n?.[e]||t;return E.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,fe(i,...t)]}P(de,`createContextScope`);function fe(...e){let t=e[0];if(e.length===1)return t;let n=P(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return P(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return E.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}P(fe,`composeContextScopes`);var pe=Object.defineProperty,me=(e,t)=>pe(e,`name`,{value:t,configurable:!0});function F(e){let t=E.useRef(e);return E.useEffect(()=>{t.current=e}),E.useMemo(()=>((...e)=>t.current?.(...e)),[])}me(F,`useCallbackRef`);var he=Object.defineProperty,ge=(e,t)=>he(e,`name`,{value:t,configurable:!0}),_e=E.createContext(void 0);function ve(e){let t=E.useContext(_e);return e||t||`ltr`}ge(ve,`useDirection`);var ye=Object.defineProperty,be=(e,t)=>ye(e,`name`,{value:t,configurable:!0});function xe(e,[t,n]){return Math.min(n,Math.max(t,e))}be(xe,`clamp`);var Se=Object.defineProperty,I=(e,t)=>Se(e,`name`,{value:t,configurable:!0}),Ce=!!(typeof window<`u`&&window.document&&window.document.createElement);function L(e,t,{checkForDefaultPrevented:n=!0}={}){return I(function(r){if(e?.(r),n===!1||!r||!r.defaultPrevented)return t?.(r)},`handleEvent`)}I(L,`composeEventHandlers`);function we(e){if(!Ce)throw Error(`Cannot access window outside of the DOM`);return e?.ownerDocument?.defaultView??window}I(we,`getOwnerWindow`);function R(e){if(!Ce)throw Error(`Cannot access document outside of the DOM`);return e?.ownerDocument??document}I(R,`getOwnerDocument`);function Te(e,t=!1){let{activeElement:n}=R(e);if(!n?.nodeName)return null;if(Ee(n)&&n.contentDocument)return Te(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=R(n).getElementById(e);if(t)return t}}return n}I(Te,`getActiveElement`);function Ee(e){return e.tagName===`IFRAME`}I(Ee,`isFrame`);var De=Object.defineProperty,z=(e,t)=>De(e,`name`,{value:t,configurable:!0});function Oe(e,t){return E.useReducer((e,n)=>t[e][n]??e,e)}z(Oe,`useStateMachine`);var ke=`ScrollArea`,[Ae,je]=de(ke),[Me,B]=Ae(ke),Ne=E.forwardRef(z(function(e,t){let{__scopeScrollArea:n,type:r=`hover`,dir:i,scrollHideDelay:a=600,...o}=e,[s,c]=E.useState(null),[l,u]=E.useState(null),[f,p]=E.useState(null),[m,h]=E.useState(null),[g,_]=E.useState(null),[v,y]=E.useState(0),[b,x]=E.useState(0),[S,C]=E.useState(!1),[w,T]=E.useState(!1),ee=d(t,c),O=ve(i);return(0,D.jsx)(Me,{scope:n,type:r,dir:O,scrollHideDelay:a,scrollArea:s,viewport:l,onViewportChange:u,content:f,onContentChange:p,scrollbarX:m,onScrollbarXChange:h,scrollbarXEnabled:S,onScrollbarXEnabledChange:C,scrollbarY:g,onScrollbarYChange:_,scrollbarYEnabled:w,onScrollbarYEnabledChange:T,onCornerWidthChange:y,onCornerHeightChange:x,children:(0,D.jsx)(k.div,{dir:O,...o,ref:ee,style:{position:`relative`,"--radix-scroll-area-corner-width":v+`px`,"--radix-scroll-area-corner-height":b+`px`,...e.style}})})},`ScrollArea`)),Pe=`ScrollAreaViewport`,Fe=E.forwardRef(z(function(e,t){let{__scopeScrollArea:n,children:r,nonce:i,...a}=e,o=B(Pe,n),s=E.useRef(null),c=d(t,s,o.onViewportChange);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Ie,{nonce:i}),(0,D.jsx)(k.div,{"data-radix-scroll-area-viewport":``,...a,ref:c,style:{overflowX:o.scrollbarXEnabled?`scroll`:`hidden`,overflowY:o.scrollbarYEnabled?`scroll`:`hidden`,...e.style},children:(0,D.jsx)(`div`,{ref:o.onContentChange,style:{minWidth:`100%`,display:`table`},children:r})})]})},`ScrollAreaViewport`)),Ie=E.memo(z(function({nonce:e}){return(0,D.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`},nonce:e})},`ScrollAreaViewportStyle`),(e,t)=>e.nonce===t.nonce),V=`ScrollAreaScrollbar`,Le=E.forwardRef(z(function(e,t){let{forceMount:n,...r}=e,i=B(V,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:o}=i,s=e.orientation===`horizontal`;return E.useEffect(()=>(s?a(!0):o(!0),()=>{s?a(!1):o(!1)}),[s,a,o]),i.type===`hover`?(0,D.jsx)(Re,{...r,ref:t,forceMount:n}):i.type===`scroll`?(0,D.jsx)(ze,{...r,ref:t,forceMount:n}):i.type===`auto`?(0,D.jsx)(Be,{...r,ref:t,forceMount:n}):i.type===`always`?(0,D.jsx)(H,{...r,ref:t,"data-state":`visible`}):null},`ScrollAreaScrollbar`)),Re=E.forwardRef(z(function(e,t){let{forceMount:n,...r}=e,i=B(V,e.__scopeScrollArea),[a,o]=E.useState(!1);return E.useEffect(()=>{let e=i.scrollArea,t=0;if(e){let n=z(()=>{window.clearTimeout(t),o(!0)},`handlePointerEnter`),r=z(()=>{t=window.setTimeout(()=>o(!1),i.scrollHideDelay)},`handlePointerLeave`);return e.addEventListener(`pointerenter`,n),e.addEventListener(`pointerleave`,r),()=>{window.clearTimeout(t),e.removeEventListener(`pointerenter`,n),e.removeEventListener(`pointerleave`,r)}}},[i.scrollArea,i.scrollHideDelay]),(0,D.jsx)(M,{present:n||a,children:(0,D.jsx)(Be,{"data-state":a?`visible`:`hidden`,...r,ref:t})})},`ScrollAreaScrollbarHover`)),ze=E.forwardRef(z(function(e,t){let{forceMount:n,...r}=e,i=B(V,e.__scopeScrollArea),a=e.orientation===`horizontal`,o=Y(()=>c(`SCROLL_END`),100),[s,c]=Oe(`hidden`,{hidden:{SCROLL:`scrolling`},scrolling:{SCROLL_END:`idle`,POINTER_ENTER:`interacting`},interacting:{SCROLL:`interacting`,POINTER_LEAVE:`idle`},idle:{HIDE:`hidden`,SCROLL:`scrolling`,POINTER_ENTER:`interacting`}});return E.useEffect(()=>{if(s===`idle`){let e=window.setTimeout(()=>c(`HIDE`),i.scrollHideDelay);return()=>window.clearTimeout(e)}},[s,i.scrollHideDelay,c]),E.useEffect(()=>{let e=i.viewport,t=a?`scrollLeft`:`scrollTop`;if(e){let n=e[t],r=z(()=>{let r=e[t];n!==r&&(c(`SCROLL`),o()),n=r},`handleScroll`);return e.addEventListener(`scroll`,r),()=>e.removeEventListener(`scroll`,r)}},[i.viewport,a,c,o]),(0,D.jsx)(M,{present:n||s!==`hidden`,children:(0,D.jsx)(H,{"data-state":s===`hidden`?`hidden`:`visible`,...r,ref:t,onPointerEnter:L(e.onPointerEnter,()=>c(`POINTER_ENTER`)),onPointerLeave:L(e.onPointerLeave,()=>c(`POINTER_LEAVE`))})})},`ScrollAreaScrollbarScroll`)),Be=E.forwardRef(z(function(e,t){let n=B(V,e.__scopeScrollArea),{forceMount:r,...i}=e,[a,o]=E.useState(!1),s=e.orientation===`horizontal`,c=Y(()=>{if(n.viewport){let e=n.viewport.offsetWidth<n.viewport.scrollWidth,t=n.viewport.offsetHeight<n.viewport.scrollHeight;o(s?e:t)}},10);return X(n.viewport,c),X(n.content,c),(0,D.jsx)(M,{present:r||a,children:(0,D.jsx)(H,{"data-state":a?`visible`:`hidden`,...i,ref:t})})},`ScrollAreaScrollbarAuto`)),H=E.forwardRef(z(function(e,t){let{orientation:n=`vertical`,...r}=e,i=B(V,e.__scopeScrollArea),a=E.useRef(null),o=E.useRef(0),[s,c]=E.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),l=G(s.viewport,s.content),u={...r,sizes:s,onSizesChange:c,hasThumb:l>0&&l<1,onThumbChange:z(e=>a.current=e,`onThumbChange`),onThumbPointerUp:z(()=>o.current=0,`onThumbPointerUp`),onThumbPointerDown:z(e=>o.current=e,`onThumbPointerDown`)};function d(e,t){return Ze(e,o.current,s,t)}return z(d,`getScrollPosition`),n===`horizontal`?(0,D.jsx)(Ve,{...u,ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollLeft,t=q(e,s,i.dir);a.current.style.transform=`translate3d(${t}px, 0, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=d(e,i.dir))}}):n===`vertical`?(0,D.jsx)(He,{...u,ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollTop,t=q(e,s);a.current.style.transform=`translate3d(0, ${t}px, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=d(e))}}):null},`ScrollAreaScrollbarVisible`)),Ve=E.forwardRef(z(function(e,t){let{sizes:n,onSizesChange:r,...i}=e,a=B(V,e.__scopeScrollArea),[o,s]=E.useState(),c=E.useRef(null),l=d(t,c,a.onScrollbarXChange);return E.useEffect(()=>{c.current&&s(getComputedStyle(c.current))},[c]),(0,D.jsx)(Ge,{"data-orientation":`horizontal`,...i,ref:l,sizes:n,style:{bottom:0,left:a.dir===`rtl`?`var(--radix-scroll-area-corner-width)`:0,right:a.dir===`ltr`?`var(--radix-scroll-area-corner-width)`:0,"--radix-scroll-area-thumb-width":K(n)+`px`,...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,n)=>{if(a.viewport){let r=a.viewport.scrollLeft+t.deltaX;e.onWheelScroll(r),Qe(r,n)&&t.preventDefault()}},onResize:()=>{c.current&&a.viewport&&o&&r({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:W(o.paddingLeft),paddingEnd:W(o.paddingRight)}})}})},`ScrollAreaScrollbarX`)),He=E.forwardRef(z(function(e,t){let{sizes:n,onSizesChange:r,...i}=e,a=B(V,e.__scopeScrollArea),[o,s]=E.useState(),c=E.useRef(null),l=d(t,c,a.onScrollbarYChange);return E.useEffect(()=>{c.current&&s(getComputedStyle(c.current))},[c]),(0,D.jsx)(Ge,{"data-orientation":`vertical`,...i,ref:l,sizes:n,style:{top:0,right:a.dir===`ltr`?0:void 0,left:a.dir===`rtl`?0:void 0,bottom:`var(--radix-scroll-area-corner-height)`,"--radix-scroll-area-thumb-height":K(n)+`px`,...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,n)=>{if(a.viewport){let r=a.viewport.scrollTop+t.deltaY;e.onWheelScroll(r),Qe(r,n)&&t.preventDefault()}},onResize:()=>{c.current&&a.viewport&&o&&r({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:W(o.paddingTop),paddingEnd:W(o.paddingBottom)}})}})},`ScrollAreaScrollbarY`)),[Ue,We]=Ae(V),Ge=E.forwardRef(z(function(e,t){let{__scopeScrollArea:n,sizes:r,hasThumb:i,onThumbChange:a,onThumbPointerUp:o,onThumbPointerDown:s,onThumbPositionChange:c,onDragScroll:l,onWheelScroll:u,onResize:f,...p}=e,m=B(V,n),[h,g]=E.useState(null),_=d(t,g),v=E.useRef(null),y=E.useRef(``),b=m.viewport,x=r.content-r.viewport,S=F(u),C=F(c),w=Y(f,10);function T(e){if(v.current){let t=e.clientX-v.current.left,n=e.clientY-v.current.top;l({x:t,y:n})}}return z(T,`handleDragScroll`),E.useEffect(()=>{let e=z(e=>{let t=e.target;h?.contains(t)&&S(e,x)},`handleWheel`);return document.addEventListener(`wheel`,e,{passive:!1}),()=>document.removeEventListener(`wheel`,e,{passive:!1})},[b,h,x,S]),E.useEffect(C,[r,C]),X(h,w),X(m.content,w),(0,D.jsx)(Ue,{scope:n,scrollbar:h,hasThumb:i,onThumbChange:F(a),onThumbPointerUp:F(o),onThumbPositionChange:C,onThumbPointerDown:F(s),children:(0,D.jsx)(k.div,{...p,ref:_,style:{position:`absolute`,...p.style},onPointerDown:L(e.onPointerDown,e=>{e.button===0&&(e.target.setPointerCapture(e.pointerId),v.current=h.getBoundingClientRect(),y.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect=`none`,m.viewport&&(m.viewport.style.scrollBehavior=`auto`),T(e))}),onPointerMove:L(e.onPointerMove,T),onPointerUp:L(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=y.current,m.viewport&&(m.viewport.style.scrollBehavior=``),v.current=null})})})},`ScrollAreaScrollbarImpl`)),U=`ScrollAreaThumb`,Ke=E.forwardRef(z(function(e,t){let{forceMount:n,...r}=e,i=We(U,e.__scopeScrollArea);return(0,D.jsx)(M,{present:n||i.hasThumb,children:(0,D.jsx)(qe,{ref:t,...r})})},`ScrollAreaThumb`)),qe=E.forwardRef(z(function(e,t){let{__scopeScrollArea:n,style:r,...i}=e,a=B(U,n),o=We(U,n),{onThumbPositionChange:s}=o,c=d(t,o.onThumbChange),l=E.useRef(void 0),u=Y(()=>{l.current&&=(l.current(),void 0)},100);return E.useEffect(()=>{let e=a.viewport;if(e){let t=z(()=>{if(u(),!l.current){let t=$e(e,s);l.current=t,s()}},`handleScroll`);return s(),e.addEventListener(`scroll`,t),()=>e.removeEventListener(`scroll`,t)}},[a.viewport,u,s]),(0,D.jsx)(k.div,{"data-state":o.hasThumb?`visible`:`hidden`,...i,ref:c,style:{width:`var(--radix-scroll-area-thumb-width)`,height:`var(--radix-scroll-area-thumb-height)`,...r},onPointerDownCapture:L(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;o.onThumbPointerDown({x:n,y:r})}),onPointerUp:L(e.onPointerUp,o.onThumbPointerUp)})},`ScrollAreaThumbImpl`)),Je=`ScrollAreaCorner`,Ye=E.forwardRef(z(function(e,t){let n=B(Je,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!==`scroll`&&r?(0,D.jsx)(Xe,{...e,ref:t}):null},`ScrollAreaCorner`)),Xe=E.forwardRef(z(function(e,t){let{__scopeScrollArea:n,...r}=e,i=B(Je,n),[a,o]=E.useState(0),[s,c]=E.useState(0),l=!!(a&&s),{onCornerWidthChange:u,onCornerHeightChange:d}=i;return X(i.scrollbarX,()=>{let e=i.scrollbarX?.offsetHeight||0;i.onCornerHeightChange(e),c(e)}),X(i.scrollbarY,()=>{let e=i.scrollbarY?.offsetWidth||0;i.onCornerWidthChange(e),o(e)}),E.useEffect(()=>()=>{u(0),d(0)},[u,d]),l?(0,D.jsx)(k.div,{...r,ref:t,style:{width:a,height:s,position:`absolute`,right:i.dir===`ltr`?0:void 0,left:i.dir===`rtl`?0:void 0,bottom:0,...e.style}}):null},`ScrollAreaCornerImpl`));function W(e){return e?parseInt(e,10):0}z(W,`toInt`);function G(e,t){let n=e/t;return isNaN(n)?0:n}z(G,`getThumbRatio`);function K(e){let t=G(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}z(K,`getThumbSize`);function Ze(e,t,n,r=`ltr`){let i=K(n),a=i/2,o=t||a,s=i-o,c=n.scrollbar.paddingStart+o,l=n.scrollbar.size-n.scrollbar.paddingEnd-s,u=n.content-n.viewport,d=r===`ltr`?[0,u]:[u*-1,0];return J([c,l],d)(e)}z(Ze,`getScrollPositionFromPointer`);function q(e,t,n=`ltr`){let r=K(t),i=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,a=t.scrollbar.size-i,o=t.content-t.viewport,s=a-r,c=xe(e,n===`ltr`?[0,o]:[o*-1,0]);return J([0,o],[0,s])(c)}z(q,`getThumbOffsetFromScroll`);function J(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}z(J,`linearScale`);function Qe(e,t){return e>0&&e<t}z(Qe,`isScrollingWithinScrollbarBounds`);var $e=z((e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;return z((function i(){let a={left:e.scrollLeft,top:e.scrollTop},o=n.left!==a.left,s=n.top!==a.top;(o||s)&&t(),n=a,r=window.requestAnimationFrame(i)}),`loop`)(),()=>window.cancelAnimationFrame(r)},`addUnlinkedScrollListener`);function Y(e,t){let n=F(e),r=E.useRef(0);return E.useEffect(()=>()=>window.clearTimeout(r.current),[]),E.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)},[n,t])}z(Y,`useDebounceCallback`);function X(e,t){let n=F(t);A(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}z(X,`useResizeObserver`);var et=Ne,tt=Fe,nt=Ye,Z=E.forwardRef(({className:e,children:t,...n},r)=>(0,D.jsxs)(et,{ref:r,className:p(`relative overflow-hidden`,e),...n,children:[(0,D.jsx)(tt,{className:`size-full rounded-[inherit]`,children:t}),(0,D.jsx)(rt,{}),(0,D.jsx)(nt,{})]}));Z.displayName=et.displayName;var rt=E.forwardRef(({className:e,orientation:t=`vertical`,...n},r)=>(0,D.jsx)(Le,{ref:r,orientation:t,className:p(`flex touch-none select-none transition-colors`,t===`vertical`&&`h-full w-2.5 border-l border-l-transparent p-px`,t===`horizontal`&&`h-2.5 flex-col border-t border-t-transparent p-px`,e),...n,children:(0,D.jsx)(Ke,{className:`relative flex-1 rounded-full bg-border`})}));rt.displayName=Le.displayName;function Q(e){return`"${e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`).replace(/\$/g,`\\$`).replace(/\n/g,` `)}"`}function $(e){return{home:`Icons.Outlined.Home`,search:`Icons.Outlined.Search`,settings:`Icons.Outlined.Settings`,person:`Icons.Outlined.Person`,favorite:`Icons.Outlined.FavoriteBorder`,add:`Icons.Outlined.Add`,check:`Icons.Outlined.Check`,star:`Icons.Outlined.StarBorder`,bolt:`Icons.Outlined.Bolt`,leaf:`Icons.Outlined.Park`,book:`Icons.Outlined.MenuBook`,fitness:`Icons.Outlined.FitnessCenter`,restaurant:`Icons.Outlined.Restaurant`,wallet:`Icons.Outlined.AccountBalanceWallet`,calendar:`Icons.Outlined.CalendarMonth`,notifications:`Icons.Outlined.Notifications`,chart:`Icons.Outlined.BarChart`,timer:`Icons.Outlined.Timer`,map:`Icons.Outlined.Map`,camera:`Icons.Outlined.PhotoCamera`,music:`Icons.Outlined.MusicNote`,water:`Icons.Outlined.WaterDrop`,moon:`Icons.Outlined.DarkMode`,sun:`Icons.Outlined.LightMode`,edit:`Icons.Outlined.Edit`,delete:`Icons.Outlined.Delete`,share:`Icons.Outlined.Share`,back:`Icons.Outlined.ArrowBack`,more:`Icons.Outlined.MoreHoriz`}[e]??`Icons.Outlined.Info`}function it(e,t){switch(e.type){case`hero`:return`
            HeroBlock(
                kicker = ${e.kicker?Q(e.kicker):`null`},
                title = ${Q(e.title)},
                subtitle = ${e.subtitle?Q(e.subtitle):`null`}
            )`;case`search`:return`
            SearchBlock(placeholder = ${Q(e.placeholder)})`;case`chips`:return`
            ChipsBlock(items = listOf(${e.items.map(Q).join(`, `)}), selected = ${e.selected??0})`;case`statRow`:return`
            StatRowBlock(stats = listOf(${e.stats.map(e=>`Stat(${Q(e.label)}, ${Q(e.value)})`).join(`, `)}))`;case`progress`:return`
            ProgressBlock(label = ${Q(e.label)}, value = ${e.value}f, caption = ${e.caption?Q(e.caption):`null`})`;case`section`:return`
            SectionBlock(title = ${Q(e.title)}, action = ${e.action?Q(e.action):`null`})`;case`card`:return`
            CardBlock(
                title = ${Q(e.title)},
                body = ${e.body?Q(e.body):`null`},
                meta = ${e.meta?Q(e.meta):`null`},
                icon = ${e.icon?$(e.icon):`null`},
                accent = ${e.tone===`accent`}
            )`;case`list`:return`
            ListBlock(items = listOf(${e.items.map(e=>`RowItem(${Q(e.title)}, ${e.subtitle?Q(e.subtitle):`null`}, ${e.meta?Q(e.meta):`null`}, ${e.icon?$(e.icon):`null`}, ${Q(e.trailing??`chevron`)}, ${e.value?Q(e.value):`null`}, ${e.on===!0})`).join(`, `)}))`;case`toggle`:return`
            ToggleBlock(label = ${Q(e.label)}, description = ${e.description?Q(e.description):`null`}, initial = ${e.on})`;case`field`:return`
            FieldBlock(label = ${Q(e.label)}, placeholder = ${Q(e.placeholder??``)}, multiline = ${!!e.multiline})`;case`button`:return`
            ButtonBlock(label = ${Q(e.label)}, variant = ${Q(e.variant??`filled`)})`;case`quote`:return`
            QuoteBlock(text = ${Q(e.text)}, attribution = ${e.attribution?Q(e.attribution):`null`})`;default:return`            /* skip ${t} */`}}function at(e){let t=e.fab?`fab = { FloatingActionButton(onClick = {}) { Icon(${$(e.fab.icon)}, contentDescription = ${Q(e.fab.label??`Add`)}) } }`:`fab = {}`;return`
@Composable
fun ${n(e.id)}Screen() {
    Scaffold(
        containerColor = MaterialTheme.colorScheme.surface,
        ${t}
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 20.dp, vertical = 8.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
${e.blocks.map((e,t)=>it(e,t)).join(`
`)}
            Spacer(Modifier.height(24.dp))
        }
    }
}`}function ot(e){let t=u(e.theme.seed,e.theme.mode),i=n(e.name),a=e.packageName,o=a.replace(/\./g,`/`),s=e.theme.mode===`dark`,c=i,l=`pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}
rootProject.name = ${Q(i)}
include(":app")
`,d=`plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.compose")
}

android {
    namespace = ${Q(a)}
    compileSdk = 35

    defaultConfig {
        applicationId = ${Q(a)}
        minSdk = 26
        targetSdk = 35
        versionCode = 1
        versionName = "1.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
    buildFeatures { compose = true }
}

dependencies {
    val bom = platform("androidx.compose:compose-bom:2024.12.01")
    implementation(bom)
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-tooling-preview")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.compose.material:material-icons-extended")
    implementation("androidx.activity:activity-compose:1.9.3")
    implementation("androidx.core:core-ktx:1.15.0")
    debugImplementation("androidx.compose.ui:ui-tooling")
}
`,f=`<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.${i}">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:windowSoftInputMode="adjustResize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
`,p=`<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">${e.name.replace(/&/g,`&`)}</string>
</resources>
`,m=`<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="Theme.${i}" parent="android:Theme.Material.Light.NoActionBar" />
</resources>
`,h=`package ${a}.ui.theme

import androidx.compose.ui.graphics.Color

val Primary = Color(${r(t.primary)})
val OnPrimary = Color(${r(t.onPrimary)})
val PrimaryContainer = Color(${r(t.primaryContainer)})
val OnPrimaryContainer = Color(${r(t.onPrimaryContainer)})
val SecondaryContainer = Color(${r(t.secondaryContainer)})
val OnSecondaryContainer = Color(${r(t.onSecondaryContainer)})
val Surface = Color(${r(t.surface)})
val SurfaceContainer = Color(${r(t.surfaceContainer)})
val OnSurface = Color(${r(t.onSurface)})
val OnSurfaceVariant = Color(${r(t.onSurfaceVariant)})
val Outline = Color(${r(t.outline)})
`,g=`package ${a}.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable

private val Scheme = ${s?`darkColorScheme`:`lightColorScheme`}(
    primary = Primary,
    onPrimary = OnPrimary,
    primaryContainer = PrimaryContainer,
    onPrimaryContainer = OnPrimaryContainer,
    secondaryContainer = SecondaryContainer,
    onSecondaryContainer = OnSecondaryContainer,
    surface = Surface,
    surfaceContainer = SurfaceContainer,
    onSurface = OnSurface,
    onSurfaceVariant = OnSurfaceVariant,
    outline = Outline,
)

@Composable
fun ${i}Theme(content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = Scheme, content = content)
}
`,_=`package ${a}.ui.theme

import androidx.compose.material3.Typography

val Typography = Typography()
`,v=`package ${a}

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import ${a}.ui.theme.${i}Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ${i}Theme { ${i}App() }
        }
    }
}
`,y=`package ${a}

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.AccountBalanceWallet
import androidx.compose.material.icons.outlined.Add
import androidx.compose.material.icons.outlined.ArrowBack
import androidx.compose.material.icons.outlined.BarChart
import androidx.compose.material.icons.outlined.Bolt
import androidx.compose.material.icons.outlined.CalendarMonth
import androidx.compose.material.icons.outlined.Check
import androidx.compose.material.icons.outlined.Info
import androidx.compose.material.icons.outlined.DarkMode
import androidx.compose.material.icons.outlined.Delete
import androidx.compose.material.icons.outlined.Edit
import androidx.compose.material.icons.outlined.FavoriteBorder
import androidx.compose.material.icons.outlined.FitnessCenter
import androidx.compose.material.icons.outlined.Home
import androidx.compose.material.icons.outlined.LightMode
import androidx.compose.material.icons.outlined.Map
import androidx.compose.material.icons.outlined.MenuBook
import androidx.compose.material.icons.outlined.MoreHoriz
import androidx.compose.material.icons.outlined.MusicNote
import androidx.compose.material.icons.outlined.Notifications
import androidx.compose.material.icons.outlined.Park
import androidx.compose.material.icons.outlined.Person
import androidx.compose.material.icons.outlined.PhotoCamera
import androidx.compose.material.icons.outlined.Restaurant
import androidx.compose.material.icons.outlined.Search
import androidx.compose.material.icons.outlined.Settings
import androidx.compose.material.icons.outlined.Share
import androidx.compose.material.icons.outlined.StarBorder
import androidx.compose.material.icons.outlined.Timer
import androidx.compose.material.icons.outlined.WaterDrop
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FilledTonalButton
import androidx.compose.material3.FilterChip
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.material3.Button as M3Button
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

data class NavDest(
    val id: String,
    val label: String,
    val icon: ImageVector,
    val content: @Composable () -> Unit,
)

data class Stat(val label: String, val value: String)
data class RowItem(
    val title: String,
    val subtitle: String?,
    val meta: String?,
    val icon: ImageVector?,
    val trailing: String,
    val value: String?,
    val on: Boolean,
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ${i}App() {
    val dests = listOf(
${e.nav.map((t,r)=>`    NavDest(${Q(t.id)}, ${Q(t.label)}, ${$(t.icon)}, { ${n(e.screens[r]?.id??t.id)}Screen() })`).join(`,
`)}
    )
    var selected by remember { mutableIntStateOf(0) }
    Scaffold(
        bottomBar = {
            NavigationBar {
                dests.forEachIndexed { index, dest ->
                    NavigationBarItem(
                        selected = selected == index,
                        onClick = { selected = index },
                        icon = { Icon(dest.icon, contentDescription = dest.label) },
                        label = { Text(dest.label) },
                    )
                }
            }
        }
    ) { padding ->
        Surface(Modifier.fillMaxSize().padding(padding)) {
            dests[selected].content()
        }
    }
}

${e.screens.map(at).join(`
`)}

@Composable
private fun HeroBlock(kicker: String?, title: String, subtitle: String?) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(28.dp))
            .background(MaterialTheme.colorScheme.primaryContainer)
            .padding(20.dp)
    ) {
        if (kicker != null) {
            Text(kicker, style = MaterialTheme.typography.labelLarge, color = MaterialTheme.colorScheme.onPrimaryContainer)
            Spacer(Modifier.height(6.dp))
        }
        Text(title, fontSize = 28.sp, fontWeight = FontWeight.Medium, color = MaterialTheme.colorScheme.onPrimaryContainer)
        if (subtitle != null) {
            Spacer(Modifier.height(8.dp))
            Text(subtitle, style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onPrimaryContainer)
        }
    }
}

@Composable
private fun SearchBlock(placeholder: String) {
    var query by remember { mutableStateOf("") }
    BasicTextField(
        value = query,
        onValueChange = { query = it },
        singleLine = true,
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(24.dp))
            .background(MaterialTheme.colorScheme.surfaceContainer)
            .padding(horizontal = 16.dp, vertical = 14.dp),
        decorationBox = { inner ->
            if (query.isEmpty()) Text(placeholder, color = MaterialTheme.colorScheme.onSurfaceVariant)
            inner()
        }
    )
}

@Composable
private fun ChipsBlock(items: List<String>, selected: Int) {
    var current by remember { mutableIntStateOf(selected) }
    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
        items.forEachIndexed { index, label ->
            FilterChip(selected = current == index, onClick = { current = index }, label = { Text(label) })
        }
    }
}

@Composable
private fun StatRowBlock(stats: List<Stat>) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(20.dp))
            .background(MaterialTheme.colorScheme.surfaceContainer)
            .padding(16.dp),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        stats.forEach { stat ->
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Text(stat.value, fontSize = 22.sp, fontWeight = FontWeight.Medium)
                Text(stat.label, style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }
    }
}

@Composable
private fun ProgressBlock(label: String, value: Float, caption: String?) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(20.dp))
            .background(MaterialTheme.colorScheme.surfaceContainer)
            .padding(16.dp)
    ) {
        Text(label, style = MaterialTheme.typography.titleMedium)
        Spacer(Modifier.height(10.dp))
        LinearProgressIndicator(progress = { value }, modifier = Modifier.fillMaxWidth().height(8.dp).clip(CircleShape))
        if (caption != null) {
            Spacer(Modifier.height(8.dp))
            Text(caption, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}

@Composable
private fun SectionBlock(title: String, action: String?) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(title, style = MaterialTheme.typography.titleMedium)
        if (action != null) Text(action, style = MaterialTheme.typography.labelLarge, color = MaterialTheme.colorScheme.primary)
    }
}

@Composable
private fun CardBlock(title: String, body: String?, meta: String?, icon: ImageVector?, accent: Boolean) {
    val bg = if (accent) MaterialTheme.colorScheme.primaryContainer else MaterialTheme.colorScheme.surfaceContainer
    Column(
        modifier = Modifier.fillMaxWidth().clip(RoundedCornerShape(20.dp)).background(bg).padding(16.dp)
    ) {
        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            if (icon != null) Icon(icon, contentDescription = null, modifier = Modifier.size(18.dp))
            Text(title, style = MaterialTheme.typography.titleMedium)
        }
        if (body != null) {
            Spacer(Modifier.height(8.dp))
            Text(body, style = MaterialTheme.typography.bodyMedium)
        }
        if (meta != null) {
            Spacer(Modifier.height(8.dp))
            Text(meta, style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}

@Composable
private fun ListBlock(items: List<RowItem>) {
    Column(
        modifier = Modifier.fillMaxWidth().clip(RoundedCornerShape(20.dp)).background(MaterialTheme.colorScheme.surfaceContainer)
    ) {
        items.forEach { item ->
            Row(
                modifier = Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 14.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                if (item.icon != null) {
                    Icon(item.icon, contentDescription = null, modifier = Modifier.size(20.dp).padding(end = 0.dp))
                    Spacer(Modifier.size(12.dp))
                }
                Column(Modifier.weight(1f)) {
                    Text(item.title, style = MaterialTheme.typography.bodyLarge)
                    if (item.subtitle != null) Text(item.subtitle, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                }
                if (item.trailing == "value" && item.value != null) {
                    Text(item.value, style = MaterialTheme.typography.labelLarge)
                }
            }
        }
    }
}

@Composable
private fun ToggleBlock(label: String, description: String?, initial: Boolean) {
    var on by remember { mutableStateOf(initial) }
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(20.dp))
            .background(MaterialTheme.colorScheme.surfaceContainer)
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Column(Modifier.weight(1f)) {
            Text(label, style = MaterialTheme.typography.bodyLarge)
            if (description != null) Text(description, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
        Switch(checked = on, onCheckedChange = { on = it })
    }
}

@Composable
private fun FieldBlock(label: String, placeholder: String, multiline: Boolean) {
    var value by remember { mutableStateOf("") }
    Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
        Text(label, style = MaterialTheme.typography.labelLarge)
        BasicTextField(
            value = value,
            onValueChange = { value = it },
            singleLine = !multiline,
            modifier = Modifier
                .fillMaxWidth()
                .height(if (multiline) 96.dp else 48.dp)
                .clip(RoundedCornerShape(16.dp))
                .background(MaterialTheme.colorScheme.surfaceContainer)
                .padding(14.dp),
            decorationBox = { inner ->
                if (value.isEmpty()) Text(placeholder, color = MaterialTheme.colorScheme.onSurfaceVariant)
                inner()
            }
        )
    }
}

@Composable
private fun ButtonBlock(label: String, variant: String) {
    when (variant) {
        "tonal" -> FilledTonalButton(onClick = {}, modifier = Modifier.fillMaxWidth()) { Text(label) }
        "outline" -> OutlinedButton(onClick = {}, modifier = Modifier.fillMaxWidth()) { Text(label) }
        else -> M3Button(onClick = {}, modifier = Modifier.fillMaxWidth()) { Text(label) }
    }
}

@Composable
private fun QuoteBlock(text: String, attribution: String?) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(20.dp))
            .background(MaterialTheme.colorScheme.primaryContainer)
            .padding(20.dp)
    ) {
        Text(text, style = MaterialTheme.typography.bodyLarge)
        if (attribution != null) {
            Spacer(Modifier.height(8.dp))
            Text(attribution, style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.onPrimaryContainer)
        }
    }
}
`,b=`# ${e.name}

${e.tagline}

Android app generated by Forge. Jetpack Compose · Material 3.

## Run it

1. Install [Android Studio](https://developer.android.com/studio) (Ladybug or newer).
2. Unzip this folder and choose **Open**.
3. Let Gradle sync, then press **Run** on an emulator or a device.

Package: \`${a}\`

Theme seed: \`${e.theme.seed}\` (${e.theme.mode})

Screens: ${e.nav.map(e=>e.label).join(` · `)}
`;return[{path:`${c}/README.md`,contents:b},{path:`${c}/.gitignore`,contents:`*.iml
.gradle
/local.properties
/.idea
.DS_Store
/build
/app/build
/captures
`},{path:`${c}/settings.gradle.kts`,contents:l},{path:`${c}/build.gradle.kts`,contents:`plugins {
    id("com.android.application") version "8.7.2" apply false
    id("org.jetbrains.kotlin.android") version "2.0.21" apply false
    id("org.jetbrains.kotlin.plugin.compose") version "2.0.21" apply false
}
`},{path:`${c}/gradle.properties`,contents:`org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
android.useAndroidX=true
kotlin.code.style=official
android.nonTransitiveRClass=true
`},{path:`${c}/app/build.gradle.kts`,contents:d},{path:`${c}/app/src/main/AndroidManifest.xml`,contents:f},{path:`${c}/app/src/main/res/values/strings.xml`,contents:p},{path:`${c}/app/src/main/res/values/themes.xml`,contents:m},{path:`${c}/app/src/main/java/${o}/MainActivity.kt`,contents:v},{path:`${c}/app/src/main/java/${o}/${i}App.kt`,contents:y},{path:`${c}/app/src/main/java/${o}/ui/theme/Color.kt`,contents:h},{path:`${c}/app/src/main/java/${o}/ui/theme/Theme.kt`,contents:g},{path:`${c}/app/src/main/java/${o}/ui/theme/Type.kt`,contents:_}]}var st=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t++){let n=t;for(let e=0;e<8;e++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})();function ct(e){let t=4294967295;for(let n=0;n<e.length;n++)t=st[(t^e[n])&255]^t>>>8;return(t^4294967295)>>>0}function lt(e){return{time:e.getHours()<<11|e.getMinutes()<<5|Math.floor(e.getSeconds()/2),date:e.getFullYear()-1980<<9|e.getMonth()+1<<5|e.getDate()}}function ut(e){let t=new TextEncoder,n=lt(new Date),r=[],i=[],a=0;for(let o of e){let e=t.encode(o.path.replace(/\\/g,`/`)),s=t.encode(o.contents),c=ct(s),l=new Uint8Array(30+e.length+s.length),u=new DataView(l.buffer);u.setUint32(0,67324752,!0),u.setUint16(4,20,!0),u.setUint16(6,2048,!0),u.setUint16(8,0,!0),u.setUint16(10,n.time,!0),u.setUint16(12,n.date,!0),u.setUint32(14,c,!0),u.setUint32(18,s.length,!0),u.setUint32(22,s.length,!0),u.setUint16(26,e.length,!0),u.setUint16(28,0,!0),l.set(e,30),l.set(s,30+e.length),r.push(l);let d=new Uint8Array(46+e.length),f=new DataView(d.buffer);f.setUint32(0,33639248,!0),f.setUint16(4,20,!0),f.setUint16(6,20,!0),f.setUint16(8,2048,!0),f.setUint16(10,0,!0),f.setUint16(12,n.time,!0),f.setUint16(14,n.date,!0),f.setUint32(16,c,!0),f.setUint32(20,s.length,!0),f.setUint32(24,s.length,!0),f.setUint16(28,e.length,!0),f.setUint16(30,0,!0),f.setUint16(32,0,!0),f.setUint16(34,0,!0),f.setUint16(36,0,!0),f.setUint32(38,0,!0),f.setUint32(42,a,!0),d.set(e,46),i.push(d),a+=l.length}let o=i.reduce((e,t)=>e+t.length,0),s=new Uint8Array(22),c=new DataView(s.buffer);return c.setUint32(0,101010256,!0),c.setUint16(4,0,!0),c.setUint16(6,0,!0),c.setUint16(8,e.length,!0),c.setUint16(10,e.length,!0),c.setUint32(12,o,!0),c.setUint32(16,a,!0),c.setUint16(20,0,!0),new Blob([...r,...i,s],{type:`application/zip`})}function dt(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1500)}function ft(){let e=f(e=>e.generateFromPrompt),t=f(e=>e.loadTemplate);(0,E.useEffect)(()=>{let n=sessionStorage.getItem(`forge:pendingTemplate`),r=sessionStorage.getItem(`forge:pendingPrompt`);if(n){sessionStorage.removeItem(`forge:pendingTemplate`),sessionStorage.removeItem(`forge:pendingPrompt`),t(n);return}r&&(sessionStorage.removeItem(`forge:pendingPrompt`),e(r))},[e,t])}function pt(){let t=f(e=>e.project),n=f(e=>e.generating),r=f(e=>e.error),i=f(e=>e.refine),a=f(e=>e.generateFromPrompt),[s,c]=(0,E.useState)(``),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{l.current?.scrollIntoView({block:`end`})},[t?.messages.length,n,r]);async function u(){let e=s.trim();e&&!n&&(c(``),t&&t.spec.packageName!==`com.forge.draft`?await i(e):await a(e))}return(0,D.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col`,children:[(0,D.jsx)(Z,{className:`min-h-0 flex-1`,children:(0,D.jsxs)(`div`,{className:`flex flex-col gap-4 p-4`,children:[(t?.messages??[]).map(e=>(0,D.jsxs)(`div`,{className:p(`max-w-[92%] text-[13px] leading-relaxed`,e.role===`user`?`self-end`:`self-start`),children:[(0,D.jsx)(`p`,{className:`mb-1 text-[10px] font-medium tracking-wider text-subtle uppercase`,children:e.role===`user`?`You`:`Forge`}),(0,D.jsx)(`div`,{className:p(`rounded-lg px-3.5 py-2.5`,e.role===`user`?`bg-accent text-accent-fg`:`bg-elevated text-fg shadow-[var(--shadow-border)]`),children:e.text})]},e.id)),n?(0,D.jsxs)(`div`,{className:`flex items-center gap-2 text-[13px] text-muted`,children:[(0,D.jsx)(w,{className:`size-3.5 animate-spin`}),`Designing screens…`]}):null,r?(0,D.jsx)(`p`,{className:`text-[13px] text-danger`,children:r}):null,(0,D.jsx)(`div`,{ref:l})]})}),(0,D.jsxs)(`form`,{className:`border-t border-border p-3`,onSubmit:e=>{e.preventDefault(),u()},children:[(0,D.jsx)(o,{value:s,onChange:e=>c(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),u())},placeholder:t?`Add a calendar tab, make it darker…`:`Describe the Android app you want…`,className:`min-h-20 resize-none text-sm`,maxLength:1500,disabled:n}),(0,D.jsx)(`div`,{className:`mt-2 flex justify-end`,children:(0,D.jsx)(e,{type:`submit`,size:`sm`,disabled:!s.trim()||n,children:t?`Update`:`Build`})})]})]})}function mt(){let e=f(e=>e.project?.spec),t=f(e=>e.activeFile),n=f(e=>e.setActiveFile),[r,i]=(0,E.useState)(!1),o=(0,E.useMemo)(()=>e?ot(e):[],[e]),s=o.find(e=>e.path===t)??o[0];return(0,E.useEffect)(()=>{!t&&o[0]&&n(o[0].path)},[t,o,n]),!e||o.length===0?(0,D.jsx)(`p`,{className:`p-4 text-sm text-muted`,children:`Build an app to see the Android project.`}):(0,D.jsxs)(`div`,{className:`flex h-full min-h-0`,children:[(0,D.jsx)(Z,{className:`w-44 shrink-0 border-r border-border`,children:(0,D.jsx)(`ul`,{className:`p-2`,children:o.map(e=>{let t=e.path.split(`/`).slice(1).join(`/`)||e.path,r=s?.path===e.path;return(0,D.jsx)(`li`,{children:(0,D.jsx)(`button`,{type:`button`,onClick:()=>n(e.path),className:p(`mb-0.5 w-full truncate rounded-md px-2 py-1.5 text-left font-mono text-[11px]`,r?`bg-elevated text-fg`:`text-muted hover:text-fg`),children:t})},e.path)})})}),(0,D.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,D.jsxs)(`div`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-border px-3`,children:[(0,D.jsx)(`span`,{className:`truncate font-mono text-[11px] text-muted`,children:s?.path}),(0,D.jsx)(`button`,{type:`button`,className:`flex size-8 items-center justify-center rounded-md text-muted hover:bg-elevated hover:text-fg`,onClick:async()=>{s&&(await navigator.clipboard.writeText(s.contents),i(!0),window.setTimeout(()=>i(!1),1200))},"aria-label":`Copy file`,children:r?(0,D.jsx)(a,{className:`size-3.5`}):(0,D.jsx)(S,{className:`size-3.5`})})]}),(0,D.jsx)(Z,{className:`min-h-0 flex-1`,children:(0,D.jsx)(`pre`,{className:`p-4 font-mono text-[11px] leading-relaxed text-muted whitespace-pre-wrap`,children:s?.contents})})]})]})}function ht(){ft();let n=f(e=>e.project),r=f(e=>e.generating),a=f(e=>e.activeScreenId),o=f(e=>e.setActiveScreen),l=f(e=>e.studioTab),u=f(e=>e.setStudioTab);function d(){n&&(dt(ut(ot(n.spec)),`${n.spec.name.replace(/\s+/g,``)}.zip`),b.success(`Android Studio project downloaded`))}let m=n?.spec;return(0,D.jsxs)(`div`,{className:`flex h-dvh flex-col bg-bg text-fg`,children:[(0,D.jsxs)(`header`,{className:`flex h-14 shrink-0 items-center gap-3 border-b border-border px-3 sm:px-4`,children:[(0,D.jsx)(y,{to:`/`,className:`flex size-10 items-center justify-center rounded-md text-muted hover:bg-elevated hover:text-fg`,"aria-label":`Back`,children:(0,D.jsx)(i,{className:`size-4`})}),(0,D.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,D.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,D.jsx)(`h1`,{className:`truncate font-display text-[15px] font-medium`,children:m&&m.packageName!==`com.forge.draft`?m.name:`New app`}),m&&m.packageName!==`com.forge.draft`?(0,D.jsx)(t,{children:m.theme.mode}):(0,D.jsx)(t,{children:`Draft`})]}),(0,D.jsx)(`p`,{className:`truncate text-[12px] text-subtle`,children:m?.tagline??`Describe an Android app to begin`})]}),(0,D.jsxs)(e,{variant:`secondary`,size:`sm`,onClick:d,disabled:!m||m.packageName===`com.forge.draft`||r,className:`hidden sm:inline-flex`,children:[(0,D.jsx)(C,{className:`size-3.5`}),`Download`]}),(0,D.jsx)(e,{variant:`secondary`,size:`icon`,onClick:d,disabled:!m||m.packageName===`com.forge.draft`||r,className:`sm:hidden`,"aria-label":`Download project`,children:(0,D.jsx)(C,{className:`size-4`})})]}),(0,D.jsxs)(`div`,{className:`flex min-h-0 flex-1`,children:[(0,D.jsxs)(`aside`,{className:`hidden w-80 shrink-0 border-r border-border lg:flex lg:flex-col`,children:[(0,D.jsx)(`div`,{className:`flex h-10 items-center px-4 text-[11px] font-medium tracking-wider text-subtle uppercase`,children:`Chat`}),(0,D.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,D.jsx)(pt,{})})]}),(0,D.jsxs)(`section`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,D.jsx)(`div`,{className:p(`min-h-0 flex-1`,l===`preview`||l===void 0?`flex`:`hidden lg:flex`),children:(0,D.jsx)(`div`,{className:`flex min-h-0 flex-1 items-center justify-center overflow-auto p-4`,children:m?(0,D.jsx)(s,{spec:m,activeScreenId:a,onScreenChange:o,generating:r&&m.packageName===`com.forge.draft`}):(0,D.jsx)(`p`,{className:`max-w-xs text-center text-sm text-muted`,children:`Describe an app in chat, or go back and pick a starter.`})})}),(0,D.jsx)(`div`,{className:p(`min-h-0 flex-1 lg:hidden`,l===`chat`?`flex flex-col`:`hidden`),children:(0,D.jsx)(pt,{})}),(0,D.jsx)(`div`,{className:p(`min-h-0 flex-1`,l===`code`?`flex lg:hidden`:`hidden`),children:(0,D.jsx)(mt,{})})]}),(0,D.jsxs)(`aside`,{className:`hidden min-w-0 flex-1 border-l border-border xl:flex xl:max-w-md xl:flex-col 2xl:max-w-lg`,children:[(0,D.jsx)(`div`,{className:`flex h-10 items-center px-4 text-[11px] font-medium tracking-wider text-subtle uppercase`,children:`Android project`}),(0,D.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,D.jsx)(mt,{})})]})]}),(0,D.jsx)(`nav`,{className:`flex h-14 shrink-0 border-t border-border lg:hidden`,children:[[`preview`,`Preview`,c],[`chat`,`Chat`,T],[`code`,`Code`,x]].map(([e,t,n])=>(0,D.jsxs)(`button`,{type:`button`,onClick:()=>u(e),className:p(`flex flex-1 flex-col items-center justify-center gap-1 text-[11px] font-medium`,l===e?`text-fg`:`text-muted`),children:[(0,D.jsx)(n,{className:`size-4`,strokeWidth:1.75}),t]},e))})]})}var gt=ht;export{gt as component};