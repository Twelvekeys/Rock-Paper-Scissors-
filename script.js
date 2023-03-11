
let pScore = 0;
let npcScore = 0;
function npcchoice() {
    let npc = Math.floor(Math.random() * 3)
    if (npc === 0) return 'rock';
    else if (npc === 1) return 'paper';
    else return 'scissors';
}
//pc = gets playerchoice from button click in index file
function playerchoice(pc) {
    let npc = npcchoice()

    if (npcScore < 5 && pScore < 5) {
        if (pc === npc) {
            ++pScore
             ++npcScore;
        }
        if (pc === 'rock') {
            switch (npc) {
                case 'paper':
                     ++npcScore
                    break;

                case 'scissors':
                    ++pScore
                    break;
            }
        }
        if (pc === 'paper') {
            switch (npc) {
                case 'scissors':
                   ++npcScore
                    break;

                case 'rock':
                    ++pScore
                    break;
            }
        }
        if (pc === 'scissors') {
            switch (npc) {
                case 'rock':
                     ++npcScore
                    break;

                case 'paper':
                     ++pScore
                    break;
            }
        }
    }
    //code takes scores from int to string and displays it on webpage
    document.getElementById("p1score").innerHTML = pScore.toString();
    document.getElementById("npcscore").innerHTML = npcScore.toString();

    //displays results of match and auto resets game after 3 secs
    if (pScore === 5 && npcScore < 5) {
        document.getElementById("display").innerHTML = "Congrats you've won";
        setTimeout(() => { document.location.reload(); }, 3000);
    }
    if (npcScore === 5 && pScore < 5) {
        document.getElementById("display").innerHTML = 'Sorry Game Over';
        setTimeout(() => { document.location.reload(); }, 3000);
    }
    if(npcScore === 5 && pScore === 5)  {
        document.getElementById("display").innerHTML = 'Tied Game';
        setTimeout(() => { document.location.reload(); }, 3000);
    }
}
