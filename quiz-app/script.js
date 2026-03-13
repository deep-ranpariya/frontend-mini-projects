// 100+ frontend questions (sample of 20 shown; add until 100+ for full)
const questionBank = [
{question:"What does HTML stand for?",options:["Hyper Text Markup Language","High Text Machine Language","Home Tool Markup Language","Hyperlinks Text Mark Language"],answer:"Hyper Text Markup Language"},
{question:"Which language styles web pages?",options:["HTML","CSS","JavaScript","Python"],answer:"CSS"},
{question:"Which language makes web pages interactive?",options:["HTML","CSS","JavaScript","SQL"],answer:"JavaScript"},
{question:"Which HTML tag inserts JavaScript?",options:["script","js","javascript","code"],answer:"script"},
{question:"Which CSS property changes text color?",options:["font-color","text-color","color","style"],answer:"color"},
{question:"Which CSS property controls text size?",options:["font-style","text-size","font-size","size"],answer:"font-size"},
{question:"Which HTML tag creates a hyperlink?",options:["link","a","href","hyper"],answer:"a"},
{question:"Which symbol is used for ID selector in CSS?",options:[".","#","*","@"],answer:"#"},
{question:"Which symbol selects class in CSS?",options:["#",".","*","@"],answer:"."},
{question:"Which HTML tag creates a paragraph?",options:["p","para","text","pg"],answer:"p"},
{question:"What is the default display value of <div>?",options:["inline","block","flex","none"],answer:"block"},
{question:"Which JavaScript method converts JSON to object?",options:["JSON.parse()","JSON.stringify()","JSON.toObject()","JSON.convert()"],answer:"JSON.parse()"},
{question:"Which method adds an element to an array?",options:["push()","pop()","shift()","concat()"],answer:"push()"},
{question:"Which method removes the last element from an array?",options:["push()","pop()","shift()","unshift()"],answer:"pop()"},
{question:"Which event triggers when input changes?",options:["onclick","onchange","onhover","oninput"],answer:"onchange"},
{question:"Which CSS property controls flex direction?",options:["flex-wrap","flex-flow","flex-direction","justify-content"],answer:"flex-direction"},
{question:"Which unit is relative to the root element in CSS?",options:["px","em","rem","%"],answer:"rem"},
{question:"What is a semantic HTML element?",options:["div","span","header","section"],answer:"header"},
{question:"Which HTML element defines navigation links?",options:["nav","menu","links","section"],answer:"nav"},
{question:"Which method selects element by ID in JS?",options:["document.getElement()","document.querySelector()","document.getElementById()","document.find()"],answer:"document.getElementById()"},
{question:"Which property sets background color in CSS?",options:["background-color","bg-color","color-background","bg"],answer:"background-color"},
{question:"What is the purpose of CSS Grid?",options:["layout","styling text","adding animations","linking HTML"],answer:"layout"},
{question:"Which property centers text horizontally in CSS?",options:["text-align","align-text","center-text","justify"],answer:"text-align"},
{question:"Which method adds event listener in JS?",options:["addEventListener()","attachEvent()","on()","listen()"],answer:"addEventListener()"},
{question:"Which method removes last element of array?",options:["pop()","push()","shift()","unshift()"],answer:"pop()"},
{question:"What is the difference between let and var?",options:["Scope difference","No difference","var is constant","let is function"],answer:"Scope difference"},
{question:"Which tag is used for table row?",options:["tr","td","th","table"],answer:"tr"},
{question:"Which tag is used for table cell?",options:["td","tr","th","table"],answer:"td"},
{question:"Which CSS property sets font family?",options:["font","font-style","font-family","text-font"],answer:"font-family"},
{question:"Which tag defines list item?",options:["li","ul","ol","list"],answer:"li"},
{question:"Which HTML tag defines an unordered list?",options:["ul","ol","li","list"],answer:"ul"},
{question:"Which HTML tag defines an ordered list?",options:["ol","ul","li","list"],answer:"ol"},
{question:"Which JS operator checks type and value?",options:["==","=","!==","==="],answer:"==="},
{question:"Which CSS pseudo-class selects first child?",options:["first",":first-child",":first","first-child"],answer:":first-child"},
{question:"Which HTML attribute defines alternative text for images?",options:["alt","title","src","text"],answer:"alt"},
{question:"Which CSS property adds shadow to text?",options:["text-shadow","shadow","box-shadow","font-shadow"],answer:"text-shadow"},
{question:"Which HTML tag defines a checkbox?",options:["input type='checkbox'","checkbox","input-checkbox","check"],answer:"input type='checkbox'"},
{question:"Which JS keyword declares a constant?",options:["var","const","let","constant"],answer:"const"},
{question:"Which method removes first array element?",options:["shift()","pop()","unshift()","push()"],answer:"shift()"},
{question:"Which property controls element visibility in CSS?",options:["display","visibility","opacity","all"],answer:"visibility"},
{question:"Which property hides overflow content?",options:["overflow:hidden","overflow:auto","overflow:visible","overflow:scroll"],answer:"overflow:hidden"},
{question:"Which HTML element represents main content?",options:["main","section","div","article"],answer:"main"},
{question:"Which method converts object to JSON string?",options:["JSON.stringify()","JSON.parse()","JSON.toJSON()","JSON.convert()"],answer:"JSON.stringify()"},
{question:"Which HTML element defines a label for input?",options:["label","input","form","span"],answer:"label"},
{question:"Which property defines flex wrap behavior?",options:["flex-wrap","flex-direction","flex-flow","wrap"],answer:"flex-wrap"},
{question:"Which HTML attribute sets unique element ID?",options:["id","class","name","value"],answer:"id"},
{question:"Which JS function runs after delay?",options:["setTimeout()","setInterval()","delay()","wait()"],answer:"setTimeout()"},
{question:"Which JS function runs repeatedly?",options:["setInterval()","setTimeout()","repeat()","loop()"],answer:"setInterval()"},
{question:"Which CSS property sets element width?",options:["width","size","element-width","w"],answer:"width"},
{question:"Which CSS property sets element height?",options:["height","h","size","element-height"],answer:"height"},
{question:"Which HTML element displays a tooltip?",options:["title","tooltip","span","div"],answer:"title"},
{question:"Which property sets margin outside element?",options:["margin","padding","border","space"],answer:"margin"},
{question:"Which property sets padding inside element?",options:["padding","margin","border","space"],answer:"padding"},
{question:"Which HTML tag defines a button?",options:["button","input type='button'","btn","input"],answer:"button"},
{question:"Which JS array method joins elements into string?",options:["join()","concat()","split()","toString()"],answer:"join()"},
{question:"Which JS array method splits string into array?",options:["split()","join()","concat()","slice()"],answer:"split()"},
{question:"Which CSS property changes element opacity?",options:["opacity","transparent","alpha","visibility"],answer:"opacity"},
{question:"Which HTML element defines a section?",options:["section","div","span","article"],answer:"section"},
{question:"Which CSS property sets element position?",options:["position","top","left","align"],answer:"position"},
{question:"Which CSS property sets element top offset?",options:["top","margin-top","padding-top","position-top"],answer:"top"},
{question:"Which CSS property sets element left offset?",options:["left","margin-left","padding-left","position-left"],answer:"left"},
{question:"Which HTML element defines an image?",options:["img","image","picture","src"],answer:"img"},
{question:"Which HTML element defines a form?",options:["form","input","div","section"],answer:"form"},
{question:"Which input type accepts email?",options:["email","text","mail","input-email"],answer:"email"},
{question:"Which input type accepts number?",options:["number","text","num","input-number"],answer:"number"},
{question:"Which CSS property sets element background image?",options:["background-image","bg-image","image","background"],answer:"background-image"},
{question:"Which CSS property sets background repeat?",options:["background-repeat","background-repeat-style","repeat","repeat-bg"],answer:"background-repeat"},
{question:"Which CSS property sets background size?",options:["background-size","bg-size","size","background"],answer:"background-size"},
{question:"Which CSS property sets float?",options:["float","position","align","clear"],answer:"float"},
{question:"Which CSS property clears float?",options:["clear","float","overflow","position"],answer:"clear"},
{question:"Which JS keyword creates a variable with block scope?",options:["let","var","const","block"],answer:"let"},
{question:"Which HTML tag defines an article?",options:["article","section","div","main"],answer:"article"},
{question:"Which CSS property sets text decoration?",options:["text-decoration","font-decoration","decoration","text-style"],answer:"text-decoration"},
{question:"Which JS method converts string to integer?",options:["parseInt()","parseFloat()","Number()","toInt()"],answer:"parseInt()"},
{question:"Which JS method converts string to float?",options:["parseFloat()","parseInt()","Number()","toFloat()"],answer:"parseFloat()"},
{question:"Which JS object stores key-value pairs?",options:["Map","Array","Object","Set"],answer:"Map"},
{question:"Which JS object stores unordered unique values?",options:["Set","Map","Array","Object"],answer:"Set"},
{question:"Which CSS property sets box shadow?",options:["box-shadow","text-shadow","shadow","element-shadow"],answer:"box-shadow"},
{question:"Which JS method removes element by ID?",options:["element.remove()","removeElement()","deleteElement()","removeChild()"],answer:"element.remove()"},
{question:"Which JS keyword defines a constant?",options:["const","let","var","constant"],answer:"const"},
{question:"Which HTML tag defines the head section?",options:["head","header","top","meta"],answer:"head"},
{question:"Which HTML tag defines metadata?",options:["meta","link","head","info"],answer:"meta"},
{question:"Which HTML tag links a CSS file?",options:["link","css","style","href"],answer:"link"},
{question:"Which CSS unit is relative to font size?",options:["em","px","rem","%"],answer:"em"},
{question:"Which CSS unit is relative to root font size?",options:["rem","em","px","%"],answer:"rem"},
{question:"Which CSS property sets z-index?",options:["z-index","position","layer","stack"],answer:"z-index"},
{question:"Which CSS property sets display flex?",options:["display:flex","flex","flex-direction","display"],answer:"display:flex"},
{question:"Which JS method selects first element by CSS selector?",options:["querySelector()","getElementById()","getElementsByClassName()","getElementsByTagName()"],answer:"querySelector()"},
{question:"Which JS method selects all elements by CSS selector?",options:["querySelectorAll()","getElementById()","getElementsByClassName()","getElementsByTagName()"],answer:"querySelectorAll()"},
{question:"Which CSS property sets overflow scroll?",options:["overflow:auto","overflow:scroll","overflow:hidden","overflow:visible"],answer:"overflow:auto"},
{question:"Which CSS property sets background attachment?",options:["background-attachment","background","bg-attach","attach"],answer:"background-attachment"},
{question:"Which JS function converts date string to Date object?",options:["new Date()","Date.parse()","Date.convert()","Date.create()"],answer:"new Date()"},
{question:"Which JS array method returns portion of array?",options:["slice()","splice()","split()","part()"],answer:"slice()"},
{question:"Which JS array method removes elements from array?",options:["splice()","slice()","split()","delete()"],answer:"splice()"},
{question:"Which CSS property sets list style type?",options:["list-style-type","list-type","list-style","type"],answer:"list-style-type"},
{question:"Which HTML attribute specifies input placeholder?",options:["placeholder","title","alt","hint"],answer:"placeholder"},
{question:"Which JS method rounds number to nearest integer?",options:["Math.round()","Math.floor()","Math.ceil()","round()"],answer:"Math.round()"},
{question:"Which JS method returns largest number?",options:["Math.max()","Math.min()","Math.ceil()","Math.floor()"],answer:"Math.max()"},
{question:"Which JS method returns smallest number?",options:["Math.min()","Math.max()","Math.floor()","Math.ceil()"],answer:"Math.min()"}
];

