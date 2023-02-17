const personality = document.getElementById("personality");
const lightnovelspage = document.getElementById("lightnovels");
const home = document.getElementById("home");
const hobbies = document.getElementById("hobbies");
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
var data = {
	lightNovels: [
		{
			name: "Sexiled: My Sexist Party Leader Kicked Me Out, So I Teamed Up With a Mythical Sorceress!",
			url: "https://anilist.co/manga/110411/Sexiled-My-Sexist-Party-Leader-Kicked-Me-Out-So-I-Teamed-Up-With-a-Mythical-Sorceress/",
			img: "Sexiled.jpg",
			status: "completed",
			progressV: 2,
			progressC: 22,
		},
		{
			name: "Didn't I Say to Make My Abilities Average in the Next Life?!",
			url: "https://anilist.co/manga/99102/Didnt-I-Say-to-Make-My-Abilities-Average-in-the-Next-Life/",
			img: "Abilities Average.jpg",
			status: "paused",
			progressV: 11,
			progressC: 110,
		},
		{
			name: "I Shall Survive Using Potions!",
			url: "https://anilist.co/manga/99104/I-Shall-Survive-Using-Potions/",
			img: "Survive Potions.jpg",
			status: "paused",
			progressV: 6,
			progressC: 63,
		},
		{
			name: "I've Been Killing Slimes for 300 Years and Maxed Out My Level",
			url: "https://anilist.co/manga/100068/Ive-Been-Killing-Slimes-for-300-Years-and-Maxed-Out-My-Level/",
			img: "300 Years.jpg",
			status: "paused",
			progressV: 7,
			progressC: 79,
		},
		{
			name: "Kuma Kuma Kuma Bear",
			url: "https://anilist.co/manga/97929/Kuma-Kuma-Kuma-Bear/",
			img: "Kuma Kuma Kuma Bear.jpg",
			status: "reading",
			progressV: 13,
			progressC: 408,
		},
		{
			name: "Reincarnated as a Sword",
			url: "https://anilist.co/manga/97466/Reincarnated-as-a-Sword/",
			img: "Reincarnated as a Sword.jpg",
			status: "paused",
			progressV: 11,
			progressC: 90,
		},
		{
			name: "Skeleton Knight in Another World",
			url: "https://anilist.co/manga/87239/Skeleton-Knight-in-Another-World/",
			img: "Skeleton Knight in Another World.jpg",
			status: "paused",
			progressV: 7,
			progressC: 53,
		},
		{
			name: "So I'm a Spider, So What?",
			url: "https://anilist.co/manga/86406/So-Im-a-Spider-So-What/",
			img: "So Im a Spider, So What.jpg",
			status: "reading",
			progressV: 14,
			progressC: 326,
		},
		{
			name: "That Time I Got Reincarnated as a Slime",
			url: "https://anilist.co/manga/86355/That-Time-I-Got-Reincarnated-as-a-Slime/",
			img: "That Time I Got Reincarnated as a Slime.jpg",
			status: "paused",
			progressV: 15,
			progressC: 120,
		},
		{
			name: "The Weakest Tamer Began a Journey to Pick Up Trash",
			url: "https://anilist.co/manga/118986/The-Weakest-Tamer-Began-a-Journey-to-Pick-Up-Trash/",
			img: "The Weakest Tamer Began a Journey to Pick Up Trash.jpg",
			status: "reading",
			progressV: 1,
			progressC: 75,
		},
		{
			name: "Otome Game no Heroine de Saikyou Survival",
			url: "https://anilist.co/manga/144071/Otome-Game-no-Heroine-de-Saikyou-Survival/",
			img: "Otome Game no Heroine de Saikyou Survival.jpg",
			status: "planning",
			progressV: 0,
			progressC: 0,
		},
		{
			name: "The Magical Revolution of the Reincarnated Princess and the Genius Young Lady",
			url: "https://anilist.co/manga/114920/The-Magical-Revolution-of-the-Reincarnated-Princess-and-the-Genius-Young-Lady/",
			img: "The Magical Revolution of the Reincarnated Princess and the Genius Young Lady.jpg",
			status: "planning",
			progressV: 0,
			progressC: 0,
		},
		{
			name: "Campfire Cooking in Another World with My Absurd Skill",
			url: "https://anilist.co/manga/99049/Campfire-Cooking-in-Another-World-with-My-Absurd-Skill/",
			img: "Campfire Cooking in Another World with My Absurd Skill.jpg",
			status: "paused",
			progressV: 11,
			progressC: 110,
		},
		{
			name: "How NOT to Summon a Demon Lord",
			url: "https://anilist.co/manga/93368/How-NOT-to-Summon-a-Demon-Lord/",
			img: "How NOT to Summon a Demon Lord.jpg",
			status: "paused",
			progressV: 3,
			progressC: 12,
		},
		{
			name: "In the Land of Leadale",
			url: "https://anilist.co/manga/119352/In-the-Land-of-Leadale/",
			img: "In the Land of Leadale.jpg",
			status: "paused",
			progressV: 6,
			progressC: 48,
		},
		{
			name: "My Daughter Left the Nest and Returned an S-Rank Adventurer",
			url: "https://anilist.co/manga/102475/My-Daughter-Left-the-Nest-and-Returned-an-SRank-Adventurer/",
			img: "My Daughter Left the Nest and Returned an S-Rank Adventurer.jpg",
			status: "paused",
			progressV: 4,
			progressC: 66,
		},
		{
			name: "Now I'm a Demon Lord! Happily Ever After with Monster Girls in My Dungeon",
			url: "https://anilist.co/manga/103641/Now-Im-a-Demon-Lord-Happily-Ever-After-with-Monster-Girls-in-My-Dungeon/",
			img: "Now Im a Demon Lord! Happily Ever After with Monster Girls in My Dungeon.jpg",
			status: "planning",
			progressV: 0,
			progressC: 0,
		},
		{
			name: "Overlord",
			url: "https://anilist.co/manga/85976/Overlord/",
			img: "Overlord.png",
			status: "paused",
			progressV: 14,
			progressC: 96,
		},
		{
			name: "Reborn as a Vending Machine, I Now Wander the Dungeon",
			url: "https://anilist.co/manga/97406/Reborn-as-a-Vending-Machine-I-Now-Wander-the-Dungeon/",
			img: "Reborn as a Vending Machine, I Now Wander the Dungeon.jpg",
			status: "paused",
			progressV: 3,
			progressC: 83,
		},
		{
			name: "Tensei Kyuuketsuki-san wa Ohirune ga Shitai",
			url: "https://anilist.co/manga/100760/Tensei-Kyuuketsukisan-wa-Ohirune-ga-Shitai/",
			img: "Tensei Kyuuketsuki-san wa Ohirune ga Shitai.jpg",
			status: "paused",
			progressV: 3,
			progressC: 65,
		},
		{
			name: "The Alchemist Who Survived Now Dreams of a Quiet City Life",
			url: "https://anilist.co/manga/101738/The-Alchemist-Who-Survived-Now-Dreams-of-a-Quiet-City-Life/",
			img: "The Alchemist Who Survived Now Dreams of a Quiet City Life.jpg",
			status: "paused",
			progressV: 2,
			progressC: 17,
		},
		{
			name: "The Combat Baker and Automaton Waitress",
			url: "https://anilist.co/manga/99377/The-Combat-Baker-and-Automaton-Waitress/",
			img: "The Combat Baker and Automaton Waitress.jpg",
			status: "paused",
			progressV: 2,
			progressC: 20,
		},
		{
			name: "The Saga of Tanya the Evil",
			url: "https://anilist.co/manga/94846/The-Saga-of-Tanya-the-Evil/",
			img: "The Saga of Tanya the Evil.jpg",
			status: "paused",
			progressV: 4,
			progressC: 20,
		},
		{
			name: "Wandering Witch: The Journey of Elaina",
			url: "https://anilist.co/manga/98741/Wandering-Witch-The-Journey-of-Elaina/",
			img: "Wandering Witch The Journey of Elaina.jpg",
			status: "planning",
			progressV: 0,
			progressC: 0,
		},
		{
			name: "Welcome to the Outcast’s Restaurant!",
			url: "https://anilist.co/manga/123271/Welcome-to-the-Outcasts-Restaurant/",
			img: "Welcome to the Outcast’s Restaurant!.jpg",
			status: "paused",
			progressV: 2,
			progressC: 21,
		},
		{
			name: "A Lily Blooms in Another World",
			url: "https://anilist.co/manga/121358/A-Lily-Blooms-in-Another-World/",
			img: "A Lily Blooms in Another World.jpg",
			status: "completed",
			progressV: 1,
			progressC: 34,
		},
		{
			name: "The NPCs in this Village Sim Game Must Be Real!",
			url: "https://anilist.co/manga/113784/The-NPCs-in-this-Village-Sim-Game-Must-Be-Real/",
			img: "The NPCs in this Village Sim Game Must Be Real!.jpg",
			status: "completed",
			progressV: 4,
			progressC: 79,
		},
		{
			name: "Yuri Elf to Norowareta Hime",
			url: "https://anilist.co/manga/106459/Yuri-Elf-to-Norowareta-Hime/",
			img: "Yuri Elf to Norowareta Hime.jpg",
			status: "completed",
			progressV: 1,
			progressC: 6,
		},
		{
			name: "Ascendance of a Bookworm: Part 1",
			url: "https://anilist.co/manga/87383/Ascendance-of-a-Bookworm-Part-1/",
			img: "Ascendance of a Bookworm Part 1.jpg",
			status: "dropped",
			progressV: 1,
			progressC: 3,
		},
		{
			name: "Dragon-san wa Tomodachi ga Hoshii!",
			url: "https://anilist.co/manga/95938/Dragonsan-wa-Tomodachi-ga-Hoshii/",
			img: "Dragon-san wa Tomodachi ga Hoshii!.jpg",
			status: "dropped",
			progressV: 1,
			progressC: 33,
		},
		{
			name: "Her Majesty’s Swarm",
			url: "https://anilist.co/manga/123329/Her-Majestys-Swarm/",
			img: "Her Majesty’s Swarm.jpg",
			status: "dropped",
			progressV: 1,
			progressC: 12,
		},
		{
			name: "Heroine na Imouto, Akuyaku Reijou na Watashi",
			url: "https://anilist.co/manga/122353/Heroine-na-Imouto-Akuyaku-Reijou-na-Watashi/",
			img: "Heroine na Imouto, Akuyaku Reijou na Watashi.jpg",
			status: "dropped",
			progressV: 1,
			progressC: 21,
		},
		{
			name: "If It’s for My Daughter, I’d Even Defeat a Demon Lord",
			url: "https://anilist.co/manga/87376/If-Its-for-My-Daughter-Id-Even-Defeat-a-Demon-Lord/",
			img: "If It’s for My Daughter, I’d Even Defeat a Demon Lord.jpg",
			status: "dropped",
			progressV: 4,
			progressC: 30,
		},
		{
			name: "I’m in Love with the Villainess",
			url: "https://anilist.co/manga/109206/Im-in-Love-with-the-Villainess/",
			img: "I’m in Love with the Villainess.jpg",
			status: "dropped",
			progressV: 0,
			progressC: 1,
		},
		{
			name: "My Quiet Blacksmith Life in Another World",
			url: "https://anilist.co/manga/127010/My-Quiet-Blacksmith-Life-in-Another-World/",
			img: "My Quiet Blacksmith Life in Another World.jpg",
			status: "dropped",
			progressV: 3,
			progressC: 30,
		},
		{
			name: "Prison Life is Easy for a Villainess",
			url: "https://anilist.co/manga/110820/Prison-Life-is-Easy-for-a-Villainess/",
			img: "Prison Life is Easy for a Villainess.jpg",
			status: "dropped",
			progressV: 1,
			progressC: 28,
		},
		{
			name: "The Executioner and Her Way of Life",
			url: "https://anilist.co/manga/110683/The-Executioner-and-Her-Way-of-Life/",
			img: "The Executioner and Her Way of Life.jpg",
			status: "dropped",
			progressV: 1,
			progressC: 9,
		},
		{
			name: "There’s No Freaking Way I’ll be Your Lover! Unless…",
			url: "https://anilist.co/manga/122462/Theres-No-Freaking-Way-Ill-be-Your-Lover-Unless/",
			img: "There’s No Freaking Way I’ll be Your Lover! Unless….jpg",
			status: "dropped",
			progressV: 1,
			progressC: 6,
		},
		{
			name: "Why Shouldn’t a Detestable Demon Lord Fall in Love?!",
			url: "https://anilist.co/manga/112256/Why-Shouldnt-a-Detestable-Demon-Lord-Fall-in-Love/",
			img: "Why Shouldn’t a Detestable Demon Lord Fall in Love!.jpg",
			status: "dropped",
			progressV: 2,
			progressC: 10,
		},
		{
			name: "Making Magic: The Sweet Life of a Witch Who Knows an Infinite MP Loophole",
			url: "https://anilist.co/manga/136865/Making-Magic-The-Sweet-Life-of-a-Witch-Who-Knows-an-Infinite-MP-Loophole/",
			img: "Making Magic The Sweet Life of a Witch Who Knows an Infinite MP Loophole.jpg",
			status: "planning",
			progressV: 0,
			progressC: 0,
		},
		{
			name: "Reincarnated as an Apple: This Forbidden Fruit Is Forever Unblemished!",
			url: "https://anilist.co/manga/158938/Reincarnated-as-an-Apple-This-Forbidden-Fruit-Is-Forever-Unblemished/",
			img: "Reincarnated as an Apple This Forbidden Fruit Is Forever Unblemished!.jpg",
			status: "planning",
			progressV: 0,
			progressC: 0,
		},
		{
			name: "The Invincible Little Lady",
			url: "https://anilist.co/manga/111704/The-Invincible-Little-Lady/",
			img: "The Invincible Little Lady.jpg",
			status: "dropped",
			progressV: 0,
			progressC: 4,
		},
		{
			name: "The Unwanted Undead Adventurer",
			url: "https://anilist.co/manga/101770/The-Unwanted-Undead-Adventurer/",
			img: "The Unwanted Undead Adventurer.jpg",
			status: "dropped",
			progressV: 0,
			progressC: 1,
		},
	],
	contacts: [
		{ name: "Anilist", link: "https://anilist.co/user/KawaiiVampy/" },
		{ name: "Twitter", link: "https://twitter.com/VampyDawn" },
		{
			name: "Discord",
			link: "https://discordapp.com/users/591105550440464404",
		},
		{ name: "Sofi", link: "https://sofi.gg/profile/591105550440464404" },
	],
	nav: [
		{ name: "Home", link: "./index.html" },
		{ name: "Personality", link: "./personality.html" },
		{ name: "Hobbies", link: "./hobbies.html" },
		{ name: "Light Novels", link: "./lightnovels.html" },
		{ name: "Designs", link: "./designs.html" },
	],
	designs: [
		{
			id: 1,
			character: "Cerberus",
			series: "Helltaker",
			type: "Video Game",
			url: "Cerberus.png",
			background: "Helltaker.png",
			dateCreated: "2023-02-15",
		},
		{
			id: 2,
			character: "Gawr Gura",
			series: "Hololive",
			type: "VTuber",
			url: "Gawr Gura.png",
			background: "Water.png",
			dateCreated: "2023-02-16",
		},
		{
			id: 3,
			character: "Shinobu Oshino",
			series: "Monogatari",
			type: "Series",
			url: "Shinobu Oshino.png",
			background: "",
			dateCreated: "0000-00-00",
		},
	],
};

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

