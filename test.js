'use strict';

var llrp = require('./index.js');

var reader = new llrp({
	ipaddress: '10.3.5.217',
	port: 5084,
	log:true
	// isReaderConfigSet:true,
	// isStartROSpecSent:true
});

reader.connect();

setTimeout(function () {



}, 3000);

reader.on('timeout', function () {
	console.log('timeout');
});

reader.on('disconnect', function () {
	console.log('disconnect');
});

reader.on('error', function (error) {
	console.log('error: ' + JSON.stringify(error));
});

reader.on('didSeeTag', function (tag) {

	console.log('TAG: ' + tag);
});
