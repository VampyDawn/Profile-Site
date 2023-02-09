"use strict";
const novelsContainer = document.getElementById("lnlist");
import data from "./database.json" assert { type: "json" };
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
				return a.progressC < b.progressC ? 1 : -1;
			});
			novels.sort((a, b) => {
				return a.progressV > b.progressV ? 1 : -1;
			});
		} else if (asc) {
			novels.sort((a, b) => {
				return a.progressC > b.progressC ? 1 : -1;
			});
			novels.sort((a, b) => {
				return a.progressV < b.progressV ? 1 : -1;
			});
		}
		updateLightNovels(novels);
	}
}
