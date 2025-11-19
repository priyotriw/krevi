// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const testimoniItems = document.querySelectorAll('.testimoni-item');
const dots = document.querySelectorAll('.dot');

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(250, 247, 240, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'var(--bg-main)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.section-header, .about-content, .founder-content, .product-card, .promo-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Testimoni Slider
let currentTestimoni = 0;

function showTestimoni(index) {
    testimoniItems.forEach((item, i) => {
        item.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    testimoniItems[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextTestimoni() {
    currentTestimoni = (currentTestimoni + 1) % testimoniItems.length;
    showTestimoni(currentTestimoni);
}

function prevTestimoni() {
    currentTestimoni = (currentTestimoni - 1 + testimoniItems.length) % testimoniItems.length;
    showTestimoni(currentTestimoni);
}

// Auto-rotate testimoni
setInterval(nextTestimoni, 5000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimoni = index;
        showTestimoni(currentTestimoni);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevTestimoni();
    } else if (e.key === 'ArrowRight') {
        nextTestimoni();
    }
});

// Countdown Timer for Promo
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    // Set target date (3 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(23, 59, 59, 999);
    
    const updateTimer = () => {
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            countdownElement.textContent = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
        } else {
            countdownElement.textContent = 'Promo berakhir';
        }
    };
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Initialize countdown when page loads
document.addEventListener('DOMContentLoaded', updateCountdown);

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card, .stat-item, .founder-avatar');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = card.style.transform.replace('scale(1)', 'scale(1.05)');
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = card.style.transform.replace('scale(1.05)', 'scale(1)');
        });
    });
});

// Console branding
console.log('%c🎨 Krevi Agency - Professional Web Development', 'font-size: 20px; font-weight: bold; color: #c4b5fd; background: #1f2937; padding: 10px; border: 4px solid #c4b5fd;');
console.log('%cBuilding bold, beautiful websites with pastel brutalist design 🚀', 'font-size: 14px; color: #99f6e4;');
    });
});

// Testimoni Slider
let currentTestimoni = 0;

function showTestimoni(index) {
    // Hide all testimoni items
    testimoniItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show selected testimoni
    testimoniItems[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentTestimoni = index;
}

// Auto-rotate testimoni
function rotateTestimoni() {
    currentTestimoni = (currentTestimoni + 1) % testimoniItems.length;
    showTestimoni(currentTestimoni);
}

// Start auto-rotation
setInterval(rotateTestimoni, 5000);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
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

// Add scroll animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.layanan-card, .portfolio-item, .blog-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effect to cards
const cards = document.querySelectorAll('.layanan-card, .portfolio-item, .blog-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) rotate(-1deg) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        // Reset to original rotation based on card type
        if (this.classList.contains('layanan-card')) {
            const index = Array.from(this.parentElement.children).indexOf(this);
            if (index === 1) {
                this.style.transform = 'rotate(1deg)';
            } else if (index === 3) {
                this.style.transform = 'rotate(-2deg)';
            } else {
                this.style.transform = 'rotate(0deg)';
            }
        } else if (this.classList.contains('portfolio-item')) {
            const index = Array.from(this.parentElement.children).indexOf(this);
            if (index === 1) {
                this.style.transform = 'rotate(1deg)';
            } else {
                this.style.transform = 'rotate(0deg)';
            }
        } else if (this.classList.contains('blog-card')) {
            const index = Array.from(this.parentElement.children).indexOf(this);
            if (index === 1) {
                this.style.transform = 'rotate(1deg)';
            } else {
                this.style.transform = 'rotate(0deg)';
            }
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(250, 247, 240, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--bg-main)';
    }
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads - DISABLED
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.innerHTML;
//         setTimeout(() => {
//             typeWriter(heroTitle, originalText, 50);
//         }, 500);
//     }
// });

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    const heroBox = document.querySelector('.hero-box');
    
    if (heroVisual && heroBox) {
        const speed = 0.5;
        heroBox.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Add ripple effect to buttons
document.querySelectorAll('.cta-primary, .cta-footer, .layanan-cta, .portfolio-cta, .blog-cta').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .cta-primary, .cta-footer, .layanan-cta, .portfolio-cta, .blog-cta {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Form validation (if contact form is added in the future)
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Add loading states for buttons
document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add loading state
        const originalText = this.querySelector('span').textContent;
        this.querySelector('span').textContent = 'Membuka WhatsApp...';
        this.style.pointerEvents = 'none';
        this.style.opacity = '0.7';
        
        // Reset after a delay (in case the user doesn't navigate)
        setTimeout(() => {
            this.querySelector('span').textContent = originalText;
            this.style.pointerEvents = 'auto';
            this.style.opacity = '1';
        }, 3000);
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Scroll-related functions here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
    
    // Arrow key navigation for testimoni
    if (e.key === 'ArrowLeft') {
        currentTestimoni = (currentTestimoni - 1 + testimoniItems.length) % testimoniItems.length;
        showTestimoni(currentTestimoni);
    } else if (e.key === 'ArrowRight') {
        currentTestimoni = (currentTestimoni + 1) % testimoniItems.length;
        showTestimoni(currentTestimoni);
    }
});

// Countdown Timer for Promo
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    // Set target date (3 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(23, 59, 59, 999);
    
    const updateTimer = () => {
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            countdownElement.textContent = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
        } else {
            countdownElement.textContent = 'Promo berakhir';
        }
    };
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Initialize countdown when page loads
document.addEventListener('DOMContentLoaded', updateCountdown);

// Console branding
console.log('%c🎨 Krevi Agency - Professional Web Development', 'font-size: 20px; font-weight: bold; color: #c4b5fd; background: #1f2937; padding: 10px; border: 4px solid #c4b5fd;');
console.log('%cBuilding bold, beautiful websites with pastel brutalist design 🚀', 'font-size: 14px; color: #99f6e4;');
