(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(56),l=n.n(i),r=(n(62),n(5)),c=n(6),d=n(8),s=n(7),u=n(9),h=(n(64),n(66),{c:261.6,d:293.7,e:329.6}),p=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={playing:!1,context:window.AudioContext&&new window.AudioContext||window.webkitAudioContext&&new window.webkitAudioContext||null},n.handleClick=function(){var e=n.state,t=e.context;e.playing?n.gainNode.gain.exponentialRampToValueAtTime(1e-5,t.currentTime+.4):n.gainNode.gain.exponentialRampToValueAtTime(1,t.currentTime+.1),n.setState(function(e){return{playing:!e.playing}})},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.note,t=this.state.context;this.gainNode=t.createGain(),this.oscillator=t.createOscillator(),this.oscillator.type="sine",this.oscillator.frequency.value=h[e],this.oscillator.start(0),this.gainNode.gain.setValueAtTime(1e-4,t.currentTime),this.oscillator.connect(this.gainNode),this.gainNode.connect(t.destination)}},{key:"render",value:function(){return a.a.createElement("button",{onClick:this.handleClick},"Click me")}}]),t}(o.Component),m=(n(68),n(12)),g=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).handleHoldComplete=function(e){console.log("handleHoldComplete",{event:e})},n.handleHoldProgress=function(e){console.log("handleHoldProgress",{event:e})},n.handleTap=function(e){console.log("handleTap",{event:e})},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.Holdable,{config:Object(m.defineHold)({updateEvery:10,holdFor:1e4}),onHoldComplete:this.handleHoldComplete,onHoldProgress:this.handleHoldProgress,children:function(e){return a.a.createElement("div",{style:{height:"100px",width:"100px",background:"pink",userSelect:"none",margin:"20px"}},e.holdProgress,typeof window.webkitAudioContext)}}),a.a.createElement(m.Holdable,{config:Object(m.defineHold)({updateEvery:10,holdFor:1e4}),onHoldComplete:this.handleHoldComplete,onHoldProgress:this.handleHoldProgress,children:function(e){return a.a.createElement("div",{style:{height:"100px",width:"100px",background:"pink",userSelect:"none",margin:"20px"}},e.holdProgress,typeof window.webkitAudioContext)}}))}}]),t}(o.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(g,null)}}]),t}(o.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement(f,null)),a.a.createElement("div",null,a.a.createElement(p,{note:"c"}),a.a.createElement(p,{note:"d"}),a.a.createElement(p,{note:"e"})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,n){e.exports=n(152)},62:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){}},[[57,2,1]]]);
//# sourceMappingURL=main.3e8c414f.chunk.js.map