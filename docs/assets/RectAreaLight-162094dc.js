import{n as r}from"./index-2dfd5781.js";import"./three-c85558b8.js";var l=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"AmbientLight-container"},[n("de-collapse-layout",{attrs:{label:"设置",icon:"#iconshezhi","arrow-position":"left"},scopedSlots:e._u([{key:"container",fn:function(){return[n("de-controller-picker",{attrs:{label:"颜色",animation:{target:e.config.vid,attribute:"color"}},model:{value:e.config.color,callback:function(t){e.$set(e.config,"color",t)},expression:"config.color"}}),n("de-controller-number",{attrs:{label:"亮度",step:.1,"drag-multply":10,min:0,"display-accuracy":1,animation:{target:e.config.vid,attribute:"intensity"}},model:{value:e.config.intensity,callback:function(t){e.$set(e.config,"intensity",t)},expression:"config.intensity"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"宽度",step:1,"drag-multply":5,min:0},model:{value:e.config.width,callback:function(t){e.$set(e.config,"width",t)},expression:"config.width"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"高度",step:1,"drag-multply":5,min:0},model:{value:e.config.height,callback:function(t){e.$set(e.config,"height",t)},expression:"config.height"}})]},proxy:!0}])})],1)},c=[];const a={props:{config:{type:Object,required:!0}}},i={};var s=r(a,l,c,!1,u,null,null,null);function u(e){for(let o in i)this[o]=i[o]}const p=function(){return s.exports}();export{p as default};
