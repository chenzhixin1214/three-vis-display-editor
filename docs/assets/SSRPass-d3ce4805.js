import{n as s,ad as a}from"./texture-e454a176.js";import"./three-679cdae3.js";var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"SSRPass-container"},[t("de-collapse-layout",{attrs:{label:"设置",icon:"#iconshezhi","arrow-position":"left"},scopedSlots:e._u([{key:"container",fn:function(){return[t("de-controller-switch",{attrs:{keyframe:!1,label:"地面"},model:{value:e.config.ground,callback:function(o){e.$set(e.config,"ground",o)},expression:"config.ground"}}),t("de-controller-picker",{attrs:{keyframe:!1,label:"地面颜色"},model:{value:e.config.groudOption.color,callback:function(o){e.$set(e.config.groudOption,"color",o)},expression:"config.groudOption.color"}}),t("de-controller-number",{attrs:{keyframe:!1,label:"透明度",step:.01,"drag-multply":3,min:0,max:1,"display-accuracy":2},model:{value:e.config.opacity,callback:function(o){e.$set(e.config,"opacity",o)},expression:"config.opacity"}}),t("de-controller-number",{attrs:{keyframe:!1,label:"反射距离",step:.1,"drag-multply":10,min:0,"display-accuracy":1},model:{value:e.config.maxDistance,callback:function(o){e.$set(e.config,"maxDistance",o)},expression:"config.maxDistance"}}),t("de-controller-select",{attrs:{keyframe:!1,label:"反射物体",options:e.objects},model:{value:e.config.selects,callback:function(o){e.$set(e.config,"selects",o)},expression:"config.selects"}})]},proxy:!0}])})],1)},r=[];const i={props:{config:{type:Object,required:!0}},computed:{objects(){const e=Object.keys(a).map(t=>this.$store.getters[`${t}/get`]),n=[];for(const t of e)for(const o of Object.values(t))n.push({label:o.name,value:o.vid});return n}}},c={};var f=s(i,l,r,!1,u,null,null,null);function u(e){for(let n in c)this[n]=c[n]}const d=function(){return f.exports}();export{d as default};
