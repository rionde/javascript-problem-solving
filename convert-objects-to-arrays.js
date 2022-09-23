function toArray(obj) {
	const arr = [];
	Object.keys(obj).forEach(key => {
		arr.push([key, obj[key]]);
	});

	return arr;
}

console.log(
	toArray({ shrimp: 15, tots: 12 })
);