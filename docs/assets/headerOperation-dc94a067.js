import{n as m,a7 as d}from"./index-2dfd5781.js";import{J as h}from"./index-2b47d9b6.js";import"./three-c85558b8.js";var y=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"headerOperation-container"},[t("div",{staticClass:"operate-history"},[t("vis-icon",{attrs:{code:"#iconbianjiantouzuo"},nativeOn:{click:function(a){return(function(){e.$store.commit("canvasLibrary/backOffHistory")}).apply(null,arguments)}}}),t("vis-icon",{attrs:{code:"#iconbianjiantouyou"},nativeOn:{click:function(a){return(function(){e.$store.commit("canvasLibrary/forwardHistory")}).apply(null,arguments)}}})],1),t("div",{staticClass:"operate-address"},e._l(e.addressList,function(a,l){return t("span",{key:l,staticClass:"address-sign-box",on:{click:function(n){return e.chouseFile(a)}}},[l>0?t("vis-icon",{style:{transform:"scale(0.6)"},attrs:{code:"#iconsanjiaojiantouyou"}}):e._e(),t("span",{staticClass:"address-title",domProps:{textContent:e._s(a.name)}})],1)}),0),t("div",{staticClass:"operate-operation"},[t("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"},model:{value:e.classifyVisible,callback:function(a){e.classifyVisible=a},expression:"classifyVisible"}},[t("el-input",{staticClass:"popover-input",attrs:{size:"mini",placeholder:"输入分类名称"},model:{value:e.classifyName,callback:function(a){e.classifyName=a},expression:"classifyName"}}),t("div",{staticClass:"popover-operation"},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:e.addClassify}},[e._v(" 确定 ")])],1),t("vis-icon",{directives:[{name:"show",rawName:"v-show",value:e.canAddClassify,expression:"canAddClassify"},{name:"tooltip",rawName:"v-tooltip.top",value:"新增分类",expression:"'新增分类'",modifiers:{top:!0}}],attrs:{slot:"reference",code:"#iconjia1"},slot:"reference"})],1),e.canUpload?t("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"上传canvas npm压缩包，包含js文件、package.json、preview.png预览图",expression:`
        '上传canvas npm压缩包，包含js文件、package.json、preview.png预览图'
      `,modifiers:{top:!0}}],attrs:{code:"#iconshangchuan-fill"},nativeOn:{click:function(a){return e.upload.apply(null,arguments)}}}):e._e(),t("input",{ref:"uploadInput",staticStyle:{display:"none"},attrs:{type:"file",accept:".zip, .tgz",multiple:"multiple"},on:{change:e.fileHandler}})],1)])},g=[];const _={data(){return{classifyName:"",classifyVisible:!1}},computed:{currentFloder(){return this.$store.getters["canvasLibrary/currentFloder"]},canUpload(){const e=this.currentFloder.children;return this.currentFloder.parent?e.length&&!e[0].dir?!0:!e.length&&this.currentFloder.url!=="/":!1},canAddClassify(){const e=this.currentFloder.children;return e.length&&e[0].dir?!0:!e.length},addressList(){const e=[this.currentFloder],s=t=>{t.parent&&(e.unshift(t.parent),s(t.parent))};return s(this.currentFloder),e}},methods:{chouseFile(e){e.dir&&this.$store.commit("canvasLibrary/currentFloder",e)},upload(){this.$tool.safeTips().then(()=>{this.$refs.uploadInput.click()})},async fileHandler(e){const s=e.target.files[0],t=this.currentFloder.id,n=(await new h().loadAsync(s)).files;if(!n["package.json"]){this.$message.warning("上传失败！找不到配置文件：package.json"),this.$refs.uploadInput.value="";return}const c=JSON.parse(await n["package.json"].async("string"));let i=c.module||c.main;if(!i){this.$message.warning("上传失败！无法从package.json中获取有效的入口路径。"),this.$refs.uploadInput.value="";return}if(i.startsWith("/")?i=i.slice(1):i.startsWith("./")&&(i=i.slice(2)),!n[i]){this.$message.warning("上传失败！无法根据package.json的相关字段获取入口文件。"),this.$refs.uploadInput.value="";return}let o=n[i];o=await o.async("string"),o=new Blob([o],{type:"application/javascript"});const v=["jpg","png","jpeg"];let p;for(const r of v)n[`preview.${r}`]&&(p=`data:image/${r};base64,`+await n[`preview.${r}`].async("base64"));d.uploadCanvas({classifyId:t,name:s.name.split(".").shift(),canvas:o,pkg:c,preview:p,size:Object.values(n).reduce((r,u)=>u.dir?r:r+u._data.uncompressedSize,0)}).then(r=>{this.$store.commit("canvasLibrary/addChildren",r)}).finally(()=>{this.$refs.uploadInput.value=""})},addClassify(){this.classifyName.trim()?d.addClassify({name:this.classifyName.trim(),parentId:this.currentFloder.id}).then(e=>{this.$store.commit("canvasLibrary/addChildren",e),this.classifyName="",this.classifyVisible=!1,this.$message.success("添加分类成功！")}):(this.classifyName="",this.classifyVisible=!1)}}},f={};var b=m(_,y,g,!1,$,"7fe17574",null,null);function $(e){for(let s in f)this[s]=f[s]}const k=function(){return b.exports}();export{k as default};
