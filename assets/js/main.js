// document.addEventListener('DOMContentLoaded', () => {
//     // Scroll progress indicator
//     window.addEventListener('scroll', () => {
//         const scrollTop = window.pageYOffset;
//         const docHeight = document.body.scrollHeight - window.innerHeight;
//         const scrollPercent = (scrollTop / docHeight) * 100;
//         const scrollIndicator = document.querySelector('.scroll-indicator');
//         if (scrollIndicator) {
//             scrollIndicator.style.transform = `scaleX(${scrollPercent}%)`;
//         }
//     });

//     // Dynamic typing effect for hero text
//     const heroText = document.querySelector('.hero p');
//     if (heroText) {
//         const originalText = heroText.textContent;
//         heroText.textContent = '';
        
//         let i = 0;
//         const typeWriter = () => {
//             if (i < originalText.length) {
//                 heroText.textContent += originalText.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, 50);
//             }
//         };
        
//         setTimeout(typeWriter, 1000);
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.style.transform = `scaleX(${scrollPercent}%)`;
        }
    });
});