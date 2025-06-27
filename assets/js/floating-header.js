// Floating header scroll behavior for all pages
document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0;
  let scrollTimeout;
  
  window.addEventListener('scroll', function() {
    const masthead = document.querySelector('.masthead');
    if (!masthead) return;
    
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Clear any existing timeout
    clearTimeout(scrollTimeout);
    
    // Add a small delay to avoid flickering on rapid scroll changes
    scrollTimeout = setTimeout(function() {
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        // Scrolling down - hide header
        masthead.classList.add('header-hidden');
      } else {
        // Scrolling up - show header
        masthead.classList.remove('header-hidden');
      }
      lastScrollTop = currentScrollTop;
    }, 10);
  });
}); 