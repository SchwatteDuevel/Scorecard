const resultHome = document.getElementById("home");
const resultGuest = document.getElementById("guest");
const highlightHome = document.getElementsByClassName("highlight-home");
const highlightGuest = document.getElementsByClassName("highlight-guest");
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
    highlightHome[0].style.backgroundColor = "#00ff00";
    highlightGuest[0].style.backgroundColor = "#000";
    
  } else if (countHome < countGuest) {
    highlightGuest[0].style.backgroundColor = "#00ff00";
    highlightHome[0].style.backgroundColor = "#000";
  }
    else {
    highlightHome[0].style.backgroundColor = "#000";
    highlightGuest[0].style.backgroundColor = "#000";
    }
}


function reset() {
    countHome = 0;
    countGuest = 0;
    resultHome.textContent = 0;
    resultGuest.textContent = 0;
    highlightHome[0].style.backgroundColor = "#000";
    highlightGuest[0].style.backgroundColor = "#000";
}