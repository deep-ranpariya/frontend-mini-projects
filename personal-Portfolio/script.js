// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", ()=>{
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// TYPING EFFECT
const words=["Frontend Developer","UI Designer","JavaScript Enthusiast"];
let i=0,j=0,currentWord="",isDeleting=false;
function type(){
  currentWord=words[i];
  if(isDeleting){ j--; } else { j++; }
  document.getElementById("typing").textContent=currentWord.substring(0,j);
  if(!isDeleting && j===currentWord.length){ isDeleting=true; setTimeout(type,1000); return;}
  if(isDeleting && j===0){ isDeleting=false; i=(i+1)%words.length; }
  setTimeout(type,120);
}
type();

// HOVER CARDS
document.querySelectorAll(".service-card, .project-card").forEach(card=>{
  card.addEventListener("mouseenter", ()=>card.style.transform="translateY(-10px)");
  card.addEventListener("mouseleave", ()=>card.style.transform="translateY(0)");
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});