let numberI = document.getElementById("number-i");
let numberS = document.getElementById("number-s");
let numberF = document.getElementById("number-f");
let numberP = document.getElementById("number-p");
let numberT = document.getElementById("number-t");
let counterI = 0;
let counterS = 0;
let counterF = 0;
let counterP = 0;
let counterT = 0;

setInterval(() => {
	if (counterI == 93) {
		clearInterval;
	} else {
		counterI += 1;
		numberI.innerHTML = `${counterI}%`;
	}
}, 22);

setInterval(() => {
	if (counterS == 67) {
		clearInterval;
	} else {
		counterS += 1;
		numberS.innerHTML = `${counterS}%`;
	}
}, 28);

setInterval(() => {
	if (counterF == 60) {
		clearInterval;
	} else {
		counterF += 1;
		numberF.innerHTML = `${counterF}%`;
	}
}, 32);

setInterval(() => {
	if (counterP == 54) {
		clearInterval;
	} else {
		counterP += 1;
		numberP.innerHTML = `${counterP}%`;
	}
}, 35);

setInterval(() => {
	if (counterT == 76) {
		clearInterval;
	} else {
		counterT += 1;
		numberT.innerHTML = `${counterT}%`;
	}
}, 27);
