(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(e,a,t){e.exports=t(21)},18:function(e,a,t){},19:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),c=t(11),s=t.n(c),n=(t(18),t(5)),m=t(6),o=t(8),i=t(7),u=(t(19),t(22));var d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"mt-3",lg:6},r.a.createElement("div",{className:"card bg-light border-dark",style:{borderRadius:"25px",boxShadow:"0px 5px 8px grey"}},r.a.createElement("div",{className:"card-header bg-dark text-white",style:{borderTopLeftRadius:"25px",borderTopRightRadius:"25px"}},r.a.createElement("h4",null,"User Info")),r.a.createElement("ul",{className:"list-group list-group-flush text-left"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-5 col-xs-7 col-md-3 col-form-label"},"First Name"),r.a.createElement("label",{className:"col-7 col-xs-5 col-md-7 col-form-label"},":\xa0",r.a.createElement("b",null," ",e.user.FirstName," ")))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-5 col-md-3 col-form-label"},"Last Name"),r.a.createElement("label",{className:"col-7 col-md-7 col-form-label"},":\xa0",r.a.createElement("b",null," ",e.user.LastName," ")))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-5 col-md-3 col-form-label"},"City"),r.a.createElement("label",{className:"col-7 col-md-7 col-form-label"},":\xa0 ",r.a.createElement("b",null," ",e.user.City," ")))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-5 col-md-3 col-form-label"},"State"),r.a.createElement("label",{className:"col-7 col-md-7 col-form-label"},":\xa0",r.a.createElement("b",null," ",e.user.State," ")))),r.a.createElement("li",{className:"list-group-item",style:{borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"}},r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-5 col-md-3 col-form-label"},"Country"),r.a.createElement("label",{className:"col-7 col-md-7 col-form-label"},":\xa0",r.a.createElement("b",null," ",e.user.Country," "))))))))};var b,p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",style:{padding:"5px 20px",borderRadius:"25px",outline:"none",boxShadow:"0px 5px 8px grey"},onClick:e.clickHandle},e.buttonName))},E=t(23),N=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).handleClick=function(e){b=r.a.createElement(d,{user:e}),l.setState({activeUserId:e.id===l.state.activeUserId?"":e.id})},l.state={activeUserId:""},l}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"justify-content-center"},r.a.createElement(u.a,{className:"mt-3",lg:6},r.a.createElement("div",{className:"card border-dark",style:{borderRadius:"25px",boxShadow:"0px 5px 8px grey"}},r.a.createElement("div",{style:{borderTopLeftRadius:"25px",borderTopRightRadius:"25px"},className:"card-header bg-dark text-white"},r.a.createElement("h4",null,"User List")),r.a.createElement("ul",{className:"list-group list-group-flush"},this.props.Users.map((function(a,t){return r.a.createElement("li",{key:a.id,className:"list-group-item",style:{borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"}},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("label",{className:"col-xs-6 text-left pl-3"},r.a.createElement("b",null,a.id,". ",a.FirstName," ",a.LastName)),r.a.createElement(p,{className:"col-xs-6",clickHandle:function(){return e.handleClick(a)},buttonName:e.state.activeUserId===a.id?"Click to See Less":"Click to See More"})))})))))),r.a.createElement(E.a,{className:"justify-content-center"},this.state.activeUserId?b:null))}}]),t}(l.Component),f=(t(20),t(24)),h=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={Users:[{id:1,FirstName:"Uttam",LastName:"Deshani",City:"Vadodara",State:"Gujarat",Country:"India"},{id:2,FirstName:"Mihir",LastName:"Shah",City:"Ahmedabad",State:"Gujarat",Country:"India"},{id:3,FirstName:"Aneri",LastName:"Patel",City:"Surat",State:"Gujarat",Country:"India"}]},l}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(N,{Users:this.state.Users})))}}]),t}(l.Component);s.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.174eb67c.chunk.js.map