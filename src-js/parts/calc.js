function calc() {
	let btn = document.querySelectorAll('.glazing_price_btn'),
			popupCalc = document.querySelector('.popup_calc'),
			balconIcons = document.querySelector('.balcon_icons');
	for (let i=0; i<btn.length; i++) {
		btn[i].addEventListener('click', function(){
			popupCalc.style.display = 'block';
			popupCalc.addEventListener('click', function(event){
				let target = event.target;
				if ( target.closest(".popup_calc_close") ) {
					event.stopPropagation();
					popupCalc.style.display = 'none';
				}
			});
		});
		balconIcons.addEventListener('click', function(){
			let target = event.target;
			if (target){
				
			}
		});
	}
}
module.exports = calc;