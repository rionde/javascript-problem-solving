function num_of_digits(num) {
	if (typeof num !== "number") return NaN;

	return num.toString().length;
}

console.log(num_of_digits(402304)) // 6 Digits