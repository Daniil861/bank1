
import { initStartData } from './script.js';

const modalItems = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalId = modal.querySelector('.modal__id span');

// Объявляем слушатель событий "клик"

document.addEventListener('click', (e) => {
	let targetElement = e.target;

	initStartData();

	if (targetElement.closest('.modal__button') && modal.classList.contains('_visible')) {
		modal.classList.remove('_visible');
	}
})

if (modalItems.length) {
	modalItems.forEach(button => {
		button.addEventListener('click', () => {
			const id = button.dataset.id;

			modalId.textContent = id;

			modal.classList.add('_visible');
		})
	})
}






