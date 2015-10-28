function caeserCipher (message, shift) {
	
	// set default value for shift
	if (typeof shift === 'undefined') {
		shift = -3;
	}

	// wrap letters if they are out of bounds
	var wrapLetters = function (code, codeCase) {
		if ((code > 90 && codeCase === 'upper') || code > 122) {
			return code - 26;
		} else if ((code < 97 && codeCase === 'lower') || code < 65) {
			return code + 26;
		} else {
			return code;
		}
	}

	// shift the letters
	var letters = message.split('').map(function (letter) {

		// get character code for letter
		var code = letter.charCodeAt(0);

		// only shift letter if it as part of alphabet
		if ((letter >= 'A' && letter <= 'Z') || (letter >= 'a' && letter <= 'z')) {
			
			// apply shift
			code = code + shift;

			// understand case boundaries
			var codeCase = '';
			if (letter >= 'A' && letter <= 'Z') {
				codeCase = 'upper';
			} else {
				codeCase = 'lower';
			}

			// apply wrap to letters
			code = wrapLetters(code, codeCase);
		}

		// return ciphered word
		return String.fromCharCode(code);
	});

	// return the string
	return letters.join('');
}


var encrypted = caeserCipher("brutus");
console.log(encrypted);

var encryptedWithPunctuation = caeserCipher("Et tu, brute?", 6);
console.log(encryptedWithPunctuation);

console.log(caeserCipher("The Ides of March", 5));

console.log('A'.charCodeAt(0), "\n", 'Z'.charCodeAt(0), "\n", "a".charCodeAt(0), "\n", "z".charCodeAt(0))




