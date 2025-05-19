// Button click
document.getElementById('magicBtn').addEventListener('click', () => {
  alert('Button clicked!');
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// Hover effect
const hoverText = document.getElementById('hoverMe');
hoverText.addEventListener('mouseover', () => hoverText.style.color = 'red');
hoverText.addEventListener('mouseout', () => hoverText.style.color = 'black');

// Keypress detection
document.getElementById('keyInput').addEventListener('keypress', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Secret double-click action
hoverText.addEventListener('dblclick', () => {
  alert('Secret unlocked!');
});

// Image gallery
const images = [
  "https://via.placeholder.com/300?text=Image+1",
  "https://via.placeholder.com/300?text=Image+2",
  "https://via.placeholder.com/300?text=Image+3"
];
let current = 0;
document.getElementById('nextImage').addEventListener('click', () => {
  current = (current + 1) % images.length;
  document.getElementById('galleryImage').src = images[current];
});

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    document.getElementById(tab).style.display = 'block';
  });
});

// Form validation
document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const feedback = document.getElementById('formFeedback');

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  const passwordValid = password.value.length >= 8;

  if (!emailValid) {
    feedback.textContent = 'Invalid email format.';
    feedback.style.color = 'red';
  } else if (!passwordValid) {
    feedback.textContent = 'Password must be at least 8 characters.';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Form is valid!';
    feedback.style.color = 'green';
  }
});

// Real-time password feedback
document.getElementById('password').addEventListener('input', () => {
  const password = document.getElementById('password').value;
  const feedback = document.getElementById('formFeedback');
  if (password.length < 8) {
    feedback.textContent = 'Password too short.';
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = 'Looking good!';
    feedback.style.color = 'green';
  }
});
