(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b93c8"],{"31a5":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TetrahedronMMDMesh-container"},[n("MMD-number",{attrs:{title:"几何半径",min:0},model:{value:t.config.radius,callback:function(e){t.$set(t.config,"radius",e)},expression:"config.radius"}}),n("MMD-number",{attrs:{title:"复杂度",min:0,max:5},model:{value:t.config.detail,callback:function(e){t.$set(t.config,"detail",e)},expression:"config.detail"}})],1)},c=[],r={props:{config:{}},data:function(){return{}},computed:{currentObject:function(){return this.$store.getters.getCurrentObject}}},a=r,o=n("2877"),s=Object(o["a"])(a,i,c,!1,null,"2a6c781d",null);e["default"]=s.exports}}]);