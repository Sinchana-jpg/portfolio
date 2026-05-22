// --- DARK / LIGHT THEME TOGGLE MECHANISM ---
const btn = document.getElementById('themeBtn');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  btn.textContent = '☀️ Light';
}

btn.onclick = () => {
  document.body.classList.toggle('dark');
  let dark = document.body.classList.contains('dark');
  btn.textContent = dark ? '☀️ Light' : '🌙 Dark';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
};

// --- RANDOM COLOR TAG INTERACTION LOGIC ---
const colors = [
  'var(--blue)',
  'var(--red)',
  'var(--yellow)',
  'var(--green)'
];

document.querySelectorAll('.tag').forEach(tag => {
  tag.onclick = () => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    tag.style.borderColor = color;
    tag.style.color = color;
  };
});

// --- SCROLL-DRIVEN ENTRANCE ANIMATIONS (INTERSECTION OBSERVER) ---
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(25px)';
  card.style.transition = 'all .6s ease';
  observer.observe(card);
});

// --- SUBMIT HANDLING LOGIC FOR CONTACT FORM ---
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log("Form Message Submitted:", { name, email, message });
  alert(`Thank you, ${name}! Your message payload has been processed successfully.`);
  
  this.reset();
});
