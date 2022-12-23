// ==================================================================
// const mainFormSearchFields = document.querySelectorAll(
// 	'.main__form-search-field'
// );
const mainFormItem = document.querySelectorAll('.main__form-item');
// ------------------------------------------------------------------

// ====================================================================
// mainFormSearchFields.forEach((field) => {
// 	const arrowDown = field.querySelector('.arrow-down');
// 	const arrowUp = field.querySelector('.arrow-up');
// 	field.addEventListener('click', (event) => {
// 		console.dir(event.currentTarget);
// 		arrowDown.classList.toggle('hidden');
// 		arrowUp.classList.toggle('hidden');
// 		idRegion.classList.toggle('hidden');

// 		// activateSearchField();
// 	});
// });
mainFormItem.forEach((field) => {
	const arrowDown = field.querySelector('.arrow-down');
	const arrowUp = field.querySelector('.arrow-up');
	field.addEventListener('click', (event) => {
		console.dir(event.currentTarget);
		arrowDown.classList.toggle('hidden');
		arrowUp.classList.toggle('hidden');
		event.currentTarget.children[3].classList.toggle('hidden');
	});
});
// --------------------------------------------------------------------
