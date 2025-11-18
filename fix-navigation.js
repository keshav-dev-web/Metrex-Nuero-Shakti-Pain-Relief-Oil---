// Fix navigation and scrolling issues

// Ensure all functions are available globally
window.addEventListener('DOMContentLoaded', function() {
    // Scroll to contact function
    window.scrollToContact = function() {
        const contactSection = document.querySelector('#contactForm').closest('.px-4');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Highlight contact form with animation
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.classList.add('ring-4', 'ring-green-400', 'ring-opacity-75');
                
                setTimeout(() => {
                    contactForm.classList.remove('ring-4', 'ring-green-400', 'ring-opacity-75');
                }, 2000);
            }
        }
    };
    
    // Back to top function
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    // Navigation Up Button functionality
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show/hide navigation up button
        const navUpBtn = document.getElementById('navUpBtn');
        if (navUpBtn) {
            if (scrollTop > 300) {
                navUpBtn.style.opacity = '1';
                navUpBtn.style.transform = 'translateX(calc(225px - 60px)) scale(1)';
            } else {
                navUpBtn.style.opacity = '0';
                navUpBtn.style.transform = 'translateX(calc(225px - 60px)) scale(0)';
            }
        }
        
        // Show/hide sticky nav if it exists
        const stickyNav = document.getElementById('stickyNav');
        if (stickyNav) {
            if (scrollTop > 200) {
                stickyNav.classList.add('visible');
            } else {
                stickyNav.classList.remove('visible');
            }
        }
    });
    
    console.log('Navigation functions loaded successfully');
});