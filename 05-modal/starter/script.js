'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION $ CLASS TOGGLING ===');

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.btn--close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');

console.log('Keyboard events test');

document.addEventListener('keydown', function (e) {
  console.log('Key pressed:', e);
  console.log('Key name:', e.key);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    console.log('Escape key pressed');
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

document.addEventListener('keydown', function (e) {
  console.log(
    'Key pressed:',
    e.key,
    'Modal visible:',
    !modalEl.classList.contains('hidden')
  );

  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

let lastFocusedButton = null;

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');
