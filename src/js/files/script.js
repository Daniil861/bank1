const welcomeScreen = document.querySelector('.welcome');
if (sessionStorage.getItem('privacy')) {
	document.querySelector('.preloader').classList.add('_hide');
	setTimeout(() => {
		welcomeScreen.classList.add('_hide');
	}, 3000);
}

