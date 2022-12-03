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

const toggleSearch = function () {
	regionSearch.classList.toggle('hidden');
   // regionSearch.
};

const toggleSexArrow = function () {
	sexSearch.classList.toggle('hidden');
   // regionSearch.
};

const toggleAgeArrow = function () {
	ageSearch.classList.toggle('hidden');
   // regionSearch.
};

const openModal = function () {
   modalBurgerMenu.classList.toggle('opened');
}

const closeModal = function () {
   modalBurgerMenu.classList.toggle('opened');
}

regionSearch.addEventListener('click', toggleSearch);
selectArrow.addEventListener('click', toggleSearch);

selectSexArrow.addEventListener('click', toggleSexArrow);
selectAgeArrow.addEventListener('click', toggleAgeArrow);


burgerIcon.addEventListener('click', (event) => {
   openModal();
	// Исключаем прокрутку документа под открытым окном сообщения об ошибке
	document.body.style.overflow = 'hidden';
	// sectionError.classList.remove('hidden');
	// sectionError.classList.remove('fade_left');
	// sectionError.classList.add('appear_left');
});

burgerCloseIcon.addEventListener('click', (event) => {
   closeModal();
	// Исключаем прокрутку документа под открытым окном сообщения об ошибке
	document.body.style.overflow = '';
});

// burgerIcon.addEventListener('click', openModal);
// burgerCloseIcon.addEventListener('click', closeModal);