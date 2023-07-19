const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const resume_link = `./doc/Vikram_Resume.pdf`;

const line1AnimationDuration = 1000; // Animation duration for line1 in milliseconds

line1.style.animationDelay = '0ms';

// Set animation-delay for line2 based on line1 animation duration
line2.style.animationDelay = `${line1AnimationDuration}ms`;

// Start line2 animation after line1 animation completes
setTimeout(() => {
  line2.style.animation = 'typing 3s steps(30), blink-caret 0.5s step-end infinite';
  line2.style.display = 'inline-block';
}, line1AnimationDuration);

// Resume Button opening on new tab function

document.getElementById("resumeButton1").addEventListener("click", ()=>{
  window.open(resume_link);
})

document.getElementById("resumeButton2").addEventListener("click", ()=>{
  window.open(resume_link);
})
