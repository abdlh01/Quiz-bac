const quizData = {
  fr: [
    { question: "Quelle est la signification du mot 'liberté' ?", options: ["La guerre", "L'indépendance", "La paix"], correct: 1 },
    { question: "Que signifie 'occupation' ?", options: ["La résistance", "L'invasion", "La liberté"], correct: 1 },
    { question: "Quel est le synonyme de 'armée' ?", options: ["Les soldats", "Les civils", "L'administration"], correct: 0 },
    { question: "Que signifie 'révolution' ?", options: ["Un changement radical", "Un progrès linéaire", "Un retour au passé"], correct: 0 },
    { question: "Quel est le contraire de 'colonisation' ?", options: ["Libération", "Conquête", "Soumission"], correct: 0 },
    { question: "Que signifie 'martyrs' ?", options: ["Les combattants", "Ceux qui sont morts pour une cause", "Les dirigeants"], correct: 1 },
    { question: "Quel est le synonyme de 'colonisation' ?", options: ["L'invasion", "La résistance", "La révolution"], correct: 0 },
    { question: "Quel est le contraire de 'guerre' ?", options: ["La lutte", "La paix", "La colonisation"], correct: 1 },
    { question: "Que signifie 'nation' ?", options: ["Un groupe de pays", "Une tribu", "Un ensemble de personnes partageant une culture"], correct: 2 },
    { question: "Quel est le contraire de 'soumission' ?", options: ["Résistance", "Liberté", "Opprimé"], correct: 0 },
    { question: "Quel est le synonyme de 'indépendance' ?", options: ["Libération", "Soumission", "Souffrance"], correct: 0 },
    { question: "Que signifie 'occupation' en politique ?", options: ["L'attaque", "L'invasion", "La paix"], correct: 1 },
    { question: "Quel est le contraire de 'opprimé' ?", options: ["Libéré", "Soumis", "Vaincu"], correct: 0 },
    { question: "Que signifie 'violence' ?", options: ["L'agression physique", "La paix intérieure", "L'injustice"], correct: 0 },
    { question: "Quel est le synonyme de 'oppression' ?", options: ["Liberté", "Soumission", "Délivrance"], correct: 1 },
    { question: "Que signifie 'changement' ?", options: ["Stabilité", "Mutation", "Conformité"], correct: 1 },
    { question: "Que signifie 'fraternité' ?", options: ["Solidarité", "Haine", "Division"], correct: 0 },
    { question: "Quel est le synonyme de 'justice' ?", options: ["Injustice", "Equité", "Privilège"], correct: 1 },
    { question: "Que signifie 'libération' ?", options: ["Prison", "Liberté", "Oppression"], correct: 1 },
    { question: "Quel est le contraire de 'défaite' ?", options: ["Victoire", "Soumission", "Rejet"], correct: 0 },
    { question: "Que signifie 'résistance' ?", options: ["Soumission", "Refus", "Collaboration"], correct: 1 },
    { question: "Quel est le synonyme de 'mouvement' ?", options: ["Paix", "Changement", "Revolution"], correct: 2 },
    { question: "Que signifie 'colonialisme' ?", options: ["Domination", "Libération", "Indépendance"], correct: 0 },
    { question: "Quel est le synonyme de 'conquête' ?", options: ["Victoire", "Perte", "Soumission"], correct: 0 },
    { question: "Que signifie 'opprimé' ?", options: ["Libéré", "Soutenu", "Réprimé"], correct: 2 },
    { question: "Quel est le contraire de 'belligérant' ?", options: ["Pacifique", "Violent", "Fermé"], correct: 0 },
    { question: "Quel est le synonyme de 'autonomie' ?", options: ["Indépendance", "Soumission", "Contrôle"], correct: 0 },
    { question: "Que signifie 'victime' ?", options: ["L'agresseur", "La personne blessée", "Le témoin"], correct: 1 },
    { question: "Quel est le synonyme de 'génocide' ?", options: ["Massacre", "Réconciliation", "Culpabilité"], correct: 0 },
    { question: "Que signifie 'négociation' ?", options: ["Accord", "Conflit", "Résistance"], correct: 0 }
  ],

  en: [
    { question: "What is the synonym of 'ethics'?", options: ["Morality", "Dishonesty", "Crime"], correct: 0 },
    { question: "What does 'bribery' mean?", options: ["The act of offering money for influence", "Stealing", "Helping someone"], correct: 0 },
    { question: "What does 'corruption' mean?", options: ["Dishonesty", "Respect", "Justice"], correct: 0 },
    { question: "What is the synonym of 'theft'?", options: ["Larceny", "Justice", "Generosity"], correct: 0 },
    { question: "What does 'money laundering' mean?", options: ["The illegal process of making large amounts of money", "Tax evasion", "Investment"], correct: 0 },
    { question: "What does 'obesity' mean?", options: ["Excessive body fat", "Thinness", "Fitness"], correct: 0 },
    { question: "What does 'diabetes' refer to?", options: ["A chronic disease affecting blood sugar levels", "Mental illness", "Nervous disorder"], correct: 0 },
    { question: "What is the synonym of 'light food'?", options: ["Heavy food", "Fast food", "Healthy food"], correct: 2 },
    { question: "What does 'advertisement' mean?", options: ["Promotion of products", "Personal conversation", "Public protest"], correct: 0 },
    { question: "What does 'fake advertisement' mean?", options: ["False promotion", "True ad", "Social media post"], correct: 0 },
    { question: "What is the opposite of 'customer'?", options: ["Client", "Supplier", "Company"], correct: 0 },
    { question: "What does 'planet' mean?", options: ["A large celestial body", "A star", "A satellite"], correct: 0 },
    { question: "What does 'galaxy' refer to?", options: ["A system of stars and planets", "A single planet", "A comet"], correct: 0 },
    { question: "What is the synonym of 'Earth'?", options: ["Planet", "Moon", "Sun"], correct: 0 },
    { question: "What does 'sun' mean?", options: ["A star in our solar system", "A planet", "A galaxy"], correct: 0 },
    { question: "What is the opposite of 'light'?", options: ["Dark", "Bright", "Sunlight"], correct: 0 },
    { question: "What is the synonym of 'company'?", options: ["Firm", "Store", "Product"], correct: 0 },
    { question: "What does 'client' mean?", options: ["A customer", "A seller", "A producer"], correct: 0 },
    { question: "What is the meaning of 'advertisement'?", options: ["An act of promoting goods or services", "A review", "A personal message"], correct: 0 },
    { question: "What does 'trust' mean?", options: ["Belief", "Doubt", "Suspicion"], correct: 0 },
    { question: "What is the opposite of 'honesty'?", options: ["Deception", "Sincerity", "Truth"], correct: 0 },
    { question: "What does 'promotion' mean?", options: ["Advertising", "Decline", "Obstruction"], correct: 0 },
    { question: "What is the synonym of 'business'?", options: ["Company", "Vacation", "Hobby"], correct: 0 },
    { question: "What is the meaning of 'global warming'?", options: ["Increase in Earth's temperature", "Decrease in pollution", "Change in wind patterns"], correct: 0 },
    { question: "What does 'renewable energy' mean?", options: ["Energy from infinite sources", "Energy from fossil fuels", "Nuclear energy"], correct: 0 },
    { question: "What is the synonym of 'environment'?", options: ["Surroundings", "Building", "Machine"], correct: 0 },
    { question: "What does 'pollution' refer to?", options: ["Contamination of environment", "Cleaning process", "Natural phenomenon"], correct: 0 },
    { question: "What is the opposite of 'waste'?", options: ["Conserve", "Throw", "Destroy"], correct: 0 },
    { question: "What does 'sustainability' mean?", options: ["Maintaining ecological balance", "Rapid development", "Short-term solutions"], correct: 0 }
  ]
};

