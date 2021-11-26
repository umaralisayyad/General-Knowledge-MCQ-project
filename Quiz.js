function check() {
    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var result1 = document.getElementById("result1");
    var quiz = document.getElementById("quiz");

    if (q1 == "Javascript") { c++ }
    if (q2 == "Russia") { c++ }
    if (q3 == "Bejing") { c++ }
    if (q4 == "Coronavirus") { c++ }
    if (q5 == "4") { c++ }

    quiz.style.display = "none";

    if (c <= 3) {
        result1.textContent = 'Your result is $(c) . Please work on your performance.'
    } else {
        result1.textContent = 'Your result is $(c) . Good score!! keep it up.'
    }

}