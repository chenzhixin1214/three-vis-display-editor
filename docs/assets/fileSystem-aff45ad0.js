import{_ as i}from"./index-4d29e0e5.js";import{n as o}from"./texture-e454a176.js";import"./three-679cdae3.js";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fileSystem-container"},[n("header-operation"),n("container-operation",{ref:"container"})],1)},_=[];const a=()=>i(()=>import("./headerOperation-15d9db76.js"),["assets/headerOperation-15d9db76.js","assets/index-4d29e0e5.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css","assets/index-1bec1761.css","assets/headerOperation-98af65b9.css"]),c=()=>i(()=>import("./containerOperation-5e3d2807.js"),["assets/containerOperation-5e3d2807.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css","assets/index-4d29e0e5.js","assets/index-1bec1761.css","assets/containerOperation-13ffcb43.css"]),l={components:{headerOperation:a,containerOperation:c},data(){return{visible:!1,confirmFun:()=>{}}},created(){this.$store.commit("templateLibrary/request","")},methods:{open({confirm:e}){this.visible=!0,this.confirmFun=e},confirm(){this.visible=!1,this.confirmFun({files:[].concat(this.$refs.container.selected)}),this.$refs.container.selected=[]}}},r={};var f=o(l,s,_,!1,m,"05735ff5",null,null);function m(e){for(let t in r)this[t]=r[t]}const d=function(){return f.exports}();export{d as default};
