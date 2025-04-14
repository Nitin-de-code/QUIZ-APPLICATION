const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull =document.getElementById('progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true;
let questions= [
    {
        question: "What is the oxidation state of sulfur in SO3?",
        choice1: "+4",
        choice2: "+6",
        choice3: "0",
        choice4: "-2",
        answer: 2
    },
    {
        question: "Which of the following compounds has the highest boiling point?",
        choice1: "Methane (CH4)",
        choice2: "Water (H2O)",
        choice3: "Ammonia (NH3)",
        choice4: "Carbon dioxide (CO2)",
        answer: 2
    },
    {
        question: "Which of the following is not a strong acid?",
        choice1: "HCl",
        choice2: "HNO3",
        choice3: "H2SO4",
        choice4: "CH3COOH",
        answer: 4
    },
    {
        question: "What is the molecular geometry of methane (CH4)?",
        choice1: "Linear",
        choice2: "Trigonal planar",
        choice3: "Tetrahedral",
        choice4: "Bent",
        answer: 3
    },
    {
        question: "Which element has the highest electronegativity?",
        choice1: "Oxygen",
        choice2: "Fluorine",
        choice3: "Chlorine",
        choice4: "Nitrogen",
        answer: 2
    },
    {
        question: "What is the principle behind the 'law of definite proportions'?",
        choice1: "In a chemical reaction, the mass of reactants equals the mass of products.",
        choice2: "A compound always contains the same elements in the same proportions by mass.",
        choice3: "The volume of gas is inversely proportional to the pressure at constant temperature.",
        choice4: "Atoms are indivisible and indestructible.",
        answer: 2
    },
    {
        question: "What is the formula for calculating the pH of a solution?",
        choice1: "pH = log[H+]",
        choice2: "pH = -log[H+]",
        choice3: "pH = log[OH-]",
        choice4: "pH = -log[OH-]",
        answer: 2
    },
    {
        question: "Which of the following compounds contains a coordinate covalent bond?",
        choice1: "Ammonia (NH3)",
        choice2: "Hydrogen chloride (HCl)",
        choice3: "Carbon monoxide (CO)",
        choice4: "Methane (CH4)",
        answer: 3
    },
    {
        question: "What is the hybridization of the central atom in carbon dioxide (CO2)?",
        choice1: "sp",
        choice2: "sp2",
        choice3: "sp3",
        choice4: "d2sp3",
        answer: 1
    },
    {
        question: "Which of the following is a characteristic of a catalyst?",
        choice1: "It is consumed in the reaction.",
        choice2: "It increases the activation energy of the reaction.",
        choice3: "It lowers the activation energy of the reaction.",
        choice4: "It increases the equilibrium constant.",
        answer: 3
    },
    {
        question: "Which of the following elements is most likely to form a covalent bond with chlorine?",
        choice1: "Sodium",
        choice2: "Magnesium",
        choice3: "Oxygen",
        choice4: "Potassium",
        answer: 3
    },
    {
        question: "Which of the following gases has the highest density at STP?",
        choice1: "Oxygen",
        choice2: "Nitrogen",
        choice3: "Carbon dioxide",
        choice4: "Helium",
        answer: 3
    },
    {
        question: "What type of bonding is present in sodium chloride (NaCl)?",
        choice1: "Covalent bonding",
        choice2: "Ionic bonding",
        choice3: "Metallic bonding",
        choice4: "Hydrogen bonding",
        answer: 2
    },
    {
        question: "What is the molecular formula of benzene?",
        choice1: "C6H6",
        choice2: "C5H5",
        choice3: "C7H7",
        choice4: "C8H8",
        answer: 1
    },
    {
        question: "What is the unit of the ideal gas constant (R)?",
        choice1: "L·atm/mol·K",
        choice2: "Pa·m³/mol·K",
        choice3: "J/mol·K",
        choice4: "all of the above",
        answer: 4
    },
    {
        question: "What is the formula for calculating the molar mass of a compound?",
        choice1: "M = n/V",
        choice2: "M = PV/nRT",
        choice3: "M = m/n",
        choice4: "M = n*V",
        answer: 3
    },
    {
        question: "Which of the following is the limiting reagent in a reaction?",
        choice1: "The reagent that is used up first",
        choice2: "The reagent that is in excess",
        choice3: "The reagent with the lowest molar mass",
        choice4: "The reagent that does not react",
        answer: 1
    },
    {
        question: "What is the oxidation number of chlorine in NaClO3?",
        choice1: "-1",
        choice2: "+1",
        choice3: "+5",
        choice4: "-5",
        answer: 3
    },
    {
        question: "What is the formula for the reaction between sodium and water?",
        choice1: "Na + H2O → NaOH + H2",
        choice2: "Na2O + H2O → NaOH",
        choice3: "Na + H2 → NaH",
        choice4: "Na2O + H2 → Na + O2",
        answer: 1
    },
    {
        question: "Which of the following is an example of a decomposition reaction?",
        choice1: "2H2 + O2 → 2H2O",
        choice2: "CaCO3 → CaO + CO2",
        choice3: "Na + Cl2 → NaCl",
        choice4: "HCl + NaOH → NaCl + H2O",
        answer: 2
    },
    {
        question: "What is the main product of the reaction between an alcohol and a carboxylic acid?",
        choice1: "Ester",
        choice2: "Amine",
        choice3: "Aldehyde",
        choice4: "Ketone",
        answer: 1
    },
    {
        question: "Which type of radioactive decay results in the loss of an alpha particle?",
        choice1: "Alpha decay",
        choice2: "Beta decay",
        choice3: "Gamma decay",
        choice4: "Positron emission",
        answer: 1
    },
    {
        question: "What is the electron configuration of the ion Fe3+?",
        choice1: "[Ar] 4s2 3d5",
        choice2: "[Ar] 3d5",
        choice3: "[Ar] 3d6",
        choice4: "[Ne] 3s2 3p6",
        answer: 2
    },
    {
        question: "What is the rate-determining step in a reaction mechanism?",
        choice1: "The first step in the mechanism",
        choice2: "The last step in the mechanism",
        choice3: "The slowest step in the mechanism",
        choice4: "The fastest step in the mechanism",
        answer: 3
    },
    {
        question: "Which of the following is a common characteristic of endothermic reactions?",
        choice1: "Heat is released",
        choice2: "Heat is absorbed",
        choice3: "They occur spontaneously",
        choice4: "They have a negative change in enthalpy",
        answer: 2
    },
    {
        question: "What is the first ionization energy of an element?",
        choice1: "The energy required to remove the first electron",
        choice2: "The energy released when an electron is added",
        choice3: "The energy required to form a cation",
        choice4: "The energy required to form an anion",
        answer: 1
    },
    {
        question: "Which of the following substances is a Lewis acid?",
        choice1: "Ammonia (NH3)",
        choice2: "Water (H2O)",
        choice3: "Boron trifluoride (BF3)",
        choice4: "Methane (CH4)",
        answer: 3
    },
    {
        question: "What is the function of a buffer solution?",
        choice1: "To increase the pH of a solution",
        choice2: "To maintain the pH of a solution",
        choice3: "To decrease the pH of a solution",
        choice4: "To neutralize an acid",
        answer: 2
    },
    {
        question: "What is the most stable allotrope of carbon?",
        choice1: "Diamond",
        choice2: "Graphite",
        choice3: "Fullerene",
        choice4: "Graphene",
        answer: 1
    },
    {
        question: "What is the effect of increasing temperature on the rate of a chemical reaction?",
        choice1: "The rate increases",
        choice2: "The rate decreases",
        choice3: "The rate remains constant",
        choice4: "The reaction stops",
        answer: 1
    },
    {
        question: "Which of the following is the strongest oxidizing agent?",
        choice1: "H2O2",
        choice2: "O2",
        choice3: "Cl2",
        choice4: "F2",
        answer: 4
    },
    {
        question: "What is the correct name for the compound NH4Cl?",
        choice1: "Ammonium chloride",
        choice2: "Ammonium hydroxide",
        choice3: "Nitrogen trichloride",
        choice4: "Nitrogen chloride",
        answer: 1
    },
    {
        question: "Which of the following compounds is an example of an alkane?",
        choice1: "C6H12",
        choice2: "C4H6",
        choice3: "C3H6O",
        choice4: "C2H4O2",
        answer: 1
    },
    {
        question: "What is the product of the reaction between an alkene and hydrogen bromide (HBr)?",
        choice1: "Alkane",
        choice2: "Alcohol",
        choice3: "Alkyl halide",
        choice4: "Aldehyde",
        answer: 3
    },
    {
        question: "Which of the following is the correct electron configuration for a nitrogen (N) atom?",
        choice1: "1s2 2s2 2p3",
        choice2: "1s2 2s2 2p6",
        choice3: "1s2 2s1 2p3",
        choice4: "1s2 2p5",
        answer: 1
    },
    {
        question: "Which of the following elements will most likely form an ionic bond with sodium?",
        choice1: "Fluorine",
        choice2: "Oxygen",
        choice3: "Nitrogen",
        choice4: "Carbon",
        answer: 1
    },
    {
        question: "Which of the following is the strongest acid?",
        choice1: "H2SO4",
        choice2: "HCl",
        choice3: "HNO3",
        choice4: "HF",
        answer: 1
    },
    {
        question: "In a redox reaction, the substance that gains electrons is called the:",
        choice1: "Oxidizing agent",
        choice2: "Reducing agent",
        choice3: "Anode",
        choice4: "Cathode",
        answer: 1
    },
    {
        question: "Which of the following is true for a first-order reaction?",
        choice1: "The rate of reaction is proportional to the square of the concentration of the reactant.",
        choice2: "The rate of reaction is independent of the concentration of the reactant.",
        choice3: "The rate of reaction is directly proportional to the concentration of the reactant.",
        choice4: "The rate of reaction is inversely proportional to the concentration of the reactant.",
        answer: 3
    },
    {
        question: "Which gas law relates the volume and temperature of a gas at constant pressure?",
        choice1: "Boyle's Law",
        choice2: "Charles's Law",
        choice3: "Avogadro's Law",
        choice4: "Dalton's Law",
        answer: 2
    },
    {
        question: "What is the boiling point of water at standard pressure (1 atm)?",
        choice1: "0°C",
        choice2: "50°C",
        choice3: "75°C",
        choice4: "100°C",
        answer: 4
    },
    {
        question: "What is the bond angle in a molecule with a trigonal planar geometry?",
        choice1: "90°",
        choice2: "109.5°",
        choice3: "120°",
        choice4: "180°",
        answer: 3
    },
    {
        question: "What is the main component of the Earth's atmosphere?",
        choice1: "Oxygen",
        choice2: "Carbon dioxide",
        choice3: "Nitrogen",
        choice4: "Argon",
        answer: 3
    },
    {
        question: "Which of the following is not an isomer of C5H10?",
        choice1: "Pentane",
        choice2: "2-Methylbutane",
        choice3: "Cyclopropane",
        choice4: "3-Methylbutane",
        answer: 3
    },
    {
        question: "Which type of bonding is present in NaCl?",
        choice1: "Ionic bonding",
        choice2: "Covalent bonding",
        choice3: "Metallic bonding",
        choice4: "Hydrogen bonding",
        answer: 1
    },
    {
        question: "In which reaction is heat released?",
        choice1: "Exothermic reaction",
        choice2: "Endothermic reaction",
        choice3: "Isothermal reaction",
        choice4: "Adiabatic reaction",
        answer: 1
    },
    {
        question: "What is the oxidation state of nitrogen in nitric acid (HNO3)?",
        choice1: "-3",
        choice2: "0",
        choice3: "+3",
        choice4: "+5",
        answer: 4
    },
    {
        question: "What is the molarity of a solution containing 0.5 moles of solute in 2 liters of solution?",
        choice1: "0.5 M",
        choice2: "1 M",
        choice3: "2 M",
        choice4: "0.25 M",
        answer: 1
    },
    {
        question: "Which of the following elements has the largest atomic radius?",
        choice1: "Oxygen",
        choice2: "Fluorine",
        choice3: "Lithium",
        choice4: "Neon",
        answer: 3
    },
    {
        question: "What is the name of the compound with the formula Na2SO4?",
        choice1: "Sodium sulfate",
        choice2: "Sodium sulfite",
        choice3: "Sodium bisulfate",
        choice4: "Sodium sulfide",
        answer: 1
    },
    {
        question: "Which of the following molecules has the highest dipole moment?",
        choice1: "CO2",
        choice2: "CH4",
        choice3: "H2O",
        choice4: "NH3",
        answer: 3
    },
    {
        question: "What is the correct formula for calcium phosphate?",
        choice1: "Ca3(PO4)2",
        choice2: "Ca2(PO4)3",
        choice3: "Ca(PO4)2",
        choice4: "Ca3PO4",
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
        return window.location.assign('/end.html');
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