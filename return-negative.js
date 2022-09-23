function returnNegative(num) {
	if (typeof num !== "number") return NaN;

	return num - (num + num);
}

console.log(
	`You should get ${returnNegative(100)} in exams.`
);