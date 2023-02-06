const personality = document.getElementById("personality");
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
const age = document.getElementById("age");
const ageB = document.getElementById("ageB");
const ageF = document.getElementById("ageF");
var showYears = true;
var showMonths = false;
var showDays = false;
var showHours = false;
var showMinutes = false;
var showSeconds = false;
const height = document.getElementById("height");
const heightB = document.getElementById("heightB");
const heightF = document.getElementById("heightF");
var showFt = true;
var showCm = false;
const weight = document.getElementById("weight");
const weightB = document.getElementById("weightB");
const weightF = document.getElementById("weightF");
var showKg = true;
var showLbs = false;

function setAge() {
	var DoB = new Date(2000, 0, 1);
	var Today = new Date();
	var fullAgeYears = Math.floor(Today.getFullYear() - DoB.getFullYear());
	var fullAgeMonths = Math.floor(
		fullAgeYears * 12 + (Today.getMonth() - DoB.getMonth())
	);
	var fullAgeDays = Math.floor((Today - DoB) / (1000 * 60 * 60 * 24));
	var fullAgeHours = Math.floor((Today - DoB) / (1000 * 60 * 60));
	var fullAgeMinutes = Math.floor((Today - DoB) / (1000 * 60));
	var fullAgeSeconds = Math.floor((Today - DoB) / 1000);
	if (showMonths) {
		age.textContent = fullAgeMonths + " Months";
	} else if (showDays) {
		age.textContent = fullAgeDays + " Days";
	} else if (showHours) {
		age.textContent = fullAgeHours + " Hrs";
	} else if (showMinutes) {
		age.textContent = fullAgeMinutes + " Min";
	} else if (showSeconds) {
		age.textContent = fullAgeSeconds + " Sec";
	} else if (showYears) {
		age.textContent = fullAgeYears + " Years";
	}
}
function setHeight() {
	if (showFt) {
		height.textContent = "5'0";
	} else if (showCm) {
		height.textContent = "153cm";
	}
}
function setWeight() {
	if (showKg) {
		weight.textContent = "38kg";
	} else if (showLbs) {
		weight.textContent = "83lbs";
	}
}
if (age) {
	setAge();
	ageF.addEventListener("click", () => {
		if (showYears) {
			showMonths = true;
			showYears = false;
		} else if (showMonths) {
			showDays = true;
			showMonths = false;
		} else if (showDays) {
			showHours = true;
			showDays = false;
		} else if (showHours) {
			showMinutes = true;
			showHours = false;
		} else if (showMinutes) {
			showSeconds = true;
			showMinutes = false;
		} else {
			showYears = true;
			showSeconds = false;
		}
		setAge();
	});
	ageB.addEventListener("click", () => {
		if (showYears) {
			showSeconds = true;
			showYears = false;
		} else if (showSeconds) {
			showMinutes = true;
			showSeconds = false;
		} else if (showMinutes) {
			showHours = true;
			showMinutes = false;
		} else if (showHours) {
			showDays = true;
			showHours = false;
		} else if (showDays) {
			showMonths = true;
			showDays = false;
		} else {
			showYears = true;
			showMonths = false;
		}
		setAge();
	});
}
if (height) {
	setHeight();
	heightF.addEventListener("click", () => {
		if (showFt) {
			showFt = false;
			showCm = true;
		} else if (showCm) {
			showFt = true;
			showCm = false;
		}
		setHeight();
	});
	heightB.addEventListener("click", () => {
		if (showFt) {
			showFt = false;
			showCm = true;
		} else if (showCm) {
			showFt = true;
			showCm = false;
		}
		setHeight();
	});
}
if (weight) {
	setWeight();
	weightF.addEventListener("click", () => {
		if (showKg) {
			showKg = false;
			showLbs = true;
		} else if (showLbs) {
			showKg = true;
			showLbs = false;
		}
		setWeight();
	});
	weightB.addEventListener("click", () => {
		if (showKg) {
			showKg = false;
			showLbs = true;
		} else if (showLbs) {
			showKg = true;
			showLbs = false;
		}
		setWeight();
	});
}

if (personality) {
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
}
