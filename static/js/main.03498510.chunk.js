(this["webpackJsonp@fseehawer/react-circular-slider"]=this["webpackJsonp@fseehawer/react-circular-slider"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);a(9);var n=a(0),o=a.n(n),r=a(7),l=a.n(r),i=(a(15),a(1)),c=a(5),s=a(4),d=function(e,t){switch(t.type){case"init":case"setKnobPosition":return Object(i.a)({},e,{},t.payload);case"onMouseDown":case"onMouseUp":case"setInitialKnobPosition":return Object(i.a)({},e,{},t.payload);default:throw new Error}},u=function(e,t){var a=Object(n.useRef)(null);Object(n.useEffect)((function(){a.current=t}),[t]),Object(n.useEffect)((function(){if("undefined"!==typeof window){var t=function(e){return a.current(e)};return window.addEventListener(e,t,{passive:!1}),function(){window.removeEventListener(e,t)}}}),[e])},p=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){o(!1)}),[]),a},f=(a(16),function(e){var t=e.isDragging,a=e.knobPosition,n=e.knobColor,r=e.knobRadius,l=void 0===r?12:r,c=e.knobSize,s=void 0===c?36:c,d=e.hideKnob,u=e.onMouseDown,p=e.trackSize,f=e.children,m={knob:{position:"absolute",left:"-".concat(s/2-p/2,"px"),top:"-".concat(s/2-p/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},pause:{animation:"pulse 1500ms paused"},animation:{transformOrigin:"50% 50%",animationTimingFunction:"ease-out",animation:"pulse 1500ms infinite"},hide:{opacity:0}};return o.a.createElement("div",{style:Object(i.a)({transform:"translate(".concat(a.x,"px, ").concat(a.y,"px)")},m.knob,{},t&&m.dragging,{},d&&m.hide),onMouseDown:u,onTouchStart:u},o.a.createElement("svg",{width:"".concat(s,"px"),height:"".concat(s,"px"),viewBox:"0 0 ".concat(s," ").concat(s)},o.a.createElement("circle",{style:Object(i.a)({},m.animation,{},t&&m.pause),fill:n,fillOpacity:"0.2",stroke:"none",cx:s/2,cy:s/2,r:s/2}),o.a.createElement("circle",{fill:n,stroke:"none",cx:s/2,cy:s/2,r:l}),f||o.a.createElement(o.a.Fragment,null,o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"}))))}),m=function(e){var t=e.labelColor,a=e.labelBottom,n=e.labelFontSize,r=e.valueFontSize,l=e.appendToValue,c=e.prependToValue,s=e.verticalOffset,d=e.hideLabelValue,u=e.label,p=e.value,f={labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),userSelect:"none",zIndex:1},value:{fontSize:"".concat(r),position:"relative"},bottomMargin:{marginBottom:"calc(".concat(s,")")},appended:{position:"absolute",right:"0",top:"0",transform:"translate(100%, 0)"},prepended:{position:"absolute",left:"0",top:"0",transform:"translate(-100%, 0)"},hide:{display:"none"}};return o.a.createElement("div",{style:Object(i.a)({},f.labels,{},d&&f.hide)},a||o.a.createElement("div",{style:{fontSize:n}},u),o.a.createElement("div",{style:Object(i.a)({},f.value,{},!a&&f.bottomMargin)},o.a.createElement("code",null,o.a.createElement("span",{style:f.prepended},c),p,o.a.createElement("span",{style:f.appended},l))),a&&o.a.createElement("div",{style:{fontSize:n}},u))},v=function(e){var t=e.width,a=e.label,n=e.direction,r=e.strokeDasharray,l=e.strokeDashoffset,i=e.progressColorFrom,c=e.progressColorTo,s=e.trackColor,d=e.progressSize,u=e.trackSize,p=e.svgFullPath,f=e.radiansOffset,m=e.progressLineCap,v={svg:{position:"relative",zIndex:2},path:{transform:"rotate(".concat(f,"rad) ").concat(-1===n?"scale(-1, 1)":"scale(1, 1)"),transformOrigin:"center center"}},h=u/2,g=t/2-h;return o.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",style:v.svg},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:a,x1:"100%",x2:"0%"},o.a.createElement("stop",{offset:"0%",stopColor:i}),o.a.createElement("stop",{offset:"100%",stopColor:c}))),o.a.createElement("circle",{strokeWidth:u,fill:"none",stroke:s,cx:t/2,cy:t/2,r:g}),o.a.createElement("path",{style:v.path,ref:p,strokeDasharray:r,strokeDashoffset:l,strokeWidth:d,strokeLinecap:"round"!==m?"butt":"round",fill:"none",stroke:"url(#".concat(a,")"),d:"\n                        M ".concat(t/2,", ").concat(t/2,"\n                        m 0, -").concat(t/2-h,"\n                        a ").concat(t/2-h,",").concat(t/2-h," 0 0,1 0,").concat(t-2*h,"\n                        a -").concat(t/2-h,",-").concat(t/2-h," 0 0,1 0,-").concat(t-2*h,"\n                    ")}))},h={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},g=function(e){return e<0?-1:1},b=function(e){return e*Math.PI/180},y=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a},E={circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1}},k=function(e){var t,a,r=e.label,l=void 0===r?"ANGLE":r,k=e.width,x=void 0===k?280:k,w=e.direction,C=void 0===w?1:w,O=e.min,F=void 0===O?0:O,S=e.max,j=void 0===S?360:S,z=e.knobColor,P=void 0===z?"#4e63ea":z,D=e.knobPosition,M=void 0===D?"top":D,I=e.labelColor,T=void 0===I?"#272b77":I,V=e.labelBottom,L=void 0!==V&&V,R=e.labelFontSize,B=void 0===R?"1rem":R,A=e.valueFontSize,K=void 0===A?"3rem":A,N=e.appendToValue,U=void 0===N?"":N,W=e.prependToValue,X=void 0===W?"":W,Y=e.verticalOffset,G=void 0===Y?"1.5rem":Y,H=e.hideLabelValue,J=void 0!==H&&H,$=e.hideKnob,Q=void 0!==$&&$,Z=e.knobDraggable,_=void 0===Z||Z,q=e.progressColorFrom,ee=void 0===q?"#80C3F3":q,te=e.progressColorTo,ae=void 0===te?"#4990E2":te,ne=e.progressSize,oe=void 0===ne?8:ne,re=e.trackColor,le=void 0===re?"#DDDEFB":re,ie=e.trackSize,ce=void 0===ie?8:ie,se=e.data,de=void 0===se?[]:se,ue=e.dataIndex,pe=void 0===ue?0:ue,fe=e.progressLineCap,me=void 0===fe?"round":fe,ve=e.renderLabelValue,he=void 0===ve?null:ve,ge=e.children,be=e.onChange,ye=void 0===be?function(e){}:be,Ee={mounted:!1,isDragging:!1,width:x,radius:x/2,knobPosition:M,label:0,data:de,radians:0,offset:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0},ke=p(),xe=Object(n.useReducer)(d,Ee),we=Object(s.a)(xe,2),Ce=we[0],Oe=we[1],Fe=Object(n.useRef)(null),Se=Object(n.useRef)(null),je=!ke&&null!==(t=null===(a=window)||void 0===a?void 0:a.ontouchstart)&&void 0!==t&&t,ze={DOWN:je?"touchstart":"mousedown",UP:je?"touchend":"mouseup",MOVE:je?"touchmove":"mousemove"},Pe=Object(n.useCallback)((function(e){var t=Ce.radius-ce/2,a=e+h[M],n=(a>0?a:2*Math.PI+a)*(360/(2*Math.PI)),o=n/360*Ce.dashFullArray;n=-1===g(C)?360-n:n;var r=(Ce.data.length-1)/360,l=Math.round(n*r);Ce.data[l]!==Ce.label&&ye(Ce.data[l]),Oe({type:"setKnobPosition",payload:{dashFullOffset:-1===g(C)?o:Ce.dashFullArray-o,label:Ce.data[l],knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}}})}),[Ce.dashFullArray,Ce.radius,Ce.data,Ce.label,M,ce,C,ye]),De=Object(n.useCallback)((function(e){if(Ce.isDragging){var t;e.preventDefault(),"touchmove"===e.type&&(t=e.changedTouches[0]);var a=function(e){var t,a,n,o,r,l,i,c,s,d,u=e.current.getBoundingClientRect(),p=!ke&&((null!==(t=null===(a=window)||void 0===a?void 0:a.pageXOffset)&&void 0!==t?t:0)||(null!==(n=null===(o=document)||void 0===o||null===(r=o.documentElement)||void 0===r?void 0:r.scrollLeft)&&void 0!==n?n:0)),f=!ke&&((null!==(l=null===(i=window)||void 0===i?void 0:i.pageYOffset)&&void 0!==l?l:0)||(null!==(c=null===(s=document)||void 0===s||null===(d=s.documentElement)||void 0===d?void 0:d.scrollTop)&&void 0!==c?c:0));return{top:u.top+f,left:u.left+p}},n=("touchmove"===e.type?t.pageX:e.pageX)-(a(Fe).left+Ce.radius),o=("touchmove"===e.type?t.pageY:e.pageY)-(a(Fe).top+Ce.radius),r=Math.atan2(o,n);Pe(r)}}),[Ce.isDragging,Ce.radius,Pe,ke]);return Object(n.useEffect)((function(){Oe({type:"init",payload:{mounted:!0,data:Ce.data.length?Object(c.a)(Ce.data):Object(c.a)(y(F,j)),dashFullArray:Se.current.getTotalLength?Se.current.getTotalLength():0}})}),[j,F]),Object(n.useEffect)((function(){var e=Ce.data.length,t=pe>e-1?e-1:pe;if(e){var a=360/e,n=b(a)/2;if(Oe({type:"setInitialKnobPosition",payload:{radians:Math.PI/2-h[Ce.knobPosition],offset:n}}),t){var o=g(C)*t*a,r=b(o)-h[Ce.knobPosition];return Pe(r+n*g(C))}Pe(-h[Ce.knobPosition]*g(C)+n*g(C))}}),[Ce.dashFullArray,Ce.knobPosition,Ce.data.length,pe,C]),u(ze.MOVE,De),u(ze.UP,(function(){Oe({type:"onMouseUp",payload:{isDragging:!1}})})),o.a.createElement("div",{style:Object(i.a)({},E.circularSlider,{},Ce.mounted&&E.mounted),ref:Fe},o.a.createElement(v,{width:x,label:l.split(" ").join(""),direction:C,strokeDasharray:Ce.dashFullArray,strokeDashoffset:Ce.dashFullOffset,svgFullPath:Se,progressSize:oe,progressColorFrom:ee,progressColorTo:ae,progressLineCap:me,trackColor:le,trackSize:ce,radiansOffset:Ce.radians}),_&&o.a.createElement(f,{isDragging:Ce.isDragging,knobPosition:{x:Ce.knob.x,y:Ce.knob.y},knobColor:P,trackSize:ce,hideKnob:Q,onMouseDown:function(){Oe({type:"onMouseDown",payload:{isDragging:!0}})}},ge),he||o.a.createElement(m,{label:l,labelColor:T,labelBottom:L,labelFontSize:B,verticalOffset:G,valueFontSize:K,appendToValue:U,prependToValue:X,hideLabelValue:J,value:"".concat(Ce.label)}))};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var C=o.a.createElement("g",null,o.a.createElement("path",{fill:"#ffffff",d:"M495.9,990c-3.9-5.6-7.2-11.6-11.7-16.6c-40.1-44.6-80.4-89-120.6-133.6c-4.6-5-8.7-10.4-15.9-19c33.1,0,62.5,0,93.1,0c0-88.9,0-175.3,0-262.9c-86.8,0-173.1,0-261.6,0c0,30.6,0,60.1,0,94.9C120.9,600.2,66.3,550.9,10,500.1c55.9-50.6,110.5-100,168.6-152.5c0,32.5,0,60.7,0,90.2c88.6,0,174.9,0,262.3,0c0-85.6,0-170.8,0-258.4c-30.1,0-59.6,0-94.4,0C399.5,120.8,448.7,66.3,499.5,10c50.7,56.2,100,110.8,152.8,169.2c-33.8,0-62.6,0-92.6,0c0,87.6,0,172.6,0,258.9c86.6,0,172.4,0,260.3,0c0-29.1,0-57.5,0-91.8c59,53.3,113.9,102.9,170.1,153.8c-56.2,50.7-110.8,100.1-169,152.5c0-33.9,0-63.3,0-94.3c-88,0-173.7,0-261.4,0c-0.4,4.9-1.3,10.4-1.3,15.8c-0.1,75.9,0.4,151.9-0.5,227.8c-0.2,16.2,5.8,19.3,20,18.7c22.9-0.9,45.9-0.2,74.9-0.2C599.7,879.2,549.7,934.6,499.8,990C498.5,990,497.2,990,495.9,990z"})),O=function(e){var t=e.svgRef,a=e.title,n=w(e,["svgRef","title"]);return o.a.createElement("svg",x({x:"0px",y:"0px",viewBox:"0 0 1000 1000",enableBackground:"new 0 0 1000 1000",xmlSpace:"preserve",ref:t},n),a?o.a.createElement("title",null,a):null,C)},F=o.a.forwardRef((function(e,t){return o.a.createElement(O,x({svgRef:t},e))}));a.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var z=function(e){var t=e.svgRef,a=e.title,n=j(e,["svgRef","title"]);return o.a.createElement("svg",S({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 473.931 473.931",style:{enableBackground:"new 0 0 473.931 473.931"},xmlSpace:"preserve",ref:t},n),a?o.a.createElement("title",null,a):null,o.a.createElement("circle",{style:{fill:"#FFC10E"},cx:236.966,cy:236.966,r:236.966}),o.a.createElement("path",{style:{fill:"#333333"},d:"M81.391,237.127c0,85.911,69.649,155.56,155.56,155.56c85.915,0,155.567-69.649,155.567-155.56 H81.391z"}),o.a.createElement("path",{style:{fill:"#CA2027"},d:"M150.452,298.705c0,47.771,38.731,86.498,86.498,86.498c47.775,0,86.502-38.731,86.502-86.498 H150.452z"}),o.a.createElement("g",null,o.a.createElement("circle",{style:{fill:"#333333"},cx:164.937,cy:155.231,r:37.216}),o.a.createElement("circle",{style:{fill:"#333333"},cx:305.664,cy:155.231,r:37.216})))},P=o.a.forwardRef((function(e,t){return o.a.createElement(z,S({svgRef:t},e))})),D=(a.p,function(){var e={wrapper:{margin:"2rem"},h3:{margin:"3rem 0 2rem 0"},pre:{fontSize:"0.9rem",borderRadius:"0.3rem",backgroundColor:"#eeeeee",padding:"0.5rem"},slider:{padding:"0 0 0.5rem 0"}};return o.a.createElement("div",{style:e.wrapper},o.a.createElement("h3",{style:e.h3},'Anticlockwise rotation with the knob positioned to the right and "\xb0" appended to the value:'),o.a.createElement("div",{style:e.slider},o.a.createElement(k,{direction:-1,knobPosition:"right",appendToValue:"\xb0",valueFontSize:"4rem"})),o.a.createElement("pre",{className:e.pre},'<CircularSlider\n    min={0}\n    max={360}\n    direction={-1}\n    knobPosition="right"\n    appendToValue="\xb0"\n    valueFontSize="4rem"\n/>'),o.a.createElement("h3",{className:e.h3},'An initial value of 20, "$" prepended and "K" appended to the value with a custom knob icon and the label on the bottom:'),o.a.createElement("div",{className:e.slider},o.a.createElement(k,{label:"savings account",min:0,max:100,dataIndex:20,prependToValue:"$",appendToValue:"K",labelColor:"#005a58",labelBottom:!0,knobColor:"#005a58",progressColorFrom:"#00bfbd",progressColorTo:"#009c9a",progressSize:24,trackColor:"#eeeeee",trackSize:24},o.a.createElement(F,{x:"9",y:"9",width:"18px",height:"18px"}))),o.a.createElement("pre",{className:e.pre},'import { ReactComponent as PowerIcon } from \'./assets/power.svg\';\n.\n.\n.\n<CircularSlider\n    label="savings"\n    min={0}\n    max={100}\n    dataIndex={20}\n    prependToValue="$"\n    appendToValue="K"\n    labelColor="#005a58"\n    labelBottom={true}\n    knobColor="#005a58"\n    progressColorFrom="#00bfbd"\n    progressColorTo="#005a58"\n    progressSize={24}\n    trackColor="#eeeeee"\n    trackSize={24}\n>\n    <DragIcon x="9" y="8" width="18px" height="18px" />\n</CircularSlider>'),o.a.createElement("h3",{className:e.h3},"A flat line cap with the track size smaller than the progress track size and a smiley knob:"),o.a.createElement("div",{className:e.slider},o.a.createElement(k,{label:"Alphabet",progressLineCap:"flat",dataIndex:1,width:250,labelColor:"#212121",valueFontSize:"6rem",verticalOffset:"1rem",knobColor:"#212121",progressColorFrom:"#ff8500",progressColorTo:"#a15400",progressSize:8,trackColor:"#eeeeee",trackSize:4,data:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")},o.a.createElement(P,{x:"9",y:"9",width:"18px",height:"18px"}))),o.a.createElement("pre",{className:e.pre},'\nimport { ReactComponent as EmojiIcon } from \'./assets/emoji.svg\';\n.\n.\n.\n<CircularSlider\n    width={200}\n    progressLineCap="flat"\n    dataIndex={1}\n    label="Alphabet"\n    data=["A","B","C"]//...\n    labelColor="#212121"\n    valueFontSize="6rem"\n    verticalOffset="1rem"\n    knobColor="#212121"\n    progressColorFrom="#ff8500"\n    progressColorTo="#a15400"\n    progressSize={8}\n    trackColor="#eeeeee"\n    trackSize={4}\n>\n    <EmojiIcon x="9" y="9" width="18px" height="18px" />\n</CircularSlider>'))});l.a.render(o.a.createElement(D,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.03498510.chunk.js.map