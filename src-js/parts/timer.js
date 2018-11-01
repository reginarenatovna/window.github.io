function timer() {
	const deadline = '2019-07-04';
		function getTimeRemaining(endtime) {
			if (Date.parse(endtime) > Date.parse(new Date())) {
				let t = Date.parse(endtime) - Date.parse(new Date()),
					seconds = Math.floor((t / 1000) % 60),
					minutes = Math.floor((t / 1000 / 60) % 60),
					hours = Math.floor((t / (1000 * 60 * 60*24))%24),
					days = Math.floor(t/(1000*60*60*24));
				if (hours < 10) {
					hours = [`0 ${ hours}`];
				}
				if (minutes < 10) {
					minutes = [`0 ${minutes} `];
				}
				if (seconds < 10) {
					seconds = [`0 ${seconds} `];
				}
				if (days  < 10 ) {
					days = [`0 ${days} `];
				}
				return {
					'total': t,
					'days': days,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};
			} else {
				let t = 0;
				let seconds = 0,
					minutes = 0,
					n = 0,
					hours = 0,
					days = 0;
				if (days < 10) {
						days = `${n} ${days}`;
				}
				if (hours < 10) {
					hours = `${n} ${hours}`;
				}
				if (minutes < 10) {
					minutes = `${n} ${minutes}`;
				}
				if (seconds < 10) {
					seconds = `${n} ${seconds}`;
				}
				return {
					'total': t,
					'days': days,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};
			}
		}

		function setClock(id, endtime) {
			const timer = document.getElementById(id),
				days = document.querySelector('.days'),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');
			let timeInterval = setInterval(updateClock, 1000);

			function updateClock() {
				let t = getTimeRemaining(endtime);
				days.textContent = t.days;
				hours.textContent = t.hours;
				minutes.textContent = t.minutes;
				seconds.textContent = t.seconds;
				if (t.total <= 0) {
					clearInterval(timeInterval);
				}
			}
		}
		setClock('timer', deadline);
}

module.exports = timer;