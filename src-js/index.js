window.addEventListener('DOMContentLoaded',  function(){

	'use strict';
	let timer = require('./parts/timer.js'),
			form = require('./parts/form.js'),
			tabs = require('./parts/tabs.js'),
			img = require('./parts/img.js'),
			calc =require('./parts/calc.js');
	timer();
	form();
	tabs();
	img();
	calc();
});