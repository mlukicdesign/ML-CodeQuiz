// Store score locally and add as list item.
// retrieve the highscores from local storage. if it is empty, set it to an empty array

score = JSON.parse(localStorage.getItem('high-scores')) || [];
let highscoresList = document.getElementById('highscores');


for (let i = 0; i < score.length; i++) {

    let newListItem = document.createElement('li');
    // String(i + 1) + ") " + score[i]
    newListItem.innerHTML = `Name: ${score[i].initials} | score:${score[i].score}`;
    highscoresList.append(newListItem);
}


