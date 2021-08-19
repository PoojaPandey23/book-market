(this["webpackJsonpreact-book-market"]=this["webpackJsonpreact-book-market"]||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3SBXq",total:"Cart_total__22Q8X",actions:"Cart_actions__3v4P9","button--alt":"Cart_button--alt__PDtG3",button:"Cart_button__3IITi"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3y_sn",summary:"CartItem_summary__1us1f",price:"CartItem_price__1UR3Q",amount:"CartItem_amount__JFjqi",actions:"CartItem_actions__2xJTr"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1E_kA",modal:"Modal_modal__2b4u_","slide-down":"Modal_slide-down__13ZYZ"}},function(e,t,n){e.exports={button:"HeaderCartButton_button__1ApPN",icon:"HeaderCartButton_icon__mcycU",badge:"HeaderCartButton_badge__3iTpF",bump:"HeaderCartButton_bump__1RgT8"}},,function(e,t,n){e.exports={book:"BookItem_book__2Enno",description:"BookItem_description__ONTV5",price:"BookItem_price__2qpA_"}},function(e,t,n){e.exports={header:"Header_header__2PSvj","main-image":"Header_main-image__1etft"}},function(e,t,n){e.exports={card:"Card_card__2VOrx"}},function(e,t,n){e.exports={books:"AvailableBooks_books__1_Jd6","books-appear":"AvailableBooks_books-appear__1gW-i"}},function(e,t,n){e.exports={input:"Input_input__1fBmz"}},function(e,t,n){e.exports={form:"BookItemForm_form__1aKzm"}},function(e,t,n){e.exports={summary:"BooksSummary_summary__2cqfN"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(5),r=n.n(o),i=(n(21),n(2)),s=(n(22),n(12)),d=n.n(s),m=n(0),l=function(e){return Object(m.jsx)("div",{className:d.a.card,children:e.children})},u=n(13),j=n.n(u),b=n(10),h=n.n(b),x=n(6),f=n(14),p=n.n(f),_=c.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:p.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(x.a)({ref:t},e.input))]})})),O=n(15),g=n.n(O),v=function(e){var t=Object(a.useState)(!0),n=Object(i.a)(t,2),c=n[0],o=n[1],r=Object(a.useRef)();return Object(m.jsxs)("form",{className:g.a.form,onSubmit:function(t){t.preventDefault();var n=r.current.value,a=+n;0===n.trim().length||a<1||a>5?o(!1):e.onAddToCart(a)},children:[Object(m.jsx)(_,{ref:r,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!c&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})},k=c.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),C=function(e){var t=Object(a.useContext)(k),n="Rs.".concat(e.price*118.83.toFixed(2));return Object(m.jsxs)("li",{className:h.a.book,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{children:e.image}),Object(m.jsx)("div",{className:h.a.price,children:n}),Object(m.jsx)("div",{children:e.stock}),Object(m.jsx)("div",{children:e.author}),Object(m.jsx)("div",{children:e.genre}),Object(m.jsx)("div",{children:e.published_date})]}),Object(m.jsx)("div",{children:Object(m.jsx)(v,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},y=[{id:1,name:"Bamity",image:"http://dummyimage.com/250x250.png/cc0000/ffffff",price:"0.32",stock:3,author:"Nikos",genre:"Drama",published_date:"2020/11/29"},{id:2,name:"Span",image:"http://dummyimage.com/250x250.png/5fa2dd/ffffff",price:"1.84",stock:9,author:"Adela",genre:"Comedy",published_date:"2020/07/11"},{id:3,name:"Fixflex",image:"http://dummyimage.com/250x250.png/5fa2dd/ffffff",price:"2.51",stock:2,author:"Lorianna",genre:"Action|Crime|Drama",published_date:"2021/03/05"},{id:4,name:"Y-find",image:"http://dummyimage.com/250x250.png/5fa2dd/ffffff",price:"1.54",stock:5,author:"Catha",genre:"Action|Drama|Thriller",published_date:"2020/12/21"},{id:5,name:"Ronstring",image:"http://dummyimage.com/250x250.png/dddddd/000000",price:"6.20",stock:10,author:"Ingra",genre:"Comedy",published_date:"2020/11/06"}],N=function(){var e=y.map((function(e){return Object(m.jsx)(C,{id:e.id,name:e.name,image:e.image,price:e.price,stock:e.stock,author:e.author,genre:e.genre,published_date:e.published_date},e.id)}));return Object(m.jsx)("section",{className:j.a.books,children:Object(m.jsx)(l,{children:Object(m.jsx)("ul",{children:e})})})},A=n(16),I=n.n(A),B=function(){return Object(m.jsxs)("section",{className:I.a.summary,children:[Object(m.jsx)("h2",{children:"Amazing Books, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite book from our broad selection of available books and enjoy a good read at home."}),Object(m.jsx)("p",{children:"All our books are with high quality and by famous writers!"})]})},w=function(){return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(B,{}),Object(m.jsx)(N,{})]})},F=n(3),T=n.n(F),D=n(7),H=n.n(D),S=function(e){return Object(m.jsx)("div",{className:H.a.backdrop,onClick:e.onClose})},P=function(e){return Object(m.jsx)("div",{className:H.a.modal,children:Object(m.jsx)("div",{className:H.a.content,children:e.children})})},R=document.getElementById("overlays"),M=function(e){return Object(m.jsxs)(a.Fragment,{children:[r.a.createPortal(Object(m.jsx)(S,{onClose:e.onClose}),R),r.a.createPortal(Object(m.jsx)(P,{children:e.children}),R)]})},z=n(4),E=n.n(z),q=function(e){var t="$".concat(e.price);return Object(m.jsxs)("li",{className:E.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:E.a.summary,children:[Object(m.jsx)("span",{className:E.a.price,children:t}),Object(m.jsxs)("span",{className:E.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:E.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},J=function(e){var t=Object(a.useContext)(k),n="$".concat(t.totalAmount.toFixed(2)),c=t.items.length>0,o=function(e){t.removeItem(e)},r=function(e){t.addItem(Object(x.a)(Object(x.a)({},e),{},{amount:1}))},i=Object(m.jsx)("ul",{className:T.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)(q,{name:e.name,amount:e.amount,price:e.price,onRemove:o.bind(null,e.id),onAdd:r.bind(null,e)},e.id)}))});return Object(m.jsxs)(M,{children:[i,Object(m.jsxs)("div",{className:T.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:T.a.actions,children:[Object(m.jsx)("button",{className:T.a["button--alt"],onClick:e.onClose,children:"Cancel"}),c&&Object(m.jsx)("button",{className:T.a.button,children:"Order"})]})]})},L=n.p+"static/media/books.52f56774.png",V=n(11),Y=n.n(V),Q=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},U=n(8),X=n.n(U),Z=function(e){var t=Object(a.useContext)(k).items.reduce((function(e,t){return e+t.amount}),0);return Object(m.jsxs)("button",{className:X.a.button,onClick:e.onClick,children:[Object(m.jsx)("span",{className:X.a.icon,children:Object(m.jsx)(Q,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:X.a.badge,children:t})]})},$=function(e){return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsxs)("header",{className:Y.a.header,children:[Object(m.jsx)("h1",{children:"Book Market"}),Object(m.jsx)(Z,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:Y.a["main-image"],children:Object(m.jsx)("img",{src:L,alt:"Library of books"})})]})},G={items:[],totalAmount:0},K=function(e,t){return"ADD"===t.type?{items:e.items.concat(t.item),totalAmount:e.totalAmount+t.item.price*t.item.amount}:G},W=function(e){var t=Object(a.useReducer)(K,G),n=Object(i.a)(t,2),c=n[0],o=n[1],r={items:c.items,totalAmount:c.totalAmount,addItem:function(e){o({type:"ADD",item:e})},removeItem:function(e){o({type:"REMOVE",id:e})}};return Object(m.jsx)(k.Provider,{value:r,children:e.children})};var ee=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(W,{children:[n&&Object(m.jsx)(J,{onClose:function(){c(!1)}}),Object(m.jsx)($,{onShowCart:function(){c(!0)}}),Object(m.jsx)(w,{})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(ee,{})}),document.getElementById("root")),te()}],[[24,1,2]]]);
//# sourceMappingURL=main.6a310511.chunk.js.map