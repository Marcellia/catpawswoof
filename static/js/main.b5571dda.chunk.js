(this.webpackJsonpcatpawswoof=this.webpackJsonpcatpawswoof||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),i=(n(11),n(12),n(2)),o=n.n(i),u=n(4),l=n(3),j=n(0),b=function(e){var t=e.name,n=e.animal,c=e.breed,a=e.images,s=e.location,r=(e.id,"http://pets-images.dev-apis.com/pets/none.jpg");return a.length&&(r=a[0]),Object(j.jsxs)("div",{className:"pet",children:[Object(j.jsx)("div",{className:"image-container",children:Object(j.jsx)("img",{src:r,alt:t})}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("h2",{children:"".concat(n," \u2014 ").concat(c," \u2014 ").concat(s)})]})]})},d=function(e){var t=e.pets;return console.log(t.length),Object(j.jsx)("div",{className:"search",children:t.length?t.map((function(e){return Object(j.jsx)(b,{animal:e.animal,name:e.name,breed:e.breed,images:e.images,location:"".concat(e.city,", ").concat(e.state),id:e.id},e.id)})):Object(j.jsx)("h1",{children:"No Pets Found"})})},h=["Seattle","Minneapolis","Denver","Carol Stream","Charlotte","Springfield","Tucson"];var p=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),i=r[0],b=r[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),O=f[0],m=f[1],x=Object(c.useState)([]),v=Object(l.a)(x,2),g=v[0],w=v[1],S=Object(c.useState)(""),C=Object(l.a)(S,2),y=C[0],F=C[1],k=Object(c.useState)([]),N=Object(l.a)(k,2),B=N[0],E=N[1],P=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pets-v2.dev-apis.com/pets?city=".concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:for(t=e.sent,c=t.pets,a=[],s=0;s<c.length;s++)-1===a.indexOf(c[s].animal)&&a.push(c[s].animal);b(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pets-v2.dev-apis.com/pets?city=".concat(n,"&animal=").concat(O));case 2:return t=e.sent,e.next=5,t.json();case 5:for(t=e.sent,c=t.pets,a=[],s=0;s<c.length;s++)-1===a.indexOf(c[s].breed)&&a.push(c[s].breed);w(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pets-v2.dev-apis.com/pets?city=".concat(n,"&animal=").concat(O,"&breed=").concat(y));case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,E(t.pets);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){P()}),[n]),Object(c.useEffect)((function(){D()}),[O]),Object(c.useEffect)((function(){L()}),[y]),Object(j.jsxs)("div",{className:"search-params",children:[Object(j.jsxs)("form",{children:[Object(j.jsxs)("label",{htmlFor:"location",children:["Location",Object(j.jsxs)("select",{id:"location",onChange:function(e){a(e.target.value)},value:n,children:[Object(j.jsx)("option",{}),h.map((function(e){return Object(j.jsx)("option",{children:e},e)}))]})]}),Object(j.jsxs)("lable",{htmlFor:"animal",children:["Animal",Object(j.jsxs)("select",{id:"animal",value:O,onChange:function(e){m(e.target.value)},onBlur:function(e){m(e.target.value)},children:[Object(j.jsx)("option",{}),i.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]})]}),Object(j.jsxs)("label",{htmlFor:"breed",children:["Breed",Object(j.jsxs)("select",{id:"breed",value:y,onChange:function(e){F(e.target.value)},onBlur:function(e){return F(e.target.value)},children:[Object(j.jsx)("option",{}),g.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]})]}),Object(j.jsx)("button",{class:"button",onClick:function(e){e.preventDefault(),L()},children:"Submit"}),Object(j.jsx)("button",{class:"button",onClick:"window.location.reload();",children:"Refresh"})]}),Object(j.jsx)(d,{pets:B})]})};var f=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"CatPaws & woof!"})}),Object(j.jsxs)("div",{children:[" ",Object(j.jsx)(p,{})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.b5571dda.chunk.js.map