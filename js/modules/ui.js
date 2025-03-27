/* UI Module */

import { $, $$, on, fadeIn } from '../utils/helpers.js';

// Navigation Toggle
const initMobileNav = () => {
  const navToggle = $('.nav-toggle');
  const mobileNav = $('.mobile-nav');
  
  if (navToggle && mobileNav) {
    on(navToggle, 'click', () => {
      mobileNav.classList.toggle('is-active');
    });
  }
};

// Smooth Scroll
const initSmoothScroll = () => {
  const scrollLinks = $$('a[href^="#"]');
  
  scrollLinks.forEach(link => {
    on(link, 'click', (e) => {
      e.preventDefault();
      const target = $(link.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// Modal Handling
const initModals = () => {
  const modalTriggers = $$('[data-modal]');
  
  modalTriggers.forEach(trigger => {
    on(trigger, 'click', () => {
      const modalId = trigger.dataset.modal;
      const modal = $(`#${modalId}`);
      
      if (modal) {
        fadeIn(modal);
        
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
          on(closeBtn, 'click', () => {
            modal.style.display = 'none';
          });
        }
      }
    });
  });
};

// Initialize UI Components
const initUI = () => {
  initMobileNav();
  initSmoothScroll();
  initModals();
};

export { initUI };