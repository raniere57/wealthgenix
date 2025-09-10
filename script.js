// WealthGenix Pre-sell Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    const smoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // Add click tracking for CTA buttons
    const trackCTAClicks = () => {
        const ctaButtons = document.querySelectorAll('.cta-button, .pricing-button');
        ctaButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Add visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Track click (you can integrate with analytics here)
                console.log('CTA clicked:', this.textContent);
                
                // Optional: Add a small delay to show the click effect
                setTimeout(() => {
                    // The link will proceed normally
                }, 200);
            });
        });
    };

    // Add hover effects for pricing cards
    const enhancePricingCards = () => {
        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                if (this.classList.contains('featured')) {
                    this.style.transform = 'scale(1.05)';
                } else {
                    this.style.transform = 'translateY(0) scale(1)';
                }
                this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
            });
        });
    };

    // Add scroll-triggered animations
    const addScrollAnimations = () => {
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
        const animatedElements = document.querySelectorAll('.benefit-item, .ingredient-item, .bonus-item, .pricing-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    };

    // Add urgency timer (optional)
    const addUrgencyTimer = () => {
        const urgencyElement = document.querySelector('.urgency-text');
        if (urgencyElement) {
            // Create a simple countdown effect
            let countdown = 300; // 5 minutes
            const timer = setInterval(() => {
                const minutes = Math.floor(countdown / 60);
                const seconds = countdown % 60;
                urgencyElement.textContent = `Limited Time Offer - ${minutes}:${seconds.toString().padStart(2, '0')} remaining!`;
                
                countdown--;
                if (countdown < 0) {
                    clearInterval(timer);
                    urgencyElement.textContent = 'Limited Time Offer - Don\'t Miss Out!';
                }
            }, 1000);
        }
    };

    // Add floating action button for mobile
    const addFloatingCTA = () => {
        if (window.innerWidth <= 768) {
            const floatingButton = document.createElement('div');
            floatingButton.innerHTML = `
                <a href="https://eaf4dclmt8016s2ow5-d1rfv4w.hop.clickbank.net" class="floating-cta">
                    <span>BUY NOW</span>
                </a>
            `;
            floatingButton.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
                animation: pulse 2s infinite;
            `;
            
            // Add CSS for floating button
            const style = document.createElement('style');
            style.textContent = `
                .floating-cta {
                    display: inline-block;
                    background: linear-gradient(45deg, #ff6b6b, #ff8e53);
                    color: white;
                    padding: 15px 25px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 1rem;
                    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
                    transition: all 0.3s ease;
                }
                .floating-cta:hover {
                    transform: scale(1.05);
                    box-shadow: 0 12px 35px rgba(255, 107, 107, 0.6);
                }
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
            document.body.appendChild(floatingButton);
        }
    };

    // Add scroll progress indicator
    const addScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(45deg, #ff6b6b, #ff8e53);
            z-index: 1001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    };

    // Add form validation if needed (for future enhancements)
    const addFormValidation = () => {
        // This can be expanded if you add email capture forms
        console.log('Form validation ready for future enhancements');
    };

    // Add social proof counter (simulated)
    const addSocialProof = () => {
        const socialProofElement = document.createElement('div');
        socialProofElement.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                left: 20px;
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 10px 15px;
                border-radius: 25px;
                font-size: 0.9rem;
                z-index: 1000;
                animation: slideIn 0.5s ease;
            ">
                <span id="social-proof-text">127 people viewed this page today</span>
            </div>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(-100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(socialProofElement);

        // Update counter periodically
        let count = 127;
        setInterval(() => {
            count += Math.floor(Math.random() * 3) + 1;
            document.getElementById('social-proof-text').textContent = 
                `${count} people viewed this page today`;
        }, 30000); // Update every 30 seconds
    };

    // Initialize all functions
    const init = () => {
        smoothScroll();
        trackCTAClicks();
        enhancePricingCards();
        addScrollAnimations();
        addUrgencyTimer();
        addFloatingCTA();
        addScrollProgress();
        addFormValidation();
        addSocialProof();
        
        console.log('WealthGenix Pre-sell page initialized successfully!');
    };

    // Run initialization
    init();

    // Handle window resize
    window.addEventListener('resize', () => {
        // Reinitialize floating CTA on resize
        const existingFloating = document.querySelector('.floating-cta');
        if (existingFloating && window.innerWidth > 768) {
            existingFloating.parentElement.remove();
        } else if (!existingFloating && window.innerWidth <= 768) {
            addFloatingCTA();
        }
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.classList.contains('cta-button')) {
            e.target.click();
        }
    });

    // Add loading state for external links
    const externalLinks = document.querySelectorAll('a[href^="https://eaf4dclmt8016s2ow5-d1rfv4w.hop.clickbank.net"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            // Add loading text
            const originalText = this.textContent;
            this.textContent = 'Redirecting...';
            
            // Reset after a short delay (in case the redirect is slow)
            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 2000);
        });
    });

});

// Add some utility functions
const utils = {
    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { utils };
}