// DOM elements
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("startBtn");
const countdownScreen = document.getElementById("countdown-screen");
const countdownText = document.getElementById("countdown-text");
const quizContainer = document.getElementById("quiz-container");
const themeBtn = document.getElementById("themeBtn");
const qEl = document.getElementById("question");
const optEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");
const timerEl = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

// Theme toggle
themeBtn.onclick = () => document.body.classList.toggle("light");

// State
let selectedQuestions = [];
let current = 0;
let score = 0;
let timer;
let timeLeft = 15;

// Start quiz with countdown
startBtn.onclick = () => {
  startScreen.style.display = "none";
  countdownScreen.style.display = "block";
  let count = 3;
  countdownText.innerText = count;
  const countdownInterval = setInterval(()=>{
    count--;
    if(count>0){
      countdownText.innerText = count;
      countdownText.style.animation = "pop 0.5s ease";
    }else{
      clearInterval(countdownInterval);
      countdownScreen.style.display = "none";
      quizContainer.style.display = "block";
      selectedQuestions = shuffle([...questionBank]).slice(0,10);
      loadQuestion();
    }
  },1000);
}

// Shuffle function
function shuffle(arr){for(let i=arr.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];} return arr;}

// Timer
function startTimer(){
  timeLeft=15;
  timerEl.innerText="⏱ "+timeLeft;
  timer=setInterval(()=>{
    timeLeft--;
    timerEl.innerText="⏱ "+timeLeft;
    if(timeLeft<=0){clearInterval(timer); nextQuestion();}
  },1000);
}

