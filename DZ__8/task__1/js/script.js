
if (confirm('Почати тестування?')) {
   

	// визначаємо довжину масиву
	let amountMarks = parseInt(
		prompt("введіть кількість оцінок учня (5-ти бальна система)", "0")
	);
	const pupilMarks = [];
	let summMarks = 0;
	// пушимо оцінки в масив
	function inputPupilMarks(amountMarks) {
		for (let mark = 0; mark < amountMarks; mark++) {
			let inputMarks = parseInt(prompt("введіть оцінки учня", "0"));
			pupilMarks.push(inputMarks);
			summMarks += inputMarks;
		}
		return {
			pupilMarks,
			summMarks,
		};
	}

	//середня оцінка

	function getAveregePupilMark(summMarks, amountMarks) {
		return (averegaMark = summMarks / amountMarks);
	}

	function getMinScore(pupilMarks) {
		let min = pupilMarks[0];
		for (let i = 1; i < pupilMarks.length; i++) {
			if (pupilMarks[i] < min) {
				min = pupilMarks[i];
			}
		}
		return min;
	}

	function getPupilProgres(pupilMarks) {
		const minMark = getMinScore(pupilMarks);
		let category;
		switch (minMark) {
			case 1:
				category = "погано";
				break;
			case 2:
				category = "двієшник";
				break;
			case 3:
				category = "трієшник";
				break;
			case 4:
				category = "хорошист";
				break;
			case 5:
				category = "відмінник";
				break;
			default:
				throw new Error("такої оцінки не існує");
		}

		return category;
	}

	let createArrayOfMarks = inputPupilMarks(amountMarks);

	const progres = getPupilProgres(pupilMarks);
	document.write(`${progres}`);

	let averege = getAveregePupilMark(summMarks, amountMarks);
	document.write(`середня оцінка ${averege}<br>`);

}