(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),c=n.n(i),r=(n(14),n(1)),l=n(2),s=n(4),u=n(3),p=n(5),d=n(8),m=n.n(d),h=(n(16),n(18),{c:261.6,d:293.7,e:329.6}),g=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={playing:!1,context:new AudioContext},n.handleClick=function(){var e=n.state,t=e.context;e.playing?n.gainNode.gain.exponentialRampToValueAtTime(1e-5,t.currentTime+.4):n.gainNode.gain.exponentialRampToValueAtTime(1,t.currentTime+.1),n.setState(function(e){return{playing:!e.playing}})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.note,t=this.state.context;this.gainNode=t.createGain(),this.oscillator=t.createOscillator(),this.oscillator.type="sine",this.oscillator.frequency.value=h[e],this.oscillator.start(0),this.gainNode.gain.setValueAtTime(1e-4,t.currentTime),this.oscillator.connect(this.gainNode),this.gainNode.connect(t.destination)}},{key:"render",value:function(){return o.a.createElement("button",{onClick:this.handleClick},"Click me")}}]),t}(a.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement(g,{note:"c"}),o.a.createElement(g,{note:"d"}),o.a.createElement(g,{note:"e"})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.2031ffbe.chunk.js.map