'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION $ CLASS TOGGLING ===');

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.btn--close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModalEl.length);

const openModal = function () {
  modalEl.classList.remove('hidden');
  ocerlayEl.classList.remove('hidden');
};

const closeModal = function () {
  modelEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

// Event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
