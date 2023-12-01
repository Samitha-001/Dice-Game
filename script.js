var playBtn = document.getElementById("playBtn")

var divs = document.querySelectorAll('.flex-items')

var form = document.querySelector(".form")

var container = document.querySelector(".container")

var dices = document.querySelector(".dices")

var roll1 = document.getElementById("roll1")
var roll2 = document.getElementById("roll2")

// Fill the names with checkbox and switch to the game interface
function startGame(){
    
    var playerName1 = document.getElementById("name1")
    var playerName2 = document.getElementById("name2")
    var check = document.getElementById("rules")
    if(playerName1.value!=="" && playerName2.value!=="" && check.checked==true){
    document.getElementById("pName1").innerText = playerName1.value 
    document.getElementById("pName2").innerText = playerName2.value 
    
    divs[0].style.display = "block"
    divs[1].style.display = "block"
    dices.style.display = "flex"
    dices.style.zIndex = "1"
    form.style.display = "none"
    container.style.backgroundColor = "transparent"
    roll2.setAttribute('disabled','')
    }else{
        alert("Enter the both fields and check the rules.")
    }
}
playBtn.addEventListener('click',startGame)

//Game interface with roll the dices and score gathering
var scoreP1 = 0
var scoreP2 = 0
var listDices = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"]


roll1.addEventListener('click', function(){
var randItem1 = listDices[Math.floor(Math.random()*listDices.length)]
var randItem2 = listDices[Math.floor(Math.random()*listDices.length)]

document.getElementById("d1P1").setAttribute('class', randItem1)
document.getElementById("d2P1").setAttribute('class', randItem2)



if(randItem1!=randItem2 || (randItem1=='dice1' && randItem2=='dice1')){
    roll1.setAttribute('disabled','')   
    roll2.removeAttribute('disabled')
}

if(listDices.indexOf(randItem1)==0 && listDices.indexOf(randItem2)==0){
    scoreP1 = 0
    document.getElementsByClassName("score")[0].innerHTML = scoreP1
}else{
    scoreP1 += ((listDices.indexOf(randItem1)+1) + (listDices.indexOf(randItem2)+1))
    document.getElementsByClassName("score")[0].innerHTML = scoreP1
}
endGame()    

})

roll2.addEventListener('click', function(){
var randItem1 = listDices[Math.floor(Math.random()*listDices.length)]
var randItem2 = listDices[Math.floor(Math.random()*listDices.length)]

document.getElementById("d1P1").setAttribute('class', randItem1)
document.getElementById("d2P1").setAttribute('class', randItem2)


if(randItem1!=randItem2 || (randItem1=='dice1' && randItem2=='dice1')){ 
    roll2.setAttribute('disabled','')   
    roll1.removeAttribute('disabled')
}

if(listDices.indexOf(randItem1)==0 && listDices.indexOf(randItem2)==0){
    scoreP2 = 0
    document.getElementsByClassName("score")[1].innerHTML = scoreP2
}else{
    scoreP2 += ((listDices.indexOf(randItem1)+1) + (listDices.indexOf(randItem2)+1))
    document.getElementsByClassName("score")[1].innerHTML = scoreP2
}

endGame() 
})


// Winner shows with the scores of the both players
function endGame(){

    let nam1 = document.getElementById("name1")
    let nam2 = document.getElementById("name2")

    if(scoreP1>=100 || scoreP2>=100){
        roll1.setAttribute('disabled', '')
        roll2.setAttribute('disabled', '')
        
        divs[0].style.display = "none" 
        divs[1].style.display = "none"
        dices.style.display = "none"

        var end = document.createElement("div")
        end.setAttribute('class','endGame')
        container.appendChild(end)

        var player1 = document
        .createElement("h2")
        var player2 = document
        .createElement("h2")
       
        player1.innerText = nam1.value + " :  " + scoreP1 
        player2.innerText = nam2.value + " :  " + scoreP2 
        end.appendChild(player1)
        end.appendChild(player2)


        var winner = document.createElement("h1")

        if(scoreP1>=100)
            winner.innerText = "Congratulations " + nam1.value
        else
            winner.innerText = "Congratualtions " + nam2.value
        winner.setAttribute('class', 'congrats')
        end.appendChild(winner)

        var replay = document.createElement("button")
        replay.innerText = "Replay"
        replay.setAttribute('class', 'replay')
        
        end.appendChild(replay)

        replay.addEventListener('click', function(){
        
        location.reload()
        
        })

    }
}

