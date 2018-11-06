function calc() {
	let btn = document.querySelectorAll('.glazing_price_btn'),
			popupCalc = document.querySelector('.popup_calc'),
			popupBtn = document.querySelector('.popup_calc_button'),
			popupCalcProfile = document.querySelector('.popup_calc_profile'),
			cheakBox = document.querySelectorAll('.checkbox'),
			popupBtnProfile = document.querySelector('.popup_calc_profile_button');
	for (let i=0; i<btn.length; i++) {
		btn[i].addEventListener('click', function(){
			popupCalc.style.display = 'block';
			document.body.style.overflowY = 'hidden';
			popupCalc.addEventListener('click', function(event){
				let target = event.target;
				if ( target.closest(".popup_calc_close") ) {
					event.stopPropagation();
					popupCalc.style.display = 'none';
					let inpCalc = document.querySelectorAll('.popup_calc input');
					console.log(inpCalc);
					for (let i = 0; i < inpCalc.length; i++) {
						inpCalc[i].value = '';
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
			let inputCalcEnd = document.querySelectorAll('.popup_calc_end input');
			event.stopPropagation();
			popupCalcEnd.style.display = 'none';
			for (let i = 0; i < inpCalc.length; i++) {
				inputCalcEnd[i].value = '';
			}
			}
	});
});

let balconIcons = document.querySelector('.balcon_icons'),
	 	typeBigWindow = document.querySelectorAll('.big_window'),
		typeSmallWin = document.querySelectorAll('.tab-window');
	
	// Tabs Calc
	function hidetype_window(a) {
		for (let i = a; i < typeBigWindow.length; i++) {
			typeBigWindow[i].classList.remove("show");
			typeBigWindow[i].classList.add("hide");
		}
		for (let i = a; i < typeSmallWin.length; i++) {
			typeSmallWin[i].classList.remove("active_type_window");
			typeSmallWin[i].classList.add("not_active_type_window");
		}
	}
	hidetype_window(1);

	function showtype_window(b) {
		if (typeBigWindow[b].classList.contains("hide")) {
			typeBigWindow[b].classList.remove("hide");
			typeBigWindow[b].classList.add("show");
		}
		if (typeSmallWin[b].classList.contains("not_active_type_window")) {
			typeSmallWin[b].classList.remove("not_active_type_window");
			typeSmallWin[b].classList.add("active_type_window");
		}
	}

		balconIcons.addEventListener('click', function (event) {
			event.preventDefault();
			let target = event.target;
			console.log(target);
			if (target && target.classList.contains('tab-window')) {
				for (let i = 0; i < typeSmallWin.length; i++) {
					if (target == typeSmallWin[i]) {
						hidetype_window(0);
						showtype_window(i);
						break;
					}
				}
			}
		});

}
module.exports = calc;