import{n as a}from"./index-2dfd5781.js";import"./three-c85558b8.js";var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"VisUnrealBloomPass-container"},[e("de-collapse-layout",{attrs:{label:"设置",icon:"#iconshezhi","arrow-position":"left"},scopedSlots:t._u([{key:"container",fn:function(){return[e("de-controller-number",{attrs:{label:"阈值",step:.01,"drag-multply":3,min:0,"display-accuracy":2,animation:{target:t.config.vid,attribute:"threshold"}},model:{value:t.config.threshold,callback:function(n){t.$set(t.config,"threshold",n)},expression:"config.threshold"}}),e("de-controller-number",{attrs:{label:"强度",step:.01,"drag-multply":3,min:0,"display-accuracy":2,animation:{target:t.config.vid,attribute:"strength"}},model:{value:t.config.strength,callback:function(n){t.$set(t.config,"strength",n)},expression:"config.strength"}}),e("de-controller-number",{attrs:{label:"发光半径",step:.01,"drag-multply":3,min:0,"display-accuracy":2,animation:{target:t.config.vid,attribute:"radius"}},model:{value:t.config.radius,callback:function(n){t.$set(t.config,"radius",n)},expression:"config.radius"}})]},proxy:!0}])})],1)},i=[];const l={props:{config:{type:Object,required:!0}}},o={};var c=a(l,s,i,!1,u,"e49884d8",null,null);function u(t){for(let r in o)this[r]=o[r]}const f=function(){return c.exports}();export{f as default};
