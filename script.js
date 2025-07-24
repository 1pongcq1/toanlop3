function startQuiz() {
    let table = document.getElementById("tableSelect").value;
    document.getElementById("quizContainer").style.display = "block";
    let quiz = document.getElementById("quiz");
    quiz.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        let question = document.createElement("div");
        question.innerHTML = `
            <label for="q${i}">${table} x ${i} = </label>
            <input type="number" id="q${i}" />
        `;
        quiz.appendChild(question);
    }
}

function checkAnswers() {
    let table = document.getElementById("tableSelect").value;
    let correct = 0;

    for (let i = 1; i <= 10; i++) {
        let userAnswer = document.getElementById(`q${i}`).value;
        let correctAnswer = table * i;
        
        if (parseInt(userAnswer) === correctAnswer) {
            correct++;
        }
    }

    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
    document.getElementById("result").innerHTML = `Bạn đúng ${correct}/10 câu hỏi.`;
}
