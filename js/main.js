/**
 * SONIC BOLD — Main JavaScript
 * Handles smooth interactivity, modals, form submission, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-controls', 'mobile-drawer');

    const closeMobileMenu = () => {
      mobileDrawer.style.display = 'none';
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    };

    mobileToggle.addEventListener('click', () => {
      const isVisible = mobileDrawer.style.display === 'block';
      mobileDrawer.style.display = isVisible ? 'none' : 'block';
      mobileToggle.setAttribute('aria-expanded', String(!isVisible));
      document.body.classList.toggle('menu-open', !isVisible);
    });

    // Close drawer when clicking any link inside it
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileDrawer.style.display === 'block') {
        closeMobileMenu();
        mobileToggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMobileMenu();
    });
  }

  // 1b. Services nav dropdown — click/keyboard (+ keep CSS hover as enhancement)
  const navDropdown = document.querySelector('.nav-dropdown');
  const navDropdownToggle = document.querySelector('.nav-dropdown-toggle');
  const navDropdownMenu = document.querySelector('.nav-dropdown-menu');

  if (navDropdown && navDropdownToggle && navDropdownMenu) {
    navDropdownToggle.setAttribute('aria-expanded', 'false');
    if (!navDropdownToggle.getAttribute('aria-haspopup')) {
      navDropdownToggle.setAttribute('aria-haspopup', 'true');
    }

    const setDropdownOpen = (open) => {
      navDropdown.classList.toggle('is-open', open);
      navDropdownToggle.setAttribute('aria-expanded', String(open));
    };

    const closeDropdown = () => setDropdownOpen(false);

    navDropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDropdownOpen(!navDropdown.classList.contains('is-open'));
    });

    // Close when choosing a link
    navDropdownMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => closeDropdown());
    });

    document.addEventListener('click', (e) => {
      if (!navDropdown.contains(e.target)) closeDropdown();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navDropdown.classList.contains('is-open')) {
        closeDropdown();
        navDropdownToggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) closeDropdown();
    });
  }

  // 2. Booking Modal Logic
  const modal = document.getElementById('booking-modal');
  const openButtons = document.querySelectorAll('.open-modal-btn');
  const closeButton = document.getElementById('modal-close-btn');
  const leadForm = document.getElementById('lead-capture-form');
  const successMsg = document.getElementById('form-success-msg');

  const openModal = (e) => {
    if (e) e.preventDefault();
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
    }
    // Always clear scroll lock (covers hash-open edge cases)
    document.body.style.overflow = '';
    setTimeout(() => {
      if (leadForm && successMsg) {
        leadForm.style.display = 'block';
        successMsg.style.display = 'none';
      }
    }, 300);
  };

  // Auto-open modal if hash is #hero-booking-form (same path as buttons)
  if (window.location.hash === '#hero-booking-form' && modal) {
    openModal();
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // ESC key to close modal (and always unlock scroll)
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !modal) return;
    if (modal.classList.contains('active') || document.body.style.overflow === 'hidden') {
      closeModal();
    }
  });

  // Helper function to handle form submission via Web3Forms
  const SMS_CONSENT_ERROR = 'Please check the SMS consent box to continue, or leave Phone blank if you do not want texts.';

  const showFormError = (form, message) => {
    const errEl = form.querySelector('.form-error');
    if (!errEl) return;
    errEl.textContent = message;
    errEl.style.display = 'block';
  };

  // Block when a phone field is present or the SMS consent checkbox exists and is unchecked.
  const smsConsentMissing = (form) => {
    const sms = form.querySelector('input[name="SMS Consent"]');
    const phoneField = form.querySelector('input[type="tel"], input[name="Phone"], input[name="phone"]');
    if (!sms && !phoneField) return false;
    return !sms || !sms.checked;
  };

  const handleFormSubmission = (form, successMsgElement) => {
    const sms = form.querySelector('input[name="SMS Consent"]');
    // Let this handler run even when the checkbox is required, so the
    // .form-error message is shown. Other required fields are still checked below.
    form.noValidate = true;
    if (sms) {
      sms.addEventListener('invalid', () => {
        showFormError(form, SMS_CONSENT_ERROR);
      });
      sms.addEventListener('change', () => {
        if (sms.checked) {
          const errEl = form.querySelector('.form-error');
          if (errEl) errEl.style.display = 'none';
        }
      });
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      if (!submitBtn) return;
      const originalText = submitBtn.innerHTML;

      if (smsConsentMissing(form)) {
        showFormError(form, SMS_CONSENT_ERROR);
        if (sms) sms.focus();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
      }

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      submitBtn.innerHTML = 'Submitting Request...';
      submitBtn.disabled = true;
      const existingErr = form.querySelector('.form-error');
      if (existingErr) existingErr.style.display = 'none';

      const formData = new FormData(form);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();
        if (response.ok && data.success) {
          form.style.display = 'none';
          if (successMsgElement) {
            successMsgElement.style.display = 'block';
          }
          form.reset();
        } else {
          const errEl = form.querySelector('.form-error');
          if (errEl) {
            errEl.textContent = data.message || 'Something went wrong. Please try again.';
            errEl.style.display = 'block';
          }
        }
      } catch (error) {
        const errEl = form.querySelector('.form-error');
          if (errEl) {
            errEl.textContent = 'Network error. Please check your connection and try again.';
            errEl.style.display = 'block';
          }
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  };

  // 3. Modal, hero, and contact-page forms (same consent gate + AJAX path)
  const bindLeadForm = (formId, successId) => {
    const form = document.getElementById(formId);
    if (!form) return;
    const successEl = successId ? document.getElementById(successId) : null;
    handleFormSubmission(form, successEl);
  };

  bindLeadForm('lead-capture-form', 'form-success-msg');
  bindLeadForm('hero-audit-form', 'hero-form-success');
  bindLeadForm('contact-page-form', 'contact-form-success');

  document.querySelectorAll('form').forEach((form) => {
    if (form.id === 'lead-capture-form' || form.id === 'hero-audit-form' || form.id === 'contact-page-form') return;
    const hasSms = form.querySelector('input[name="SMS Consent"]');
    const hasPhone = form.querySelector('input[type="tel"], input[name="Phone"], input[name="phone"]');
    if (hasSms || hasPhone) handleFormSubmission(form, null);
  });

  // 5. Smooth Anchor Link Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.classList.contains('open-modal-btn')) return;
    const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#' && !targetId.includes('modal')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
