(this.webpackJsonpinotebook=this.webpackJsonpinotebook||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),l=s(19),n=s.n(l),i=(s(26),s(27),s(8)),r=s(2),o=s(0),j=function(){var e=Object(r.g)();return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(i.b,{className:"navbar-brand",to:"/",children:"MyNoteBook.com"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link ".concat("/"===e.pathname?"active":""),"aria-current":"page",to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link ".concat("/about"===e.pathname?"active":""),to:"/about",children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link ".concat("/about"===e.pathname?"active":""),to:"/contact",children:"Contact Us"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link ".concat("/about"===e.pathname?"active":""),to:"/blog",children:"Blog"})})]}),Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)(i.b,{className:"btn btn-primary mx-1",to:"/login",role:"button",children:"Login"}),Object(o.jsx)(i.b,{className:"btn btn-primary mx-1",to:"/signup",role:"button",children:"Signup"})]})]})]})})},d=s(10),b=s(9),m=s(11),h=Object(c.createContext)(),x=function(e){var t=Object(c.useContext)(h).deleteNote,s=e.note,a=e.updateNote;return Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)("div",{className:"card my-3",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsx)("h5",{className:"card-title",children:s.title}),Object(o.jsx)("i",{className:"far fa-trash-alt mx-2",onClick:function(){t(s._id)}}),Object(o.jsx)("i",{className:"far fa-edit mx-2",onClick:function(){a(s)}})]}),Object(o.jsx)("p",{className:"card-text",children:s.description})]})})})},p=function(){var e=Object(c.useContext)(h).addNote,t=Object(c.useState)({title:"",description:"",tag:""}),s=Object(m.a)(t,2),a=s[0],l=s[1],n=function(e){l(Object(b.a)(Object(b.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h2",{children:"Add a Note"}),Object(o.jsxs)("form",{className:"my-3",children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title","aria-describedby":"emailHelp",value:a.title,onChange:n,minLength:5,required:!0})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"description",name:"description",value:a.description,onChange:n,minLength:5,required:!0})]}),Object(o.jsxs)("div",{className:"mb-3 my-3",children:[Object(o.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"tag",name:"tag",value:a.tag,onChange:n,minLength:5,required:!0})]}),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)("input",{type:"file",name:"Select file",id:"file"})}),Object(o.jsx)("button",{disabled:a.title.length<5||a.description.length<5,type:"submit",className:"btn btn-primary",onClick:function(t){t.preventDefault(),e(a.title,a.description,a.tag),l({title:"",description:"",tag:""})},children:"Add Note"})]})]})},O=function(){var e=Object(c.useContext)(h),t=e.notes,s=e.getNotes,a=e.editNote;Object(c.useEffect)((function(){s()}),[]);var l=Object(c.useRef)(null),n=Object(c.useRef)(null),i=Object(c.useState)({id:"",etitle:"",edescription:"",etag:""}),r=Object(m.a)(i,2),j=r[0],O=r[1],u=function(e){l.current.click(),O({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},N=function(e){O(Object(b.a)(Object(b.a)({},j),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p,{}),Object(o.jsx)("button",{ref:l,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Launch demo modal"}),Object(o.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(o.jsx)("div",{className:"modal-dialog",children:Object(o.jsxs)("div",{className:"modal-content",children:[Object(o.jsxs)("div",{className:"modal-header",children:[Object(o.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Edit Note"}),Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(o.jsx)("div",{className:"modal-body",children:Object(o.jsxs)("form",{className:"my-3",children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"etitle",name:"etitle",value:j.etitle,"aria-describedby":"emailHelp",onChange:N,minLength:5,required:!0})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"edescription",name:"edescription",value:j.edescription,onChange:N,minLength:5,required:!0})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"etag",name:"etag",value:j.etag,onChange:N})]})]})}),Object(o.jsxs)("div",{className:"modal-footer",children:[Object(o.jsx)("button",{ref:n,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(o.jsx)("button",{disabled:j.etitle.length<5||j.edescription.length<5,onClick:function(e){a(j.id,j.etitle,j.edescription,j.etag),n.current.click()},type:"button",className:"btn btn-primary",children:"Update Note"})]})]})})}),Object(o.jsxs)("div",{className:"row my-3",children:[Object(o.jsx)("h2",{children:"You Notes"}),Object(o.jsx)("div",{className:"container mx-2",children:0===t.length&&"No notes to display"}),t.map((function(e){return Object(o.jsx)(x,{updateNote:u,note:e},e._id)}))]})]})},u=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(O,{})})},N=function(){return Object(o.jsx)("div",{children:"This is About page"})},g=s(7),v=s.n(g),f=s(13),y=function(e){var t="http://localhost:5000",s=Object(c.useState)([]),a=Object(m.a)(s,2),l=a[0],n=a[1],i=function(){var e=Object(f.a)(v.a.mark((function e(){var s,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"}});case 2:return s=e.sent,e.next=5,s.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(f.a)(v.a.mark((function e(s,c,a){var i,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"},body:JSON.stringify({title:s,description:c,tag:a})});case 2:return i=e.sent,e.next=5,i.json();case 5:r=e.sent,n(l.concat(r));case 7:case"end":return e.stop()}}),e)})));return function(t,s,c){return e.apply(this,arguments)}}(),j=function(){var e=Object(f.a)(v.a.mark((function e(s){var c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(s),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"}});case 2:c=e.sent,c.json(),a=l.filter((function(e){return e._id!==s})),n(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(f.a)(v.a.mark((function e(s,c,a,i){var r,o,j;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(s),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"},body:JSON.stringify({title:c,description:a,tag:i})});case 2:return r=e.sent,e.next=5,r.json();case 5:e.sent,o=JSON.parse(JSON.stringify(l)),j=0;case 8:if(!(j<o.length)){e.next=18;break}if(o[j]._id!==s){e.next=15;break}return o[j].title=c,o[j].description=a,o[j].tag=i,e.abrupt("break",18);case 15:j++,e.next=8;break;case 18:n(o);case 19:case"end":return e.stop()}}),e)})));return function(t,s,c,a){return e.apply(this,arguments)}}();return Object(o.jsx)(h.Provider,{value:{notes:l,addNote:r,deleteNote:j,editNote:d,getNotes:i},children:e.children})},w=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"alert alert-primary",role:"alert",children:e.message})})},I=(s(35),function(){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"container register",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-3 register-left",children:[Object(o.jsx)("img",{src:"https://image.ibb.co/n7oTvU/logo_white.png",alt:""}),Object(o.jsx)("h3",{children:"Welcome"}),Object(o.jsx)("p",{children:"You are 30 seconds away from earning your own money!"}),Object(o.jsx)("input",{type:"submit",name:"",value:"Login"}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("div",{className:"col-md-9 register-right",children:[Object(o.jsxs)("ul",{className:"nav nav-tabs nav-justified",id:"myTab",role:"tablist",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active",id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true",children:"Login"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false",children:"Signup"})})]}),Object(o.jsxs)("div",{className:"tab-content",id:"myTabContent",children:[Object(o.jsxs)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:[Object(o.jsx)("h3",{className:"register-heading",children:"Signup Here"}),Object(o.jsxs)("div",{className:"row register-form",children:[Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:" Name *",value:""})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Password *",value:""})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm Password *",value:""})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsxs)("div",{className:"maxl",children:[Object(o.jsxs)("label",{className:"radio inline",children:[Object(o.jsx)("input",{type:"radio",name:"gender",value:"male",checked:!0}),Object(o.jsx)("span",{children:" Male "})]}),Object(o.jsxs)("label",{className:"radio inline",children:[Object(o.jsx)("input",{type:"radio",name:"gender",value:"female"}),Object(o.jsx)("span",{children:"Female "})]})]})})]}),Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"email",className:"form-control",placeholder:"Your Email *",value:""})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",minlength:"10",maxlength:"10",name:"txtEmpPhone",className:"form-control",placeholder:"Your Phone *",value:""})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"City *",value:""})}),Object(o.jsx)("input",{type:"submit",className:"btnRegister",value:"Register"})]})]})]}),Object(o.jsxs)("div",{className:"tab-pane fade show",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab",children:[Object(o.jsx)("h3",{className:"register-heading",children:"Login"}),Object(o.jsxs)("div",{className:"row register-form",children:[Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",maxlength:"10",minlength:"10",className:"form-control",placeholder:"Phone *",value:""})})}),Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("input",{type:"submit",className:"btnRegister",value:"Register"})})]})]})]})]})]})})})}),k=(s(36),function(e){var t=Object(c.useState)({email:"",password:""}),s=Object(m.a)(t,2);s[0],s[1],Object(r.f)();return Object(o.jsx)("div",{children:Object(o.jsx)("div",{class:"login-wrap",children:Object(o.jsxs)("div",{class:"login-html",children:[Object(o.jsx)("input",{id:"tab-1",type:"radio",name:"tab",class:"sign-in",checked:!0}),Object(o.jsx)("label",{for:"tab-1",class:"tab",children:"Sign In"}),Object(o.jsx)("input",{id:"tab-2",type:"radio",name:"tab",class:"for-pwd"}),Object(o.jsx)("label",{for:"tab-2",class:"tab",children:"Forgot Password"}),Object(o.jsxs)("div",{class:"login-form",children:[Object(o.jsxs)("div",{class:"sign-in-htm",children:[Object(o.jsxs)("div",{class:"group",children:[Object(o.jsx)("label",{for:"user",class:"label",children:"Username or Email"}),Object(o.jsx)("input",{id:"user",type:"text",class:"input"})]}),Object(o.jsxs)("div",{class:"group",children:[Object(o.jsx)("label",{for:"pass",class:"label",children:"Password"}),Object(o.jsx)("input",{id:"pass",type:"password",class:"input","data-type":"password"})]}),Object(o.jsx)("div",{class:"group",children:Object(o.jsx)("input",{type:"submit",class:"button",value:"Sign In"})}),Object(o.jsx)("div",{class:"hr"})]}),Object(o.jsxs)("div",{class:"for-pwd-htm",children:[Object(o.jsxs)("div",{class:"group",children:[Object(o.jsx)("label",{for:"user",class:"label",children:"Username or Email"}),Object(o.jsx)("input",{id:"user",type:"text",class:"input"})]}),Object(o.jsx)("div",{class:"group",children:Object(o.jsx)("input",{type:"submit",class:"button",value:"Reset Password"})}),Object(o.jsx)("div",{class:"hr"})]})]})]})})})}),C=(s(37),function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col col-xs-12",children:Object(o.jsxs)("div",{className:"blog-grids",children:[Object(o.jsxs)("div",{className:"grid",children:[Object(o.jsx)("div",{className:"entry-media",children:Object(o.jsx)("img",{src:"http://csshint.com/wp-content/uploads/2018/04/button-effect-6-810x612.jpg",alt:""})}),Object(o.jsxs)("div",{className:"entry-body",children:[Object(o.jsx)("span",{className:"cat",children:"inspiration"}),Object(o.jsx)("h3",{children:Object(o.jsx)("a",{to:"http://csshint.com/beautiful-css3-buttons-with-hover-effects/",target:"_blank",children:"Beautiful css3 buttons with hover effects"})}),Object(o.jsx)("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.."}),Object(o.jsxs)("div",{className:"read-more-date",children:[Object(o.jsx)("a",{to:"http://csshint.com/beautiful-css3-buttons-with-hover-effects/",target:"_blank",children:"Read More.."}),Object(o.jsx)("span",{className:"date",children:"3 Hours ago"})]})]})]}),Object(o.jsxs)("div",{className:"grid",children:[Object(o.jsx)("div",{className:"entry-media",children:Object(o.jsx)("img",{src:"http://csshint.com/wp-content/uploads/2018/04/business-card-1.jpg",alt:""})}),Object(o.jsxs)("div",{className:"entry-body",children:[Object(o.jsx)("span",{className:"cat",children:"photoshop"}),Object(o.jsx)("h3",{children:Object(o.jsx)("a",{to:"http://csshint.com/free-modern-business-card-psd-templates/",target:"_blank",children:"40+ Best Free Modern Business Card PSD Templates"})}),Object(o.jsx)("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.."}),Object(o.jsxs)("div",{className:"read-more-date",children:[Object(o.jsx)("a",{to:"http://csshint.com/free-modern-business-card-psd-templates/",target:"_blank",children:"Read More.."}),Object(o.jsx)("span",{className:"date",children:"3 Hours ago"})]})]})]}),Object(o.jsxs)("div",{className:"grid",children:[Object(o.jsx)("div",{className:"entry-media",children:Object(o.jsx)("img",{src:"https://csshint.com/wp-content/uploads/2018/04/blog-theme.jpg",alt:""})}),Object(o.jsxs)("div",{className:"entry-body",children:[Object(o.jsx)("span",{className:"cat",children:"Wordpress"}),Object(o.jsx)("h3",{children:Object(o.jsx)("a",{to:"https://csshint.com/free-wordpress-blog-themes/",target:"_blank",children:"34+ Beautiful Free WordPress Blog Themes"})}),Object(o.jsx)("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.."}),Object(o.jsxs)("div",{className:"read-more-date",children:[Object(o.jsx)("a",{to:"https://csshint.com/free-wordpress-blog-themes/",target:"_blank",children:"Read More.."}),Object(o.jsx)("span",{className:"date",children:"3 Hours ago"})]})]})]})]})})})})});s(38);function M(){return Object(o.jsx)("section",{id:"contact",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"well well-sm"}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-7"}),Object(o.jsxs)("div",{className:"col-md-5",children:[Object(o.jsx)("h4",{children:Object(o.jsx)("strong",{children:"Get in Touch"})}),Object(o.jsxs)("form",{children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",name:"",value:"",placeholder:"Name"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"email",className:"form-control",name:"",value:"",placeholder:"E-mail"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"tel",className:"form-control",name:"",value:"",placeholder:"Phone"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("textarea",{className:"form-control",name:"",rows:"3",placeholder:"Message"})}),Object(o.jsxs)("button",{className:"btn btn-default",type:"submit",name:"button",children:[Object(o.jsx)("i",{className:"fa fa-paper-plane-o","aria-hidden":"true"})," Submit"]})]})]})]})]})})}function T(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("footer",{className:"bd-footer py-5 mt-5 bg-light",children:Object(o.jsx)("div",{className:"container py-5",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-lg-3 mb-3",children:[Object(o.jsxs)("a",{className:"d-inline-flex align-items-center mb-2 link-dark text-decoration-none",href:"/","aria-label":"Bootstrap",children:[Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"32",className:"d-block me-2",viewBox:"0 0 118 94",role:"img",children:[Object(o.jsx)("title",{children:"Bootstrap"}),Object(o.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z",fill:"currentColor"})]}),Object(o.jsx)("span",{className:"fs-5",children:"MyNoteBook.com"})]}),Object(o.jsxs)("ul",{className:"list-unstyled small text-muted",children:[Object(o.jsxs)("li",{className:"mb-2",children:["Designed and build Md Shams Firoz",Object(o.jsx)("a",{href:"/docs/5.1/about/team/",children:"My NoteBook.com"})," with the help of ",Object(o.jsx)("a",{href:"https://github.com/twbs/bootstrap/graphs/contributors",children:"our contributors"}),"."]}),Object(o.jsx)("li",{className:"mb-2",children:"Currently v5.1.1."})]})]}),Object(o.jsxs)("div",{className:"col-6 col-lg-2 offset-lg-1 mb-3",children:[Object(o.jsx)("h5",{children:"Links"}),Object(o.jsxs)("ul",{className:"list-unstyled",children:[Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"/",children:"Home"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"/docs/5.1/",children:"Docs"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"/docs/5.1/examples/",children:"Examples"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://themes.getbootstrap.com/",children:"Themes"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://blog.getbootstrap.com/",children:"Blog"})})]})]}),Object(o.jsxs)("div",{className:"col-6 col-lg-2 mb-3",children:[Object(o.jsx)("h5",{children:"Guides"}),Object(o.jsxs)("ul",{className:"list-unstyled",children:[Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"/docs/5.1/getting-started/",children:"Getting started"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"/docs/5.1/examples/starter-template/",children:"Starter template"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"/docs/5.1/getting-started/webpack/",children:"Webpack"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"/docs/5.1/getting-started/parcel/",children:"Parcel"})})]})]}),Object(o.jsxs)("div",{className:"col-6 col-lg-2 mb-3",children:[Object(o.jsx)("h5",{children:"Projects"}),Object(o.jsxs)("ul",{className:"list-unstyled",children:[Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://github.com/twbs/bootstrap",children:"Bootstrap 5"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://github.com/twbs/bootstrap/tree/v4-dev",children:"Bootstrap 4"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://github.com/twbs/icons",children:"Icons"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://github.com/twbs/rfs",children:"RFS"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://github.com/twbs/bootstrap-npm-starter",children:"npm starter"})})]})]}),Object(o.jsxs)("div",{className:"col-6 col-lg-2 mb-3",children:[Object(o.jsx)("h5",{children:"Community"}),Object(o.jsxs)("ul",{className:"list-unstyled",children:[Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://github.com/twbs/bootstrap/issues",children:"Issues"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://github.com/twbs/bootstrap/discussions",children:"Discussions"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://github.com/sponsors/twbs",children:"Corporate sponsors"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://opencollective.com/bootstrap",children:"Open Collective"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://bootstrap-slack.herokuapp.com/",children:"Slack"})}),Object(o.jsx)("li",{className:"mb-2",children:Object(o.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/bootstrap-5",children:"Stack Overflow"})})]})]})]})})}),Object(o.jsx)("script",{src:"/docs/5.1/dist/js/bootstrap.bundle.min.js",integrity:"sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ",crossorigin:"anonymous"}),Object(o.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"}),Object(o.jsx)("script",{src:"/docs/5.1/assets/js/docs.min.js"})]})}var J=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(y,{children:[Object(o.jsxs)(i.a,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(w,{message:"This is amazing React course"}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"/",children:Object(o.jsx)(u,{})}),Object(o.jsx)(r.a,{exact:!0,path:"/about",children:Object(o.jsx)(N,{})}),Object(o.jsx)(r.a,{exact:!0,path:"/contact",children:Object(o.jsx)(M,{})}),Object(o.jsx)(r.a,{exact:!0,path:"/blog",children:Object(o.jsx)(C,{})}),Object(o.jsx)(r.a,{exact:!0,path:"/login",children:Object(o.jsx)(k,{})}),Object(o.jsx)(r.a,{exact:!0,path:"/signup",children:Object(o.jsx)(I,{})})]})})]}),Object(o.jsx)(T,{})]})})};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(J,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c7da4ce5.chunk.js.map