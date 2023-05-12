
const welcomeScreen = document.querySelector('.welcome');

export function initStartData() {
	setTimeout(() => {
		welcomeScreen.classList.add('_hide');
	}, 3000);
}

initStartData();


