import{n as r}from"./index-2dfd5781.js";import"./three-c85558b8.js";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"MeshBasicMaterial-container"},[e("de-collapse-layout",{attrs:{label:"参数设置",icon:"#iconshezhi","arrow-position":"left"},scopedSlots:t._u([{key:"container",fn:function(){return[e("de-controller-picker",{attrs:{label:"材质颜色",animation:{target:t.config,attrubute:"color"}},model:{value:t.config.color,callback:function(o){t.$set(t.config,"color",o)},expression:"config.color"}}),e("de-controller-switch",{attrs:{keyframe:!1,label:"深度衰减"},model:{value:t.config.sizeAttenuation,callback:function(o){t.$set(t.config,"sizeAttenuation",o)},expression:"config.sizeAttenuation"}}),e("de-controller-number",{attrs:{label:"转动角度",step:.01,"drag-multply":3,min:0,"display-accuracy":2,unit:"°",animation:{target:t.config,attrubute:"rotation"}},model:{value:t.config.rotation,callback:function(o){t.$set(t.config,"rotation",o)},expression:"config.rotation"}})]},proxy:!0}])}),e("de-collapse-layout",{attrs:{label:"贴图设置",icon:"#icontexture","arrow-position":"left"},scopedSlots:t._u([{key:"container",fn:function(){return[e("de-controller-select",{attrs:{label:"表面贴图",options:t.textureList,prop:{label:"name",value:"vid"},animation:{target:t.config,attrubute:"map"}},model:{value:t.config.map,callback:function(o){t.$set(t.config,"map",o)},expression:"config.map"}}),e("de-controller-select",{attrs:{label:"透明贴图",options:t.textureList,prop:{label:"name",value:"vid"},animation:{target:t.config,attrubute:"alphaMap"}},model:{value:t.config.alphaMap,callback:function(o){t.$set(t.config,"alphaMap",o)},expression:"config.alphaMap"}})]},proxy:!0}])})],1)},l=[];const c={props:{config:{type:Object,required:!0}},computed:{textureList(){const t=[{name:"无",vid:""}],n=this.$store.getters["texture/get"];return Object.keys(n).forEach(e=>{t.push({vid:e,name:n[e].name})}),t}}},a={};var s=r(c,i,l,!1,u,"3fc2423a",null,null);function u(t){for(let n in a)this[n]=a[n]}const m=function(){return s.exports}();export{m as default};
