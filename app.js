console.log("LARAIB KHAN.");
let loop = new Audio("loop.mp3");
let ding = new Audio("ding.mp3");
let out = new Audio("out.mp3");
let victory = new Audio("victory.mp3")
let turn = "X"
let gameOver = false; 

//function to change turn
const changeTurn = ()=>{
    return turn ==="X"?"0": "X"
}

//function to check for  a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !== "") ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
            gameOver = true
            victory.play()
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '300px'
        }
    })
}

// game logic

loop.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            ding.play();
            checkWin();
            if (!gameOver){
                document.getElementsByClassName("info")[0].innerText =  "Turn for" + turn;
            }
        }
    })
});

// on click to reset 
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    gameOver = false
    out.play()
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
})