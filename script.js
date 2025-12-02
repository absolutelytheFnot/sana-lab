// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const collaborateForm = document.getElementById('collaborateForm');
if (collaborateForm) {
    collaborateForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            organization: document.getElementById('organization').value,
            building: document.getElementById('building').value,
            help: document.getElementById('help').value,
            contact: document.getElementById('contact').value
        };

        // For now, just log the data and show a success message
        console.log('Form submitted:', formData);

        // You can integrate with a backend or email service here
        // For example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

        alert('Thank you for reaching out! We\'ll be in touch soon.');
        collaborateForm.reset();
    });
}

// CTA buttons functionality (optional: scroll to form or pre-fill form type)
const ctaButtons = document.querySelectorAll('.cta-buttons .cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        const formType = this.getAttribute('data-form');

        // Scroll to form
        const formContainer = document.querySelector('.contact-form-container');
        if (formContainer) {
            formContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Optional: You could pre-fill the "How Sana Growth Can Help" field based on button clicked
        const helpField = document.getElementById('help');
        if (helpField && formType) {
            const helpTexts = {
                'partnerships': 'I\'m interested in exploring strategic partnerships...',
                'advisory': 'I\'d like to discuss advisory services or speaking engagements...',
                'prototype': 'I have an idea I\'d like to prototype with your team...'
            };
            helpField.value = helpTexts[formType] || '';
            helpField.focus();
        }
    });
});

// Add intersection observer for fade-in animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that should fade in (optional: add 'fade-in' class to elements you want to animate)
document.querySelectorAll('.work-item, .journal-item, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});
