(function(t){function e(e){for(var s,n,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0383":function(t,e,a){"use strict";var s=a("7505"),i=a.n(s);i.a},"0d5f":function(t,e,a){"use strict";var s=a("58a6"),i=a.n(s);i.a},"0e20":function(t,e,a){"use strict";var s=a("e124"),i=a.n(s);i.a},"0e68":function(t,e,a){t.exports=a.p+"img/bug2.0d6c083b.png"},"1a8a":function(t,e,a){"use strict";var s=a("b5e8"),i=a.n(s);i.a},"383d":function(t,e,a){"use strict";var s=a("c434"),i=a.n(s);i.a},"48f8":function(t,e,a){"use strict";var s=a("fdbc"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[s("img",{staticClass:"bug",attrs:{src:a("0e68")}})]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),s("span",{staticClass:"navbar-text"},[s("ReportBug")],1),s("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-sm mx-1 btn-danger",on:{click:t.logout}},[t._v("Logout")]):s("button",{staticClass:"btn btn-sm mx-1 btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"report-bug"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v("Report Bug")]):t._e(),a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"input-group input-group-sm mb-3"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.title,expression:"bug.title"}],staticClass:"form-control",attrs:{required:"",type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"},domProps:{value:t.bug.title},on:{input:function(e){e.target.composing||t.$set(t.bug,"title",e.target.value)}}})]),a("small",{staticClass:"text-white"},[t._v("Description")]),a("div",{staticClass:"input-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bug.description,expression:"bug.description"}],staticClass:"form-control",attrs:{rows:"5",required:"","aria-label":"With textarea"},domProps:{value:t.bug.description},on:{input:function(e){e.target.composing||t.$set(t.bug,"description",e.target.value)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(e){return e.preventDefault(),t.reportBug(e)}}},[t._v("Submit")])])])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Bug Report Form")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-sm"}},[t._v("Title")])])}],u={name:"report-bug",data(){return{bug:{}}},computed:{},methods:{reportBug(){this.$store.dispatch("createBug",this.bug),this.bug={}}},components:{}},d=u,p=a("2877"),m=Object(p["a"])(d,l,c,!1,null,"d54f385a",null),v=m.exports,g=a("bc3a"),b=a.n(g),h=a("335d"),f={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getProfile")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}},components:{ReportBug:v}},C=f,_=(a("1a8a"),Object(p["a"])(C,n,r,!1,null,null,null)),y=_.exports,x={name:"App",async beforeCreate(){await Object(h["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:y}},B=x,$=(a("5c0b"),Object(p["a"])(B,i,o,!1,null,null,null)),w=$.exports,N=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid"},[a("div",{staticClass:"row mt-4 justify-content-center"},[a("div",{staticClass:"col-10 mb-1 text-right"},[a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"defaultCheck1"},on:{click:function(e){t.display.open=!t.display.open}}}),a("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck1"}},[t._v("Hide Closed")])])]),a("div",{staticClass:"col-10 border"},[t._m(0),t._l(t.bugs,(function(e,s){return a("Bug",{key:e._id,attrs:{displayOpen:t.display.open,bugData:e,bugIndex:s}})}))],2)])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-uppercase text-center bg-secondary py-1"},[a("div",{staticClass:"col-4"},[t._v("Title")]),a("div",{staticClass:"col-4"},[t._v("Reported By")]),a("div",{staticClass:"col-1"},[t._v("Status")]),a("div",{staticClass:"col-3"},[t._v("Last Modified")])])}],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Bug"},[t.displayOpen&&!this.bugData.closed||!t.displayOpen?a("div",{staticClass:"row bug-bg border-bottom border-dark text-center",on:{click:t.viewDetails}},[a("div",{staticClass:"col-4 text-capitalize text-black"},[t._v(t._s(t.bugData.title))]),a("div",{staticClass:"col-4"},[t._v(t._s(t.bugData.creator.name))]),t.bugData.closed?a("div",{staticClass:"text-success col-1"},[t._v("Closed")]):a("div",{staticClass:"text-danger col-1"},[t._v("Open")]),a("div",{staticClass:"col-3"},[t._v(t._s(t.displayDate()))])]):a("div")])},j=[],P={name:"Bug",props:["bugData","bugIndex","displayOpen"],data(){return{}},computed:{},methods:{displayDate(){let t=this.bugData.updatedAt.split("T");return t[0]},viewDetails(){this.$auth.isAuthenticated&&(this.$store.commit("setNotes",[]),this.$store.commit("setActiveBug",{}),this.$store.dispatch("getBug",this.bugData._id),this.$router.push({name:"BugDetails",params:{bugId:this.bugData._id}}))}},components:{}},E=P,S=(a("383d"),Object(p["a"])(E,O,j,!1,null,"477626e8",null)),A=S.exports,T={name:"home",data(){return{display:{open:!1}}},mounted(){this.$store.dispatch("getBugs")},computed:{bugs(){return this.$store.state.bugs}},methods:{},components:{Bug:A}},M=T,z=(a("0e20"),Object(p["a"])(M,k,D,!1,null,"3b59981b",null)),I=z.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about text-center"},[a("h1",[t._v("Welcome "+t._s(t.profile.name))]),a("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),a("p",[t._v(t._s(t.profile.email))])])},L=[],R={name:"Profile",computed:{profile(){return this.$store.state.profile}}},Y=R,q=(a("0383"),Object(p["a"])(Y,H,L,!1,null,"59c2bb44",null)),J=q.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"BugDetails"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mt-5 justify-content-center"},[a("div",{staticClass:"col-10 py-2 border border-info text-dark bg-light"},[a("h5",[t._v("Title:")]),a("h1",{staticClass:"text-capitalize"},[t._v(t._s(t.activeBug.title))]),a("div",{staticClass:"row justify-content-between"},[a("div",{staticClass:"col-6"},[a("span",[t._v("Creator Email :")]),a("h4",{staticClass:"inline text-capitalize"},[t._v(t._s(t.activeBug.creator.name))])]),a("div",{staticClass:"text-right mt-2 pr-5 col-6"},[a("span",[t._v("Status :")]),t.activeBug.closed?a("div",{staticClass:"inline text-success"},[t._v("Closed")]):a("div",{staticClass:"inline text-danger"},[t._v("Open")])])]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"bg-white border border-dark col-11"},[a("p",[t._v(t._s(t.activeBug.description))])])]),a("div",{staticClass:"row justify-content-lg-center text-right"},[a("div",{staticClass:"col-11"},[a("span",[t.editing?a("form",{on:{submit:function(e){return e.preventDefault(),t.editBug(e)}}},[a("div",{staticClass:"form-group"},[a("small",{staticClass:"form-text text-center text-muted",attrs:{id:"helpId"}},[t._v("Modify Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.activeBug.title,expression:"activeBug.title"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"helpId",placeholder:""},domProps:{value:t.activeBug.title},on:{input:function(e){e.target.composing||t.$set(t.activeBug,"title",e.target.value)}}}),a("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v("Submit")])])]):t._e(),t.activeBug.creator.email!=this.$store.state.profile.email||t.activeBug.closed?t._e():a("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){t.editing=!t.editing}}},[t._v("Modify")])]),t.activeBug.closed?t._e():a("button",{staticClass:"my-1 mr-n2 btn btn-danger",attrs:{type:"button"},on:{click:t.changeStatus}},[t._v("Close")])])]),a("Notes",{attrs:{bugData:t.activeBug}})],1)])])])},W=[],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Notes"},[a("div",{staticClass:"row my-2"},[t._m(0),a("div",{staticClass:"border border-dark offset-1 col-10"},[t._m(1),t._l(t.notes,(function(t){return a("Note",{key:t._id,attrs:{noteData:t}})}))],2),a("div",{staticClass:"col-11 text-right"},[a("AddNote")],1)])])},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-2 align offset-1"},[a("h5",[t._v("Notes")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row bg-info"},[a("div",{staticClass:"col-3"},[t._v("Name")]),a("div",{staticClass:"col-9"},[t._v("Message")])])}],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Add-Note"},[a("button",{staticClass:"my-1 mr-n2 btn btn-sm btn-secondary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModalCenter"}},[t._v(" Add Note ")]),a("div",{staticClass:"modal fade",attrs:{id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title text-white",attrs:{id:"exampleModalLongTitle"}},[t._v(t._s(t.activeBug.title))]),t._m(0)]),a("div",{staticClass:"modal-body text-white"},[a("form",[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.content,expression:"note.content"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:t.note.content},on:{input:function(e){e.target.composing||t.$set(t.note,"content",e.target.value)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.createNote}},[t._v("Submit")])])])])])])},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],Q={name:"Add-Note",props:["bugData"],data(){return{note:{}}},computed:{activeBug(){return this.$store.state.activeBug}},methods:{createNote(){this.note.bug=this.activeBug._id,this.$store.dispatch("createNote",this.note),this.note={}}},components:{}},X=Q,Z=Object(p["a"])(X,V,K,!1,null,"e24c2f10",null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Note"},[a("div",{staticClass:"row note bg-grey"},[a("div",{staticClass:"col-3"},[t._v(t._s(t.noteData.creator.name))]),a("div",{staticClass:"col-8"},[t._v(t._s(t.noteData.content))]),a("div",{staticClass:"col-1"},[this.$store.state.profile.email==this.noteData.creator.email?a("span",{staticClass:"justify-self-end text-danger",on:{click:t.deleteNote}},[t._v("✖")]):t._e()])])])},at=[],st={name:"Note",props:["noteData"],data(){return{}},computed:{},methods:{deleteNote(){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&(Swal.fire("Deleted!","Your note has been deleted.","success"),this.$store.dispatch("deleteNote",this.noteData))})}},components:{}},it=st,ot=(a("48f8"),Object(p["a"])(it,et,at,!1,null,"73b38653",null)),nt=ot.exports,rt={name:"Notes",props:["bugData"],data(){return{}},mounted(){this.$store.dispatch("getNotes",this.$route.params.bugId)},computed:{notes(){return this.$store.state.notes}},methods:{},components:{AddNote:tt,Note:nt}},lt=rt,ct=(a("784a"),Object(p["a"])(lt,F,G,!1,null,"6fc86c90",null)),ut=ct.exports,dt={name:"BugDetails",data(){return{editing:!1}},mounted(){this.$store.dispatch("getBug",this.$route.params.bugId)},computed:{activeBug(){return this.$store.state.activeBug}},methods:{editBug(){this.$store.dispatch("editBug",this.activeBug),this.editing=!1},changeStatus(){Swal.fire({title:"Are you sure?",text:"You won't be able to revert the bug status!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, change status!"}).then(t=>{t.value&&(Swal.fire("Case Closed!","Your bug status has been updated","success"),this.activeBug.closed=!0,this.$store.dispatch("editBug",this.activeBug))})}},components:{Notes:ut}},pt=dt,mt=(a("0d5f"),Object(p["a"])(pt,U,W,!1,null,"5ded8016",null)),vt=mt.exports;s["a"].use(N["a"]);const gt=[{path:"/",name:"Home",component:I},{path:"/BugDetails/:bugId",name:"BugDetails",component:vt,beforeEnter:h["b"]},{path:"/profile",name:"Profile",component:J,beforeEnter:h["b"]}],bt=new N["a"]({routes:gt});var ht=bt,ft=a("2f62");s["a"].use(ft["a"]);let Ct=location.host.includes("localhost")?"http://localhost:3000/":"/",_t=b.a.create({baseURL:Ct+"api",timeout:3e3,withCredentials:!0});var yt=new ft["a"].Store({state:{profile:{},bugs:[],activeBug:{},notes:[]},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},setActiveBug(t,e){t.activeBug=e},setNotes(t,e){t.notes=e}},actions:{setBearer({},t){_t.defaults.headers.authorization=t},resetBearer(){_t.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await _t.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async createBug({dispatch:t,commit:e},a){try{let s=await _t.post("/bugs",a);e("setActiveBug",s.data),ht.push({name:"BugDetails",params:{bugId:s.data._id}}),t("getBugs")}catch(s){console.error(s)}},async getBugs({dispatch:t,commit:e}){try{let t=await _t.get("/bugs");e("setBugs",t.data)}catch(a){console.error(a)}},async getBug({dispatch:t,commit:e},a){try{let t=await _t.get(`bugs/${a}`);e("setActiveBug",t.data)}catch(s){console.error(s)}},async editBug({dispatch:t,commit:e},a){try{await _t.put(`bugs/${a._id}`,a);t("getBug",a._id)}catch(s){console.error(s)}},async createNote({dispatch:t,commit:e},a){try{console.log(a);await _t.post(`bugs/${a.bug}/notes`,a);t("getNotes",a.bug)}catch(s){console.error(s)}},async getNotes({dispatch:t,commit:e},a){try{let t=await _t.get(`notes/${a}`);e("setNotes",t.data)}catch(s){console.error(s)}},async deleteNote({dispatch:t,commit:e},a){try{await _t.delete(`notes/${a._id}`),t("getNotes",a.bug)}catch(s){console.error(s)}}}});const xt="dev-hwbz9ahi.auth0.com",Bt="https://kanban2-api.com",$t="S1NPTflS0VpmVqdy51l9rtFTJjzY99Hg";s["a"].use(h["a"],{domain:xt,clientId:$t,audience:Bt,onRedirectCallback:t=>{ht.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:ht,store:yt,render:function(t){return t(w)}}).$mount("#app")},"58a6":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},7505:function(t,e,a){},"784a":function(t,e,a){"use strict";var s=a("f1ad"),i=a.n(s);i.a},"9c0c":function(t,e,a){},b5e8:function(t,e,a){},c434:function(t,e,a){},e124:function(t,e,a){},f1ad:function(t,e,a){},fdbc:function(t,e,a){}});