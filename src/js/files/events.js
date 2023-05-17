const welcomeScreen = document.querySelector('.welcome');

// Объявляем слушатель событий "клик"

document.addEventListener('click', (e) => {
	let targetElement = e.target;

	if (targetElement.closest('.preloader__button')) {
		location.href = 'main.html';
	}

	if (targetElement.closest('[data-btn="show-iframe"]')) {
		const modal = document.querySelector('.frame-wrapper__modal');

		if (modal && !modal.classList.contains('_visible')) {
			modal.classList.add('_visible');
		}
	}
})






