"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[866],{2403:function(n,e,t){t.d(e,{x:function(){return a}});var r=t(8789),o=t(407),a=(0,r.ZP)("div")(o.$_,o.Dh,o.bK,o.AF,o.GQ,o.eC,o.Oq,o.Cg,o.FK)},8866:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,o,a,i,s,c,u,l=t(9434),d=t(6351),m=t(2403),h=t(6324),f=t(9439),p=t(2791),x=t(168),b=t(8789),g=b.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),v=b.ZP.button(o||(o=(0,x.Z)(["\n  width: 100%;\n  height: 40px;\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n  cursor: pointer;\n  padding: ","px;\n\n  :hover:disabled,\n  :focus:disabled {\n    cursor: no-drop;\n  }\n\n  :hover:not(:disabled),\n  :focus:not(:disabled) {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.btn}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.colors.label}),(function(n){return n.theme.colors.bgHoverColor})),Z=t(5206),j=t(1817),y=t(9031),C=t(7028),A=t(184),w=function(){var n=(0,l.I0)(),e=(0,l.v9)(d.fX),t=(0,l.v9)(d.xU),r=(0,p.useState)(""),o=(0,f.Z)(r,2),a=o[0],i=o[1],s=(0,p.useState)(""),c=(0,f.Z)(s,2),u=c[0],m=c[1],h=function(){var t,r=a.trim(),o=u.trim();r&&o&&(t=r,e.some((function(n){return n.name===t}))?function(n){Z.Am.error("".concat((0,j.B)(n)," is already in contacts"),{position:"top-right",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}(r):n((0,y.uK)({name:r,number:o})))};return(0,A.jsxs)(g,{onSubmit:function(n){n.preventDefault(),h(),i(""),m("")},children:[(0,A.jsx)(C.Z,{sx:{width:"100%"},required:!0,color:"secondary",id:"outlined-required-name-contact",label:"Name",name:"name",value:a,onChange:function(n){return i(n.target.value)},pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,A.jsx)(C.Z,{sx:{width:"100%"},required:!0,color:"secondary",type:"tel",id:"outlined-required-name-contact",label:"Number",name:"number",value:u,onChange:function(n){return m(n.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,A.jsx)(v,{color:"secondary",variant:"contained",type:"submit",disabled:!a||!u||t,children:"Add contact on your list"})]})},z=b.ZP.li(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[1]})),k=b.ZP.p(i||(i=(0,x.Z)(["\n  margin-right: ","px;\n"])),(function(n){return n.theme.space[1]})),P=b.ZP.button(s||(s=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  margin: ","px;\n  padding: ","px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: ",";\n  background-color: inherit;\n  cursor: pointer;\n  transition: transform 250ms ease-in-out;\n\n  :hover svg,\n  :focus svg {\n    fill: ",";\n    transform: scale3d(1.2, 1.2, 1.2);\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.fill})),N=t(2244),B=function(n){var e=n.userName,t=n.userNumber,r=n.id,o=(0,l.I0)(),a=(0,l.v9)(d.xU);return(0,A.jsxs)(z,{children:[(0,A.jsxs)(k,{children:[(0,j.B)(e),": ",t]}),(0,A.jsx)(P,{type:"button",disabled:a,onClick:function(){a||o((0,y.GK)(r))},children:(0,A.jsx)(N._YF,{size:"16px"})})]})},F=t(1038),S=function(){var n=(0,l.v9)(d.fX),e=(0,l.v9)(d.AD),t=(0,l.I0)();(0,p.useEffect)((function(){t((0,y.yF)())}),[t]),(0,p.useEffect)((function(){1===n.length&&t((0,F.M)(""))}),[n.length,t]);var r=(0,p.useMemo)((function(){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}),[n,e]);return(0,A.jsx)("ul",{children:r.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,A.jsx)(B,{userName:t,userNumber:r,id:e},e)}))})},_=t(5803),q=t(8096),M=t(4925),D=t(7078),I=t(6126),K=function(){var n=(0,l.I0)(),e=(0,l.v9)(d.AD);return(0,A.jsxs)(q.Z,{color:"secondary",sx:{width:"100%",marginBottom:"30px"},variant:"standard",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,onChange:function(e){return n((0,F.M)(e.target.value))},children:[(0,A.jsx)(M.Z,{htmlFor:"input-with-icon-adornment",sx:{width:400,fontSize:22},children:"Search in the contact list by name"}),(0,A.jsx)(D.Z,{id:"input-with-icon-adornment",startAdornment:(0,A.jsx)(I.Z,{position:"start",children:(0,A.jsx)(_.Z,{})})})]})},U=b.ZP.h1(c||(c=(0,x.Z)(["\n  color: ",";\n  font-size: ",";\n  margin-bottom: ","px;\n  text-align: center;\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.space[4]})),O=b.ZP.h2(u||(u=(0,x.Z)(["\n  color: ",";\n  font-size: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.ml})),X=function(){var n=(0,l.v9)(d.fX),e=(0,l.v9)(d.xU);return(0,A.jsxs)("div",{children:[(0,A.jsx)(U,{children:"Phonebook"}),(0,A.jsx)(w,{}),(0,A.jsxs)(m.x,{position:"relative",mb:"30px",children:[(0,A.jsx)(O,{children:"Contacts"}),e&&(0,A.jsx)(h.Z,{})]}),0===n.length&&!e&&(0,A.jsx)("p",{children:"Add contact on your contacts list, please."}),n.length>1&&(0,A.jsx)(K,{}),(0,A.jsx)(S,{})]})}},1817:function(n,e,t){t.d(e,{B:function(){return r}});var r=function(n){return n.split(" ").map((function(n){var e=n.charAt(0).toUpperCase(),t=n.substring(1);return"".concat(e).concat(t)})).join(" ")}}}]);
//# sourceMappingURL=866.3f17627e.chunk.js.map