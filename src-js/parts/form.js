function form() {
	let popup = document.querySelector('.popup'),
			headerBtn = document.querySelector('.header_btn'),
			popupForm = document.querySelectorAll('.popup_form'),
			phone = document.querySelectorAll('.phone_link')[0],
			popupEngineer = document.querySelector('.popup_engineer');
headerBtn.addEventListener('click', function () {
	popupEngineer.style.display = 'block';
	document.body.style.overflow = 'hidden';
	popupEngineer.addEventListener('click', function (event) {
		let target = event.target;
		if (target.closest('.popup_engineer') && !target.closest(".popup_form")) {
			event.stopPropagation();
			popupEngineer.style.display = 'none';
		}
	});
});
setTimeout(function(){
popup.style.display = 'block';
popup.addEventListener('click', function (event) {
		let target = event.target;
		if (target.closest('.popup') && !target.closest(".popup_form")) {
			event.stopPropagation();
			popup.style.display = 'none';
		}
	});
},60000);
phone.addEventListener('click', function(){
popup.style.display = 'block';
popup.addEventListener('click', function (event) {
		let target = event.target;
		if (target.closest('.popup') && !target.closest(".popup_form")) {
			event.stopPropagation();
			popup.style.display = 'none';
		}
	});
});
}
module.exports = form;