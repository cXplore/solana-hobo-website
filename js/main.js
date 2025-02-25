/**
 * Solana Hobo ($SOLBO) Website JavaScript
 * Features:
 * - Mobile navigation
 * - Tokenomics chart
 * - Copy to clipboard functionality
 * - Smooth animations
 */

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize tokenomics chart
    initTokenomicsChart();
    
    // Initialize copy to clipboard functionality
    initClipboard();
    
    // Add scroll animations
    initScrollAnimations();
});

/**
 * Mobile Navigation
 */
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

/**
 * Tokenomics Chart
 */
function initTokenomicsChart() {
    const ctx = document.getElementById('tokenomicsChart');
    
    if (ctx) {
        const tokenomicsChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Circulating Supply', 'Liquidity Pool (Locked)', 'Community Treasury'],
                datasets: [{
                    data: [70, 20, 10],
                    backgroundColor: [
                        '#9945FF',  // Primary color
                        '#14F195',  // Secondary color
                        '#F8A010'   // Accent color
                    ],
                    borderColor: '#1E1E1E',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#FFFFFF',
                            font: {
                                size: 14
                            },
                            padding: 20
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                },
                cutout: '70%',
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }
}

/**
 * Copy to Clipboard Functionality
 */
function initClipboard() {
    const clipboardButton = document.querySelector('.copy-btn');
    
    if (clipboardButton) {
        const clipboard = new ClipboardJS('.copy-btn');
        
        clipboard.on('success', function(e) {
            // Change the icon temporarily to indicate success
            const icon = e.trigger.querySelector('i');
            icon.classList.remove('fa-copy');
            icon.classList.add('fa-check');
            
            // Change button color
            e.trigger.style.backgroundColor = '#14F195';
            
            // Reset after 2 seconds
            setTimeout(function() {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-copy');
                e.trigger.style.backgroundColor = '';
            }, 2000);
            
            e.clearSelection();
        });
    }
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    // Animate elements when they come into view
    const animateElements = document.querySelectorAll('.feature, .token-info-box, .timeline-item, .social-link, .step');
    
    // Callback for the observer
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Stop observing once the animation is done
                observer.unobserve(entry.target);
            }
        });
    };
    
    // Create the observer
    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Set initial styles and observe all elements
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Special animation for the hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        
        // Animate hero content after a small delay
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
}

/**
 * Smooth scroll for navigation links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Account for fixed header
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
