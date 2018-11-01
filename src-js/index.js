window.addEventListener('DOMContentLoaded',  function(){

	'use strict';
	let timer = require('./parts/timer.js'),
			form = require('./parts/form.js');
	timer();
	form();
});