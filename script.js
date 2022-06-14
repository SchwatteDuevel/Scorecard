const resultHome = document.getElementById("home");
const resultGuest = document.getElementById("guest");
let count = 0;

function addOne() {
    count += 1;
    resultHome.textContent = count; 
}

function addTwo() {
    count += 2;
    resultHome.textContent = count; 
}

function addThree() {
    count += 3;
    resultHome.textContent = count; 
}


function reset() {
    count = 0;
    resultHome.textContent = 0;
    resultGuest.textContent = 0;
}