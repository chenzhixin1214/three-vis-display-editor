import{n as l}from"./texture-e454a176.js";import"./three-679cdae3.js";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"BoxGeometry-container"},[o("de-collapse-layout",{attrs:{label:"形状",icon:"#iconjichubianhuan","arrow-position":"left"},scopedSlots:e._u([{key:"container",fn:function(){return[o("de-controller-select",{attrs:{keyframe:!1,label:"目标几何",options:e.geometryList,prop:{label:"name",value:"vid"}},model:{value:e.config.target,callback:function(n){e.$set(e.config,"target",n)},expression:"config.target"}}),o("de-controller-number",{attrs:{keyframe:!1,label:"临界角",step:1,min:0},model:{value:e.config.thresholdAngle,callback:function(n){e.$set(e.config,"thresholdAngle",n)},expression:"config.thresholdAngle"}})]},proxy:!0}])})],1)},a=[];const c={props:{config:{type:Object,required:!0}},computed:{geometryList(){return this.$store.getters["geometry/list"]}}},r={};var i=l(c,s,a,!1,u,null,null,null);function u(e){for(let t in r)this[t]=r[t]}const p=function(){return i.exports}();export{p as default};
