javascript:(function(){
	Array.prototype.slice.call(document.images).map(function(element){
		var imageholders = [
			'http://placekitten.com/',
			'http://placeburger.net/',
			'http://placephant.com/',
			'http://beerhold.it/',
			'http://www.placeskull.com/',
			'http://www.placeboobs.com/',
			'http://www.nicenicejpg.com/',
			'http://baconmockup.com/',
			'http://lorempixel.com/',
			'http://placebear.com/',
			'http://placesheen.com/',
			'http://placecreature.com/',
			'http://place-hoff.com/',
			'http://www.fillmurray.com/',
			'http://www.placecage.com/'
		];
		var height = element.height;var width = element.width;
		if (height !== 0 && width !== 0){
			var placer = imageholders[Math.floor(Math.random()*imageholders.length)];
			element.setAttribute('src', placer + width + '/' + height
				);
		};
	})
	;
}());﻿