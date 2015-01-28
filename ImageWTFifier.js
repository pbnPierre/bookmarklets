javascript:(function(){
	var imageholders = [
			'http://placekitten.com/',
			'http://placeburger.net/',
			'http://placephant.com/',
			'http://placeponi.es/',
			'http://beerhold.it/',
			'http://www.placeskull.com/',
			'http://www.placeboobs.com/',
			'http://www.nicenicejpg.com/',
			'http://baconmockup.com/',
			'http://placebear.com/',
			'http://placesheen.com/',
			'http://placecreature.com/',
			'http://place-hoff.com/',
			'http://www.fillmurray.com/',
			'http://www.placecage.com/'
		];
	var placer = imageholders[Math.floor(Math.random()*imageholders.length)];
	Array.prototype.slice.call(document.images).map(function(element){
		var height = element.height;var width = element.width;		
		if (height !== 0 && width !== 0){
			element.setAttribute('src', placer + width + '/' + height
				);
		};
	})
	;
}());﻿