import{n as l}from"./index-ea23a1e9.js";import"./three-6daa312a.js";var o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"CircleGeometry-container"},[n("de-collapse-layout",{attrs:{label:"形状",icon:"#iconjichubianhuan",arrowPosition:"left"},scopedSlots:t._u([{key:"container",fn:function(){return[n("de-controller-number",{attrs:{keyframe:!1,label:"半径",step:1,dragMultply:2,min:0},model:{value:t.config.radius,callback:function(e){t.$set(t.config,"radius",e)},expression:"config.radius"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"分段",step:1,dragMultply:2,min:3},model:{value:t.config.segments,callback:function(e){t.$set(t.config,"segments",e)},expression:"config.segments"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"起始角度",step:1,dragMultply:5,min:0,max:360,unit:"°",displayAccuracy:0},model:{value:t.thetaStart,callback:function(e){t.thetaStart=e},expression:"thetaStart"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"环面范围",step:1,dragMultply:5,min:0,max:360,unit:"°",displayAccuracy:0},model:{value:t.thetaLength,callback:function(e){t.thetaLength=e},expression:"thetaLength"}})]},proxy:!0}])})],1)},s=[];const c={props:{config:{type:Object,required:!0}},computed:{thetaStart:{get(){return this.config.thetaStart*180/Math.PI},set(t){this.config.thetaStart=t*Math.PI/180}},thetaLength:{get(){return this.config.thetaLength*180/Math.PI},set(t){this.config.thetaLength=t*Math.PI/180}}}},r={};var i=l(c,o,s,!1,u,null,null,null);function u(t){for(let a in r)this[a]=r[a]}const h=function(){return i.exports}();export{h as default};
