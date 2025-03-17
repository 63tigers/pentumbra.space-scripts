const phrases = {
  day: { 
    spring: [""],
    summer: [""],
    fall: ["."],
    winter: [
      ".",
    ] 
  },
  night: { 
    spring: ["."],
    summer: ["."],
    fall: ["."],
    winter: [
      "",
    ] 
  },
  global: [
"meowmeow",
"meow?",
  "meow"
  ]
};

function getCurrentPhrase() {
  const hour = new Date().getHours(), month = new Date().getMonth();
  const timeOfDay = hour >= 6 && hour < 18 ? 'day' : 'night';
  const season = month < 2 || month > 10 ? 'winter' : month < 5 ? 'spring' : month < 8 ? 'summer' : 'fall';
  
  const seasonalPhrase = phrases[timeOfDay][season];
  const globalPhrase = phrases.global;

  // i hate chrome.
  const chromePhrases = [
    "."
  ];

  const chosenPhrase = navigator.userAgent.includes("Chrome") ? 
    chromePhrases[Math.floor(Math.random() * chromePhrases.length)] : 
    Math.random() < 0.5 ? 
      seasonalPhrase[Math.floor(Math.random() * seasonalPhrase.length)] : 
      globalPhrase[Math.floor(Math.random() * globalPhrase.length)];

  document.querySelector("#phrase").innerHTML = chosenPhrase;
}

getCurrentPhrase();
