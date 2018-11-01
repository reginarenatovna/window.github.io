function form() {
	let popup = document.querySelector('.popup'),
			close = document.querySelectorAll('.popup_close'),
			headerBtn = document.querySelector('.header_btn'),
			popupDialog = document.querySelectorAll('popup_dialog'),
			popupEngineer = document.querySelector('.popup_engineer');
setTimeout(function(){
popup.style.display = 'block';
close.addEventListener('click', function () {
		popup.style.display = 'none';
		document.body.style.overflow = 'hidden';
});
},60000);
headerBtn.addEventListener('click', function(){
popupEngineer.style.display = 'block';
document.body.style.overflow = 'hidden';
});
// for (let i = 0; i < popupDialog.length; i++) {
// 		popupDialog[i].addEventListener('click', function(){
// 		popup.style.display = 'none';
// 		popupEngineer.style.display = 'none';
// 	});
// }
	for (let i = 0; i < close.length; i++) {
		close[i].addEventListener('click', function () {
			popup.style.display = 'none';
			popupEngineer.style.display = 'none';
		});
	}

}

module.exports = form;