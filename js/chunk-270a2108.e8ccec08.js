(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-270a2108"],{"0a3a":function(e,t,i){},1276:function(e,t,i){"use strict";var a=i("d784"),n=i("44e7"),r=i("825a"),s=i("1d80"),o=i("4840"),l=i("8aa5"),c=i("50c4"),u=i("14c3"),h=i("9263"),p=i("d039"),d=[].push,m=Math.min,f=4294967295,v=!p((function(){return!RegExp(f,"y")}));a("split",2,(function(e,t,i){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,i){var a=String(s(this)),r=void 0===i?f:i>>>0;if(0===r)return[];if(void 0===e)return[a];if(!n(e))return t.call(a,e,r);var o,l,c,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,v=new RegExp(e.source,p+"g");while(o=h.call(v,a)){if(l=v.lastIndex,l>m&&(u.push(a.slice(m,o.index)),o.length>1&&o.index<a.length&&d.apply(u,o.slice(1)),c=o[0].length,m=l,u.length>=r))break;v.lastIndex===o.index&&v.lastIndex++}return m===a.length?!c&&v.test("")||u.push(""):u.push(a.slice(m)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:t.call(this,e,i)}:t,[function(t,i){var n=s(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n,i):a.call(String(n),t,i)},function(e,n){var s=i(a,e,this,n,a!==t);if(s.done)return s.value;var h=r(e),p=String(this),d=o(h,RegExp),g=h.unicode,M=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(v?"y":"g"),x=new d(v?h:"^(?:"+h.source+")",M),b=void 0===n?f:n>>>0;if(0===b)return[];if(0===p.length)return null===u(x,p)?[p]:[];var w=0,E=0,y=[];while(E<p.length){x.lastIndex=v?E:0;var C,k=u(x,v?p:p.slice(E));if(null===k||(C=m(c(x.lastIndex+(v?0:E)),p.length))===w)E=l(p,E,g);else{if(y.push(p.slice(w,E)),y.length===b)return y;for(var R=1;R<=k.length-1;R++)if(y.push(k[R]),y.length===b)return y;E=w=C}}return y.push(p.slice(w)),y}]}),!v)},"14c3":function(e,t,i){var a=i("c6b6"),n=i("9263");e.exports=function(e,t){var i=e.exec;if("function"===typeof i){var r=i.call(e,t);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"194e":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"material-container"},[i("div",{staticClass:"element-box material-list-box"},[i("div",{staticClass:"box-title",on:{click:function(t){return e.toggleBox("list")}}},[i("mmd-icon",{class:{"icon-open":e.boxController.list},attrs:{code:"#icon-arrow-right"}}),i("mmd-icon",{attrs:{code:"#icon-caizhi-"}}),i("span",[e._v("材质列表")])],1),i("el-collapse-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.boxController.list,expression:"boxController.list"}],staticClass:"box-main"},[i("material-list")],1)])],1),i("div",{staticClass:"element-box material-preview-box"},[i("div",{staticClass:"box-title",on:{click:function(t){return e.toggleBox("preview")}}},[i("mmd-icon",{class:{"icon-open":e.boxController.preview},attrs:{code:"#icon-arrow-right"}}),i("mmd-icon",{attrs:{code:"#icon-yulan"}}),i("span",[e._v("材质预览")])],1),i("el-collapse-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.boxController.preview,expression:"boxController.preview"}],staticClass:"box-main"},[i("preview-material")],1)])],1),i("div",{staticClass:"element-box material-setting-box"},[i("div",{staticClass:"box-title",on:{click:function(t){return e.toggleBox("setting")}}},[i("mmd-icon",{class:{"icon-open":e.boxController.setting},attrs:{code:"#icon-arrow-right"}}),i("mmd-icon",{attrs:{code:"#icon-shezhi"}}),i("span",[e._v("材质设置")])],1),i("el-collapse-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.boxController.setting,expression:"boxController.setting"}],staticClass:"box-main"},[i("material-config")],1)])],1)])},n=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"materialList-container",on:{dblclick:e.addMaterial}},["{}"===JSON.stringify(e.materialList)?i("div",{staticClass:"materialList-tips"},[i("span",[e._v("双击新增材质")])]):e._e(),e._l(e.materialList,(function(t,a){return i("div",{key:a,staticClass:"material-item",on:{mousedown:function(i){return e.setDrag(t.id)},click:function(i){return i.stopPropagation(),e.chouseMaterial(t.id)}}},[i("div",{ref:"thumbnail"+a,refInFor:!0,staticClass:"material-thumbnail",class:{"material-thumbnail-chouse":e.currentMaterial.id===t.id}}),i("div",{staticClass:"material-title",domProps:{textContent:e._s(t.name)}})])}))],2)},s=[],o=(i("4160"),i("d81d"),i("b0c0"),i("ac1f"),i("38cf"),i("1276"),i("159b"),i("d4ec")),l=i("bee2"),c=i("ade3"),u=(new THREE.TextureLoader).load("".concat("https://shiotsukikaedesari.gitee.io/mmddisplaydevice/","image/backgroundFloor.png"),(function(e){h.childrenList.forEach((function(e){e.update()}))}));u.wrapS=THREE.RepeatWrapping,u.wrapT=THREE.RepeatWrapping,u.repeat.set(1,1);var h=function(){function e(t,i){Object(o["a"])(this,e),this.id=i,this.dom=t,this._name="材质".concat(this.id),this._color="rgb(255, 255, 255)",this._emissive="rgb(0, 0, 0)",this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.scene=new THREE.Scene,this.ambientLight=new THREE.AmbientLight("rgb(255, 255, 255)",.7),this.pointLight=new THREE.PointLight("rgb(255, 255, 255)",.5,200,1),this.camera=new THREE.PerspectiveCamera(45,this.dom.clientWidth/this.dom.clientHeight,1,100),this.mesh=new THREE.Mesh(new THREE.SphereBufferGeometry(10,32,32),new THREE.MeshStandardMaterial({color:this._color})),this.backgroundPlane=new THREE.Mesh(new THREE.PlaneBufferGeometry(100,100),new THREE.MeshStandardMaterial({map:e.floorTexture})),this.floorPlane=new THREE.Mesh(new THREE.PlaneBufferGeometry(100,100),new THREE.MeshStandardMaterial({map:e.floorTexture})),this.init(),e.childrenList.push(this),0===this.id&&(e.previewMaterial=this)}return Object(l["a"])(e,[{key:"setTexture",value:function(t,i){var a=this;if(""===t)return this.mesh.material[i]=null,this.mesh.material.needsUpdate=!0,e.previewMaterial.mesh.material.needsUpdate=!0,this.update(),e.previewMaterial.update(),!1;var n=t.split(".").pop(),r="image";"mp4"===n&&(r="video"),App.$MMDProgress.showProgress(),App.$MMDProgress.setName(t),("image"===r||"video"===r)&&(new THREE.TextureLoader).load(t,(function(n){App.$MMDProgress.setPercentage(100),n.wrapS=THREE.RepeatWrapping,n.wrapT=THREE.RepeatWrapping,a.mesh.material[i]=n,a.mesh.material[i].name=t,a.mesh.material.needsUpdate=!0,e.previewMaterial.mesh.material.needsUpdate=!0,a.update(),e.previewMaterial.update()}),void 0,(function(e){console.error(e)}))}},{key:"init",value:function(){this.renderer.setSize(this.dom.clientWidth,this.dom.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.dom.appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(125, 125, 125)"),this.backgroundPlane.position.set(0,0,-20),this.floorPlane.position.set(0,-10,0),this.floorPlane.rotation.x=-90*Math.PI/180,this.pointLight.position.set(-30,5,20),this.pointLight.castShadow=!0,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.backgroundPlane.castShadow=!0,this.backgroundPlane.receiveShadow=!0,this.floorPlane.castShadow=!0,this.floorPlane.receiveShadow=!0,this.scene.add(this.ambientLight),this.scene.add(this.pointLight),this.scene.add(this.camera),this.scene.add(this.mesh),this.scene.add(this.backgroundPlane),this.scene.add(this.floorPlane),this.camera.position.x=0,this.camera.position.y=0,this.camera.position.z=40,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0)),this.update()}},{key:"update",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"updateAll",value:function(){this.update(),e.previewMaterial.update()}},{key:"name",get:function(){return this._name},set:function(e){this._name=e}},{key:"type",get:function(){return this.mesh.material.type},set:function(e){}},{key:"color",get:function(){return this._color},set:function(t){this._color=t,this.mesh.material.color=new THREE.Color(t),this.update(),e.previewMaterial.update()}},{key:"emissive",get:function(){return this._emissive},set:function(t){this._emissive=t,this.mesh.material.emissive=new THREE.Color(t),this.update(),e.previewMaterial.update()}},{key:"transparent",get:function(){return this.mesh.material.transparent},set:function(t){this.mesh.material.transparent=t,this.update(),e.previewMaterial.update()}},{key:"opacity",get:function(){return this.mesh.material.opacity},set:function(t){this.mesh.material.opacity=t,this.update(),e.previewMaterial.update()}},{key:"side",get:function(){return this.mesh.material.side},set:function(e){this.mesh.material.side=e}},{key:"wireframe",get:function(){return this.mesh.material.wireframe},set:function(t){this.mesh.material.wireframe=t,this.update(),e.previewMaterial.update()}},{key:"metalnessMap",get:function(){return this.mesh.material.metalnessMap},set:function(e){this.setTexture(e,"metalnessMap")}},{key:"metalness",get:function(){return this.mesh.material.metalness},set:function(t){this.mesh.material.metalness=t,this.update(),e.previewMaterial.update()}},{key:"roughnessMap",get:function(){return this.mesh.material.roughnessMap},set:function(e){this.setTexture(e,"roughnessMap")}},{key:"roughness",get:function(){return this.mesh.material.roughness},set:function(t){this.mesh.material.roughness=t,this.update(),e.previewMaterial.update()}},{key:"map",get:function(){return this.mesh.material.map},set:function(e){this.setTexture(e,"map")}},{key:"alphaMap",get:function(){return this.mesh.material.alphaMap},set:function(e){this.setTexture(e,"alphaMap")}},{key:"bumpMap",get:function(){return this.mesh.material.bumpMap},set:function(e){this.setTexture(e,"bumpMap")}},{key:"bumpScale",get:function(){return this.mesh.material.bumpScale},set:function(t){this.mesh.material.bumpScale=t,this.update(),e.previewMaterial.update()}},{key:"envMap",get:function(){return!!this.mesh.material.envMap},set:function(t){var i=MMD.MMDScene.scene;t&&i.background?(console.log(i.background),this.mesh.material.envMap=i.background):this.mesh.material.envMap=null,this.mesh.material.needsUpdate=!0,e.previewMaterial.mesh.material.needsUpdate=!0,this.update(),e.previewMaterial.update()}},{key:"envMapIntensity",get:function(){return this.mesh.material.envMapIntensity},set:function(t){this.mesh.material.envMapIntensity=t,console.log(this.mesh.material),this.update(),e.previewMaterial.update()}},{key:"aoMap",get:function(){return this.mesh.material.aoMap},set:function(e){this.setTexture(e,"aoMap")}},{key:"aoMapIntensity",get:function(){return this.mesh.material.aoMapIntensity},set:function(t){this.mesh.material.aoMapIntensity=t,this.update(),e.previewMaterial.update()}}]),e}();Object(c["a"])(h,"floorTexture",u),Object(c["a"])(h,"childrenList",[]),Object(c["a"])(h,"previewMaterial","");var p=h,d={data:function(){return{materialId:1}},computed:{materialList:function(){return this.$store.getters.getMaterialList},currentMaterial:function(){return this.$store.getters.getCurrentMaterial}},methods:{addMaterial:function(){var e=this,t=this.materialId;this.materialId+=1,this.$store.commit("addMaterial",t),this.$nextTick((function(){e.$store.commit("renderDom",{id:t,material:new p(e.$refs["thumbnail".concat(t)][0],t)})}))},chouseMaterial:function(e){this.$store.commit("setCurrentMaterial",e),this.$store.commit("setIsDrag",!1)},setDrag:function(e){this.chouseMaterial(e),this.$store.commit("setIsDrag",!0)}}},m=d,f=(i("5edd"),i("2877")),v=Object(f["a"])(m,r,s,!1,null,"3f428a0c",null),g=v.exports,M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"previewMaterial",staticClass:"previewMaterial-container"})},x=[],b={data:function(){return{previewMaterial:""}},watch:{"$store.getters.getCurrentMaterial":function(e,t){this.previewMaterial.mesh.material=e.mesh.material,this.previewMaterial.update()}},mounted:function(){this.previewMaterial=new p(this.$refs.previewMaterial,0)}},w=b,E=(i("8641"),Object(f["a"])(w,M,x,!1,null,"478d68ca",null)),y=E.exports,C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"materialConfig-container"},[e.currentMaterial?i("div",{staticClass:"materialConfig-box"},[i("MMD-input",{attrs:{title:"材质命名"},model:{value:e.currentMaterial.name,callback:function(t){e.$set(e.currentMaterial,"name",t)},expression:"currentMaterial.name"}}),i("MMD-select",{attrs:{title:"材质类型",options:e.materialTypeList},model:{value:e.currentMaterial.type,callback:function(t){e.$set(e.currentMaterial,"type",t)},expression:"currentMaterial.type"}}),i("MMD-switch",{attrs:{title:"材质透明"},model:{value:e.currentMaterial.transparent,callback:function(t){e.$set(e.currentMaterial,"transparent",t)},expression:"currentMaterial.transparent"}}),i("MMD-slider",{attrs:{title:"透明程度",min:0,max:1,step:.01},model:{value:e.currentMaterial.opacity,callback:function(t){e.$set(e.currentMaterial,"opacity",t)},expression:"currentMaterial.opacity"}}),i("MMD-select",{attrs:{title:"渲染面",options:e.materialSide},model:{value:e.currentMaterial.side,callback:function(t){e.$set(e.currentMaterial,"side",t)},expression:"currentMaterial.side"}}),i("div",{staticClass:"materialConfig-config"},[i(e.currentMaterial.type,{tag:"component"})],1)],1):i("div",{staticClass:"materialConfig-tips"},[i("span",[e._v("请选择材质")])])])},k=[],R=(i("d3b7"),function(){return i.e("chunk-15802f19").then(i.bind(null,"07d5"))}),T={components:{MeshStandardMaterial:R},data:function(){return{materialTypeList:[{label:"MeshStandardMaterial",value:"MeshStandardMaterial"}],materialSide:[{label:"前面",value:THREE.FrontSide},{label:"背面",value:THREE.BackSide},{label:"双面",value:THREE.DoubleSide}]}},computed:{currentMaterial:function(){return this.$store.state.rightNav.currentMaterial}}},S=T,_=(i("409a"),Object(f["a"])(S,C,k,!1,null,"0bf0b8e8",null)),P=_.exports,I={components:{materialList:g,previewMaterial:y,materialConfig:P},data:function(){return{boxController:{list:!0,preview:!0,setting:!0},materialList:[]}},methods:{toggleBox:function(e){for(var t in this.boxController)if(t===e){this.boxController[t]=!this.boxController[t];break}}}},$=I,H=(i("1f78"),Object(f["a"])($,a,n,!1,null,"4c4f1ce2",null));t["default"]=H.exports},"1f78":function(e,t,i){"use strict";var a=i("f2c9"),n=i.n(a);n.a},2892:function(e,t,i){},"409a":function(e,t,i){"use strict";var a=i("2892"),n=i.n(a);n.a},"5edd":function(e,t,i){"use strict";var a=i("738d"),n=i.n(a);n.a},6547:function(e,t,i){var a=i("a691"),n=i("1d80"),r=function(e){return function(t,i){var r,s,o=String(n(t)),l=a(i),c=o.length;return l<0||l>=c?e?"":void 0:(r=o.charCodeAt(l),r<55296||r>56319||l+1===c||(s=o.charCodeAt(l+1))<56320||s>57343?e?o.charAt(l):r:e?o.slice(l,l+2):s-56320+(r-55296<<10)+65536)}};e.exports={codeAt:r(!1),charAt:r(!0)}},"738d":function(e,t,i){},8641:function(e,t,i){"use strict";var a=i("0a3a"),n=i.n(a);n.a},"8aa5":function(e,t,i){"use strict";var a=i("6547").charAt;e.exports=function(e,t,i){return t+(i?a(e,t).length:1)}},9263:function(e,t,i){"use strict";var a=i("ad6d"),n=i("9f7f"),r=RegExp.prototype.exec,s=String.prototype.replace,o=r,l=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],h=l||u||c;h&&(o=function(e){var t,i,n,o,h=this,p=c&&h.sticky,d=a.call(h),m=h.source,f=0,v=e;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),v=String(e).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==e[h.lastIndex-1])&&(m="(?: "+m+")",v=" "+v,f++),i=new RegExp("^(?:"+m+")",d)),u&&(i=new RegExp("^"+m+"$(?!\\s)",d)),l&&(t=h.lastIndex),n=r.call(p?i:h,v),p?n?(n.input=n.input.slice(f),n[0]=n[0].slice(f),n.index=h.lastIndex,h.lastIndex+=n[0].length):h.lastIndex=0:l&&n&&(h.lastIndex=h.global?n.index+n[0].length:t),u&&n&&n.length>1&&s.call(n[0],i,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),e.exports=o},"9f7f":function(e,t,i){"use strict";var a=i("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,i){"use strict";var a=i("23e7"),n=i("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,i){"use strict";var a=i("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ade3:function(e,t,i){"use strict";function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,"a",(function(){return a}))},bee2:function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),e}i.d(t,"a",(function(){return n}))},d4ec:function(e,t,i){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}i.d(t,"a",(function(){return a}))},d784:function(e,t,i){"use strict";i("ac1f");var a=i("6eeb"),n=i("d039"),r=i("b622"),s=i("9263"),o=i("9112"),l=r("species"),c=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),h=r("replace"),p=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),d=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));e.exports=function(e,t,i,h){var m=r(e),f=!n((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),v=f&&!n((function(){var t=!1,i=/a/;return"split"===e&&(i={},i.constructor={},i.constructor[l]=function(){return i},i.flags="",i[m]=/./[m]),i.exec=function(){return t=!0,null},i[m](""),!t}));if(!f||!v||"replace"===e&&(!c||!u||p)||"split"===e&&!d){var g=/./[m],M=i(m,""[e],(function(e,t,i,a,n){return t.exec===s?f&&!n?{done:!0,value:g.call(t,i,a)}:{done:!0,value:e.call(i,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=M[0],b=M[1];a(String.prototype,e,x),a(RegExp.prototype,m,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}h&&o(RegExp.prototype[m],"sham",!0)}},d81d:function(e,t,i){"use strict";var a=i("23e7"),n=i("b727").map,r=i("1dde"),s=i("ae40"),o=r("map"),l=s("map");a({target:"Array",proto:!0,forced:!o||!l},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},f2c9:function(e,t,i){}}]);