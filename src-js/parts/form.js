function form() {
	let popup = document.querySelector('.popup'),
			headerBtn = document.querySelector('.header_btn'),
			popupForm = document.querySelectorAll('.popup_form'),
			phone = document.querySelectorAll('.phone_link'),
			popupEngineer = document.querySelector('.popup_engineer');

headerBtn.addEventListener('click', function (event) {
	event.preventDefault();
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
let popupClose = document.querySelector('.popup_close');
popupClose.style.display = "block";
document.body.style.overflow = 'hidden';
popup.addEventListener('click', function (event) {
		let target = event.target;
		if (target.closest('.popup') && !target.closest(".popup_form")) {
			event.stopPropagation();
			popup.style.display = 'none';
		}
	});
},60000);

for (let i=0; i< phone.length; i++) {
	phone[i].addEventListener('click', function (event) {
		let popupClose = document.querySelector('.popup_close');
		event.preventDefault();
		popup.style.display = 'block';
		popupClose.style.display = "block";
		document.body.style.overflow = 'hidden';
		popup.addEventListener('click', function (event) {
			let target = event.target;
			if (target.closest('.popup') && !target.closest(".popup_form")) {
				event.stopPropagation();
				popup.style.display = 'none';
			}
		});
	});
}


	function validate() {
		let inputCont = document.querySelectorAll('.popup_input-phone');
		for (let i = 0; i < inputCont.length; i++) {
			inputCont[i].setAttribute('maxLenght', 12);
			tell(inputCont[i]);
		}
	}
	validate();

	function tell(inp) {
		inp.addEventListener('input', () => {
			if (!/^\+\d*$/.test(inp.value)) {
				inp.value = '+';
			}
		});
		inp.addEventListener('keypress', event => {
			if (!/\d/.test(event.key)) {
				event.preventDefault();
			}
		});
	}


let message = {
	loading: "Загрузка...",
	success: 'Спасибо! Мы скоро с вами свяжемся!',
	failure: 'Что-то пошло не так'
};

let form = document.querySelectorAll('.main_form'),
		formContact = document.querySelectorAll('.popup_form-contact'),
		input = document.getElementsByTagName('input'),	
		statusMessage = document.createElement('div');
statusMessage.classList.add('status');

	function sendForm(elem) {
		elem.addEventListener('submit', function (e) {
			e.preventDefault();
			elem.appendChild(statusMessage);
			let formData = new FormData(elem);

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
			postData(formData)
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => statusMessage.innerHTML = message.success)
				.catch(() => statusMessage.innerHTML = message.failure)
				.then(clearInput);
		});
	}
	for (let i=0; i<form.length; i++) {
	sendForm(form[i]);
	}
	for (let i=0;i<formContact.length; i++) {
	sendForm(formContact[i]);
	}
}
module.exports = form;