const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull =document.getElementById('progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true;
let questions= [
    {
        question: "Which of the following is the correct syntax for a C++ class?",
        choice1: "class MyClass() {}",
        choice2: "class MyClass {}",
        choice3: "class MyClass; {}",
        choice4: "MyClass class {}",
        answer: 2
    },
    {
        question: "Which of the following is used to define a function in C++?",
        choice1: "function() {}",
        choice2: "def function() {}",
        choice3: "void function() {}",
        choice4: "method() {}",
        answer: 3
    },
    {
        question: "Which of the following is the default access specifier for members of a class in C++?",
        choice1: "public",
        choice2: "private",
        choice3: "protected",
        choice4: "default",
        answer: 2
    },
    {
        question: "Which of the following data types is used to store a single character in C++?",
        choice1: "string",
        choice2: "char",
        choice3: "char*",
        choice4: "character",
        answer: 2
    },
    {
        question: "What is the size of an int in C++?",
        choice1: "2 bytes",
        choice2: "4 bytes",
        choice3: "8 bytes",
        choice4: "Depends on the system",
        answer: 2
    },
    {
        question: "Which of the following is the correct way to declare an array of integers in C++?",
        choice1: "int arr[5];",
        choice2: "arr[5] int;",
        choice3: "array[5] int;",
        choice4: "int[5] arr;",
        answer: 1
    },
    {
        question: "What is the keyword used to allocate memory dynamically in C++?",
        choice1: "malloc",
        choice2: "new",
        choice3: "calloc",
        choice4: "alloc",
        answer: 2
    },
    {
        question: "Which operator is used to access a member of a class or structure in C++?",
        choice1: ".",
        choice2: "->",
        choice3: "#",
        choice4: "&&",
        answer: 1
    },
    {
        question: "What does the 'new' keyword do in C++?",
        choice1: "It initializes a variable.",
        choice2: "It allocates memory for an object or array dynamically.",
        choice3: "It declares a variable.",
        choice4: "It frees memory.",
        answer: 2
    },
    {
        question: "Which of the following is the correct way to declare a constant in C++?",
        choice1: "const int x = 10;",
        choice2: "int const x = 10;",
        choice3: "constant int x = 10;",
        choice4: "Both 1 and 2",
        answer: 4
    },
    {
        question: "Which of the following is used to handle exceptions in C++?",
        choice1: "try-catch block",
        choice2: "throw-catch block",
        choice3: "catch-finally block",
        choice4: "exception-catch block",
        answer: 1
    },
    {
        question: "Which of the following C++ features allows a class to be inherited from another?",
        choice1: "Encapsulation",
        choice2: "Polymorphism",
        choice3: "Inheritance",
        choice4: "Abstraction",
        answer: 3
    },
    {
        question: "What is the result of the expression `5 / 2` in C++?",
        choice1: "2.5",
        choice2: "2",
        choice3: "3",
        choice4: "Compilation error",
        answer: 2
    },
    {
        question: "What is the correct syntax for a C++ constructor?",
        choice1: "MyClass() {}",
        choice2: "void MyClass() {}",
        choice3: "MyClass {}",
        choice4: "void MyClass()",
        answer: 1
    },
    {
        question: "Which of the following is the correct syntax to define a destructor in C++?",
        choice1: "~MyClass() {}",
        choice2: "MyClass() {}",
        choice3: "void ~MyClass() {}",
        choice4: "void MyClass() {}",
        answer: 1
    },
    {
        question: "Which of the following will make a class derive from another class in C++?",
        choice1: "class Derived : public Base {}",
        choice2: "class Derived extends Base {}",
        choice3: "class Derived -> Base {}",
        choice4: "class Derived : inherit Base {}",
        answer: 1
    },
    {
        question: "What is the purpose of the 'virtual' keyword in C++?",
        choice1: "To define a function that can be overridden in derived classes.",
        choice2: "To prevent a function from being overridden in derived classes.",
        choice3: "To define a constant variable.",
        choice4: "To define an abstract class.",
        answer: 1
    },
    {
        question: "What is the output of the following C++ code?\n`int x = 5; x++; std::cout << x;`",
        choice1: "5",
        choice2: "6",
        choice3: "Error",
        choice4: "Undefined behavior",
        answer: 2
    },
    {
        question: "Which function is used to find the length of a string in C++?",
        choice1: "strlen()",
        choice2: "strlength()",
        choice3: "length()",
        choice4: "size()",
        answer: 1
    },
    {
        question: "Which of the following is used to stop a loop in C++?",
        choice1: "exit()",
        choice2: "continue",
        choice3: "break",
        choice4: "end()",
        answer: 3
    },
    {
        question: "What is the size of a `long` data type in C++?",
        choice1: "4 bytes",
        choice2: "8 bytes",
        choice3: "6 bytes",
        choice4: "Depends on the system",
        answer: 2
    },
    {
        question: "Which of the following is NOT a valid C++ loop?",
        choice1: "for loop",
        choice2: "while loop",
        choice3: "do-while loop",
        choice4: "repeat-until loop",
        answer: 4
    },
    {
        question: "What is the output of the following code?\n`int x = 10; std::cout << ++x;`",
        choice1: "10",
        choice2: "11",
        choice3: "Error",
        choice4: "Undefined behavior",
        answer: 2
    },
    {
        question: "Which operator is used for dynamic memory allocation in C++?",
        choice1: "malloc()",
        choice2: "calloc()",
        choice3: "new",
        choice4: "alloc()",
        answer: 3
    },
    {
        question: "Which of the following is the correct way to initialize an object in C++?",
        choice1: "MyClass obj = new MyClass();",
        choice2: "MyClass obj();",
        choice3: "MyClass obj;",
        choice4: "MyClass obj = MyClass();",
        answer: 3
    },
    {
        question: "Which of the following is a pointer in C++?",
        choice1: "int* p;",
        choice2: "int p*;",
        choice3: "pointer int* p;",
        choice4: "int p;",
        answer: 1
    },
    {
        question: "Which of the following correctly describes a function pointer in C++?",
        choice1: "A pointer to a function that stores a memory address of a function.",
        choice2: "A function that returns a pointer.",
        choice3: "A pointer that points to a variable.",
        choice4: "A pointer that stores the address of a class.",
        answer: 1
    },
    {
        question: "Which of the following is the correct way to declare a reference variable in C++?",
        choice1: "int &ref;",
        choice2: "int ref&;",
        choice3: "reference int ref;",
        choice4: "int *ref;",
        answer: 1
    },
    {
        question: "What does the 'this' pointer represent in C++?",
        choice1: "A pointer to the current class object.",
        choice2: "A pointer to the parent class object.",
        choice3: "A pointer to the function being executed.",
        choice4: "A pointer to the constructor.",
        answer: 1
    },
    {
        question: "What is the purpose of the 'friend' keyword in C++?",
        choice1: "To allow a function to access private and protected members of a class.",
        choice2: "To declare a constant function.",
        choice3: "To create a relationship between two classes.",
        choice4: "To define a virtual function.",
        answer: 1
    },
    {
        question: "What will the following code output?\n`int arr[] = {1, 2, 3}; std::cout << arr[2];`",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "Error",
        answer: 3
    },
    {
        question: "Which of the following is used to define an abstract class in C++?",
        choice1: "class Abstract {}",
        choice2: "class Abstract { virtual void func(); }",
        choice3: "class Abstract : public Base { virtual void func(); }",
        choice4: "abstract class Abstract {}",
        answer: 2
    },
    {
        question: "What will be the output of the following code?\n`int x = 4, y = 5; std::cout << x > y;`",
        choice1: "true",
        choice2: "false",
        choice3: "4",
        choice4: "Error",
        answer: 2
    },
    {
        question: "What does the 'sizeof' operator do in C++?",
        choice1: "Returns the size of a data type or object.",
        choice2: "Returns the address of an object.",
        choice3: "Returns the value of a pointer.",
        choice4: "Returns the type of a variable.",
        answer: 1
    },
    {
        question: "What is the purpose of the 'static' keyword in C++?",
        choice1: "It limits the scope of a variable or function.",
        choice2: "It makes a variable constant.",
        choice3: "It marks a function as a class function.",
        choice4: "It prevents inheritance.",
        answer: 1
    },
    {
        question: "Which of the following is true about C++ constructors?",
        choice1: "Constructors are invoked when an object is destroyed.",
        choice2: "Constructors can have a return type.",
        choice3: "A class can have multiple constructors.",
        choice4: "Constructors cannot take parameters.",
        answer: 3
    },
    {
        question: "Which of the following types of inheritance allows a class to inherit from multiple classes in C++?",
        choice1: "Single Inheritance",
        choice2: "Multilevel Inheritance",
        choice3: "Multiple Inheritance",
        choice4: "Hierarchical Inheritance",
        answer: 3
    },
    {
        question: "What is the function of the 'exit()' function in C++?",
        choice1: "It ends the program immediately.",
        choice2: "It returns a value to the operating system.",
        choice3: "It terminates the current loop.",
        choice4: "It pauses the program for a specific time.",
        answer: 1
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
