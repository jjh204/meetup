(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{198:function(e,t,n){},199:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),o=n.n(r),i=n(52),s=n.n(i),c=(n(198),n(21)),l=n(28),u=n(23),d=n(22),h=(n(199),n(166)),m=n.n(h),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={details:!1},e.handleDetails=function(){!1===e.state.details?e.setState({details:!0}):e.setState({details:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.details,n=this.props.event,r=n.summary,o=n.location,i=n.htmlLink,s=n.description,c=n.start,l=m()(c.dateTime).format("DD-MMMM-YYYY, h:mm a");return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsxs)("div",{className:"eventOverview",children:[Object(a.jsx)("h2",{className:"summary",children:r}),Object(a.jsxs)("p",{className:"startDate",children:[l," (Central European Time)"]}),Object(a.jsxs)("p",{className:"location",children:["Location: ",o]}),!t&&Object(a.jsx)("button",{className:"showDetails-btn",onClick:function(){return e.handleDetails()},children:"Show Details"}),t&&Object(a.jsx)("button",{className:"hideDetails-btn",onClick:function(){return e.handleDetails()},children:"Hide Details"})]}),t&&Object(a.jsxs)("div",{className:"eventDetails",children:[Object(a.jsx)("h2",{className:"about",children:"Event Details:"}),Object(a.jsx)("p",{className:"link",children:Object(a.jsx)("a",{href:i,target:"blank",children:"See Google Calendar Invite"})}),Object(a.jsx)("p",{className:"description",children:s})]})]})}}]),n}(r.Component),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(a.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(p,{event:e})},e.id)}))})}}]),n}(r.Component),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="#253451",a}return n}(b),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="#c62d47",a}return n}(b),g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"all",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We are unable to find the city you are looking for. Please try another City.",showSuggestions:!1})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""});var n=e.props.number;e.props.updateEvents(t,n)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)("label",{children:"Choose your City: "}),Object(a.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(a.jsx)(v,{className:"infoText",text:this.state.infoText}),Object(a.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(r.Component),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={number:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({number:n});var a=e.props.currentLocation;e.props.updateEvents(a,n),n<1?e.setState({errorText:"please select a number"}):e.setState({errorText:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"numberEvents",children:[Object(a.jsx)("label",{children:"Number of Events: "}),Object(a.jsx)("input",{type:"number",className:"numberInput",value:this.state.number,onChange:this.handleInputChanged}),Object(a.jsx)(j,{className:"errorText",text:this.state.errorText})]})}}]),n}(r.Component),y=n(27),k=n(355),x=n(356),O=n(176),T=n(90),S=function(e){var t=e.events,n=Object(r.useState)([]),o=Object(y.a)(n,2),i=o[0],s=o[1];Object(r.useEffect)((function(){s((function(){return c()}))}),[t]);var c=function(){return["React","JavaScript","Node.js","jQuery","AngularJS","Angular"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))},l=["#1b253a","#413675","#366b75","#6d625f","#83e3d2","#364b75"];return Object(a.jsx)(k.a,{height:400,children:Object(a.jsx)(x.a,{width:400,height:400,children:Object(a.jsx)(O.a,{data:i,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#1b253a",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:i.map((function(e,t){return Object(a.jsx)(T.a,{fill:l[t%l.length],name:e.name},"cell-".concat(t))}))})})})},Z=n(31),C=n.n(Z),M=n(74),D=n(185),E=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2021-09-19T19:14:30.000Z",updated:"2021-09-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T130000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"React is Fun",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T110000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T160000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}}],N=n(118),J=n.n(N),A=n(96),W=n.n(A),I=function(e){var t=e.map((function(e){return e.location}));return Object(D.a)(new Set(t))},L=function(){var e=Object(M.a)(C.a.mark((function e(){var t,n,a,r,o,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,B(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,J.a.get("https://jgxpnvojk6.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&U(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(M.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(M.a)(C.a.mark((function e(){var t,n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return W.a.done(),e.abrupt("return",E);case 4:return e.next=6,L();case 6:if(!(t=e.sent)){e.next=16;break}return H(),n="https://jgxpnvojk6.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=12,J.a.get(n);case 12:return(a=e.sent).data&&(r=I(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),W.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},U=function(){var e=Object(M.a)(C.a.mark((function e(t){var n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://jgxpnvojk6.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=(n(347),n.p+"static/media/background.fe337d38.jpg"),Y=n(352),z=n(353),G=n(181),V=n(182),F=n(97),_=n(186),X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],number:32,currentLocation:"all"},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e.updateEvents=function(t,n){R().then((function(a){var r="all"===t?a.slice(0,n):a.filter((function(e){return e.location===t})).slice(0,n);e.setState({events:r,currentLocation:t,number:n})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,R().then((function(t){e.mounted&&e.setState({events:t,locations:I(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.number,r=e.events,o=e.currentLocation;return Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(q,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"1200px"},children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"MEET AND SOCIAL"}),Object(a.jsx)("h3",{children:"Events for the Social Coder"}),Object(a.jsx)(g,{locations:t,number:n,updateEvents:this.updateEvents}),Object(a.jsx)(w,{currentLocation:o,number:n,updateEvents:this.updateEvents}),Object(a.jsx)("h3",{className:"dataTitle",children:"Data display of Events per Genre and City:"}),Object(a.jsxs)("div",{className:"data-vis-wrapper",children:[Object(a.jsx)(S,{events:r}),Object(a.jsx)(k.a,{height:400,children:Object(a.jsxs)(Y.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(a.jsx)(z.a,{}),Object(a.jsx)(G.a,{type:"category",dataKey:"city",name:"City"}),Object(a.jsx)(V.a,{type:"number",dataKey:"number",name:"Number of Events",allowDecimals:!1}),Object(a.jsx)(F.a,{cursor:{strokeDasharray:"3 3"}}),Object(a.jsx)(_.a,{data:this.getData(),fill:"#1b253a"})]})})]}),Object(a.jsx)(f,{events:r})]})})}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=n(183);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(X,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),K.config("4102073e1fc743c0b6e44fa01af809f9").install()}},[[348,1,2]]]);
//# sourceMappingURL=main.bb3bb267.chunk.js.map