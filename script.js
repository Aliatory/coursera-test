let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {

  let firstLetter = names[i].charAt(0).toLowerCase();
  
  if (firstLetter == 'j') {
		byeSpeaker(names[i]);
			} 
	 else {
		helloSpeaker(names[i]); 
			}
		}
