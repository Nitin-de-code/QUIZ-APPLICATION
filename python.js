const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull =document.getElementById('progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true;
let questions= [


    {
        question: "Which of the following is the correct way to define a function in Python?",
        choice1: "def function_name[]:",
        choice2: "function_name() =>",
        choice3: "def function_name():",
        choice4: "function_name(){}",
        answer: 3
    },
    {
        question: "What will be the output of the following code?\n`print(2 ** 3)`",
        choice1: "5",
        choice2: "6",
        choice3: "8",
        choice4: "9",
        answer: 3
    },
    {
        question: "Which of the following is used to handle exceptions in Python?",
        choice1: "try-catch",
        choice2: "try-except",
        choice3: "error-try",
        choice4: "except-try",
        answer: 2
    },
    {
        question: "How can you define a default argument in a Python function?",
        choice1: "def func(arg=10):",
        choice2: "def func(arg): default=10",
        choice3: "func(arg=10): def",
        choice4: "default func(arg=10):",
        answer: 1
    },
    {
        question: "What does the `yield` keyword do in Python?",
        choice1: "Returns a function",
        choice2: "Generates a value and suspends the function's execution",
        choice3: "Throws an exception",
        choice4: "Returns from the function without terminating it",
        answer: 2
    },
    {
        question: "Which of the following will create a tuple in Python?",
        choice1: "[1, 2, 3]",
        choice2: "(1, 2, 3)",
        choice3: "{1, 2, 3}",
        choice4: "tuple(1, 2, 3)",
        answer: 2
    },
    {
        question: "What will be the output of the following code?\n`x = 'Python'; print(x[0:3])`",
        choice1: "Pyt",
        choice2: "P",
        choice3: "Py",
        choice4: "Pyth",
        answer: 1
    },
    {
        question: "Which of the following is true about lambda functions in Python?",
        choice1: "Lambda functions can take multiple statements",
        choice2: "Lambda functions are defined using 'def'",
        choice3: "Lambda functions can only have a single expression",
        choice4: "Lambda functions cannot return values",
        answer: 3
    },
    {
        question: "What is the difference between 'deepcopy()' and 'copy()' in Python?",
        choice1: "Both are the same",
        choice2: "copy() creates a new object, while deepcopy() copies the nested objects",
        choice3: "deepcopy() creates a new object, while copy() copies the nested objects",
        choice4: "deepcopy() is used only with lists",
        answer: 2
    },
    {
        question: "How do you remove the last item from a list in Python?",
        choice1: "list.pop()",
        choice2: "list.delete()",
        choice3: "list.remove()",
        choice4: "list.remove_last()",
        answer: 1
    },
    {
        question: "What will be the output of the following code?\n`x = [1, 2, 3]; x.append(4); print(x)`",
        choice1: "[1, 2, 3]",
        choice2: "[1, 2, 3, 4]",
        choice3: "[4, 1, 2, 3]",
        choice4: "Error",
        answer: 2
    },
    {
        question: "Which of the following is the correct way to define a class in Python?",
        choice1: "class MyClass {}",
        choice2: "MyClass class {}",
        choice3: "class MyClass:",
        choice4: "class MyClass[]:",
        answer: 3
    },
    {
        question: "What is the output of the following code?\n`print(10 % 3)`",
        choice1: "1",
        choice2: "3",
        choice3: "10",
        choice4: "0",
        answer: 1
    },
    {
        question: "Which of the following methods is used to get the length of a string in Python?",
        choice1: "length()",
        choice2: "len()",
        choice3: "size()",
        choice4: "getsize()",
        answer: 2
    },
    {
        question: "What will the following code print?\n`x = [1, 2, 3]; x.insert(1, 'a'); print(x)`",
        choice1: "[1, 'a', 2, 3]",
        choice2: "[1, 2, 3, 'a']",
        choice3: "['a', 1, 2, 3]",
        choice4: "[1, 'a', 3]",
        answer: 1
    },
    {
        question: "Which of the following will create a dictionary in Python?",
        choice1: "dict{1: 'a', 2: 'b'}",
        choice2: "dict([1, 'a'], [2, 'b'])",
        choice3: "dict{1='a', 2='b'}",
        choice4: "dict({1: 'a', 2: 'b'})",
        answer: 4
    },
    {
        question: "What is the output of the following code?\n`print('Hello' * 3)`",
        choice1: "HelloHelloHello",
        choice2: "Hello 3",
        choice3: "Error",
        choice4: "'Hello' 3",
        answer: 1
    },
    {
        question: "What will be the output of the following code?\n`a = [1, 2, 3]; print(a[10:])`",
        choice1: "Error",
        choice2: "[]",
        choice3: "[1, 2, 3]",
        choice4: "[None]",
        answer: 2
    },
    {
        question: "Which of the following is the correct way to catch an exception in Python?",
        choice1: "try-except",
        choice2: "try-catch",
        choice3: "catch-try",
        choice4: "except-try",
        answer: 1
    },
    {
        question: "What will be the output of the following code?\n`x = [1, 2, 3, 4]; print(x[::-1])`",
        choice1: "[4, 3, 2, 1]",
        choice2: "[1, 2, 3, 4]",
        choice3: "[1, 3, 2, 4]",
        choice4: "[2, 3, 4, 1]",
        answer: 1
    },
    {
        question: "What does the 'break' statement do in a loop in Python?",
        choice1: "Exits the loop",
        choice2: "Continues to the next iteration of the loop",
        choice3: "Exits the entire program",
        choice4: "Stops the loop condition from being checked",
        answer: 1
    },
    {
        question: "How can you make a Python script executable from the command line?",
        choice1: "chmod +x script.py",
        choice2: "python script.py --execute",
        choice3: "python script.py --run",
        choice4: "python script.py --command",
        answer: 1
    },
    {
        question: "Which of the following is the correct way to define a class method?",
        choice1: "@staticmethod def method():",
        choice2: "@classmethod def method():",
        choice3: "def method@classmethod():",
        choice4: "class def method():",
        answer: 2
    },
    {
        question: "Which of the following is NOT a mutable data type in Python?",
        choice1: "list",
        choice2: "set",
        choice3: "tuple",
        choice4: "dictionary",
        answer: 3
    },
    {
        question: "What is the result of the expression `3 + 4 * 2` in Python?",
        choice1: "14",
        choice2: "11",
        choice3: "10",
        choice4: "7",
        answer: 2
    },
    {
        question: "How do you remove an item from a set in Python?",
        choice1: "set.remove()",
        choice2: "set.delete()",
        choice3: "set.remove_item()",
        choice4: "set.pop()",
        answer: 1
    },
    {
        question: "What will be the output of the following code?\n`x = {'a': 1, 'b': 2}; print(x['c'])`",
        choice1: "1",
        choice2: "None",
        choice3: "KeyError",
        choice4: "Error",
        answer: 3
    },
    {
        question: "What does the 'global' keyword do in Python?",
        choice1: "Declares a global variable inside a function",
        choice2: "Declares a global function inside a method",
        choice3: "Indicates the use of global variables in the function",
        choice4: "Indicates that the function will return a global result",
        answer: 1
    },
    {
        question: "Which of the following methods is used to create a file object in Python?",
        choice1: "open()",
        choice2: "file()",
        choice3: "create()",
        choice4: "makefile()",
        answer: 1
    },
    {
        question: "How do you create a generator in Python?",
        choice1: "def generator(): yield",
        choice2: "def generator() return",
        choice3: "return generator()",
        choice4: "yield generator()",
        answer: 1
    },
    {
        question: "Which of the following is used to check if a key exists in a dictionary in Python?",
        choice1: "key in dict",
        choice2: "dict.contains(key)",
        choice3: "dict[key]",
        choice4: "dict.has_key(key)",
        answer: 1
    },
    {
        question: "How do you read a file in Python?",
        choice1: "file.read()",
        choice2: "open(file).read()",
        choice3: "file.open()",
        choice4: "open(file).readlines()",
        answer: 2
    },
    {
        question: "What will be the output of the following code?\n`x = [1, 2, 3, 4]; x.pop(2); print(x)`",
        choice1: "[1, 2, 3]",
        choice2: "[1, 2, 4]",
        choice3: "[2, 3, 4]",
        choice4: "[1, 2, 4]",
        answer: 2
    },
    {
        question: "Which of the following is used to concatenate two lists in Python?",
        choice1: "list.append()",
        choice2: "list.concat()",
        choice3: "list.extend()",
        choice4: "list+list",
        answer: 4
    },
    {
        question: "Which of the following can be used to iterate through a list in Python?",
        choice1: "for loop",
        choice2: "while loop",
        choice3: "map()",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "What will the following code output?\n`x = 'hello'; print(x[-1])`",
        choice1: "'h'",
        choice2: "'o'",
        choice3: "'l'",
        choice4: "'e'",
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
