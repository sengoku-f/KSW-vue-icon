import{o as u,a as m,b as o,r as C,l as he,m as D,q as ve,c as y,s as ge,v as _e,e as Z,x as T,y as ie,z as ce,A as de,B as Ce,C as V,E as we,F as ye,G as ke,j as Q,w as $e,f as Le,g as L,H as X,t as q,J as j,T as be,K,L as ue,M as xe,N as P,u as Y,Q as Be,R as pe,h as J,d as Me,i as Se}from"./utils-i_xkd1jO.js";import{g as z,B as Ie}from"./icons/group0-D4hbxg2-.js";const B=(e,t)=>{const s=e.__vccOpts||e;for(const[i,h]of t)s[i]=h;return s},Fe={},Ae={class:"ksw-icon"},Te=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"})],-1),Ge=[Te];function Ne(e,t){return u(),m("span",Ae,Ge)}const Oe=B(Fe,[["render",Ne]]),ze={},qe={class:"ksw-icon"},je=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})],-1),De=[je];function Re(e,t){return u(),m("span",qe,De)}const He=B(ze,[["render",Re]]),Pe={},Ve={class:"ksw-icon"},Ee=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})],-1),Ue=[Ee];function Ze(e,t){return u(),m("span",Ve,Ue)}const ee=B(Pe,[["render",Ze]]),R=e=>(ie("data-v-e039e7e4"),e=e(),ce(),e),Qe={class:"relative"},Ke={class:"ml-auto flex items-center gap-4 text-sm",role:"none"},We={class:"flex items-center gap-1 cursor-pointer select-none"},Je={class:"relative inline-block"},Xe=R(()=>o("option",{value:"all"},"全部",-1)),Ye=R(()=>o("option",{value:"monochrome"},"单色",-1)),e1=R(()=>o("option",{value:"color"},"彩色",-1)),t1=[Xe,Ye,e1],o1={class:"relative inline-block"},s1=R(()=>o("option",{value:"date"},"最新",-1)),n1=R(()=>o("option",{value:"name"},"默认",-1)),a1=[s1,n1],l1={__name:"ToolBar",props:{showColorIcons:String,sortBy:String,searchQuery:String},emits:["onSortChange","onFilterColorIcons","onToggleAnimationIcons","onSearchChange"],setup(e,{emit:t}){const s=e,i=t,h=C(s.searchQuery);he(h,r=>{i("onSearchChange",r)});const v=r=>{i("onSortChange",r.target.value)},c=r=>{const k=r.target.value;k==="all"?i("onFilterColorIcons","all"):k==="color"?i("onFilterColorIcons","color"):i("onFilterColorIcons","monochrome")},d=()=>{i("onToggleAnimationIcons")},f=C(!1),_=C(null),p=C(0),n=()=>{if(_.value){const r=_.value.getBoundingClientRect();f.value=r.top<=p.value}};function a(){p.value=0,n()}return D(()=>{const r=document==null?void 0:document.querySelector("div[data-overlayscrollbars-contents]");r==null||r.addEventListener("scroll",n),window==null||window.addEventListener("scroll",n),window==null||window.addEventListener("resize",a),a();const k=new ResizeObserver(a);k==null||k.observe(document==null?void 0:document.body)}),ve(()=>{window==null||window.removeEventListener("scroll",n),window==null||window.removeEventListener("resize",a)}),(r,k)=>(u(),m("div",{class:T(["sticky top-0 w-full bg-white my-4 z-10 transition-all",{"toolbar-bg border-b bg-white/50 backdrop-blur-xl shadow-sm":f.value}])},[o("div",{"aria-hidden":"false",ref_key:"targetDiv",ref:_,class:T([{"px-0":f.value},"mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8 gap-3 transition-all flex isolate items-center lg:gap-4"]),role:"tablist","aria-orientation":"horizontal"},[o("div",Qe,[y(He,{class:"pointer-events-none absolute !flex justify-center items-center h-full w-9 transition"}),ge(o("input",{type:"search","onUpdate:modelValue":k[0]||(k[0]=b=>h.value=b),"aria-label":"搜索所有图标",placeholder:"搜索所有图标…",class:"appearance-none block w-56 rounded-lg border border-slate-200 text-sm transition py-2 pl-8 pr-4 focus:outline-none shadow-sm"},null,512),[[_e,h.value]])]),o("div",Ke,[o("label",We,[o("input",{class:"size-4",type:"checkbox",onChange:d},null,32),Z(" 动画图标 ")]),o("div",Je,[o("select",{class:"appearance-none text-sm px-4 py-2 rounded-lg border hover:bg-slate-50 border-slate-200 cursor-pointer focus-visible:outline-none pr-8 transition",onChange:c},t1,32),y(ee,{class:"absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"})]),o("div",o1,[o("select",{class:"appearance-none text-sm px-4 py-2 rounded-lg border hover:bg-slate-50 border-slate-200 cursor-pointer focus-visible:outline-none pr-8 transition",onChange:v},a1,32),y(ee,{class:"absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"})])])],2)],2))}},r1=B(l1,[["__scopeId","data-v-e039e7e4"]]);var i1=Object.defineProperty,c1=Object.defineProperties,d1=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,u1=Object.prototype.hasOwnProperty,p1=Object.prototype.propertyIsEnumerable,oe=(e,t,s)=>t in e?i1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,S=(e,t)=>{for(var s in t||(t={}))u1.call(t,s)&&oe(e,s,t[s]);if(te)for(var s of te(t))p1.call(t,s)&&oe(e,s,t[s]);return e},G=(e,t)=>c1(e,d1(t));const me={},m1=function(e,t){me[e]=t},F=de({name:"Icon",props:{name:String,color:String},computed:{svg(){if(this.name)return me[this.name]}},render(e){const t=this.svg;if(!t)return console.warn(`The name of '${this.name}' could not be found.`),y("span",{class:"m-svg-icon"},null);const s={color:this.color?this.color:t.fill?t.fill:null};return y("span",{class:["m-svg-icon","m-svg-icon--"+this.name]},[y("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:t.viewBox,style:s,class:t.class},[t.defs&&y("defs",{innerHTML:t.defs},null),t.path&&y("path",{fill:"currentColor",d:t.path},null),t.html&&y("g",{innerHTML:t.html},null),this.$slots.default])])}});F.add=m1;const se={name:"error",fill:"#F56C6C",viewBox:"0 0 1024 1024",path:"M512,952C269,952,72,755,72,512S269,72,512,72s440,197,440,440S755,952,512,952z M579.7,512l101.6-101.6 c18.7-18.7,18.7-49,0-67.7c-18.7-18.7-49-18.7-67.7,0l0,0L512,444.3L410.4,342.7c-18.7-18.7-49-18.7-67.7,0s-18.7,49,0,67.7 L444.3,512L342.7,613.6c-18.7,18.7-18.7,49,0,67.7c18.7,18.7,49,18.7,67.7,0L512,579.7l101.6,101.6c18.7,18.7,49,18.7,67.7,0 c18.7-18.7,18.7-49,0-67.7L579.7,512z"},ne={name:"info",fill:"#1CADF2",viewBox:"0 0 1024 1024",path:"M512,72C269,72,72,269,72,512s197,440,440,440s440-197,440-440S755,72,512,72z M581,673.9 c-33.2,49.9-67,88.3-123.8,88.3c-38.8-6.3-54.7-34.1-46.3-62.4L484,457.6c1.8-5.9-1.2-12.3-6.6-14.2c-5.4-1.9-15.9,5.1-25.1,15.1 l-44.2,53.2c-1.2-8.9-0.1-23.7-0.1-29.6c33.2-49.9,87.8-89.2,124.8-89.2c35.2,3.6,51.8,31.7,45.7,62.6l-73.6,243.3 c-1,5.5,1.9,11.1,6.9,12.8c5.4,1.9,16.8-5.1,26-15.1l44.2-53.1C583,652.3,581,667.9,581,673.9z M571.2,357.6 c-28,0-50.6-20.4-50.6-50.4c0-30,22.7-50.3,50.6-50.3c28,0,50.6,20.4,50.6,50.3C621.8,337.3,599.1,357.6,571.2,357.6z"},ae={name:"success",fill:"#17B77E",viewBox:"0 0 1024 1024",path:"M512,72C269,72,72,269,72,512s197,440,440,440s440-197,440-440S755,72,512,72L512,72z M758.9,374 c-48.5,48.6-81.2,76.9-172.3,186.8c-52.6,63.4-102.3,131.5-102.7,132L462.1,720c-4.6,6.1-13.5,6.8-19.1,1.6L267.9,558.9 c-17.8-16.5-18.8-44.4-2.3-62.2s44.4-18.8,62.2-2.3l104.9,97.5c5.5,5.1,14.1,4.5,18.9-1.3c16.2-20.1,38.4-44.5,62.4-68.6 c90.2-90.9,145.6-139.7,175.2-161.3c36-26.2,77.3-48.6,87.3-36.2C792,343.9,782.5,350.3,758.9,374L758.9,374z"},le={name:"warning",fill:"#FFC603",viewBox:"0 0 1024 1024",path:"M512,952C269,952,72,755,72,512S269,72,512,72s440,197,440,440S755,952,512,952z M510,770.8 c30.4,0,55-24.6,55-55s-24.6-55-55-55s-55,24.6-55,55S479.6,770.8,510,770.8z M509.8,255.3c-39.3,0-71.2,31.9-71.2,71.2 c0,3.1,0.2,6.2,0.6,9.3L472.4,588c2.5,19.3,18.9,33.7,38.4,33.7c19.4,0,35.8-14.4,38.2-33.7l31.8-252.2c5-39.2-22.8-75-62-79.9 C515.9,255.5,512.8,255.3,509.8,255.3z"},re={name:"loading",viewBox:"0 0 50 50",html:'<g stroke="#f2f2f2" stroke-width="3.5"  stroke-linecap="round" fill="none"><circle cx="25" cy="25" r="20" class="m-loading-icon-bg-path"></circle><circle cx="25" cy="25" r="20" stroke="#20a0ff" stroke-dasharray="90, 150" stroke-dashoffset="0" class="m-loading-icon-active-path"><animate attributeName="stroke-dasharray" dur="1.5s" values="1,200;90,150;90,150" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" dur="1.5s" values="0;-40px;-120px" repeatCount="indefinite"/><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></circle></g>'};F.add(se.name,se);F.add(ne.name,ne);F.add(ae.name,ae);F.add(le.name,le);F.add(re.name,re);var f1=(e,t)=>{const s=e.__vccOpts||e;for(const[i,h]of t)s[i]=h;return s};function h1(e,t){const s=C(0);return s.value=window.setTimeout(e,t),{stop(){window.clearTimeout(s.value)}}}const v1=de({components:{Icon:F},name:"m-message",emits:["close","destroy","collapsed"],props:{id:String,type:{type:String,default:"info"},title:String,message:String,iconURL:String,duration:{type:Number,default:3e3},isCollapsed:Boolean,collapsable:Boolean,supportHTML:Boolean,width:String,className:String,wrapperClassName:String,closable:Boolean,stopTimerOnHover:{type:Boolean,default:!0}},setup(e,{expose:t,emit:s}){const i=we({visible:!0,collapsed:e.isCollapsed,timer:null});let h;const v=()=>{e.duration<0||({stop:h}=h1(()=>{d()},e.duration))},c=()=>{h==null||h()},d=()=>{i.visible=!1},f=()=>{i.collapsed=!i.collapsed,s("collapsed",i.collapsed)},_=()=>{i.visible=!1},p=()=>{e.stopTimerOnHover&&c()},n=()=>{e.stopTimerOnHover&&v()};return ye(()=>{c()}),D(()=>{v()}),t({close:d}),{state:i,handleClearTimer:p,handleStartTimer:n,triggerCollapse:f,handleClose:_}}}),g1=["id"],_1={key:0,class:"m-message-icons"},C1=["src"],w1={class:"m-message-content"},y1={key:0,class:"m-message--title"},k1=["innerHTML"],$1={key:0,class:"m-message--description"},L1={class:"m-message--control"},b1=o("svg",{viewBox:"0 0 35 35",width:"20",height:"20",version:"1.1",fill:"currentColor"},[o("path",{d:"M9.4,13.9c-0.2,0.2-0.2,0.6,0,0.8l8.1,8.1l0,0l0,0l8.1-8.1c0.2-0.2,0.2-0.6,0-0.8l-1.3-1.3 c-0.2-0.2-0.6-0.2-0.8,0l-5.5,5.5c-0.2,0.2-0.6,0.2-0.8,0l-5.5-5.5c-0.2-0.2-0.6-0.2-0.8,0L9.4,13.9z"})],-1),x1=[b1],B1=o("svg",{viewBox:"0 0 35 35",width:"20",height:"20",version:"1.1",fill:"currentColor"},[o("path",{d:"M19.5,17.5l5.1,5.1l-2,2l-5.1-5.1l-5.1,5.1l-2-2l5.1-5.1l-5.1-5.1l2-2l5.1,5.1l5.1-5.1l2,2L19.5,17.5z"})],-1),M1=[B1];function S1(e,t,s,i,h,v){const c=ke("icon");return u(),Q(be,{name:"m-message-fade",appear:"",mode:"in-out",onBeforeLeave:t[4]||(t[4]=d=>e.$emit("close")),onAfterLeave:t[5]||(t[5]=d=>e.$emit("destroy"))},{default:$e(()=>[e.state.visible?(u(),m("div",{key:0,class:T(["m-message-wrapper",e.wrapperClassName]),id:e.id,style:Le({width:e.width})},[o("div",{class:T(["m-message",e.className]),onMouseenter:t[2]||(t[2]=(...d)=>e.handleClearTimer&&e.handleClearTimer(...d)),onMouseleave:t[3]||(t[3]=(...d)=>e.handleStartTimer&&e.handleStartTimer(...d))},[e.iconURL||e.type?(u(),m("div",_1,[e.iconURL?(u(),m("img",{key:0,src:e.iconURL,class:"m-message--icon"},null,8,C1)):e.type?(u(),Q(c,{key:1,name:e.type,class:"m-message--icon"},null,8,["name"])):L("",!0)])):L("",!0),o("div",w1,[e.title||e.$slots.title?(u(),m("div",y1,[X(e.$slots,"title",{},()=>[Z(q(e.title),1)])])):L("",!0),e.supportHTML&&e.message?(u(),m(j,{key:1},[e.state.collapsed?L("",!0):(u(),m("div",{key:0,class:"m-message--description",innerHTML:e.message},null,8,k1))],64)):(u(),m(j,{key:2},[e.state.collapsed?L("",!0):(u(),m("div",$1,[X(e.$slots,"default",{},()=>[Z(q(e.message),1)])]))],64))]),o("div",L1,[e.collapsable&&(e.title||e.$slots.title)?(u(),m("button",{key:0,class:T(["m-message--button m-message--arrow-down",{"is-collapsed":e.state.collapsed}]),onClick:t[0]||(t[0]=(...d)=>e.triggerCollapse&&e.triggerCollapse(...d))},x1,2)):L("",!0),e.closable?(u(),m("button",{key:1,class:"m-message--button m-message--close",onClick:t[1]||(t[1]=(...d)=>e.handleClose&&e.handleClose(...d))},M1)):L("",!0)])],34)],14,g1)):L("",!0)]),_:3})}var I1=f1(v1,[["render",S1]]);const W=[];let F1=0;const U={};let fe={};const A1={stopTimerOnHover:!0,duration:3e3},w=e=>{const t="m-message-"+F1++,s=G(S(S(S({},A1),fe),e),{id:t});delete s.hasMask,delete s.position,delete s.zIndex;const i=e.position||"top-center",h=e.hasMask||!1,v=i+(h?"-mask":"");let c=U[v];c?c.count++:(c=U[v]={el:document.createElement("div"),count:1},c.el.className=["m-message-container","is-"+i,h?"has-mask":""].filter(function(n){return!!n}).join(" "),document.body.appendChild(c.el)),e.zIndex&&(c.el.style.zIndex=String(e.zIndex));let d=null;Ce(e.message)?(d={default:()=>e.message},s.message=""):typeof e.message=="function"&&(d={default:e.message},s.message="");const f=y(I1,s,d),_=document.createElement("div");f.appContext=e.ctx||w._context||null,f.props.onClose=e.onClose,f.props.onDestroy=()=>{c.count--,c.count===0&&(delete U[v],c.el.remove()),V(null,_)},V(f,_),i.indexOf("bottom")===0&&c.el.firstChild?c.el.insertBefore(_.firstElementChild,c.el.firstChild):c.el.appendChild(_.firstElementChild);const p={id:t,close(){var n,a;(a=(n=f==null?void 0:f.component)==null?void 0:n.exposed)==null||a.close()}};return W.push(p),p};w.success=(e,t)=>w(G(S({},t),{type:"success",message:e}));w.info=(e,t)=>w(G(S({},t),{type:"info",message:e}));w.warning=(e,t)=>w(G(S({},t),{type:"warning",message:e}));w.error=(e,t)=>w(G(S({},t),{type:"error",message:e}));w.loading=(e,t)=>w(G(S({},t),{type:"loading",message:e}));w.closeAll=function(){for(let e=W.length-1;e>=0;e--)W[e].close()};w.setDefault=e=>{fe=S({},e)};const T1=(e,t)=>(e.install=t,e);var M=T1(w,function(e,t={}){w._context=e._context,e.config.globalProperties["$"+(t.name||"mmessage")]=w,t.defaultOptions&&w.setDefault(t.defaultOptions)});const G1={},N1={class:"ksw-icon"},O1=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"})],-1),z1=[O1];function q1(e,t){return u(),m("span",N1,z1)}const j1=B(G1,[["render",q1]]),D1={},R1={class:"ksw-icon"},H1=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.6",stroke:"currentColor"},[o("path",{d:"M23,7.11111111 L20.5555556,7.11111111 C19.2055262,7.11111111 18.1111111,8.20552617 18.1111111,9.55555556 L18.1111111,14.4444444 C18.1111111,15.7944738 19.2055262,16.8888889 20.5555556,16.8888889 L23,16.8888889 L23,12 L21.7777778,12","stroke-linecap":"round","stroke-linejoin":"round"}),o("path",{d:"M1,16.8888889 L1,7.11111111 L3.44444444,7.11111111 C4.79447383,7.11111111 5.88888889,8.20552617 5.88888889,9.55555556 C5.88888889,10.9055849 4.79447383,12 3.44444444,12 L1,12","stroke-linecap":"round","stroke-linejoin":"round"}),o("polyline",{"stroke-linecap":"round","stroke-linejoin":"round",points:"9.55555556 16.8888889 9.55555556 7.11111111 14.4444444 16.8888889 14.4444444 7.11111111"})],-1),P1=[H1];function V1(e,t){return u(),m("span",R1,P1)}const E1=B(D1,[["render",V1]]),U1={},Z1={class:"ksw-icon"},Q1=o("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.6",stroke:"currentColor"},[o("path",{d:"M23,7.11111111 L20.5555556,7.11111111 C19.2055262,7.11111111 18.1111111,8.20552617 18.1111111,9.55555556 L18.1111111,14.4444444 C18.1111111,15.7944738 19.2055262,16.8888889 20.5555556,16.8888889 L23,16.8888889 L23,12 L21.7777778,12","stroke-linecap":"round","stroke-linejoin":"round"}),o("path",{d:"M5.88888889,7.11111111 L2.22222222,7.11111111 C1.54720753,7.11111111 1,7.65831864 1,8.33333333 L1,10.7777778 C1,11.4527925 1.54720753,12 2.22222222,12 L4.66666667,12 C5.34168136,12 5.88888889,12.5472075 5.88888889,13.2222222 L5.88888889,15.6666667 C5.88888889,16.3416814 5.34168136,16.8888889 4.66666667,16.8888889 L1,16.8888889","stroke-linecap":"round","stroke-linejoin":"round"}),o("polyline",{points:"9.55555556 7.11111111 11.3888889 16.8888889 12.6111111 16.8888889 14.4444444 7.11111111","stroke-linecap":"round","stroke-linejoin":"round"})],-1),K1=[Q1];function W1(e,t){return u(),m("span",Z1,K1)}const J1=B(U1,[["render",W1]]),X1={class:"wrapper"},Y1=["title","onClick","onMouseenter","onMouseleave"],et={class:"item"},tt={key:0,class:"alias-badge"},ot={key:1,class:"icon-text icon-title"},st={class:"icon-text"},nt={key:2,class:"icon-options"},at=["onClick"],lt=["onClick"],rt=["onClick"],it=["onClick"],ct={__name:"IconPreview",props:{icons:Array,iconComponents:Object},setup(e){const t=e,s=async p=>{await Y().toClipboard(p),M.success("已复制: "+p)},i=async p=>{await Y().toClipboard(`<${p} />`),M.success(`已复制 Vue 代码: <${p} />`)},h=K(()=>t.icons),v=C({icon:null,text:null}),c=p=>{v.value.icon=p},d=()=>{v.value.icon=null},f=(p,n=null)=>{v.value.text=p==="enter"?n:null},_=async(p,n="svg")=>{let a=null;try{const r=t.iconComponents[p];if(!r){M.error("未找到对应的图标组件");return}a=document.createElement("div"),V(Be(r),a);const k=a.querySelector("svg");if(!k){M.error("渲染的组件不是有效的 SVG");return}if(n==="svg"){const b=k.outerHTML,A=new Blob([b],{type:"image/svg+xml;charset=utf-8"}),x=document.createElement("a");x.href=URL.createObjectURL(A),x.download=`${p}.svg`,x.click(),URL.revokeObjectURL(x.href),M.success(`已下载 SVG: ${p}`)}else if(n==="png"){const b=document.createElement("canvas"),A=b.getContext("2d"),x=200,O=200;b.width=x,b.height=O;const l=new XMLSerializer().serializeToString(k),g=new Blob([l],{type:"image/svg+xml;charset=utf-8"}),$=URL.createObjectURL(g),I=new Image;I.onload=()=>{A.clearRect(0,0,x,O),A.drawImage(I,0,0,x,O),URL.revokeObjectURL($),b.toBlob(E=>{const H=document.createElement("a");H.href=URL.createObjectURL(E),H.download=`${p}.png`,H.click(),URL.revokeObjectURL(H.href),M.success(`已下载 PNG: ${p}`)},"image/png")},I.onerror=()=>{URL.revokeObjectURL($),M.error("加载 SVG 时出错，无法生成 PNG")},I.src=$}else M.error("不支持的文件格式")}catch(r){console.error("下载图标失败",r),M.error("下载图标失败")}finally{a&&(V(null,a),a.remove())}};return(p,n)=>(u(),m("ul",X1,[(u(!0),m(j,null,ue(h.value,a=>(u(),m("li",{class:"group cursor-pointer",key:a.componentName,title:a.title,onClick:r=>s(a.componentName),onMouseenter:r=>c(a.componentName),onMouseleave:r=>d(a.componentName)},[o("div",et,[a.isAlias?(u(),m("span",tt,"Alias")):L("",!0),v.value.icon===a.componentName?(u(),m("div",ot,q(v.value.text||a.title),1)):L("",!0),(u(),Q(xe(e.iconComponents[a.componentName]))),o("div",st,q(a.componentName),1),v.value.icon===a.componentName?(u(),m("div",nt,[o("button",{onClick:P(r=>s(a.componentName),["stop"]),onMouseenter:n[0]||(n[0]=r=>f("enter","复制名称")),onMouseleave:n[1]||(n[1]=r=>f("leave"))},[y(Oe)],40,at),o("button",{onClick:P(r=>i(a.componentName),["stop"]),onMouseenter:n[2]||(n[2]=r=>f("enter","复制Vue")),onMouseleave:n[3]||(n[3]=r=>f("leave"))},[y(j1)],40,lt),o("button",{onClick:P(r=>_(a.componentName),["stop"]),onMouseenter:n[4]||(n[4]=r=>f("enter","下载SVG")),onMouseleave:n[5]||(n[5]=r=>f("leave"))},[y(J1,{class:"scale-125"})],40,rt),o("button",{onClick:P(r=>_(a.componentName,"png"),["stop"]),onMouseenter:n[6]||(n[6]=r=>f("enter","下载PNG")),onMouseleave:n[7]||(n[7]=r=>f("leave"))},[y(E1,{class:"scale-125"})],40,it)])):L("",!0)])],40,Y1))),128))]))}},dt=B(ct,[["__scopeId","data-v-2918325f"]]),N=e=>(ie("data-v-26e12482"),e=e(),ce(),e),ut=["width","height"],pt=J('<defs data-v-26e12482><clipPath id="0558af64_a" data-v-26e12482><rect width="24" height="24" rx="0" data-v-26e12482></rect></clipPath><linearGradient x2=".939" y2="1.054" id="0558af64_b" data-v-26e12482><stop offset="0%" stop-color="#2882FF" data-v-26e12482></stop><stop offset="31.429%" stop-color="#5B65F5" data-v-26e12482></stop><stop offset="100%" stop-color="#B700FF" data-v-26e12482></stop></linearGradient><linearGradient x2="1.187" y2=".668" id="0558af64_c" data-v-26e12482><stop offset="0%" stop-color="#2882FF" data-v-26e12482></stop><stop offset="31.429%" stop-color="#5B65F5" data-v-26e12482></stop><stop offset="100%" stop-color="#B700FF" data-v-26e12482></stop></linearGradient><linearGradient x2="1.187" y2=".668" id="0558af64_d" data-v-26e12482><stop offset="0%" stop-color="#2882FF" data-v-26e12482></stop><stop offset="31.429%" stop-color="#5B65F5" data-v-26e12482></stop><stop offset="100%" stop-color="#B700FF" data-v-26e12482></stop></linearGradient><linearGradient x2="1.187" y2=".668" id="0558af64_e" data-v-26e12482><stop offset="0%" stop-color="#2882FF" data-v-26e12482></stop><stop offset="31.429%" stop-color="#5B65F5" data-v-26e12482></stop><stop offset="100%" stop-color="#B700FF" data-v-26e12482></stop></linearGradient><linearGradient x2="1.187" y2=".668" id="0558af64_f" data-v-26e12482><stop offset="0%" stop-color="#2882FF" data-v-26e12482></stop><stop offset="31.429%" stop-color="#5B65F5" data-v-26e12482></stop><stop offset="100%" stop-color="#B700FF" data-v-26e12482></stop></linearGradient><filter id="0558af64_g" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB" x="-.1" y="-.2" width="1.2" height="1.4" data-v-26e12482><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-26e12482></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-26e12482></feBlend><feGaussianBlur stdDeviation=".5" result="effect1_foregroundBlur" data-v-26e12482></feGaussianBlur></filter><linearGradient x1=".5" x2=".5" y2="1" id="0558af64_h" data-v-26e12482><stop offset="0%" stop-color="#A612FD" stop-opacity="0" data-v-26e12482></stop><stop offset="100%" stop-color="#5B65F5" stop-opacity=".5" data-v-26e12482></stop></linearGradient><filter id="0558af64_i" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB" x="-.05" y="-.1" width="1.1" height="1.2" data-v-26e12482><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-26e12482></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-26e12482></feBlend><feGaussianBlur stdDeviation=".25" result="effect1_foregroundBlur" data-v-26e12482></feGaussianBlur></filter><linearGradient x1=".5" x2=".5" y2="1" id="0558af64_j" data-v-26e12482><stop offset="0%" stop-color="#A612FD" stop-opacity="0" data-v-26e12482></stop><stop offset="91.429%" stop-color="#F200FF" stop-opacity="0" data-v-26e12482></stop><stop offset="100%" stop-color="#69C0FF" data-v-26e12482></stop></linearGradient></defs>',1),mt={"clip-path":"url(#0558af64_a)"},ft=N(()=>o("path",{d:"M16.209 6v12q0 .074.014.146.015.073.043.14.028.07.07.13.04.062.092.114.053.052.114.093.061.041.13.07.068.028.14.042.073.015.147.015t.146-.015q.072-.014.14-.042.069-.029.13-.07.062-.04.114-.093.052-.052.093-.114.041-.06.07-.13.028-.067.042-.14.015-.072.015-.146V6q0-.074-.015-.146-.014-.073-.042-.141-.029-.068-.07-.13-.04-.061-.093-.113-.052-.053-.114-.094-.061-.04-.13-.069-.068-.028-.14-.043-.072-.014-.146-.014t-.147.014q-.072.015-.14.043-.069.028-.13.07-.061.04-.114.093-.052.052-.093.113-.04.062-.07.13-.027.068-.042.14-.014.073-.014.147zm-4.322 7.125L10.02 7.628l-1.866 5.497h3.732zm.509 1.5l1.227 3.615v.001q.02.055.046.107.028.052.062.099.035.047.077.088.041.04.089.075.047.034.1.06.052.026.107.044.056.018.114.027.057.009.116.009.074 0 .146-.014.072-.015.14-.043.069-.028.13-.07.062-.04.114-.093.052-.052.093-.113.041-.062.07-.13.028-.068.042-.14.015-.073.015-.147 0-.124-.04-.241l-4.073-12q-.02-.055-.046-.107-.027-.052-.062-.099-.035-.047-.077-.088-.041-.04-.089-.075-.047-.034-.1-.06-.052-.026-.107-.044-.056-.018-.114-.027-.057-.009-.116-.009h-.479q-.058 0-.116.01-.058.008-.113.026-.056.018-.108.044t-.1.06q-.047.034-.089.075-.041.041-.076.088-.035.047-.062.099-.027.052-.046.107l-4.072 12q-.04.117-.04.241 0 .074.014.146.015.073.043.141.028.068.07.13.04.061.092.113.053.052.114.094.062.04.13.069.068.028.14.043.073.014.147.014.058 0 .116-.01.058-.008.113-.026.056-.018.108-.044t.1-.06q.047-.034.089-.075.041-.041.076-.088.035-.047.062-.099.027-.052.046-.107l1.227-3.616h4.75z","fill-rule":"evenodd",fill:"url(#0558af64_b)"},null,-1)),ht=N(()=>o("path",{id:"scan-bg",d:"M2 2h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z",fill:"url(#0558af64_h)",filter:"url(#0558af64_g)"},null,-1)),vt=N(()=>o("path",{id:"scan-light",d:"M2 2h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z",fill:"url(#0558af64_j)",filter:"url(#0558af64_i)"},null,-1)),gt=N(()=>o("use",{href:"#scan-light"},null,-1)),_t=N(()=>o("use",{href:"#scan-light"},null,-1)),Ct=[ht,vt,gt,_t],wt=N(()=>o("g",null,[o("path",{d:"M4.5 2.75H7q.074 0 .146-.014.073-.015.141-.043.068-.028.13-.07.061-.04.113-.093.053-.052.094-.113.04-.062.069-.13.028-.068.043-.14.014-.073.014-.147t-.014-.146q-.015-.073-.043-.141-.028-.068-.07-.13-.04-.061-.093-.113-.052-.053-.113-.094-.062-.04-.13-.069-.068-.028-.14-.043Q7.073 1.25 7 1.25H4.5q-1.346 0-2.298.952T1.25 4.5v1.25q0 .074.014.146.015.073.043.141.028.068.07.13.04.061.093.113.052.053.113.094.062.04.13.069.068.028.14.043.073.014.147.014t.146-.014q.073-.015.141-.043.068-.028.13-.07.061-.04.113-.093.053-.052.094-.113.04-.062.069-.13.028-.068.043-.14.014-.073.014-.147V4.5q0-.725.513-1.237.512-.513 1.237-.513z","fill-rule":"evenodd",fill:"url(#0558af64_c)"}),o("path",{d:"M1.25 18.25q0-.074.014-.146.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014t.146.014q.073.015.141.043.068.028.13.07.061.04.113.093.053.052.094.113.04.062.069.13.028.068.043.14.014.073.014.147v1.25q0 .725.513 1.237.512.513 1.237.513H7q.074 0 .146.014.073.015.141.043.068.028.13.07.061.04.113.093.053.052.094.113.04.062.069.13.028.068.043.14.014.073.014.147t-.014.146q-.015.073-.043.141-.028.068-.07.13-.04.061-.093.113-.052.053-.113.094-.062.04-.13.069-.068.028-.14.043-.073.014-.147.014H4.5q-1.346 0-2.298-.952T1.25 19.5v-1.25z","fill-rule":"evenodd",fill:"url(#0558af64_d)"}),o("path",{d:"M17 1.25h2.5q1.346 0 2.298.952T22.75 4.5v1.25q0 .074-.014.146-.015.073-.043.141-.028.068-.07.13-.04.061-.093.113-.052.053-.113.094-.062.04-.13.069-.068.028-.14.043-.073.014-.147.014t-.146-.014q-.073-.015-.141-.043-.068-.028-.13-.07-.061-.04-.113-.093-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14-.014-.073-.014-.147V4.5q0-.725-.513-1.237-.512-.513-1.237-.513H17q-.074 0-.146-.014-.073-.015-.141-.043-.068-.028-.13-.07-.061-.04-.113-.093-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14-.014-.073-.014-.147t.014-.146q.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014z","fill-rule":"evenodd",fill:"url(#0558af64_e)"}),o("path",{d:"M21.25 18.25q0-.074.014-.146.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014t.146.014q.073.015.141.043.068.028.13.07.061.04.113.093.053.052.094.113.04.062.069.13.028.068.043.14.014.073.014.147v1.25q0 1.346-.952 2.298t-2.298.952H17q-.074 0-.146-.014-.073-.015-.141-.043-.068-.028-.13-.07-.061-.04-.113-.093-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14-.014-.073-.014-.147t.014-.146q.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014h2.5q.725 0 1.237-.513.513-.512.513-1.237v-1.25z","fill-rule":"evenodd",fill:"url(#0558af64_f)"})],-1)),yt={__name:"ai-scan-color-animation",props:{size:{type:[String,Number],default:"1em"}},setup(e){const t=e,s=C(null),i=C(!1),h=pe(null);D(()=>{h.value=z.timeline({repeat:-1,repeatDelay:0,paused:!0,onRepeat(){i.value||this.pause()}});const d=z.fromTo(s.value,{yPercent:-120,autoAlpha:0},{yPercent:120,duration:1.5,ease:"power2.inOut",keyframes:{"0%":{autoAlpha:0},"35%":{autoAlpha:1},"75%":{autoAlpha:1},"100%":{autoAlpha:0}}});h.value.add(d,0)});function v(d){i.value=!0,h.value.play()}function c(d){i.value=!1}return(d,f)=>(u(),m("span",{class:"ksw-icon ksw-icon-AiScanColorAnimation",onMouseenter:v,onMouseleave:c},[(u(),m("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:t.size,height:t.size,viewBox:"0 0 24 24"},[pt,o("g",mt,[ft,o("g",{ref_key:"scan",ref:s},Ct,512),wt])],8,ut))],32))}},kt=B(yt,[["__scopeId","data-v-26e12482"]]),$t=["width","height"],Lt=J('<defs><linearGradient x1="-9.71445147e-14%" y1="-7.91033905e-14%" x2="100%" y2="100%" id="linearGradient-1"><stop stop-color="#2882FF" offset="0%"></stop><stop stop-color="#5B65F5" offset="33.97935%"></stop><stop stop-color="#B700FF" offset="100%"></stop></linearGradient><linearGradient x1="-9.71445147e-14%" y1="-7.91033905e-14%" x2="100%" y2="100%" id="linearGradient-2"><stop stop-color="#28DBFF" offset="0%"></stop><stop stop-color="#995BF5" offset="44.4569398%"></stop><stop stop-color="#D900FF" offset="100%"></stop></linearGradient><linearGradient x1="-9.71445147e-14%" y1="-7.91033905e-14%" x2="100%" y2="100%" id="linearGradient-3"><stop stop-color="#3328FF" offset="0%"></stop><stop stop-color="#ED5BF5" offset="49.4645979%"></stop><stop stop-color="#FFDD00" offset="100%"></stop></linearGradient></defs>',1),bt={id:"sparkles-color-animation",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"},xt=o("path",{d:"M9.813,15.904 L9,18.75 L8.187,15.904 C7.75980789,14.4094508 6.59154924,13.2411921 5.097,12.814 L2.25,12 L5.096,11.187 C6.59054924,10.7598079 7.75880789,9.59154924 8.186,8.097 L9,5.25 L9.813,8.096 C10.2401921,9.59054924 11.4084508,10.7588079 12.903,11.186 L15.75,12 L12.904,12.813 C11.4094508,13.2401921 10.2411921,14.4084508 9.814,15.903 L9.813,15.904 Z",stroke:"url(#linearGradient-1)",fill:"url(#linearGradient-1)"},null,-1),Bt=o("path",{d:"M18.259,8.715 L18,9.75 L17.741,8.715 C17.4389168,7.50583806 16.4950388,6.56157565 15.286,6.259 L14.25,6 L15.286,5.741 C16.4950388,5.43842435 17.4389168,4.49416194 17.741,3.285 L18,2.25 L18.259,3.285 C18.5612535,4.49442443 19.5055756,5.4387465 20.715,5.741 L21.75,6 L20.715,6.259 C19.5055756,6.5612535 18.5612535,7.50557557 18.259,8.715 Z",stroke:"url(#linearGradient-2)",fill:"url(#linearGradient-2)"},null,-1),Mt=o("path",{d:"M16.894,20.567 L16.5,21.75 L16.106,20.567 C15.8820448,19.8951539 15.3548461,19.3679552 14.683,19.144 L13.5,18.75 L14.683,18.356 C15.3548461,18.1320448 15.8820448,17.6048461 16.106,16.933 L16.5,15.75 L16.894,16.933 C17.1179552,17.6048461 17.6451539,18.1320448 18.317,18.356 L19.5,18.75 L18.317,19.144 C17.6451539,19.3679552 17.1179552,19.8951539 16.894,20.567 Z",stroke:"url(#linearGradient-3)",fill:"url(#linearGradient-3)"},null,-1),St=[xt,Bt,Mt],It=o("path",{d:"M9.813,15.904 L9,18.75 L8.187,15.904 C7.75980789,14.4094508 6.59154924,13.2411921 5.097,12.814 L2.25,12 L5.096,11.187 C6.59054924,10.7598079 7.75880789,9.59154924 8.186,8.097 L9,5.25 L9.813,8.096 C10.2401921,9.59054924 11.4084508,10.7588079 12.903,11.186 L15.75,12 L12.904,12.813 C11.4094508,13.2401921 10.2411921,14.4084508 9.814,15.903 L9.813,15.904 Z",stroke:"url(#linearGradient-1)"},null,-1),Ft=o("path",{d:"M18.259,8.715 L18,9.75 L17.741,8.715 C17.4389168,7.50583806 16.4950388,6.56157565 15.286,6.259 L14.25,6 L15.286,5.741 C16.4950388,5.43842435 17.4389168,4.49416194 17.741,3.285 L18,2.25 L18.259,3.285 C18.5612535,4.49442443 19.5055756,5.4387465 20.715,5.741 L21.75,6 L20.715,6.259 C19.5055756,6.5612535 18.5612535,7.50557557 18.259,8.715 Z",stroke:"url(#linearGradient-2)"},null,-1),At=o("path",{d:"M16.894,20.567 L16.5,21.75 L16.106,20.567 C15.8820448,19.8951539 15.3548461,19.3679552 14.683,19.144 L13.5,18.75 L14.683,18.356 C15.3548461,18.1320448 15.8820448,17.6048461 16.106,16.933 L16.5,15.75 L16.894,16.933 C17.1179552,17.6048461 17.6451539,18.1320448 18.317,18.356 L19.5,18.75 L18.317,19.144 C17.6451539,19.3679552 17.1179552,19.8951539 16.894,20.567 Z",stroke:"url(#linearGradient-3)"},null,-1),Tt=[It,Ft,At],Gt=J('<path d="M19.75,2.75 C20.3022847,2.75 20.75,3.19771525 20.75,3.75 C20.75,3.19771525 21.1977153,2.75 21.75,2.75 C21.1977153,2.75 20.75,2.30228475 20.75,1.75 C20.75,2.30228475 20.3022847,2.75 19.75,2.75 Z"></path><path d="M13.25,9.25 C13.8022847,9.25 14.25,9.69771525 14.25,10.25 C14.25,9.69771525 14.6977153,9.25 15.25,9.25 C14.6977153,9.25 14.25,8.80228475 14.25,8.25 C14.25,8.80228475 13.8022847,9.25 13.25,9.25 Z"></path><path d="M3.25,4.25 C4.3545695,4.25 5.25,5.1454305 5.25,6.25 C5.25,5.1454305 6.1454305,4.25 7.25,4.25 C6.1454305,4.25 5.25,3.3545695 5.25,2.25 C5.25,3.3545695 4.3545695,4.25 3.25,4.25 Z"></path><path d="M6.00441063,7 C6.55669538,7 7.00441063,7.44771525 7.00441063,8 C7.00441063,7.44771525 7.45212588,7 8.00441063,7 C7.45212588,7 7.00441063,6.55228475 7.00441063,6 C7.00441063,6.55228475 6.55669538,7 6.00441063,7 Z"></path><path d="M20.75,21.25 C21.3022847,21.25 21.75,21.6977153 21.75,22.25 C21.75,21.6977153 22.1977153,21.25 22.75,21.25 C22.1977153,21.25 21.75,20.8022847 21.75,20.25 C21.75,20.8022847 21.3022847,21.25 20.75,21.25 Z"></path><path d="M3.25,19.75 C4.07842712,19.75 4.75,20.4215729 4.75,21.25 C4.75,20.4215729 5.42157288,19.75 6.25,19.75 C5.42157288,19.75 4.75,19.0784271 4.75,18.25 C4.75,19.0784271 4.07842712,19.75 3.25,19.75 Z"></path><path d="M17.75,13.75 C18.8545695,13.75 19.75,14.6454305 19.75,15.75 C19.75,14.6454305 20.6454305,13.75 21.75,13.75 C20.6454305,13.75 19.75,12.8545695 19.75,11.75 C19.75,12.8545695 18.8545695,13.75 17.75,13.75 Z"></path>',7),Nt=[Gt],Ot={__name:"sparkles-color-animation",props:{size:{type:[String,Number],default:"1em"}},setup(e){const t=e,s=C(null),i=C(null),h=C(null),v=C(!1),c=pe(null),d=C(null);D(()=>{c.value=z.timeline({paused:!0}).add("hoverStart").fromTo(s.value.children,{autoAlpha:0},{autoAlpha:1,duration:.1}).fromTo(i.value.children,{autoAlpha:1},{autoAlpha:0,duration:1},"<").addLabel("loop").to(s.value.children,{keyframes:{"0%":{autoAlpha:1,scale:1},"50%":{autoAlpha:.7,scale:.9},"100%":{autoAlpha:1,scale:1}},transformOrigin:"center center",repeat:-1,duration:2,stagger:.1,onRepeat:()=>{v.value||c.value.pause(0)}},">"),z.set(h.value.children,{scale:0,y:"random(2,3)",rotation:-90}),d.value=z.to(h.value.children,{keyframes:{"0%":{scale:0},"10%":{rotation:-90},"50%":{scale:.7},"100%":{scale:0,rotation:"random([-180,45])",y:"random(-2,0)"}},transformOrigin:"center center",duration:1.5,stagger:.1,paused:!0,ease:"power3.out"})});const f=p=>{v.value=!0,c.value.play(0),d.value.play(0)},_=p=>{v.value=!1,c.value.reverse(.1)};return(p,n)=>(u(),m("span",{class:"ksw-icon ksw-icon-SparklesColorAnimation",onMouseenter:f,onMouseleave:_},[(u(),m("svg",{width:t.size,height:t.size,viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[Lt,o("g",bt,[o("g",{ref_key:"fill",ref:s,"stroke-width":"1.5"},St,512),o("g",{ref_key:"stroke",ref:i,"stroke-width":"1.5"},Tt,512),o("g",{ref_key:"decoration",ref:h,stroke:"url(#linearGradient-1)"},Nt,512)])],8,$t))],32))}},zt=Object.freeze(Object.defineProperty({__proto__:null,IconAiScanColorAnimation:kt,IconSparklesColorAnimation:Ot},Symbol.toStringTag,{value:"Module"})),qt={Base:Ie,Animation:zt},jt=[{id:0,name:"ai-scan-color-animation.vue",alias:[],componentName:"IconAiScanColorAnimation",componentAlias:[],title:"",category:"animation",categoryCN:"动画",author:"KSW",tag:[],projectName:"animation",modifiedTime:"2025-04-14T03:03:28.000Z"},{id:1,name:"sparkles-color-animation.vue",alias:[],componentName:"IconSparklesColorAnimation",componentAlias:[],title:"",category:"animation",categoryCN:"动画",author:"KSW",tag:[],projectName:"animation",modifiedTime:"2025-04-14T03:03:28.000Z"}],Dt={class:"mx-auto mb-12 mt-6 flex max-w-7xl gap-6 px-4 sm:px-6 lg:px-8"},Rt={class:"sidebar sticky top-[84px] w-56 flex-shrink-0 overflow-auto overscroll-auto"},Ht={class:"flex flex-col gap-1"},Pt=["onClick"],Vt={__name:"IconsItem",setup(e){const t=[...Se,...jt],i=Array.from(new Map(t.map(l=>[l.name,l])).values()).flatMap(l=>{const g={...l,isAlias:!1},$=(l.componentAlias||[]).map((I,E)=>({...l,componentName:I,name:`${l.name}-alias-${E}`,isAlias:!0}));return[g,...$]}),h=Object.values(qt).reduceRight((l,g)=>({...l,...g}),{}),v=C([]),c=C("date"),d=C("all"),f=C(!1),_=C(""),p=C("全部"),n=K(()=>{const l=t.map(g=>g.categoryCN);return["全部",...new Set(l)]}),a=()=>{let l=[...i];c.value==="date"?l.sort((g,$)=>new Date($.modifiedTime)-new Date(g.modifiedTime)):l.sort((g,$)=>g.componentName.localeCompare($.componentName)),d.value==="color"?l=l.filter(g=>g.componentName.includes("Color")):d.value==="monochrome"&&(l=l.filter(g=>!g.componentName.includes("Color"))),f.value&&(l=l.filter(g=>g.componentName.includes("Animation"))),p.value!=="全部"&&(l=l.filter(g=>g.categoryCN===p.value)),v.value=l.map(g=>({componentName:g.componentName,title:g.title,projectName:g.projectName,isAlias:g.isAlias}))};D(()=>{a()});const r=l=>{c.value=l,a()},k=l=>{d.value=l,a()},b=()=>{f.value=!f.value,a()},A=l=>{_.value=l},x=l=>{p.value=l,a()},O=K(()=>v.value.filter(l=>l.componentName.toLowerCase().includes(_.value.toLowerCase())));return(l,g)=>(u(),m(j,null,[y(r1,{id:"ToolBar",showColorIcons:d.value,showAnimationIcons:f.value,sortBy:c.value,searchQuery:_.value,onOnSortChange:r,onOnFilterColorIcons:k,onOnToggleAnimationIcons:b,onOnSearchChange:A},null,8,["showColorIcons","showAnimationIcons","sortBy","searchQuery"]),o("div",Dt,[o("aside",Rt,[o("ul",Ht,[(u(!0),m(j,null,ue(n.value,$=>(u(),m("li",{key:$},[o("div",{onClick:I=>x($),class:T(["w-full cursor-pointer select-none rounded-lg px-3 py-2 text-sm font-normal text-slate-500 transition-all hover:bg-slate-50",{"is-active":p.value===$}])},q($),11,Pt)]))),128))])]),y(dt,{icons:O.value,iconComponents:Me(h)},null,8,["icons","iconComponents"])])],64))}},Zt=B(Vt,[["__scopeId","data-v-207b48d9"]]);export{Oe as I,Zt as a};
