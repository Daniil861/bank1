const modalItems = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');


if (modal) {
	const modalId = modal.querySelector('.modal__id span');

	// Объявляем слушатель событий "клик"

	document.addEventListener('click', (e) => {
		let targetElement = e.target;

		if (targetElement.closest('.modal__button') && modal.classList.contains('_visible')) {
			modal.classList.remove('_visible');
		}
	})


	if (modalItems.length) {
		modalItems.forEach(button => {
			button.addEventListener('click', () => {

				if (button.dataset.id) {
					showModal(button, modal, modalId)
				}
			})
		})
	}
}


function showModal(button, item, itemId) {
	const id = button.dataset.id;

	itemId.textContent = id;

	item.classList.add('_visible');
}