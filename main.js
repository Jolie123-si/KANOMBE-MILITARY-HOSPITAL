document.addEventListener('DOMContentLoaded', function () {

  /* ── SMOOTH SCROLL for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── APPOINTMENT FORM submit feedback ── */
  var submitBtn = document.querySelector('.btn-form');
  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      var originalText = this.textContent;
      this.textContent = '✓ Request Submitted!';
      this.style.background = '#1a7a4a';
      var self = this;
      setTimeout(function () {
        self.textContent = originalText;
        self.style.background = '';
      }, 3000);
    });
  }

  /* ── STICKY NAV shadow on scroll ── */
  var nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.style.boxShadow = '0 4px 24px rgba(10,31,61,0.12)';
      } else {
        nav.style.boxShadow = '0 2px 20px rgba(10,31,61,0.06)';
      }
    });
  }

  /* ── ACTIVE NAV LINK on scroll ── */
  var sections = document.querySelectorAll('section[id], div[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  function setActiveLink() {
    var scrollPos = window.scrollY + 100;
    sections.forEach(function (section) {
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

});
