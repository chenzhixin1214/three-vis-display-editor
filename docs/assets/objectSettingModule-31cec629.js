import{_ as i}from"./index-4d29e0e5.js";import{n as r,M as n,aw as s}from"./texture-e454a176.js";import"./three-679cdae3.js";var u=function(){var e=this,c=e.$createElement,o=e._self._c||c;return e.config.type?o("div",{staticClass:"objectSettingModule-container"},[o("de-collapse-layout",{attrs:{label:e.transMessage.label,"sub-label":e.config.type,icon:e.transMessage.icon,"arrow-position":"left"},scopedSlots:e._u([{key:"container",fn:function(){return[o("de-controller-input",{attrs:{label:"名称"},model:{value:e.config.name,callback:function(t){e.$set(e.config,"name",t)},expression:"config.name"}}),o("de-controller-input",{attrs:{label:"别名"},model:{value:e.config.alias,callback:function(t){e.$set(e.config,"alias",t)},expression:"config.alias"}}),o("de-controller-code",{attrs:{label:"数据"},model:{value:e.config.meta,callback:function(t){e.$set(e.config,"meta",t)},expression:"config.meta"}})]},proxy:!0}],null,!1,2522499232)}),o("de-collapse-layout",{attrs:{label:"基础设置",icon:"#iconshezhi","arrow-position":"left"},scopedSlots:e._u([{key:"container",fn:function(){return[o("de-controller-vector3",{attrs:{label:"位置",step:.1,"display-accuracy":e.displayAccuracy,animation:{target:e.config,attribute:"position"}},model:{value:e.config.position,callback:function(t){e.$set(e.config,"position",t)},expression:"config.position"}}),o("de-controller-vector3",{attrs:{label:"缩放",step:1,"display-accuracy":e.displayAccuracy,animation:{target:e.config,attribute:"scale"}},model:{value:e.config.scale,callback:function(t){e.$set(e.config,"scale",t)},expression:"config.scale"}}),o("de-controller-vector3",{attrs:{label:"旋转",step:1,"display-accuracy":e.displayAccuracy,unit:"°",animation:{target:e.config,attribute:"rotation"}},model:{value:e.config.rotation,callback:function(t){e.$set(e.config,"rotation",t)},expression:"config.rotation"}}),o("de-controller-vector3",{attrs:{label:"朝向",step:1,"display-accuracy":e.displayAccuracy,animation:{target:e.config,attribute:"up"}},model:{value:e.config.up,callback:function(t){e.$set(e.config,"up",t)},expression:"config.up"}}),o("de-controller-switch",{attrs:{label:"可见性",animation:{target:e.config,attribute:"visible"}},model:{value:e.config.visible,callback:function(t){e.$set(e.config,"visible",t)},expression:"config.visible"}}),o("de-controller-select",{attrs:{label:"看向目标",options:e.objectList,prop:{label:"name",value:"vid"},animation:{target:e.config,attribute:"lookAt"}},model:{value:e.config.lookAt,callback:function(t){e.$set(e.config,"lookAt",t)},expression:"config.lookAt"}})]},proxy:!0}],null,!1,3845272568)}),e.geometry?o("geometry-setting-module"):e._e(),e.config.element?o("component-setting-module"):e._e(),o(e.component,{tag:"components",attrs:{config:e.config}}),o("de-collapse-layout",{attrs:{label:"高级设置",icon:"#iconshezhi","arrow-position":"left"},scopedSlots:e._u([{key:"container",fn:function(){return[o("de-controller-switch",{attrs:{label:"接收阴影",animation:{target:e.config,attribute:"receiveShadow"}},model:{value:e.config.receiveShadow,callback:function(t){e.$set(e.config,"receiveShadow",t)},expression:"config.receiveShadow"}}),o("de-controller-switch",{attrs:{label:"产生阴影",animation:{target:e.config,attribute:"castShadow"}},model:{value:e.config.castShadow,callback:function(t){e.$set(e.config,"castShadow",t)},expression:"config.castShadow"}}),o("de-controller-switch",{attrs:{label:"自动更新",animation:{target:e.config,attribute:"matrixAutoUpdate"}},model:{value:e.config.matrixAutoUpdate,callback:function(t){e.$set(e.config,"matrixAutoUpdate",t)},expression:"config.matrixAutoUpdate"}}),o("de-controller-number",{attrs:{label:"渲染顺序",step:1,"drag-multply":1,min:-1/0,max:1/0,animation:{target:e.config,attribute:"renderOrder"}},model:{value:e.config.renderOrder,callback:function(t){e.$set(e.config,"renderOrder",t)},expression:"config.renderOrder"}})]},proxy:!0}],null,!1,4079935535)})],1):e._e()},g=[];const _=()=>i(()=>import("./geometrySettingModule-1009f327.js"),["assets/geometrySettingModule-1009f327.js","assets/index-4d29e0e5.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css","assets/index-1bec1761.css","assets/geometrySettingModule-d738e370.css"]),d=()=>i(()=>import("./componentSettingModule-5394f615.js"),["assets/componentSettingModule-5394f615.js","assets/configurationTranslater-333f12c8.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),l={geometrySettingModule:_,componentSettingModule:d},p=[Object.assign({"./objectSettingModule/CSS2DPlane.vue":()=>i(()=>import("./CSS2DPlane-f45c7704.js"),["assets/CSS2DPlane-f45c7704.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/CSS3DPlane.vue":()=>i(()=>import("./CSS3DPlane-f45c7704.js"),["assets/CSS3DPlane-f45c7704.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/CSS3DSprite.vue":()=>i(()=>import("./CSS3DSprite-fb9ab6ad.js"),["assets/CSS3DSprite-fb9ab6ad.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/Group.vue":()=>i(()=>import("./Group-0a004341.js"),["assets/Group-0a004341.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/LineSegments.vue":()=>i(()=>import("./LineSegments-0fe28379.js"),["assets/LineSegments-0fe28379.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/Mesh.vue":()=>i(()=>import("./Mesh-144b43d6.js"),["assets/Mesh-144b43d6.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/Points.vue":()=>i(()=>import("./Points-a96d5960.js"),["assets/Points-a96d5960.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/Sprite.vue":()=>i(()=>import("./Sprite-eea328ba.js"),["assets/Sprite-eea328ba.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"])}),Object.assign({"./objectSettingModule/object/DeepWater.vue":()=>i(()=>import("./DeepWater-c63e66a1.js"),["assets/DeepWater-c63e66a1.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/object/FloatParticle.vue":()=>i(()=>import("./FloatParticle-00f571b5.js"),["assets/FloatParticle-00f571b5.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"])}),Object.assign({"./objectSettingModule/light/AmbientLight.vue":()=>i(()=>import("./AmbientLight-9e779f60.js"),["assets/AmbientLight-9e779f60.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/light/DirectionalLight.vue":()=>i(()=>import("./DirectionalLight-ea322ac6.js"),["assets/DirectionalLight-ea322ac6.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/light/HemisphereLight.vue":()=>i(()=>import("./HemisphereLight-47e98775.js"),["assets/HemisphereLight-47e98775.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/light/PointLight.vue":()=>i(()=>import("./PointLight-e06b8ba4.js"),["assets/PointLight-e06b8ba4.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/light/RectAreaLight.vue":()=>i(()=>import("./RectAreaLight-fb9882f6.js"),["assets/RectAreaLight-fb9882f6.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"]),"./objectSettingModule/light/SpotLight.vue":()=>i(()=>import("./SpotLight-2e37a190.js"),["assets/SpotLight-2e37a190.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"])}),Object.assign({"./objectSettingModule/camera/PerspectiveCamera.vue":()=>i(()=>import("./PerspectiveCamera-82406d8f.js"),["assets/PerspectiveCamera-82406d8f.js","assets/texture-e454a176.js","assets/three-679cdae3.js","assets/texture-d7471725.css"])})];for(const e of p)Object.keys(e).forEach(c=>{l[c.split("/").pop().replace(/.\/|\.vue$/g,"")]=e[c]});const f={components:l,data(){return{displayAccuracy:2,transMap:{[n.MESH]:{label:"网格物体",icon:"#iconlifangti"},[n.LINE]:{label:"线条物体",icon:"#iconquxian"},[n.LINESEGMENTS]:{label:"线段物体",icon:"#iconquxian"},[n.CAMERA]:{label:"相机物体",icon:"#iconxiangji1"},[n.LIGHT]:{label:"光源",icon:"#icondengguang"},[n.CSS3D]:{label:"C3物体",icon:"#iconC3pingmian"},[n.CSS2D]:{label:"C2物体",icon:"#iconC2jingling"},[n.SPRITE]:{label:"精灵",icon:"#iconjingling"},[n.GROUP]:{label:"组",icon:"#iconzu"},[n.POINTS]:{label:"点云",icon:"#icondianyun"},[n.WATER]:{label:"水域",icon:"#iconic_shuiliu"},[n.PARTICLE]:{label:"粒子",icon:"#iconpitaya-YSguanli"}}}},computed:{component(){var e;return(e=this.config)==null?void 0:e.type},config(){return this.$store.getters["active/object"]},geometry(){return this.$store.getters["active/geometry"]},transMessage(){return this.transMap[s(this.config.type)]},objectList(){const e=[{name:"无",vid:""}],c=this.$store.getters.objectMapList;for(const o of c)for(const t of Object.values(o))e.push({name:t.name,vid:t.vid});return e}}},a={};var b=r(f,u,g,!1,m,null,null,null);function m(e){for(let c in a)this[c]=a[c]}const y=function(){return b.exports}();export{y as default};