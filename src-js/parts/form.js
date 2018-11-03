function form() {
	let popup = document.querySelector('.popup'),
			headerBtn = document.querySelector('.header_btn'),
			popupForm = document.querySelectorAll('.popup_form'),
			phone = document.querySelectorAll('.phone_link'),
			popupEngineer = document.querySelector('.popup_engineer');
setTimeout(function(){
popup.style.display = 'block';
let close = popup.addEventListener('click', function(event){
	if (event.target && event.target.tagName == 'STRONG') {
		popup.style.display = 'none';
	} 
});
},60000);
headerBtn.addEventListener('click', function(){
popupEngineer.style.display = 'block';
document.body.style.overflow = 'hidden';
popupEngineer.addEventListener('click', function (event) {
	let target = event.target;
	if (target.closest('.popup_engineer') &&  !target.closest(".popup_form")){
		event.stopPropagation();
		popupEngineer.style.display = 'none';
	}
});
});
}
module.exports = form;