// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
	let fac = 1;

	if (num <= 1) {
		return 1;
	} else {
		for (let i = 1; i <= num; i++) {
			console.log(i, num);
			fac = fac * i;
		}
		console.log(fac);
	}

	return fac;
};

factorial();
