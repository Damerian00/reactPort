(this.webpackJsonpreactport=this.webpackJsonpreactport||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(17),i=s.n(r),c=s(0);var o=function(){return Object(c.jsx)("nav",{className:"head",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#aboutMe",children:"About Me"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#work",children:"Work"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#contactMe",children:"Contact Me"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://my.indeed.com/p/patrickp-6d75hwd",target:"_blank",children:"Resume"})})]})})},l=s(8),m=s(2);var d=function(){return Object(c.jsx)(l.a,{children:Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"off-right",children:[Object(c.jsxs)("div",{className:"brand",children:[Object(c.jsx)("h1",{children:"Patrick Price"}),Object(c.jsx)("p",{children:"Web Developer"})]}),Object(c.jsx)(m.c,{children:Object(c.jsx)(m.a,{exact:!0,path:"/reactPort",component:o})})]})})})},j=s(7);var h=function(){return Object(c.jsx)("section",{id:"aboutMe",children:Object(c.jsxs)("section",{children:[Object(c.jsx)("img",{src:"/reactPort/assets/images/headshot.jpeg",className:"profilePic",alt:"profile pic"}),Object(c.jsx)(l.b,{to:"/contactMe",children:Object(c.jsx)("button",{className:"btnContact",children:"Message Me"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"About Me"}),Object(c.jsx)("p",{children:" My name is Patrick, I have been exploring the world of coding since High School when I first started writing programs for my graphing calculator. Since then I have learned a few languages such as: HTML5, JavaScript, CSS, and some Java. Currently all the sites on this page are mock sites that were made as an assignment for a coding class environment or something I created to learn and test my skills out."}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"The featured site that I\u2019m most proud of is the one that is a mockup of The Miro apartment complex site. Which was created to mirror the site at the time I created it. It includes stock images and my own custom CSS and coding. The Battle Masters html is a game that I wrote in JavaScript that uses very minimal HTML. Writing the code for this site was challenging, but it also was rewarding at the same time since it helped me to understand and learn JavaScript. The other sites are ones that I created for classroom assignments."})]})]})})};var b=function(e){var t=e.featuredSrc;return Object(c.jsx)("section",{className:"featured",children:Object(c.jsx)("img",{className:"starred",src:t,alt:"Featured"})})};var u=function(e){var t=e.imageData,s=e.i,a=e.n,n=e.setFeaturedSrc,r=t.length>3?t.slice(s,a):t;return Object(c.jsx)(c.Fragment,{children:r.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("section",{"data-pos":e.id,children:[Object(c.jsx)("img",{className:"picPos",src:"/reactPort/"+e.imgSrc,alt:e.name,onClick:function(t){n("/reactPort/"+e.imgSrc)}}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("p",{children:e.descr}),Object(c.jsxs)("div",{className:"links",children:[Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:e.repoLink,target:"_blank",title:"View Repo",children:"\ud83d\udcc2"})}),Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:e.demoLink,target:"_blank",title:"View Demo",children:"\ud83d\udd0d"})})]})]})]})},"".concat(e.id,"abc"))}))})},p=[{id:0,name:"Miro Website",descr:"Mock Apartment WebSite that uses the Bootstrap Framework and features a responsive design with some custom javascript and css as well.",imgSrc:"assets/images/miro_ss.png",repoLink:"https://github.com/Damerian00/miroMocksite",demoLink:"https://damerian00.github.io/miroMocksite"},{id:1,name:"X-men Trivia Quiz",descr:"A Responsive Website that uses javascipt and moment.js to ask trivia questions then saves the user's score to local storage. This site also features a responsive deisgn.",imgSrc:"assets/images/quizsite_ss.png",repoLink:"https://github.com/Damerian00/QuizBowl",demoLink:"https://damerian00.github.io/QuizBowl/"},{id:2,name:"Work Scheduler",descr:"This project uses moment.js to retireve the current time and event listeners to store input into local storage to display when the page loads.",imgSrc:"assets/images/worksite_ss.png",repoLink:"https://github.com/Damerian00/workScheduler",demoLink:"https://damerian00.github.io/workScheduler/"},{id:3,name:"Password Generator",descr:"This project is a password generator that allows a user to create a random password based off certain criteria they enter. This one doesn't use alerts to make prompts instead it is all done with form elements.",imgSrc:"assets/images/passsite_ss.jpg",repoLink:"https://github.com/Damerian00/passwordGen",demoLink:"https://damerian00.github.io/passwordGen/"},{id:4,name:"Battle Masters Game",descr:"This is a game that is written entirely in javascript with very minimal use of HTML and CSS. I created it as something to expand upon as well as to teach myself JavaScript.",imgSrc:"assets/images/bm_ss.JPG",repoLink:"https://github.com/Damerian00/BattleMasters",demoLink:"https://damerian00.github.io/BattleMasters/"},{id:5,name:"Employee Generator",descr:"This project's goal was to create a a JavaScript file that can be run using node to create an employee rooster for a company in an html format based on users responses to questions that are asked in the index.js file. It utilizes inquirer to ask the questions and jest to utilize testing of the javascript test files.",imgSrc:"assets/images/roosterImg.JPG",repoLink:"https://github.com/Damerian00/workScheduler",demoLink:"https://damerian00.github.io/workScheduler/"},{id:6,name:"Employee Tracker",descr:"My work on this project was done on the back-end by using mySQl to make my requests to perform CDRUD opperations that would update a database of tables It uses node.js, mysql2, express, and inquirer to complete this task.",imgSrc:"assets/images/quizsite_ss.png",repoLink:"https://github.com/Damerian00/EmployeeTrackerApp",demoLink:"https://www.youtube.com/watch?v=_3eFkm6OM80"}];var g=function(e){var t=e.setFeaturedSrc,s=Object(a.useState)(0),n=Object(j.a)(s,2),r=n[0],i=n[1],o=[Object(c.jsx)(u,{imageData:p,i:0,n:3}),Object(c.jsx)(u,{imageData:p,i:3,n:6}),Object(c.jsx)(u,{imageData:p,i:6,n:9})],l=o.length;return Object(c.jsxs)("nav",{className:"sites",children:[Object(c.jsx)("h2",{children:"Samples of my Work"}),Object(c.jsx)("span",{className:"prevSlide",onClick:function(){i(0===r?l-1:r-1)},children:"\u2190"}),Object(c.jsx)("span",{className:"nextSlide",onClick:function(){i(r===l-1?0:r+1)},children:"\u2192"}),Object(c.jsx)("section",{className:"slideWrapper",children:Object(c.jsx)("ul",{className:"slideHolder",children:o.map((function(e,s){return Object(c.jsx)("li",{className:s===r?"slide active":"slide",children:Object(c.jsx)("ul",{children:Object(c.jsx)(u,{imageData:p,i:3*s,n:3*s+3,setFeaturedSrc:t})})},s)}))})})]})};var O=function(e){var t=e.setFeaturedSrc;return Object(c.jsx)("aside",{id:"work",children:Object(c.jsx)(g,{setFeaturedSrc:t})})};var x=function(){var e=Object(a.useState)("".concat("/reactPort","/assets/images/miro_ss.png")),t=Object(j.a)(e,2),s=t[0],n=t[1];return Object(c.jsxs)("main",{children:[Object(c.jsx)(h,{}),Object(c.jsx)(b,{featuredSrc:s}),Object(c.jsx)(O,{setFeaturedSrc:n})]})},f=s(11),v=s(15),k=function(e,t){var s=Object(a.useState)({name:"",email:"",message:""}),n=Object(j.a)(s,2),r=n[0],i=n[1],c=Object(a.useState)({}),o=Object(j.a)(c,2),l=o[0],m=o[1],d=Object(a.useState)(!1),h=Object(j.a)(d,2),b=h[0],u=h[1];return Object(a.useEffect)((function(){0===Object.keys(l).length&&b&&console.log(r)}),[l]),{handleChange:function(e){var t=e.target,s=t.name,a=t.value;i(Object(v.a)(Object(v.a)({},r),{},Object(f.a)({},s,a)))},handleSubmit:function(e){e.preventDefault(),m(t(r)),u(!0)},values:r,errors:l}};function w(e){var t={};return e.name.trim()||(t.name="Name Required"),e.name.trim()&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e.email)||(t.email="Email address is invalid"),e.message?e.message.length<6&&(t.message="Please add more text to your message."):t.message="Message is required",t}var S=function(e){var t=k(e,w),s=t.handleChange,a=t.values,n=t.handleSubmit,r=t.errors;return Object(c.jsxs)("form",{className:"form",onSubmit:n,children:[Object(c.jsx)("h1",{children:"Please fill out the form below to get in contact with me."}),Object(c.jsxs)("div",{className:"form-inputs",children:[Object(c.jsx)("label",{htmlFor:"name",className:"form-label",children:" Name: "}),Object(c.jsx)("input",{id:"contactName",type:"text",name:"name",className:"form-input",placeholder:"Enter your name here",value:a.name,onChange:s}),Object(c.jsx)("label",{htmlFor:"email",className:"form-label",children:" Email: "}),Object(c.jsx)("input",{id:"contactEmail",type:"text",name:"email",className:"form-input",value:a.email,onChange:s}),Object(c.jsx)("label",{htmlFor:"message",className:"form-label",children:" Your message: "}),Object(c.jsx)("textarea",{id:"contactMessage",name:"message",className:"form-control",rows:"5",value:a.message,onChange:s})]}),Object(c.jsx)("button",{className:"btn-Submit",type:"submit",children:"Contact Me"}),r.name&&Object(c.jsx)("p",{children:r.name}),r.email&&Object(c.jsx)("p",{children:r.email}),r.message&&Object(c.jsx)("p",{children:r.message})]})},N=document.getElementsByClassName("btn-Submit");var y=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),s=(t[0],t[1]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(S,{submitForm:function(){console.log(N.value),s(!0)}}),Object(c.jsx)(l.b,{to:"/reactPort",children:Object(c.jsx)("button",{className:"btnHome",children:"Home"})})]})};var M=function(){return Object(c.jsxs)("footer",{id:"contactMe",children:[Object(c.jsx)("section",{children:Object(c.jsx)("h2",{children:"Contact Me"})}),Object(c.jsx)("section",{children:Object(c.jsx)("nav",{className:"foot",children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"icon",children:"\ud83d\ude80"}),Object(c.jsx)("a",{href:"https://github.com/Damerian00",target:"_blank",rel:"noopener",children:"GitHub"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"icon",children:"\ud83d\udd17"}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/patrick-price-35600135/",target:"_blank",rel:"noopener",children:"LinkedIn"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"icon",children:"\ud83d\udcc3"}),Object(c.jsx)("a",{href:"https://my.indeed.com/p/patrickp-6d75hwd",target:"_blank",rel:"noopener",children:"Resume"})]})]})})})]})};var L=function(){return Object(c.jsx)(l.a,{children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d,{}),Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{exact:!0,path:"/reactPort",component:x}),Object(c.jsx)(m.a,{exact:!0,path:"/contactMe",component:y})]}),Object(c.jsx)(M,{})]})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,33)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),r(e),i(e)}))};s(30),s(31);i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),C()}},[[32,1,2]]]);
//# sourceMappingURL=main.7fca4aa4.chunk.js.map