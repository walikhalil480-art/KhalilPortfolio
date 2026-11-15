/**
 * Khalil Wali — Architectural Portfolio Scripts
 * Interactions, mobile navigation toggle, and contact form handling
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('is-open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Interactive Contact Form Handler (Polite client-side validation & confirmation)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const messageInput = document.getElementById('senderMessage');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        formStatus.textContent = 'Please fill out all required fields before submitting.';
        formStatus.style.display = 'block';
        formStatus.style.backgroundColor = '#FDF2F0';
        formStatus.style.color = '#9A4D2E';
        formStatus.style.borderColor = '#F0C7BC';
        return;
      }

      // Success message state
      formStatus.textContent = `Thank you, ${nameInput.value.trim()}. Your message has been received. I typically respond within 24 to 48 hours.`;
      formStatus.style.display = 'block';
      formStatus.style.backgroundColor = '#E8F3EC';
      formStatus.style.color = '#1E5C3B';
      formStatus.style.borderColor = '#C3E0CE';

      contactForm.reset();
    });
  }
});
