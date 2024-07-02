// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';



document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.game-item');
    const gameResults = document.getElementById('game-results');
    const pickedUserImage = document.getElementById('picked-user-image');
    const pickedPcImage = document.getElementById('picked-pc-image');
    const gameResultText = document.getElementById('game-result');
    const playAgainButton = document.getElementById('play-again');
    const pointsUser = document.getElementById('points-user');
    const pointsPc = document.getElementById('points-pc');
    const modal = document.getElementById('modal');
    const buttonRules = document.getElementById('button-rules');
  
    let userScore = 0;
    let pcScore = 0;
  
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  
    items.forEach(item => {
      item.addEventListener('click', () => {
        const userChoice = item.getAttribute('data-item');
        const pcChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = getResult(userChoice, pcChoice);
  
        pickedUserImage.src = `./assets/images/icon-${userChoice}.svg`;
        pickedPcImage.src = `./assets/images/icon-${pcChoice}.svg`;
        gameResults.classList.remove('hide');
        document.getElementById('game-items').classList.add('hide');
  
        if (result === 'win') {
          gameResultText.textContent = 'YOU WIN';
          userScore++;
        } else if (result === 'lose') {
          gameResultText.textContent = 'YOU LOSE';
          pcScore++;
        } else {
          gameResultText.textContent = 'IT\'S A DRAW';
        }
  
        pointsUser.textContent = userScore;
        pointsPc.textContent = pcScore;
      });
    });
  
    playAgainButton.addEventListener('click', () => {
      gameResults.classList.add('hide');
      document.getElementById('game-items').classList.remove('hide');
    });
  
    buttonRules.addEventListener('click', () => {
      modal.classList.toggle('show');
    });
  
    modal.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  
    function getResult(user, pc) {
      if (user === pc) {
        return 'draw';
      }
  
      const winConditions = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock']
      };
  
      if (winConditions[user].includes(pc)) {
        return 'win';
      } else {
        return 'lose';
      }
    }
  });
  
  
  
  