let currentSubject = '';
let currentQuestion = 0;
let score = 0;
const QUESTIONS_PER_QUIZ = 8; // تغيير من 2 إلى 8 أسئلة

function startQuiz(subject) {
  currentSubject = subject;
  currentQuestion = 0;
  score = 0;
  
  document.getElementById("quiz-title").textContent = 
    subject === "fr" ? "كويز الفرنسية" : "كويز الإنجليزية";
  
  document.getElementById("quizModal").style.display = "block";
  document.getElementById("quiz-result").textContent = "";
  document.getElementById("restart-btn").style.display = "none";
  
  showQuestion();
}

function showQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (currentQuestion >= QUESTIONS_PER_QUIZ) {
    document.getElementById("quiz-result").textContent = 
      `نتيجتك: ${score} من ${QUESTIONS_PER_QUIZ} إجابة صحيحة`;
    document.getElementById("restart-btn").style.display = "inline-block";
    return;
  }

  // اختيار أسئلة عشوائية من المجموعة الكبيرة
  const randomIndex = Math.floor(Math.random() * quizData[currentSubject].length);
  const q = quizData[currentSubject][randomIndex];
  
  const qElement = document.createElement("h3");
  qElement.textContent = q.question;
  container.appendChild(qElement);

  q.options.forEach((option, i) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = option;
    btn.onclick = () => checkAnswer(i, btn, q.correct);
    container.appendChild(btn);
  });
}

function checkAnswer(selected, button, correct) {
  const options = document.querySelectorAll(".option");
  options.forEach(btn => btn.onclick = null);

  if (selected === correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    options[correct].classList.add("correct");
  }

  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 1000);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function closeQuiz() {
  document.getElementById("quizModal").style.display = "none";
}

// الخلفية المتحركة
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lines = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  length: Math.random() * 20 + 10,
  speed: Math.random() * 1 + 0.5
}));

function animate() {
  ctx.fillStyle = "rgba(1,15,29,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#00bfff";
  ctx.lineWidth = 1;

  lines.forEach(line => {
    ctx.beginPath();
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x, line.y + line.length);
    ctx.stroke();

    line.y += line.speed;
    if (line.y > canvas.height) {
      line.y = -line.length;
      line.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}
animate();
