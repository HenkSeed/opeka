const regionSearch = document.querySelector('.region-search');
const sexSearch = document.querySelector('.sex-search');
const ageSearch = document.querySelector('.age-search');
const selectArrow = document.querySelector('.select-arrow')

const selectRegionArrow = document.getElementById('select-region__arrow')
const selectSexArrow = document.getElementById('select-sex__arrow')
const selectAgeArrow = document.getElementById('select-age__arrow')

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

regionSearch.addEventListener('click', toggleSearch);
selectArrow.addEventListener('click', toggleSearch);

selectSexArrow.addEventListener('click', toggleSexArrow);
selectAgeArrow.addEventListener('click', toggleAgeArrow);