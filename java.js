const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull =document.getElementById('progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true;
let questions= [
    {
        question: "What is the default value of a boolean variable in Java?",
        choice1: "true",
        choice2: "false",
        choice3: "null",
        choice4: "0",
        answer: 2
    },
    {
        question: "Which of the following is used to define a constant in Java?",
        choice1: "final",
        choice2: "constant",
        choice3: "static",
        choice4: "immutable",
        answer: 1
    },
    {
        question: "What does the 'final' keyword do when applied to a variable?",
        choice1: "Makes it constant and prevents modification",
        choice2: "Defines it as a static variable",
        choice3: "Indicates it is a reference variable",
        choice4: "Makes it private",
        answer: 1
    },
    {
        question: "Which of the following statements is true about constructors in Java?",
        choice1: "A constructor can return a value.",
        choice2: "Constructors can have the same name as the class.",
        choice3: "Constructors can be inherited.",
        choice4: "Constructors must be private.",
        answer: 2
    },
    {
        question: "What is the output of the following Java code?\n`System.out.println(10 + 20 + 'A');`",
        choice1: "30A",
        choice2: "50",
        choice3: "30",
        choice4: "The code will throw an error",
        answer: 2
    },
    {
        question: "Which of the following is the parent class of all classes in Java?",
        choice1: "Object",
        choice2: "Class",
        choice3: "Base",
        choice4: "Main",
        answer: 1
    },
    {
        question: "Which access modifier allows access only within the same package?",
        choice1: "public",
        choice2: "private",
        choice3: "protected",
        choice4: "default",
        answer: 4
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        choice1: "super",
        choice2: "extends",
        choice3: "inherits",
        choice4: "implements",
        answer: 2
    },
    {
        question: "What is the size of an int data type in Java?",
        choice1: "16 bits",
        choice2: "32 bits",
        choice3: "64 bits",
        choice4: "128 bits",
        answer: 2
    },
    {
        question: "Which of the following is the correct way to instantiate an array in Java?",
        choice1: "int[] arr = new int[5];",
        choice2: "int arr[] = new int();",
        choice3: "array arr = new int[5];",
        choice4: "int arr = new int[5];",
        answer: 1
    },
    {
        question: "What is the default value of an array element in Java if it is of type integer?",
        choice1: "0",
        choice2: "null",
        choice3: "undefined",
        choice4: "NaN",
        answer: 1
    },
    {
        question: "What is the output of the following code?\n`System.out.println(5 / 2);`",
        choice1: "2",
        choice2: "2.5",
        choice3: "2.0",
        choice4: "Error",
        answer: 1
    },
    {
        question: "Which method is used to start a thread in Java?",
        choice1: "start()",
        choice2: "run()",
        choice3: "execute()",
        choice4: "begin()",
        answer: 1
    },
    {
        question: "Which of the following is the correct way to handle exceptions in Java?",
        choice1: "try-catch-finally",
        choice2: "try-catch",
        choice3: "throw-catch",
        choice4: "try-except-finally",
        answer: 1
    },
    {
        question: "What will be the result of the following code?\n`String s = 'Java'; s = s + ' Rocks'; System.out.println(s);`",
        choice1: "Java Rocks",
        choice2: "JavaRocks",
        choice3: "Compilation error",
        choice4: "RocksJava",
        answer: 1
    },
    {
        question: "Which of the following can be used to create an immutable object in Java?",
        choice1: "private constructors",
        choice2: "final class",
        choice3: "final fields",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "Which of the following methods is used to obtain the length of a string in Java?",
        choice1: "length()",
        choice2: "size()",
        choice3: "getLength()",
        choice4: "getSize()",
        answer: 1
    },
    {
        question: "Which collection class is the fastest for searching for an element?",
        choice1: "ArrayList",
        choice2: "HashSet",
        choice3: "LinkedList",
        choice4: "HashMap",
        answer: 2
    },
    {
        question: "What is the keyword used to define an interface in Java?",
        choice1: "interface",
        choice2: "abstract",
        choice3: "implements",
        choice4: "extends",
        answer: 1
    },
    {
        question: "Which method must be implemented by a class that implements the Runnable interface?",
        choice1: "start()",
        choice2: "run()",
        choice3: "execute()",
        choice4: "begin()",
        answer: 2
    },
    {
        question: "Which of the following is NOT a valid data type in Java?",
        choice1: "int",
        choice2: "boolean",
        choice3: "float",
        choice4: "real",
        answer: 4
    },
    {
        question: "Which of the following classes is used for reading and writing files in Java?",
        choice1: "FileReader",
        choice2: "FileWriter",
        choice3: "BufferedReader",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "What is the return type of the hashCode() method in Java?",
        choice1: "int",
        choice2: "boolean",
        choice3: "Object",
        choice4: "String",
        answer: 1
    },
    {
        question: "What is the purpose of the 'this' keyword in Java?",
        choice1: "Refers to the current instance of the class",
        choice2: "Refers to the parent class",
        choice3: "Used to create a new object",
        choice4: "Refers to the class itself",
        answer: 1
    },
    {
        question: "What does the 'super' keyword refer to in Java?",
        choice1: "Current class",
        choice2: "Parent class",
        choice3: "Child class",
        choice4: "This class",
        answer: 2
    },
    {
        question: "Which of the following is the correct way to call a method from a superclass in Java?",
        choice1: "super.methodName()",
        choice2: "superClass.methodName()",
        choice3: "this.methodName()",
        choice4: "methodName()",
        answer: 1
    },
    {
        question: "What is the default value of a reference variable in Java?",
        choice1: "null",
        choice2: "0",
        choice3: "undefined",
        choice4: "false",
        answer: 1
    },
    {
        question: "Which of the following interfaces does the Collection interface extend in Java?",
        choice1: "Set",
        choice2: "Iterable",
        choice3: "List",
        choice4: "All of the above",
        answer: 2
    },
    {
        question: "Which of the following methods is used to add an element to an ArrayList in Java?",
        choice1: "addElement()",
        choice2: "insert()",
        choice3: "add()",
        choice4: "push()",
        answer: 3
    },
    {
        question: "What is the correct syntax to declare an abstract class in Java?",
        choice1: "class MyClass {}",
        choice2: "abstract class MyClass {}",
        choice3: "class abstract MyClass {}",
        choice4: "MyClass abstract {}",
        answer: 2
    },
    {
        question: "What will the following code print?\n`System.out.println('a' + 1);`",
        choice1: "a1",
        choice2: "97",
        choice3: "98",
        choice4: "a",
        answer: 3
    },
    {
        question: "Which of the following is true about Java?",
        choice1: "Java is a compiled language.",
        choice2: "Java is a interpreted language.",
        choice3: "Java is a compiled and interpreted language.",
        choice4: "Java is neither compiled nor interpreted.",
        answer: 3
    },
    {
        question: "Which of the following is used to handle multiple exceptions in a single catch block in Java?",
        choice1: "Multiple catch blocks",
        choice2: "Single catch block with | operator",
        choice3: "throws keyword",
        choice4: "try block with multiple exceptions",
        answer: 2
    },
    {
        question: "Which of the following is the root of the Java exception hierarchy?",
        choice1: "Throwable",
        choice2: "Exception",
        choice3: "RuntimeException",
        choice4: "Error",
        answer: 1
    },
    {
        question: "Which of the following keywords is used to stop a thread in Java?",
        choice1: "stop",
        choice2: "terminate",
        choice3: "interrupt",
        choice4: "exit",
        answer: 3
    },
    {
        question: "Which method is used to start a thread in Java?",
        choice1: "init()",
        choice2: "run()",
        choice3: "start()",
        choice4: "begin()",
        answer: 3
    },
    {
        question: "What does the keyword 'synchronized' do in Java?",
        choice1: "Allows multiple threads to access a resource simultaneously",
        choice2: "Restricts access to a resource by one thread at a time",
        choice3: "Makes a variable constant",
        choice4: "Creates a singleton class",
        answer: 2
    },
    {
        question: "Which of the following is used to perform exception handling in Java?",
        choice1: "throw",
        choice2: "throws",
        choice3: "try-catch",
        choice4: "catch",
        answer: 3
    },
    {
        question: "Which of the following methods in Java is used to convert a string to a number?",
        choice1: "parseInt()",
        choice2: "valueOf()",
        choice3: "parseFloat()",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "Which of the following methods is used to get the system time in Java?",
        choice1: "getCurrentTime()",
        choice2: "System.getTime()",
        choice3: "System.currentTimeMillis()",
        choice4: "Time.getCurrentTime()",
        answer: 3
    },
    {
        question: "Which of the following is the correct way to declare a constant array in Java?",
        choice1: "final int[] arr = new int[]{1, 2, 3};",
        choice2: "const int[] arr = {1, 2, 3};",
        choice3: "final arr[] = {1, 2, 3};",
        choice4: "final arr = [1, 2, 3];",
        answer: 1
    },
    {
        question: "Which of the following classes provides a basic implementation of the Map interface?",
        choice1: "HashMap",
        choice2: "TreeMap",
        choice3: "LinkedHashMap",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "Which of the following can be used to handle runtime exceptions in Java?",
        choice1: "try-catch block",
        choice2: "throws clause",
        choice3: "throw statement",
        choice4: "final block",
        answer: 1
    },
    {
        question: "What is the result of the following code?\n`int[] arr = {1, 2, 3}; System.out.println(arr[3]);`",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "ArrayIndexOutOfBoundsException",
        answer: 4
    },
    {
        question: "Which of the following interfaces does not extend Collection in Java?",
        choice1: "Set",
        choice2: "Queue",
        choice3: "Map",
        choice4: "List",
        answer: 3
    },
    {
        question: "Which of the following methods is used to remove an element from a List in Java?",
        choice1: "remove()",
        choice2: "delete()",
        choice3: "erase()",
        choice4: "deleteElement()",
        answer: 1
    },
    {
        question: "Which of the following statements is true about the 'super' keyword in Java?",
        choice1: "It refers to the parent class instance variable.",
        choice2: "It refers to the child class instance variable.",
        choice3: "It refers to the parent class constructor.",
        choice4: "All of the above",
        answer: 1
    },
    {
        question: "Which of the following is the correct way to declare a method in an interface in Java?",
        choice1: "public void method();",
        choice2: "void method();",
        choice3: "public abstract void method();",
        choice4: "public method();",
        answer: 3
    },
    {
        question: "Which of the following methods is used to compare two strings lexicographically in Java?",
        choice1: "compareTo()",
        choice2: "equals()",
        choice3: "compare()",
        choice4: "isEqual()",
        answer: 1
    },
    {
        question: "What is the value of `x` after the following code runs?\n`int x = 5; x += 3;`",
        choice1: "5",
        choice2: "8",
        choice3: "3",
        choice4: "10",
        answer: 2
    },
    {
        question: "Which of the following methods is used to find the square root of a number in Java?",
        choice1: "Math.pow()",
        choice2: "Math.sqrt()",
        choice3: "Math.square()",
        choice4: "Math.root()",
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
