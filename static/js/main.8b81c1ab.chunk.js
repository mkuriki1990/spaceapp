(this.webpackJsonpspaceapp=this.webpackJsonpspaceapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(7),c=a.n(n),r=(a(13),a(1)),l=a(2),m=a(4),d=a(3),o=a(5),h=(a(14),function(e){function t(e){return Object(r.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.item[this.props.idx];return i.a.createElement("div",{className:"card_item",onClick:this.props.sel.bind(this,this.props.idx)},i.a.createElement("div",{className:"card_ttl"},e.title),i.a.createElement("div",{className:"card_own1"},"current owner:"),i.a.createElement("div",{className:"card_own2"},e.own),i.a.createElement("img",{className:"card_img",src:"images/"+e.img+".png"}),i.a.createElement("div",{className:"card_prc"},e.price),i.a.createElement("div",{className:"card_desc"},e.desc),i.a.createElement("div",{className:"card_btn"},"BUY NOW!"))}}]),t}(i.a.Component)),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={buy:!1},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"buy",value:function(){console.log("buy"),this.setState({buy:!0})}},{key:"handleClick",value:function(e){console.log("click => "+e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"detail"},i.a.createElement("div",{className:"det_left"},i.a.createElement("div",{className:"det_ttl"},this.props.item.title),i.a.createElement("img",{className:"det_img",src:"images/"+this.props.item.img+".png"}),i.a.createElement("div",{className:"det_mov"},this.props.item.movie)),i.a.createElement("div",{className:"det_right"},i.a.createElement("div",{className:"det_forsale"},"FOR SALE!"),i.a.createElement("div",{className:"det_prc"},this.props.item.price),i.a.createElement("div",{className:"det_dsc"},this.props.item.desc),i.a.createElement("div",{className:"det_back",onClick:this.props.sel.bind(this,-1)},"BACK"),i.a.createElement("div",{className:"det_btn",onClick:this.buy.bind(this)},"BUY NOW!")),this.state.buy?i.a.createElement("div",{className:"det_congrat"},"Congratulations! You are the owner of this debri-land"):i.a.createElement("div",null))}}]),t}(i.a.Component),u=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={mode:"top",selected:1,item:[{title:"Debri-Land 1",own:"John",img:"d01",price:"$199.00",desc:"the term space debris referred to the natural debris found in the Solar System: asteroids"},{title:"Debri-Land 2",own:"Tom",img:"d02",price:"$99.00",desc:"the term space debris referred to the natural debris found in the Solar System: asteroids"},{title:"Debri-Land 3",own:"Alice",img:"d03",price:"$99.00",desc:"the term space debris referred to the natural debris found in the Solar System: asteroids"}]},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"sel",value:function(e){e<0?this.setState({mode:"top",selected:e}):this.setState({mode:"detail",selected:e})}},{key:"render",value:function(){switch(this.state.mode){case"top":return i.a.createElement("div",{className:"App"},i.a.createElement("img",{className:"logo",src:"images/logo.jpeg"}),i.a.createElement("div",{className:"servicetitle"},"Happy Debriday!"),i.a.createElement("div",{className:"card pattern"},i.a.createElement(h,{idx:0,item:this.state.item,sel:this.sel.bind(this)}),i.a.createElement(h,{idx:1,item:this.state.item,sel:this.sel.bind(this)}),i.a.createElement(h,{idx:2,item:this.state.item,sel:this.sel.bind(this)}),i.a.createElement(h,{idx:0,item:this.state.item,sel:this.sel.bind(this)}),i.a.createElement(h,{idx:1,item:this.state.item,sel:this.sel.bind(this)}),i.a.createElement(h,{idx:2,item:this.state.item,sel:this.sel.bind(this)})));case"detail":return i.a.createElement(p,{item:this.state.item[this.state.selected],sel:this.sel.bind(this)});default:return i.a.createElement("div",{className:"App"},"Hello")}}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8b81c1ab.chunk.js.map