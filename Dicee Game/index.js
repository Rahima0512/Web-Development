document.querySelector(".check").onclick=function() {play()};
function play()
{
    document.querySelector(".check .btn").textContent="Play Again";
    var x=Math.floor(Math.random()*(7-1)+1);
    var y=Math.floor(Math.random()*(7-1)+1);
    document.querySelector(".dice .img1").setAttribute("src", "images/dice"+x+".png");
    document.querySelector(".dice .img2").setAttribute("src", "images/dice"+y+".png");
    if(x>y)
    {
        document.querySelector(".container h1").textContent="🚩Player 1 wins";

    }
    else if(x<y)
    {
        document.querySelector(".container h1").textContent="Player 2 wins🚩";

    }
    else
    {
        document.querySelector(".container h1").textContent="Draw";

    }
}

