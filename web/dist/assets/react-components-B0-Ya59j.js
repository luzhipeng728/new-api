import{r as _,R as O,c as ee,g as ze}from"./react-core-CLwr57uy.js";import{d as G}from"./semi-ui-BHzOf8tD.js";const se=e=>typeof e=="number"&&!isNaN(e),Z=e=>typeof e=="string",k=e=>typeof e=="function",ue=e=>Z(e)||k(e)?e:null,me=e=>_.isValidElement(e)||Z(e)||k(e)||se(e);function Ae(e,t,n){n===void 0&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}function pe(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:s=!0,collapseDuration:a=300}=e;return function(r){let{children:i,position:v,preventExitTransition:m,done:c,nodeRef:l,isIn:g}=r;const u=o?`${t}--${v}`:t,f=o?`${n}--${v}`:n,h=_.useRef(0);return _.useLayoutEffect(()=>{const d=l.current,p=u.split(" "),x=T=>{T.target===l.current&&(d.dispatchEvent(new Event("d")),d.removeEventListener("animationend",x),d.removeEventListener("animationcancel",x),h.current===0&&T.type!=="animationcancel"&&d.classList.remove(...p))};d.classList.add(...p),d.addEventListener("animationend",x),d.addEventListener("animationcancel",x)},[]),_.useEffect(()=>{const d=l.current,p=()=>{d.removeEventListener("animationend",p),s?Ae(d,c,a):c()};g||(m?p():(h.current=1,d.className+=` ${f}`,d.addEventListener("animationend",p)))},[g]),O.createElement(O.Fragment,null,i)}}function be(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const $={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(o=>o!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},le=e=>{let{theme:t,type:n,...o}=e;return O.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},ye={info:function(e){return O.createElement(le,{...e},O.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return O.createElement(le,{...e},O.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return O.createElement(le,{...e},O.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return O.createElement(le,{...e},O.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return O.createElement("div",{className:"Toastify__spinner"})}};function je(e){const[,t]=_.useReducer(u=>u+1,0),[n,o]=_.useState([]),s=_.useRef(null),a=_.useRef(new Map).current,r=u=>n.indexOf(u)!==-1,i=_.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:r,getToast:u=>a.get(u)}).current;function v(u){let{containerId:f}=u;const{limit:h}=i.props;!h||f&&i.containerId!==f||(i.count-=i.queue.length,i.queue=[])}function m(u){o(f=>u==null?[]:f.filter(h=>h!==u))}function c(){const{toastContent:u,toastProps:f,staleId:h}=i.queue.shift();g(u,f,h)}function l(u,f){let{delay:h,staleId:d,...p}=f;if(!me(u)||function(y){return!s.current||i.props.enableMultiContainer&&y.containerId!==i.props.containerId||a.has(y.toastId)&&y.updateId==null}(p))return;const{toastId:x,updateId:T,data:b}=p,{props:E}=i,B=()=>m(x),D=T==null;D&&i.count++;const I={...E,style:E.toastStyle,key:i.toastKey++,...Object.fromEntries(Object.entries(p).filter(y=>{let[N,P]=y;return P!=null})),toastId:x,updateId:T,data:b,closeToast:B,isIn:!1,className:ue(p.className||E.toastClassName),bodyClassName:ue(p.bodyClassName||E.bodyClassName),progressClassName:ue(p.progressClassName||E.progressClassName),autoClose:!p.isLoading&&(q=p.autoClose,F=E.autoClose,q===!1||se(q)&&q>0?q:F),deleteToast(){const y=be(a.get(x),"removed");a.delete(x),$.emit(4,y);const N=i.queue.length;if(i.count=x==null?i.count-i.displayedToast:i.count-1,i.count<0&&(i.count=0),N>0){const P=x==null?i.props.limit:1;if(N===1||P===1)i.displayedToast++,c();else{const z=P>N?N:P;i.displayedToast=z;for(let R=0;R<z;R++)c()}}else t()}};var q,F;I.iconOut=function(y){let{theme:N,type:P,isLoading:z,icon:R}=y,A=null;const M={theme:N,type:P};return R===!1||(k(R)?A=R(M):_.isValidElement(R)?A=_.cloneElement(R,M):Z(R)||se(R)?A=R:z?A=ye.spinner():(J=>J in ye)(P)&&(A=ye[P](M))),A}(I),k(p.onOpen)&&(I.onOpen=p.onOpen),k(p.onClose)&&(I.onClose=p.onClose),I.closeButton=E.closeButton,p.closeButton===!1||me(p.closeButton)?I.closeButton=p.closeButton:p.closeButton===!0&&(I.closeButton=!me(E.closeButton)||E.closeButton);let W=u;_.isValidElement(u)&&!Z(u.type)?W=_.cloneElement(u,{closeToast:B,toastProps:I,data:b}):k(u)&&(W=u({closeToast:B,toastProps:I,data:b})),E.limit&&E.limit>0&&i.count>E.limit&&D?i.queue.push({toastContent:W,toastProps:I,staleId:d}):se(h)?setTimeout(()=>{g(W,I,d)},h):g(W,I,d)}function g(u,f,h){const{toastId:d}=f;h&&a.delete(h);const p={content:u,props:f};a.set(d,p),o(x=>[...x,d].filter(T=>T!==h)),$.emit(4,be(p,p.props.updateId==null?"added":"updated"))}return _.useEffect(()=>(i.containerId=e.containerId,$.cancelEmit(3).on(0,l).on(1,u=>s.current&&m(u)).on(5,v).emit(2,i),()=>{a.clear(),$.emit(3,i)}),[]),_.useEffect(()=>{i.props=e,i.isToastActive=r,i.displayedToast=n.length}),{getToastToRender:function(u){const f=new Map,h=Array.from(a.values());return e.newestOnTop&&h.reverse(),h.forEach(d=>{const{position:p}=d.props;f.has(p)||f.set(p,[]),f.get(p).push(d)}),Array.from(f,d=>u(d[0],d[1]))},containerRef:s,isToastActive:r}}function _e(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Te(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Be(e){const[t,n]=_.useState(!1),[o,s]=_.useState(!1),a=_.useRef(null),r=_.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,i=_.useRef(e),{autoClose:v,pauseOnHover:m,closeToast:c,onClick:l,closeOnClick:g}=e;function u(b){if(e.draggable){b.nativeEvent.type==="touchstart"&&b.nativeEvent.preventDefault(),r.didMove=!1,document.addEventListener("mousemove",p),document.addEventListener("mouseup",x),document.addEventListener("touchmove",p),document.addEventListener("touchend",x);const E=a.current;r.canCloseOnClick=!0,r.canDrag=!0,r.boundingRect=E.getBoundingClientRect(),E.style.transition="",r.x=_e(b.nativeEvent),r.y=Te(b.nativeEvent),e.draggableDirection==="x"?(r.start=r.x,r.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(r.start=r.y,r.removalDistance=E.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function f(b){if(r.boundingRect){const{top:E,bottom:B,left:D,right:I}=r.boundingRect;b.nativeEvent.type!=="touchend"&&e.pauseOnHover&&r.x>=D&&r.x<=I&&r.y>=E&&r.y<=B?d():h()}}function h(){n(!0)}function d(){n(!1)}function p(b){const E=a.current;r.canDrag&&E&&(r.didMove=!0,t&&d(),r.x=_e(b),r.y=Te(b),r.delta=e.draggableDirection==="x"?r.x-r.start:r.y-r.start,r.start!==r.x&&(r.canCloseOnClick=!1),E.style.transform=`translate${e.draggableDirection}(${r.delta}px)`,E.style.opacity=""+(1-Math.abs(r.delta/r.removalDistance)))}function x(){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",x);const b=a.current;if(r.canDrag&&r.didMove&&b){if(r.canDrag=!1,Math.abs(r.delta)>r.removalDistance)return s(!0),void e.closeToast();b.style.transition="transform 0.2s, opacity 0.2s",b.style.transform=`translate${e.draggableDirection}(0)`,b.style.opacity="1"}}_.useEffect(()=>{i.current=e}),_.useEffect(()=>(a.current&&a.current.addEventListener("d",h,{once:!0}),k(e.onOpen)&&e.onOpen(_.isValidElement(e.children)&&e.children.props),()=>{const b=i.current;k(b.onClose)&&b.onClose(_.isValidElement(b.children)&&b.children.props)}),[]),_.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||d(),window.addEventListener("focus",h),window.addEventListener("blur",d)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",h),window.removeEventListener("blur",d))}),[e.pauseOnFocusLoss]);const T={onMouseDown:u,onTouchStart:u,onMouseUp:f,onTouchEnd:f};return v&&m&&(T.onMouseEnter=d,T.onMouseLeave=h),g&&(T.onClick=b=>{l&&l(b),r.canCloseOnClick&&c()}),{playToast:h,pauseToast:d,isRunning:t,preventExitTransition:o,toastRef:a,eventHandlers:T}}function Le(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return O.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:s=>{s.stopPropagation(),t(s)},"aria-label":o},O.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},O.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function De(e){let{delay:t,isRunning:n,closeToast:o,type:s="default",hide:a,className:r,style:i,controlledProgress:v,progress:m,rtl:c,isIn:l,theme:g}=e;const u=a||v&&m===0,f={...i,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:u?0:1};v&&(f.transform=`scaleX(${m})`);const h=G("Toastify__progress-bar",v?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":c}),d=k(r)?r({rtl:c,type:s,defaultClassName:h}):G(h,r);return O.createElement("div",{role:"progressbar","aria-hidden":u?"true":"false","aria-label":"notification timer",className:d,style:f,[v&&m>=1?"onTransitionEnd":"onAnimationEnd"]:v&&m<1?null:()=>{l&&o()}})}const $e=e=>{const{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:s}=Be(e),{closeButton:a,children:r,autoClose:i,onClick:v,type:m,hideProgressBar:c,closeToast:l,transition:g,position:u,className:f,style:h,bodyClassName:d,bodyStyle:p,progressClassName:x,progressStyle:T,updateId:b,role:E,progress:B,rtl:D,toastId:I,deleteToast:q,isIn:F,isLoading:W,iconOut:y,closeOnClick:N,theme:P}=e,z=G("Toastify__toast",`Toastify__toast-theme--${P}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":D},{"Toastify__toast--close-on-click":N}),R=k(f)?f({rtl:D,position:u,type:m,defaultClassName:z}):G(z,f),A=!!B||!i,M={closeToast:l,type:m,theme:P};let J=null;return a===!1||(J=k(a)?a(M):_.isValidElement(a)?_.cloneElement(a,M):Le(M)),O.createElement(g,{isIn:F,done:q,position:u,preventExitTransition:n,nodeRef:o},O.createElement("div",{id:I,onClick:v,className:R,...s,style:h,ref:o},O.createElement("div",{...F&&{role:E},className:k(d)?d({type:m}):G("Toastify__toast-body",d),style:p},y!=null&&O.createElement("div",{className:G("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!W})},y),O.createElement("div",null,r)),J,O.createElement(De,{...b&&!A?{key:`pb-${b}`}:{},rtl:D,theme:P,delay:i,isRunning:t,isIn:F,closeToast:l,hide:c,type:m,style:T,className:x,controlledProgress:A,progress:B||0})))},fe=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},qe=pe(fe("bounce",!0));pe(fe("slide",!0));pe(fe("zoom"));pe(fe("flip"));const Ee=_.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:o,isToastActive:s}=je(e),{className:a,style:r,rtl:i,containerId:v}=e;function m(c){const l=G("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":i});return k(a)?a({position:c,rtl:i,defaultClassName:l}):G(l,ue(a))}return _.useEffect(()=>{t&&(t.current=o.current)},[]),O.createElement("div",{ref:o,className:"Toastify",id:v},n((c,l)=>{const g=l.length?{...r}:{...r,pointerEvents:"none"};return O.createElement("div",{className:m(c),style:g,key:`container-${c}`},l.map((u,f)=>{let{content:h,props:d}=u;return O.createElement($e,{...d,isIn:s(d.toastId),style:{...d.style,"--nth":f+1,"--len":l.length},key:`toast-${d.key}`},h)}))}))});Ee.displayName="ToastContainer",Ee.defaultProps={position:"top-right",transition:qe,autoClose:5e3,closeButton:Le,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ge,Y=new Map,re=[],He=1;function Ne(){return""+He++}function Fe(e){return e&&(Z(e.toastId)||se(e.toastId))?e.toastId:Ne()}function ae(e,t){return Y.size>0?$.emit(0,e,t):re.push({content:e,options:t}),t.toastId}function de(e,t){return{...t,type:t&&t.type||e,toastId:Fe(t)}}function ce(e){return(t,n)=>ae(t,de(e,n))}function w(e,t){return ae(e,de("default",t))}w.loading=(e,t)=>ae(e,de("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),w.promise=function(e,t,n){let o,{pending:s,error:a,success:r}=t;s&&(o=Z(s)?w.loading(s,n):w.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},v=(c,l,g)=>{if(l==null)return void w.dismiss(o);const u={type:c,...i,...n,data:g},f=Z(l)?{render:l}:l;return o?w.update(o,{...u,...f}):w(f.render,{...u,...f}),g},m=k(e)?e():e;return m.then(c=>v("success",r,c)).catch(c=>v("error",a,c)),m},w.success=ce("success"),w.info=ce("info"),w.error=ce("error"),w.warning=ce("warning"),w.warn=w.warning,w.dark=(e,t)=>ae(e,de("default",{theme:"dark",...t})),w.dismiss=e=>{Y.size>0?$.emit(1,e):re=re.filter(t=>e!=null&&t.options.toastId!==e)},w.clearWaitingQueue=function(e){return e===void 0&&(e={}),$.emit(5,e)},w.isActive=e=>{let t=!1;return Y.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},w.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(o,s){let{containerId:a}=s;const r=Y.get(a||ge);return r&&r.getToast(o)}(e,t);if(n){const{props:o,content:s}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:Ne()};a.toastId!==e&&(a.staleId=e);const r=a.render||s;delete a.render,ae(r,a)}},0)},w.done=e=>{w.update(e,{progress:1})},w.onChange=e=>($.on(4,e),()=>{$.off(4,e)}),w.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},w.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},$.on(2,e=>{ge=e.containerId||e,Y.set(ge,e),re.forEach(t=>{$.emit(0,t.content,t.options)}),re=[]}).on(3,e=>{Y.delete(e.containerId||e),Y.size===0&&$.off(0).off(1).off(5)});var he={},We=ee&&ee.__createBinding||(Object.create?function(e,t,n,o){o===void 0&&(o=n);var s=Object.getOwnPropertyDescriptor(t,n);(!s||("get"in s?!t.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,s)}:function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]}),Qe=ee&&ee.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Ue=ee&&ee.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&We(t,e,n);return Qe(t,e),t};Object.defineProperty(he,"__esModule",{value:!0});he.useTurnstile=void 0;const K=Ue(_),ie=typeof globalThis<"u"?globalThis:window;let V=typeof ie.turnstile<"u"?"ready":"unloaded",Se,ve;const ke=new Promise((e,t)=>{ve={resolve:e,reject:t},V==="ready"&&e(void 0)});{const e="cf__reactTurnstileOnLoad",t="https://challenges.cloudflare.com/turnstile/v0/api.js";Se=()=>{if(V==="unloaded"){V="loading",ie[e]=()=>{ve.resolve(),V="ready",delete ie[e]};const n=`${t}?onload=${e}&render=explicit`,o=document.createElement("script");o.src=n,o.async=!0,o.addEventListener("error",()=>{ve.reject("Failed to load Turnstile."),delete ie[e]}),document.head.appendChild(o)}return ke}}function Ge({id:e,className:t,style:n,sitekey:o,action:s,cData:a,theme:r,language:i,tabIndex:v,responseField:m,responseFieldName:c,size:l,fixedSize:g,retry:u,retryInterval:f,refreshExpired:h,appearance:d,execution:p,userRef:x,onVerify:T,onLoad:b,onError:E,onExpire:B,onTimeout:D,onAfterInteractive:I,onBeforeInteractive:q,onUnsupported:F}){const W=(0,K.useRef)(null),y=(0,K.useState)({onVerify:T,onLoad:b,onError:E,onExpire:B,onTimeout:D,onAfterInteractive:I,onBeforeInteractive:q,onUnsupported:F})[0],N=x??W;return(0,K.useEffect)(()=>{if(!N.current)return;let P=!1,z="";return(async()=>{var R,A;if(V!=="ready")try{await Se()}catch(C){(R=y.onError)===null||R===void 0||R.call(y,C);return}if(P||!N.current)return;let M;const J={sitekey:o,action:s,cData:a,theme:r,language:i,tabindex:v,"response-field":m,"response-field-name":c,size:l,retry:u,"retry-interval":f,"refresh-expired":h,appearance:d,execution:p,callback:C=>{var H;return(H=y.onVerify)===null||H===void 0?void 0:H.call(y,C,M)},"error-callback":C=>{var H;return(H=y.onError)===null||H===void 0?void 0:H.call(y,C,M)},"expired-callback":C=>{var H;return(H=y.onExpire)===null||H===void 0?void 0:H.call(y,C,M)},"timeout-callback":()=>{var C;return(C=y.onTimeout)===null||C===void 0?void 0:C.call(y,M)},"after-interactive-callback":()=>{var C;return(C=y.onAfterInteractive)===null||C===void 0?void 0:C.call(y,M)},"before-interactive-callback":()=>{var C;return(C=y.onBeforeInteractive)===null||C===void 0?void 0:C.call(y,M)},"unsupported-callback":()=>{var C;return(C=y.onUnsupported)===null||C===void 0?void 0:C.call(y,M)}};z=window.turnstile.render(N.current,J),M=Ve(z),(A=y.onLoad)===null||A===void 0||A.call(y,z,M)})(),()=>{P=!0,z&&window.turnstile.remove(z)}},[o,s,a,r,i,v,m,c,l,u,f,h,d,p]),(0,K.useEffect)(()=>{y.onVerify=T,y.onLoad=b,y.onError=E,y.onExpire=B,y.onTimeout=D,y.onAfterInteractive=I,y.onBeforeInteractive=q,y.onUnsupported=F},[T,b,E,B,D,I,q,F]),K.default.createElement("div",{ref:N,id:e,className:t,style:g?{...n??{},width:l==="compact"?"130px":"300px",height:l==="compact"?"120px":"65px"}:n})}var et=he.default=Ge;function Ve(e){return{execute:t=>window.turnstile.execute(e,t),reset:()=>window.turnstile.reset(e),getResponse:()=>window.turnstile.getResponse(e),isExpired:()=>window.turnstile.isExpired(e)}}function Xe(){const[e,t]=(0,K.useState)(V);return(0,K.useEffect)(()=>{V!=="ready"&&ke.then(()=>t(V))},[]),ie.turnstile}he.useTurnstile=Xe;var Ye=function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(o,s,a){n.o(o,s)||Object.defineProperty(o,s,{enumerable:!0,get:a})},n.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,s){if(1&s&&(o=n(o)),8&s||4&s&&typeof o=="object"&&o&&o.__esModule)return o;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:o}),2&s&&typeof o!="string")for(var r in o)n.d(a,r,(function(i){return o[i]}).bind(null,r));return a},n.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(s,"a",s),s},n.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},n.p="",n(n.s=0)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function v(m,c){for(var l=0;l<c.length;l++){var g=c[l];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(m,g.key,g)}}return function(m,c,l){return c&&v(m.prototype,c),l&&v(m,l),m}}(),s=r(n(1)),a=r(n(2));function r(v){return v&&v.__esModule?v:{default:v}}var i=function(v){function m(c){return function(l,g){if(!(l instanceof g))throw new TypeError("Cannot call a class as a function")}(this,m),function(l,g){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!g||typeof g!="object"&&typeof g!="function"?l:g}(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,c))}return function(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);c.prototype=Object.create(l&&l.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(c,l):c.__proto__=l)}(m,v),o(m,[{key:"componentDidMount",value:function(){var c=this.props,l=c.botName,g=c.buttonSize,u=c.cornerRadius,f=c.requestAccess,h=c.usePic,d=c.dataOnauth,p=c.dataAuthUrl,x=c.lang;window.TelegramLoginWidget={dataOnauth:function(b){return d(b)}};var T=document.createElement("script");T.src="https://telegram.org/js/telegram-widget.js?9",T.setAttribute("data-telegram-login",l),T.setAttribute("data-size",g),u!==void 0&&T.setAttribute("data-radius",u),T.setAttribute("data-request-access",f),T.setAttribute("data-userpic",h),T.setAttribute("data-lang",x),p!==void 0?T.setAttribute("data-auth-url",p):T.setAttribute("data-onauth","TelegramLoginWidget.dataOnauth(user)"),T.async=!0,this.instance.appendChild(T)}},{key:"render",value:function(){var c=this;return s.default.createElement("div",{className:this.props.className,ref:function(l){c.instance=l}},this.props.children)}}]),m}(s.default.Component);i.propTypes={botName:a.default.string.isRequired,dataOnauth:a.default.func,buttonSize:a.default.oneOf(["large","medium","small"]),cornerRadius:a.default.number,requestAccess:a.default.string,usePic:a.default.bool,lang:a.default.string},i.defaultProps={botName:"samplebot",dataOnauth:function(){},buttonSize:"large",requestAccess:"write",usePic:!0,lang:"en"},t.default=i},function(e,t){e.exports=_},function(e,t,n){e.exports=n(3)()},function(e,t,n){var o=n(4);function s(){}function a(){}a.resetWarningCache=s,e.exports=function(){function r(m,c,l,g,u,f){if(f!==o){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}function i(){return r}r.isRequired=r;var v={array:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:a,resetWarningCache:s};return v.PropTypes=v,v}},function(e,t,n){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);const tt=ze(Ye);let xe="",S={},Q=[],j=[],Oe=0,X=0,U=0,Ce,we,Ie,Re,Me,L,te,ne,oe;class Pe{constructor(t){this.pos={x:t?t.x:0,y:t?t.y:0},this.vel={x:0,y:0},this.shrink=.97,this.size=2,this.resistance=1,this.gravity=0,this.flick=!1,this.alpha=1,this.fade=0,this.color=0}update(){this.vel.x*=this.resistance,this.vel.y*=this.resistance,this.vel.y+=this.gravity,this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.size*=this.shrink,this.alpha-=this.fade}render(t){if(!this.exists())return;t.save(),t.globalCompositeOperation="lighter";let n=this.pos.x,o=this.pos.y,s=this.size/2,a=t.createRadialGradient(n,o,.1,n,o,s);a.addColorStop(.1,"rgba(255,255,255,"+this.alpha+")"),a.addColorStop(.8,"hsla("+this.color+", 100%, 50%, "+this.alpha+")"),a.addColorStop(1,"hsla("+this.color+", 100%, 50%, 0.1)"),t.fillStyle=a,t.beginPath(),t.arc(this.pos.x,this.pos.y,this.flick?Math.random()*this.size:this.size,0,Math.PI*2,!0),t.closePath(),t.fill(),t.restore()}exists(){return this.alpha>=.1&&this.size>=1}}class Ke extends Pe{constructor(t){super({x:t,y:U}),this.explosionColor=0}explode(){for(let t=0;t<S.explode_debris_num;t++){let n=new Pe(this.pos),o=Math.random()*Math.PI*2,s=Math.cos(Math.random()*Math.PI/2)*15;n.vel.x=Math.cos(o)*s,n.vel.y=Math.sin(o)*s,n.size=S.explode_particles_size,n.gravity=.2,n.resistance=.9+S.explode_particles_resistance*.01,n.shrink=Math.random()*.05+.95,n.flick=!0,n.color=this.explosionColor,Q.push(n)}}render(t){if(!this.exists())return;t.save(),t.globalCompositeOperation="lighter";let n=this.pos.x,o=this.pos.y,s=this.size/2,a=t.createRadialGradient(n,o,.1,n,o,s);a.addColorStop(.1,"rgba(255, 255, 255 ,"+this.alpha+")"),a.addColorStop(1,"rgba(0, 0, 0, "+this.alpha+")"),t.fillStyle=a,t.beginPath(),t.arc(this.pos.x,this.pos.y,this.flick?Math.random()*this.size/2+this.size/2:this.size,0,Math.PI*2,!0),t.closePath(),t.fill(),t.restore()}}const nt={init:function(e,t){!e||typeof e!="string"||document.getElementById(e)==null?console.log("id对象不存在"):(xe=document.getElementById(e),S.frequency=t.frequency||200,S.launch_speed=t.launch_speed||12,S.launch_particles_size=t.launch_particles_size||0,S.explode_debris_num=Math.random()*10+(t.debris_num||150),S.explode_particles_resistance=t.explode_particles_resistance||5,S.explode_particles_size=t.explode_particles_resistance||10,X=t.width||document.body.clientWidth+"px",U=t.height||document.body.clientHeight+"px",Ce=t.top||"0px",we=t.bottom||"0px",Ie=t.left||"0px",Re=t.right||"0px",Me=t.zIndex||100,Oe=S.explode_debris_num*10,L=document.createElement("canvas"),L.id="fireworksField",L.style.width=X,L.style.height=U,L.style.position="absolute",L.style.top=Ce,L.style.bottom=we,L.style.left=Ie,L.style.right=Re,L.style.opacity=1,L.style.zIndex=Me,te=L.getContext("2d"),xe.appendChild(L),ne=setInterval(this.reload,S.frequency),oe=setInterval(this.loop,50))},reload:function(){if(j.length<100){let e=new Ke(Math.random()*X);e.explosionColor=Math.floor(Math.random()*360/10)*10,e.vel.y=-1*S.launch_speed,e.vel.x=Math.random()*2-1,e.size=S.launch_particles_size,e.shrink=1.008,e.gravity=.005,j.push(e)}},loop:function(){X!==window.innerWidth&&(L.width=X=window.innerWidth),U!==window.innerHeight&&(L.height=U=window.innerHeight),te.fillStyle="rgba(0, 0, 0, 0.05)",te.clearRect(0,0,X,U);let e=[];for(let n=0;n<j.length;n++){j[n].update(),j[n].render(te);let o=Math.sqrt(Math.pow(X-j[n].pos.x,2)+Math.pow(U-j[n].pos.y,2)),s=j[n].pos.y<U*2/3?Math.random()*100<=1:!1;j[n].pos.y<U/5||j[n].vel.y>=0||o<50||s?j[n].explode():e.push(j[n])}j=e;let t=[];for(let n=0;n<Q.length;n++)Q[n].update(),Q[n].exists()&&(Q[n].render(te),t.push(Q[n]));for(Q=t;Q.length>Oe;)Q.shift()},start:function(){ne&&clearInterval(ne),oe&&clearInterval(oe),ne=setInterval(this.reload,S.frequency),oe=setInterval(this.loop,50)},stop:function(){clearInterval(ne),setTimeout(function(){clearInterval(oe)},2e4)}};export{w as Q,tt as T,et as _,nt as f,Ee as k};