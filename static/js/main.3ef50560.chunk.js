(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{18:function(t,n,e){},19:function(t,n,e){"use strict";e.r(n);var o=e(4),r=e.n(o),c=e(5),s=e(6),a=e(7),u=e(11),i=e(10),d=e(3),l=e.n(d),f=e(1),b=e(0),h=function(t){var n=t.goods;return Object(b.jsx)("ul",{children:n.map((function(t){return Object(b.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})},j=(e(18),e(9)),m="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json",p=function(){return fetch(m).then((function(t){return t.json()}))},g=function(){return fetch(m).then((function(t){return t.json()})).then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)}))})).then((function(t){return Object(j.a)(t).slice(0,5)}))},O=function(){return p().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},y=function(t){Object(u.a)(e,t);var n=Object(i.a)(e);function e(){var t;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={goods:[]},t.goodsLoader=function(){var n=Object(c.a)(l.a.mark((function n(e){var o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:o=n.sent,t.setState({goods:o});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t}return Object(a.a)(e,[{key:"render",value:function(){var t=this.state.goods,n=this.goodsLoader;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(b.jsx)("button",{className:"button",type:"button",onClick:function(){return n(p)},children:"Load All goods"}),Object(b.jsx)("button",{className:"button",type:"button",onClick:function(){return n(g)},children:"Load five first goods"}),Object(b.jsx)("button",{className:"button",type:"button",onClick:function(){return n(O)},children:"Load red goods"}),t&&Object(b.jsx)(h,{goods:t})]})}}]),e}(f.Component),v=y;r.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.3ef50560.chunk.js.map