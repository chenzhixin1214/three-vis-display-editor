import{n as r}from"./index-ea23a1e9.js";import"./three-6daa312a.js";var l=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"AmbientLight-container"},[n("de-collapse-layout",{attrs:{label:"设置",icon:"#iconshezhi",arrowPosition:"left"},scopedSlots:e._u([{key:"container",fn:function(){return[n("de-controller-picker",{attrs:{label:"颜色",animation:{target:e.config.vid,attribute:"color"}},model:{value:e.config.color,callback:function(t){e.$set(e.config,"color",t)},expression:"config.color"}}),n("de-controller-number",{attrs:{label:"亮度",step:.1,dragMultply:10,min:0,displayAccuracy:1,animation:{target:e.config.vid,attribute:"intensity"}},model:{value:e.config.intensity,callback:function(t){e.$set(e.config,"intensity",t)},expression:"config.intensity"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"宽度",step:1,dragMultply:5,min:0},model:{value:e.config.width,callback:function(t){e.$set(e.config,"width",t)},expression:"config.width"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"高度",step:1,dragMultply:5,min:0},model:{value:e.config.height,callback:function(t){e.$set(e.config,"height",t)},expression:"config.height"}})]},proxy:!0}])})],1)},c=[];const a={props:{config:{type:Object,required:!0}}},i={};var s=r(a,l,c,!1,u,null,null,null);function u(e){for(let o in i)this[o]=i[o]}const g=function(){return s.exports}();export{g as default};