// Load question
function loadQuestion(){
  clearInterval(timer);
  const q = selectedQuestions[current];
  qEl.innerText = q.question;
  optEl.innerHTML = "";
  let options = shuffle([...q.options]);
  options.forEach(opt=>{
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.onclick = ()=>checkAnswer(div,opt,q.answer);
    optEl.appendChild(div);
  });
  updateProgress();
  startTimer();
}

// Check answer
function checkAnswer(el, selected, correct){
  clearInterval(timer);
  const options = document.querySelectorAll(".option");
  options.forEach(o=>o.onclick=null);
  if(selected===correct){el.classList.add("correct"); score++;}
  else{el.classList.add("wrong"); options.forEach(o=>{if(o.innerText===correct)o.classList.add("correct");});}
  scoreEl.innerText="Score: "+score;
}

// Next
nextBtn.onclick = nextQuestion;
function nextQuestion(){
  current++;
  if(current<selectedQuestions.length) loadQuestion();
  else showResult();
}

// Progress
function updateProgress(){
  progressBar.style.width = (current/selectedQuestions.length)*100 + "%";
}

// Result
function showResult(){
  clearInterval(timer);
  qEl.style.display="none";
  optEl.style.display="none";
  nextBtn.style.display="none";
  timerEl.style.display="none";
  resultEl.style.display="block";
  let highScore = localStorage.getItem("highScore")||0;
  if(score>highScore) localStorage.setItem("highScore",score), highScore=score;
  resultEl.innerHTML=`🎉 Score: ${score}/10 <br> 🏆 High Score: ${highScore}`;
  restartBtn.style.display="inline-block";
  confetti();
}

// Restart
restartBtn.onclick = ()=> location.reload();

// Confetti
function confetti(){
  for(let i=0;i<100;i++){
    const div=document.createElement("div");
    div.className="confetti";
    div.style.left=Math.random()*100+"vw";
    div.style.background=`hsl(${Math.random()*360},100%,50%)`;
    div.style.animationDuration=(Math.random()*2+2)+"s";
    document.body.appendChild(div);
    setTimeout(()=>div.remove(),3000);
  }
}