// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
	const arr = str.split(" ");
	console.log(arr);
	let capitalized = "";

	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

		capitalized = arr.join(" ");
		console.log(capitalized);
	}

	return capitalized;
};

titleCase();
