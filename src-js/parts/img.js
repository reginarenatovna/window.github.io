function img() {
	let img = document.querySelectorAll('lupa');
		for (let i=0; i<img.length; i++) {
			img[i].addEventListener('click', function(event){
					img.style.width = 'auto';
					img.style.height = 'auto';
					let target = event.target;
					if (target.closest('.lupa') ) {
						event.stopPropagation();
						img[i].style.display = 'none';
					}
			});
		}
}

module.exports = img;