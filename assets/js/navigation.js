// document.addEventListener('DOMContentLoaded', () => {
//     // Smooth scrolling for navigation links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 target.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         });
//     });

//     // Header background on scroll
//     window.addEventListener('scroll', () => {
//         const header = document.querySelector('header');
//         if (window.scrollY > 100) {
//             header.style.background = 'rgba(0, 0, 0, 0.9)';
//         } else {
//             header.style.background = 'rgba(255, 255, 255, 0.1)';
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
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

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'linear-gradient(135deg, #1e3a8a, #3b82f6)';
            } else {
                header.style.background = 'linear-gradient(135deg, rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.8))';
            }
        }
    });
});
