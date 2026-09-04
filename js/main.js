/**
 * HIVE SONIC — Main JavaScript
 * Handles smooth interactivity, modals, form submission, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = mobileDrawer.style.display === 'block';
      mobileDrawer.style.display = isVisible ? 'none' : 'block';
    });

    // Close drawer when clicking any link inside it
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.style.display = 'none';
      });
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
      document.body.style.overflow = '';
      setTimeout(() => {
        if (leadForm && successMsg) {
          leadForm.style.display = 'block';
          successMsg.style.display = 'none';
        }
      }, 300);
    }
  };

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

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Helper function to handle form submission via Web3Forms
  const handleFormSubmission = (form, successMsgElement) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Submitting Request...';
      submitBtn.disabled = true;

      const formData = new FormData(form);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          form.style.display = 'none';
          if (successMsgElement) {
            successMsgElement.style.display = 'block';
          }
          form.reset();
        } else {
          alert('Something went wrong. Please try again.');
        }
      } catch (error) {
        alert('Network error. Please try again.');
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  };

  // 3. Modal Form Submission
  if (leadForm) {
    handleFormSubmission(leadForm, successMsg);
  }

  // 4. Hero Inline Form Submission
  const heroForm = document.getElementById('hero-audit-form');
  const heroSuccess = document.getElementById('hero-form-success');
  if (heroForm) {
    handleFormSubmission(heroForm, heroSuccess);
  }

  // 5. Smooth Anchor Link Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
