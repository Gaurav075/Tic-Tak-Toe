console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let gameover1 = false

// function to change the turn
const changeTurn = ()=>{
    return turn === "X" ? "0" : "X"
} 

// function to check for a win
const checkwin = ()=>{
    let boxtexts = document.getElementsByClassName('box-text')
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,15],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "Won"
            gameover1 = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector(".line").style.width =  "20vw"
            document.querySelector('.line').style.transform =  `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            gameover.play();
            // function fetchdata(){
            //     let boxtests = document.querySelectorAll('.box-text');
            //     Array.from(boxtests).forEach(element=>{
            //     element.innerText = ""
            //         })
            //         document.querySelector(".line").style.width =  "0vw"
            // }
            // setTimeout(fetchdata,3000);
}})
}

// main logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector('.box-text')
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
            if(!gameover1){

                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }

        }
    })
})

// add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtests = document.querySelectorAll('.box-text');
    Array.from(boxtests).forEach(element=>{
        element.innerText = ""
    })
    turn = "X"
    gameover1 = false;
    document.querySelector(".line").style.width =  "0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})