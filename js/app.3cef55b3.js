(function(l){function i(i){for(var n,r,a=i[0],s=i[1],c=i[2],u=0,f=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&f.push(t[r][0]),t[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(l[n]=s[n]);p&&p(i);while(f.length)f.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var l,i=0;i<o.length;i++){for(var e=o[i],n=!0,a=1;a<e.length;a++){var s=e[a];0!==t[s]&&(n=!1)}n&&(o.splice(i--,1),l=r(r.s=e[0]))}return l}var n={},t={app:0},o=[];function r(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return l[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=l,r.c=n,r.d=function(l,i,e){r.o(l,i)||Object.defineProperty(l,i,{enumerable:!0,get:e})},r.r=function(l){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},r.t=function(l,i){if(1&i&&(l=r(l)),8&i)return l;if(4&i&&"object"===typeof l&&l&&l.__esModule)return l;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:l}),2&i&&"string"!=typeof l)for(var n in l)r.d(e,n,function(i){return l[i]}.bind(null,n));return e},r.n=function(l){var i=l&&l.__esModule?function(){return l["default"]}:function(){return l};return r.d(i,"a",i),i},r.o=function(l,i){return Object.prototype.hasOwnProperty.call(l,i)},r.p="/quill-css-performance-issue/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=i,a=a.slice();for(var c=0;c<a.length;c++)i(a[c]);var p=s;o.push([0,"chunk-vendors"]),e()})({0:function(l,i,e){l.exports=e("56d7")},4549:function(l,i,e){},"56d7":function(l,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),t=function(){var l=this,i=l.$createElement,e=l._self._c||i;return e("v-app",[e("v-navigation-drawer",{attrs:{value:!0,permanent:"",stateless:"",app:""}},l._l(300,(function(i){return e("v-btn",{key:i,attrs:{icon:""}},[e("v-icon",[l._v("mdi-plus")])],1)})),1),e("v-main",[e("v-container",[e("HeavyTest")],1)],1)],1)},o=[],r=function(){var l=this,i=l.$createElement,e=l._self._c||i;return e("v-row",[e("v-col",{attrs:{auto:""}},[e("v-btn",{on:{click:function(i){l.showContent=!l.showContent}}},[l._v(" "+l._s(l.showContent?"Hide":"Show")+" ")]),e("v-btn",{on:{click:function(i){l.setClass=!l.setClass}}},[l._v(" "+l._s(l.setClass?"Remove li counter class":"Add li counter class")+" ")]),e("div",{class:{"ql-editor":l.setClass},domProps:{innerHTML:l._s(l.showContent?l.sampleText:"")}})],1)],1)},a=[],s=(e("a15b"),e("cb29"),'\n<ol><li><span style="background-color: rgb(255, 255, 204);">NOT MDI “default workspace”</span></li><li>Campaign</li><li>Payments</li><li>Home</li><li>Home_work</li><li>Apartment</li><li>Store</li><li>Deck</li><li>Emoji_food_beverage</li><li>perm_phone_msg</li><li>email</li>\n<li>shopping_basket</li><li>shopping_cart</li><li>monetization_on</li><li>local_mall</li></ol><p><br></p><p><strong>People:</strong></p><p><br></p><ol><li>account_box</li><li>group</li><li>groups</li></ol><p><br></p><p><strong>Industry:</strong></p><p><br></p><ol><li>directions_car</li><li>local_shipping</li><li>flight</li><li>construction</li><li>architecture</li><li>local_hospital</li><li>local_pharmacy</li><li>movie</li><li>theaters</li><li>palette</li></ol><p><br></p><p><strong>Technology:</strong></p><p><br></p><ol><li>tv</li><li>videocam</li><li>bug_report</li><li>print</li><li>send</li><li>psychology</li><li>code</li><li>language</li></ol><p><br></p><p><strong>Miscallaneous:</strong></p><p><br></p><ol><li>event</li><li>schedule</li><li>bar_chart</li><li>extension</li><li>flag</li><li>grade</li><li>casino</li><li>emoji_objects</li><li>table_chart</li><li>pie_chart</li><li>donut_large</li><li>ac_unit</li><li>explore</li>\n<li>new_releases</li><li>near_me</li><li><span style="background-color: rgb(255, 255, 204);">NOT MDI “dots”</span></li><li>local_fire_department</li><li>local_florist</li><li>public</li><li>eco</li></ol>\n'),c={data:function(){return{sampleText:Array(10).fill(s).join("\n"),showContent:!1,setClass:!1}}},p=c,u=(e("bcf6"),e("2877")),f=e("6544"),d=e.n(f),b=e("8336"),v=e("62ad"),g=e("0fd9"),_=Object(u["a"])(p,r,a,!1,null,null,null),h=_.exports;d()(_,{VBtn:b["a"],VCol:v["a"],VRow:g["a"]});var m={name:"App",components:{HeavyTest:h}},y=m,w=e("7496"),j=e("a523"),O=e("132d"),x=e("f6c4"),C=e("f774"),k=Object(u["a"])(y,t,o,!1,null,null,null),T=k.exports;d()(k,{VApp:w["a"],VBtn:b["a"],VContainer:j["a"],VIcon:O["a"],VMain:x["a"],VNavigationDrawer:C["a"]});var P=e("f309");n["a"].use(P["a"]);var M=new P["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:M,render:function(l){return l(T)}}).$mount("#app")},bcf6:function(l,i,e){"use strict";e("4549")}});
//# sourceMappingURL=app.3cef55b3.js.map