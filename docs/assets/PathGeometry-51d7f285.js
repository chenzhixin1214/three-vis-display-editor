import{n as o}from"./index-2dfd5781.js";import"./three-c85558b8.js";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pathGeometry-container"},[r("de-collapse-layout",{attrs:{label:"路径",icon:"#iconjichubianhuan","arrow-position":"left"},scopedSlots:t._u([{key:"container",fn:function(){return[r("de-controller-switch",{attrs:{keyframe:!1,label:"自动闭合"},model:{value:t.path.autoClose,callback:function(s){t.$set(t.path,"autoClose",s)},expression:"path.autoClose"}}),r("el-button",{staticStyle:{width:"100%"},attrs:{size:"mini",icon:"el-icon-edit",type:t.draw?"success":"primary"},on:{click:t.setDraw}},[t._v(" "+t._s(t.draw?"结束绘制":"路径绘制")+" ")])]},proxy:!0}])})],1)},n=[];const c={props:{config:{type:Object,required:!0}},computed:{draw(){return this.$store.getters["path/draw"]},path(){return this.$store.getters["path/get"][this.config.path]}},methods:{setDraw(){this.draw?this.$store.commit("path/draw",{status:!this.draw,geometry:"",drawType:this.path.type==="Path"?"2d":"3d"}):this.$store.commit("path/draw",{status:!this.draw,geometry:this.config,drawType:this.path.type==="Path"?"2d":"3d"})}}},a={};var l=o(c,i,n,!1,h,null,null,null);function h(t){for(let e in a)this[e]=a[e]}const d=function(){return l.exports}();export{d as default};
