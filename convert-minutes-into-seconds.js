function minutesToSeconds(min) {
	if (typeof min !== "number") return NaN;

	return 60 * min;
}

console.log(
	`10 minutes is ${minutesToSeconds(10)} seconds.`
);