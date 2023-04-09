

let score = localStorage.getItem('score');
let highscoresList = document.getElementById('highscores');

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key.startsWith('score')) {
    let score = localStorage.getItem(key);
    let newListItem = document.createElement('li');
    newListItem.textContent = score;
    highscoresList.appendChild(newListItem);
  }
}


// retrieve the highscores from local storage. if it is empty, set it to an empty array
score = JSON.parse(localStorage.getItem("highscores")) || [];

/* rank the score from high to low
score = score.sort().reverse();

for (let index = 0; index < score.length; index++) {
    // create list item
    const li = createListItem(
        String(index + 1) + ") " + score[index]
    );

    // put them in ul
    highscores.appendChild(li);
}
*/
