function npcchoice() {
    let npc = Math.floor(Math.random() * 3)
    if (npc === 0) return 'rock';
    else if (npc === 1) return 'paper';
    else return 'scissors';
}

function playerchoice(string) {
    let npc = npcchoice()
     let pc = string;
    if (pc === npc)
        console.log('draw')

    if (pc === 'rock') {
        switch (npc) {
            case 'paper':
                console.log('you lost')
                break;
            case 'scissors':
                console.log('you won')
                break;
        }
    }
    if (pc === 'paper') {
        switch (npc) {
            case 'scissors':
                console.log('you lost')
                break;
            case 'rock':
                console.log('you won')
                break;
        }
    }
    if (pc === 'scissors') {
        switch (npc) {
            case 'rock':
                console.log('you lose')
                break;
            case 'paper':
                console.log('you win')
                break;
        }
    }




    console.log("NPC chose"+'',npc)

}

/*

function playRound(playerSelection, computerSelection) {
    // your code here!
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
if ( player === 0 && npc === 2) {

}
*/