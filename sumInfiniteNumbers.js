function sum(...args) {
	return args.filter(v => typeof v === "number")
	.reduce((acc, num) => acc + num);
}

console.log(
	`The sum of 20, 40, 60, 80 is: ${sum(20, 40, 60, 80)}.`
);