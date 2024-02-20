import{e as n}from"./index-4d29e0e5.js";import{n as r,a5 as l}from"./texture-e454a176.js";import"./three-679cdae3.js";var c=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"operateNavigation-container"},[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){e.screenshotDialogVisible=!0}}},[e._v(" 快照 ")]),t("el-button",{attrs:{size:"mini",type:"success"},on:{click:e.save}},[e._v(" 保存 ")]),t("el-button",{attrs:{size:"mini",type:"info"},on:{click:e.display}},[e._v(" 展示 ")]),t("el-dialog",{attrs:{title:"快照设置",visible:e.screenshotDialogVisible,width:"30%",center:""},on:{"update:visible":function(i){e.screenshotDialogVisible=i}}},[t("el-form",{attrs:{"label-position":"left","label-width":"90px"}},[t("el-form-item",{attrs:{label:"文件名"}},[t("el-input",{attrs:{size:"mini"},model:{value:e.screenshotSetting.name,callback:function(i){e.$set(e.screenshotSetting,"name",i)},expression:"screenshotSetting.name"}})],1),t("el-form-item",{attrs:{label:"宽度（px）"}},[t("el-input-number",{attrs:{size:"mini",controls:!1},model:{value:e.screenshotSetting.width,callback:function(i){e.$set(e.screenshotSetting,"width",i)},expression:"screenshotSetting.width"}})],1),t("el-form-item",{attrs:{label:"高度（px）"}},[t("el-input-number",{attrs:{size:"mini",controls:!1},model:{value:e.screenshotSetting.height,callback:function(i){e.$set(e.screenshotSetting,"height",i)},expression:"screenshotSetting.height"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:function(i){e.screenshotDialogVisible=!1}}},[e._v(" 取 消 ")]),t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.getScreenshot}},[e._v(" 确 定 ")])],1)],1)],1)},h=[];const d={data(){return{screenshotDialogVisible:!1,buildDialogVisible:!1,screenshotSetting:{width:1920,height:1080,name:"vis-screenshot"},exportSetting:{name:"vis-scene"}}},computed:{name(){return this.$store.getters.name},id(){return this.$store.getters.id}},mounted(){n.keyboardManager.register({shortcutKey:["ctrl","s"],desp:"在线保存",keydown:e=>{e.preventDefault(),e.stopPropagation(),this.save()}})},methods:{async getScreenshot(){const e=await n.getScreenshot({width:this.screenshotSetting.width,height:this.screenshotSetting.height}),s=document.createElement("a");s.download=this.screenshotSetting.name,s.href=e,s.click(),this.screenshotDialogVisible=!1,this.screenshotSetting={width:1920,height:1080,name:"vis-screenshot"}},async save(){const e=this.$loading({text:"正在保存...",background:"rgb(0, 0, 0)",target:".renderWindow-container"}),s=await this.$store.dispatch("exportConfig"),t=await n.getScreenshot({width:1920,height:1080});let i=await this.$store.dispatch("urlTransform",n.exportConfig());console.log(i),l.saveApp({id:this.id,name:this.name,app:i,editor:s,preview:t}).then(a=>{console.log(a),this.$message.success("保存成功！")}).finally(()=>{e.close()})},display(){window.open(window.location.origin+window.location.pathname+`/preview.html?id=${this.id}`)},download(){const e=document.createElement("a");e.download=`${this.$store.getters.name}.zip`,e.href=`/app/${this.$store.getters.id}/dist.zip`,e.click()}}},o={};var g=r(d,c,h,!1,p,"05aa7fb0",null,null);function p(e){for(let s in o)this[s]=o[s]}const v=function(){return g.exports}();export{v as default};
