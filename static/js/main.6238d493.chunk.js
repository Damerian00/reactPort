(this.webpackJsonpreactport=this.webpackJsonpreactport||[]).push([[0],{10:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),r=s(4),n=s.n(r),c=s(0);var o=function(){return Object(c.jsx)("nav",{className:"head",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#aboutMe",children:"About Me"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#work",children:"Work"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#contactMe",children:"Contact Me"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://my.indeed.com/p/patrickp-6d75hwd",target:"_blank",children:"Resume"})})]})})};var l=function(){return Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"off-right",children:[Object(c.jsxs)("div",{className:"brand",children:[Object(c.jsx)("h1",{children:"Patrick Price"}),Object(c.jsx)("p",{children:"Web Coder"})]}),Object(c.jsx)(o,{})]})})},d=s(2);var h=function(){return Object(c.jsx)("section",{id:"aboutMe",children:Object(c.jsxs)("section",{children:[Object(c.jsx)("img",{src:"assets/images/headshot.jpeg",className:"profilePic",alt:"profile pic"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"About Me"}),Object(c.jsx)("p",{children:" My name is Patrick, I have been exploring the world of coding since High School when I first started writing programs for my graphing calculator. Since then I have learned a few languages such as: HTML5, JavaScript, CSS, and some Java. Currently all the sites on this page are mock sites that were made as an assignment for a coding class environment or something I created to learn and test my skills out."}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"The featured site that I\u2019m most proud of is the one that is a mockup of The Miro apartment complex site. Which was created to mirror the site at the time I created it. It includes stock images and my own custom CSS and coding. The Battle Masters html is a game that I wrote in JavaScript that uses very minimal HTML. Writing the code for this site was challenging, but it also was rewarding at the same time since it helped me to understand and learn JavaScript. The other sites are ones that I created for classroom assignments."})]})]})})};var j=function(){var e=Object(a.useState)("assets/images/miro_ss.png"),t=Object(d.a)(e,2),s=t[0];return t[1],Object(c.jsx)("section",{className:"featured",children:Object(c.jsx)("img",{className:"starred",src:s,alt:"Featured"})})};var m=function(e){var t=e.imageData,s=e.i,a=e.n,i=t.length>3?t.slice(s,a):t;return Object(c.jsx)(c.Fragment,{children:i.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("section",{"data-pos":e.id,children:[Object(c.jsx)("img",{className:"picPos",src:e.imgSrc,alt:e.name,onClick:function(e){j(e)}}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("p",{children:e.descr}),Object(c.jsxs)("div",{className:"links",children:[Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:e.repoLink,target:"_blank",title:"View Repo",children:"\ud83d\udcc2"})}),Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:e.demoLink,target:"_blank",title:"View Demo",children:"\ud83d\udd0d"})})]})]})]})},"".concat(e.id,"abc"))}))})},b=[{id:0,name:"Miro Website",descr:"Mock Apartment WebSite that uses the Bootstrap Framework and features a responsive design with some custom javascript and css as well.",imgSrc:"assets/images/miro_ss.png",repoLink:"https://github.com/Damerian00/miroMocksite",demoLink:"https://damerian00.github.io/miroMocksite"},{id:1,name:"X-men Trivia Quiz",descr:"A Responsive Website that uses javascipt and moment.js to ask trivia questions then saves the user's score to local storage. This site also features a responsive deisgn.",imgSrc:"assets/images/quizsite_ss.png",repoLink:"https://github.com/Damerian00/QuizBowl",demoLink:"https://damerian00.github.io/QuizBowl/"},{id:2,name:"Work Scheduler",descr:"This project uses moment.js to retireve the current time and event listeners to store input into local storage to display when the page loads.",imgSrc:"assets/images/worksite_ss.png",repoLink:"https://github.com/Damerian00/workScheduler",demoLink:"https://damerian00.github.io/workScheduler/"},{id:3,name:"Password Generator",descr:"This project is a password generator that allows a user to create a random password based off certain criteria they enter. This one doesn't use alerts to make prompts instead it is all done with form elements.",imgSrc:"assets/images/passsite_ss.jpg",repoLink:"https://github.com/Damerian00/passwordGen",demoLink:"https://damerian00.github.io/passwordGen/"},{id:4,name:"Battle Masters Game",descr:"This is a game that is written entirely in javascript with very minimal use of HTML and CSS. I created it as something to expand upon as well as to teach myself JavaScript.",imgSrc:"assets/images/bm_ss.JPG",repoLink:"https://github.com/Damerian00/BattleMasters",demoLink:"https://damerian00.github.io/BattleMasters/"},{id:5,name:"Employee Generator",descr:"This project's goal was to create a a JavaScript file that can be run using node to create an employee rooster for a company in an html format based on users responses to questions that are asked in the index.js file. It utilizes inquirer to ask the questions and jest to utilize testing of the javascript test files.",imgSrc:"assets/images/roosterImg.JPG",repoLink:"https://github.com/Damerian00/workScheduler",demoLink:"https://damerian00.github.io/workScheduler/"},{id:6,name:"Employee Tracker",descr:"My work on this project was done on the back-end by using mySQl to make my requests to perform CDRUD opperations that would update a database of tables It uses node.js, mysql2, express, and inquirer to complete this task.",imgSrc:"assets/images/quizsite_ss.png",repoLink:"https://github.com/Damerian00/EmployeeTrackerApp",demoLink:"https://www.youtube.com/watch?v=_3eFkm6OM80"}];var p=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),s=t[0],i=t[1],r=[Object(c.jsx)(m,{imageData:b,i:0,n:3}),Object(c.jsx)(m,{imageData:b,i:3,n:6}),Object(c.jsx)(m,{imageData:b,i:6,n:9})],n=r.length;return Object(c.jsxs)("nav",{className:"sites",children:[Object(c.jsx)("h2",{children:"Samples of my Work"}),Object(c.jsx)("span",{className:"prevSlide",onClick:function(){i(0===s?n-1:s-1)},children:"\u2190"}),Object(c.jsx)("span",{className:"nextSlide",onClick:function(){i(s===n-1?0:s+1)},children:"\u2192"}),Object(c.jsx)("section",{className:"slideWrapper",children:Object(c.jsx)("ul",{className:"slideHolder",children:r.map((function(e,t){return Object(c.jsx)("li",{className:t===s?"slide active":"slide",children:Object(c.jsx)("ul",{children:Object(c.jsx)(m,{imageData:b,i:3*t,n:3*t+3})})},t)}))})})]})};var u=function(){return Object(c.jsx)("aside",{id:"work",children:Object(c.jsx)(p,{})})};var g=function(){var e=Object(a.useState)({}),t=Object(d.a)(e,2);return t[0],t[1],Object(c.jsxs)("main",{children:[Object(c.jsx)(h,{}),Object(c.jsx)(j,{}),Object(c.jsx)(u,{})]})};var O=function(){return Object(c.jsxs)("footer",{id:"contactMe",children:[Object(c.jsx)("section",{children:Object(c.jsx)("h2",{children:"Contact Me"})}),Object(c.jsx)("section",{children:Object(c.jsx)("nav",{className:"foot",children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"icon",children:"\ud83d\ude80"}),Object(c.jsx)("a",{href:"https://github.com/Damerian00",target:"_blank",children:"GitHub"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"icon",children:"\ud83d\udd17"}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/patrick-price-35600135/",target:"_blank",children:"LinkedIn"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"icon",children:"\ud83d\udcc3"}),Object(c.jsx)("a",{href:"https://my.indeed.com/p/patrickp-6d75hwd",target:"_blank",children:"Resume"})]})]})})})]})};var x=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),Object(c.jsx)(g,{}),Object(c.jsx)(O,{})]})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,11)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),a(e),i(e),r(e),n(e)}))};n.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),k()}},[[10,1,2]]]);
//# sourceMappingURL=main.6238d493.chunk.js.map