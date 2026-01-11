// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const newsletter = formData.get('newsletter') === 'on';
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show a success message
            
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = `Thank you ${name}! Your message has been received. `;
            
            if (newsletter) {
                formMessage.textContent += "You have been subscribed to our updates.";
            } else {
                formMessage.textContent += "You have not opted in to receive updates.";
            }
            
            formMessage.className = 'form-message success';
            
            // Reset form
            setTimeout(() => {
                contactForm.reset();
                // Keep the newsletter checkbox checked by default
                document.getElementById('newsletter').checked = true;
            }, 3000);
        });
    }
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
