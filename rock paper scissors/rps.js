// important variables
let images = document.querySelectorAll(".img-items");
let cpuImages = document.querySelectorAll(".img-cpu-choosed");
var input = prompt("please enter winner score!");

//starting game

// hide the other images that user didn't click on and show random image which cpu chose
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    console.log(input);
    if (input > 0) {
      cpuNumber = Math.floor(Math.random() * (10 / 4));
      cpuImages[cpuNumber].classList.remove("hidden");
      gameLogic(i, cpuNumber);
      hiddenSelect(i);
    } else {
      alert("please insert a number at the input!");
      location.reload(true);
    }
  });
}

function hiddenSelect(i) {
  for (let j = 0; j < images.length; j++) {
    if (j !== i) {
      images[j].classList.add("hidden");
    }
  }
}

//

const refreshFunction = () => {
  for (let i = 0; i < images.length; i++) {
    images[i].style.pointerEvents = "all";
    document.querySelector("#top-title").innerHTML = "Choose your weapon";
    images[i].classList.remove("hidden");
    cpuImages[i].classList.add("hidden");
  }
};

var refreshBtn = document.querySelector("#refresh-btn");
refreshBtn.addEventListener("click", refreshFunction);

function gameLogic(user, cpu) {
  var userPoint = document.querySelector("#user-score");
  var cpuPoint = document.querySelector("#cpu-score");
  var userScore = 0;
  var cpuScore = 0;

  if (cpu !== user) {
    if (user == 0) {
      document.querySelector("#top-title").innerHTML = "you chose paper";
      if (cpu == 1) {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
        userScore = userPoint.innerHTML;
      } else {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
        cpuScore = cpuPoint.innerHTML;
      }
    }
    if (user == 1) {
      document.querySelector("#top-title").innerHTML = "you chose rock";
      if (cpu == 0) {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
        cpuScore = cpuPoint.innerHTML;
      } else {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
        userScore = userPoint.innerHTML;
      }
    }
    if (user == 2) {
      document.querySelector("#top-title").innerHTML = "you chose scissors";
      if (cpu == 0) {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
        userScore = userPoint.innerHTML;
      } else {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
        cpuScore = cpuPoint.innerHTML;
      }
    }
  }

  for (z = 0; z < images.length; z++) {
    images[z].style.pointerEvents = "none";
  }

  if (userScore >= input) {
    setTimeout(userWon, 500);
  } else if (cpuScore >= input) {
    setTimeout(cpuWon, 500);
  }

  console.log(userScore);
  console.log(cpuScore);
}

function cpuWon() {
  alert("you lost!");
  finishGame();
}
function userWon() {
  alert("you won!");
  finishGame();
}

function finishGame() {
  refreshBtn.style.pointerEvents = "none";
  for (x = 0; x < images.length; x++) {
    images[x].style.pointerEvents = "none";
  }
  setTimeout(() => {
    if (confirm("do you want to play again?")) {
      location.reload(true);
    }
  }, 750);
}
