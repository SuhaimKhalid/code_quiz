
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

// start quiz
start_quiz.addEventListener("click",function()
{
document.getElementById("start-screen").className = "hide";
document.getElementById('questions').className = "";
timerfunction();
questiondisplay();

        
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



function timerfunction (){

var timer = setInterval(function(){
    time.textContent=count;
    count--;
    if(count<0)
    {
        if(qn>questions.length-2)
        {
        clearInterval(timer);
        }
        else{
        count=40;
        qn++;
        questiondisplay();
        
    }

    }
    else{

    }
},100);

}
