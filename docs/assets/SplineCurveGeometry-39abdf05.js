import{n as s}from"./index-ea23a1e9.js";import"./three-6daa312a.js";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"SplineCurveGeometry-container"},[t("de-collapse-layout",{attrs:{label:"路径",icon:"#iconjichubianhuan",arrowPosition:"left"},scopedSlots:e._u([{key:"container",fn:function(){return[t("el-button",{staticClass:"path-add",attrs:{size:"mini",type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:e.addPoint}},[e._v(" 添加路径 ")]),e._l(e.config.path,function(r,o){return t("div",{key:o,staticClass:"path-point-item"},[t("de-controller-vector3",{attrs:{keyframe:!1,label:"锚点"+o,step:1,displayAccuracy:2,value:r}}),t("i",{directives:[{name:"show",rawName:"v-show",value:e.config.path.length>2,expression:"config.path.length > 2"}],staticClass:"el-icon-delete",on:{click:function(_){return e.deletePoint(o)}}})],1)})]},proxy:!0}])})],1)},c=[];const l={props:{config:{type:Object,required:!0}},methods:{addPoint(){this.config.path.push({x:0,y:0,z:0})},deletePoint(e){this.config.path.splice(e,1)}}},i={};var u=s(l,a,c,!1,p,"73073d47",null,null);function p(e){for(let n in i)this[n]=i[n]}const f=function(){return u.exports}();export{f as default};
