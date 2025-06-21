var random=Math.floor(Math.random()*6)+1
document.getElementsByTagName("img")[0].setAttribute("src","images/dice"+random+".png")// dice1

var random2=Math.floor(Math.random()*6)+1
document.getElementsByTagName("img")[1].setAttribute("src","images/dice"+random2+".png")//dice 2
document.getElementsByTagName("h1")[0].textContent=random===random2 ? " 🚩draw 🚩": random>random2 ? '🚩player1 wins':'player2 wins🚩'