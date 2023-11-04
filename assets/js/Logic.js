
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

var count=75; //Declare a variable to have number valur that can be shown on the screen
var qn=0;

// Function to Start quiz on the click of button
start_quiz.addEventListener("click",function()
{

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

    },1000);
   
});


function questiondisplay(){


question_title.textContent = questions[qn].question;
for(var i=0; i<questions[qn].answers.length; i++)
{
    var button = document.createElement("button");
    choices.appendChild(button);
    if(button.length>4)
    {
        button.remove();
    } 
    button.textContent= i+1 +"."+ questions[0].answers[i];    
}
}



// function timerfunction (){

// var timer = setInterval(function(){
//     time.textContent=count;
//     count--;
//     if(count<0)
//     {
//         if(qn>questions.length-2)
//         {
//         clearInterval(timer);
//         }
//         else{
//         count=40;
//         qn++;
//         questiondisplay();
        
//     }

//     }
//     else{

//     }
// },1000);

// }
