const regionSearch = document.querySelector('.region-search');
const sexSearch = document.querySelector('.sex-search');
const ageSearch = document.querySelector('.age-search');
const selectArrow = document.querySelector('.select-arrow');

const selectRegionArrow = document.getElementById('select-region__arrow');
const selectSexArrow = document.getElementById('select-sex__arrow');
const selectAgeArrow = document.getElementById('select-age__arrow');

const burgerIcon = document.querySelector('.burger__icon');
const modalBurgerMenu = document.querySelector('.modal__burger_menu');

const burgerCloseIcon = document.querySelector('.burger__close-icon');

const aboutFund = document.getElementById('about_fund');
const headerMenuLinks = document.querySelectorAll('.header-menu__link');
const wrapperDropdown = document.querySelector('.wrapper-dropdown');

headerMenuLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		// const ID = event.target.getAttribute('href').substring(1);
		const headerLink = event.target.getAttribute('data-header-menu');
		console.log('headerLink: ', headerLink);

		if (headerLink === 'aboutFund') {
			appearDropdown();
			closeModal();
		}

		// 	// wrapperDropdown.setAttribute("style","top: 115px");
	});
});

const appearDropdown = function () {
	wrapperDropdown.classList.remove('disappear-top__dropdown');
	// To close the dropdown if clicked next time (toggle)
	// wrapperDropdown.classList.add('appear-top__dropdown');
	wrapperDropdown.classList.toggle('appear-top__dropdown');
};

const disappearDropdown = function () {
	wrapperDropdown.classList.add('disappear-top__dropdown');
	wrapperDropdown.classList.remove('appear-top__dropdown');
};

document.addEventListener('click', (event) => {
	// console.log(event.target.className);
	if (
		event.target.className !== 'wrapper-dropdown' &&
		event.target.className !== 'header-menu__link' &&
		event.target.className !== 'header-menu__link_modal header-menu__link'
	) {
		disappearDropdown();
		// wrapperDropdown.setAttribute("style","top: -100vh");
		// console.dir(event.target);
	} else {
		// console.dir(event.target.className);
	}
});

const toggleSearch = function () {
	regionSearch.classList.toggle('hidden');
};

const toggleSexArrow = function () {
	sexSearch.classList.toggle('hidden');
};

const toggleAgeArrow = function () {
	ageSearch.classList.toggle('hidden');
};

const openModal = function () {
	// modalBurgerMenu.classList.remove('appear-left__burger');
	// modalBurgerMenu.classList.add('fade-left__burger');

	modalBurgerMenu.classList.add('appear-left__burger');
	modalBurgerMenu.classList.remove('fade-left__burger');
	document.querySelector('.modal__burger_menu').style.left = '0';

	modalBurgerMenu.classList.add('opened');
	wait();
};

// Prevents abrupt disappearance of the vertical scrollbar
async function wait() {
	await new Promise((resolve) => setTimeout(resolve, 700));
	document.body.style.overflow = 'hidden';

	//   return 10;
}

const closeModal = function () {
	modalBurgerMenu.classList.add('fade-left__burger');
	modalBurgerMenu.classList.remove('appear-left__burger');
};

regionSearch.addEventListener('click', toggleSearch);
selectArrow.addEventListener('click', toggleSearch);

selectSexArrow.addEventListener('click', toggleSexArrow);
selectAgeArrow.addEventListener('click', toggleAgeArrow);

burgerIcon.addEventListener('click', (event) => {
	// modalBurgerMenu.classList.remove('appear-left__burger');
	openModal();
	// modalBurgerMenu.classList.add('opened');

	// Исключаем прокрутку документа под открытым окном сообщения об ошибке
	// document.body.style.overflow = 'hidden';
});

burgerCloseIcon.addEventListener('click', (event) => {
	modalBurgerMenu.classList.remove('fade-left__burger');
	closeModal();
	// Разрешаем прокрутку документа
	document.body.style.overflow = '';
});

// burgerIcon.addEventListener('click', openModal);
// burgerCloseIcon.addEventListener('click', closeModal);

// =========================================================
// .center{
//    /* ... */
//    margin-top: calc(50vh - calc(attr(height) / 2));
// }
