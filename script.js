// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 14, 35, 0.9)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.05)';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation for skill cards on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});

// Add projects to the scroll observer
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.8s ease-out";
    observer.observe(card);
});

// Contact Form Submission Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message, Deofrank will get back to you soon!');
        contactForm.reset();
    });
}

// Fade-in animation for contact card
document.querySelectorAll('.contact-glass-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 1s ease-out";
    observer.observe(card);
});

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', () => {
    const copyright = document.querySelector('.footer__copy');
    const currentYear = new Date().getFullYear();
    // Ensuring it matches the 2026 in the screenshot or current date
    copyright.innerHTML = `&#169; ${currentYear} Deofrank Ygaña. All Rights Reserved.`;
});

// Smooth scroll for footer links
const footerLinks = document.querySelectorAll('.footer__link');

footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});