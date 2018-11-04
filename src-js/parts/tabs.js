function tabs() {
		let tab = document.querySelectorAll('.info-tab'),
				info = document.querySelector('.glazing_slider'),
				a = document.querySelectorAll('.glazing a'),
				tabContant = document.querySelectorAll('.info-tabcontent');

		function hideTabContent(a) {
			for (let i = a; i < tabContant.length; i++) {
				tabContant[i].classList.remove('show');
				tabContant[i].classList.add('hide');
			}
		}
		hideTabContent(1);

		function showTabContent(b) {
			if (tabContant[b].classList.contains('hide')) {
				tabContant[b].classList.remove('hide');
				tabContant[b].classList.add('show');
			}
		}

		function noactiveTabContent(s) {
			for (let i = s; i < a.length; i++) {
				a[i].classList.remove('active');
				a[i].classList.add('noactive');
			}
		}
		noactiveTabContent(1);

		function activeTabContent(c) {
			if (a[c].classList.contains('noactive')) {
				a[c].classList.remove('noactive');
				a[c].classList.add('active');
			}
		}
		

		info.addEventListener('click', function (event) {
			let target = event.target;
			if (target && target.classList.contains('info-tab')) {
				for (let i = 0; i < tab.length; i++) {
					if (target == tab[i]) {
						hideTabContent(0);
						showTabContent(i);
						noactiveTabContent(0);
						activeTabContent(i);
						break;
					} 
				}
			}
		});
}
module.exports = tabs;