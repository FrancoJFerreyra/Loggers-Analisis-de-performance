const randomNumber = (quantity) => {
	parseInt(quantity);
	const numbers = {};

	for (let i = 0; i < quantity; i++) {
		let num = Math.floor(Math.random() * (1000 - 0 + 1));

		if (numbers[num]) {
			numbers[num]++;
            console.log(numbers);
		} else {
			numbers[num] = 1;
		}
	}

	return numbers;
};

export default randomNumber;