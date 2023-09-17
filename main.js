function changeImage() {
    let displayImage = document.getElementById('image1')
    if (displayImage.src.match('image/daruma.jpg')) {
        displayImage.src = 'image/jaxa.jpg'
    } else if (displayImage.src.match('image/jaxa.jpg')) {
        displayImage.src = 'image/chatarou.jpg'
    } else {
        displayImage.src = 'image/daruma.jpg'
    }
}
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker);
function divMaker(text) {
    const flashcards = document.getElementById("flashcards");
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    div.className = 'flashcard';

    h2_question.setAttribute('style', "border-top: 1px solid red; padding: 15px; margin-top: 30px");
    h2_question.innerHTML = text.my_question;
    h2_answer.setAttribute("style", "text-align:center; display:none; color:red");
    h2_answer.innerHTML = text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function () {
        if (h2_answer.style.display == "none")
            h2_answer.style.display = "block";
        else
            h2_answer.style.display = "none";
    });
    flashcards.appendChild(div);
}

function addFlashcard() {
    const question = document.getElementById("question");
    const answer = document.getElementById("answer");
    console.log(question);
    var flashcard_info = {
        'my_question': question.value,
        'my_answer': answer.value
    }

    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value = '';
    answer.value = '';
}
function delFlashcards() {
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}
function showCreateCardBox() {
    const createBox = document.getElementById("create-box");
    createBox.style.display = "block";
}
function hideCreateBox() {
    const createBox = document.getElementById("create-box");
    createBox.style.display = "none";
}