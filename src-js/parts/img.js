function img() {
	let img = document.querySelector('.block-img'),
			small = document.querySelectorAll('.small');
img.addEventListener('click', function(event){
					 event.preventDefault();
					let target = event.target;
					console.log(target);
		if (target && ( target.classList.contains('small') || target.classList.contains('lupa'))) {
						let popup = document.querySelector('.popup'),
								contant = document.getElementById('popup_form'),
								div = document.createElement('img');
							let parent = target.parentNode;
							div.src = parent.href;
							popup.appendChild(div);
							div.classList.add('popup_content');
							div.style.width = "auto";
							div.style.maxHeight = "560px";
						popup.style.display = 'block';
						popup.addEventListener('click', function (event) {
							let target = event.target;
							if (target.closest('.popup')) {
								event.stopPropagation();
								popup.style.display = 'none';
								div.style.display = 'none';
							}
						});
					}
		 });
}

module.exports = img;