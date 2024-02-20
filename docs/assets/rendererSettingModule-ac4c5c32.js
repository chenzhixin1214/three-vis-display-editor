import{b$ as o,b9 as l,bH as i,ba as s,c0 as p,c1 as d,c2 as c,ae as u,ac as g,c3 as b,n as m}from"./three-679cdae3.js";import{n as h}from"./texture-e454a176.js";var M=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"sceneSettingModel-container"},[a("de-collapse-layout",{attrs:{label:"渲染器设置",icon:"#iconchangjing1","arrow-position":"left"},scopedSlots:e._u([{key:"container",fn:function(){return[a("de-controller-picker",{attrs:{label:"背景色","show-alpha":"",animation:{target:e.renderer,attribute:"clearColor"}},model:{value:e.renderer.clearColor,callback:function(r){e.$set(e.renderer,"clearColor",r)},expression:"renderer.clearColor"}}),a("de-controller-number",{attrs:{label:"映射曝光",step:.01,"drag-multply":10,min:0,animation:{target:e.renderer,attribute:"toneMappingExposure"}},model:{value:e.renderer.toneMappingExposure,callback:function(r){e.$set(e.renderer,"toneMappingExposure",r)},expression:"renderer.toneMappingExposure"}}),a("de-controller-switch",{attrs:{keyframe:!1,label:"物理光照",animation:{target:e.renderer,attribute:"physicallyCorrectLights"}},model:{value:e.renderer.physicallyCorrectLights,callback:function(r){e.$set(e.renderer,"physicallyCorrectLights",r)},expression:"renderer.physicallyCorrectLights"}}),a("de-controller-switch",{attrs:{keyframe:!1,label:"全局阴影",animation:{target:e.renderer.shadowMap,attribute:"enabled"}},model:{value:e.renderer.shadowMap.enabled,callback:function(r){e.$set(e.renderer.shadowMap,"enabled",r)},expression:"renderer.shadowMap.enabled"}}),a("de-controller-switch",{attrs:{keyframe:!1,label:"适应相机",animation:{target:e.renderer,attribute:"adaptiveCamera"}},model:{value:e.renderer.adaptiveCamera,callback:function(r){e.$set(e.renderer,"adaptiveCamera",r)},expression:"renderer.adaptiveCamera"}}),a("de-controller-select",{attrs:{keyframe:!1,label:"阴影类型",options:e.shadowMapType,animation:{target:e.renderer.shadowMap,attribute:"type"}},model:{value:e.renderer.shadowMap.type,callback:function(r){e.$set(e.renderer.shadowMap,"type",r)},expression:"renderer.shadowMap.type"}}),a("de-controller-select",{attrs:{keyframe:!1,label:"色调映射",options:e.toneMapping,animation:{target:e.renderer,attribute:"toneMapping"}},model:{value:e.renderer.toneMapping,callback:function(r){e.$set(e.renderer,"toneMapping",r)},expression:"renderer.toneMapping"}}),a("de-controller-number",{attrs:{keyframe:!1,label:"像素比例",step:.01,"drag-multply":2,min:0,"display-accuracy":2,animation:{target:e.renderer,attribute:"pixelRatio"}},model:{value:e.renderer.pixelRatio,callback:function(r){e.$set(e.renderer,"pixelRatio",r)},expression:"renderer.pixelRatio"}}),a("de-controller-select",{attrs:{keyframe:!1,label:"输出编码",options:e.outputEncoding,animation:{target:e.renderer,attribute:"outputEncoding"}},model:{value:e.renderer.outputEncoding,callback:function(r){e.$set(e.renderer,"outputEncoding",r)},expression:"renderer.outputEncoding"}})]},proxy:!0}])})],1)},f=[];const v={data(){return{shadowMapType:[{label:"BasicShadowMap",value:o},{label:"PCFShadowMap",value:l},{label:"PCFSoftShadowMap",value:i}],toneMapping:[{label:"NoToneMapping",value:s},{label:"LinearToneMapping",value:p},{label:"ReinhardToneMapping",value:d},{label:"CineonToneMapping",value:c}],outputEncoding:[{label:"LinearEncoding",value:u},{label:"sRGBEncoding",value:g},{label:"BasicDepthPacking",value:b},{label:"RGBADepthPacking",value:m}]}},computed:{renderer(){return this.$store.getters["renderer/webGLRenderer"]},orbitControls(){return this.$store.getters["controls/orbitControls"]}},methods:{}},t={};var y=h(v,M,f,!1,_,"8c814b38",null,null);function _(e){for(let n in t)this[n]=t[n]}const x=function(){return y.exports}();export{x as default};