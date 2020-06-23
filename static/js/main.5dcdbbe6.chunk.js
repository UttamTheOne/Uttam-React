(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{44:function(e,a,t){e.exports=t(66)},49:function(e,a,t){},50:function(e,a,t){},59:function(e,a,t){var l={"./Images/Desktop.png":60,"./Images/ExtraSmall.jpg":61,"./Images/Laptop.jpg":62,"./Images/Smartphone.jpg":63,"./Images/Tablet.jpg":64};function r(e){var a=n(e);return t(a)}function n(e){if(!t.o(l,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return l[e]}r.keys=function(){return Object.keys(l)},r.resolve=n,e.exports=r,r.id=59},60:function(e,a,t){e.exports=t.p+"static/media/Desktop.ab9d9b96.png"},61:function(e,a,t){e.exports=t.p+"static/media/ExtraSmall.c0f804cf.jpg"},62:function(e,a,t){e.exports=t.p+"static/media/Laptop.cac2084b.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/Smartphone.a07cac09.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/Tablet.1a7d01db.jpg"},66:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(18),c=t.n(n),s=(t(49),t(50),t(19)),m=t(5),i=t(72),o=t(71);var d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top"},r.a.createElement(i.a.Brand,{to:"/"},r.a.createElement("b",null,"React Routing")),r.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(o.a,{className:"mr-auto"},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(s.b,{className:"nav-link",to:"/counter"},"Counter"),r.a.createElement(s.b,{className:"nav-link",to:"/users"},"Users")))))},u=t(21),p=t(69),b=t(70),E=t(68),g=function(){return r.a.createElement(E.a,{sm:4,className:"mt-3"},r.a.createElement("div",{style:{boxShadow:"0px 5px 8px grey"},className:"card border-warning"},r.a.createElement("b",{className:"card-header bg-dark text-white text-center"},"Sidebar"),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},"This component is only visible to Laptop and Desktop"),r.a.createElement("li",{className:"list-group-item"},"Dummy Text"),r.a.createElement("li",{className:"list-group-item"},"Notifications"))))},h=function(e){var a=e.DeviceMetaData.filter((function(a){return a.deviceMaxWidth>=e.windowWidth&&a.deviceMinWidth<=e.windowWidth}));return r.a.createElement(p.a,null,r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(E.a,{className:"mt-3"},r.a.createElement("div",{className:"card bg-light border-warning",style:{borderRadius:"25px",boxShadow:"0px 5px 8px grey"}},r.a.createElement("div",{className:"card-header bg-dark text-white text-center",style:{borderTopLeftRadius:"25px",borderTopRightRadius:"25px"}},r.a.createElement("b",{className:"d-block"},"Home")),r.a.createElement("div",{className:"card-body"},r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(E.a,{className:"justify-content-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("b",null,"Window Size: "),r.a.createElement("b",{className:"text-warning text-center"},e.windowWidth)),r.a.createElement("div",{className:"text-center mt-1"},r.a.createElement("img",{className:"img-fluid",src:t(59)("./".concat(a[0].deviceImageURL)),alt:a[0].deviceType+" Device"}),r.a.createElement("h3",{className:"text-center"},a[0].deviceType))))))),a[0].deviceMinWidth>1025?r.a.createElement(g,null):null))},v=function(e){var a=Object(l.useState)(window.innerWidth),t=Object(u.a)(a,2),n=t[0],c=t[1];return Object(l.useEffect)((function(){function e(){var e=window.innerWidth;c(e)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{windowWidth:n,DeviceMetaData:e.DeviceMetaData}))},N=[{deviceMaxWidth:"7680",deviceMinWidth:"1367",deviceType:"Desktop",deviceImageURL:"Images/Desktop.png"},{deviceMaxWidth:"1366",deviceMinWidth:"1026",deviceType:"Laptop",deviceImageURL:"Images/Laptop.jpg"},{deviceMaxWidth:"1025",deviceMinWidth:"601",deviceType:"Tablet",deviceImageURL:"Images/Tablet.jpg"},{deviceMaxWidth:"600",deviceMinWidth:"321",deviceType:"Smartphone",deviceImageURL:"Images/Smartphone.jpg"},{deviceMaxWidth:"320",deviceMinWidth:"25",deviceType:"Extra Small Phone",deviceImageURL:"Images/ExtraSmall.jpg"}],x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(v,{DeviceMetaData:N})))},f=t(14),y=t(73);var w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",style:{padding:"5px 20px",borderRadius:"25px",outline:"none",boxShadow:"0px 5px 8px grey"},onClick:e.clickHandle},e.buttonName))},j=function(){var e=Object(l.useState)(0),a=Object(u.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)({AlertMessage:"",show:!1}),s=Object(u.a)(c,2),m=s[0],i=s[1];return r.a.createElement(p.a,null,r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(E.a,{className:"mt-3",xl:8},r.a.createElement("div",{className:"card bg-light border-warning",style:{borderRadius:"25px",boxShadow:"0px 5px 8px grey"}},r.a.createElement("div",{className:"card-header bg-dark text-white text-center",style:{borderTopLeftRadius:"25px",borderTopRightRadius:"25px"}},r.a.createElement("b",{className:"d-block"},"Counter "),r.a.createElement("h1",{className:"text-warning"},t)),r.a.createElement("div",{className:"card-body"},r.a.createElement(y.a,{show:m.show,variant:"danger",onClose:function(){return i(Object(f.a)(Object(f.a)({},m),{},{show:!1}))},dismissible:!0},r.a.createElement("b",null,m.AlertMessage," ")),r.a.createElement(b.a,{className:"text-center"},r.a.createElement(E.a,{className:"col-12 col-md-4"},r.a.createElement(w,{clickHandle:function(){return m.show&&i(Object(f.a)(Object(f.a)({},m),{},{show:!1})),void n((function(e){return e+1}))},buttonName:"Increment Counter"})),r.a.createElement(E.a,{className:"pt-3 pt-md-0 col-12 col-md-4"},r.a.createElement(w,{clickHandle:function(){0===t?i({AlertMessage:"Counter cannot be negative !",show:!0}):n((function(e){return e-1}))},buttonName:"Decrement Counter"})),r.a.createElement(E.a,{className:"pt-3 pt-md-0 col-12 col-md-3"},r.a.createElement(w,{clickHandle:function(){return m.show&&i(Object(f.a)(Object(f.a)({},m),{},{show:!1})),void n(t=0)},buttonName:"Reset"}))))))))},k=t(40),R=t(41),S=t(43),L=t(42);var I,C=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"mt-3",lg:6},r.a.createElement("div",{className:"card bg-light border-dark",style:{borderRadius:"25px",boxShadow:"0px 5px 8px grey"}},r.a.createElement("div",{className:"card-header bg-dark text-white",style:{borderTopLeftRadius:"25px",borderTopRightRadius:"25px"}},r.a.createElement("h4",null,"User Info")),r.a.createElement("ul",{className:"list-group list-group-flush text-left"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-5 col-xs-7 col-md-3 col-form-label"},"First Name"),r.a.createElement("label",{className:"col-7 col-xs-5 col-md-7 col-form-label"},":\xa0",r.a.createElement("b",null," ",e.user.FirstName," ")))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-5 col-md-3 col-form-label"},"Last Name"),r.a.createElement("label",{className:"col-7 col-md-7 col-form-label"},":\xa0",r.a.createElement("b",null," ",e.user.LastName," ")))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-5 col-md-3 col-form-label"},"City"),r.a.createElement("label",{className:"col-7 col-md-7 col-form-label"},":\xa0 ",r.a.createElement("b",null," ",e.user.City," ")))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-5 col-md-3 col-form-label"},"State"),r.a.createElement("label",{className:"col-7 col-md-7 col-form-label"},":\xa0",r.a.createElement("b",null," ",e.user.State," ")))),r.a.createElement("li",{className:"list-group-item",style:{borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"}},r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-5 col-md-3 col-form-label"},"Country"),r.a.createElement("label",{className:"col-7 col-md-7 col-form-label"},":\xa0",r.a.createElement("b",null," ",e.user.Country," "))))))))},M=function(e){Object(S.a)(t,e);var a=Object(L.a)(t);function t(e){var l;return Object(k.a)(this,t),(l=a.call(this,e)).handleClick=function(e){I=r.a.createElement(C,{user:e}),l.setState({activeUserId:e.id===l.state.activeUserId?"":e.id})},l.state={activeUserId:""},l}return Object(R.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(E.a,{className:"mt-3",lg:6},r.a.createElement("div",{className:"card border-dark",style:{borderRadius:"25px",boxShadow:"0px 5px 8px grey"}},r.a.createElement("div",{style:{borderTopLeftRadius:"25px",borderTopRightRadius:"25px"},className:"card-header bg-dark text-white text-center"},r.a.createElement("b",null,"User List")),r.a.createElement("ul",{className:"list-group list-group-flush"},this.props.Users.map((function(a,t){return r.a.createElement("li",{key:a.id,className:"list-group-item",style:{borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"}},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("label",{className:"col-12 col-sm-6 text-left pl-3"},r.a.createElement("b",null,a.id,"."," ",a.FirstName," ",a.LastName)),r.a.createElement(w,{className:"col-12 col-sm-6",clickHandle:function(){return e.handleClick(a)},buttonName:e.state.activeUserId===a.id?"Click to See Less":"Click to See More"})))})))))),r.a.createElement(b.a,{className:"justify-content-center"},this.state.activeUserId?I:null)))}}]),t}(l.Component),T=function(){return r.a.createElement("footer",{className:"text-center py-3 bg-dark text-light fixed-bottom"},"\xa9 ",(new Date).getFullYear()," Copyright:"," ",r.a.createElement("a",{href:"https://uttamtheone.github.io/Uttam-React"}," ","uttamtheone.github.io/Uttam-React"," "))},U={Users:[{id:1,FirstName:"Uttam",LastName:"Deshani",City:"Vadodara",State:"Gujarat",Country:"India"},{id:2,FirstName:"Mihir",LastName:"Shah",City:"Ahmedabad",State:"Gujarat",Country:"India"},{id:3,FirstName:"Aneri",LastName:"Patel",City:"Surat",State:"Gujarat",Country:"India"}]};var O=function(){return r.a.createElement(s.a,null,r.a.createElement(d,null),r.a.createElement(p.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:x}),r.a.createElement(m.a,{path:"/counter",component:j}),r.a.createElement(m.a,{path:"/users"},r.a.createElement(M,{Users:U.Users})))),r.a.createElement(T,null))};t(65);c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.5dcdbbe6.chunk.js.map