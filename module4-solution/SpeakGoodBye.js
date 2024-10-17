 (function (window) {
	var speakWord = "Good Bye";
	byeSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker; 
	
	})(window);