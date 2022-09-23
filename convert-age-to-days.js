function calcAgeToDays(age) {
	if (typeof age !== "number") return NaN;

	if (age.toString().startsWith("-")) {
		throw new Error("Only positive numbers are allowed.");
	}

	return 365 * age;
}

console.log(
	`He is ${calcAgeToDays(20)} days old.`
);