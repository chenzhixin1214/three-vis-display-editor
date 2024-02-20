import{c as n,e as c}from"./index-4d29e0e5.js";import{n as p,M as a,i as l}from"./texture-e454a176.js";import"./three-679cdae3.js";var m=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"headerOperation-container"},[t("div",{staticClass:"operate-history"},[t("vis-icon",{attrs:{code:"#iconbianjiantouzuo"},nativeOn:{click:function(i){return(function(){e.$store.commit("templateLibrary/backOffHistory")}).apply(null,arguments)}}}),t("vis-icon",{attrs:{code:"#iconbianjiantouyou"},nativeOn:{click:function(i){return(function(){e.$store.commit("templateLibrary/forwardHistory")}).apply(null,arguments)}}})],1),t("div",{staticClass:"operate-address"},e._l(e.addressList,function(i,r){return t("span",{key:r,staticClass:"address-sign-box",on:{click:function(o){return e.chouseFile(i)}}},[r>0?t("vis-icon",{style:{transform:"scale(0.6)"},attrs:{code:"#iconsanjiaojiantouyou"}}):e._e(),t("span",{staticClass:"address-title",domProps:{textContent:e._s(i.name)}})],1)}),0),t("div",{staticClass:"operate-operation"},[t("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"},model:{value:e.classifyVisible,callback:function(i){e.classifyVisible=i},expression:"classifyVisible"}},[t("el-input",{staticClass:"popover-input",attrs:{size:"mini",placeholder:"输入分类名称"},model:{value:e.classifyName,callback:function(i){e.classifyName=i},expression:"classifyName"}}),t("div",{staticClass:"popover-operation"},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:e.addClassify}},[e._v(" 确定 ")])],1),t("vis-icon",{directives:[{name:"show",rawName:"v-show",value:e.canAddClassify,expression:"canAddClassify"},{name:"tooltip",rawName:"v-tooltip.top",value:"新增分类",expression:"'新增分类'",modifiers:{top:!0}}],attrs:{slot:"reference",code:"#iconjia1"},slot:"reference"})],1),t("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"},model:{value:e.templateVisible,callback:function(i){e.templateVisible=i},expression:"templateVisible"}},[t("el-input",{staticClass:"popover-input",attrs:{size:"mini",placeholder:"输入模板名称"},model:{value:e.templateName,callback:function(i){e.templateName=i},expression:"templateName"}}),t("div",{staticClass:"popover-operation"},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:e.addTemplate}},[e._v(" 确定 ")])],1),t("vis-icon",{directives:[{name:"show",rawName:"v-show",value:e.canUpload,expression:"canUpload"},{name:"tooltip",rawName:"v-tooltip.top",value:"当前场景保存为新模板",expression:"'当前场景保存为新模板'",modifiers:{top:!0}}],attrs:{slot:"reference",code:"#iconbaocun_mian"},slot:"reference"})],1)],1)])},u=[];const f={data(){return{classifyName:"",classifyVisible:!1,templateName:"",templateVisible:!1}},computed:{currentFloder(){return this.$store.getters["templateLibrary/currentFloder"]},canUpload(){const e=this.currentFloder.children;return e.length&&!e[0].dir?!0:!e.length&&this.currentFloder.name!=="/"},canAddClassify(){const e=this.currentFloder.children;return e.length&&e[0].dir?!0:!e.length},addressList(){const e=[this.currentFloder],s=t=>{t.parent&&(e.unshift(t.parent),s(t.parent))};return s(this.currentFloder),e}},methods:{chouseFile(e){e.dir&&this.$store.commit("templateLibrary/currentFloder",e)},upload(){this.$refs.uploadInput.click()},fileHandler(e){const s=e.target.files[0],t=new FormData;t.append("file",s),t.append("classifyId",this.currentFloder.id),this.axios.upload("/config/upload",t).then(i=>{this.$store.commit("templateLibrary/addChildren",i.data)}).finally(()=>{this.$refs.uploadInput.value=""})},addClassify(){this.classifyName.trim()?n.addClassify({name:this.classifyName.trim(),parentId:this.currentFloder.id}).then(e=>{this.$store.commit("templateLibrary/addChildren",e),this.classifyName="",this.classifyVisible=!1,this.$message.success("添加分类成功！")}).catch(e=>{this.$message.error("数据库有误：templateApi.addClassify"),console.error(e)}):(this.classifyName="",this.classifyVisible=!1)},async addTemplate(){const e=this.$message.loading("正在保存为模板...");let s=await this.$store.dispatch("urlTransform",c.exportConfig());const t=await this.$store.dispatch("exportConfig");s[a.CONTROLS]&&delete s[a.CONTROLS],s[a.RENDERER]&&delete s[a.RENDERER],s[a.SCENE]&&delete s[a.SCENE],s[a.PASS]&&delete s[a.PASS],s[a.LIGHT]&&s[a.LIGHT].forEach((i,r,o)=>{[l.AMBIENTLIGHT,l.DIRECTIONALLIGHT,l.HEMISPHERELIGHT].includes(i.type)&&o.splice(r,1)}),n.creatTemplate({name:this.templateName,classifyId:this.currentFloder.id,template:s,editor:t,preview:await c.getScreenshot({width:960,height:540})}).then(i=>{this.$message.success("保存成功！"),this.templateName="",this.templateVisible=!1,this.$store.commit("templateLibrary/addChildren",i)}).finally(()=>{e.close()})}}},d={};var h=p(f,m,u,!1,v,"561ff35d",null,null);function v(e){for(let s in d)this[s]=d[s]}const b=function(){return h.exports}();export{b as default};
