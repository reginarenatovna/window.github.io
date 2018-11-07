function img() {
	let img = document.querySelector('.block-img'),
		small = document.querySelectorAll('.small');
	img.addEventListener('click', function (event) {
		event.preventDefault();
		let target = event.target;
		if (target && target.classList.contains('lupa')) {
			let popup = document.querySelector('.popup'),
				contant = document.getElementById('popup_form'),
				popupClose = document.querySelector('.popup_close'),
				div = document.createElement('img');
			let parent = target.parentNode;
			div.src = parent.href;
			popup.appendChild(div);
			div.classList.add('popup_content');
			div.style.width = "419px";
			div.style.height = "560px";
			popupClose.style.display = "none";
			popup.style.display = 'block';
			popup.addEventListener('click', function (event) {
				let target = event.target;
				if (target.closest('.popup') && !target.closest('.popup_content')) {
					event.stopPropagation();
					popup.style.display = 'none';
					div.style.display = 'none';
				}
			});
		}
	});
}

module.exports = img;