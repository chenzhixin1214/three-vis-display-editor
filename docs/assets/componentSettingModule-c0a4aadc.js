import{n as i}from"./index-ea23a1e9.js";import"./three-6daa312a.js";const a={input:"de-controller-input",switch:"de-controller-switch",select:"de-controller-select",picker:"de-controller-picker"},r=t=>t.map(e=>({label:e.label||e.name,key:e.name,component:a[e.controller],props:{options:e.options}}));var u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.cid?o("div",{staticClass:"componentSettingModule-container"},[o("de-collapse-layout",{attrs:{label:"组件配置",icon:"#iconvuejs",arrowPosition:"left"}},t._l(t.controllers,function(n,l){return o(n.component,t._b({key:l,tag:"component",attrs:{slot:"container",label:n.label,keyframe:!1},slot:"container",model:{value:t.config[n.key],callback:function(s){t.$set(t.config,n.key,s)},expression:"config[item.key]"}},"component",n.props,!1))}),1)],1):t._e()},p=[];const f={computed:{cid(){return this.$store.getters["active/object"].element},config(){return this.cid?this.$store.getters["component/get"][this.cid]:null},configuration(){return this.cid?this.$store.getters["component/configuration"][this.cid]:null},controllers(){return console.log(r(this.configuration)),this.cid?r(this.configuration):null}}},c={};var d=i(f,u,p,!1,_,null,null,null);function _(t){for(let e in c)this[e]=c[e]}const h=function(){return d.exports}();export{h as default};
