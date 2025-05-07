 //filter artikel
const categoryButtons = document.querySelectorAll('.category-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-outline-primary');
    });
    
    button.classList.add('active');
    button.classList.remove('btn-outline-primary');
    button.classList.add('btn-primary');
    
    const filter = button.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');
    if (window.getComputedStyle(toggler).display !== 'none') {
      toggler.click(); // simulasi klik hamburger
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        // Tutup menu dengan Bootstrap 5 API
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
});





  