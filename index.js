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

// My Github Calendar
const username = 'your-github-username';
const token = 'your-personal-access-token';

// Fetch your GitHub contributions data using GraphQL
const query = `
  query {
    user(login: "${username}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query }),
})
  .then(response => response.json())
  .then(data => {
    const contributions = data.data.user.contributionsCollection.contributionCalendar;

    // Create a new calendar element
    const calendar = document.createElement('div');
    calendar.id = 'github-calendar';
    calendar.classList.add('github-calendar');

    // Generate the calendar HTML using the contributions data
    let calendarHTML = '';
    contributions.weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        calendarHTML += `<div data-count="${day.contributionCount}" data-date="${day.date}"></div>`;
      });
    });
    calendar.innerHTML = calendarHTML;

    // Append the calendar to the container element
    const container = document.getElementById('github-calendar');
    container.appendChild(calendar);
  });
