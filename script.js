
let words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
    "kiwi", "lemon", "mango", "nectarine", "orange", "peach", "quince", "raspberry",
    "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yam", "zucchini",
    "abacus", "bicycle", "cat", "dog", "elephant", "frog", "giraffe", "house", "igloo",
    "jacket", "kite", "lion", "mountain", "notebook", "octopus", "penguin", "quilt",
    "robot", "sunflower", "train", "umbrella", "vulture", "whale", "xylophone", "yacht",
    "zebra", "airplane", "book", "camera", "drum", "engine", "flower", "glove", "hat",
    "insect", "jungle", "key", "lamp", "moon", "notebook", "orange", "parrot", "queen",
    "rose", "star", "tree", "unicorn", "violin", "windmill", "xylophone", "yellow", "zebra",
    "ant", "ball", "candle", "dolphin", "egg", "fire", "gift", "honey", "ice", "juice",
    "kite", "lemon", "mango", "nest", "ocean", "pencil", "quill", "ring", "sun", "tent"]

let index = Math.floor(Math.random() * words.length);
let typeWords = [];
let scoreValue = 0;
let timeCountdown = 60;

let randomWord = document.getElementById("word");
let input = document.getElementById("input");
let timer = document.getElementById("timer");
let score = document.getElementById("score");
let highScore = document.getElementById("high-score");


randomWord.innerHTML = words[index]
score.innerHTML = scoreValue;
timer.innerHTML = timeCountdown; 

function enterHandle(event) {
    if (event.key === "Enter") {
        let word = document.getElementById("input").value;
        typeWords.push(word);
        console.log(typeWords);
        checkWord();
    }
}

function checkWord(){
    if (typeWords == words[index]) {
        scoreValue++;
        score.innerHTML = scoreValue
        index = Math.floor(Math.random() * words.length);
        randomWord.innerHTML = words[index]
        document.getElementById("input").value = "";
        typeWords = [];
    } else {
        scoreHandle();
        index = Math.floor(Math.random() * words.length);
        randomWord.innerHTML = words[index]
        document.getElementById("input").value = "";
        typeWords = [];
    }
}

function scoreHandle() {
    if (scoreValue > 0){
        scoreValue--;
        score.innerHTML = scoreValue
    } else {
        scoreValue = 0;
        score.innerHTML = scoreValue
    }
}

function highScoreHandle() {
    let highScoreValue = 0;
    if (scoreValue > highScoreValue) {
        highScoreValue = scoreValue;
        highScore.innerHTML = highScoreValue;
    }
}

function timerHandle() {
    let countdown = setInterval(() => {
        timeCountdown--;
        timer.innerHTML = timeCountdown;
        if (timeCountdown === 0) {
            clearInterval(countdown);
            location.reload();
        }
    }
        , 1000);
}

function keyboardEffect() {
    const keyElements = document.querySelectorAll('.key');
    keyElements.forEach(key => {
        if (key.getAttribute('data-key') === event.keyCode.toString()) {
            key.classList.add('active');
            setTimeout(() => key.classList.remove('active'), 100);
        }
    });
}

document.body.addEventListener("keydown", enterHandle);
document.addEventListener('keydown', keyboardEffect);
timerHandle();

