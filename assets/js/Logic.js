
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


// Delcare a variable to get the div of Question screen
var end_screen = document.querySelector("#end-screen");

var finalscore = document.querySelector("#final-score");
//Declare a variable to have number valur that can be shown on the screen
var count=75;
var qn=0;
var score=0;

// Function to Start quiz on the click of button
start_quiz.addEventListener("click",function(event)
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
    // When countdown goes to 0 then terminate the timer
    if(count<0)
    {
       clearInterval(timer); // To stop the timer
    }
    else{
       
    }

    },1000);

    // Start the Question function
    questiondisplay(event);
   
});


// Function to display questions and anwers on the screen
function questiondisplay(){
    
   
    question_title.textContent = questions[qn].question;
    for(var i=0; i<questions[qn].answers.length; i++)
    {
    
        var button = document.createElement("button");
    choices.appendChild(button);
    button.textContent= i+"."+ questions[qn].answers[i]; 
    button.setAttribute("data-index", i);  

    //Get the target button on the screen
    button.addEventListener("click",function getanswer(event){
       
        if(event.target.dataset.index == questions[qn].correct)
        {
          score+=10;
            
            while(choices.hasChildNodes())
            {
                choices.removeChild(choices.firstChild);
            }
            if(qn < questions.length-1)
            {
                qn++;
               
                questiondisplay();
            }
            // else
            // {
            //     end_screen.setAttribute("class","");
            //     question_screen.setAttribute("class","hide");
            //     finalscore.textContent= score;

            //     count=0;

            // }

            
        }
        else{
           
            count-=10;
            while(choices.hasChildNodes())
            {
                choices.removeChild(choices.firstChild);
            }
            if(qn < questions.length-1)
            {
                qn++;
               
                questiondisplay();
            }
            // else
            // {
            //     end_screen.setAttribute("class","");
            //     question_screen.setAttribute("class","hide");
            //     finalscore.textContent= score;

            //     count=0;

            // }
            
        }
    });
    }

}




