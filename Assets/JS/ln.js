"use strict";
const novelsContainer = document.getElementById('lightnovels');
import data from "./database.json" assert { type: "json" };
var novels = data.lightNovels;
var sortName = true;
var sortStatus = false;
var sortProgress = false;

function updateLightNovels(novels) {
    sortNovels(novels);
    for (var i = 0; i < novels.length; i++) {
        var novel = document.createElement('div');
        novel.setAttribute('class', 'novel');
		novel.innerHTML = `
        <div class="image_container">
            <div class="image_large" style="background-image: url('Assets/Images/LightNovels/` + novels[i].img + `');"></div>
            <div class="image" style="background-image: url('Assets/Images/LightNovels/` + (novels[i].img) + `');">
            </div>
        </div>
        <div class="title"><a target="_blank"
                href="` + novels[i].url + `">` + novels[i].name + `</a>
        </div>
        <div class="status">
            <p class="` + novels[i].status + `">` + novels[i].status.charAt(0).toUpperCase() + novels[i].status.slice(1) + `</p>
        </div>
        <div class="progress">
            <h2>` + novels[i].progressV + ` V</h2>
            <h2>` + novels[i].progressC + ` Ch</h2>
        </div>
        `;
        lightnovels.appendChild(novel);
	}
}
updateLightNovels(novels);

function sortNovels(novels) {
    if (sortName) {
        novels.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });
    }
    if (sortStatus) {
        novels.sort((a, b) => {
            return a.status > b.status ? 1 : -1;
        });
    }
    if (sortProgress) {
        novels.sort((a, b) => {
            return a.progressC < b.progressC ? 1 : -1;
        });
        novels.sort((a, b) => {
            return a.progressV > b.progressV ? 1 : -1;
        });
    }
}