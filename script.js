const resultHome = document.getElementById("home");
const resultGuest = document.getElementById("guest");
let count = 0;
let countHome = 0;
let countGuest = 0;

function addHome(points) {
    countHome += points;
    resultHome.textContent = countHome; 
    highlightLeader();
    return countHome;
}

function addGuest(points) {
    countGuest += points;
    resultGuest.textContent = countGuest;
    highlightLeader();
    return countGuest;
}

function highlightLeader() {
  if(countHome > countGuest) {
    resultHome.classList.add("highlight");
    resultGuest.classList.remove("highlight");
    
  } else if (countHome < countGuest) {
    resultHome.classList.remove("highlight");
    resultGuest.classList.add("highlight");
  }
  else {
    resultHome.classList.remove("highlight");
    resultGuest.classList.remove("highlight");
  }
}

function reset() {
    countHome = 0;
    countGuest = 0;
    resultHome.textContent = 0;
    resultGuest.textContent = 0;
    resultGuest.classList.remove("highlight");
    resultHome.classList.remove("highlight");
}