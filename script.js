// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const testimoniItems = document.querySelectorAll('.testimoni-item');
const dots = document.querySelectorAll('.dot');

// Testimoni Slider
let currentTestimoni = 0;
let testimoniInterval;

function showTestimoni(index) {
    // Remove active class from all items and dots
    testimoniItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current item and dot
    testimoniItems[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentTestimoni = index;
}

function nextTestimoni() {
    const nextIndex = (currentTestimoni + 1) % testimoniItems.length;
    showTestimoni(nextIndex);
}

function startTestimoniSlider() {
    // Clear any existing interval
    if (testimoniInterval) {
        clearInterval(testimoniInterval);
    }
    
    // Start auto-slide every 5 seconds
    testimoniInterval = setInterval(nextTestimoni, 5000);
}

function stopTestimoniSlider() {
    if (testimoniInterval) {
        clearInterval(testimoniInterval);
        testimoniInterval = null;
    }
}

// Manual dot click
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimoni(index);
        // Restart auto-slider after manual interaction
        startTestimoniSlider();
    });
});

// Pause auto-slider on hover
const testimoniSlider = document.querySelector('.testimoni-slider');
if (testimoniSlider) {
    testimoniSlider.addEventListener('mouseenter', stopTestimoniSlider);
    testimoniSlider.addEventListener('mouseleave', startTestimoniSlider);
}

// Start auto-slider when page loads
window.addEventListener('load', () => {
    startTestimoniSlider();
    setActiveNavLink();
});

// Active navigation state management
function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

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
    
    // Update active navigation
    setActiveNavLink();
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
    const animatedElements = document.querySelectorAll('.section-header, .about-content, .founder-content, .service-card, .project-card, .promo-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Countdown Timer for Promo
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    // Set target date (30 minutes from now)
    const targetDate = new Date();
    targetDate.setMinutes(targetDate.getMinutes() + 30);
    
    const updateTimer = () => {
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            countdownElement.textContent = `${minutes} menit ${seconds} detik`;
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
    const cards = document.querySelectorAll('.service-card, .project-card, .stat-item, .founder-avatar');
    
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
