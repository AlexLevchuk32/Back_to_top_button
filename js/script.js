window.addEventListener('scroll', () => {
	const upBtn = document.querySelector('.back-to-top');

	let scrolled = window.pageYOffset;
	let coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
		upBtn.classList.add('active');
	}
	if (scrolled < coords) {
		upBtn.classList.remove('active');
	}

	upBtn.addEventListener('click', () => {
		if (window.pageYOffset > 0) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	});
});
