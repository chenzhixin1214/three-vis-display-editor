(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r={app:0},a=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d7111":"51781258","chunk-2d0f0a02":"14a3a592","chunk-4eb75ac9":"eacc0d56","chunk-063a9226":"5388ce7b","chunk-236f0b78":"e789ac60","chunk-868e338a":"668a5906"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-063a9226":1,"chunk-236f0b78":1,"chunk-868e338a":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-2d0d7111":"31d6cfe0","chunk-2d0f0a02":"31d6cfe0","chunk-4eb75ac9":"31d6cfe0","chunk-063a9226":"59236030","chunk-236f0b78":"4a8be0cf","chunk-868e338a":"499e6b02"}[t]+".css",r=c.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[t],f.parentNode.removeChild(f),n(a)},f.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){i[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://shiotsukikaedesari.gitee.io/mmddisplaydevice/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d20":function(t,e,n){"use strict";var o=n("89e9"),i=n.n(o);i.a},"0efc":function(t,e,n){"use strict";var o=n("b411"),i=n.n(o);i.a},"11a4":function(t,e,n){"use strict";var o=n("bc96"),i=n.n(o);i.a},"19ab":function(t,e){t.exports={state:{sign:"",mouseX:"",mouseY:"",mousemoveX:"",mousemoveY:"",dragBoxMaskStatus:!1,dragBoxMaskCursor:"ew-resize"},getters:{getDragSign:function(t){return t.sign},getDragBoxMaskStatus:function(t){return t.dragBoxMaskStatus},getDragBoxMaskCursor:function(t){return t.dragBoxMaskCursor}},mutations:{setDragBoxMaskStatus:function(t,e){t.dragBoxMaskStatus=e.status,t.dragBoxMaskCursor=e.cursor,t.mouseX=e.mouseX||"",t.mouseY=e.mouseY||"",t.sign=e.sign||""},setMovePosition:function(t,e){t.mousemoveX=e.mousemoveX-t.mouseX,t.mousemoveY=e.mousemoveY-t.mouseY}},actions:{}}},"1dd2":function(t,e,n){},"225e":function(t,e,n){"use strict";var o=n("f5ad"),i=n.n(o);i.a},"3e58":function(t,e,n){},"3f22":function(t,e,n){"use strict";var o=n("ca20"),i=n.n(o);i.a},"41f1":function(t,e,n){},"43b6":function(t,e,n){},4547:function(t,e,n){},"4a55":function(t,e,n){},"4c7e":function(t,e,n){},"52d1":function(t,e,n){"use strict";var o=n("4a55"),i=n.n(o);i.a},"567f":function(t,e){t.exports={test:function(){console.log(1)}}},"56d7":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("5c96"),i=n.n(o),r=(n("0fae"),n("5488")),a=n.n(r),s=(n("4c7e"),n("1dd2"),n("a026")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-container",style:{"font-size":t.size,color:t.color}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":t.code}})])])},u=[],l={name:"mmd-icon",props:{code:{type:String},size:{type:String},color:{type:String}},data:function(){return{}},mounted:function(){},beforeDestroy:function(){}},d=l,f=(n("0d20"),n("2877")),g=Object(f["a"])(d,c,u,!1,null,null,null),m=g.exports,h=function(t){t.component(m.name,m)},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress-container"},[n("el-dialog",{attrs:{title:"正在加载："+t.name,visible:t.visible,width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,center:""},on:{"update:visible":function(e){t.visible=e}}},[n("el-progress",{attrs:{"stroke-width":10,percentage:t.percentage,color:t.colors}})],1)],1)},v=[],b={name:"mmd-progress",data:function(){return{name:"",visible:!1,percentage:0,colors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]}},methods:{showProgress:function(){var t=this;this.percentage=0,this.$nextTick((function(){t.visible=!0}))},setName:function(t){this.name=t},setPercentage:function(t){this.percentage=t},setColor:function(t){this.color=t}},watch:{percentage:function(t,e){var n=this;t>=100&&setTimeout((function(){n.visible=!1}),2e3)}}},x=b,B=Object(f["a"])(x,p,v,!1,null,"44bb3fed",null),S=B.exports,w=s["default"].extend(S);S.init=function(){var t=new w({el:document.createElement("div")});return document.body.appendChild(t.$el),t};var C=S,D=function(t){t.component(C.name,C)};s["default"].use(h),s["default"].use(D);var y=n("567f"),k=n.n(y),_=new s["default"],z=_,$=(n("d3b7"),n("bc3a")),E=n.n($),j={},O=E.a.create(j);O.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),O.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=O,window.axios=O,Object.defineProperties(t.prototype,{axios:{get:function(){return O}},$axios:{get:function(){return O}}})},s["default"].use(Plugin);Plugin;var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("editor")],1)},M=[],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"eidtor-container"},[n("div",{staticClass:"editor-top",style:{height:t.$store.getters.getTopNavHeight}},[n("top-nav")],1),n("div",{staticClass:"editor-middle"},[n("drag-box",{attrs:{rightDrag:"",width:t.leftDragBoxWidth,height:t.middleDragBoxHeight,sign:"left"}},[[n("left-nav")]],2),n("div",{ref:"editor-view",staticClass:"editor-view",style:{width:t.editorViewWidth+"px",height:t.editorViewHeight+"px"}},[n("editor-view",{attrs:{width:t.editorViewWidth,height:t.editorViewHeight}})],1),n("drag-box",{attrs:{leftDrag:"",width:t.rightDragBoxWidth,height:t.middleDragBoxHeight,sign:"right"}},[[n("right-nav")]],2)],1),n("div",{ref:"bottomBox",staticClass:"editor-bottom"},[n("drag-box",{attrs:{topDrag:"",height:t.bottomDragBoxHeight,sign:"bottom"}},[[n("bottom-nav")]],2)],1),n("drag-box-mask")],1)},P=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dragBox-contaner",style:{width:t.width,height:t.height}},[t.topDrag?n("div",{staticClass:"dragBox-topDrag",on:{mousedown:function(e){return t.dragStart(e,"top")}}},[n("dragSignalRow")],1):t._e(),n("div",{staticClass:"dragBox-middleBox"},[t.leftDrag?n("div",{staticClass:"dragBox-leftDrag",on:{mousedown:function(e){return t.dragStart(e,"left")}}},[n("dragSignalColumn")],1):t._e(),n("div",{staticClass:"dragBox-display"},[t._t("default")],2),t.rightDrag?n("div",{staticClass:"dragBox-rightDrag",on:{mousedown:function(e){return t.dragStart(e,"right")}}},[n("dragSignalColumn")],1):t._e()]),t.bottomDrag?n("div",{staticClass:"dragBox-bottomDrag",on:{mousedown:function(e){return t.dragStart(e,"bottom")}}},[n("dragSignalRow")],1):t._e()])},H=[],T={props:{sign:{type:String},width:{type:String,default:"100%"},height:{type:String,default:"100%"},topDrag:{type:Boolean,default:!1},leftDrag:{type:Boolean,default:!1},rightDrag:{type:Boolean,default:!1},bottomDrag:{type:Boolean,default:!1}},components:{dragSignalRow:{template:'\n      <div class="dragBox-dragSignalRow">\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n      '},dragSignalColumn:{template:'\n      <div class="dragBox-dragSignalColumn">\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n      '}},data:function(){return{}},methods:{dragStart:function(t,e){"right"===e||"left"===e?this.$store.commit("setDragBoxMaskStatus",{status:!0,cursor:"ew-resize",mouseX:t.clientX,mouseY:t.clientY,sign:this.sign}):(console.log(1),this.$store.commit("setDragBoxMaskStatus",{status:!0,cursor:"ns-resize",mouseX:t.clientX,mouseY:t.clientY,sign:this.sign}))}}},X=T,Y=(n("11a4"),Object(f["a"])(X,W,H,!1,null,"4e5b0f24",null)),A=Y.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.draging,expression:"draging"}],staticClass:"dragBoxMask-container",style:{cursor:t.dragCursor},on:{mouseup:t.dragEnd,mousemove:t.mousemove}})},G=[],R={data:function(){return{}},computed:{draging:function(){return this.$store.getters.getDragBoxMaskStatus},dragCursor:function(){return this.$store.getters.getDragBoxMaskCursor}},methods:{dragEnd:function(t){this.$store.commit("setDragBoxMaskStatus",{status:!1,cursor:"unset"})},mousemove:function(t){this.$store.commit("setMovePosition",{mousemoveX:t.clientX,mousemoveY:t.clientY})}}},q=R,J=(n("59f8"),Object(f["a"])(q,L,G,!1,null,"02c1a65c",null)),K=J.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topNav-container"},[n("top-config"),n("help-document"),n("notice")],1)},I=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topConfig-container"},t._l(t.config,(function(e){return n("el-dropdown",{key:e.name,attrs:{trigger:"click",placement:"bottom-start"},on:{command:t.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("mmd-icon",{attrs:{code:e.icon}}),n("span",{domProps:{textContent:t._s(e.desp)}})],1),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(e.operate,(function(e){return n("el-dropdown-item",{key:e.name,attrs:{command:e.run}},[n("span",{staticClass:"operate-name",domProps:{textContent:t._s(e.desp)}}),n("span",{staticClass:"key-combination",domProps:{textContent:t._s(t.getKeyCombination(e.shortcut))}})])})),1)],1)})),1)},Q=[],Z=(n("4160"),n("fb6a"),n("159b"),{computed:{config:function(){return this.$store.getters.getTopConfig}},methods:{getKeyCombination:function(t){if(t[0]){var e="";return t.forEach((function(t){e+="".concat(t," + ")})),e=e.slice(0,-3),e}},handleCommand:function(t){t&&t()}}}),tt=Z,et=(n("618e"),Object(f["a"])(tt,U,Q,!1,null,"369b6e70",null)),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notice-container"},[n("el-dialog",{attrs:{title:"更新公告",width:"500px",center:"",visible:t.$store.state.topNav.noticeVisible},on:{"update:visible":function(e){return t.$set(t.$store.state.topNav,"noticeVisible",e)}}},[n("el-card",{staticClass:"box-card",attrs:{shadow:"never","body-style":{padding:0}}},t._l(t.notice,(function(e,o){return n("div",{key:e,staticClass:"notice-item",domProps:{textContent:t._s(o+1+"、"+e)}})})),0)],1)],1)},it=[],rt={data:function(){return{notice:["增加模型载入","增加场景载入"]}}},at=rt,st=(n("8ac5"),Object(f["a"])(at,ot,it,!1,null,"ab4dc9fa",null)),ct=st.exports,ut=function(){return n.e("chunk-2d0d7111").then(n.bind(null,"74db"))},lt={components:{topConfig:nt,helpDocument:ut,notice:ct}},dt=lt,ft=(n("3f22"),Object(f["a"])(dt,F,I,!1,null,"0e9f980d",null)),gt=ft.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"leftNav-container"},[n("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"基础元件",name:"first"}},[n("basic-element")],1),n("el-tab-pane",{attrs:{label:"插件库",name:"second"}},[n("plugins-library")],1),n("el-tab-pane",{attrs:{label:"模型库",name:"third"}},[n("models-library")],1)],1)],1)},ht=[],pt=function(){return Promise.all([n.e("chunk-4eb75ac9"),n.e("chunk-236f0b78")]).then(n.bind(null,"bf3e"))},vt=function(){return Promise.all([n.e("chunk-4eb75ac9"),n.e("chunk-063a9226")]).then(n.bind(null,"a449"))},bt=function(){return n.e("chunk-2d0f0a02").then(n.bind(null,"9cbd"))},xt={data:function(){return{activeName:"first"}},components:{basicElement:pt,modelsLibrary:vt,pluginsLibrary:bt}},Bt=xt,St=(n("df7b"),Object(f["a"])(Bt,mt,ht,!1,null,"f7d127b8",null)),wt=St.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"leftNav-container"},[n("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"材质",name:"first"}},[t._v("材质")]),n("el-tab-pane",{attrs:{label:"图层结构",name:"second"}},[t._v("图层结构")]),n("el-tab-pane",{attrs:{label:"专属配置",name:"third"}},[t._v("专属配置")])],1)],1)},Dt=[],yt={data:function(){return{activeName:"first"}}},kt=yt,_t=Object(f["a"])(kt,Ct,Dt,!1,null,"5ca8b3f3",null),zt=_t.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottomNav-container"},[n("operation-control",{attrs:{width:t.operationControlSetting.size}}),n("track-control")],1)},Et=[],jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"operatonControl-container"},[n("drag-box",{attrs:{rightDrag:"",sign:"operation",width:t.width+"px"}},[[n("operation-general"),n("operation-main")]],2)],1)},Ot=[],Nt=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"operationGeneral-container"},[t._v(" 总览 ")])}),Mt=[],Vt={},Pt=Vt,Wt=(n("c2d1"),Object(f["a"])(Pt,Nt,Mt,!1,null,"5c7a1b83",null)),Ht=Wt.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"operationMain-container"},[t._v(" 主要配置层 ")])},Xt=[],Yt={},At=Yt,Lt=(n("f67e"),Object(f["a"])(At,Tt,Xt,!1,null,"0d81f61e",null)),Gt=Lt.exports,Rt={props:{width:Number},components:{dragBox:A,operationGeneral:Ht,operationMain:Gt}},qt=Rt,Jt=(n("89de"),Object(f["a"])(qt,jt,Ot,!1,null,"04619140",null)),Kt=Jt.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trackControl-container"},[n("time-axis"),n("render-area"),n("keyframe-track"),n("assist-track")],1)},It=[],Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeAxis-container"},[t._v(" 时间轴 ")])},Qt=[],Zt={},te=Zt,ee=(n("eb46"),Object(f["a"])(te,Ut,Qt,!1,null,"633f0f7e",null)),ne=ee.exports,oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"renderArea-container"},[t._v(" 渲染区域 ")])},ie=[],re={},ae=re,se=(n("52d1"),Object(f["a"])(ae,oe,ie,!1,null,"410cdd55",null)),ce=se.exports,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"keyfraneTrack-container"},[t._v(" 帧轨 ")])},le=[],de={},fe=de,ge=(n("f565"),Object(f["a"])(fe,ue,le,!1,null,"de1e5324",null)),me=ge.exports,he=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"assistTrack-container"},[t._v(" 辅助轨道 ")])},pe=[],ve={},be=ve,xe=(n("6ef7"),Object(f["a"])(be,he,pe,!1,null,"017170ad",null)),Be=xe.exports,Se={components:{timeAxis:ne,renderArea:ce,keyframeTrack:me,assistTrack:Be}},we=Se,Ce=(n("0efc"),Object(f["a"])(we,Ft,It,!1,null,"4b7a8b4d",null)),De=Ce.exports,ye={components:{operationControl:Kt,trackControl:De},data:function(){return{operationControlWidthBuffer:"",operationControlSetting:{size:"",max:1e3,min:200},boxWatch:""}},computed:{},created:function(){this.operationControlSetting.size=this.$store.getters.getOperationControlWidth,this.operationControlWidthBuffer=this.operationControlSetting.size},watch:{"$store.state.dragBox.sign":function(t,e){var n=this;t?"operation"===t&&(this.boxWatch=this.$watch("$store.state.dragBox.mousemoveX",(function(t){var e=n.operationControlWidthBuffer+t;e>n.operationControlSetting.max&&(e=n.operationControlSetting.max),e<n.operationControlSetting.min&&(e=n.operationControlSetting.min),n.operationControlSetting.size=e}))):(this.boxWatch&&this.boxWatch(),"operation"===e&&(this.operationControlWidthBuffer=this.operationControlSetting.size))}}},ke=ye,_e=(n("99a1"),Object(f["a"])(ke,$t,Et,!1,null,"3886832f",null)),ze=_e.exports,$e=function(){return Promise.all([n.e("chunk-4eb75ac9"),n.e("chunk-868e338a")]).then(n.bind(null,"1033"))},Ee={components:{dragBox:A,dragBoxMask:K,topNav:gt,leftNav:wt,rightNav:zt,editorView:$e,bottomNav:ze},data:function(){return{rightDragBoxSetting:"",rightDragBoxSizeBuffer:"",leftDragBoxSetting:"",leftDragBoxSizeBuffer:"",bottomDragBoxSetting:"",bottomDragBoxSizeButter:"",boxWatch:"",editorViewWidth:"",editorViewHeight:""}},computed:{rightDragBoxWidth:function(){return"".concat(this.rightDragBoxSetting.size,"px")},middleDragBoxHeight:function(){return"".concat(this.editorViewHeight,"px")},leftDragBoxWidth:function(){return"".concat(this.leftDragBoxSetting.size,"px")},bottomDragBoxHeight:function(){return"".concat(this.bottomDragBoxSetting.size,"px")}},methods:{init:function(){this.rightDragBoxSetting={size:320,max:600,min:200},this.leftDragBoxSetting={size:320,max:600,min:200},this.bottomDragBoxSetting={size:250,max:600,min:200},this.rightDragBoxSizeBuffer=this.rightDragBoxSetting.size,this.leftDragBoxSizeBuffer=this.leftDragBoxSetting.size,this.bottomDragBoxSizeButter=this.bottomDragBoxSetting.size},resetEditorViewSize:function(){this.editorViewWidth=window.innerWidth-(this.leftDragBoxSetting.size+this.rightDragBoxSetting.size),this.editorViewHeight=window.innerHeight-(this.bottomDragBoxSetting.size+this.$store.getters.getTopNavHeight)}},watch:{"$store.state.dragBox.sign":function(t,e){var n=this;t?"left"===t?this.boxWatch=this.$watch("$store.state.dragBox.mousemoveX",(function(t){var e=n.leftDragBoxSizeBuffer+t;e>n.leftDragBoxSetting.max&&(e=n.leftDragBoxSetting.max),e<n.leftDragBoxSetting.min&&(e=n.leftDragBoxSetting.min),n.leftDragBoxSetting.size=e,n.resetEditorViewSize()})):"right"===t?this.boxWatch=this.$watch("$store.state.dragBox.mousemoveX",(function(t){var e=n.rightDragBoxSizeBuffer-t;e>n.rightDragBoxSetting.max&&(e=n.rightDragBoxSetting.max),e<n.rightDragBoxSetting.min&&(e=n.rightDragBoxSetting.min),n.rightDragBoxSetting.size=e,n.resetEditorViewSize()})):"bottom"===t&&(this.boxWatch=this.$watch("$store.state.dragBox.mousemoveY",(function(t){var e=n.bottomDragBoxSizeButter-t;e>n.bottomDragBoxSetting.max&&(e=n.bottomDragBoxSetting.max),e<n.bottomDragBoxSetting.min&&(e=n.bottomDragBoxSetting.min),n.bottomDragBoxSetting.size=e,n.resetEditorViewSize()}))):(this.boxWatch&&this.boxWatch(),"left"===e?this.leftDragBoxSizeBuffer=this.leftDragBoxSetting.size:"right"===e?this.rightDragBoxSizeBuffer=this.rightDragBoxSetting.size:"bottom"===e&&(this.bottomDragBoxSizeButter=this.bottomDragBoxSetting.size))}},created:function(){this.init()},mounted:function(){var t=this;this.resetEditorViewSize(),window.onresize=function(){t.resetEditorViewSize()}}},je=Ee,Oe=(n("b92b"),Object(f["a"])(je,V,P,!1,null,"4368a477",null)),Ne=Oe.exports,Me=n("9224"),Ve={components:{editor:Ne},mounted:function(){NProgress.done();var t=window.localStorage;t.version&&t.version===Me.version||(t.version=Me.version,this.$store.commit("setNoticeVisible",!0))}},Pe=Ve,We=(n("225e"),Object(f["a"])(Pe,N,M,!1,null,"f6b86c0a",null)),He=We.exports,Te=n("8c4f");s["default"].use(Te["a"]);var Xe=[],Ye=new Te["a"]({routes:Xe}),Ae=Ye,Le=n("2f62"),Ge=n("19ab"),Re=n.n(Ge),qe=n("907a"),Je=n.n(qe),Ke=n("be3f"),Fe=n.n(Ke),Ie=n("debd"),Ue=n.n(Ie),Qe=n("7a5c"),Ze=n.n(Qe);s["default"].use(Le["a"]);var tn=new Le["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{dragBox:Re.a,topNav:Je.a,editorView:Ue.a,bottomNav:Fe.a,history:Ze.a}});s["default"].use(i.a),s["default"].component(a.a.name,a.a),s["default"].prototype.$MMDProgress=C.init(),s["default"].prototype.$tool=k.a,s["default"].prototype.$bus=z,s["default"].config.productionTip=!1,window.App=new s["default"]({router:Ae,store:tn,render:function(t){return t(He)}}).$mount("#app")},"57f1":function(t,e,n){},"59f8":function(t,e,n){"use strict";var o=n("9ff4"),i=n.n(o);i.a},"5dd9":function(t,e,n){},"618e":function(t,e,n){"use strict";var o=n("5dd9"),i=n.n(o);i.a},"6ef7":function(t,e,n){"use strict";var o=n("4547"),i=n.n(o);i.a},"7a5c":function(t,e){t.exports={state:{historyList:[{name:"",attr:"",oldValue:"",newValue:""}]},getters:{},mutations:{},actions:{}}},"7bef":function(t,e,n){},"89de":function(t,e,n){"use strict";var o=n("41f1"),i=n.n(o);i.a},"89e9":function(t,e,n){},"8ac5":function(t,e,n){"use strict";var o=n("c0c3"),i=n.n(o);i.a},"907a":function(t,e){t.exports={state:{height:70,helpDocumentVisible:!1,noticeVisible:!1,config:{effect:{desp:"效果",name:"effect",icon:"#icon-xiaoguo",operate:[]},operation:{desp:"操作",name:"operation",icon:"#icon-caozuo",operate:[{name:"revoke",desp:"撤销",shortcut:["ctrl","z"],run:function(){return MMD.history.undo()}},{name:"recovery",desp:"恢复",shortcut:["ctrl","y"],run:function(){return MMD.history.redo()}}]},help:{desp:"帮助",name:"help",icon:"#icon-bangzhu",operate:[{name:"howtodo",desp:"操作介绍",shortcut:["ctrl","h"],run:function(){App.$store.commit("setHelpDocumentVisible",!0)}}]},about:{desp:"关于我们",name:"about",icon:"#icon-yonghu",operate:[{name:"github",desp:"Github",shortcut:[],run:function(){window.open("https://github.com/Shiotsukikaedesari")}}]}}},getters:{getTopNavHeight:function(t){return t.height},getTopConfig:function(t){return t.config}},mutations:{addTopConfig:function(t,e){var n=e.main,o=e.operation;t.config[n].operate.push(o)},setHelpDocumentVisible:function(t,e){t.helpDocumentVisible=e},setNoticeVisible:function(t,e){t.noticeVisible=e}},actions:{}}},9224:function(t){t.exports=JSON.parse('{"name":"mmd-display-editor","version":"0.1.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","getModel":"node ./script/getModel.js"},"dependencies":{"core-js":"^3.6.5","element-ui":"^2.13.2","nprogress":"^0.2.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"~4.4.0","@vue/cli-plugin-eslint":"~4.4.0","@vue/cli-plugin-router":"~4.4.0","@vue/cli-plugin-vuex":"~4.4.0","@vue/cli-service":"~4.4.0","@vue/eslint-config-standard":"^5.1.2","ammo.js":"0.0.10","axios":"^0.18.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2","less":"^3.0.4","less-loader":"^5.0.0","style-resources-loader":"^1.3.2","three":"^0.118.3","vue-cli-plugin-axios":"0.0.4","vue-cli-plugin-style-resources-loader":"^0.1.4","vue-template-compiler":"^2.6.11"}}')},"99a1":function(t,e,n){"use strict";var o=n("43b6"),i=n.n(o);i.a},"9ff4":function(t,e,n){},b411:function(t,e,n){},b92b:function(t,e,n){"use strict";var o=n("7bef"),i=n.n(o);i.a},bc96:function(t,e,n){},be3f:function(t,e){t.exports={state:{operationControlWidth:400},getters:{getOperationControlWidth:function(t){return t.operationControlWidth}},mutations:{},actions:{}}},c0c3:function(t,e,n){},c2d1:function(t,e,n){"use strict";var o=n("3e58"),i=n.n(o);i.a},ca20:function(t,e,n){},dd5e:function(t,e,n){},debd:function(t,e){t.exports={state:{viewControlHeight:20,godMobileCameraSetting:{fov:45,aspect:"",near:1,far:1e4}},getters:{getViewControlHeight:function(t){return t.viewControlHeight}},mutations:{setGodMobileCamera:function(t,e){t.fov=e.fov||t.fov,t.aspect=e.aspect||t.aspect,t.near=e.near||t.near,t.far=e.far||t.far}},actions:{}}},df7b:function(t,e,n){"use strict";var o=n("dd5e"),i=n.n(o);i.a},eb46:function(t,e,n){"use strict";var o=n("f766"),i=n.n(o);i.a},eb4d:function(t,e,n){},f565:function(t,e,n){"use strict";var o=n("eb4d"),i=n.n(o);i.a},f5ad:function(t,e,n){},f67e:function(t,e,n){"use strict";var o=n("57f1"),i=n.n(o);i.a},f766:function(t,e,n){}});