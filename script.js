let playerChoices = document.querySelectorAll('.player .choice');
let computerChoices = document.querySelectorAll('.computer .choice');
let playerScoreValue = document.querySelector('.playerScore');
let computerScoreValue = document.querySelector('.computerScore');
let result = document.getElementById('result')



let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

class GameArena {
  constructor(player, computer) {
    this.player = player,
    this.computer = computer
  }

  isWin() {

    let player = this.player;
    let computer = this.computer;

    // console.log(`player (${player}) &`, `computer (${computer})`);

    if(player === computer){
        return 'DRAW';
    } else if
    ( player === 'kertas' && computer === 'batu' ||
      player === 'batu' && computer === 'gunting' ||
      player === 'gunting' && computer === 'kertas'
    )
      {
        return 'PLAYER WIN!';
    } else {
        return 'COMP WIN';
    }
  }
}

class PlayGame extends GameArena {
  constructor(player, computer) {
    super(player, computer)
  }

  play() {

    
    return this.isWin()
  }

}


function computerChoice() {
  let choices = [
    'batu',
    'gunting',
    'kertas'
  ]

  let compChoice = choices[Math.floor(Math.random() * choices.length)];

  computerChoices.forEach(choice => {
    choice.classList.remove('active')
    
    if(choice.getAttribute('data-choice') === compChoice) {
      choice.classList.add('active')
    }

  })

  return compChoice;
  
}


playerChoices.forEach(playerChoice => {

  playerChoice.addEventListener('click', () => {

    playerChoices.forEach(choice => {
      choice.classList.remove('active');
    });
    playerChoice.classList.remove('active')

    playerChoice.classList.add('active')
    


    let playerSelect = playerChoice.getAttribute("data-choice");
  
    let selectChoice = new PlayGame(playerSelect, computerChoice());
    let playNow = selectChoice.isWin();

    // console.log(playNow);

    // scoring
    if(playNow === 'PLAYER WIN!') {
      playerScore += 1;
      playerScoreValue.innerHTML = `Player(<span style="color: #0066cc">${playerScore}</span>)`
    } else if (playNow === 'COMP WIN') {
      computerScore += 1;
      computerScoreValue.innerHTML = `Computer(<span style="color: #FF0000">${computerScore}</span>)`
    } else if (playNow === 'DRAW') {
      drawScore += 1;
    }

    // banner score
    result.innerHTML = playNow;
    result.classList.add('result');

    

    // console.log(`player score = ${playerScore} `);
    // console.log(`computer score = ${computerScore} `);
    // console.log(`draw score = ${drawScore} `);

    
  })
})

