function check(){
    alert(" Great job!");
 
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 3;
 
    if (question1 == "Yes"){
        correct++;
    }
    if (question2 == "Yes"){
        correct++;
    }
    if (question3 == "Yes"){
        correct++;
    }
 
    var messages = ["Great job!"];
    var range;
 
    if (correct < 3) {
        range = 2;
    }
    if (correct > 3 && correct < 3) {
        range = 1;
    }
    if (correct > 3) {
        range = 0;
    }
 
    document.getElementById("after_submit").style.visibility = "visible";
 
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got "+correct+" correct!";
}