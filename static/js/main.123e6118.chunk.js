(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(7),s=n.n(c),a=n(2),o=n(1),r=(n(12),n(13),n(14),"https://mate.academy/students-api"),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(r).concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},u=(n(15),n(0)),l=function(){return Object(u.jsx)("div",{className:"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})},j=function(e){var t=e.currentUserId,n=e.postId,c=e.onChangePostId,s=Object(o.useState)([]),r=Object(a.a)(s,2),j=r[0],d=r[1],b=Object(o.useState)(!1),m=Object(a.a)(b,2),h=m[0],O=m[1];return Object(o.useEffect)((function(){var e;(e=t,i(e?"/posts?userId=".concat(e):"/posts")).then((function(e){d(e),O(!0)}))}),[t]),h?Object(u.jsxs)("div",{className:"PostsList",children:[Object(u.jsx)("h2",{children:"Posts:"}),!j.length&&Object(u.jsx)("p",{children:"Nothing was found for this user"}),Object(u.jsx)("ul",{children:j.map((function(e){return Object(u.jsxs)("li",{className:"PostsList__item",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"[User #".concat(e.userId,"]:")}),e.title]}),Object(u.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){c(n===e.id?0:e.id)},children:n===e.id?"Close":"Open"})]},e.id)}))})]}):Object(u.jsx)(l,{})},d=n(6),b=(n(17),n(18),function(e){var t=e.postId,n=e.addComment,c=Object(o.useState)(""),s=Object(a.a)(c,2),r=s[0],i=s[1],l=Object(o.useState)(""),j=Object(a.a)(l,2),d=j[0],b=j[1],m=Object(o.useState)(""),h=Object(a.a)(m,2),O=h[0],f=h[1];return Object(u.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),n({postId:t,name:r,email:d,body:O}),i(""),b(""),f("")},children:[Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",required:!0,value:r,onChange:function(e){return i(e.currentTarget.value)}})}),Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("input",{type:"email",name:"email",placeholder:"Your email",className:"NewCommentForm__input",required:!0,value:d,onChange:function(e){return b(e.currentTarget.value)}})}),Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",required:!0,value:O,onChange:function(e){return f(e.currentTarget.value)}})}),Object(u.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),m=function(e){var t=e.postId,n=Object(o.useState)(null),c=Object(a.a)(n,2),s=c[0],r=c[1],j=Object(o.useState)([]),m=Object(a.a)(j,2),h=m[0],O=m[1],f=Object(o.useState)(!0),p=Object(a.a)(f,2),x=p[0],_=p[1],v=Object(o.useState)(!1),N=Object(a.a)(v,2),g=N[0],C=N[1];Object(o.useEffect)((function(){(function(e){return i("/posts/".concat(e))})(t).then((function(e){r(e),C(!0)})),function(e){return i("/comments?postId=".concat(e))}(t).then((function(e){return O(Object(d.a)(e))}))}),[t]);var y=function(e){(function(e){return i("/comments/".concat(e),{method:"DELETE"})})(e).then((function(t){t&&O((function(t){return t.filter((function(t){return t.id!==e}))}))}))};return g?Object(u.jsxs)("div",{className:"PostDetails",children:[Object(u.jsx)("h2",{children:"Post details: ".concat(h.length)}),Object(u.jsx)("section",{className:"PostDetails__post",children:Object(u.jsx)("p",{children:null===s||void 0===s?void 0:s.body})}),Object(u.jsx)("section",{className:"PostDetails__comments",children:h.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{type:"button",className:"button",onClick:function(){return _(!x)},children:x?"Hide ".concat(h.length," comments"):"Show ".concat(h.length," comments")}),Object(u.jsx)("ul",{className:"PostDetails__list",children:x&&h.map((function(e){return Object(u.jsxs)("li",{className:"PostDetails__list-item",children:[Object(u.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return y(e.id)},children:"x"}),Object(u.jsx)("p",{children:e.body})]},e.id)}))})]}):Object(u.jsx)("h3",{children:"Comment section is empty"})}),Object(u.jsx)("section",{children:Object(u.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(u.jsx)(b,{postId:t,addComment:function(e){(function(e){return i("/comments",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)})})(e).then((function(e){return O([].concat(Object(d.a)(h),[e]))}))}})})})]}):Object(u.jsx)(l,{})},h=function(e){var t=e.users,n=e.currentUserId,c=e.onChangeUserId;return Object(u.jsxs)("label",{htmlFor:"selectUser",children:["Select a user: \xa0",Object(u.jsxs)("select",{className:"App__user-selector",id:"selectUser",value:n,onChange:function(e){return c(+e.target.value)},children:[Object(u.jsx)("option",{value:"0",children:"All users"}),t.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})},O=function(){var e=Object(o.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(o.useState)(0),r=Object(a.a)(s,2),l=r[0],d=r[1],b=Object(o.useState)(0),O=Object(a.a)(b,2),f=O[0],p=O[1];return Object(o.useEffect)((function(){i("/users").then(c)}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App__header",children:Object(u.jsx)(h,{users:n,currentUserId:l,onChangeUserId:d})}),Object(u.jsxs)("main",{className:"App__main",children:[Object(u.jsx)("div",{className:"App__sidebar",children:Object(u.jsx)(j,{currentUserId:l,postId:f,onChangePostId:p})}),f>0&&Object(u.jsx)("div",{className:"App__content",children:Object(u.jsx)(m,{postId:f})})]})]})};s.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.123e6118.chunk.js.map