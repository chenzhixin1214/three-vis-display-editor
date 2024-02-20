import{n as a}from"./texture-e454a176.js";import"./three-679cdae3.js";var c=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"containerOperation-container"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-mask"},[t("vis-icon",{staticClass:"ani",attrs:{code:"#iconxuanzhuan"}}),t("span",[e._v("正在加载...")])],1),!e.loading&&!e.floderChildren.length?t("div",{staticClass:"empty-tips"},[t("span",[e._v("这里暂时是空的哦")])]):e._l(e.floderChildren,function(i,o){return t("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:`${i.name}`,expression:"`${item.name}`",modifiers:{bottom:!0}}],key:o,staticClass:"file-item-box",on:{click:function(n){return e.chouseFile(i)}}},[i.dir?[t("vis-icon",{attrs:{size:e.iconSize,code:"#iconwenjianjia"}})]:[t("img",{attrs:{src:i.preview}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.selected.find(function(n){return n.id===i.id}),expression:"selected.find((elem) => elem.id === item.id)"}],staticClass:"item-selected-mask",on:{click:function(n){return n.stopPropagation(),e.cancelSelected(i)}}},[t("vis-icon",{staticClass:"item-selected",attrs:{size:"60px",code:"#icongou"}})],1)],t("span",{staticClass:"item-title",domProps:{textContent:e._s(i.name)}}),t("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"删除",expression:"`删除`",modifiers:{bottom:!0}}],staticClass:"item-delete",attrs:{size:"16px",code:"#iconshanchu"},nativeOn:{click:function(n){return n.stopPropagation(),e.remove(i)}}})],2)}),t("div",{staticClass:"file-item-placeholder",style:{display:e.floderChildren.length%2!==0?"block":"none",flex:1}})],2)},l=[];const d={data(){return{iconSize:"35px",timer:"",fileIcon:{mtl:"#iconmtl"},selected:[]}},computed:{loading(){return this.$store.getters["canvasLibrary/loading"]},currentFloder(){return this.$store.getters["canvasLibrary/currentFloder"]},floderChildren(){return this.currentFloder.children},currentScene(){return this.$store.getters["scene/currentScene"]}},methods:{chouseFile(e){e.dir?this.$store.commit("canvasLibrary/currentFloder",e):this.selected.push(e)},cancelSelected(e){this.selected.some((s,t,i)=>{if(e.id===s.id)return this.selected.splice(t,1),!0})},remove(e){e.dir?this.$confirm(`是否删除此分类: ${e.name}?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.axios.post("/model/removeClassify",{id:e.id}).then(s=>{s.status===200?(this.$message({type:"success",message:"删除成功!"}),this.$store.commit("canvasLibrary/removeChildren",e)):this.$message.error(s.message)})}):this.$confirm(`是否删除此模型: ${e.name}, 删除此模型相关的编辑项目会受到影响，是否继续?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.axios.post("/model/removeModel",{id:e.id}).then(s=>{s.status===200?(this.$message({type:"success",message:"删除成功!"}),this.$store.commit("canvasLibrary/removeChildren",e)):this.$message.error(s.message)})})}}},r={};var m=a(d,c,l,!1,u,"65503718",null,null);function u(e){for(let s in r)this[s]=r[s]}const p=function(){return m.exports}();export{p as default};
