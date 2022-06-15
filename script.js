const resultHome = document.getElementById("home");
const resultGuest = document.getElementById("guest");
let count = 0;
let countHome = 0;
let countGuest = 0;

function addHome(points) {
    countHome += points;
    resultHome.textContent = countHome; 
}

function addGuest(points) {
    countGuest += points;
    resultGuest.textContent = countGuest; 
}

function reset() {
    countHome = 0;
    countGuest = 0;
    resultHome.textContent = 0;
    resultGuest.textContent = 0;
}

function highLightLeader() {
    
}