if (lightnovelspage) {
	("use strict");
	const novelsContainer = document.getElementById("lnlist");
	var novels = data.lightNovels;
	var sortByName = true;
	var sortByStatus = false;
	var sortByProgress = false;
	var asc = true;
	var desc = false;

	function updateLightNovels(novels) {
		novelsContainer.innerHTML = "";
		for (var i = 0; i < novels.length; i++) {
			var novel = document.createElement("div");
			novel.setAttribute("class", "novel");
			novel.innerHTML =
				`
        <div class="image_container">
        <div class="image_large" style="background-image: url('Assets/Images/LightNovels/` +
				novels[i].img +
				`');"></div>
        <div class="image" style="background-image: url('Assets/Images/LightNovels/` +
				novels[i].img +
				`');">
        </div>
        </div>
        <div class="title"><a target="_blank"
        href="` +
				novels[i].url +
				`">` +
				novels[i].name +
				`</a>
        </div>
        <div class="status">
        <p class="` +
				novels[i].status +
				`">` +
				novels[i].status.charAt(0).toUpperCase() +
				novels[i].status.slice(1) +
				`</p>
        </div>
        <div class="progress">
        <h2>` +
				novels[i].progressV +
				` V</h2>
        <h2>` +
				novels[i].progressC +
				` Ch</h2>
        </div>
        `;
			novelsContainer.appendChild(novel);
		}
	}
	sortNovels(novels);

	const nameSort = document.getElementById("sortName");
	const statusSort = document.getElementById("sortStatus");
	const progressSort = document.getElementById("sortProgress");
	nameSort.addEventListener("click", () => {
		if (
			!nameSort.classList.contains("asc") &&
			!nameSort.classList.contains("desc")
		) {
			nameSort.classList.add("desc");
		}
		if (nameSort.classList.contains("asc")) {
			statusSort.classList.remove("asc", "desc", "selected");
			progressSort.classList.remove("asc", "desc", "selected");
			nameSort.classList.remove("asc");
			nameSort.classList.add("desc", "selected");
			sortByStatus = false;
			sortByProgress = false;
			sortByName = true;
			asc = false;
			desc = true;
			sortNovels(novels);
		} else if (nameSort.classList.contains("desc")) {
			statusSort.classList.remove("asc", "desc", "selected");
			progressSort.classList.remove("asc", "desc", "selected");
			nameSort.classList.add("asc", "selected");
			nameSort.classList.remove("desc");
			sortByStatus = false;
			sortByProgress = false;
			sortByName = true;
			asc = true;
			desc = false;
			sortNovels(novels);
		}
	});
	statusSort.addEventListener("click", () => {
		if (
			!statusSort.classList.contains("asc") &&
			!statusSort.classList.contains("desc")
		) {
			statusSort.classList.add("desc");
		}
		if (statusSort.classList.contains("asc")) {
			nameSort.classList.remove("asc", "desc", "selected");
			progressSort.classList.remove("asc", "desc", "selected");
			statusSort.classList.remove("asc");
			statusSort.classList.add("desc", "selected");
			sortByStatus = true;
			sortByProgress = false;
			sortByName = false;
			asc = false;
			desc = true;
			sortNovels(novels);
		} else if (statusSort.classList.contains("desc")) {
			nameSort.classList.remove("asc", "desc", "selected");
			progressSort.classList.remove("asc", "desc", "selected");
			statusSort.classList.add("asc", "selected");
			statusSort.classList.remove("desc");
			sortByStatus = true;
			sortByProgress = false;
			sortByName = false;
			asc = true;
			desc = false;
			sortNovels(novels);
		}
	});
	progressSort.addEventListener("click", () => {
		if (
			!progressSort.classList.contains("asc") &&
			!progressSort.classList.contains("desc")
		) {
			progressSort.classList.add("desc");
		}
		if (progressSort.classList.contains("asc")) {
			nameSort.classList.remove("asc", "desc", "selected");
			statusSort.classList.remove("asc", "desc", "selected");
			progressSort.classList.remove("asc");
			progressSort.classList.add("desc", "selected");
			sortByStatus = false;
			sortByProgress = true;
			sortByName = false;
			asc = false;
			desc = true;
			sortNovels(novels);
		} else if (progressSort.classList.contains("desc")) {
			nameSort.classList.remove("asc", "desc", "selected");
			statusSort.classList.remove("asc", "desc", "selected");
			progressSort.classList.add("asc", "selected");
			progressSort.classList.remove("desc");
			sortByStatus = false;
			sortByProgress = true;
			sortByName = false;
			asc = true;
			desc = false;
			sortNovels(novels);
		}
	});

	function sortNovels(novels) {
		if (sortByName) {
			if (asc) {
				novels.sort((a, b) => {
					return a.name > b.name ? 1 : -1;
				});
				updateLightNovels(novels);
			} else if (desc) {
				novels.sort((a, b) => {
					return a.name < b.name ? 1 : -1;
				});
				updateLightNovels(novels);
			}
		}
		if (sortByStatus) {
			if (asc) {
				novels.sort((a, b) => {
					return a.status > b.status ? 1 : -1;
				});
			} else if (desc) {
				novels.sort((a, b) => {
					return a.status < b.status ? 1 : -1;
				});
			}
			updateLightNovels(novels);
		}
		if (sortByProgress) {
			if (desc) {
				novels.sort((a, b) => {
					return a.progressC > b.progressC ? 1 : -1;
				});
				novels.sort((a, b) => {
					return a.progressV > b.progressV ? 1 : -1;
				});
			} else if (asc) {
				novels.sort((a, b) => {
					return a.progressC < b.progressC ? 1 : -1;
				});
				novels.sort((a, b) => {
					return a.progressV < b.progressV ? 1 : -1;
				});
			}
			updateLightNovels(novels);
		}
	}
}

