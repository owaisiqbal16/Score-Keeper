var p1 = document.querySelector("#p1")
var p2 = document.querySelector("#p2")
var reset = document.querySelector("#reset")
var p1s = document.querySelector("#p1s")
var p2s = document.querySelector("#p2s")
var winningOn = document.querySelector("p span");
var updateWinning = document.querySelector("input")


var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false


p1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++
        p1s.innerHTML = p1Score
        if (p1Score === winningScore) {
            p1s.classList.add("winner")
            gameOver = true 
        }
    }
})

p2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++
        p2s.innerHTML = p2Score
        if (p2Score === winningScore) {
            p2s.classList.add("winner")
            gameOver = true
        }
    }
})

reset.addEventListener("click", function(){
    resetFunc();
})

function resetFunc(){
    p1Score=0;
    p2Score=0;
    p1s.textContent = p1Score;
    p2s.textContent = p2Score;
    p1s.classList.remove("winner");
    p2s.classList.remove("winner");
    gameOver = false
}

updateWinning.addEventListener("change", function(){
    winningOn.textContent = this.value 
    winningScore = Number(this.value)
    resetFunc();
})

