window.addEventListener('DOMContentLoaded',  function(){

	'use strict';
	let timer = require('./parts/timer.js'),
			form = require('./parts/form.js'),
			tabs = require('./parts/tabs.js');
	timer();
	form();
	tabs();
});