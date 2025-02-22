
document.addEventListener("DOMContentLoaded", function () {
	const openMenuButton = document.querySelector('.open-menu-button');
	const closeMenuButton = document.querySelector('.close-menu-btn');
	const mobMenu = document.querySelector('.mob-menu');
	const body = document.querySelector('body');

	document.addEventListener('click', function (event) {
		const isClickInsideMobMenu = mobMenu.contains(event.target);
		const isClickInsideOpenMenuButton = openMenuButton.contains(event.target);

		if (!isClickInsideMobMenu && !isClickInsideOpenMenuButton && mobMenu.classList.contains('open')) {
			mobMenu.classList.remove('open');
			headerContainer.classList.remove('no-scroll');
		}
	});

	openMenuButton.addEventListener('click', function () {
		mobMenu.classList.add('open');

		body.classList.add('no-scroll');

	});

	closeMenuButton.addEventListener('click', function () {
		mobMenu.classList.remove('open');

		body.classList.remove('no-scroll');
	});
	document.addEventListener("DOMContentLoaded", function () {
		const firstItemLink = document.querySelector('.mob-item-link.first-item');

		firstItemLink.addEventListener('click', function () {
			this.classList.toggle('active');
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const headerLinks = document.querySelectorAll('.header-item-link, .mob-item-link');

	headerLinks.forEach(link => {
		link.addEventListener('click', function (event) {
			headerLinks.forEach(link => link.classList.remove('active'));

			this.classList.add('active');
		});

	});
});


// --------------------------SALE HEADER SCRIPT--------------------------//

// --------------------------CATALOG SECTION SCRIPT--------------------------//

document.addEventListener("DOMContentLoaded", function () {
	const showMoreButton = document.querySelector('.catalog-btn');
	const hiddenItems = document.querySelectorAll('.catalog-item.hidden');

	showMoreButton.addEventListener('click', function () {
		hiddenItems.forEach(item => {
			item.classList.remove('hidden');
		});
		showMoreButton.style.display = 'none'; 
	});
});


// --------------------------CATALOG SECTION SCRIPT--------------------------//


// --------------------------SALE SECTION SCRIPT--------------------------//


document.addEventListener("DOMContentLoaded", function () {
	const mainImage = document.getElementById('main-img');
	const thumbnails = document.querySelectorAll('.thumbnail');

	thumbnails.forEach(thumbnail => {
		thumbnail.addEventListener('click', function () {
			const mainSrc = mainImage.src;
			const mainSrcset = mainImage.srcset;
			const newSrc = this.src;
			const newSrcset = this.srcset;

			// Swap the images
			mainImage.src = newSrc;
			mainImage.srcset = newSrcset;
			this.src = mainSrc;
			this.srcset = mainSrcset;

			// Add transition effect
			mainImage.style.transform = 'scale(1.05)';
			setTimeout(() => {
				mainImage.style.transform = 'scale(1)';
			}, 300);
		});
	});
});

// --------------------------SALE SECTION SCRIPT--------------------------//