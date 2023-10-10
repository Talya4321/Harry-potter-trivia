p1_name = localStorage.getItem("p1_name");
p2_name = localStorage.getItem("p2_name");

document.getElementById("p1_name").innerHTML = p1_name;
document.getElementById("p2_name").innerHTML = p2_name;

player1_score = 0;
player2_score = 0;

document.getElementById("player1_score").innerHTML = " : " + player1_score;
document.getElementById("player2_score").innerHTML = " : " + player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + p1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + p2_name;

function send() {
    get_que = document.getElementById("que").value;
    que_lowercase = get_que.toLowerCase();

    actual_answer = " ";

    if (que_lowercase == "who is the author of harry potter?") {
        actual_answer = "j.k.rowling";
    }
    else if (que_lowercase == "how many books are in harry potter?") {
        actual_answer = "seven";
    }
    else if (que_lowercase == "who is the main antagonist of harry potter?") {
        actual_answer = "voldemort";
    }
    else if (que_lowercase == "who is the protagonist of harry potter?") {
        actual_answer = "harry potter";
    }
    else if (que_lowercase == "what is the name of harry's owl?") {
        actual_answer = "hedwig";
    }
    else if (que_lowercase == "what house is draco malfoy a part of?") {
        actual_answer = "slytherin";
    }
    else if (que_lowercase == "what position does harry play on the gryffindor quidditch team?") {
        actual_answer = "seeker";
    }
    else if (que_lowercase == "who is the headmaster of hogwarts when harry first arrives?") {
        actual_answer = "dumbledore";
    }
    else if (que_lowercase == "what is the name of harry's cousin") {
        actual_answer = "dudley";
    }
    else if (que_lowercase == "how many siblings does ron have?") {
        actual_answer = "six";
    }

    document.getElementById("ans").style.display = "inline";
    document.getElementById("ss").style.display = "none";
    document.getElementById("al").style.display = "inline";
    document.getElementById("cc").style.display = "inline";



}

question_turn = p1_name;
answer_turn = p2_name;

function check() {
    get_ans = document.getElementById("ans").value;
    ans_lowercase = get_ans.toLowerCase();
    if (ans_lowercase != " ") {
        if (actual_answer == ans_lowercase) {
            if (answer_turn == p1_name) {
                player1_score = player1_score + 1;
                document.getElementById("player1_score").innerHTML = " : " + player1_score;
            }
            else {
                player2_score = player2_score + 1;
                document.getElementById("player2_score").innerHTML = " : " + player2_score;
            }
        }
    }
    if (question_turn == p1_name) {
        question_turn = p2_name;
        document.getElementById("player_question").innerHTML = "Question turn - " + question_turn;
    }
    else {
        question_turn = p1_name;
        document.getElementById("player_question").innerHTML = "Question turn - " + question_turn;
    }
    if (answer_turn == p1_name) {
        answer_turn = p2_name;
        document.getElementById("player_answer").innerHTML = "Answer turn - " + answer_turn;
    }
    else {
        answer_turn = p1_name;
        document.getElementById("player_answer").innerHTML = "Answer turn - " + answer_turn;
    }

    document.getElementById("que").value = " ";
    document.getElementById("ans").value = " ";

    document.getElementById("ans").style.display = "none";
    document.getElementById("ss").style.display = "inline";
    document.getElementById("al").style.display = "none";
    document.getElementById("cc").style.display = "none";

}