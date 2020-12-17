(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),s=n(10),r=n.n(s),i=n(11),u=n(2),l=n(7),b=n.n(l),m=n(3),j=n.n(m),f=n(19);function O(t){var e=t.onSubmit,n=Object(c.useState)(""),o=Object(u.a)(n,2),s=o[0],r=o[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),b=l[0],m=l[1],O=Object(c.useState)(""),h=Object(u.a)(O,2),d=h[0],p=h[1],_=function(t){var e=Object(f.a)(),n=t.target,a=n.name,c=n.value;switch(a){case"name":r(c);break;case"number":m(c);break;default:return}p(e)},x=function(){r(""),m(""),p("")};return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:s,number:b,id:d}),x()},className:j.a.Form,children:[Object(a.jsxs)("label",{className:j.a.label,children:["Name",Object(a.jsx)("input",{type:"text",value:s,name:"name",onChange:_,className:j.a.input})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("input",{type:"text",value:b,name:"number",onChange:_,className:j.a.input})]}),Object(a.jsx)("button",{type:"submit",className:j.a.formButton,children:"Add contact"})]})}var h=n(4),d=n.n(h),p=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:d.a.ContactsList,children:e.map((function(t){var e=t.name,c=t.number,o=t.id;return Object(a.jsxs)("li",{className:d.a.item,children:[Object(a.jsxs)("span",{className:d.a.name,children:[e,":"]}),Object(a.jsx)("span",{className:d.a.number,children:c}),Object(a.jsx)("button",{onClick:function(){return n(o)},className:d.a.deleteButton,children:"Delete"})]},o)}))})},_=n(9),x=n.n(_),N=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:x.a.label,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n,className:x.a.input})]})};function v(){var t=Object(c.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(u.a)(t,2),n=e[0],o=e[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),l=r[0],m=r[1];return Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(a.jsxs)("div",{className:b.a.Phonebook,children:[Object(a.jsx)("h1",{className:b.a.title,children:"Phonebook"}),Object(a.jsx)(O,{onSubmit:function(t){n.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts.")):o([].concat(Object(i.a)(n),[t]))}}),Object(a.jsx)("h2",{className:b.a.title,children:"Contacts"}),Object(a.jsx)(N,{value:l,onChange:function(t){m(t.currentTarget.value)},className:"Filter"}),Object(a.jsx)(p,{contacts:function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDeleteContact:function(t){o(n.filter((function(e){return e.id!==t})))},className:"ContactsList"})]})}r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={Form:"Form_Form__8E5wd",label:"Form_label__TEfP-",input:"Form_input__2nLUA",formButton:"Form_formButton__C568x"}},4:function(t,e,n){t.exports={ContactsList:"ContactList_ContactsList__3V_kf",name:"ContactList_name__39QgG",number:"ContactList_number__IN0yP"}},7:function(t,e,n){t.exports={Phonebook:"App_Phonebook__35Czg",title:"App_title__6SAIT"}},9:function(t,e,n){t.exports={label:"Filter_label__1waky",input:"Filter_input__Rvf03"}}},[[17,1,2]]]);
//# sourceMappingURL=main.3e756b02.chunk.js.map