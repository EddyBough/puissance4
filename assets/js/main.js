let playerOne = "green" // joueur 1 
let playerTwo = "yellow" // joueur 2
let scoreJONE = 0 // score joueur 1
let scoreJTWO = 0 // score joueur 2
let PlayerWin = "" // variable qui permettra d'afficher le joueur gagnant dans la chaine de caractère vide
let lap = 1 // tour ou counter si tu veux
let gameOver = false
let gridVictory = [
  //les victoires horizontales
  [0, 1, 2, 3],[1, 2, 3, 4],[2 ,3, 4, 5],[3, 4, 5, 6],
  [7, 8, 9, 10],[8, 9, 10, 11],[9, 10, 11, 12],[10, 11, 12, 13],
  [14, 15, 16, 17],[15, 16, 17, 18],[16, 17, 18, 19],[17, 18, 19, 20],
  [21, 22, 23, 24],[22, 23, 24, 25],[23, 24, 25, 26],[24, 25, 26, 27],
  [28, 29, 30, 31],[29, 30, 31, 32],[30, 31, 32, 33],[31, 32, 33, 34],
  [35, 36, 37, 38],[36, 37, 38, 39],[37, 38, 39, 40],[38, 39, 40, 41],
  //les victoires verticales
  [0,7,14,21],[7,14,21,28],[14,21,28,35],
  [1,8,15,22],[8,15,22,29],[15,22,29,36],
  [2,9,16,23],[9,16,23,30],[16,23,30,37],
  [3,10,17,24],[10,17,24,31],[17,24,31,38],
  [4,11,18,25],[11,18,25,32],[18,25,32,39],
  [5,12,19,26],[12,19,26,33],[19,26,33,40],
  [6,13,20,27],[13,20,27,34],[20,27,34,41],
  //les victoires diagonales haut -> droite
  [0,8,16,24],[1,9,17,25],[2,10,18,26],[3,11,19,27],
  [7,15,23,31],[8,16,24,32],[9,17,25,33],[10,18,26,34],
  [14,22,30,38],[15,23,31,39],[16,24,32,40],[17,25,33,41],
  //les victoires diagonales haut -> gauche
  [6,12,18,24],[5,11,17,23],[4,10,16,22],[3,9,15,21],
  [13,19,25,31],[12,18,24,30],[11,17,23,29],[10,16,22,28],
  [20,26,32,38],[19,25,31,37],[18,24,30,36],[17,23,29,35]
];


function play(elem) {
  if (elem.innerHTML == "") {
      if (lap % 2 != 0) { // lap est égal à 1 au départ, divisé par 2 si le résultat est différent de 0 donc au tour de playerOne 
        document.querySelector("#joueur").innerHTML = `Au tour de J2` // afficher le tour 
        elem.style.backgroundColor = playerOne
        PlayerWin = playerOne
      } else { // sinon playerTwo
        document.querySelector("#joueur").innerHTML = `Au tour de J1`
        elem.style.backgroundColor = playerTwo
        PlayerWin = playerTwo
      }
      lap++
  } checkVictory()
}

function checkVictory() { // ici on va déterminer les conditions de victoire
  let cases = document.querySelectorAll('.case') // là on determine que la variable case = est égal à .case dans mon HTML
  for (let i = 0; i < gridVictory.length; i++) {(cases[gridVictory[i][0]].style.backgroundColor);// on parcour le tableau de victoire
    if (cases[gridVictory[i][0]].style.backgroundColor != "") { // là, va dans mon tableau de victoire et marque moi dans le HTML quelque chose de différent à CHAINE VIDE
      
      if (cases[gridVictory[i][0]].style.backgroundColor == cases[gridVictory[i][1]].style.backgroundColor && cases[gridVictory[i][1]].style.backgroundColor == cases[gridVictory[i][2]].style.backgroundColor &&
         cases[gridVictory[i][2]].style.backgroundColor == cases[gridVictory[i][3]].style.backgroundColor) {
        document.querySelector('#joueur').innerHTML = `le joueur ${PlayerWin} à gagné` // ici on mettra le nom du joueur qui gagne avec la variable playerWin
        
        if (PlayerWin == playerOne) { // playerWin est égal à J1 
          scoreJONE++ // son score sera de +1
          document.querySelector('#score1').innerHTML = scoreJONE // ajouter + 1 à l'endroit score 1 dans le html 
        } 
        
        else if (PlayerWin == playerTwo) { // si le joueur gagnant est J2 = afficher dans la variable playerWin qui est une variable vide
          scoreJTWO++ // son score sera de +1
          document.querySelector('#score2').innerHTML = scoreJTWO //ajouter +1 à l'endroit score 2 dans le html
        }
        
      }

    }
  }
}

function draw() { // fonction match nul 
  if (gameOver == false) { // au départ le gameover est false car le jeu est en cours
    let counter = 0
    let cells = document.querySelectorAll(".case") // on met une variable cells qui va appeler toutes mes cases dans l'HTML

    for (let i = 0; i < cells.length; i++) {
      if (cells[i].style.backgroundColor != "") { // après avoir parcouru les cellules, mettre des chaines vide afin de pouvoir y insérer les X ou les O
        counter++ // tour + 1
      }
    }
    if (counter == 42) { // si la grille est pleine, donc match nul
      gameOver = true // et le gameover devient true
      document.querySelector("#joueur").innerHTML = `Match nul` // afficher match nul dans l'html
    }
  }
}

function replay() { // fonction rejouer
  let cells = document.querySelectorAll('.case') // on prend une variable et on appelle toutes les casers avec le querySelectorAll
  for (let i = 0; i < cells.length; i++) { // avec le for on lui demande de parcourir toutes les cases
    cells[i].style.backgroundColor = "" // cells dans le html devient une chaîne vide
  }
  lap = 1
  gameOver = false
}


 
  

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}