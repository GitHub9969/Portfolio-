// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Theme Toggle (Light/Dark Mode)
const themeSwitch = document.querySelector('.switch input');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme', themeSwitch.checked);
});

// Typing Animation
const typingText = "Information Science and Engineering Student";
let typingIndex = 0;
const typingElement = document.querySelector('#home p');
function typeWriter() {
    if (typingIndex < typingText.length) {
        typingElement.textContent += typingText.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeWriter, 100); // Adjust typing speed
    }
}
document.addEventListener('DOMContentLoaded', typeWriter);

// Form Validation
document.querySelector('#contact form').addEventListener('submit', (e) => {
    const name = document.querySelector('[name="name"]').value.trim();
    const email = document.querySelector('[name="email"]').value.trim();
    const message = document.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required!');
        e.preventDefault();
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});

// Project Modal View
document.querySelectorAll('.project .btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const modalContent = `Details about Project ${index + 1}`;
        alert(modalContent); // Replace this with modal functionality as needed
    });
});
