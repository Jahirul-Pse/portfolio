// document.addEventListener('DOMContentLoaded', () => {
//     // Intersection Observer for animations
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
//             }
//         });
//     }, observerOptions);

//     // Observe all sections
//     document.querySelectorAll('section').forEach(section => {
//         observer.observe(section);
//     });

//     // Add hover effects to skill tags
//     document.querySelectorAll('.skill-tag').forEach(tag => {
//         tag.addEventListener('mouseenter', function() {
//             this.style.transform = 'scale(1.1) rotate(2deg)';
//         });
        
//         tag.addEventListener('mouseleave', function() {
//             this.style.transform = 'scale(1) rotate(0deg)';
//         });
//     });

//     // Add click effects to platform cards
//     document.querySelectorAll('.platform-card').forEach(card => {
//         card.addEventListener('click', function() {
//             this.style.transform = 'scale(0.95)';
//             setTimeout(() => {
//                 this.style.transform = 'scale(1)';
//             }, 150);
//         });
//     });

//     // Floating animation for hero shapes
//     document.querySelectorAll('.shape').forEach((shape, index) => {
//         shape.style.animationDelay = `${index * 2}s`;
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const checkHero = () => {
        const heroText = document.querySelector('.hero p');
        if (heroText) {
            const originalText = heroText.textContent;
            heroText.textContent = '';
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroText.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            setTimeout(typeWriter, 1000);
        } else {
            setTimeout(checkHero, 100);
        }
    };
    checkHero();

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }
        });
    }, observerOptions);
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    document.querySelectorAll('.platform-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
