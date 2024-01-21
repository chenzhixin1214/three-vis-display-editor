var x=Object.defineProperty;var C=(t,i,e)=>i in t?x(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var u=(t,i,e)=>(C(t,typeof i!="symbol"?i+"":i,e),e);import{f as E,O as b,p as d,g as v,V as N,n as S,M as n,C as c,J as h,u as m,h as _,e as p,q as O}from"./index-b8043f0c.js";import"./three-6daa312a.js";class f{constructor(i){u(this,"config");this.config=i}pipe(i){return this.config=i(this.config),this}get(){return this.config}}class $ extends E{constructor({template:i,store:e,engine:o}){super(),this.template=i,this.$store=e,this.engine=o,this.objectList=[];const r=e.getters["scene/currentScene"].vid;for(const s in i)if(b[s])for(const a of i[s])a.parent==r&&this.objectList.push(a.vid)}next(){this.engine.loadConfigAsync(d.handler(this.template,i=>v(i.type,i,{handler:e=>N.observable(e)}))).then(i=>{this.$store.getters["scene/currentScene"].children.push(...this.objectList)})}prev(){const i=this.$store.getters["scene/currentScene"];for(const e of this.objectList)i.children.splice(i.children.indexOf(e),1);this.engine.removeConfig(this.template)}}var T=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"containerOperation-container"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading-mask"},[e("vis-icon",{staticClass:"ani",attrs:{code:"#iconxuanzhuan"}}),e("span",[t._v("正在加载...")])],1),!t.loading&&!t.floderChildren.length?e("div",{staticClass:"empty-tips"},[e("span",[t._v("这里暂时是空的哦")])]):t._l(t.floderChildren,function(o,r){return e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:`${o.name}`,expression:"`${item.name}`",modifiers:{bottom:!0}}],key:r,staticClass:"file-item-box"},[o.dir?[e("vis-icon",{attrs:{size:t.iconSize,code:"#iconwenjianjia"}})]:[e("img",{attrs:{src:o.preview}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.selected.id===o.id,expression:"selected.id === item.id"}],staticClass:"item-selected-mask",on:{click:function(s){return s.stopPropagation(),t.$store.commit("templateLibrary/cancelSelected")}}},[e("vis-icon",{staticClass:"item-selected",attrs:{size:"60px",code:"#icongou"}})],1)],e("span",{staticClass:"item-title",domProps:{textContent:t._s(o.name)}}),o.dir?e("span",{staticClass:"item-operate-box"},[e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"移动",expression:"`移动`",modifiers:{bottom:!0}}],attrs:{size:"20px",code:"#iconpingyi"}}),e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"打开",expression:"`打开`",modifiers:{bottom:!0}}],attrs:{size:"20px",code:"#iconyidong"},nativeOn:{click:function(s){return s.stopPropagation(),t.chouseFile(o)}}}),e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"删除",expression:"`删除`",modifiers:{bottom:!0}}],staticClass:"item-delete",attrs:{size:"16px",code:"#iconshanchu"},nativeOn:{click:function(s){return s.stopPropagation(),t.remove(o)}}})],1):e("span",{staticClass:"item-operate-box"},[e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"更新",expression:"`更新`",modifiers:{bottom:!0}}],attrs:{size:"16px",code:"#iconxuanzhuan"},nativeOn:{click:function(s){return s.stopPropagation(),t.updateTempalte(o)}}}),e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"应用",expression:"`应用`",modifiers:{bottom:!0}}],attrs:{size:"20px",code:"#iconyingyong"},nativeOn:{click:function(s){return s.stopPropagation(),t.useTemplate(o)}}}),e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"删除",expression:"`删除`",modifiers:{bottom:!0}}],staticClass:"item-delete",attrs:{size:"16px",code:"#iconshanchu"},nativeOn:{click:function(s){return s.stopPropagation(),t.remove(o)}}})],1)],2)}),e("div",{staticClass:"file-item-placeholder",style:{display:t.floderChildren.length%2!==0?"block":"none",flex:1}})],2)},w=[];const L={data(){return{iconSize:"35px",timer:"",cacheMap:{}}},computed:{loading(){return this.$store.getters["templateLibrary/loading"]},currentFloder(){return this.$store.getters["templateLibrary/currentFloder"]},floderChildren(){return this.currentFloder.children},currentScene(){return this.$store.getters["scene/currentScene"]},selected(){return this.$store.getters["templateLibrary/selected"]}},methods:{chouseFile(t){if(t.dir)this.$store.commit("templateLibrary/currentFloder",t);else{console.log(t);const i=t.app;if(this.cacheMap[i]){const{config:e,detail:o}=d.clone(this.cacheMap[i],{detail:!0,fillName:!0});console.log(o);const r=new f(e).pipe(s=>(delete s[n.SCENE],delete s[n.RENDERER],delete s[n.CONTROLS],s[n.LIGHT].forEach((a,l,y)=>{a.type===c.AMBIENTLIGHT&&y.splice(l,1)}),s)).pipe(s=>JSON.stringify(s,h.stringify)).pipe(s=>s.replace(new RegExp(o[m(c.SCENE)],"g"),this.currentScene.vid)).pipe(s=>JSON.parse(s,h.parse)).get();console.log(r),_.apply(new $({engine:p,store:this.$store,template:r}),!0)}else{const e=this.$message.loading("正在加载配置...");this.axios.get(i).then(o=>{this.cacheMap[i]=o,this.chouseFile(t)}).finally(()=>{e.close()})}}},remove(t){t.dir?this.$confirm(`是否删除此分类: ${t.name}?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.axios.post("/template/removeClassify",{id:t.id}).then(i=>{i.status===200?(this.$message({type:"success",message:"删除成功!"}),this.$store.commit("templateLibrary/removeChildren",t)):this.$message.error(i.message)})}):this.$confirm(`是否删除此模型: ${t.name}, 删除此模型相关的编辑项目会受到影响，是否继续?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{})},useTemplate(t){console.log(t);const i=this.$message.loading("正在应用模板...");this.axios.get(t.config).then(e=>{const o=[],r=new f(e).pipe(s=>d.clone(s)).pipe(s=>(Object.keys(s).forEach(a=>{O(a)&&Object.values(s[a]).forEach(l=>{l.parent===m(c.SCENE)&&o.push(l.vid)})}),s)).pipe(s=>d.handler(s,a=>v(a.type,a))).get();console.log(r),p.loadConfigAsync(r).then(()=>{this.currentScene.children.push(...o),this.$store.commit("notifyAll")})}).finally(()=>{i.close()})},async updateTempalte(t){console.log(t);const i=this.$message.loading("正在更新模板..."),e=p.exportConfig();e[n.CONTROLS]&&delete e[n.CONTROLS],e[n.RENDERER]&&delete e[n.RENDERER],e[n.SCENE]&&delete e[n.SCENE],e[n.PASS]&&delete e[n.PASS],e[n.LIGHT]&&e[n.LIGHT].forEach((o,r,s)=>{[c.AMBIENTLIGHT,c.DIRECTIONALLIGHT,c.HEMISPHERELIGHT].includes(o.type)&&s.splice(r,1)}),this.axios.post("/template/modify",{id:t.id,templateName:t.name,classifyId:t.classifyId,config:JSON.stringify(e,h.stringify),preview:await p.getScreenshot({width:1920,height:1080})}).then(o=>{o.status===200&&(this.$message.success("保存成功！"),this.templateName="",this.templateVisible=!1)}).finally(()=>{i.close()})}}},g={};var R=S(L,T,w,!1,I,"72712c96",null,null);function I(t){for(let i in g)this[i]=g[i]}const k=function(){return R.exports}();export{k as default};