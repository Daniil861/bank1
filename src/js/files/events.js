const welcomeScreen = document.querySelector('.welcome');

// Объявляем слушатель событий "клик"

document.addEventListener('click', (e) => {
	let targetElement = e.target;

	if (targetElement.closest('.preloader__button')) {
		location.href = 'main.html';
	}
})






