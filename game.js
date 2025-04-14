const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull =document.getElementById('progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true;
let questions= [
    {
        question:"SCD, TEF, UGH, ___, WKL",
        choice1:"CMN",
        choice2:"UJI",
        choice3:"IJT",
        choice4:"VIJ",
        answer: 4
    },
    {
        question:"If   VGMACQ is coded as WHNCDR, then what will be the code for MOTHER ?",
        choice1:"NQUIGS",
        choice2:"DSUIGS",
        choice3:"TFDEWK",
        choice4:"OPDEWK",
        answer: 1
    },
    {
        question:" If A is the mother of B, B is the son of C, and C is the brother of D, how is D related to A?",
        choice1:"nephew",
        choice2:"uncle",
        choice3:"brother-in-law",
        choice4:"cousin",
        answer: 3
    },
    {
        question:"A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?",
        choice1:"uncle",
        choice2:"nephew",
        choice3:"brother",
        choice4:"cousin",
        answer: 4
    },
    {
        question:"What price must a dealer sell an article for to gain 5%, if selling it for Rs. 1805 results in a 5% loss?",
        choice1:"Rs.1999",
        choice2:"Rs.1995",
        choice3:"Rs.1985",
        choice4:"Rs.1988",
        answer: 2
    },
    {
        question:" A person buys 20 pens for Rs. 10 and sells 15 pens for Rs. 10. Find his profit or loss percent. ",
        choice1:"33.334%",
        choice2:"33.654%",
        choice3:"33.446%",
        choice4:"33.333%",
        answer: 1
    } ,
    {
        question:"How far will the robber run before being caught if the robber runs at 8 km/hr and the policeman at 10 km/hr, starting 300 meters apart?",
        choice1:"1.1km",
        choice2:"1.6km",
        choice3:"1.4km",
        choice4:"1.2km",
        answer: 4
    } ,
    {
        question:"Can a runner complete a 750m race in 2.5 minutes faster than another running at 17.95 km/hr?",
        choice1:"probably",
        choice2:"maybe",
        choice3:"yes",
        choice4:"no",
        answer: 3
    } ,
    {
        question:" Find the total number of prime factors in the expression (14)11 x (7)2 x (11)3 ?",
        choice1:"21",
        choice2:"27",
        choice3:"34",
        choice4:"31",
        answer: 2
    } ,
    {
        question:"What is the least number that must be added to 9999 to make it exactly divisible by 19 ?",
        choice1:"14",
        choice2:"15",
        choice3:"16",
        choice4:"13",
        answer: 1
    },



    {
        question: "A person is facing north. He turns 90° clockwise, then 180° anticlockwise. Which direction is he facing now?",
        choice1: "North",
        choice2: "East",
        choice3: "South",
        choice4: "West",
        answer: 3
    },
    {
        question: "A train 150 meters long is running at a speed of 45 km/h. How long will it take to cross a bridge 250 meters long?",
        choice1: "30 seconds",
        choice2: "45 seconds",
        choice3: "60 seconds",
        choice4: "75 seconds",
        answer: 2
    },
    {
        question: "If 5 workers can finish a task in 20 days, how many workers are needed to complete the task in 10 days?",
        choice1: "5",
        choice2: "10",
        choice3: "15",
        choice4: "20",
        answer: 2
    },
    {
        question: "In a family of six members P, Q, R, S, T, and U, there are two married couples. P is a teacher and the father of T. R is a teacher and the son of U. Q is the wife of P. S is the mother of T. Who is the brother of T?",
        choice1: "P",
        choice2: "R",
        choice3: "S",
        choice4: "U",
        answer: 2
    },
    {
        question: "What will come next in the sequence: 3, 7, 15, 31, ___?",
        choice1: "55",
        choice2: "63",
        choice3: "62",
        choice4: "64",
        answer: 2
    },
    {
        question: "The sum of the ages of a mother and her daughter is 60 years. The mother’s age is 4 times the daughter’s age. How old is the daughter?",
        choice1: "12 years",
        choice2: "15 years",
        choice3: "18 years",
        choice4: "20 years",
        answer: 1
    },
    {
        question: "Find the odd one out: 27, 125, 343, 512, 729",
        choice1: "125",
        choice2: "343",
        choice3: "512",
        choice4: "729",
        answer: 3
    },
    {
        question: "In a box, there are 5 red balls, 8 blue balls, and 7 green balls. If a ball is picked at random, what is the probability that the ball is either blue or green?",
        choice1: "15/20",
        choice2: "1/2",
        choice3: "3/5",
        choice4: "13/20",
        answer: 4
    },
    {
        question: "What is the next number in the series: 1, 4, 9, 16, 25, ___?",
        choice1: "36",
        choice2: "40",
        choice3: "50",
        choice4: "30",
        answer: 1
    },
    {
        question: "A car travels 60 km in 1 hour and 30 minutes. What is its average speed?",
        choice1: "30 km/h",
        choice2: "40 km/h",
        choice3: "50 km/h",
        choice4: "60 km/h",
        answer: 2
    },
    {
        question: "A man is 3 times as old as his son. In 8 years, the man will be twice as old as his son. What is their present ages?",
        choice1: "Son: 8, Man: 24",
        choice2: "Son: 6, Man: 18",
        choice3: "Son: 5, Man: 15",
        choice4: "Son: 10, Man: 30",
        answer: 2
    },
    {
        question: "What is the least number that must be added to 85 to make it a perfect square?",
        choice1: "5",
        choice2: "9",
        choice3: "11",
        choice4: "15",
        answer: 9
    },
    {
        question: "A clock shows 9:00 AM. What is the angle between the hour hand and the minute hand?",
        choice1: "90 degrees",
        choice2: "120 degrees",
        choice3: "135 degrees",
        choice4: "150 degrees",
        answer: 1
    },
    {
        question: "A man spends 1/3 of his salary on rent, 1/4 on groceries, and 1/5 on utilities. What fraction of his salary is remaining?",
        choice1: "1/15",
        choice2: "1/10",
        choice3: "1/6",
        choice4: "1/2",
        answer: 3
    },
    {
        question: "If two trains are 100 miles apart and are heading toward each other, and each train is moving at 50 miles per hour, how long will it take for the two trains to meet?",
        choice1: "1 hour",
        choice2: "1.5 hours",
        choice3: "2 hours",
        choice4: "3 hours",
        answer: 1
    },
    {
        question: "What is the next number in the series: 1, 4, 10, 19, 31, ___?",
        choice1: "35",
        choice2: "42",
        choice3: "45",
        choice4: "52",
        answer: 2
    },
    {
        question: "If the perimeter of a rectangle is 36 cm and the length is 10 cm, what is the width of the rectangle?",
        choice1: "5 cm",
        choice2: "6 cm",
        choice3: "8 cm",
        choice4: "12 cm",
        answer: 2
    },
    {
        question: "A man walks 20 meters towards the east, then 30 meters towards the north, then 20 meters towards the west, and then 30 meters towards the south. What is his final position relative to his starting point?",
        choice1: "20 meters East",
        choice2: "30 meters North",
        choice3: "20 meters West",
        choice4: "At the starting point",
        answer: 4
    },
    {
        question: "A father is 4 times as old as his son. After 20 years, he will be twice as old as his son. What are their present ages?",
        choice1: "Father: 40, Son: 10",
        choice2: "Father: 60, Son: 15",
        choice3: "Father: 50, Son: 20",
        choice4: "Father: 80, Son: 20",
        answer: 1
    },
    {
        question: "If the sum of two consecutive even numbers is 34, what is the difference between them?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "8",
        answer: 1
    },
    {
        question: "What is the area of a circle with a radius of 7 cm? (Use π = 3.14)",
        choice1: "154 cm²",
        choice2: "138 cm²",
        choice3: "100 cm²",
        choice4: "153 cm²",
        answer: 1
    },
    {
        question: "The sum of two numbers is 35, and their difference is 5. What are the two numbers?",
        choice1: "15, 20",
        choice2: "10, 25",
        choice3: "12, 23",
        choice4: "17, 18",
        answer: 1
    },
    {
        question: "In a box, there are 10 red balls, 12 blue balls, and 8 green balls. If a ball is picked at random, what is the probability that it is a red ball?",
        choice1: "10/30",
        choice2: "10/20",
        choice3: "1/3",
        choice4: "1/2",
        answer: 1
    },
    {
        question: "A number is increased by 20%, and then the result is decreased by 10%. What is the final percentage change?",
        choice1: "8% increase",
        choice2: "10% increase",
        choice3: "6% increase",
        choice4: "5% decrease",
        answer: 3
    },



    {
        question: "What is the next number in the sequence: 1, 4, 27, 256, ___?",
        choice1: "1024",
        choice2: "625",
        choice3: "512",
        choice4: "729",
        answer: 1
    },
    {
        question: "The sum of a number and its square is 42. What is the number?",
        choice1: "6",
        choice2: "7",
        choice3: "5",
        choice4: "8",
        answer: 2
    },
    {
        question: "In a family of five members P, Q, R, S, and T, there are two married couples. P is the brother of S and the father of T. Q is the wife of P and the daughter of R. T is the daughter of P. Who is the wife of R?",
        choice1: "Q",
        choice2: "S",
        choice3: "T",
        choice4: "None",
        answer: 2
    },
    {
        question: "What is the next number in the sequence: 3, 6, 18, 72, ___?",
        choice1: "180",
        choice2: "288",
        choice3: "2880",
        choice4: "432",
        answer: 4
    },
    {
        question: "A man can complete a job in 15 days. His son can complete the same job in 20 days. How long will they take to complete the job if they work together?",
        choice1: "8 days",
        choice2: "10 days",
        choice3: "12 days",
        choice4: "13 days",
        answer: 2
    },
    {
        question: "If 2/3 of a number is 12, what is the number?",
        choice1: "6",
        choice2: "18",
        choice3: "15",
        choice4: "9",
        answer: 2
    },
    {
        question: "If a car travels at 60 km/h for 2 hours and 45 minutes, how far will it have traveled?",
        choice1: "125 km",
        choice2: "150 km",
        choice3: "180 km",
        choice4: "200 km",
        answer: 1
    },
    {
        question: "In a certain code, CAT is written as DBU. How is DOG written in that code?",
        choice1: "EPE",
        choice2: "EPF",
        choice3: "EOF",
        choice4: "EOG",
        answer: 2
    },
    {
        question: "In a class of 40 students, 16 are girls and the rest are boys. What is the ratio of boys to girls?",
        choice1: "2:1",
        choice2: "3:1",
        choice3: "5:2",
        choice4: "3:2",
        answer: 2
    },
    {
        question: "If a car covers 60 miles in 1 hour and 12 minutes, what is its speed in miles per hour?",
        choice1: "50 mph",
        choice2: "60 mph",
        choice3: "55 mph",
        choice4: "48 mph",
        answer: 1
    },
    {
        question: "The perimeter of a rectangle is 48 meters, and its length is 14 meters. What is the width?",
        choice1: "10 meters",
        choice2: "7 meters",
        choice3: "6 meters",
        choice4: "8 meters",
        answer: 4
    },
    {
        question: "A man walks 5 km towards the south, then turns left and walks 10 km. How far is he from his starting point?",
        choice1: "10 km",
        choice2: "12 km",
        choice3: "15 km",
        choice4: "13 km",
        answer: 2
    },
    {
        question: "What is the area of a rectangle with a length of 8 cm and width of 5 cm?",
        choice1: "40 cm²",
        choice2: "35 cm²",
        choice3: "45 cm²",
        choice4: "50 cm²",
        answer: 1
    },
    {
        question: "What is the next number in the series: 3, 7, 15, 31, ___?",
        choice1: "63",
        choice2: "62",
        choice3: "64",
        choice4: "61",
        answer: 1
    },
    {
        question: "A woman bought 20 pens for $8. How much would she pay for 60 pens?",
        choice1: "$20",
        choice2: "$24",
        choice3: "$26",
        choice4: "$30",
        answer: 2
    },
    {
        question: "Find the odd one out: 5, 10, 15, 20, 25, 30, 35, 40, 50, 45",
        choice1: "10",
        choice2: "25",
        choice3: "45",
        choice4: "40",
        answer: 3
    },
    {
        question: "The sum of a number and its cube is 72. What is the number?",
        choice1: "4",
        choice2: "3",
        choice3: "2",
        choice4: "5",
        answer: 2
    },
    {
        question: "A car travels 120 km in 3 hours. How long will it take to travel 200 km at the same speed?",
        choice1: "4 hours",
        choice2: "5 hours",
        choice3: "6 hours",
        choice4: "7 hours",
        answer: 2
    },
    {
        question: "A person is facing west. He turns 90° clockwise, then 180° anticlockwise. Which direction is he facing now?",
        choice1: "East",
        choice2: "West",
        choice3: "North",
        choice4: "South",
        answer: 3
    },
    {
        question: "What is the least number that must be added to 87 to make it divisible by 5?",
        choice1: "3",
        choice2: "5",
        choice3: "7",
        choice4: "10",
        answer: 1
    },
    {
        question: "How many three-digit numbers can be formed using the digits 3, 5, and 7 if repetition of digits is allowed?",
        choice1: "9",
        choice2: "27",
        choice3: "81",
        choice4: "64",
        answer: 2
    },
    {
        question: "The sum of three consecutive numbers is 51. What is the middle number?",
        choice1: "17",
        choice2: "16",
        choice3: "18",
        choice4: "15",
        answer: 1
    },
    {
        question: "A box contains 6 red balls, 4 green balls, and 2 blue balls. What is the probability of drawing a blue ball?",
        choice1: "1/3",
        choice2: "1/6",
        choice3: "2/12",
        choice4: "1/2",
        answer: 2
    }

   
];


/*constants*/
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = shuffle([...questions]).slice(0, MAX_QUESTIONS);
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter >=MAX_QUESTIONS){
        /*localStorage.setItem("mostRecentScore",score);*/
        return window.location.assign('end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    /*progress bar*/
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;


    const questionIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener("click",e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
          selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

          if(classToApply == "correct"){
            incrementScore(CORRECT_BONUS);
          }
        
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        },1000)
    });

});

incrementScore = num =>{
    score += num;
    scoreText.innerText =score;
};

startGame();
