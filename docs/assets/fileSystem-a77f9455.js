import{_ as s}from"./index-701b8272.js";import{n as r}from"./texture-7d506f8b.js";import"./three-c85558b8.js";var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("el-dialog",{attrs:{title:"着色器库",visible:e.visible,width:"70vw","append-to-body":"",modal:!1},on:{"update:visible":function(o){e.visible=o}}},[t("div",{staticClass:"fileSystem-container"},[t("header-operation"),t("container-operation",{ref:"container"})],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:function(o){e.visible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.confirm}},[e._v("确 定")])],1)])},l=[];const c=()=>s(()=>import("./headerOperation-889dfa37.js"),["assets/headerOperation-889dfa37.js","assets/texture-7d506f8b.js","assets/three-c85558b8.js","assets/texture-d7471725.css","assets/index-701b8272.js","assets/index-4514b76b.css","assets/headerOperation-a1a28d32.css"]),_=()=>s(()=>import("./containerOperation-0ed512b8.js"),["assets/containerOperation-0ed512b8.js","assets/texture-7d506f8b.js","assets/three-c85558b8.js","assets/texture-d7471725.css","assets/containerOperation-cf41fcbe.css"]),f={components:{headerOperation:c,containerOperation:_},data(){return{visible:!1,confirmFun:()=>{}}},created(){this.$store.commit("shaderLibrary/request","")},methods:{open({confirm:e}){this.visible=!0,this.confirmFun=e},confirm(){this.visible=!1,this.confirmFun({files:[].concat(this.$refs.container.selected)}),this.$refs.container.selected=[]}}},n={};var m=r(f,a,l,!1,u,"3a3a8394",null,null);function u(e){for(let i in n)this[i]=n[i]}const h=function(){return m.exports}();export{h as default};
