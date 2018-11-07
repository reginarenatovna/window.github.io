function calc() {
	let btn = document.querySelectorAll('.glazing_price_btn'),
		popupCalc = document.querySelector('.popup_calc'),
		popupBtn = document.querySelector('.popup_calc_button'),
		popupCalcProfile = document.querySelector('.popup_calc_profile'),
		cheakBox = document.querySelectorAll('.checkbox'),
		popupBtnProfile = document.querySelector('.popup_calc_profile_button'),
		input = document.getElementsByTagName('input');
	let obj = {};
	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', function () {
			popupCalc.style.display = 'block';
			document.body.style.overflow = 'hidden';
			popupCalc.addEventListener('click', function (event) {
				let target = event.target;
				if (target.closest(".popup_calc_close")) {
					event.stopPropagation();
					popupCalc.style.display = 'none';
					obj = {};
					for (let i = 0; i < input.length; i++) {
						input[i].value = '';
					}
				}
			});
		});
	}
	let inpCalc = document.querySelectorAll('.popup_calc-input');
	if ((inpCalc[0].value !== '' && inpCalc[1].value !== '') || (inpCalc[0].value !== 0 && inpCalc[1].value !== 0)) { 
		
	} else {
		popupBtn.disabled = false;
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
	 popupBtn.addEventListener('click', function () {
			popupCalc.style.display = 'none';
		 let inpCalc = document.querySelectorAll('.popup_calc-input');
			 popupCalcProfile.style.display = 'block';
			 popupCalc.style.display = 'none';
			 let e = document.getElementById("view_type");
			 let strUser = e.options[e.selectedIndex].text;
			 obj.type = strUser;
			 let width = inpCalc[0].value,
				 hight = inpCalc[1].value;
			 obj.width = width;
			 obj.hight = hight;
			 popupCalcProfile.addEventListener('click', function (event) {
				 let target = event.target;
				 if (target.closest(".popup_calc_profile_close")) {
					 event.stopPropagation();
					 popupCalcProfile.style.display = 'none';
					 obj = {};
				 }
			 });
		});
	
	
	popupBtnProfile.addEventListener('click', function () {
		let popupCalcEnd = document.querySelector('.popup_calc_end');
		let checkBox = document.querySelectorAll('.checkbox');
		if (checkBox[0].checked == true) {
			obj.profile = 'Холодное';
		} else if (checkBox[1].checked == true) {
			obj.profile = 'Теплое';
		}
		popupCalcProfile.style.display = 'none';
		popupCalcEnd.style.display = 'block';
		popupCalcEnd.addEventListener('click', function (event) {
			let target = event.target;
			if (target.closest(".popup_calc_end_close")) {
				event.stopPropagation();
				popupCalcEnd.style.display = 'none';
				obj = {};
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
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
					obj.typeWindow = target;
					break;
				}
			}
		}
	});

	let btnEnd = document.querySelector('.btn_end');
	btnEnd.addEventListener('click', function(){
		let inputEnd = document.querySelectorAll('.input_end');
		obj.name = inputEnd[0].value;
		obj.phone = inputEnd[1].value;
	});
	let message = {
		loading: "Загрузка...",
		success: 'Спасибо! Мы скоро с вами свяжемся!',
		failure: 'Что-то пошло не так'
	};
	let formEnd = document.querySelector('.popup_form-contact_end');
	function send(elem) {
		elem.addEventListener('submit', function (e) {
			e.preventDefault();
			let statusMessage = document.createElement('div'),
				input = document.getElementsByTagName('input');
			elem.appendChild(statusMessage);
			let obJson = JSON.stringify(obj);

			function postData(data) {
				return new Promise(function (resolve, reject) {
					let request = new XMLHttpRequest();
					request.open('POST', 'server.php');
					request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					request.onreadystatechange = function () {
						if (request.readyState < 4) {
							resolve();
						} else if (request.readyState === 4) {
							if (request.status === 200 && request.status < 300) {
								resolve();
							} else {
								reject();
							}
						}
					};
					request.send(data);
				});
			} // end postData
			function clearInput() {
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}
			postData(obJson)
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => statusMessage.innerHTML = message.success)
				.catch(() => statusMessage.innerHTML = message.failure)
				.then(clearInput);
		});
	}
	send(formEnd);
	console.log(obj);
}
module.exports = calc;