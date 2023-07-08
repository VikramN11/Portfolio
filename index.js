const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');

const line1AnimationDuration = 1000; // Animation duration for line1 in milliseconds

line1.style.animationDelay = '0ms';

// Set animation-delay for line2 based on line1 animation duration
line2.style.animationDelay = `${line1AnimationDuration}ms`;

// Start line2 animation after line1 animation completes
setTimeout(() => {
  line2.style.animation = 'typing 3s steps(30), blink-caret 0.5s step-end infinite';
  line2.style.display = 'inline-block';
}, line1AnimationDuration);
