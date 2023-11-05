// Declare a Vaiavle to access HighScore ol 
var highscores = document.querySelector("#highscores");


// Show Score on HighScore Screen
function show_high_score()
{

    // Getting Value from local Storage
    var localStorage_user_name = localStorage.getItem("user_name");
    var localStorage_score = localStorage.getItem("score");

    var score_li = document.createElement("li");
    highscores.appendChild(score_li);
    score_li.textContent= localStorage_user_name + " - " + localStorage_score;
    
}
show_high_score();