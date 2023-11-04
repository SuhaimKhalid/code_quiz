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
// Declare a Vaiable to show the final score on the screen
var finalscore = document.querySelector("#final-score");


var count=75;    //To show Count down timer
var qn=0;       //Number of questions
var score=0;   //Save score on the base of right answer

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
    },1000);

    // Start the Question function
    questiondisplay(event);
   
});


// Function to display questions and anwers on the screen
function questiondisplay(){
    
    //To show the question on the screen from the array of question
    question_title.textContent = questions[qn].question;
    // Make a loop to show all answer related to the question
    for(var i=0; i<questions[qn].answers.length; i++)
    {
    
    // Create Button on HTML By Javascript 
    var button = document.createElement("button");
    // Add Newly Created button to the choice name id div
    choices.appendChild(button);
    // Show the answers in the button
    button.textContent= i+"."+ questions[qn].answers[i]; 
    button.setAttribute("data-index", i);  

    //Make the function to get the target of button on which we click
    button.addEventListener("click",function getanswer(event){
       
        // Checking if answer is correct or not
        if(event.target.dataset.index == questions[qn].correct)
        {
          score+=10; //Add 10 score
            
          // To remove the buttons which we created early if they are already existed remove them
            while(choices.hasChildNodes())
            {
                choices.removeChild(choices.firstChild);
            }
            // Checking to not exceed from the length of questions
            if(qn < questions.length-1)
            {
                qn++;
                questiondisplay(); //Calling the question function
            }
            else //When questons are completed
            {
               
                end_screen.setAttribute("class","");             //Show end Screen
                question_screen.setAttribute("class","hide");   //Hide Question screen
                finalscore.textContent= score;                 //Display the score of the questions
                count=0;                                      //To stop the timer
            }

        }
        else{
           
            count-=10; //Decrement in Timer if answer is wrong
             // To remove the buttons which we created early if they are already existed remove them
            while(choices.hasChildNodes())
            {
                choices.removeChild(choices.firstChild);
            }
             // Checking to not exceed from the length of questions
            if(qn < questions.length-1)
            {
                qn++;
                questiondisplay();  //Calling the question function
            }
            else
            {
                end_screen.setAttribute("class","");             //Show end Screen
                question_screen.setAttribute("class","hide");   //Hide Question screen
                finalscore.textContent= score;                 //Display the score of the questions
                count=0;                                      //To stop the timer
            }
            
        }
    });
    }

}




