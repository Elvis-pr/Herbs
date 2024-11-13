// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Form Submission Handler
const newsletterForm = document.querySelector('.newsletter');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('.newsletter input[type="email"]').value;
    if (email) {
        alert(`Thank you for subscribing, ${email}!`);
        document.querySelector('.newsletter input[type="email"]').value = ''; // Clear input
    } else {
        alert('Please enter a valid email address.');
    }
});

// Toggle Category Descriptions
const categories = document.querySelectorAll('.category-item');
categories.forEach(category => {
    category.addEventListener('click', () => {
        const description = category.querySelector('p');
        description.classList.toggle('hidden'); // Add 'hidden' class to hide/show description
    });
});

// Optional: Fade-in Animation for Elements on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});
