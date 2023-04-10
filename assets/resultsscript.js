

score = JSON.parse(localStorage.getItem('high-scores')) || [];
let highscoresList = document.getElementById('highscores');


for (let i = 0; i < score.length; i++) {

    let newListItem = document.createElement('li');
    // String(i + 1) + ") " + score[i]
    newListItem.innerHTML = `initials: ${score[i].initials} | score:${score[i].score}`;
    highscoresList.append(newListItem);

}


// retrieve the highscores from local storage. if it is empty, set it to an empty array


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
