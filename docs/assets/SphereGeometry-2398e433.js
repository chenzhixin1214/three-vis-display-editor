import{n as i}from"./index-ea23a1e9.js";import"./three-6daa312a.js";var l=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"VisSphereModel-container"},[n("de-collapse-layout",{attrs:{label:"形状",icon:"#iconjichubianhuan",arrowPosition:"left"},scopedSlots:t._u([{key:"container",fn:function(){return[n("de-controller-number",{attrs:{keyframe:!1,label:"半径",step:1,min:0},model:{value:t.config.radius,callback:function(e){t.$set(t.config,"radius",e)},expression:"config.radius"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"水平分段",step:1,min:3},model:{value:t.config.widthSegments,callback:function(e){t.$set(t.config,"widthSegments",e)},expression:"config.widthSegments"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"垂直分段",step:2,min:0},model:{value:t.config.heightSegments,callback:function(e){t.$set(t.config,"heightSegments",e)},expression:"config.heightSegments"}})]},proxy:!0}])}),n("de-collapse-layout",{attrs:{label:"高级",icon:"#iconzhuanshupeizhi",arrowPosition:"left"},scopedSlots:t._u([{key:"container",fn:function(){return[n("de-controller-number",{attrs:{keyframe:!1,label:"水平起始",step:1,dragMultply:5,min:0,max:360,unit:"°",displayAccuracy:0},model:{value:t.phiStart,callback:function(e){t.phiStart=e},expression:"phiStart"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"水平闭合",step:1,dragMultply:5,min:0,max:360,unit:"°",displayAccuracy:0},model:{value:t.phiLength,callback:function(e){t.phiLength=e},expression:"phiLength"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"垂直起始",step:1,dragMultply:5,min:0,max:360,unit:"°",displayAccuracy:0},model:{value:t.thetaStart,callback:function(e){t.thetaStart=e},expression:"thetaStart"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"垂直闭合",step:1,dragMultply:5,min:0,max:360,unit:"°",displayAccuracy:0},model:{value:t.thetaLength,callback:function(e){t.thetaLength=e},expression:"thetaLength"}})]},proxy:!0}])})],1)},o=[];const s={props:{config:{type:Object,required:!0}},computed:{phiStart:{get(){return this.config.phiStart*180/Math.PI},set(t){this.config.phiStart=t*Math.PI/180}},phiLength:{get(){return this.config.phiLength*180/Math.PI},set(t){this.config.phiLength=t*Math.PI/180}},thetaStart:{get(){return this.config.thetaStart*180/Math.PI},set(t){this.config.thetaStart=t*Math.PI/180}},thetaLength:{get(){return this.config.thetaLength*180/Math.PI},set(t){this.config.thetaLength=t*Math.PI/180}}}},r={};var c=i(s,l,o,!1,h,null,null,null);function h(t){for(let a in r)this[a]=r[a]}const f=function(){return c.exports}();export{f as default};
