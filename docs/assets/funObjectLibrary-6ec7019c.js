import{n as u,C as n,g as o,j as m,A as c,e as r}from"./index-ea23a1e9.js";import{A as p}from"./AddCameraAction-12399f5d.js";import{o as g}from"./objectCollapse-0e70cca1.js";import"./three-6daa312a.js";var d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"camera-container"},t._l(t.list,function(a,s){return i("object-collapse",{key:s,attrs:{dataList:a.list,clickHanlder:a.click,icon:a.icon,label:a.label}})}),1)},f=[];const h={components:{objectCollapse:g},data(){return{list:[{icon:"#iconxiangji",label:"相机",list:[{icon:"#icontoushixiangji",label:"透视相机",camera:n.PERSPECTIVECAMERA},{icon:"#iconzhengjiaoxiangji",label:"正交相机",camera:n.ORTHOGRAPHICCAMERA}],click(t){const e=o(t.camera,{vid:m()});e.icon=t.icon,e.name=`${t.label}${e.vid.slice(-2)}`,VIS.history.apply(new p({config:e,store:this.$store,engine:VIS.engine}),!0)}},{icon:"#iconic_shuiliu",label:"水域",list:[{icon:"#iconic_shuiliu",label:"深水",type:n.DEEPWATER}],click(t){const e=o(n.PLANEGEOMETRY,{width:200,height:200});this.$store.commit("geometry/add",e);const i=o(t.type,{geometry:e.vid,rotation:{x:-Math.PI/2}});i.name=`${t.label}-${i.vid.slice(-2)}`,this.$store.commit("water/add",i),this.$store.getters["scene/currentScene"].children.push(i.vid);const a=o(n.SCRIPTANIMATION,{target:i.vid,attribute:".material.uniforms.time.value",script:c.generateConfig("linearTime")},{strict:!1});r.applyConfig(a)}},{icon:"#iconpitaya-YSguanli",label:"粒子",list:[{icon:"#iconpitaya-YSguanli",label:"漂浮粒子",type:n.FLOATPARTICLE}],click(t){const e=o(t.type,{amount:1e3});e.name=`${t.label}-${e.vid.slice(-2)}`,this.$store.commit("particle/add",e),this.$store.getters["scene/currentScene"].children.push(e.vid);const i=o(n.SCRIPTANIMATION,{target:e.vid,attribute:".material.uniforms.time.value",script:c.generateConfig("linearTime")},{strict:!1});r.applyConfig(i)}}]}},methods:{}},l={};var v=u(h,d,f,!1,_,null,null,null);function _(t){for(let e in l)this[e]=l[e]}const E=function(){return v.exports}();export{E as default};
