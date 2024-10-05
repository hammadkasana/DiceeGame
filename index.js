// Check if the page is loaded for the first time
if (!sessionStorage.getItem('loaded')) {
    document.getElementById("title").textContent = "Refresh Me";
    sessionStorage.setItem('loaded', 'true');
} else {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("img.img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("img.img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 == randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
}
