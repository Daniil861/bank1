const welcomeScreen = document.querySelector('.welcome');

// Объявляем слушатель событий "клик"

document.addEventListener('click', (e) => {
	let targetElement = e.target;

	if (targetElement.closest('.preloader__button')) {
		document.querySelector('.preloader').classList.add('_hide');
		sessionStorage.setItem('privacy', true);
		setTimeout(() => {
			welcomeScreen.classList.add('_hide');
		}, 3000);
	}
})






