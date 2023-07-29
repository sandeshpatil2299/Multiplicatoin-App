//creating random numbers
const nbr1= Math.round(Math.random()*20);
const nbr2= Math.round(Math.random()*20);

//selecting html elements
const quetionNbr= document.getElementById("quetion");
const answer= document.getElementById("answer");
const scoreEl= document.getElementById("score");

//getting score from local storage
let score= JSON.parse(localStorage.getItem("score"));

//when score not present in local storage set it to zero
if(!score)
{
   score= 0;
}

scoreEl.innerText= `Score : ${score}`;

const corAns= nbr1*nbr2;

quetionNbr.innerHTML= `What is ${nbr1} * ${nbr2} ?`;


const form= document.getElementById("form");

//storing score to local storage
const scoreToLocalStorage= () =>
{
   localStorage.setItem("score", JSON.stringify(score));
}

//checking answer and increasing or decreasing score
const checkAnswer= (event) =>
{
   const ansCheck= +answer.value;

   if(ansCheck === corAns)
   {
      score++;
      scoreToLocalStorage();
   }
   else
   {
      score--;
      scoreToLocalStorage();
   }
}

form.addEventListener("submit", checkAnswer);