/**
 * Portfolio Site Interactive Features
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Dark / Light Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // 3. Mobile Navigation Menu
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 4. Scroll Active Link Highlighting
  const sections = document.querySelectorAll('section[id]');
  const handleScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // 5. Contact Form Submission with Web3Forms
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('formSubmitBtn');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const accessKeyInput = document.getElementById('web3FormsAccessKey');
      const accessKey = accessKeyInput ? accessKeyInput.value.trim() : '';

      if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Please configure your Web3Forms access key in index.html to receive emails.';
        return;
      }

      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span>';
      formStatus.className = 'form-status';
      formStatus.textContent = '';

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (response.ok && result.success) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Thank you! Your message has been sent successfully.';
          contactForm.reset();
        } else {
          formStatus.className = 'form-status error';
          formStatus.textContent = result.message || 'Submission failed. Please check your access key.';
        }
      } catch (err) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Network error: Unable to deliver message. Please try again.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;

        setTimeout(() => {
          if (formStatus.classList.contains('success')) {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
          }
        }, 8000);
      }
    });
  }
});
