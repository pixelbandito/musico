(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(51)},26:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(15),r=n.n(i),c=(n(26),n(9)),s=n(2),l=n(3),u=n(5),h=n(4),d=n(6),p=n(16),v=(n(37),n(39),n(1)),b=n(8),m=n.n(b),g=(n(41),n(17)),f=n.n(g),y={C0:16.35,"C#0":17.32,Db0:17.32,D0:18.35,"D#0":19.45,Eb0:19.45,E0:20.6,F0:21.83,"F#0":23.12,Gb0:23.12,G0:24.5,"G#0":25.96,Ab0:25.96,A0:27.5,"A#0":29.14,Bb0:29.14,B0:30.87,C1:32.7,"C#1":34.65,Db1:34.65,D1:36.71,"D#1":38.89,Eb1:38.89,E1:41.2,F1:43.65,"F#1":46.25,Gb1:46.25,G1:49,"G#1":51.91,Ab1:51.91,A1:55,"A#1":58.27,Bb1:58.27,B1:61.74,C2:65.41,"C#2":69.3,Db2:69.3,D2:73.42,"D#2":77.78,Eb2:77.78,E2:82.41,F2:87.31,"F#2":92.5,Gb2:92.5,G2:98,"G#2":103.83,Ab2:103.83,A2:110,"A#2":116.54,Bb2:116.54,B2:123.47,C3:130.81,"C#3":138.59,Db3:138.59,D3:146.83,"D#3":155.56,Eb3:155.56,E3:164.81,F3:174.61,"F#3":185,Gb3:185,G3:196,"G#3":207.65,Ab3:207.65,A3:220,"A#3":233.08,Bb3:233.08,B3:246.94,C4:261.63,"C#4":277.18,Db4:277.18,D4:293.66,"D#4":311.13,Eb4:311.13,E4:329.63,F4:349.23,"F#4":369.99,Gb4:369.99,G4:392,"G#4":415.3,Ab4:415.3,A4:440,"A#4":466.16,Bb4:466.16,B4:493.88,C5:523.25,"C#5":554.37,Db5:554.37,D5:587.33,"D#5":622.25,Eb5:622.25,E5:659.26,F5:698.46,"F#5":739.99,Gb5:739.99,G5:783.99,"G#5":830.61,Ab5:830.61,A5:880,"A#5":932.33,Bb5:932.33,B5:987.77,C6:1046.5,"C#6":1108.73,Db6:1108.73,D6:1174.66,"D#6":1244.51,Eb6:1244.51,E6:1318.51,F6:1396.91,"F#6":1479.98,Gb6:1479.98,G6:1567.98,"G#6":1661.22,Ab6:1661.22,A6:1760,"A#6":1864.66,Bb6:1864.66,B6:1975.53,C7:2093,"C#7":2217.46,Db7:2217.46,D7:2349.32,"D#7":2489.02,Eb7:2489.02,E7:2637.02,F7:2793.83,"F#7":2959.96,Gb7:2959.96,G7:3135.96,"G#7":3322.44,Ab7:3322.44,A7:3520,"A#7":3729.31,Bb7:3729.31,B7:3951.07,C8:4186.01},T=n(19),E=n(7),w=n(18),A=n.n(w),D=n(12),x=n.n(D),_=function(e){return function(t){var n=t;t instanceof window.Event||(n=t.nativeEvent);var a=null;if(n.touches&&n.touches.length){var o=n.touches[0];a={x:o.clientX,y:o.clientY}}else n.clientX&&n.clientY&&(a={x:n.clientX,y:n.clientY});for(var i=arguments.length,r=new Array(i>1?i-1:0),c=1;c<i;c++)r[c-1]=arguments[c];return e.apply(void 0,[a,t].concat(r))}},O=function(){function e(t,n,a){Object(s.a)(this,e),this._listenersAdded=!1,this._currentAnimationFrame=null,this._onTouchStart=t,this._onTouchMove=n,this._onTouchEnd=a,this._handleTouchStart=_(this._handleTouchStart.bind(this)),this._handleMouseDown=_(this._handleMouseDown.bind(this)),this._handleTouchMove=_(this._handleTouchMove.bind(this)),this._handleTouchEnd=_(this._handleTouchEnd.bind(this))}return Object(l.a)(e,[{key:"listeners",value:function(e,t,n){var a=this;return{onTouchStart:function(n){return a._handleTouchStart(n,e,t)},onMouseDown:function(t){return a._handleMouseDown(t,e,n)}}}},{key:"removeListeners",value:function(){this._listenersAdded=!1,document.removeEventListener("touchmove",this._handleTouchMove),document.removeEventListener("touchend",this._handleTouchEnd),document.removeEventListener("touchcancel",this._handleTouchEnd),document.removeEventListener("mousemove",this._handleTouchMove),document.removeEventListener("mouseup",this._handleTouchEnd)}},{key:"cancelAnimationFrame",value:function(){x.a.cancel(this._currentAnimationFrame),this._currentAnimationFrame=null}},{key:"_addTouchListeners",value:function(){this._listenersAdded=!0,document.addEventListener("touchmove",this._handleTouchMove),document.addEventListener("touchend",this._handleTouchEnd),document.addEventListener("touchcancel",this._handleTouchEnd)}},{key:"_addMouseListeners",value:function(){this._listenersAdded=!0,document.addEventListener("mousemove",this._handleTouchMove),document.addEventListener("mouseup",this._handleTouchEnd)}},{key:"_handleTouchStart",value:function(e,t,n,a){this._listenersAdded||(this._addTouchListeners(),n.props.onTouchStart&&n.props.onTouchStart(t),a&&a(t),this._onTouchStart(e,t))}},{key:"_handleMouseDown",value:function(e,t,n,a){this._listenersAdded||(this._addMouseListeners(),n.props.onMouseDown&&n.props.onMouseDown(t),a&&a(t),this._onTouchStart(e,t))}},{key:"_handleTouchMove",value:function(e,t){var n=this;this._currentAnimationFrame||(this._currentAnimationFrame=x()(function(){n._currentAnimationFrame=null,n._onTouchMove(e,t)}))}},{key:"_handleTouchEnd",value:function(e,t){this.cancelAnimationFrame(),this.removeListeners(),this._onTouchEnd(e,t)}}]),e}(),j=n(20),k=[["left","dx",C],["top","dy",C],["bottom","dy",S],["right","dx",S],["translateX","dx",C],["translateY","dy",C]];function C(e,t){return e+t}function S(e,t){return C(e,-t)}var M=function(e,t){return k.reduce(function(n,a){var o=Object(j.a)(a,3),i=o[0],r=o[1],c=o[2];return void 0!==e[i]&&(n[i]=c(e[i],t[r])),n},{})},F=function(e,t){var n=e.x,a=e.y;return{dx:t.x-n,dy:t.y-a}},G={initial:null,current:null,deltas:{dx:0,dy:0}},L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state=G,n._touchHandler=new O(n.handleTouchStart.bind(Object(E.a)(Object(E.a)(n))),n.handleTouchMove.bind(Object(E.a)(Object(E.a)(n))),n.handleTouchEnd.bind(Object(E.a)(Object(E.a)(n)))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"passThroughState",value:function(){var e=this.props.position,t=this.state,n=t.deltas,a=t.current,o=M(e,n);return Object(v.a)({},o,n,a)}},{key:"handleTouchStart",value:function(e){this.setState({initial:e,current:e})}},{key:"handleTouchMove",value:function(e,t){var n=this.state,a=n.deltas,o=n.current,i=F(o,e),r=M(this.props.position,i);this.props.onDrag&&this.props.onDrag(Object(v.a)({},r,o),t);var c={dx:a.dx+i.dx,dy:a.dy+i.dy};this.setState({deltas:c,current:e})}},{key:"handleTouchEnd",value:function(){this.props.onDragEnd&&this.props.onDragEnd()}},{key:"render",value:function(){var e=this.props,t=e.onTouchStart,n=e.onMouseDown,a=e.children,i=e.__passThrough,r=Object(v.a)({},i,this.passThroughState()),c=A()(a)?a(Object(v.a)({},r)):a,s=Object(v.a)({},this._touchHandler.listeners(c,t,n));return c.type.propTypes&&c.type.propTypes.hasOwnProperty("__passThrough")&&(s.__passThrough=r),o.a.cloneElement(o.a.Children.only(c),s)}}]),t}(o.a.Component),B=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={dragging:!1,height:null,initialTouchX:null,initialTouchY:null,parentX:null,parentY:null,touchX:null,touchY:null,width:null},n.DraggableParent=o.a.createRef(),n.handleMouseDown=function(e){var t=n.props.onStrikeStart;if(n.DraggableParent.current){var a=n.DraggableParent.current,o=a.offsetWidth,i=a.offsetHeight,r=a.offsetLeft,c=a.offsetTop,s=(e.clientX-r)/o,l=(e.clientY-c)/i;n.setState({dragging:!0,height:i,initialTouchX:s,initialTouchY:l,parentX:r,parentY:c,touchX:s,touchY:l,width:o,lastEvent:"handleMouseDown"}),t&&t({touchY:l})}},n.handleTouchStart=function(e){var t=n.props.onStrikeStart;if(!e.touches||e.touches.length,n.DraggableParent.current){var a=n.DraggableParent.current,o=a.offsetWidth,i=a.offsetHeight,r=a.offsetLeft,c=a.offsetTop,s=Object(T.a)(e.touches).pop()||{},l=(s.clientX-r)/o,u=(s.clientY-c)/i;n.setState({dragging:!0,height:i,initialTouchX:l,initialTouchY:u,parentX:r,parentY:c,touchX:l,touchY:u,width:o,lastEvent:"handleTouchStart"}),t&&t({touchY:u})}},n.handleDrag=function(e,t){var a=n.state,o=a.dragging,i=a.height,r=a.parentX,c=a.parentY,s=a.width;if(o&&n.DraggableParent.current&&n.DraggableParent.current.contains(t.target)){var l=(e.x-r)/s,u=(e.y-c)/i;return l<0||l>1||u<0||u>1?(n.setState({dragging:!1}),void n.handleDragEnd()):void 0}},n.handleDragEnd=function(){var e=n.props.onStrikeEnd;n.setState({dragging:!1,lastEvent:"handleDragEnd"}),e&&e()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.style;return o.a.createElement("div",{ref:this.DraggableParent,style:Object(v.a)({position:"relative"},e)},o.a.createElement(L,{onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,onDrag:this.handleDrag,onDragEnd:this.handleDragEnd,position:{left:0,top:0}},function(t){return o.a.createElement("div",null,o.a.createElement("div",{style:Object(v.a)({},e,{position:"absolute",width:"100%",height:"100%",top:"0",left:"0"})}))}))}}]),t}(a.Component),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={started:!1,playing:!1,nextVolume:n.props.volMute,context:n.props.context||window.AudioContext&&new window.AudioContext||window.webkitAudioContext&&new window.webkitAudioContext||null},n.handleStrikeStart=function(e){var t=n.props,a=t.volMax,o=t.volMute,i=t.attack,r=t.decay,c=t.decayLevel,s=t.sustain;n.state.started||n.setState({started:!0},function(){return n.oscillator.start(0)});var l=n.state.context,u=n.gainNode.gain.value,h=a*(.6*e.touchY+.4),d=h*(c||.3);n.gainNode.gain.cancelScheduledValues(l.currentTime),n.gainNode.gain.setValueAtTime(u,l.currentTime),n.gainNode.gain.exponentialRampToValueAtTime(h,l.currentTime+i),n.gainNode.gain.exponentialRampToValueAtTime(d,l.currentTime+i+r),n.gainNode.gain.exponentialRampToValueAtTime(o,l.currentTime+i+r+s),n.setState({playing:!0})},n.handleStrikeEnd=function(){var e=n.props,t=e.volMute,a=e.release,o=n.state.context,i=n.gainNode.gain.value;n.gainNode.gain.cancelScheduledValues(o.currentTime),n.gainNode.gain.setValueAtTime(i,o.currentTime),n.gainNode.gain.exponentialRampToValueAtTime(t,o.currentTime+a),n.setState({playing:!1})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.note,n=e.volMute,a=this.state.context;this.gainNode=a.createGain(),this.oscillator=a.createOscillator(),this.oscillator.type="sine",this.oscillator.frequency.value=y[t],this.gainNode.gain.setValueAtTime(n,a.currentTime),this.oscillator.connect(this.gainNode),this.gainNode.connect(a.destination),this.nextGain=null}},{key:"render",value:function(){var e,n=this.props,a=n.note,i=n.style,r=this.state.playing,s=a.indexOf("#")>=0||a.indexOf("b")>=0,l=f()(t.baseClass,(e={},Object(c.a)(e,"".concat(t.baseClass,"--active"),r),Object(c.a)(e,"".concat(t.baseClass,"--black"),s),e));return o.a.createElement("div",{className:l,style:Object(v.a)({},i,{display:"grid",gridTemplateRows:"1fr",gridTemplateColumns:"1fr"})},o.a.createElement(B,{onStrikeStart:this.handleStrikeStart,onStrike:function(){},onStrikeEnd:this.handleStrikeEnd,style:{display:"grid",gridTemplateRows:"1fr",gridTemplateColumns:"1fr",position:"absolute",width:"100%",height:"100%",top:"0",left:"0",color:s?"#444":"#ccc"}}))}}]),t}(a.Component);N.baseClass="Key",N.defaultProps={note:"C4",volMute:1e-4,volMax:1,attack:.03,decay:.1,decayLevel:.5,sustain:2,release:1};var Y=N,X=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={context:window.AudioContext&&new window.AudioContext||window.webkitAudioContext&&new window.webkitAudioContext||null},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.volMute,n=e.volMax,a=e.attack,i=e.decay,r=e.decayLevel,c=e.sustain,s=e.release,l=this.state.context,u={flex:"1 1 auto",minWidth:"0",overflow:"hidden"},h={volMute:t,volMax:n},d={attack:a,decay:i,decayLevel:r,sustain:c,release:s};return o.a.createElement("div",{className:"KeyBoard",style:{display:"flex",flexFlow:"row nowrap",alignItems:"stretch",justifyContent:"flex-start",height:"90vh",flex:"1 1 auto",minHeight:"0",userSelect:"none"}},["C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5"].map(function(e){return o.a.createElement(Y,Object.assign({context:l,key:e,note:e},h,d,{style:Object(v.a)({},u)}))}))}}]),t}(a.Component);Y.propTypes={volMute:m.a.number,volMax:m.a.number,attack:m.a.number,decay:m.a.number,decayLevel:m.a.number,sustain:m.a.number},Y.defaultProps={volMute:1e-4,volMax:1,attack:.03,decay:.03,decayLevel:.5,sustain:2,release:1};var P=X,V=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={attack:.05,decay:.05,decayLevel:.5,sustain:3,release:1},n.update=function(e){return function(t){var a=parseInt(t.target.value,10);isNaN(a)||n.setState(Object(c.a)({},e,a))}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t={attack:e.attack,decay:e.decay,decayLevel:e.decayLevel,sustain:e.sustain,release:e.release};return o.a.createElement("div",{className:"App",style:{display:"flex",flexFlow:"column nowrap",height:"100vh",width:"100vw"}},o.a.createElement(p.Helmet,null,o.a.createElement("title",null,"Musico")),o.a.createElement("div",{style:{flex:"0 0 10vw",minHeight:"0"}},o.a.createElement("input",{type:"number",placeholder:"Attack",onChange:this.update("attack")}),o.a.createElement("input",{type:"number",placeholder:"Decay",onChange:this.update("decay")}),o.a.createElement("input",{type:"number",placeholder:"Decay level",onChange:this.update("decayLevel")}),o.a.createElement("input",{type:"number",placeholder:"Sustain",onChange:this.update("sustain")}),o.a.createElement("input",{type:"number",placeholder:"Release",onChange:this.update("release")})),o.a.createElement("div",{style:{flex:"1 1 auto",minHeight:"0",overflow:"hidden",display:"flex",flexFlow:"column nowrap"}},o.a.createElement(P,Object.assign({volMute:1e-4,volMax:1},t))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.d829ad99.chunk.js.map