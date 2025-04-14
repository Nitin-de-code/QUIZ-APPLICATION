const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull =document.getElementById('progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true;
let questions= [
    {
        question: "What is the energy stored in a capacitor equal to?",
        choice1: "1/2 * C * V^2",
        choice2: "C * V",
        choice3: "V / C",
        choice4: "C * I",
        answer: 1
    },
    {
        question: "In an LCR circuit, resonance occurs when the inductive reactance is equal to:",
        choice1: "Capacitive reactance",
        choice2: "Resistance",
        choice3: "Total reactance",
        choice4: "None of the above",
        answer: 1
    },
    {
        question: "What is the equation for the period of a simple pendulum?",
        choice1: "T = 2π√(L/g)",
        choice2: "T = 2π√(g/L)",
        choice3: "T = 2π(L/g)",
        choice4: "T = √(L/g)",
        answer: 1
    },
    {
        question: "What is the value of Planck's constant?",
        choice1: "6.626 × 10^-34 J·s",
        choice2: "6.023 × 10^23 J·s",
        choice3: "1.602 × 10^-19 C",
        choice4: "9.8 m/s²",
        answer: 1
    },
    {
        question: "What is the equivalent capacitance of two capacitors (C1 and C2) connected in series?",
        choice1: "C = C1 + C2",
        choice2: "C = C1 * C2 / (C1 + C2)",
        choice3: "C = C1 * C2",
        choice4: "C = 1 / (C1 + C2)",
        answer: 2
    },
    {
        question: "The magnetic field inside a long solenoid is:",
        choice1: "Zero",
        choice2: "Uniform and directed along the axis of the solenoid",
        choice3: "Non-uniform and radial",
        choice4: "Uniform and perpendicular to the axis of the solenoid",
        answer: 2
    },
    {
        question: "The speed of sound in air at 0°C is approximately:",
        choice1: "320 m/s",
        choice2: "330 m/s",
        choice3: "343 m/s",
        choice4: "360 m/s",
        answer: 2
    },
    {
        question: "In the photoelectric effect, what happens when the frequency of incident light is below the threshold frequency?",
        choice1: "Electrons are emitted",
        choice2: "Electrons are emitted with less energy",
        choice3: "No electrons are emitted",
        choice4: "Electrons are emitted with higher energy",
        answer: 3
    },
    {
        question: "Which of the following materials has the highest specific heat capacity?",
        choice1: "Water",
        choice2: "Iron",
        choice3: "Aluminum",
        choice4: "Copper",
        answer: 1
    },
    {
        question: "What does the Doppler effect describe?",
        choice1: "The change in the frequency of a wave due to motion of the source or observer",
        choice2: "The diffraction of light by a small slit",
        choice3: "The reflection of light from a surface",
        choice4: "The polarization of light in a medium",
        answer: 1
    },
    {
        question: "The pressure exerted by a gas is inversely proportional to its volume at constant temperature. This is known as:",
        choice1: "Boyle’s Law",
        choice2: "Charles’s Law",
        choice3: "Avogadro’s Law",
        choice4: "Ideal Gas Law",
        answer: 1
    },
    {
        question: "What is the energy of a photon with a wavelength of 600 nm?",
        choice1: "3.32 × 10^-19 J",
        choice2: "2.88 × 10^-19 J",
        choice3: "5.20 × 10^-19 J",
        choice4: "4.00 × 10^-19 J",
        answer: 1
    },
    {
        question: "Which of the following particles is an antiparticle of an electron?",
        choice1: "Proton",
        choice2: "Neutron",
        choice3: "Positron",
        choice4: "Photon",
        answer: 3
    },
    {
        question: "What happens to the total mechanical energy in an ideal system (no friction) when a body falls from a height?",
        choice1: "It remains constant",
        choice2: "It increases",
        choice3: "It decreases",
        choice4: "It becomes zero",
        answer: 1
    },
    {
        question: "Which of the following forces is a central force?",
        choice1: "Gravitational force",
        choice2: "Electromagnetic force",
        choice3: "Frictional force",
        choice4: "Centripetal force",
        answer: 1
    },
    {
        question: "What is the wavelength of a wave that travels at a speed of 300 m/s and has a frequency of 50 Hz?",
        choice1: "6 m",
        choice2: "3 m",
        choice3: "2 m",
        choice4: "1.5 m",
        answer: 1
    },
    {
        question: "The electric potential energy between two charges is negative. What does this indicate?",
        choice1: "The charges are attracting each other",
        choice2: "The charges are repelling each other",
        choice3: "The charges are neutral",
        choice4: "The charges are unbalanced",
        answer: 1
    },
    {
        question: "In a standing wave, the points where the amplitude is always zero are called:",
        choice1: "Nodes",
        choice2: "Antinodes",
        choice3: "Crest",
        choice4: "Troughs",
        answer: 1
    },
    {
        question: "The torque produced by a force is maximized when the force is applied at what angle to the lever arm?",
        choice1: "90°",
        choice2: "45°",
        choice3: "180°",
        choice4: "0°",
        answer: 1
    },
    {
        question: "In a Young's double-slit experiment, if the distance between slits is doubled, what happens to the fringe width?",
        choice1: "It becomes half",
        choice2: "It doubles",
        choice3: "It remains the same",
        choice4: "It becomes four times",
        answer: 1
    },
    {
        question: "A body of mass 2 kg is moving with a velocity of 3 m/s. What is its kinetic energy?",
        choice1: "9 J",
        choice2: "18 J",
        choice3: "6 J",
        choice4: "3 J",
        answer: 2
    },
    {
        question: "What is the SI unit of electric field?",
        choice1: "Volt/meter",
        choice2: "Newton",
        choice3: "Coulomb",
        choice4: "Joule",
        answer: 1
    },
    {
        question: "Which of the following does not follow the inverse square law?",
        choice1: "Gravitational force",
        choice2: "Electrostatic force",
        choice3: "Magnetic force",
        choice4: "Centripetal force",
        answer: 4
    },
    {
        question: "The intensity of a sound wave is proportional to the square of the:",
        choice1: "Amplitude",
        choice2: "Frequency",
        choice3: "Wavelength",
        choice4: "Velocity",
        answer: 1
    },
    {
        question: "In a uniformly charged spherical shell, the electric field inside the shell is:",
        choice1: "Zero",
        choice2: "Uniform",
        choice3: "Varies with distance",
        choice4: "Non-zero",
        answer: 1
    },
    {
        question: "The half-life of a substance is 5 hours. What fraction of the substance will remain after 15 hours?",
        choice1: "1/8",
        choice2: "1/2",
        choice3: "1/4",
        choice4: "1/16",
        answer: 1
    },
    {
        question: "The work function of a metal is the minimum energy required to:",
        choice1: "Cause the emission of electrons",
        choice2: "Raise the temperature of the metal",
        choice3: "Break the bonds of the metal",
        choice4: "Ionize the metal",
        answer: 1
    },
    {
        question: "The refractive index of a medium is:",
        choice1: "The ratio of the speed of light in vacuum to the speed of light in the medium",
        choice2: "The ratio of the speed of light in the medium to the speed of light in air",
        choice3: "The amount of light absorbed by the medium",
        choice4: "The ratio of the wavelength of light in air to the wavelength in the medium",
        answer: 1
    },
    {
        question: "Which of the following is not a conservative force?",
        choice1: "Gravitational force",
        choice2: "Electrostatic force",
        choice3: "Frictional force",
        choice4: "Spring force",
        answer: 3
    },
    {
        question: "A particle travels in a circular path. What force acts towards the center of the circle?",
        choice1: "Centrifugal force",
        choice2: "Centripetal force",
        choice3: "Frictional force",
        choice4: "Gravitational force",
        answer: 2
    },
    {
        question: "The electric potential energy between two charges is positive. What does this indicate?",
        choice1: "The charges are like charges",
        choice2: "The charges are opposite charges",
        choice3: "The charges are neutral",
        choice4: "The charges are unbalanced",
        answer: 1
    },
    {
        question: "What happens to the velocity of an object in free fall as it moves downward?",
        choice1: "It remains constant",
        choice2: "It increases linearly with time",
        choice3: "It increases exponentially",
        choice4: "It decreases",
        answer: 2
    },
    {
        question: "Which of the following will increase the resistance of a conductor?",
        choice1: "Increasing the temperature",
        choice2: "Decreasing the length of the conductor",
        choice3: "Decreasing the material’s resistivity",
        choice4: "Increasing the cross-sectional area",
        answer: 1
    },
    {
        question: "Which of the following describes the motion of a particle in a simple harmonic oscillator?",
        choice1: "Sinusoidal motion",
        choice2: "Exponential decay",
        choice3: "Linear motion",
        choice4: "Circular motion",
        answer: 1
    },
    {
        question: "A metal rod of length 1 meter is stretched by 1 mm. What is the strain experienced by the rod?",
        choice1: "10^-3",
        choice2: "10^-2",
        choice3: "10^-4",
        choice4: "10^-5",
        answer: 1
    },
    {
        question: "What is the total energy of an object with mass 5 kg moving with a speed of 10 m/s?",
        choice1: "250 J",
        choice2: "500 J",
        choice3: "2500 J",
        choice4: "5000 J",
        answer: 2
    },
    {
        question: "What is the force required to accelerate a 10 kg mass by 2 m/s²?",
        choice1: "5 N",
        choice2: "10 N",
        choice3: "20 N",
        choice4: "30 N",
        answer: 3
    },
    {
        question: "What is the frequency of a wave with a wavelength of 2 m and speed of 10 m/s?",
        choice1: "2 Hz",
        choice2: "5 Hz",
        choice3: "10 Hz",
        choice4: "20 Hz",
        answer: 2
    },
    {
        question: "If a capacitor of capacitance 10 µF is charged to a voltage of 20 V, what is the energy stored in it?",
        choice1: "0.5 J",
        choice2: "1 J",
        choice3: "2 J",
        choice4: "4 J",
        answer: 1
    },
    {
        question: "What is the magnetic field at the center of a circular loop carrying a current of 2 A and radius 0.5 m?",
        choice1: "0.4 T",
        choice2: "0.8 T",
        choice3: "1.0 T",
        choice4: "1.6 T",
        answer: 2
    },
    {
        question: "Which of the following is not a property of a black body?",
        choice1: "Absorbs all radiation",
        choice2: "Emits radiation",
        choice3: "Reflects all radiation",
        choice4: "Is a perfect emitter of radiation",
        answer: 3
    },
    {
        question: "What is the force acting on a charged particle of charge 1 C moving in a magnetic field of strength 3 T at a velocity of 2 m/s at an angle of 90° to the magnetic field?",
        choice1: "2 N",
        choice2: "3 N",
        choice3: "6 N",
        choice4: "12 N",
        answer: 3
    },
    {
        question: "What is the power dissipated in a 4 Ω resistor when a current of 3 A passes through it?",
        choice1: "9 W",
        choice2: "12 W",
        choice3: "36 W",
        choice4: "72 W",
        answer: 2
    },
    {
        question: "What is the refractive index of a medium if the angle of incidence is 30° and the angle of refraction is 20°?",
        choice1: "1.2",
        choice2: "1.4",
        choice3: "1.5",
        choice4: "1.6",
        answer: 3
    },
    {
        question: "A wave has a frequency of 50 Hz and a wavelength of 10 m. What is the wave speed?",
        choice1: "500 m/s",
        choice2: "50 m/s",
        choice3: "100 m/s",
        choice4: "200 m/s",
        answer: 1
    },
    {
        question: "What is the energy of a photon with a frequency of 6 x 10¹⁴ Hz? (h = 6.626 x 10⁻³⁴ J·s)",
        choice1: "4 x 10⁻² J",
        choice2: "3.98 x 10⁻² J",
        choice3: "4.0 x 10⁻³ J",
        choice4: "3.98 x 10⁻³ J",
        answer: 2
    },
    {
        question: "What is the wavelength of light with a frequency of 5 x 10¹⁴ Hz? (speed of light = 3 x 10⁸ m/s)",
        choice1: "0.6 x 10⁻⁶ m",
        choice2: "6 x 10⁻⁷ m",
        choice3: "6 x 10⁻⁶ m",
        choice4: "5 x 10⁻⁷ m",
        answer: 2
    },
    {
        question: "What is the period of a wave with a frequency of 100 Hz?",
        choice1: "0.01 s",
        choice2: "0.1 s",
        choice3: "1 s",
        choice4: "10 s",
        answer: 1
    },
    {
        question: "What is the acceleration due to gravity at the surface of the Earth?",
        choice1: "8.9 m/s²",
        choice2: "9.8 m/s²",
        choice3: "10 m/s²",
        choice4: "11 m/s²",
        answer: 2
    },
    {
        question: "What is the voltage across a 10 Ω resistor when a current of 3 A flows through it?",
        choice1: "10 V",
        choice2: "20 V",
        choice3: "30 V",
        choice4: "5 V",
        answer: 3
    },
    {
        question: "What is the angular velocity of a wheel rotating at 30 RPM?",
        choice1: "3π rad/s",
        choice2: "2π rad/s",
        choice3: "π rad/s",
        choice4: "5π rad/s",
        answer: 1
    },
    {
        question: "What is the work done in moving a charge of 2 C through a potential difference of 5 V?",
        choice1: "10 J",
        choice2: "15 J",
        choice3: "20 J",
        choice4: "25 J",
        answer: 1
    },
    {
        question: "Which of the following particles has no mass?",
        choice1: "Electron",
        choice2: "Proton",
        choice3: "Neutron",
        choice4: "Photon",
        answer: 4
    },
    {
        question: "What is the intensity of sound if the sound wave's amplitude is doubled?",
        choice1: "Doubles",
        choice2: "Quadruples",
        choice3: "Halves",
        choice4: "Remains the same",
        answer: 2
    },
    {
        question: "What is the Doppler effect?",
        choice1: "Change in frequency due to motion",
        choice2: "Change in wavelength due to motion",
        choice3: "Change in velocity of waves due to motion",
        choice4: "All of the above",
        answer: 4
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
