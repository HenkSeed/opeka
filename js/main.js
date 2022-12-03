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
   modalBurgerMenu.classList.add('appear_left');
   modalBurgerMenu.classList.remove('fade_left');
   document.querySelector('.modal__burger_menu').style.left='0';
   // modalBurgerMenu.classList.add('opened');
}

const closeModal = function () {
   modalBurgerMenu.classList.add('fade_left');
   modalBurgerMenu.classList.remove('appear_left');
   // modalBurgerMenu.classList.toggle('opened');
   // modalBurgerMenu.style.left = '-100vw';
}

regionSearch.addEventListener('click', toggleSearch);
selectArrow.addEventListener('click', toggleSearch);

selectSexArrow.addEventListener('click', toggleSexArrow);
selectAgeArrow.addEventListener('click', toggleAgeArrow);


burgerIcon.addEventListener('click', (event) => {
   modalBurgerMenu.classList.remove('appear_left');
   openModal();
   modalBurgerMenu.classList.add('opened');
   
	// Исключаем прокрутку документа под открытым окном сообщения об ошибке
	document.body.style.overflow = 'hidden';
});

burgerCloseIcon.addEventListener('click', (event) => {
   modalBurgerMenu.classList.remove('fade_left');
   closeModal();
	// Разрешаем прокрутку документа 
	document.body.style.overflow = '';
});

// burgerIcon.addEventListener('click', openModal);
// burgerCloseIcon.addEventListener('click', closeModal);