let firstMarker = document.getElementById("first-marker")
let secondMarker = document.getElementById("second-marker")
let home = document.getElementById("first-marker");
let guest = document.getElementById("second-marker");

firstCount = 0;
secondCount = 0;

let result = document.getElementById("result")

function onePoint1(){
    firstCount += 1;
    firstMarker.textContent = firstCount
    teamWinning()
}

function twoPoints1(){
    firstCount += 2;
    firstMarker.textContent = firstCount
    teamWinning()
}

function threePoints1(){
    firstCount += 3;
    firstMarker.textContent = firstCount
    teamWinning()
}

function onePoint2(){
    secondCount += 1;
    secondMarker.textContent = secondCount
    teamWinning()
}

function twoPoints2(){
    secondCount += 2;
    secondMarker.textContent = secondCount
    teamWinning()
}

function threePoints2(){
    secondCount += 3;
    secondMarker.textContent = secondCount
    teamWinning()
}

function resetGame(){
    firstMarker.textContent = 0
    secondMarker.textContent = 0
    home.style.boxShadow = "none";
    guest.style.boxShadow = "none";
}

function teamWinning(){
      
    if (firstCount > secondCount){
        home.style.boxShadow = "0px 0px 20px yellow";
        guest.style.boxShadow = "none";
    }else if(firstCount < secondCount){
        home.style.boxShadow = "none";
        guest.style.boxShadow = "0px 0px 20px yellow";
    }else{
        home.style.boxShadow = "0px 0px 20px white";
        guest.style.boxShadow = "0px 0px 20px white";
    }    
}


