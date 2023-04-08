
const highscores = document.getElementById("highscores");

function createListItem(content) {
    const li = document.createElement("li");

    li.textContent = content;

    return li;
}

// retrieve the highscores from local storage. if it is empty, set it to an empty array
let scores = JSON.parse(localStorage.getItem("highscores")) || [];

// rank the score from high to low
scores = scores.sort().reverse();

for (let index = 0; index < scores.length; index++) {
    // create list item
    const li = createListItem(
        String(index + 1) + ") " + scores[index]
    );

    // put them in ul
    highscores.appendChild(li);
}
