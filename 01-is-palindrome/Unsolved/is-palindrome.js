// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
	const reverse = [...str].reverse().join("");
	if (str === reverse) {
		return true;
	} else {
		return false;
	}
};
