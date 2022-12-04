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
const wrapperDropdown = document.querySelector('.wrapper-dropdown');

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
   modalBurgerMenu.classList.add('appear_left');
   modalBurgerMenu.classList.remove('fade_left');
   document.querySelector('.modal__burger_menu').style.left='0';
}

const closeModal = function () {
   modalBurgerMenu.classList.add('fade_left');
   modalBurgerMenu.classList.remove('appear_left');
}

aboutFund.addEventListener('click', (event) => {
   // console.dir(wrapperDropdown);
   event.preventDefault();
   console.dir(event.target);
   wrapperDropdown.setAttribute("style","top: 115px");
})

document.addEventListener('click', (event) => {
   if (event.target.className !== "wrapper-dropdown" 
   && event.target.className !== "header-menu__link") {
      wrapperDropdown.setAttribute("style","top: -100vh");
      // console.dir(event.target);
   } else {
      console.dir(event.target.className);
   }
})


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