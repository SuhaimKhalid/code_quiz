
// Delcare a varaible to the id of button to start quiz
var start_quiz = document.querySelector("#start");
// Delcare a variable to get the div of start screen
var start_screen = document.querySelector("#start-screen");
// Delcare a variable to get the div of Question screen
var question_screen = document.querySelector("#questions");
// Delcare a variable to get the h2 from question section
var question_title = document.querySelector("#question-title");
// Delcare a variable to show option of answers
var choices = document.querySelector("#choices");
// Delcare a variable to show time countdown
var time = document.querySelector("#time");

//Declare a variable to have number valur that can be shown on the screen
var count=75;
var qn=0;

// Function to Start quiz on the click of button
start_quiz.addEventListener("click",function()
{
    // To show timer on the screen immediatley after the code run
    time.textContent=count; //time:75
    // Hide the start Screen
    document.getElementById("start-screen").className = "hide";
    // Show the question Screen
    document.getElementById('questions').className = "";

    // Start the timer
    var timer = setInterval(function(){
    time.textContent=count; //Display the timeleft on the screen
    count--; //Decrement from the timer
    if(count<0)
    {
       clearInterval(timer);
    }
    else{
       
    }

    },1000);

    // Start the Question function
    questiondisplay();
   
});


// Function to display questions and anwers on the screen
function questiondisplay(event){

for(var q=0; q<questions.length; q++)
{
    question_title.textContent = questions[q].question;
    for(var i=0; i<questions[q].answers.length; i++)
    {
    var button = document.createElement("button");
    choices.appendChild(button);
    button.textContent= i+1 +"."+ questions[q].answers[i]; 
    button.setAttribute("data-index", i+1);  
    answer();
    }

}

};

function answer(event){

console.log(event.target);
}
