(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(e,t,a){e.exports=a(340)},340:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(16),r=a.n(s),i=a(26),l=a(27),o=a(29),m=a(28),u=a(30),d=a(32),h=a(25),p=a.n(h),v=(a(91),a(88)),E=a(47),f=function(e){return!0===e.data.isLoaded?c.a.createElement("div",{className:"listContainer"},e.data.items.map(function(t){var a="hide";return a=t.title.toLowerCase().match(window.location.pathname.split("/").pop())?"show":"hide",c.a.createElement(E.a,{to:"/detail/".concat(t.id),key:t.id,className:a},c.a.createElement("div",{className:"productContainer",onClick:e.click},c.a.createElement("div",{className:"productImageContainer"},c.a.createElement("img",{className:"productImage",alt:t.title,src:t.img})),c.a.createElement(v.a,{variant:"h5",key:"title"+t.id,className:"title"},t.title),c.a.createElement(v.a,{variant:"h6",key:"price"+t.id,className:"price"},"$",t.price)))})):c.a.createElement("div",{className:"modlabel"},c.a.createElement(p.a,{className:"spinner"}))},N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).fetchItems=function(){fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products").then(function(e){return e.json()}).then(function(e){a.allItems=e,a.setState({items:e,isLoaded:!0,redirect:!1})})},a.state={items:[],isLoaded:!1,redirect:!1,id:-1,search:a.props.match.params.search},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"render",value:function(){return c.a.createElement(f,{data:this.state,click:this.handleClick,search:window.location.pathname})}}]),t}(n.Component),b=a(64),g=a.n(b),C=a(65),y=a.n(C),j=a(18),k=a.n(j),O=a(123),I=a.n(O),w=a(46),L=a.n(w),D=a(66),S=a.n(D),T=a(48),B=a.n(T),M=a(21),A=a.n(M),_=a(63),F=a.n(_),V=a(61),$=a.n(V),x=a(62),H=a.n(x),J=a(38),K=1,U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={item:{},numberOfItems:1,amount:1,isLoaded:!1,id:0},a.handleChange=function(e){a.setState({amount:e.target.value}),a.setState({numberOfItems:e.target.value}),K=e.target.value},a.fetchItems=function(){fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products/"+a.props.match.params.productId).then(function(e){return e.json()}).then(function(e){a.setState({item:e,isLoaded:!0})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){K=1,this.fetchItems()}},{key:"returnState",value:function(){return console.log(this.state),this.state}},{key:"render",value:function(){var e=this;return this.state.isLoaded?c.a.createElement("div",{class:"productBody"},c.a.createElement("div",{className:"productContainer single"},c.a.createElement("div",{className:"productImageContainer"},c.a.createElement("img",{className:"productImage",alt:this.state.item.id,src:this.state.item.img})),c.a.createElement(k.a,{variant:"h5",className:"title"},this.state.item.title),c.a.createElement(k.a,{variant:"h6",className:"price"},"$",this.state.item.price),c.a.createElement("div",{className:"buttonsContainer"},c.a.createElement("div",{onClick:function(){return e.props.addToCart(e.state.item.id)},className:"productButtons"},"Add to cart"),c.a.createElement($.a,{className:"select"},c.a.createElement(H.a,{htmlFor:"age-simple"},"Amount"),c.a.createElement(F.a,{value:this.state.numberOfItems,onChange:this.handleChange},c.a.createElement(A.a,{value:1},"1"),c.a.createElement(A.a,{value:2},"2"),c.a.createElement(A.a,{value:3},"3"),c.a.createElement(A.a,{value:4},"4"),c.a.createElement(A.a,{value:5},"5"),c.a.createElement(A.a,{value:10},"10"),c.a.createElement(A.a,{value:50},"50"))),c.a.createElement(E.a,{to:"/list/a",className:"link"},c.a.createElement("div",{className:"productButtons"},"Back"))))):c.a.createElement("div",{className:"modlabel"},c.a.createElement(p.a,{className:"spinner"}))}}]),t}(n.Component),q=Object(J.b)(null,function(e){return{addToCart:function(t){console.log(t);for(var a=0;K>a;a++)e({id:t,type:"ADD_ITEM"})}}})(U),z=a(17),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={list:[],items:[],isLoaded:!1,redirect:!1,duplicates:!1},a.fetchItems=function(){fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products").then(function(e){return e.json()}).then(function(e){a.setState({list:e,isLoaded:!0})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"createCartItem",value:function(){var e=this,t=this.state.list;return this.state.isLoaded?this.props.items.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"middleButtonContainer"},c.a.createElement("div",{onClick:function(){return e.props.checkout(1)},className:"productButtons"},"Checkout")),c.a.createElement("div",{className:"listContainer"},this.props.items.map(function(a){console.log("hey"),console.log(a);var n=t[a-1];if(console.log(n.id),a===n.id)return c.a.createElement("div",{className:"productContainer",key:a},c.a.createElement("div",{className:"productImageContainer"},c.a.createElement("img",{className:"productImage",alt:a,src:n.img})),c.a.createElement(k.a,{variant:"h5",key:"title"+a.id,className:"title"},n.title),c.a.createElement(k.a,{variant:"h6",key:"price"+a.id,className:"price"},"$",n.price),c.a.createElement("div",{className:"buttonsContainer"},c.a.createElement("div",{onClick:function(){return e.props.deleteItem(a.id)},className:"productButtons"},"Delete")))}))):0===this.props.items.length?c.a.createElement("div",{className:"listContainer"},c.a.createElement("div",{className:"productContainer"},c.a.createElement(k.a,{variant:"h4"},"No items in cart"))):void 0:c.a.createElement("div",{className:"modlabel"},c.a.createElement(p.a,{className:"spinner"}))}},{key:"render",value:function(){return c.a.createElement("h1",null,this.createCartItem())}}]),t}(n.Component);var P=Object(J.b)(function(e){return{items:e.items}},function(e){return{deleteItem:function(t){e({id:t,type:"DELETE_ITEM"})},checkout:function(t){e({id:t,type:"CHECKOUT"})}}})(G),Q=Object(z.a)(),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={value:"one",searchedValue:"a"},a.handleChange=function(e,t){a.setState({value:t}),"two"===t?Q.push("/cart"):"one"===t?Q.push("/list/a"):"three"===t&&Q.push("/detail/1")},a.search=function(e){"a"!==e?(a.setState({searchedValue:e.target.value,value:a.state.value}),Q.push("/list/"+e.target.value)):Q.push("/list/"+e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({value:this.state.value}),this.search("a")}},{key:"render",value:function(){var e=this,t=this.state.value;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.b,{history:Q},c.a.createElement(g.a,{position:"static"},c.a.createElement(y.a,{variant:"dense",className:"toolbar"},c.a.createElement("div",{className:"title"},c.a.createElement(k.a,{variant:"h6",color:"inherit",className:"title"},"Ecommerce")),c.a.createElement("div",{className:"search elem"},c.a.createElement(I.a,{className:"searchicon"}),c.a.createElement(L.a,{className:"searchtext",placeholder:"Search\u2026",onChange:function(t){return e.search(t)}})),c.a.createElement("div",{className:"tabs elem"},c.a.createElement(S.a,{value:t,onChange:this.handleChange,className:"tabs"},c.a.createElement(B.a,{value:"one",label:"list",className:"tab"}),c.a.createElement(B.a,{value:"two",label:"cart",className:"tab"}))))),c.a.createElement(d.a,{path:"/list/"+this.state.searchedValue,component:N}),c.a.createElement(d.a,{path:"/cart",component:P}),c.a.createElement(d.a,{path:"/detail/:productId",component:q})))}}]),t}(n.Component),W=a(68),X=Object(W.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[]},t=arguments.length>1?arguments[1]:void 0;return"ADD_ITEM"===t.type?{items:e.items.concat(t.id)}:"DELETE_ITEM"===t.type?{items:e.items.filter(function(e){return e.id!==t.id})}:"CHECKOUT"===t.type?{items:[]}:e});r.a.render(c.a.createElement(J.a,{store:X},c.a.createElement(R,null)),document.getElementById("root"))},91:function(e,t,a){}},[[204,1,2]]]);
//# sourceMappingURL=main.8e5ba5db.chunk.js.map