const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull =document.getElementById('progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true;
let questions= [
    {
        question: "If a car travels 120 km in 2 hours, what is its average speed?",
        choice1: "50 km/h",
        choice2: "55 km/h",
        choice3: "60 km/h",
        choice4: "65 km/h",
        answer: 3
    },
    {
        question: "If 5x - 3 = 22, what is the value of x?",
        choice1: "5",
        choice2: "6",
        choice3: "7",
        choice4: "8",
        answer: 2
    },
    {
        question: "If the ratio of boys to girls in a class is 3:4, and there are 21 boys, how many girls are there?",
        choice1: "27",
        choice2: "28",
        choice3: "24",
        choice4: "25",
        answer: 3
    },
    {
        question: "A sum of money doubles in 5 years. What is the annual compound interest rate?",
        choice1: "10%",
        choice2: "12%",
        choice3: "15%",
        choice4: "14%",
        answer: 1
    },
    {
        question: "What is the area of a rectangle with a length of 12 cm and a width of 5 cm?",
        choice1: "60 cm²",
        choice2: "55 cm²",
        choice3: "50 cm²",
        choice4: "45 cm²",
        answer: 1
    },
    {
        question: "Solve for x: 2x + 5 = 3x - 7",
        choice1: "x = -12",
        choice2: "x = 12",
        choice3: "x = 1",
        choice4: "x = -1",
        answer: 1
    },
    {
        question: "The sum of the ages of A, B, and C is 75. A is 5 years older than B, and C is 3 years younger than B. How old is B?",
        choice1: "25",
        choice2: "26",
        choice3: "24",
        choice4: "22",
        answer: 1
    },
    {
        question: "A train travels at 90 km/h. How far will it travel in 4 hours?",
        choice1: "360 km",
        choice2: "350 km",
        choice3: "340 km",
        choice4: "330 km",
        answer: 1
    },
    {
        question: "If the perimeter of a square is 36 cm, what is the length of each side?",
        choice1: "6 cm",
        choice2: "7 cm",
        choice3: "8 cm",
        choice4: "9 cm",
        answer: 1
    },
    {
        question: "Solve for x: 5x/3 = 15",
        choice1: "x = 9",
        choice2: "x = 10",
        choice3: "x = 12",
        choice4: "x = 13",
        answer: 1
    },
    {
        question: "If 3a + 4 = 19, what is the value of a?",
        choice1: "5",
        choice2: "6",
        choice3: "7",
        choice4: "8",
        answer: 1
    },
    {
        question: "A person invests $1000 at 8% annual interest. How much money will the investment be worth after 3 years if the interest is compounded annually?",
        choice1: "$1260",
        choice2: "$1280",
        choice3: "$1300",
        choice4: "$1320",
        answer: 1
    },
    {
        question: "The sum of two numbers is 80, and their difference is 20. What are the numbers?",
        choice1: "30 and 50",
        choice2: "40 and 60",
        choice3: "35 and 45",
        choice4: "20 and 60",
        answer: 1
    },
    {
        question: "What is the volume of a cylinder with radius 4 cm and height 10 cm? (Use π = 3.14)",
        choice1: "125.6 cm³",
        choice2: "150.8 cm³",
        choice3: "160.5 cm³",
        choice4: "130.2 cm³",
        answer: 1
    },
    {
        question: "A box contains 6 red balls, 8 green balls, and 10 blue balls. What is the probability of randomly selecting a green ball?",
        choice1: "4/12",
        choice2: "1/5",
        choice3: "2/5",
        choice4: "1/3",
        answer: 3
    },
    {
        question: "The cost of 5 pens and 3 notebooks is $26. If the price of one pen is $2, what is the price of one notebook?",
        choice1: "$4",
        choice2: "$5",
        choice3: "$6",
        choice4: "$7",
        answer: 1
    },
    {
        question: "If 2x + 3 = 15, what is the value of x?",
        choice1: "4",
        choice2: "5",
        choice3: "6",
        choice4: "7",
        answer: 1
    },
    {
        question: "A farmer has a rectangular field with a length of 50 meters and a width of 30 meters. What is the area of the field?",
        choice1: "1500 m²",
        choice2: "1600 m²",
        choice3: "1700 m²",
        choice4: "1400 m²",
        answer: 1
    },
    {
        question: "A car travels 300 km in 5 hours. What is its average speed?",
        choice1: "55 km/h",
        choice2: "60 km/h",
        choice3: "65 km/h",
        choice4: "70 km/h",
        answer: 2
    },
    {
        question: "If the area of a circle is 78.5 cm², what is the radius of the circle? (Use π = 3.14)",
        choice1: "5 cm",
        choice2: "6 cm",
        choice3: "7 cm",
        choice4: "8 cm",
        answer: 1
    },
    {
        question: "The price of a shirt is $40, and it is on sale for 25% off. What is the sale price?",
        choice1: "$30",
        choice2: "$32",
        choice3: "$35",
        choice4: "$38",
        answer: 1
    },
    {
        question: "What is the sum of the angles in a triangle?",
        choice1: "180°",
        choice2: "360°",
        choice3: "90°",
        choice4: "270°",
        answer: 1
    },
    {
        question: "A person buys a shirt for $50 and sells it for $60. What is the profit percentage?",
        choice1: "20%",
        choice2: "15%",
        choice3: "25%",
        choice4: "10%",
        answer: 1
    },
    {
        question: "If a box contains 10 red balls, 15 blue balls, and 20 green balls, what is the probability of randomly selecting a red ball?",
        choice1: "1/3",
        choice2: "1/2",
        choice3: "1/4",
        choice4: "1/5",
        answer: 1
    },
    {
        question: "What is the square root of 144?",
        choice1: "10",
        choice2: "12",
        choice3: "14",
        choice4: "16",
        answer: 2
    },
    {
        question: "Solve for x: 4x - 5 = 3x + 7",
        choice1: "x = 12",
        choice2: "x = 7",
        choice3: "x = 2",
        choice4: "x = 3",
        answer: 3
    },
    {
        question: "If a car moves at a speed of 72 km/h, how far will it travel in 4 hours?",
        choice1: "288 km",
        choice2: "280 km",
        choice3: "260 km",
        choice4: "250 km",
        answer: 1
    },
    {
        question: "A box contains 5 white balls and 3 red balls. If a ball is chosen at random, what is the probability that it is a red ball?",
        choice1: "3/5",
        choice2: "3/8",
        choice3: "5/8",
        choice4: "5/3",
        answer: 2
    },
    {
        question: "What is the value of π up to two decimal places?",
        choice1: "3.14",
        choice2: "3.15",
        choice3: "3.13",
        choice4: "3.16",
        answer: 1
    },
    {
        question: "If 7x - 9 = 36, what is the value of x?",
        choice1: "x = 5",
        choice2: "x = 6",
        choice3: "x = 7",
        choice4: "x = 8",
        answer: 2
    },
    {
        question: "What is the perimeter of a rectangle with a length of 8 cm and a width of 5 cm?",
        choice1: "24 cm",
        choice2: "26 cm",
        choice3: "30 cm",
        choice4: "20 cm",
        answer: 1
    },
    {
        question: "The price of a book is $120, and it is discounted by 15%. What is the discount amount?",
        choice1: "$18",
        choice2: "$20",
        choice3: "$15",
        choice4: "$25",
        answer: 1
    },
    {
        question: "If the circumference of a circle is 31.4 cm, what is its radius? (Use π = 3.14)",
        choice1: "4 cm",
        choice2: "5 cm",
        choice3: "6 cm",
        choice4: "7 cm",
        answer: 2
    },
    {
        question: "What is the area of a circle with a radius of 7 cm? (Use π = 3.14)",
        choice1: "150.8 cm²",
        choice2: "153.9 cm²",
        choice3: "160.0 cm²",
        choice4: "165.0 cm²",
        answer: 1
    },
    {
        question: "A man sold his house at a profit of 20%. If he bought it for $100,000, what was the selling price?",
        choice1: "$120,000",
        choice2: "$130,000",
        choice3: "$110,000",
        choice4: "$125,000",
        answer: 1
    },
    {
        question: "Solve for x: 3x + 7 = 16",
        choice1: "x = 3",
        choice2: "x = 4",
        choice3: "x = 5",
        choice4: "x = 6",
        answer: 1
    },
    {
        question: "In a class, 60% of the students are boys. If there are 120 students, how many boys are there?",
        choice1: "72",
        choice2: "80",
        choice3: "60",
        choice4: "90",
        answer: 1
    },
    {
        question: "What is the value of 2³ + 3²?",
        choice1: "19",
        choice2: "17",
        choice3: "16",
        choice4: "18",
        answer: 1
    },
    {
        question: "What is the area of a triangle with a base of 10 cm and a height of 6 cm?",
        choice1: "30 cm²",
        choice2: "60 cm²",
        choice3: "50 cm²",
        choice4: "40 cm²",
        answer: 1
    },
    {
        question: "A person invests $2000 at 6% annual interest. How much interest will the investment earn after 3 years?",
        choice1: "$360",
        choice2: "$320",
        choice3: "$300",
        choice4: "$280",
        answer: 1
    },
    {
        question: "The sum of the ages of a father and his son is 50 years. The father is 30 years older than the son. How old is the father?",
        choice1: "35",
        choice2: "40",
        choice3: "45",
        choice4: "50",
        answer: 3
    },
    {
        question: "Solve for x: 4x + 2 = 14",
        choice1: "x = 3",
        choice2: "x = 4",
        choice3: "x = 2",
        choice4: "x = 5",
        answer: 1
    },
    {
        question: "What is the value of 5! (5 factorial)?",
        choice1: "120",
        choice2: "100",
        choice3: "150",
        choice4: "110",
        answer: 1
    },
    {
        question: "If a circle has a radius of 3 cm, what is its circumference? (Use π = 3.14)",
        choice1: "18.84 cm",
        choice2: "20.88 cm",
        choice3: "21.90 cm",
        choice4: "17.84 cm",
        answer: 1
    },
    {
        question: "If the length of one side of a square is 7 cm, what is its area?",
        choice1: "49 cm²",
        choice2: "45 cm²",
        choice3: "50 cm²",
        choice4: "55 cm²",
        answer: 1
    },
    {
        question: "The perimeter of a triangle is 36 cm. If two sides are 10 cm and 12 cm, what is the length of the third side?",
        choice1: "14 cm",
        choice2: "16 cm",
        choice3: "18 cm",
        choice4: "20 cm",
        answer: 1
    },
    {
        question: "What is the value of 5 + 3 × 2?",
        choice1: "11",
        choice2: "13",
        choice3: "16",
        choice4: "12",
        answer: 1
    },
    {
        question: "If a car travels 200 km in 4 hours, what is its average speed?",
        choice1: "50 km/h",
        choice2: "60 km/h",
        choice3: "55 km/h",
        choice4: "70 km/h",
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
        localStorage.setItem("mostRecentScore",score);
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