const contactContainer = document.getElementById("contact");
var contacts = data.contacts;
function addContacts() {
	for (var i = 0; i < contacts.length; i++) {
		var contact = document.createElement("a");
		contact.setAttribute("class", "contact");
		contact.setAttribute("target", "_blank");
		contact.setAttribute("href", contacts[i].link);
		contact.innerHTML = contacts[i].name;
		contactContainer.appendChild(contact);
	}
}
addContacts();

const designsPage = document.getElementById("designs");
var designs = data.designs;
if (designsPage) {
	function makeDesigns() {
		designsSort();
		for (var i = 0; i < designs.length; i++) {
			var design = document.createElement("div");
			design.setAttribute("class", "design");
			design.style.setProperty(
				"--badge-back",
				`url("../Images/Badges/Backgrounds/` +
					designs[i].background +
					`")`
			);
			designDetails = document.createElement("div");
			designDetails.setAttribute("class", "details");
			designDetails.innerHTML =
				`<h2 class="designId">#` +
				designs[i].id +
				`</strong></h2><p class="designDetail"> Name: <strong>` +
				designs[i].character +
				`</strong></p><p class="designDetail"> Source: <strong>` +
				designs[i].series +
				`</strong></p><p class="designDetail"> Type: <strong>` +
				designs[i].type +
				`</strong></p><p class="designDetail"> Creation Date: <strong>` +
				designs[i].dateCreated +
				`</strong></p>`;
			design.innerHTML =
				`<div class="img" style="background-image: url('Assets/Images/Badges/` +
				designs[i].url +
				`')"></div>`;
			design.appendChild(designDetails);
			designsPage.appendChild(design);
		}
	}
	makeDesigns();

	function designsSort() {
		designs.sort((a, b) => {
			return a.dateCreated < b.dateCreated ? 1 : -1;
		});
	}

	document.addEventListener("mousemove", (e) => {
		if (
			e.target.classList.contains("design") ||
			e.target.classList.contains("img")
		) {
			rotateElement(e, e.target);
		}
	});

	function rotateElement(event, element) {
		const x = event.clientX;
		const y = event.clientY;

		const box = element.getBoundingClientRect();
		const xCenter = (box.left + box.right) / 2;
		const yCenter = (box.top + box.bottom) / 2;

		const offsetX = ((x - xCenter) / xCenter) * 180;
		const offsetY = ((y - yCenter) / yCenter) * 180;

		element.style.setProperty("--rotateX", -1 * offsetY + "deg");
		element.style.setProperty("--rotateY", offsetX + "deg");
	}
}

const navContainer = document.getElementById("nav");
var navLinks = data.nav;
function makeNav() {
	for (var i = 0; i < navLinks.length; i++) {
		var link = document.createElement("a");
		link.setAttribute("href", navLinks[i].link);
		if (home && navLinks[i].name == "Home") {
			link.setAttribute("class", "active");
			link.removeAttribute("href");
		} else if (personality && navLinks[i].name == "Personality") {
			link.setAttribute("class", "active");
			link.removeAttribute("href");
		} else if (hobbies && navLinks[i].name == "Hobbies") {
			link.setAttribute("class", "active");
			link.removeAttribute("href");
		} else if (lightnovelspage && navLinks[i].name == "Light Novels") {
			link.setAttribute("class", "active");
			link.removeAttribute("href");
		} else if (designsPage && navLinks[i].name == "Designs") {
			link.setAttribute("class", "active");
			link.removeAttribute("href");
		}
		link.innerHTML = navLinks[i].name;
		navContainer.appendChild(link);
	}
}
makeNav();
