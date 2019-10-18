let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else if (randomNumber == 3) {
  computerMove = 'nożyce';
}
printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == 2) {
  playerMove = 'papier';
}  else if (playerInput == 3) {
  playerMove = 'nożyce';
}
  else {
    playerMove = 'Inny numer';
  }

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Jest remis, gramy dalej ...');
} else if (computerMove == "nożyce" && playerMove == 'papier'){
  printMessage('Wygrał komputer');
}

if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Wygrał komputer');
}  else if (computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Jest remis, gramy dalej ...');
}

if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Jest remis, gramy dalej ...');
}  else if (computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Wygrał komputer');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}

if( computerMove == 'kamień' && playerMove == 'Inny numer'){
  printMessage('Wybrałeś inny numer niż 1, 2, 3');
}  else if (computerMove == 'papier' && playerMove == 'Inny numer'){
  printMessage('Wybrałeś inny numer niż 1, 2, 3');
} else if (computerMove == 'nożyce' && playerMove == 'Inny numer'){
  printMessage('Wybrałeś inny numer niż 1, 2, 3');
}

console.log('Gracz wpisał: ' + playerInput);
console.log('PlayerMove: ' + playerMove);
