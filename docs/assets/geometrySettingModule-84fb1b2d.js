import{n as s,_ as t}from"./index-b8043f0c.js";import"./three-6daa312a.js";var _=function(){var e=this,n=e.$createElement,o=e._self._c||n;return e.config?o("div",{staticClass:"geometrySettingModule-container"},[o("de-collapse-layout",{attrs:{label:"几何基础",icon:"#iconshezhi",arrowPosition:"left"},scopedSlots:e._u([{key:"container",fn:function(){return[o("de-controller-vector3",{attrs:{keyframe:!1,label:"锚点位置",step:.1,displayAccuracy:e.displayAccuracy},model:{value:e.config.position,callback:function(r){e.$set(e.config,"position",r)},expression:"config.position"}}),o("de-controller-vector3",{attrs:{keyframe:!1,label:"锚点缩放",step:1,displayAccuracy:e.displayAccuracy},model:{value:e.config.scale,callback:function(r){e.$set(e.config,"scale",r)},expression:"config.scale"}}),o("de-controller-vector3",{attrs:{keyframe:!1,label:"锚点旋转",step:1,displayAccuracy:e.displayAccuracy,unit:"°"},model:{value:e.config.rotation,callback:function(r){e.$set(e.config,"rotation",r)},expression:"config.rotation"}}),o("div",{staticClass:"geometry-groups"},[o("el-button",{staticClass:"add-group",attrs:{icon:"el-icon-circle-plus-outline",size:"mini",type:"primary"},on:{click:e.addGroup}},[e._v(" 添加几何组 ")]),e._l(e.config.groups,function(r,l){return o("div",{key:l,staticClass:"geometry-group-item"},[o("div",{staticClass:"group-controller"},[o("de-controller-number",{attrs:{keyframe:!1,label:"起始顶点",step:1,min:0},model:{value:r.start,callback:function(i){e.$set(r,"start",i)},expression:"item.start"}}),o("de-controller-number",{attrs:{keyframe:!1,label:"结束顶点",step:1,min:1/0},model:{value:r.count,callback:function(i){e.$set(r,"count",i)},expression:"item.count"}}),o("de-controller-number",{attrs:{keyframe:!1,label:"材质索引",step:1,min:0},model:{value:r.materialIndex,callback:function(i){e.$set(r,"materialIndex",i)},expression:"item.materialIndex"}})],1),o("el-popconfirm",{attrs:{title:"确定删除当下几何组吗？"},on:{confirm:function(i){return e.deleteGroup(l)}}},[o("div",{staticClass:"group-operation",attrs:{slot:"reference"},slot:"reference"},[o("i",{staticClass:"el-icon-delete"})])])],1)})],2)]},proxy:!0}],null,!1,33771199)}),o(e.component,{tag:"component",attrs:{config:e.config}})],1):e._e()},m=[];const u={},c=Object.assign({"./geometrySettingModule/BoxGeometry.vue":()=>t(()=>import("./BoxGeometry-f7256cb1.js"),["assets/BoxGeometry-f7256cb1.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css"]),"./geometrySettingModule/CircleGeometry.vue":()=>t(()=>import("./CircleGeometry-06e4079a.js"),["assets/CircleGeometry-06e4079a.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css"]),"./geometrySettingModule/ConeGeometry.vue":()=>t(()=>import("./ConeGeometry-6118f696.js"),["assets/ConeGeometry-6118f696.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css"]),"./geometrySettingModule/CubicBezierCurveGeometry.vue":()=>t(()=>import("./CubicBezierCurveGeometry-fa09d56a.js"),["assets/CubicBezierCurveGeometry-fa09d56a.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css","assets/CubicBezierCurveGeometry-883c98f7.css"]),"./geometrySettingModule/CylinderGeometry.vue":()=>t(()=>import("./CylinderGeometry-074535a5.js"),["assets/CylinderGeometry-074535a5.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css"]),"./geometrySettingModule/LineCurveGeometry.vue":()=>t(()=>import("./LineCurveGeometry-e399b69f.js"),["assets/LineCurveGeometry-e399b69f.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css","assets/LineCurveGeometry-9097dce0.css"]),"./geometrySettingModule/LineShapeGeometry.vue":()=>t(()=>import("./LineShapeGeometry-d8c9aabc.js"),["assets/LineShapeGeometry-d8c9aabc.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css","assets/LineShapeGeometry-acd9dec9.css"]),"./geometrySettingModule/LineTubeGeometry.vue":()=>t(()=>import("./LineTubeGeometry-988f0e14.js"),["assets/LineTubeGeometry-988f0e14.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css","assets/LineTubeGeometry-037652ba.css"]),"./geometrySettingModule/LoadGeometry.vue":()=>t(()=>import("./LoadGeometry-e9fb3060.js"),["assets/LoadGeometry-e9fb3060.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css"]),"./geometrySettingModule/PathGeometry.vue":()=>t(()=>import("./PathGeometry-e9fb3060.js"),["assets/PathGeometry-e9fb3060.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css"]),"./geometrySettingModule/PlaneGeometry.vue":()=>t(()=>import("./PlaneGeometry-0739b95e.js"),["assets/PlaneGeometry-0739b95e.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css"]),"./geometrySettingModule/QuadraticBezierCurveGeometry.vue":()=>t(()=>import("./QuadraticBezierCurveGeometry-cea422a1.js"),["assets/QuadraticBezierCurveGeometry-cea422a1.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css","assets/QuadraticBezierCurveGeometry-5ba3fdbb.css"]),"./geometrySettingModule/RingGeometry.vue":()=>t(()=>import("./RingGeometry-e4c2a86e.js"),["assets/RingGeometry-e4c2a86e.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css"]),"./geometrySettingModule/SphereGeometry.vue":()=>t(()=>import("./SphereGeometry-fd94784d.js"),["assets/SphereGeometry-fd94784d.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css"]),"./geometrySettingModule/SplineCurveGeometry.vue":()=>t(()=>import("./SplineCurveGeometry-1a6e1033.js"),["assets/SplineCurveGeometry-1a6e1033.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css","assets/SplineCurveGeometry-c361aa35.css"]),"./geometrySettingModule/SplineTubeGeometry.vue":()=>t(()=>import("./SplineTubeGeometry-c82f4e2b.js"),["assets/SplineTubeGeometry-c82f4e2b.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css","assets/SplineTubeGeometry-1435edff.css"]),"./geometrySettingModule/TorusGeometry.vue":()=>t(()=>import("./TorusGeometry-03da786e.js"),["assets/TorusGeometry-03da786e.js","assets/index-b8043f0c.js","assets/three-6daa312a.js","assets/index-3dbea7c4.css"])});Object.keys(c).forEach(e=>{u[e.split("/").pop().replace(/.\/|\.vue$/g,"")]=c[e]});const d={components:u,data(){return{displayAccuracy:2}},computed:{component(){var e;return(e=this.config)==null?void 0:e.type},config(){return this.$store.getters["active/geometry"]}},methods:{addGroup(){this.config.groups.push({start:0,count:1/0,materialIndex:0})},deleteGroup(e){this.config.groups.splice(e,1)}}},a={};var p=s(d,_,m,!1,g,"d36cec20",null,null);function g(e){for(let n in a)this[n]=a[n]}const f=function(){return p.exports}();export{f as default};