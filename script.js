let homescore = 0;
let guestScore = 0;
let home = document.getElementById("homeScore");
let away = document.getElementById("GuestScore");

let hFscore = 0;
let gFscore = 0;
let homefoul = document.getElementById("HomeFoul");
let awayfoul = document.getElementById("GuestFoul");
homefoul.textContent = hFscore;
awayfoul.textContent = gFscore;
home.textContent = homescore;
away.textContent = guestScore;

function home1() {
  homescore++;
  home.textContent = homescore;
}
function home2() {
  homescore += 2;
  home.textContent = homescore;
}
function home3() {
  homescore += 3;
  home.textContent = homescore;
}

function away1() {
  guestScore++;
  away.textContent = guestScore;
}
function away2() {
  guestScore += 2;
  away.textContent = guestScore;
}
function away3() {
  guestScore += 3;
  away.textContent = guestScore;
}
function hfouls() {
  hFscore++;
  homefoul.textContent = hFscore;
}
function afouls() {
  gFscore++;
  awayfoul.textContent = gFscore;
}

function newgame() {
  guestScore = 0;
  homescore = 0;
  hFscore = 0;
  gFscore = 0;
  away.textContent = 0;
  home.textContent = 0;
  homefoul.textContent = hFscore;
  awayfoul.textContent = gFscore;
}
