// Declare a Variable to access HighScore ol 
var highscores = document.querySelector("#highscores");
// Declare a Variable to access the clear button
var clear = document.querySelector("#clear");
// Empty Arrays
var namelist=[];
var scorlist=[];

retivedata();
show_high_score();
// Show Score on HighScore Screen
function show_high_score()
{
    // if array has some data which it get from local Storage
        if(namelist.length !==0)
        {
            // Make a loop to create as any li as many names are in array
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
        }
   
}
// Function to load local storage values to variables
function retivedata(){
    // Retrieve User name date in to a variable
    var usernames= JSON.parse(localStorage.getItem("user_name"));
    // Retrieve Score date in to a variable
    var score= JSON.parse(localStorage.getItem("score"));

    // id user array have some data
    if(usernames !== null)
    {
        namelist=usernames;

    }
    // if user array have no data to show
    else{
        namelist=[];
    }
   // if Score array have data to show
    if(score !== null)
    {
        scorlist=score;

    }
    // if Score array have no data to show
    else{
        scorlist=[];
    }


}


// Function  to clear to the local storage 
clear.addEventListener("click", function(){
    // remove data from local storage by keys
    localStorage.removeItem("user_name");
    localStorage.removeItem("score");
    
    retivedata();
    show_high_score();
});