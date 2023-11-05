// Declare a Vaiavle to access HighScore ol 
var highscores = document.querySelector("#highscores");

var clear = document.querySelector("#clear");
var namelist=[];
var scorlist=[];

retivedata();
show_high_score();
// Show Score on HighScore Screen
function show_high_score()
{
        if(namelist.length !==0)
        {
            
            for(var i=0; i<namelist.length; i++)
            {
                var score_li = document.createElement("li");
                highscores.appendChild(score_li);
                score_li.textContent= namelist[i] + " - " + scorlist[i];
            }
        }
        else{
              // To remove the buttons which we created early if they are already existed remove them
              while(highscores.hasChildNodes())
              {
                highscores.removeChild(highscores.firstChild);
              }
              console.log("clear");
        }
   
}

function retivedata(){
    var usernames= JSON.parse(localStorage.getItem("user_name"));
    var score= JSON.parse(localStorage.getItem("score"));

    if(usernames !== null)
    {
        namelist=usernames;

    }
    else{
        namelist=[];
    }

    if(score !== null)
    {
        scorlist=score;

    }
    else{
        scorlist=[];
    }


}


clear.addEventListener("click", function(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("score");
    
    retivedata();
    show_high_score();
});