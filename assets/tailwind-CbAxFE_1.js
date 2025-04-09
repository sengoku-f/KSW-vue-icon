import{o as i,a as m,b as o,r as $,l as me,m as P,q as fe,c as C,s as ve,v as he,e as E,x as T,y as re,z as ie,A as ce,B as ge,C as H,E as _e,F as we,G as Ce,j as Q,w as ye,f as ke,g as b,H as W,t as z,J as j,T as $e,K,L as de,M as be,N as D,u as J,Q as xe,R as Be,h as Le,d as Se,i as Ie}from"./utils-CtITjcsd.js";import{g as X,B as Me}from"./icons/group0-B13oSSKl.js";const L=(e,t)=>{const s=e.__vccOpts||e;for(const[c,h]of t)s[c]=h;return s},Fe={},Ne={class:"ksw-icon"},Te=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"})],-1),Ae=[Te];function Oe(e,t){return i(),m("span",Ne,Ae)}const qe=L(Fe,[["render",Oe]]),ze={},je={class:"ksw-icon"},Ge=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})],-1),Re=[Ge];function De(e,t){return i(),m("span",je,Re)}const He=L(ze,[["render",De]]),Pe={},Ve={class:"ksw-icon"},Ue=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})],-1),Ee=[Ue];function Qe(e,t){return i(),m("span",Ve,Ee)}const Y=L(Pe,[["render",Qe]]),G=e=>(re("data-v-e039e7e4"),e=e(),ie(),e),Ke={class:"relative"},Ze={class:"ml-auto flex items-center gap-4 text-sm",role:"none"},We={class:"flex items-center gap-1 cursor-pointer select-none"},Je={class:"relative inline-block"},Xe=G(()=>o("option",{value:"all"},"全部",-1)),Ye=G(()=>o("option",{value:"monochrome"},"单色",-1)),et=G(()=>o("option",{value:"color"},"彩色",-1)),tt=[Xe,Ye,et],ot={class:"relative inline-block"},st=G(()=>o("option",{value:"date"},"最新",-1)),nt=G(()=>o("option",{value:"name"},"默认",-1)),at=[st,nt],lt={__name:"ToolBar",props:{showColorIcons:String,sortBy:String,searchQuery:String},emits:["onSortChange","onFilterColorIcons","onToggleAnimationIcons","onSearchChange"],setup(e,{emit:t}){const s=e,c=t,h=$(s.searchQuery);me(h,r=>{c("onSearchChange",r)});const g=r=>{c("onSortChange",r.target.value)},p=r=>{const y=r.target.value;y==="all"?c("onFilterColorIcons","all"):y==="color"?c("onFilterColorIcons","color"):c("onFilterColorIcons","monochrome")},d=()=>{c("onToggleAnimationIcons")},f=$(!1),_=$(null),u=$(0),l=()=>{if(_.value){const r=_.value.getBoundingClientRect();f.value=r.top<=u.value}};function n(){u.value=0,l()}return P(()=>{const r=document==null?void 0:document.querySelector("div[data-overlayscrollbars-contents]");r==null||r.addEventListener("scroll",l),window==null||window.addEventListener("scroll",l),window==null||window.addEventListener("resize",n),n();const y=new ResizeObserver(n);y==null||y.observe(document==null?void 0:document.body)}),fe(()=>{window==null||window.removeEventListener("scroll",l),window==null||window.removeEventListener("resize",n)}),(r,y)=>(i(),m("div",{class:T(["sticky top-0 w-full bg-white my-4 z-10 transition-all",{"toolbar-bg border-b bg-white/50 backdrop-blur-xl shadow-sm":f.value}])},[o("div",{"aria-hidden":"false",ref_key:"targetDiv",ref:_,class:T([{"px-0":f.value},"mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8 gap-3 transition-all flex isolate items-center lg:gap-4"]),role:"tablist","aria-orientation":"horizontal"},[o("div",Ke,[C(He,{class:"pointer-events-none absolute !flex justify-center items-center h-full w-9 transition"}),ve(o("input",{type:"search","onUpdate:modelValue":y[0]||(y[0]=x=>h.value=x),"aria-label":"搜索所有图标",placeholder:"搜索所有图标…",class:"appearance-none block w-56 rounded-lg border border-slate-200 text-sm transition py-2 pl-8 pr-4 focus:outline-none shadow-sm"},null,512),[[he,h.value]])]),o("div",Ze,[o("label",We,[o("input",{class:"size-4",type:"checkbox",onChange:d},null,32),E(" 动画图标 ")]),o("div",Je,[o("select",{class:"appearance-none text-sm px-4 py-2 rounded-lg border hover:bg-slate-50 border-slate-200 cursor-pointer focus-visible:outline-none pr-8 transition",onChange:p},tt,32),C(Y,{class:"absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"})]),o("div",ot,[o("select",{class:"appearance-none text-sm px-4 py-2 rounded-lg border hover:bg-slate-50 border-slate-200 cursor-pointer focus-visible:outline-none pr-8 transition",onChange:g},at,32),C(Y,{class:"absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"})])])],2)],2))}},rt=L(lt,[["__scopeId","data-v-e039e7e4"]]);var it=Object.defineProperty,ct=Object.defineProperties,dt=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,ut=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,te=(e,t,s)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,I=(e,t)=>{for(var s in t||(t={}))ut.call(t,s)&&te(e,s,t[s]);if(ee)for(var s of ee(t))pt.call(t,s)&&te(e,s,t[s]);return e},A=(e,t)=>ct(e,dt(t));const ue={},mt=function(e,t){ue[e]=t},F=ce({name:"Icon",props:{name:String,color:String},computed:{svg(){if(this.name)return ue[this.name]}},render(e){const t=this.svg;if(!t)return console.warn(`The name of '${this.name}' could not be found.`),C("span",{class:"m-svg-icon"},null);const s={color:this.color?this.color:t.fill?t.fill:null};return C("span",{class:["m-svg-icon","m-svg-icon--"+this.name]},[C("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:t.viewBox,style:s,class:t.class},[t.defs&&C("defs",{innerHTML:t.defs},null),t.path&&C("path",{fill:"currentColor",d:t.path},null),t.html&&C("g",{innerHTML:t.html},null),this.$slots.default])])}});F.add=mt;const oe={name:"error",fill:"#F56C6C",viewBox:"0 0 1024 1024",path:"M512,952C269,952,72,755,72,512S269,72,512,72s440,197,440,440S755,952,512,952z M579.7,512l101.6-101.6 c18.7-18.7,18.7-49,0-67.7c-18.7-18.7-49-18.7-67.7,0l0,0L512,444.3L410.4,342.7c-18.7-18.7-49-18.7-67.7,0s-18.7,49,0,67.7 L444.3,512L342.7,613.6c-18.7,18.7-18.7,49,0,67.7c18.7,18.7,49,18.7,67.7,0L512,579.7l101.6,101.6c18.7,18.7,49,18.7,67.7,0 c18.7-18.7,18.7-49,0-67.7L579.7,512z"},se={name:"info",fill:"#1CADF2",viewBox:"0 0 1024 1024",path:"M512,72C269,72,72,269,72,512s197,440,440,440s440-197,440-440S755,72,512,72z M581,673.9 c-33.2,49.9-67,88.3-123.8,88.3c-38.8-6.3-54.7-34.1-46.3-62.4L484,457.6c1.8-5.9-1.2-12.3-6.6-14.2c-5.4-1.9-15.9,5.1-25.1,15.1 l-44.2,53.2c-1.2-8.9-0.1-23.7-0.1-29.6c33.2-49.9,87.8-89.2,124.8-89.2c35.2,3.6,51.8,31.7,45.7,62.6l-73.6,243.3 c-1,5.5,1.9,11.1,6.9,12.8c5.4,1.9,16.8-5.1,26-15.1l44.2-53.1C583,652.3,581,667.9,581,673.9z M571.2,357.6 c-28,0-50.6-20.4-50.6-50.4c0-30,22.7-50.3,50.6-50.3c28,0,50.6,20.4,50.6,50.3C621.8,337.3,599.1,357.6,571.2,357.6z"},ne={name:"success",fill:"#17B77E",viewBox:"0 0 1024 1024",path:"M512,72C269,72,72,269,72,512s197,440,440,440s440-197,440-440S755,72,512,72L512,72z M758.9,374 c-48.5,48.6-81.2,76.9-172.3,186.8c-52.6,63.4-102.3,131.5-102.7,132L462.1,720c-4.6,6.1-13.5,6.8-19.1,1.6L267.9,558.9 c-17.8-16.5-18.8-44.4-2.3-62.2s44.4-18.8,62.2-2.3l104.9,97.5c5.5,5.1,14.1,4.5,18.9-1.3c16.2-20.1,38.4-44.5,62.4-68.6 c90.2-90.9,145.6-139.7,175.2-161.3c36-26.2,77.3-48.6,87.3-36.2C792,343.9,782.5,350.3,758.9,374L758.9,374z"},ae={name:"warning",fill:"#FFC603",viewBox:"0 0 1024 1024",path:"M512,952C269,952,72,755,72,512S269,72,512,72s440,197,440,440S755,952,512,952z M510,770.8 c30.4,0,55-24.6,55-55s-24.6-55-55-55s-55,24.6-55,55S479.6,770.8,510,770.8z M509.8,255.3c-39.3,0-71.2,31.9-71.2,71.2 c0,3.1,0.2,6.2,0.6,9.3L472.4,588c2.5,19.3,18.9,33.7,38.4,33.7c19.4,0,35.8-14.4,38.2-33.7l31.8-252.2c5-39.2-22.8-75-62-79.9 C515.9,255.5,512.8,255.3,509.8,255.3z"},le={name:"loading",viewBox:"0 0 50 50",html:'<g stroke="#f2f2f2" stroke-width="3.5"  stroke-linecap="round" fill="none"><circle cx="25" cy="25" r="20" class="m-loading-icon-bg-path"></circle><circle cx="25" cy="25" r="20" stroke="#20a0ff" stroke-dasharray="90, 150" stroke-dashoffset="0" class="m-loading-icon-active-path"><animate attributeName="stroke-dasharray" dur="1.5s" values="1,200;90,150;90,150" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" dur="1.5s" values="0;-40px;-120px" repeatCount="indefinite"/><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></circle></g>'};F.add(oe.name,oe);F.add(se.name,se);F.add(ne.name,ne);F.add(ae.name,ae);F.add(le.name,le);var ft=(e,t)=>{const s=e.__vccOpts||e;for(const[c,h]of t)s[c]=h;return s};function vt(e,t){const s=$(0);return s.value=window.setTimeout(e,t),{stop(){window.clearTimeout(s.value)}}}const ht=ce({components:{Icon:F},name:"m-message",emits:["close","destroy","collapsed"],props:{id:String,type:{type:String,default:"info"},title:String,message:String,iconURL:String,duration:{type:Number,default:3e3},isCollapsed:Boolean,collapsable:Boolean,supportHTML:Boolean,width:String,className:String,wrapperClassName:String,closable:Boolean,stopTimerOnHover:{type:Boolean,default:!0}},setup(e,{expose:t,emit:s}){const c=_e({visible:!0,collapsed:e.isCollapsed,timer:null});let h;const g=()=>{e.duration<0||({stop:h}=vt(()=>{d()},e.duration))},p=()=>{h==null||h()},d=()=>{c.visible=!1},f=()=>{c.collapsed=!c.collapsed,s("collapsed",c.collapsed)},_=()=>{c.visible=!1},u=()=>{e.stopTimerOnHover&&p()},l=()=>{e.stopTimerOnHover&&g()};return we(()=>{p()}),P(()=>{g()}),t({close:d}),{state:c,handleClearTimer:u,handleStartTimer:l,triggerCollapse:f,handleClose:_}}}),gt=["id"],_t={key:0,class:"m-message-icons"},wt=["src"],Ct={class:"m-message-content"},yt={key:0,class:"m-message--title"},kt=["innerHTML"],$t={key:0,class:"m-message--description"},bt={class:"m-message--control"},xt=o("svg",{viewBox:"0 0 35 35",width:"20",height:"20",version:"1.1",fill:"currentColor"},[o("path",{d:"M9.4,13.9c-0.2,0.2-0.2,0.6,0,0.8l8.1,8.1l0,0l0,0l8.1-8.1c0.2-0.2,0.2-0.6,0-0.8l-1.3-1.3 c-0.2-0.2-0.6-0.2-0.8,0l-5.5,5.5c-0.2,0.2-0.6,0.2-0.8,0l-5.5-5.5c-0.2-0.2-0.6-0.2-0.8,0L9.4,13.9z"})],-1),Bt=[xt],Lt=o("svg",{viewBox:"0 0 35 35",width:"20",height:"20",version:"1.1",fill:"currentColor"},[o("path",{d:"M19.5,17.5l5.1,5.1l-2,2l-5.1-5.1l-5.1,5.1l-2-2l5.1-5.1l-5.1-5.1l2-2l5.1,5.1l5.1-5.1l2,2L19.5,17.5z"})],-1),St=[Lt];function It(e,t,s,c,h,g){const p=Ce("icon");return i(),Q($e,{name:"m-message-fade",appear:"",mode:"in-out",onBeforeLeave:t[4]||(t[4]=d=>e.$emit("close")),onAfterLeave:t[5]||(t[5]=d=>e.$emit("destroy"))},{default:ye(()=>[e.state.visible?(i(),m("div",{key:0,class:T(["m-message-wrapper",e.wrapperClassName]),id:e.id,style:ke({width:e.width})},[o("div",{class:T(["m-message",e.className]),onMouseenter:t[2]||(t[2]=(...d)=>e.handleClearTimer&&e.handleClearTimer(...d)),onMouseleave:t[3]||(t[3]=(...d)=>e.handleStartTimer&&e.handleStartTimer(...d))},[e.iconURL||e.type?(i(),m("div",_t,[e.iconURL?(i(),m("img",{key:0,src:e.iconURL,class:"m-message--icon"},null,8,wt)):e.type?(i(),Q(p,{key:1,name:e.type,class:"m-message--icon"},null,8,["name"])):b("",!0)])):b("",!0),o("div",Ct,[e.title||e.$slots.title?(i(),m("div",yt,[W(e.$slots,"title",{},()=>[E(z(e.title),1)])])):b("",!0),e.supportHTML&&e.message?(i(),m(j,{key:1},[e.state.collapsed?b("",!0):(i(),m("div",{key:0,class:"m-message--description",innerHTML:e.message},null,8,kt))],64)):(i(),m(j,{key:2},[e.state.collapsed?b("",!0):(i(),m("div",$t,[W(e.$slots,"default",{},()=>[E(z(e.message),1)])]))],64))]),o("div",bt,[e.collapsable&&(e.title||e.$slots.title)?(i(),m("button",{key:0,class:T(["m-message--button m-message--arrow-down",{"is-collapsed":e.state.collapsed}]),onClick:t[0]||(t[0]=(...d)=>e.triggerCollapse&&e.triggerCollapse(...d))},Bt,2)):b("",!0),e.closable?(i(),m("button",{key:1,class:"m-message--button m-message--close",onClick:t[1]||(t[1]=(...d)=>e.handleClose&&e.handleClose(...d))},St)):b("",!0)])],34)],14,gt)):b("",!0)]),_:3})}var Mt=ft(ht,[["render",It]]);const Z=[];let Ft=0;const U={};let pe={};const Nt={stopTimerOnHover:!0,duration:3e3},w=e=>{const t="m-message-"+Ft++,s=A(I(I(I({},Nt),pe),e),{id:t});delete s.hasMask,delete s.position,delete s.zIndex;const c=e.position||"top-center",h=e.hasMask||!1,g=c+(h?"-mask":"");let p=U[g];p?p.count++:(p=U[g]={el:document.createElement("div"),count:1},p.el.className=["m-message-container","is-"+c,h?"has-mask":""].filter(function(l){return!!l}).join(" "),document.body.appendChild(p.el)),e.zIndex&&(p.el.style.zIndex=String(e.zIndex));let d=null;ge(e.message)?(d={default:()=>e.message},s.message=""):typeof e.message=="function"&&(d={default:e.message},s.message="");const f=C(Mt,s,d),_=document.createElement("div");f.appContext=e.ctx||w._context||null,f.props.onClose=e.onClose,f.props.onDestroy=()=>{p.count--,p.count===0&&(delete U[g],p.el.remove()),H(null,_)},H(f,_),c.indexOf("bottom")===0&&p.el.firstChild?p.el.insertBefore(_.firstElementChild,p.el.firstChild):p.el.appendChild(_.firstElementChild);const u={id:t,close(){var l,n;(n=(l=f==null?void 0:f.component)==null?void 0:l.exposed)==null||n.close()}};return Z.push(u),u};w.success=(e,t)=>w(A(I({},t),{type:"success",message:e}));w.info=(e,t)=>w(A(I({},t),{type:"info",message:e}));w.warning=(e,t)=>w(A(I({},t),{type:"warning",message:e}));w.error=(e,t)=>w(A(I({},t),{type:"error",message:e}));w.loading=(e,t)=>w(A(I({},t),{type:"loading",message:e}));w.closeAll=function(){for(let e=Z.length-1;e>=0;e--)Z[e].close()};w.setDefault=e=>{pe=I({},e)};const Tt=(e,t)=>(e.install=t,e);var S=Tt(w,function(e,t={}){w._context=e._context,e.config.globalProperties["$"+(t.name||"mmessage")]=w,t.defaultOptions&&w.setDefault(t.defaultOptions)});const At={},Ot={class:"ksw-icon"},qt=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"})],-1),zt=[qt];function jt(e,t){return i(),m("span",Ot,zt)}const Gt=L(At,[["render",jt]]),Rt={},Dt={class:"ksw-icon"},Ht=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.6",stroke:"currentColor"},[o("path",{d:"M23,7.11111111 L20.5555556,7.11111111 C19.2055262,7.11111111 18.1111111,8.20552617 18.1111111,9.55555556 L18.1111111,14.4444444 C18.1111111,15.7944738 19.2055262,16.8888889 20.5555556,16.8888889 L23,16.8888889 L23,12 L21.7777778,12","stroke-linecap":"round","stroke-linejoin":"round"}),o("path",{d:"M1,16.8888889 L1,7.11111111 L3.44444444,7.11111111 C4.79447383,7.11111111 5.88888889,8.20552617 5.88888889,9.55555556 C5.88888889,10.9055849 4.79447383,12 3.44444444,12 L1,12","stroke-linecap":"round","stroke-linejoin":"round"}),o("polyline",{"stroke-linecap":"round","stroke-linejoin":"round",points:"9.55555556 16.8888889 9.55555556 7.11111111 14.4444444 16.8888889 14.4444444 7.11111111"})],-1),Pt=[Ht];function Vt(e,t){return i(),m("span",Dt,Pt)}const Ut=L(Rt,[["render",Vt]]),Et={},Qt={class:"ksw-icon"},Kt=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.6",stroke:"currentColor"},[o("path",{d:"M23,7.11111111 L20.5555556,7.11111111 C19.2055262,7.11111111 18.1111111,8.20552617 18.1111111,9.55555556 L18.1111111,14.4444444 C18.1111111,15.7944738 19.2055262,16.8888889 20.5555556,16.8888889 L23,16.8888889 L23,12 L21.7777778,12","stroke-linecap":"round","stroke-linejoin":"round"}),o("path",{d:"M5.88888889,7.11111111 L2.22222222,7.11111111 C1.54720753,7.11111111 1,7.65831864 1,8.33333333 L1,10.7777778 C1,11.4527925 1.54720753,12 2.22222222,12 L4.66666667,12 C5.34168136,12 5.88888889,12.5472075 5.88888889,13.2222222 L5.88888889,15.6666667 C5.88888889,16.3416814 5.34168136,16.8888889 4.66666667,16.8888889 L1,16.8888889","stroke-linecap":"round","stroke-linejoin":"round"}),o("polyline",{points:"9.55555556 7.11111111 11.3888889 16.8888889 12.6111111 16.8888889 14.4444444 7.11111111","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Zt=[Kt];function Wt(e,t){return i(),m("span",Qt,Zt)}const Jt=L(Et,[["render",Wt]]),Xt={class:"wrapper"},Yt=["title","onClick","onMouseenter","onMouseleave"],eo={class:"item"},to={key:0,class:"alias-badge"},oo={key:1,class:"icon-text icon-title"},so={class:"icon-text"},no={key:2,class:"icon-options"},ao=["onClick"],lo=["onClick"],ro=["onClick"],io=["onClick"],co={__name:"IconPreview",props:{icons:Array,iconComponents:Object},setup(e){const t=e,s=async u=>{await J().toClipboard(u),S.success("已复制: "+u)},c=async u=>{await J().toClipboard(`<${u} />`),S.success(`已复制 Vue 代码: <${u} />`)},h=K(()=>t.icons),g=$({icon:null,text:null}),p=u=>{g.value.icon=u},d=()=>{g.value.icon=null},f=(u,l=null)=>{g.value.text=u==="enter"?l:null},_=async(u,l="svg")=>{let n=null;try{const r=t.iconComponents[u];if(!r){S.error("未找到对应的图标组件");return}n=document.createElement("div"),H(xe(r),n);const y=n.querySelector("svg");if(!y){S.error("渲染的组件不是有效的 SVG");return}if(l==="svg"){const x=y.outerHTML,N=new Blob([x],{type:"image/svg+xml;charset=utf-8"}),B=document.createElement("a");B.href=URL.createObjectURL(N),B.download=`${u}.svg`,B.click(),URL.revokeObjectURL(B.href),S.success(`已下载 SVG: ${u}`)}else if(l==="png"){const x=document.createElement("canvas"),N=x.getContext("2d"),B=200,q=200;x.width=B,x.height=q;const a=new XMLSerializer().serializeToString(y),v=new Blob([a],{type:"image/svg+xml;charset=utf-8"}),k=URL.createObjectURL(v),M=new Image;M.onload=()=>{N.clearRect(0,0,B,q),N.drawImage(M,0,0,B,q),URL.revokeObjectURL(k),x.toBlob(V=>{const R=document.createElement("a");R.href=URL.createObjectURL(V),R.download=`${u}.png`,R.click(),URL.revokeObjectURL(R.href),S.success(`已下载 PNG: ${u}`)},"image/png")},M.onerror=()=>{URL.revokeObjectURL(k),S.error("加载 SVG 时出错，无法生成 PNG")},M.src=k}else S.error("不支持的文件格式")}catch(r){console.error("下载图标失败",r),S.error("下载图标失败")}finally{n&&(H(null,n),n.remove())}};return(u,l)=>(i(),m("ul",Xt,[(i(!0),m(j,null,de(h.value,n=>(i(),m("li",{class:"group cursor-pointer",key:n.componentName,title:n.title,onClick:r=>s(n.componentName),onMouseenter:r=>p(n.componentName),onMouseleave:r=>d(n.componentName)},[o("div",eo,[n.isAlias?(i(),m("span",to,"Alias")):b("",!0),g.value.icon===n.componentName?(i(),m("div",oo,z(g.value.text||n.title),1)):b("",!0),(i(),Q(be(e.iconComponents[n.componentName]))),o("div",so,z(n.componentName),1),g.value.icon===n.componentName?(i(),m("div",no,[o("button",{onClick:D(r=>s(n.componentName),["stop"]),onMouseenter:l[0]||(l[0]=r=>f("enter","复制名称")),onMouseleave:l[1]||(l[1]=r=>f("leave"))},[C(qe)],40,ao),o("button",{onClick:D(r=>c(n.componentName),["stop"]),onMouseenter:l[2]||(l[2]=r=>f("enter","复制Vue")),onMouseleave:l[3]||(l[3]=r=>f("leave"))},[C(Gt)],40,lo),o("button",{onClick:D(r=>_(n.componentName),["stop"]),onMouseenter:l[4]||(l[4]=r=>f("enter","下载SVG")),onMouseleave:l[5]||(l[5]=r=>f("leave"))},[C(Jt,{class:"scale-125"})],40,ro),o("button",{onClick:D(r=>_(n.componentName,"png"),["stop"]),onMouseenter:l[6]||(l[6]=r=>f("enter","下载PNG")),onMouseleave:l[7]||(l[7]=r=>f("leave"))},[C(Ut,{class:"scale-125"})],40,io)])):b("",!0)])],40,Yt))),128))]))}},uo=L(co,[["__scopeId","data-v-2918325f"]]),O=e=>(re("data-v-90f81282"),e=e(),ie(),e),po=["width","height"],mo=Le('<defs data-v-90f81282><clipPath id="0558af64_a" data-v-90f81282><rect width="24" height="24" rx="0" data-v-90f81282></rect></clipPath><linearGradient x2=".939" y2="1.054" id="0558af64_b" data-v-90f81282><stop offset="0%" stop-color="#2882FF" data-v-90f81282></stop><stop offset="31.429%" stop-color="#5B65F5" data-v-90f81282></stop><stop offset="100%" stop-color="#B700FF" data-v-90f81282></stop></linearGradient><linearGradient x2="1.187" y2=".668" id="0558af64_c" data-v-90f81282><stop offset="0%" stop-color="#2882FF" data-v-90f81282></stop><stop offset="31.429%" stop-color="#5B65F5" data-v-90f81282></stop><stop offset="100%" stop-color="#B700FF" data-v-90f81282></stop></linearGradient><linearGradient x2="1.187" y2=".668" id="0558af64_d" data-v-90f81282><stop offset="0%" stop-color="#2882FF" data-v-90f81282></stop><stop offset="31.429%" stop-color="#5B65F5" data-v-90f81282></stop><stop offset="100%" stop-color="#B700FF" data-v-90f81282></stop></linearGradient><linearGradient x2="1.187" y2=".668" id="0558af64_e" data-v-90f81282><stop offset="0%" stop-color="#2882FF" data-v-90f81282></stop><stop offset="31.429%" stop-color="#5B65F5" data-v-90f81282></stop><stop offset="100%" stop-color="#B700FF" data-v-90f81282></stop></linearGradient><linearGradient x2="1.187" y2=".668" id="0558af64_f" data-v-90f81282><stop offset="0%" stop-color="#2882FF" data-v-90f81282></stop><stop offset="31.429%" stop-color="#5B65F5" data-v-90f81282></stop><stop offset="100%" stop-color="#B700FF" data-v-90f81282></stop></linearGradient><filter id="0558af64_g" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB" x="-.1" y="-.2" width="1.2" height="1.4" data-v-90f81282><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-90f81282></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-90f81282></feBlend><feGaussianBlur stdDeviation=".5" result="effect1_foregroundBlur" data-v-90f81282></feGaussianBlur></filter><linearGradient x1=".5" x2=".5" y2="1" id="0558af64_h" data-v-90f81282><stop offset="0%" stop-color="#A612FD" stop-opacity="0" data-v-90f81282></stop><stop offset="100%" stop-color="#5B65F5" stop-opacity=".5" data-v-90f81282></stop></linearGradient><filter id="0558af64_i" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB" x="-.05" y="-.1" width="1.1" height="1.2" data-v-90f81282><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-90f81282></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-90f81282></feBlend><feGaussianBlur stdDeviation=".25" result="effect1_foregroundBlur" data-v-90f81282></feGaussianBlur></filter><linearGradient x1=".5" x2=".5" y2="1" id="0558af64_j" data-v-90f81282><stop offset="0%" stop-color="#A612FD" stop-opacity="0" data-v-90f81282></stop><stop offset="91.429%" stop-color="#F200FF" stop-opacity="0" data-v-90f81282></stop><stop offset="100%" stop-color="#69C0FF" data-v-90f81282></stop></linearGradient></defs>',1),fo={"clip-path":"url(#0558af64_a)"},vo=O(()=>o("path",{d:"M16.209 6v12q0 .074.014.146.015.073.043.14.028.07.07.13.04.062.092.114.053.052.114.093.061.041.13.07.068.028.14.042.073.015.147.015t.146-.015q.072-.014.14-.042.069-.029.13-.07.062-.04.114-.093.052-.052.093-.114.041-.06.07-.13.028-.067.042-.14.015-.072.015-.146V6q0-.074-.015-.146-.014-.073-.042-.141-.029-.068-.07-.13-.04-.061-.093-.113-.052-.053-.114-.094-.061-.04-.13-.069-.068-.028-.14-.043-.072-.014-.146-.014t-.147.014q-.072.015-.14.043-.069.028-.13.07-.061.04-.114.093-.052.052-.093.113-.04.062-.07.13-.027.068-.042.14-.014.073-.014.147zm-4.322 7.125L10.02 7.628l-1.866 5.497h3.732zm.509 1.5l1.227 3.615v.001q.02.055.046.107.028.052.062.099.035.047.077.088.041.04.089.075.047.034.1.06.052.026.107.044.056.018.114.027.057.009.116.009.074 0 .146-.014.072-.015.14-.043.069-.028.13-.07.062-.04.114-.093.052-.052.093-.113.041-.062.07-.13.028-.068.042-.14.015-.073.015-.147 0-.124-.04-.241l-4.073-12q-.02-.055-.046-.107-.027-.052-.062-.099-.035-.047-.077-.088-.041-.04-.089-.075-.047-.034-.1-.06-.052-.026-.107-.044-.056-.018-.114-.027-.057-.009-.116-.009h-.479q-.058 0-.116.01-.058.008-.113.026-.056.018-.108.044t-.1.06q-.047.034-.089.075-.041.041-.076.088-.035.047-.062.099-.027.052-.046.107l-4.072 12q-.04.117-.04.241 0 .074.014.146.015.073.043.141.028.068.07.13.04.061.092.113.053.052.114.094.062.04.13.069.068.028.14.043.073.014.147.014.058 0 .116-.01.058-.008.113-.026.056-.018.108-.044t.1-.06q.047-.034.089-.075.041-.041.076-.088.035-.047.062-.099.027-.052.046-.107l1.227-3.616h4.75z","fill-rule":"evenodd",fill:"url(#0558af64_b)"},null,-1)),ho=O(()=>o("path",{id:"scan-bg",d:"M2 2h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z",fill:"url(#0558af64_h)",filter:"url(#0558af64_g)"},null,-1)),go=O(()=>o("path",{id:"scan-light",d:"M2 2h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z",fill:"url(#0558af64_j)",filter:"url(#0558af64_i)"},null,-1)),_o=O(()=>o("use",{href:"#scan-light"},null,-1)),wo=O(()=>o("use",{href:"#scan-light"},null,-1)),Co=[ho,go,_o,wo],yo=O(()=>o("g",null,[o("path",{d:"M4.5 2.75H7q.074 0 .146-.014.073-.015.141-.043.068-.028.13-.07.061-.04.113-.093.053-.052.094-.113.04-.062.069-.13.028-.068.043-.14.014-.073.014-.147t-.014-.146q-.015-.073-.043-.141-.028-.068-.07-.13-.04-.061-.093-.113-.052-.053-.113-.094-.062-.04-.13-.069-.068-.028-.14-.043Q7.073 1.25 7 1.25H4.5q-1.346 0-2.298.952T1.25 4.5v1.25q0 .074.014.146.015.073.043.141.028.068.07.13.04.061.093.113.052.053.113.094.062.04.13.069.068.028.14.043.073.014.147.014t.146-.014q.073-.015.141-.043.068-.028.13-.07.061-.04.113-.093.053-.052.094-.113.04-.062.069-.13.028-.068.043-.14.014-.073.014-.147V4.5q0-.725.513-1.237.512-.513 1.237-.513z","fill-rule":"evenodd",fill:"url(#0558af64_c)"}),o("path",{d:"M1.25 18.25q0-.074.014-.146.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014t.146.014q.073.015.141.043.068.028.13.07.061.04.113.093.053.052.094.113.04.062.069.13.028.068.043.14.014.073.014.147v1.25q0 .725.513 1.237.512.513 1.237.513H7q.074 0 .146.014.073.015.141.043.068.028.13.07.061.04.113.093.053.052.094.113.04.062.069.13.028.068.043.14.014.073.014.147t-.014.146q-.015.073-.043.141-.028.068-.07.13-.04.061-.093.113-.052.053-.113.094-.062.04-.13.069-.068.028-.14.043-.073.014-.147.014H4.5q-1.346 0-2.298-.952T1.25 19.5v-1.25z","fill-rule":"evenodd",fill:"url(#0558af64_d)"}),o("path",{d:"M17 1.25h2.5q1.346 0 2.298.952T22.75 4.5v1.25q0 .074-.014.146-.015.073-.043.141-.028.068-.07.13-.04.061-.093.113-.052.053-.113.094-.062.04-.13.069-.068.028-.14.043-.073.014-.147.014t-.146-.014q-.073-.015-.141-.043-.068-.028-.13-.07-.061-.04-.113-.093-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14-.014-.073-.014-.147V4.5q0-.725-.513-1.237-.512-.513-1.237-.513H17q-.074 0-.146-.014-.073-.015-.141-.043-.068-.028-.13-.07-.061-.04-.113-.093-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14-.014-.073-.014-.147t.014-.146q.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014z","fill-rule":"evenodd",fill:"url(#0558af64_e)"}),o("path",{d:"M21.25 18.25q0-.074.014-.146.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014t.146.014q.073.015.141.043.068.028.13.07.061.04.113.093.053.052.094.113.04.062.069.13.028.068.043.14.014.073.014.147v1.25q0 1.346-.952 2.298t-2.298.952H17q-.074 0-.146-.014-.073-.015-.141-.043-.068-.028-.13-.07-.061-.04-.113-.093-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14-.014-.073-.014-.147t.014-.146q.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014h2.5q.725 0 1.237-.513.513-.512.513-1.237v-1.25z","fill-rule":"evenodd",fill:"url(#0558af64_f)"})],-1)),ko={__name:"ai-scan-color-animation",props:{size:{type:[String,Number],default:"1em"}},setup(e){const t=e,s=$(null),c=$(!1),h=Be(null);P(()=>{h.value=X.timeline({repeat:-1,repeatDelay:0,paused:!0,onRepeat(){c.value||this.pause()}});const d=X.fromTo(s.value,{yPercent:-120,autoAlpha:0},{yPercent:120,duration:1.5,ease:"power2.inOut",keyframes:{"0%":{autoAlpha:0},"35%":{autoAlpha:1},"75%":{autoAlpha:1},"100%":{autoAlpha:0}}});h.value.add(d,0)});function g(d){c.value=!0,h.value.play()}function p(d){c.value=!1}return(d,f)=>(i(),m("span",{class:"ksw-icon ksw-icon-AiScanColorAnimation isAnimation",onMouseenter:g,onMouseleave:p},[(i(),m("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:t.size,height:t.size,viewBox:"0 0 24 24"},[mo,o("g",fo,[vo,o("g",{ref_key:"scan",ref:s},Co,512),yo])],8,po))],32))}},$o=L(ko,[["__scopeId","data-v-90f81282"]]),bo=Object.freeze(Object.defineProperty({__proto__:null,IconAiScanColorAnimation:$o},Symbol.toStringTag,{value:"Module"})),xo={Base:Me,Animation:bo},Bo=[{id:0,name:"ai-scan-color-animation.vue",alias:[],componentName:"IconAiScanColorAnimation",componentAlias:[],title:"",category:"animation",categoryCN:"动画",author:"KSW",tag:[],projectName:"animation",modifiedTime:"2025-04-09T08:43:37.000Z"}],Lo={class:"mx-auto mb-12 mt-6 flex max-w-7xl gap-6 px-4 sm:px-6 lg:px-8"},So={class:"sidebar sticky top-[84px] w-56 flex-shrink-0 overflow-auto overscroll-auto"},Io={class:"flex flex-col gap-1"},Mo=["onClick"],Fo={__name:"IconsItem",setup(e){const t=[...Ie,...Bo],c=Array.from(new Map(t.map(a=>[a.name,a])).values()).flatMap(a=>{const v={...a,isAlias:!1},k=(a.componentAlias||[]).map((M,V)=>({...a,componentName:M,name:`${a.name}-alias-${V}`,isAlias:!0}));return[v,...k]}),h=Object.values(xo).reduceRight((a,v)=>({...a,...v}),{}),g=$([]),p=$("date"),d=$("all"),f=$(!1),_=$(""),u=$("全部"),l=K(()=>{const a=t.map(v=>v.categoryCN);return["全部",...new Set(a)]}),n=()=>{let a=[...c];p.value==="date"?a.sort((v,k)=>new Date(k.modifiedTime)-new Date(v.modifiedTime)):a.sort((v,k)=>v.componentName.localeCompare(k.componentName)),d.value==="color"?a=a.filter(v=>v.componentName.includes("Color")):d.value==="monochrome"&&(a=a.filter(v=>!v.componentName.includes("Color"))),f.value&&(a=a.filter(v=>v.componentName.includes("Animation"))),u.value!=="全部"&&(a=a.filter(v=>v.categoryCN===u.value)),g.value=a.map(v=>({componentName:v.componentName,title:v.title,projectName:v.projectName,isAlias:v.isAlias}))};P(()=>{n()});const r=a=>{p.value=a,n()},y=a=>{d.value=a,n()},x=()=>{f.value=!f.value,n()},N=a=>{_.value=a},B=a=>{u.value=a,n()},q=K(()=>g.value.filter(a=>a.componentName.toLowerCase().includes(_.value.toLowerCase())));return(a,v)=>(i(),m(j,null,[C(rt,{id:"ToolBar",showColorIcons:d.value,showAnimationIcons:f.value,sortBy:p.value,searchQuery:_.value,onOnSortChange:r,onOnFilterColorIcons:y,onOnToggleAnimationIcons:x,onOnSearchChange:N},null,8,["showColorIcons","showAnimationIcons","sortBy","searchQuery"]),o("div",Lo,[o("aside",So,[o("ul",Io,[(i(!0),m(j,null,de(l.value,k=>(i(),m("li",{key:k},[o("div",{onClick:M=>B(k),class:T(["w-full cursor-pointer select-none rounded-lg px-3 py-2 text-sm font-normal text-slate-500 transition-all hover:bg-slate-50",{"is-active":u.value===k}])},z(k),11,Mo)]))),128))])]),C(uo,{icons:q.value,iconComponents:Se(h)},null,8,["icons","iconComponents"])])],64))}},Ao=L(Fo,[["__scopeId","data-v-207b48d9"]]);export{qe as I,Ao as a};
