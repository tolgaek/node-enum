/*
 * This is functionally exactly the same as micro-enum.js, but documented, unrolled, and with unnecessary bits re-added to help
 * make it more easily understood. Note, also, that this is not the same as if whitespace had been added to micro-enum.js
 * 
 * !! DO NOT USE THIS in a production environment !!
 * This file is 3,076 Bytes, and micro-enum.js is only 94 Bytes.
 */


/**
 * This is a very small, fully-functional JavaScript enum implementation.
 * It can be used in every way an enum should be usable.
 * 
 * 
 * Creating an enum:
 * 		Simply create a new variable with an arbitrary name, and set it equal to the return of the Enum function. Inside the
 * 		Enum function, you list any number of keys as strings. The text in these strings have the same constraints as JavaScript
 * 		variable names. No exception will be thrown if you use whitespace or any other special character, but it will also not
 * 		be accessible as it should be.
 * 		
 * 		example:
 * 			var days = Enum("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
 * 
 * 
 * What you get:
 * 		variables inside your enum
 * 		example:
 * 			days.Sunday
 * 			days.Monday
 * 			days.Tuesday
 * 			days.Wednesday
 * 			days.Thursday
 * 			days.Friday
 * 			days.Saturday
 * 		
 * 		An array of all values in your enum
 * 		example:
 * 			days.all
 * 
 * 		An array of all keys in your enum
 * 		example:
 * 			days.keys
 * 
 * 
 * Using an enum:
 * 		Using an enum with this should be as easy as in most languages with native enumerated types!
 * 		
 * 		example:
 * 			switch(someValue)
 * 			{
 * 				case days.Monday:
 * 					return "That's a hard one...";
 * 				
 * 				case days.Wednesday:
 * 					return "Hump day!!";
 * 				
 * 				case days.Friday:
 * 					return "Time to party at the Pwawty Cloughb!";
 * 				
 * 				default:
 * 					if (days.all.length <= someValue) // if someValue is in our enum
 * 						throw "Sorry, " + days.keys[someValue] + " is not supported.";
 * 					else
 * 						throw "You must use a value in the 'days' enum.";
 * 			}
 * 
 * 
 * @param [arguments] a list of strings. This is a vararg, not an array, so you don't have to worry about putting it in an array
 * 
 * @license GPLv3
 * @author Kyli Rouge of Blue Husky Studios
 * @since 2014-04-08
 * @version 1.0.0
 */

const Enum = (...elements) => {
	const s = {
		all: [],
		keys: elements
	}

	elements.map((el, i) => {
		s[el] = s.all[i] = i
	})

	return s
}
