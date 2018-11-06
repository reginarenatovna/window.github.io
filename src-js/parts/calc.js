function calc() {
	let btn = document.querySelectorAll('.glazing_price_btn'),
			popupCalc = document.querySelector('.popup_calc'),
			popupCalcInput = document.querySelectorAll('.popup_calc-input'),
			popupBtn = document.querySelector('.popup_calc_button'),
			popupCalcProfile = document.querySelector('.popup_calc_profile'),
			cheakBox = document.querySelectorAll('.checkbox'),
			popupBtnProfile = document.querySelector('.popup_calc_profile_button');
	let objCalc = {	};
	for (let i=0; i<btn.length; i++) {
		btn[i].addEventListener('click', function(){
			popupCalc.style.display = 'block';
			document.body.style.overflowY = 'hidden';
			let inputCalc = document.querySelectorAll('.popup_calc input');
					inputCalc[0].value = objCalc.width;
					inputCalc[1].value = objCalc.hight;
			popupCalc.addEventListener('click', function(event){
				let target = event.target;
				if ( target.closest(".popup_calc_close") ) {
					let inputCalc = document.querySelectorAll('.popup_calc input');
					event.stopPropagation();
					popupCalc.style.display = 'none';
				  objCalc = {};
					for (let i = 0; i < inputCalc.length; i++) {
						inputCalc[i].value = '';
					}
				}
			});
		});
	}
	function validate() {
		let inputCont = document.querySelectorAll('.popup_calc-input');
		for (let i = 0; i < inputCont.length; i++) {
			inputCont[i].setAttribute('maxLenght', 12);
			tell(inputCont[i]);
		}
	}
	validate();

	function tell(inp) {
		inp.addEventListener('input', () => {
			if (!/^\+\d*$/.test(inp.value)) {
			}
		});
		inp.addEventListener('keypress', event => {
			if (!/\d/.test(event.key)) {
				event.preventDefault();
			}
		});
	}
popupBtn.addEventListener('click', function(){
	popupCalc.style.display = 'none';
	popupCalcProfile.style.display = 'block';
	let type = document.q
	popupCalcProfile.addEventListener('click', function (event) {
		let target = event.target;
		if (target.closest(".popup_calc_profile_close")) {
			event.stopPropagation();
			popupCalcProfile.style.display = 'none';
			objCalc = {};
		}
	});
});
for (let i=0; i<cheakBox.length; i++) {
	cheakBox[i].addEventListener('click', function(){
		cheakBox.forEach((item) => {
			if (item !== checkbox) {
				item.checked = false;
			}
	});
});
}
popupBtnProfile.addEventListener('click', function(){
let popupCalcEnd = document.querySelector('.popup_calc_end');
	popupCalcProfile.style.display = 'none';
	popupCalcEnd.style.display = 'block';

	popupCalcEnd.addEventListener('click', function (event) {
		let target = event.target;
		if (target.closest(".popup_calc_end_close")) {
			let inpCalc = document.querySelectorAll('.popup_calc_end input');
			event.stopPropagation();
			popupCalcEnd.style.display = 'none';
			objCalc = {};
			for (let i = 0; i < inpCalc.length; i++) {
				inpCalc[i].value = '';
			}
			}
	});
});
let balconIcons = document.querySelector('.balcon_icons') 
balconIcons.addEventListener('click', function(){
	let target = event.target;
	if (target && target.classList.container('.balcon_icons a img')) {
			function showSlides(n) {
				slides.forEach((item) => item.style.display = 'none');
				dots.forEach((item) => item.classList.remove('dot-active'));

				slides[slideIndex - 1].style.display = 'block';
				dots[slideIndex - 1].classList.add('dot-active');
			}
	}
});
}
module.exports = calc;