import{n as r,_ as c}from"./index-ea23a1e9.js";import"./three-6daa312a.js";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dropdownSelect-container"},[e("el-dropdown",{attrs:{trigger:t.trigger,placement:"bottom-start"},on:{command:t.handleCommand}},[e("span",{staticClass:"el-dropdown-link"},[t.icon?e("vis-icon",{attrs:{code:t.icon}}):t._e(),e("span",{domProps:{textContent:t._s(t.label)}})],1),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t._t("default")],2)],1)],1)},i=[];const l={props:{trigger:{type:String,default:"click"},icon:{type:String},label:{type:String,default:"菜单"}},methods:{handleCommand(t){this.$emit("select",t)}}},o={};var _=r(l,a,i,!1,d,"00928636",null,null);function d(t){for(let n in o)this[n]=o[n]}const u=function(){return _.exports}();var p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fileMenu-container"},[e("div",{staticClass:"app-tips"},[e("el-image",{attrs:{src:"/image/logo.png"}}),e("span",{staticClass:"app-title"},[t._v("STATIC")])],1),e("dropdown-menu",{attrs:{icon:"#iconbangzhu",label:"帮助"},on:{select:t.select}},[e("el-dropdown-item",{attrs:{command:"shortcutKey"}},[t._v("快捷键")]),e("el-dropdown-item",{attrs:{command:"course"}},[t._v("使用教程")])],1),e("shortcut-key-document",{ref:"shortcutKey"})],1)},m=[];const v=()=>c(()=>import("./shortcutKeyDocument-24183c0e.js"),["assets/shortcutKeyDocument-24183c0e.js","assets/index-ea23a1e9.js","assets/three-6daa312a.js","assets/index-61cccf32.css","assets/shortcutKeyDocument-6db06d4f.css"]),f={components:{dropdownMenu:u,shortcutKeyDocument:v},data(){return{}},methods:{my(){console.log(1)},select(t){this[t]&&this[t]()},shortcutKey(){this.$refs.shortcutKey.visible=!0},course(){}}},s={};var h=r(f,p,m,!1,g,"681f63dc",null,null);function g(t){for(let n in s)this[n]=s[n]}const C=function(){return h.exports}();export{C as default};
