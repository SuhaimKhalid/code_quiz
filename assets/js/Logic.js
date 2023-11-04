
var start_quiz = document.querySelector("#start");
var start_screen = document.querySelector("#start-screen");

var question_screen = document.querySelector("#questions");

    var question_title = document.querySelector("#question-title");

    var choices = document.querySelector("#choices");

    var time = document.querySelector("#time");
    var count=40;
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
