const question = [

     {
        question:"Rohit Sharma Captain Of Which Team In Ipl",
        answers :[

            {text:"MI",correct:true},
            {text:"CSK",correct:false},
            {text:"RCB",correct:false},
            {text:"KKR",correct:false},
        ]
      },
      {
        question:"In Which Year Virat Kohli Score 4 hundreds",
        answers :[

            {text:"2016",correct:true},
            {text:"2014",correct:false},
            {text:"2023",correct:false},
            {text:"2009",correct:false},
        ]
    },
    {
        question:"Highest Run Scorer In World Cup 2023",
        answers :[

            {text:"Virat Kohli",correct:true},
            {text:"Rohit Sharma",correct:false},
            {text:"KL Rahul",correct:false},
            {text:"David Warner",correct:false},
        ]
    },
    {
        question:"Highest Run Scorer In World Cup 2019",
        answers :[

            {text:"Rohit Sharma",correct:true},
            {text:"ABD",correct:false},
            {text:"Smith",correct:false},
            {text:"Shikar Dhawan",correct:false},
        ]
    },
    {
        question:"Player Of Match In World Cup 2011",
        answers :[

            {text:"Rohit Sharma",correct:false},
            {text:"ABD",correct:false},
            {text:"MS Dhoni",correct:true},
            {text:"Shikar Dhawan",correct:false},
        ]
    },

]

const questionelement = document.getElementById("QUESTION");
const answerbutton = document.getElementById("answer-btn");
const nextbtn = document.getElementById("next-btn");
let currentquestionindex =0;
let score = 0;

function startquiz(){
    currentquestionindex =0;
    score=0;
    nextbtn.innerHTML = "Next";
    Showquestion();
}
function Showquestion(){
   resetState();
   let currentquestion = question[currentquestionindex];
   let questionNumber  = currentquestionindex + 1;
   questionelement.innerHTML=questionNumber+". "+currentquestion.question;
   
   currentquestion.answers.forEach(answers =>{
   const button = document.createElement("button");
   button.innerHTML=answers.text;
   button.classList.add("btn");
   answerbutton.appendChild(button);

   if(answers.correct){

    button.dataset.correct= answers.correct;
   }
   
   button.addEventListener("click" , selectAnswer);
   });
   
   

}
function selectAnswer(e){

    const setectedbtn = e.target;
    const iscorrect =setectedbtn.dataset.correct==="true";
    if(iscorrect){
        setectedbtn.classList.add("correct");
        score++;

    }
    else{
        setectedbtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
         button.classList.add("correct");
         }
         button.disabled = true;
      
        });
        nextbtn.style.display="block";
    
    
}
function resetState(){

    nextbtn.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function showscore(){
    resetState();
    questionelement.innerHTML=`you score ${score}`;
    nextbtn.innerHTML="Retake";
    nextbtn.style.display="block";
}
function handlenextbtn(){
    currentquestionindex++;
 if(currentquestionindex < question.length){

    Showquestion();

 }else{
    showscore();
 }

}
nextbtn.addEventListener("click" ,()=>{
 if(currentquestionindex < question.length){
    handlenextbtn();
 }else{
    startquiz();
    
 }

});
startquiz();




