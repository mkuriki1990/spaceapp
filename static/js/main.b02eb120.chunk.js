(this.webpackJsonpspaceapp=this.webpackJsonpspaceapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),n=a(7),r=a.n(n),c=(a(13),a(1)),l=a(2),m=a(4),d=a(3),o=a(5),h=(a(14),function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.item[this.props.idx];return s.a.createElement("div",{className:"card_item",onClick:this.props.sel.bind(this,this.props.idx)},s.a.createElement("div",{className:"card_ttl"},e.title),s.a.createElement("img",{className:"card_img",src:"images/"+e.img+".png"}),s.a.createElement("div",{className:"card_prc"},e.price),e.desc,s.a.createElement("div",{className:"card_btn"},"BUY NOW!"))}}]),t}(s.a.Component)),p=function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){console.log("click => "+e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"detail",onClick:this.handleClick.bind(this,this.props.item.title)},s.a.createElement("div",{className:"det_left"},s.a.createElement("div",{className:"det_ttl"},this.props.item.title),s.a.createElement("img",{className:"det_img",src:"images/"+this.props.item.img+".png"}),s.a.createElement("div",{className:"det_mov"},this.props.item.movie)),s.a.createElement("div",{className:"det_right"},s.a.createElement("div",{className:"det_prc"},this.props.item.price),s.a.createElement("div",{className:"det_dsc"},this.props.item.desc),s.a.createElement("div",{className:"det_btn"},"BUY NOW!")))}}]),t}(s.a.Component),u=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={mode:"top",selected:1,item:[{title:"Land 1",img:"d01",price:"$199.00",desc:"the term space debris referred to the natural debris found in the Solar System: asteroids"},{title:"Land 2",img:"d02",price:"$99.00",desc:"the term space debris referred to the natural debris found in the Solar System: asteroids"},{title:"Land 3",img:"d03",price:"$99.00",desc:"the term space debris referred to the natural debris found in the Solar System: asteroids"}]},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"sel",value:function(e){this.setState({mode:"detail",selected:e})}},{key:"render",value:function(){switch(this.state.mode){case"top":return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},"Buy Your Orbital Land"),s.a.createElement("div",{className:"card pattern"},s.a.createElement(h,{idx:0,item:this.state.item,sel:this.sel.bind(this)}),s.a.createElement(h,{idx:1,item:this.state.item,sel:this.sel.bind(this)}),s.a.createElement(h,{idx:2,item:this.state.item,sel:this.sel.bind(this)}),s.a.createElement(h,{idx:0,item:this.state.item,sel:this.sel.bind(this)}),s.a.createElement(h,{idx:1,item:this.state.item,sel:this.sel.bind(this)}),s.a.createElement(h,{idx:2,item:this.state.item,sel:this.sel.bind(this)})));case"detail":return s.a.createElement(p,{item:this.state.item[this.state.selected]});default:return s.a.createElement("div",{className:"App"},"Hello")}}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b02eb120.chunk.js.map