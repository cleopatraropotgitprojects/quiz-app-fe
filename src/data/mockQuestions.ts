export type QuizQuestion =
  | {
      type?: "knowledge";
      question: string;
      options: string[];
      correct: number;
    }
  | {
      type?: "personality";
      question: string;
      options: { text: string; scores: Record<string, number> }[];
    }
  | {
      type?: "psychological";
      question: string;
      options: { text: string; traits: Record<string, number> }[];
      multiple: boolean;
    };

export const mockQuestions: Record<number, QuizQuestion[]> = {
  // How well do you know European geography?
  1: [
    {
      question: "Which country does the city of Prague belong to?",
      options: ["Austria", "Poland", "Czech Republic", "Slovakia"],
      correct: 2,
    },
    {
      question: "Which sea borders Greece to the west?",
      options: ["Black Sea", "Baltic Sea", "Ionian Sea", "Adriatic Sea"],
      correct: 2,
    },
    {
      question: "Which of the following is NOT part of Scandinavia?",
      options: ["Norway", "Sweden", "Germany", "Denmark"],
      correct: 2,
    },
    {
      question: "Which country is Budapest the capital of?",
      options: ["Hungary", "Romania", "Austria", "Bulgaria"],
      correct: 0,
    },
    {
      question: "The Danube River flows through how many countries?",
      options: ["12", "8", "6", "10"],
      correct: 3,
    },
    {
      question: "Which country has the northernmost point in Europe?",
      options: ["Sweden", "Finland", "Iceland", "Norway"],
      correct: 3,
    },
    {
      question: "What is the capital of Portugal?",
      options: ["Lisbon", "Madrid", "Porto", "Barcelona"],
      correct: 0,
    },
    {
      question: "Which country shares a border with both France and Poland?",
      options: ["Austria", "Germany", "Czech Republic", "Belgium"],
      correct: 1,
    },
    {
      question: "What is the largest island in the Mediterranean Sea?",
      options: ["Sardinia", "Sicily", "Crete", "Corsica"],
      correct: 1,
    },
    {
      question: "Which country is the city of Bruges located in?",
      options: ["France", "Germany", "Belgium", "Netherlands"],
      correct: 2,
    },
    {
      question: "Which country does Transylvania belong to?",
      options: ["Serbia", "Ukraine", "Hungary", "Romania"],
      correct: 3,
    },
    {
      question: "What is the capital of Iceland?",
      options: ["Oslo", "Reykjavik", "Helsinki", "Stockholm"],
      correct: 1,
    },
    {
      question: "Which country has the most volcanoes in Europe?",
      options: ["Iceland", "Spain", "Italy", "Greece"],
      correct: 0,
    },
    {
      question: "Mount Elbrus is located in which country?",
      options: ["Georgia", "Russia", "Turkey", "Ukraine"],
      correct: 1,
    },
    {
      question: "What sea separates Sweden and the Baltic states?",
      options: ["Barents Sea", "Baltic Sea", "Norwegian Sea", "North Sea"],
      correct: 1,
    },
    {
      question: "Which European country is famous for fjords?",
      options: ["Denmark", "Norway", "Sweden", "Finland"],
      correct: 1,
    },
    {
      question: "Which country is home to the city of Kraków?",
      options: ["Slovakia", "Czech Republic", "Hungary", "Poland"],
      correct: 3,
    },
    {
      question: "Andorra is located between which two countries?",
      options: [
        "France and Spain",
        "Austria and Germany",
        "Spain and Portugal",
        "Italy and Switzerland",
      ],
      correct: 0,
    },
    {
      question: "Which country has the longest coastline in Europe?",
      options: ["Italy", "Greece", "Norway", "United Kingdom"],
      correct: 2,
    },
    {
      question: "What is the smallest country in Europe by area?",
      options: ["Vatican City", "Liechtenstein", "San Marino", "Monaco"],
      correct: 0,
    },
  ],
  // Which country is this capital from?
  2: [
    {
      question: "Oslo is the capital of?",
      options: ["Norway", "Denmark", "Sweden", "Finland"],
      correct: 0,
    },
    {
      question: "Vienna is the capital of?",
      options: ["Germany", "Hungary", "Switzerland", "Austria"],
      correct: 3,
    },
    {
      question: "Warsaw is the capital of?",
      options: ["Ukraine", "Czech Republic", "Poland", "Belarus"],
      correct: 2,
    },
    {
      question: "Helsinki is the capital of?",
      options: ["Estonia", "Norway", "Finland", "Latvia"],
      correct: 2,
    },
    {
      question: "Lisbon is the capital of?",
      options: ["Italy", "Portugal", "Greece", "Spain"],
      correct: 1,
    },
    {
      question: "Bern is the capital of?",
      options: ["Austria", "Switzerland", "Germany", "Luxembourg"],
      correct: 1,
    },
    {
      question: "Brussels is the capital of?",
      options: ["France", "Belgium", "Luxembourg", "Netherlands"],
      correct: 1,
    },
    {
      question: "Athens is the capital of?",
      options: ["Malta", "Cyprus", "Greece", "Italy"],
      correct: 2,
    },
    {
      question: "Reykjavik is the capital of?",
      options: ["Greenland", "Denmark", "Norway", "Iceland"],
      correct: 3,
    },
    {
      question: "Zagreb is the capital of?",
      options: ["Serbia", "Slovenia", "Croatia", "Montenegro"],
      correct: 2,
    },
    {
      question: "Skopje is the capital of?",
      options: ["Albania", "North Macedonia", "Bulgaria", "Kosovo"],
      correct: 1,
    },
    {
      question: "Sofia is the capital of?",
      options: ["Bulgaria", "Serbia", "Slovakia", "Romania"],
      correct: 0,
    },
    {
      question: "Tirana is the capital of?",
      options: ["Bosnia & Herzegovina", "North Macedonia", "Kosovo", "Albania"],
      correct: 3,
    },
    {
      question: "Podgorica is the capital of?",
      options: ["Slovenia", "Montenegro", "Croatia", "Serbia"],
      correct: 1,
    },
    {
      question: "Ljubljana is the capital of?",
      options: ["Austria", "Slovakia", "Slovenia", "Croatia"],
      correct: 2,
    },
    {
      question: "Belgrade is the capital of?",
      options: ["Bosnia", "Romania", "Montenegro", "Serbia"],
      correct: 3,
    },
    {
      question: "Sarajevo is the capital of?",
      options: ["Serbia", "Croatia", "Bosnia & Herzegovina", "Montenegro"],
      correct: 2,
    },
    {
      question: "Chisinau is the capital of?",
      options: ["Belarus", "Ukraine", "Romania", "Republic of Moldova"],
      correct: 3,
    },
    {
      question: "Bucharest is the capital of?",
      options: ["Romania", "Moldova", "Hungary", "Bulgaria"],
      correct: 0,
    },
    {
      question: "Tallinn is the capital of?",
      options: ["Lithuania", "Finland", "Latvia", "Estonia"],
      correct: 3,
    },
  ],
  // General knowledge: quick edition
  3: [
    {
      question: "What is the largest planet in our Solar System?",
      options: ["Earth", "Mars", "Saturn", "Jupiter"],
      correct: 3,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Michelangelo", "Picasso", "Leonardo da Vinci"],
      correct: 3,
    },
    {
      question: "What year did World War II end?",
      options: ["1945", "1939", "1950", "1942"],
      correct: 0,
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
      correct: 3,
    },
    {
      question: "Which organ is responsible for pumping blood?",
      options: ["Heart", "Liver", "Lungs", "Kidneys"],
      correct: 0,
    },
    {
      question: "How many continents are there?",
      options: ["7", "8", "6", "5"],
      correct: 0,
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Yangtze", "Amazon", "Mississippi", "Nile"],
      correct: 3,
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "G", "Go"],
      correct: 0,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Venus", "Mercury"],
      correct: 1,
    },
    {
      question: "Which famous scientist developed the theory of relativity?",
      options: ["Einstein", "Newton", "Bohr", "Tesla"],
      correct: 0,
    },
    {
      question: "What’s the capital of Australia?",
      options: ["Canberra", "Sydney", "Brisbane", "Melbourne"],
      correct: 0,
    },
    {
      question: "Which country invented pizza?",
      options: ["Greece", "Spain", "France", "Italy"],
      correct: 3,
    },
    {
      question: "How many players are on a soccer team (on the field)?",
      options: ["9", "11", "10", "12"],
      correct: 1,
    },
    {
      question: "Which element does 'O' represent on the periodic table?",
      options: ["Osmium", "Oxygen", "Ozone", "Oxide"],
      correct: 1,
    },
    {
      question: "Which language has the most native speakers?",
      options: ["Mandarin Chinese", "English", "Hindi", "Spanish"],
      correct: 0,
    },
    {
      question: "What’s the tallest mountain on Earth?",
      options: ["K2", "Makalu", "Kangchenjunga", "Everest"],
      correct: 3,
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Dickens", "Homer", "Dante", "Shakespeare"],
      correct: 3,
    },
    {
      question: "What does 'WWW' stand for in a website browser?",
      options: [
        "Web World Wide",
        "Wide Web World",
        "World Wide Web",
        "Wide Web Worldnet",
      ],
      correct: 2,
    },
    {
      question: "Which animal is known as the 'King of the Jungle'?",
      options: ["Tiger", "Lion", "Elephant", "Panther"],
      correct: 1,
    },
    {
      question: "How many colors are in a rainbow?",
      options: ["5", "8", "7", "6"],
      correct: 2,
    },
  ],
  // History test: key events of the 20th century
  4: [
    {
      question: "In which year did World War I begin?",
      options: ["1918", "1916", "1912", "1914"],
      correct: 3,
    },
    {
      question:
        "Who was the British Prime Minister during most of World War II?",
      options: [
        "Neville Chamberlain",
        "Margaret Thatcher",
        "Winston Churchill",
        "Tony Blair",
      ],
      correct: 2,
    },
    {
      question: "What year did the Berlin Wall fall?",
      options: ["1991", "1987", "1993", "1989"],
      correct: 3,
    },
    {
      question: "Which country launched the first artificial satellite?",
      options: ["USA", "China", "Germany", "Russia"],
      correct: 3,
    },
    {
      question: "Who was assassinated in 1963 in Dallas, Texas?",
      options: [
        "John F. Kennedy",
        "Robert Kennedy",
        "Martin Luther King Jr.",
        "Ronald Reagan",
      ],
      correct: 0,
    },
    {
      question: "What year did World War II end?",
      options: ["1950", "1945", "1939", "1942"],
      correct: 1,
    },
    {
      question:
        "What was the name of the US civil rights leader who delivered the 'I Have a Dream' speech?",
      options: [
        "Malcolm X",
        "Martin Luther King Jr.",
        "Frederick Douglass",
        "Barack Obama",
      ],
      correct: 1,
    },
    {
      question: "When did the Soviet Union dissolve?",
      options: ["1989", "1992", "1991", "1990"],
      correct: 2,
    },
    {
      question: "Which war was fought between North and South Korea?",
      options: ["Korean War", "World War II", "Vietnam War", "Cold War"],
      correct: 0,
    },
    {
      question: "What was the name of the first man to walk on the moon?",
      options: [
        "Michael Collins",
        "Neil Armstrong",
        "Yuri Gagarin",
        "Buzz Aldrin",
      ],
      correct: 1,
    },
    {
      question: "Which country did Adolf Hitler lead?",
      options: ["Germany", "France", "Austria", "Russia"],
      correct: 0,
    },
    {
      question: "The Titanic sank in what year?",
      options: ["1914", "1920", "1912", "1905"],
      correct: 2,
    },
    {
      question:
        "Which Cold War conflict occurred in Southeast Asia during the 1960s–70s?",
      options: ["Vietnam War", "Korean War", "Gulf War", "Afghan War"],
      correct: 0,
    },
    {
      question:
        "What wall was a symbol of division in Germany during the Cold War?",
      options: ["Great Wall", "Western Wall", "Berlin Wall", "Iron Wall"],
      correct: 2,
    },
    {
      question: "When was the United Nations founded?",
      options: ["1942", "1939", "1945", "1950"],
      correct: 2,
    },
    {
      question: "Who was the first female Prime Minister of the UK?",
      options: [
        "Margaret Thatcher",
        "Theresa May",
        "Angela Merkel",
        "Indira Gandhi",
      ],
      correct: 0,
    },
    {
      question: "Which country did the nuclear disaster at Chernobyl occur in?",
      options: ["Belarus", "Ukraine", "Russia", "Kazakhstan"],
      correct: 1,
    },
    {
      question: "Who was the leader of the Soviet Union during World War II?",
      options: ["Lenin", "Stalin", "Trotsky", "Gorbachev"],
      correct: 1,
    },
    {
      question: "What was the name of the treaty that ended World War I?",
      options: [
        "Treaty of Paris",
        "Treaty of Versailles",
        "Yalta Pact",
        "Potsdam Agreement",
      ],
      correct: 1,
    },
    {
      question: "Which wall fell in 1989, marking the end of the Cold War era?",
      options: ["Iron Wall", "Western Wall", "Great Wall", "Berlin Wall"],
      correct: 3,
    },
  ],
  // What do you know about space and planets?
  5: [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mercury", "Venus", "Jupiter", "Mars"],
      correct: 3,
    },
    {
      question: "Which planet is the largest in our solar system?",
      options: ["Jupiter", "Earth", "Saturn", "Neptune"],
      correct: 0,
    },
    {
      question: "How many planets are in the solar system?",
      options: ["7", "9", "8", "10"],
      correct: 2,
    },
    {
      question: "Which planet has the most moons?",
      options: ["Uranus", "Mars", "Jupiter", "Saturn"],
      correct: 3,
    },
    {
      question: "What is the closest planet to the Sun?",
      options: ["Mercury", "Earth", "Mars", "Venus"],
      correct: 0,
    },
    {
      question: "Which planet is known for its rings?",
      options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
      correct: 1,
    },
    {
      question: "What galaxy is Earth located in?",
      options: ["Milky Way", "Andromeda", "Whirlpool", "Triangulum"],
      correct: 0,
    },
    {
      question: "What is the name of Earth’s moon?",
      options: ["The Moon", "Luna", "Selene", "Phobos"],
      correct: 0,
    },
    {
      question: "Which planet has a day longer than its year?",
      options: ["Mercury", "Jupiter", "Mars", "Venus"],
      correct: 3,
    },
    {
      question: "Which is the coldest planet in the solar system?",
      options: ["Saturn", "Neptune", "Uranus", "Pluto"],
      correct: 2,
    },
    {
      question: "Which planet has the strongest gravity?",
      options: ["Earth", "Jupiter", "Saturn", "Neptune"],
      correct: 1,
    },
    {
      question: "What is a black hole?",
      options: ["A planet", "A type of moon", "A wormhole", "A collapsed star"],
      correct: 3,
    },
    {
      question: "Which planet is tipped on its side?",
      options: ["Jupiter", "Uranus", "Neptune", "Mars"],
      correct: 1,
    },
    {
      question: "Which was the first country to send a man to space?",
      options: ["Germany", "USA", "China", "Soviet Union"],
      correct: 3,
    },
    {
      question: "Who was the first human in space?",
      options: [
        "Neil Armstrong",
        "Buzz Aldrin",
        "Yuri Gagarin",
        "Michael Collins",
      ],
      correct: 2,
    },
    {
      question: "Which planet is farthest from the Sun?",
      options: ["Pluto", "Neptune", "Saturn", "Uranus"],
      correct: 1,
    },
    {
      question: "What is the name of NASA's most famous space telescope?",
      options: ["Spitzer", "Hubble", "James Webb", "Kepler"],
      correct: 1,
    },
    {
      question: "Which planet is known as the 'Evening Star'?",
      options: ["Saturn", "Mars", "Venus", "Jupiter"],
      correct: 2,
    },
    {
      question: "What is a light-year?",
      options: [
        "A year with 366 days",
        "The speed of light",
        "A year on Mercury",
        "A measurement of distance",
      ],
      correct: 3,
    },
    {
      question: "Which planet has the fastest rotation?",
      options: ["Earth", "Saturn", "Jupiter", "Mars"],
      correct: 2,
    },
  ],
  // English grammar test
  6: [
    {
      question: "Which sentence is grammatically correct?",
      options: [
        "She goes to school.",
        "She going to school.",
        "She go to school.",
        "She gone to school.",
      ],
      correct: 0,
    },
    {
      question: "What is the past tense of 'run'?",
      options: ["ran", "runned", "running", "run"],
      correct: 0,
    },
    {
      question:
        "Choose the correct article: ___ apple a day keeps the doctor away.",
      options: ["The", "An", "A", "No article"],
      correct: 1,
    },
    {
      question: "Which word is an adjective?",
      options: ["Run", "Beautiful", "Quickly", "Happily"],
      correct: 1,
    },
    {
      question: "What is the plural of 'child'?",
      options: ["Childer", "Children", "Childes", "Childs"],
      correct: 1,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "He doesn’t likes coffee.",
        "He don’t like coffee.",
        "He doesn’t like coffee.",
        "He doesn’t like coffees.",
      ],
      correct: 2,
    },
    {
      question: "Which word is a preposition?",
      options: ["Quick", "Beautiful", "Running", "Under"],
      correct: 3,
    },
    {
      question: "Complete the sentence: I have lived here ___ 2015.",
      options: ["in", "since", "for", "at"],
      correct: 1,
    },
    {
      question: "What’s the superlative form of 'good'?",
      options: ["Goodest", "Better", "Best", "More good"],
      correct: 2,
    },
    {
      question: "Which sentence is in the passive voice?",
      options: [
        "The teacher will explain.",
        "The teacher explained the lesson.",
        "The lesson was explained by the teacher.",
        "The teacher is explaining.",
      ],
      correct: 2,
    },
    {
      question: "What type of word is 'quickly'?",
      options: ["Adverb", "Noun", "Verb", "Adjective"],
      correct: 0,
    },
    {
      question: "Identify the conjunction: 'I like tea **and** coffee.'",
      options: ["Like", "Tea", "Coffee", "And"],
      correct: 3,
    },
    {
      question: "Choose the correct form: 'She ___ playing now.'",
      options: ["was", "be", "were", "is"],
      correct: 3,
    },
    {
      question: "Which sentence is correct?",
      options: [
        "They has finished.",
        "They have finish.",
        "They have finished.",
        "They has finish.",
      ],
      correct: 2,
    },
    {
      question: "Which one is a noun?",
      options: ["Apple", "Run", "Quickly", "Happy"],
      correct: 0,
    },
    {
      question:
        "Choose the correct comparative form: 'This book is ___ than that one.'",
      options: ["better", "best", "good", "more good"],
      correct: 0,
    },
    {
      question: "Fill in the blank: I’m interested ___ learning Spanish.",
      options: ["with", "for", "in", "at"],
      correct: 2,
    },
    {
      question:
        "Which word completes the sentence? 'She has ___ her homework.'",
      options: ["did", "done", "do", "doing"],
      correct: 1,
    },
    {
      question: "What is the opposite of 'always'?",
      options: ["Often", "Usually", "Sometimes", "Never"],
      correct: 3,
    },
    {
      question: "Which word is a verb?",
      options: ["Happy", "Eat", "Hungry", "Slow"],
      correct: 1,
    },
  ],
  // Which Harry Potter character are you?
  7: [
    {
      question: "What quality describes you best?",
      options: [
        { text: "Smart", scores: { Hermione: 1 } },
        { text: "Loyal", scores: { Ron: 1 } },
        { text: "Brave", scores: { Harry: 1 } },
        { text: "Ambitious", scores: { Draco: 1 } },
      ],
    },
    {
      question: "What would be your favorite subject at Hogwarts?",
      options: [
        { text: "Charms", scores: { Draco: 1 } },
        { text: "Defense Against the Dark Arts", scores: { Harry: 1 } },
        { text: "Potions", scores: { Hermione: 1 } },
        { text: "Care of Magical Creatures", scores: { Luna: 1 } },
      ],
    },
    {
      question: "How do you handle conflict?",
      options: [
        { text: "Manipulate behind the scenes", scores: { Draco: 1 } },
        { text: "Avoid it if possible", scores: { Ron: 1 } },
        { text: "Use logic to win", scores: { Hermione: 1 } },
        { text: "Face it head-on", scores: { Harry: 1 } },
      ],
    },
    {
      question: "Choose a magical creature:",
      options: [
        { text: "Hippogriff", scores: { Harry: 1 } },
        { text: "Phoenix", scores: { Dumbledore: 1 } },
        { text: "Niffler", scores: { Ron: 1 } },
        { text: "Thestral", scores: { Luna: 1 } },
      ],
    },
    {
      question: "What would you see in the Mirror of Erised?",
      options: [
        { text: "Knowledge and books", scores: { Hermione: 1 } },
        { text: "Your family safe and happy", scores: { Ron: 1 } },
        { text: "Adventure and excitement", scores: { Harry: 1 } },
        { text: "Power and control", scores: { Draco: 1 } },
      ],
    },
    {
      question: "Pick a Hogwarts house:",
      options: [
        { text: "Slytherin", scores: { Draco: 1 } },
        { text: "Ravenclaw", scores: { Luna: 1 } },
        { text: "Gryffindor", scores: { Harry: 1 } },
        { text: "Hufflepuff", scores: { Ron: 1 } },
      ],
    },
    {
      question: "What’s your biggest flaw?",
      options: [
        { text: "Stubbornness", scores: { Hermione: 1 } },
        { text: "Insecurity", scores: { Ron: 1 } },
        { text: "Impulsiveness", scores: { Harry: 1 } },
        { text: "Arrogance", scores: { Draco: 1 } },
      ],
    },
    {
      question: "Choose a drink from The Three Broomsticks:",
      options: [
        { text: "Firewhisky", scores: { Draco: 1 } },
        { text: "Butterbeer", scores: { Ron: 1 } },
        { text: "Pumpkin Juice", scores: { Hermione: 1 } },
        { text: "Gillywater", scores: { Luna: 1 } },
      ],
    },
    {
      question: "In a group project, you’re the one who...",
      options: [
        { text: "Organizes everything", scores: { Hermione: 1 } },
        { text: "Goes with the flow", scores: { Ron: 1 } },
        { text: "Takes the lead", scores: { Harry: 1 } },
        { text: "Makes sarcastic comments", scores: { Draco: 1 } },
      ],
    },
    {
      question: "What scares you the most?",
      options: [
        { text: "Being ignored", scores: { Luna: 1 } },
        { text: "Failure", scores: { Hermione: 1 } },
        { text: "Losing loved ones", scores: { Harry: 1 } },
        { text: "Being underestimated", scores: { Draco: 1 } },
      ],
    },
    {
      question: "Your dream job in the wizarding world?",
      options: [
        { text: "Professor", scores: { Hermione: 1 } },
        { text: "Auror", scores: { Harry: 1 } },
        { text: "Minister of Magic", scores: { Draco: 1 } },
        { text: "Shop owner", scores: { Ron: 1 } },
      ],
    },
    {
      question: "Pick a spell:",
      options: [
        { text: "Lumos", scores: { Luna: 1 } },
        { text: "Alohomora", scores: { Hermione: 1 } },
        { text: "Sectumsempra", scores: { Draco: 1 } },
        { text: "Expelliarmus", scores: { Harry: 1 } },
      ],
    },
    {
      question: "You’re most likely to be found...",
      options: [
        { text: "Eating in the Great Hall", scores: { Ron: 1 } },
        { text: "Plotting in the common room", scores: { Draco: 1 } },
        { text: "Reading in the library", scores: { Hermione: 1 } },
        { text: "Practicing spells", scores: { Harry: 1 } },
      ],
    },
    {
      question: "Pick a magical object:",
      options: [
        { text: "Invisibility Cloak", scores: { Harry: 1 } },
        { text: "Time Turner", scores: { Hermione: 1 } },
        { text: "Elder Wand", scores: { Draco: 1 } },
        { text: "Marauder’s Map", scores: { Ron: 1 } },
      ],
    },
    {
      question: "Your friend is in trouble. You...",
      options: [
        { text: "Run to help immediately", scores: { Harry: 1 } },
        { text: "See if it's worth your time", scores: { Draco: 1 } },
        { text: "Come up with a smart plan", scores: { Hermione: 1 } },
        { text: "Support them emotionally", scores: { Ron: 1 } },
      ],
    },
    {
      question: "What’s your Hogwarts aesthetic?",
      options: [
        { text: "Laughter and snacks", scores: { Ron: 1 } },
        { text: "Books and scrolls", scores: { Hermione: 1 } },
        { text: "Dark corridors", scores: { Draco: 1 } },
        { text: "Capes and candles", scores: { Harry: 1 } },
      ],
    },
    {
      question: "What would others say about you?",
      options: [
        { text: "Cunning", scores: { Draco: 1 } },
        { text: "Intelligent", scores: { Hermione: 1 } },
        { text: "Courageous", scores: { Harry: 1 } },
        { text: "Funny", scores: { Ron: 1 } },
      ],
    },
    {
      question: "Choose a quote:",
      options: [
        { text: "My father will hear about this!", scores: { Draco: 1 } },
        {
          text: "You're going to suffer, but you're going to be happy about it.",
          scores: { Luna: 1 },
        },
        { text: "It takes a great deal of bravery...", scores: { Harry: 1 } },
        { text: "Books! And cleverness!", scores: { Hermione: 1 } },
      ],
    },
    {
      question: "Which word resonates most with you?",
      options: [
        { text: "Wisdom", scores: { Hermione: 1 } },
        { text: "Kindness", scores: { Ron: 1 } },
        { text: "Bravery", scores: { Harry: 1 } },
        { text: "Ambition", scores: { Draco: 1 } },
      ],
    },
    {
      question: "Pick a magical item to keep forever:",
      options: [
        { text: "A Firebolt", scores: { Harry: 1 } },
        { text: "Felix Felicis", scores: { Hermione: 1 } },
        { text: "A Pensieve", scores: { Ron: 1 } },
        { text: "A Horcrux (if you dare)", scores: { Draco: 1 } },
      ],
    },
  ],
  // Which Disney character matches your personality?
  8: [
    {
      question: "What's your ideal weekend?",
      options: [
        { text: "Swimming and collecting treasures", scores: { Ariel: 1 } },
        { text: "Exploring nature alone", scores: { Elsa: 1 } },
        { text: "Reading a book in a cozy spot", scores: { Belle: 1 } },
        { text: "Training or learning new skills", scores: { Mulan: 1 } },
      ],
    },
    {
      question: "Pick a favorite element:",
      options: [
        { text: "Fire", scores: { Mulan: 1 } },
        { text: "Earth", scores: { Belle: 1 } },
        { text: "Water", scores: { Ariel: 1 } },
        { text: "Ice", scores: { Elsa: 1 } },
      ],
    },
    {
      question: "How do you handle conflict?",
      options: [
        { text: "Stay calm and distant", scores: { Elsa: 1 } },
        { text: "Act quickly and take charge", scores: { Mulan: 1 } },
        { text: "Speak your mind", scores: { Ariel: 1 } },
        { text: "Use reason and empathy", scores: { Belle: 1 } },
      ],
    },
    {
      question: "Choose a companion animal:",
      options: [
        { text: "Golden Retriever", scores: { Belle: 1 } },
        { text: "Arctic Wolf", scores: { Elsa: 1 } },
        { text: "Clownfish", scores: { Ariel: 1 } },
        { text: "Siberian Tiger", scores: { Mulan: 1 } },
      ],
    },
    {
      question: "What motivates you the most?",
      options: [
        { text: "Honor and duty", scores: { Mulan: 1 } },
        { text: "Adventure and curiosity", scores: { Ariel: 1 } },
        { text: "Knowledge and understanding", scores: { Belle: 1 } },
        { text: "Freedom to be yourself", scores: { Elsa: 1 } },
      ],
    },
    {
      question: "How do others describe you?",
      options: [
        { text: "Free-spirited and daring", scores: { Ariel: 1 } },
        { text: "Brave and strategic", scores: { Mulan: 1 } },
        { text: "Reserved but powerful", scores: { Elsa: 1 } },
        { text: "Kind and intelligent", scores: { Belle: 1 } },
      ],
    },
    {
      question: "Pick a favorite place:",
      options: [
        { text: "A battlefield of honor", scores: { Mulan: 1 } },
        { text: "The ocean floor", scores: { Ariel: 1 } },
        { text: "A cozy library", scores: { Belle: 1 } },
        { text: "A quiet snowy mountain", scores: { Elsa: 1 } },
      ],
    },
    {
      question: "Your best strength is...",
      options: [
        { text: "Inner power", scores: { Elsa: 1 } },
        { text: "Fearlessness", scores: { Ariel: 1 } },
        { text: "Empathy", scores: { Belle: 1 } },
        { text: "Discipline", scores: { Mulan: 1 } },
      ],
    },
    {
      question: "What's your weakness?",
      options: [
        { text: "Breaking rules", scores: { Mulan: 1 } },
        { text: "Overthinking", scores: { Belle: 1 } },
        { text: "Shutting people out", scores: { Elsa: 1 } },
        { text: "Being impulsive", scores: { Ariel: 1 } },
      ],
    },
    {
      question: "Pick a quote:",
      options: [
        {
          text: "The flower that blooms in adversity is the most rare and beautiful of all.",
          scores: { Mulan: 1 },
        },
        { text: "I want to be where the people are.", scores: { Ariel: 1 } },
        { text: "Let it go.", scores: { Elsa: 1 } },
        {
          text: "I want adventure in the great wide somewhere.",
          scores: { Belle: 1 },
        },
      ],
    },
    {
      question: "What kind of music do you like?",
      options: [
        { text: "Epic soundtracks", scores: { Mulan: 1 } },
        { text: "Dreamy pop", scores: { Ariel: 1 } },
        { text: "Instrumental and dramatic", scores: { Elsa: 1 } },
        { text: "Soft classical", scores: { Belle: 1 } },
      ],
    },
    {
      question: "If you had a power, it would be...",
      options: [
        { text: "Breathing underwater", scores: { Ariel: 1 } },
        { text: "Ice and snow", scores: { Elsa: 1 } },
        { text: "Martial arts mastery", scores: { Mulan: 1 } },
        { text: "Talking to books (magically)", scores: { Belle: 1 } },
      ],
    },
    {
      question: "Your fashion style is:",
      options: [
        { text: "Classic and bookish", scores: { Belle: 1 } },
        { text: "Minimal and practical", scores: { Mulan: 1 } },
        { text: "Whimsical and beachy", scores: { Ariel: 1 } },
        { text: "Elegant and icy", scores: { Elsa: 1 } },
      ],
    },
    {
      question: "Which word resonates most with you?",
      options: [
        { text: "Independence", scores: { Elsa: 1 } },
        { text: "Wisdom", scores: { Belle: 1 } },
        { text: "Courage", scores: { Mulan: 1 } },
        { text: "Wonder", scores: { Ariel: 1 } },
      ],
    },
    {
      question: "Which of these do you value most?",
      options: [
        { text: "Freedom", scores: { Ariel: 1 } },
        { text: "Self-control", scores: { Elsa: 1 } },
        { text: "Protecting those you love", scores: { Mulan: 1 } },
        { text: "Understanding others", scores: { Belle: 1 } },
      ],
    },
    {
      question: "How do you make decisions?",
      options: [
        { text: "From the heart", scores: { Ariel: 1 } },
        { text: "With thought and care", scores: { Belle: 1 } },
        { text: "Quickly under pressure", scores: { Mulan: 1 } },
        { text: "Quietly and alone", scores: { Elsa: 1 } },
      ],
    },
    {
      question: "Pick a favorite food:",
      options: [
        { text: "Snowflake cupcakes", scores: { Elsa: 1 } },
        { text: "Rice and noodles", scores: { Mulan: 1 } },
        { text: "French pastries", scores: { Belle: 1 } },
        { text: "Seaweed salad", scores: { Ariel: 1 } },
      ],
    },
    {
      question: "Your best friend would describe you as:",
      options: [
        { text: "Thoughtful", scores: { Belle: 1 } },
        { text: "Protective", scores: { Elsa: 1 } },
        { text: "Curious", scores: { Ariel: 1 } },
        { text: "Loyal", scores: { Mulan: 1 } },
      ],
    },
    {
      question: "What gives you peace?",
      options: [
        { text: "Exploration", scores: { Ariel: 1 } },
        { text: "Solitude", scores: { Elsa: 1 } },
        { text: "Knowing you did the right thing", scores: { Mulan: 1 } },
        { text: "A good story", scores: { Belle: 1 } },
      ],
    },
  ],
  // Which Marvel superhero are you?
  9: [
    {
      question: "How do you solve problems?",
      options: [
        { text: "Invent tech to fix it", scores: { "Iron Man": 1 } },
        { text: "Using emotion and instinct", scores: { "Scarlet Witch": 1 } },
        { text: "Strategically and calmly", scores: { "Black Widow": 1 } },
        { text: "With quick thinking and humor", scores: { "Spider-Man": 1 } },
      ],
    },
    {
      question: "What’s your biggest strength?",
      options: [
        { text: "Power", scores: { "Scarlet Witch": 1 } },
        { text: "Intelligence", scores: { "Iron Man": 1 } },
        { text: "Precision", scores: { "Black Widow": 1 } },
        { text: "Empathy", scores: { "Spider-Man": 1 } },
      ],
    },
    {
      question: "Pick your favorite gadget:",
      options: [
        { text: "Web shooters", scores: { "Spider-Man": 1 } },
        { text: "Iron suit", scores: { "Iron Man": 1 } },
        { text: "Magic energy", scores: { "Scarlet Witch": 1 } },
        { text: "Batons", scores: { "Black Widow": 1 } },
      ],
    },
    {
      question: "Which city feels like home?",
      options: [
        { text: "Malibu", scores: { "Iron Man": 1 } },
        { text: "Budapest", scores: { "Black Widow": 1 } },
        { text: "Sokovia", scores: { "Scarlet Witch": 1 } },
        { text: "Queens", scores: { "Spider-Man": 1 } },
      ],
    },
    {
      question: "What would your friends say about you?",
      options: [
        { text: "Brilliant and sarcastic", scores: { "Iron Man": 1 } },
        { text: "Loyal and kind", scores: { "Spider-Man": 1 } },
        { text: "Mysterious and reliable", scores: { "Black Widow": 1 } },
        { text: "Emotional and powerful", scores: { "Scarlet Witch": 1 } },
      ],
    },
    {
      question: "Choose a motto:",
      options: [
        { text: "I get by just fine on my own", scores: { "Black Widow": 1 } },
        {
          text: "With great power comes great responsibility",
          scores: { "Spider-Man": 1 },
        },
        {
          text: "Sometimes you gotta run before you can walk",
          scores: { "Iron Man": 1 },
        },
        {
          text: "I can’t control their fear, only mine",
          scores: { "Scarlet Witch": 1 },
        },
      ],
    },
    {
      question: "Your biggest fear?",
      options: [
        { text: "Losing control", scores: { "Scarlet Witch": 1 } },
        { text: "Being used or manipulated", scores: { "Black Widow": 1 } },
        { text: "Failing despite effort", scores: { "Iron Man": 1 } },
        { text: "Losing loved ones", scores: { "Spider-Man": 1 } },
      ],
    },
    {
      question: "Pick a battle style:",
      options: [
        { text: "High-tech and ranged", scores: { "Iron Man": 1 } },
        { text: "Agile and reactive", scores: { "Spider-Man": 1 } },
        { text: "Close combat and stealth", scores: { "Black Widow": 1 } },
        { text: "Telekinetic and raw", scores: { "Scarlet Witch": 1 } },
      ],
    },
    {
      question: "How do you relax?",
      options: [
        { text: "Skating or video games", scores: { "Spider-Man": 1 } },
        { text: "Tinkering in the lab", scores: { "Iron Man": 1 } },
        { text: "Training routines", scores: { "Black Widow": 1 } },
        { text: "Listening to calming music", scores: { "Scarlet Witch": 1 } },
      ],
    },
    {
      question: "What color fits you best?",
      options: [
        { text: "Red and blue", scores: { "Spider-Man": 1 } },
        { text: "Scarlet", scores: { "Scarlet Witch": 1 } },
        { text: "Black", scores: { "Black Widow": 1 } },
        { text: "Gold and red", scores: { "Iron Man": 1 } },
      ],
    },
    {
      question: "Your greatest weapon is...",
      options: [
        { text: "Your discipline", scores: { "Black Widow": 1 } },
        { text: "Your heart", scores: { "Spider-Man": 1 } },
        { text: "Your emotions", scores: { "Scarlet Witch": 1 } },
        { text: "Your brain", scores: { "Iron Man": 1 } },
      ],
    },
    {
      question: "How do you handle teamwork?",
      options: [
        { text: "Lead with vision", scores: { "Iron Man": 1 } },
        { text: "Protective and intense", scores: { "Scarlet Witch": 1 } },
        { text: "Quiet contributor", scores: { "Black Widow": 1 } },
        { text: "Collaborative and fun", scores: { "Spider-Man": 1 } },
      ],
    },
    {
      question: "Your favorite activity is...",
      options: [
        { text: "Building tech", scores: { "Iron Man": 1 } },
        { text: "Helping neighbors", scores: { "Spider-Man": 1 } },
        { text: "Practicing spells", scores: { "Scarlet Witch": 1 } },
        { text: "Gathering intel", scores: { "Black Widow": 1 } },
      ],
    },
    {
      question: "If someone betrays you, you...",
      options: [
        { text: "Keep calm and strike later", scores: { "Black Widow": 1 } },
        { text: "Are heartbroken but forgive", scores: { "Spider-Man": 1 } },
        {
          text: "Never forget and upgrade your defense",
          scores: { "Iron Man": 1 },
        },
        { text: "Lose control but regret it", scores: { "Scarlet Witch": 1 } },
      ],
    },
    {
      question: "What do you value most?",
      options: [
        { text: "Connection", scores: { "Scarlet Witch": 1 } },
        { text: "Innovation", scores: { "Iron Man": 1 } },
        { text: "Loyalty", scores: { "Black Widow": 1 } },
        { text: "Friendship", scores: { "Spider-Man": 1 } },
      ],
    },
    {
      question: "What’s your vibe?",
      options: [
        { text: "Witty and awkward", scores: { "Spider-Man": 1 } },
        { text: "Quiet and sharp", scores: { "Black Widow": 1 } },
        { text: "Calm but explosive", scores: { "Scarlet Witch": 1 } },
        { text: "Confident and loud", scores: { "Iron Man": 1 } },
      ],
    },
    {
      question: "What motivates you most?",
      options: [
        { text: "Leaving a legacy", scores: { "Iron Man": 1 } },
        { text: "Healing personal loss", scores: { "Scarlet Witch": 1 } },
        {
          text: "Protecting others from your past",
          scores: { "Black Widow": 1 },
        },
        { text: "Doing the right thing", scores: { "Spider-Man": 1 } },
      ],
    },
    {
      question: "If you had a superpower, it’d be...",
      options: [
        { text: "Technology and flight", scores: { "Iron Man": 1 } },
        { text: "Agility and senses", scores: { "Spider-Man": 1 } },
        { text: "Combat mastery", scores: { "Black Widow": 1 } },
        { text: "Mind manipulation", scores: { "Scarlet Witch": 1 } },
      ],
    },
    {
      question: "What kind of leader are you?",
      options: [
        { text: "Emotional and empathetic", scores: { "Scarlet Witch": 1 } },
        { text: "Stealthy and balanced", scores: { "Black Widow": 1 } },
        { text: "Reluctant but inspiring", scores: { "Spider-Man": 1 } },
        { text: "Visionary and strategic", scores: { "Iron Man": 1 } },
      ],
    },
    {
      question: "What makes you powerful?",
      options: [
        { text: "My emotions", scores: { "Scarlet Witch": 1 } },
        { text: "My humanity", scores: { "Spider-Man": 1 } },
        { text: "My training", scores: { "Black Widow": 1 } },
        { text: "My intellect", scores: { "Iron Man": 1 } },
      ],
    },
  ],
  //  What's your ideal vacation?
  10: [
    {
      question: "How do you want to feel during your vacation?",
      options: [
        { text: "Relaxed and peaceful", scores: { "Beach Paradise": 1 } },
        { text: "Excited and challenged", scores: { "Adventure Trek": 1 } },
        { text: "Inspired and curious", scores: { "Cultural City Trip": 1 } },
      ],
    },
    {
      question: "Pick your ideal scenery:",
      options: [
        {
          text: "White sand and turquoise water",
          scores: { "Beach Paradise": 1 },
        },
        { text: "Snow-capped mountains", scores: { "Adventure Trek": 1 } },
        {
          text: "Historical streets and architecture",
          scores: { "Cultural City Trip": 1 },
        },
      ],
    },
    {
      question: "Your travel outfit is:",
      options: [
        { text: "Hiking boots and backpack", scores: { "Adventure Trek": 1 } },
        {
          text: "Comfortable shoes and a camera",
          scores: { "Cultural City Trip": 1 },
        },
        { text: "Swimsuit and sandals", scores: { "Beach Paradise": 1 } },
      ],
    },
    {
      question: "You can't travel without...",
      options: [
        { text: "Sunscreen and a towel", scores: { "Beach Paradise": 1 } },
        { text: "Map and water bottle", scores: { "Adventure Trek": 1 } },
        {
          text: "Museum pass and notebook",
          scores: { "Cultural City Trip": 1 },
        },
      ],
    },
    {
      question: "Pick your travel snack:",
      options: [
        { text: "Energy bar", scores: { "Adventure Trek": 1 } },
        { text: "Fresh fruit", scores: { "Beach Paradise": 1 } },
        { text: "Local pastry", scores: { "Cultural City Trip": 1 } },
      ],
    },
    {
      question: "Favorite vacation activity:",
      options: [
        { text: "Climbing or kayaking", scores: { "Adventure Trek": 1 } },
        { text: "Visiting a museum", scores: { "Cultural City Trip": 1 } },
        { text: "Sunbathing with a drink", scores: { "Beach Paradise": 1 } },
      ],
    },
    {
      question: "What soundtrack fits your trip?",
      options: [
        { text: "Soft tropical music", scores: { "Beach Paradise": 1 } },
        { text: "Energetic rock", scores: { "Adventure Trek": 1 } },
        {
          text: "Classical or indie jazz",
          scores: { "Cultural City Trip": 1 },
        },
      ],
    },
    {
      question: "Where would you sleep?",
      options: [
        {
          text: "Boutique hotel downtown",
          scores: { "Cultural City Trip": 1 },
        },
        { text: "Tent in the wilderness", scores: { "Adventure Trek": 1 } },
        { text: "Beachfront bungalow", scores: { "Beach Paradise": 1 } },
      ],
    },
    {
      question: "What do you pack most of?",
      options: [
        { text: "Books and guides", scores: { "Cultural City Trip": 1 } },
        { text: "Sunglasses and swimsuits", scores: { "Beach Paradise": 1 } },
        { text: "Gear and gadgets", scores: { "Adventure Trek": 1 } },
      ],
    },
    {
      question: "Choose a drink:",
      options: [
        { text: "Espresso", scores: { "Cultural City Trip": 1 } },
        { text: "Coconut water", scores: { "Beach Paradise": 1 } },
        { text: "Energy drink", scores: { "Adventure Trek": 1 } },
      ],
    },
    {
      question: "Vacation length ideal for you:",
      options: [
        {
          text: "10 days to explore culture",
          scores: { "Cultural City Trip": 1 },
        },
        { text: "One week of sun and sea", scores: { "Beach Paradise": 1 } },
        { text: "A few intense days", scores: { "Adventure Trek": 1 } },
      ],
    },
    {
      question: "Travel goal:",
      options: [
        { text: "To learn and discover", scores: { "Cultural City Trip": 1 } },
        { text: "To unwind and rest", scores: { "Beach Paradise": 1 } },
        { text: "To conquer something new", scores: { "Adventure Trek": 1 } },
      ],
    },
    {
      question: "Vacation photos are mostly:",
      options: [
        { text: "Beach sunsets", scores: { "Beach Paradise": 1 } },
        { text: "Art and street scenes", scores: { "Cultural City Trip": 1 } },
        { text: "Cliff views and trails", scores: { "Adventure Trek": 1 } },
      ],
    },
    {
      question: "Souvenir you’d bring:",
      options: [
        { text: "Rock or hiking badge", scores: { "Adventure Trek": 1 } },
        {
          text: "Postcards and paintings",
          scores: { "Cultural City Trip": 1 },
        },
        { text: "Seashells or beach towel", scores: { "Beach Paradise": 1 } },
      ],
    },
    {
      question: "Group or solo travel?",
      options: [
        {
          text: "Small group of curious people",
          scores: { "Cultural City Trip": 1 },
        },
        { text: "Solo or with adventurers", scores: { "Adventure Trek": 1 } },
        { text: "With friends or partner", scores: { "Beach Paradise": 1 } },
      ],
    },
    {
      question: "What do you avoid?",
      options: [
        { text: "Overplanning", scores: { "Cultural City Trip": 1 } },
        { text: "Crowds", scores: { "Adventure Trek": 1 } },
        { text: "Stress and noise", scores: { "Beach Paradise": 1 } },
      ],
    },
    {
      question: "Ideal footwear:",
      options: [
        { text: "Sneakers or loafers", scores: { "Cultural City Trip": 1 } },
        { text: "Flip-flops", scores: { "Beach Paradise": 1 } },
        { text: "Hiking boots", scores: { "Adventure Trek": 1 } },
      ],
    },
    {
      question: "What's in your playlist?",
      options: [
        { text: "Local folk and jazz", scores: { "Cultural City Trip": 1 } },
        { text: "Chill beach vibes", scores: { "Beach Paradise": 1 } },
        { text: "Upbeat rock", scores: { "Adventure Trek": 1 } },
      ],
    },
    {
      question: "Pick a weather:",
      options: [
        { text: "Sunny and warm", scores: { "Beach Paradise": 1 } },
        { text: "Mild and varied", scores: { "Cultural City Trip": 1 } },
        { text: "Cool and breezy", scores: { "Adventure Trek": 1 } },
      ],
    },
    {
      question: "Perfect end to your day:",
      options: [
        {
          text: "Dinner at a quaint cafe",
          scores: { "Cultural City Trip": 1 },
        },
        {
          text: "Watching waves with a drink",
          scores: { "Beach Paradise": 1 },
        },
        { text: "Campfire under stars", scores: { "Adventure Trek": 1 } },
      ],
    },
  ],
  // Which Netflix character would you be?
  11: [
    {
      question: "What's your ideal way to spend a Friday night?",
      options: [
        { text: "Reading chess theory books", scores: { "Beth Harmon": 1 } },
        { text: "Hanging out with close friends", scores: { Eleven: 1 } },
        { text: "Writing dark poetry", scores: { "Wednesday Addams": 1 } },
        { text: "Watching people from afar", scores: { "Joe Goldberg": 1 } },
      ],
    },
    {
      question: "Pick a superpower:",
      options: [
        { text: "Hyper intelligence", scores: { "Beth Harmon": 1 } },
        { text: "Telekinesis", scores: { Eleven: 1 } },
        { text: "Mind control", scores: { "Joe Goldberg": 1 } },
        { text: "Dark aura", scores: { "Wednesday Addams": 1 } },
      ],
    },
    {
      question: "How do you handle conflict?",
      options: [
        { text: "Defend loved ones fiercely", scores: { Eleven: 1 } },
        {
          text: "Cold silence and eye rolls",
          scores: { "Wednesday Addams": 1 },
        },
        { text: "Outsmart everyone", scores: { "Beth Harmon": 1 } },
        { text: "Plan a psychological counter", scores: { "Joe Goldberg": 1 } },
      ],
    },
    {
      question: "Your fashion style is...",
      options: [
        { text: "Retro and sharp", scores: { "Beth Harmon": 1 } },
        { text: "Comfy and casual", scores: { Eleven: 1 } },
        { text: "Neutral and discreet", scores: { "Joe Goldberg": 1 } },
        { text: "All black, all day", scores: { "Wednesday Addams": 1 } },
      ],
    },
    {
      question: "What drives you the most?",
      options: [
        { text: "Love and obsession", scores: { "Joe Goldberg": 1 } },
        { text: "Ambition and focus", scores: { "Beth Harmon": 1 } },
        { text: "Loyalty and protection", scores: { Eleven: 1 } },
        { text: "Truth in the darkness", scores: { "Wednesday Addams": 1 } },
      ],
    },
    {
      question: "Pick a hobby:",
      options: [
        { text: "Analyzing people", scores: { "Joe Goldberg": 1 } },
        { text: "Playing strategic games", scores: { "Beth Harmon": 1 } },
        { text: "Exploring powers", scores: { Eleven: 1 } },
        { text: "Investigating mysteries", scores: { "Wednesday Addams": 1 } },
      ],
    },
    {
      question: "Choose a snack:",
      options: [
        {
          text: "Poison berries (just for show)",
          scores: { "Wednesday Addams": 1 },
        },
        { text: "Black coffee", scores: { "Joe Goldberg": 1 } },
        { text: "Eggo waffles", scores: { Eleven: 1 } },
        { text: "Whiskey neat", scores: { "Beth Harmon": 1 } },
      ],
    },
    {
      question: "What's your biggest flaw?",
      options: [
        { text: "Addictive personality", scores: { "Beth Harmon": 1 } },
        { text: "Obsessive", scores: { "Joe Goldberg": 1 } },
        { text: "Emotionally distant", scores: { "Wednesday Addams": 1 } },
        { text: "Impulsive", scores: { Eleven: 1 } },
      ],
    },
    {
      question: "Favorite environment:",
      options: [
        { text: "Hidden bookstore", scores: { "Joe Goldberg": 1 } },
        {
          text: "Graveyard or foggy forest",
          scores: { "Wednesday Addams": 1 },
        },
        { text: "Basement with fairy lights", scores: { Eleven: 1 } },
        { text: "Chess tournament hall", scores: { "Beth Harmon": 1 } },
      ],
    },
    {
      question: "Pick a quote:",
      options: [
        {
          text: "I find social norms limiting",
          scores: { "Wednesday Addams": 1 },
        },
        { text: "Friends don't lie", scores: { Eleven: 1 } },
        { text: "It's not luck, it's skill", scores: { "Beth Harmon": 1 } },
        { text: "I do everything for love", scores: { "Joe Goldberg": 1 } },
      ],
    },
    {
      question: "You’re most likely to win a...",
      options: [
        { text: "Fight with a monster", scores: { Eleven: 1 } },
        { text: "Debate or manipulation game", scores: { "Joe Goldberg": 1 } },
        { text: "High-stakes tournament", scores: { "Beth Harmon": 1 } },
        { text: "Spooky costume contest", scores: { "Wednesday Addams": 1 } },
      ],
    },
    {
      question: "Choose a companion:",
      options: [
        {
          text: "Someone you’re secretly watching",
          scores: { "Joe Goldberg": 1 },
        },
        { text: "A loyal best friend", scores: { Eleven: 1 } },
        { text: "A pet scorpion", scores: { "Wednesday Addams": 1 } },
        { text: "No one – I work alone", scores: { "Beth Harmon": 1 } },
      ],
    },
    {
      question: "Biggest fear:",
      options: [
        { text: "Losing control", scores: { Eleven: 1 } },
        { text: "Being normal", scores: { "Wednesday Addams": 1 } },
        { text: "Failure", scores: { "Beth Harmon": 1 } },
        { text: "Being abandoned", scores: { "Joe Goldberg": 1 } },
      ],
    },
    {
      question: "Pick a secret weapon:",
      options: [
        { text: "A sharp mind", scores: { "Beth Harmon": 1 } },
        { text: "Manipulation", scores: { "Joe Goldberg": 1 } },
        { text: "Telekinetic rage", scores: { Eleven: 1 } },
        { text: "Your wit", scores: { "Wednesday Addams": 1 } },
      ],
    },
    {
      question: "Social life looks like:",
      options: [
        { text: "Tight-knit group", scores: { Eleven: 1 } },
        { text: "Solitary by choice", scores: { "Wednesday Addams": 1 } },
        {
          text: "People respect me, but I keep distance",
          scores: { "Beth Harmon": 1 },
        },
        { text: "Pretending to fit in", scores: { "Joe Goldberg": 1 } },
      ],
    },
    {
      question: "How do you think?",
      options: [
        { text: "Logically and ahead", scores: { "Beth Harmon": 1 } },
        { text: "In twisted stories", scores: { "Joe Goldberg": 1 } },
        { text: "Emotionally and intuitively", scores: { Eleven: 1 } },
        { text: "Darkly and deeply", scores: { "Wednesday Addams": 1 } },
      ],
    },
    {
      question: "Ideal power dynamic:",
      options: [
        { text: "Challenge the system", scores: { "Wednesday Addams": 1 } },
        { text: "Protect the ones I love", scores: { Eleven: 1 } },
        { text: "Control from the shadows", scores: { "Joe Goldberg": 1 } },
        { text: "Be the best without help", scores: { "Beth Harmon": 1 } },
      ],
    },
    {
      question: "Your mental strength comes from...",
      options: [
        {
          text: "Not caring what others think",
          scores: { "Wednesday Addams": 1 },
        },
        { text: "Survival", scores: { Eleven: 1 } },
        { text: "Conviction", scores: { "Joe Goldberg": 1 } },
        { text: "Discipline", scores: { "Beth Harmon": 1 } },
      ],
    },
    {
      question: "Choose a theme song:",
      options: [
        {
          text: "White Rabbit – Jefferson Airplane",
          scores: { "Beth Harmon": 1 },
        },
        {
          text: "Paint it Black – Rolling Stones",
          scores: { "Wednesday Addams": 1 },
        },
        { text: "Creep – Radiohead", scores: { "Joe Goldberg": 1 } },
        { text: "Running Up That Hill – Kate Bush", scores: { Eleven: 1 } },
      ],
    },
  ],
  // Are you more logical or creative?
  12: [
    {
      question: "Which activity sounds more appealing?",
      options: [
        { text: "Designing a character from scratch", traits: { creative: 2 } },
        { text: "Analyzing a detective mystery", traits: { logical: 2 } },
        {
          text: "Structuring a story with plot twists",
          traits: { balanced: 2 },
        },
      ],
      multiple: false,
    },
    {
      question: "Which would you rather attend?",
      options: [
        { text: "An art exhibition", traits: { creative: 2 } },
        { text: "A chess tournament", traits: { logical: 2 } },
        { text: "A design thinking workshop", traits: { balanced: 2 } },
      ],
      multiple: false,
    },
    {
      question: "Your workspace is usually:",
      options: [
        {
          text: "A bit chaotic but full of inspiration",
          traits: { creative: 2 },
        },
        { text: "Organized and labeled", traits: { logical: 2 } },
        {
          text: "Functional with a touch of aesthetic",
          traits: { balanced: 2 },
        },
      ],
      multiple: false,
    },
    {
      question: "When brainstorming, you usually:",
      options: [
        { text: "Sketch your ideas", traits: { creative: 2 } },
        { text: "Create a mind map or flowchart", traits: { logical: 2 } },
        { text: "Switch between visuals and notes", traits: { balanced: 2 } },
      ],
      multiple: false,
    },
    {
      question: "Pick a quote that resonates with you:",
      options: [
        {
          text: "“Creativity is intelligence having fun.”",
          traits: { creative: 2 },
        },
        {
          text: "“Everything should make logical sense.”",
          traits: { logical: 2 },
        },
        {
          text: "“Balance is not something you find, it’s something you create.”",
          traits: { balanced: 2 },
        },
      ],
      multiple: false,
    },
    {
      question: "What would you do with a blank notebook?",
      options: [
        { text: "Start a visual journal", traits: { creative: 2 } },
        { text: "Write a daily tracker or habit log", traits: { logical: 2 } },
        {
          text: "Use it for structured ideas and sketches",
          traits: { balanced: 2 },
        },
      ],
      multiple: false,
    },
    {
      question: "What type of task drains you the most?",
      options: [
        { text: "Repetitive technical tasks", traits: { creative: 2 } },
        { text: "Unstructured freeform work", traits: { logical: 2 } },
        {
          text: "Tasks with no clear direction or feedback",
          traits: { balanced: 2 },
        },
      ],
      multiple: false,
    },
    {
      question:
        "You're given a new app to test. What’s the first thing you do?",
      options: [
        { text: "Explore the design and experience", traits: { creative: 2 } },
        { text: "Look for bugs and logic errors", traits: { logical: 2 } },
        { text: "Compare structure, logic, and flow", traits: { balanced: 2 } },
      ],
      multiple: false,
    },
    {
      question: "Which role would suit you best?",
      options: [
        { text: "Creative Director", traits: { creative: 2 } },
        { text: "Data Analyst", traits: { logical: 2 } },
        { text: "UX Designer", traits: { balanced: 2 } },
      ],
      multiple: false,
    },
    {
      question: "Which phrase describes you better?",
      options: [
        { text: "My imagination runs wild", traits: { creative: 2 } },
        { text: "I need structure to focus", traits: { logical: 2 } },
        { text: "I adapt between chaos and order", traits: { balanced: 2 } },
      ],
      multiple: false,
    },
    {
      question: "How do you express your ideas best?",
      options: [
        { text: "With sketches, colors, or music", traits: { creative: 2 } },
        {
          text: "With clear arguments and structured steps",
          traits: { logical: 2 },
        },
        { text: "By combining visuals and reasoning", traits: { balanced: 2 } },
      ],
      multiple: false,
    },
    {
      question: "What sparks your motivation?",
      options: [
        {
          text: "A powerful image, melody, or emotion",
          traits: { creative: 2 },
        },
        { text: "A problem that needs solving", traits: { logical: 2 } },
        {
          text: "A challenge that requires both imagination and logic",
          traits: { balanced: 2 },
        },
      ],
      multiple: false,
    },
    {
      question: "Which kind of achievement feels most fulfilling?",
      options: [
        {
          text: "Finishing a personal artistic project",
          traits: { creative: 2 },
        },
        {
          text: "Solving something that seemed impossible",
          traits: { logical: 2 },
        },
        {
          text: "Creating something beautiful *and* functional",
          traits: { balanced: 2 },
        },
      ],
      multiple: false,
    },
    {
      question: "How would you spend a free afternoon?",
      options: [
        { text: "Painting, writing, or crafting", traits: { creative: 2 } },
        {
          text: "Playing strategy games or solving puzzles",
          traits: { logical: 2 },
        },
        {
          text: "Redesigning a space or planning something new",
          traits: { balanced: 2 },
        },
      ],
      multiple: false,
    },
    {
      question: "Which phrase best describes your thinking style?",
      options: [
        { text: "I think in visuals and emotions", traits: { creative: 2 } },
        { text: "I analyze patterns and logic", traits: { logical: 2 } },
        { text: "I connect feelings with structure", traits: { balanced: 2 } },
      ],
      multiple: false,
    },
  ],
  // What's your mental age?
  13: [
    {
      question: "How do you react when plans get canceled last minute?",
      multiple: true,
      options: [
        { text: "Disappointed, I was excited!", traits: { teen: 2 } },
        {
          text: "No problem, I’ll find something fun to do instead",
          traits: { "20s": 2 },
        },
        { text: "Annoyed, I already got ready", traits: { "30s": 2 } },
        { text: "Relieved — now I can relax", traits: { "50+": 2 } },
      ],
    },
    {
      question: "Pick a hobby you'd love to start:",
      multiple: true,
      options: [
        { text: "Skateboarding or TikTok edits", traits: { teen: 2 } },
        { text: "Learning a new language", traits: { "30s": 2 } },
        { text: "Knitting or gardening", traits: { "50+": 2 } },
        { text: "Dance classes or stand-up comedy", traits: { "20s": 2 } },
      ],
    },
    {
      question: "How do you usually manage your money?",
      multiple: false,
      options: [
        { text: "Money? I just ask my parents", traits: { teen: 2 } },
        { text: "Spend now, think later", traits: { "20s": 2 } },
        { text: "Save first, spend later", traits: { "50+": 2 } },
        { text: "Budget and track expenses", traits: { "30s": 2 } },
      ],
    },
    {
      question: "Which of these sounds most like you in a group setting?",
      multiple: true,
      options: [
        { text: "The loud one, always making jokes", traits: { teen: 2 } },
        { text: "Energizer who starts wild ideas", traits: { "20s": 2 } },
        { text: "Quiet observer who gives wise advice", traits: { "50+": 2 } },
        { text: "Mediator who keeps things calm", traits: { "30s": 2 } },
      ],
    },
    {
      question: "What’s your bedtime habit?",
      multiple: false,
      options: [
        { text: "Fall asleep with YouTube playing", traits: { teen: 2 } },
        { text: "Scroll social media endlessly", traits: { "20s": 2 } },
        { text: "Check emails or plan the next day", traits: { "30s": 2 } },
        { text: "Read a chapter before sleep", traits: { "50+": 2 } },
      ],
    },
    {
      question: "How do you deal with conflicts?",
      multiple: true,
      options: [
        { text: "Block and move on", traits: { teen: 2 } },
        { text: "Seek mature dialogue", traits: { "30s": 2 } },
        { text: "Speak your mind quickly", traits: { "20s": 2 } },
        { text: "Avoid and keep peace", traits: { "50+": 2 } },
      ],
    },
    {
      question: "Which app do you use the most?",
      multiple: false,
      options: [
        { text: "Instagram", traits: { "20s": 2 } },
        { text: "News app", traits: { "50+": 2 } },
        { text: "TikTok", traits: { teen: 2 } },
        { text: "LinkedIn", traits: { "30s": 2 } },
      ],
    },
    {
      question: "Your favorite time of day is:",
      multiple: false,
      options: [
        { text: "Midnight", traits: { teen: 2 } },
        { text: "Late morning/afternoon", traits: { "30s": 2 } },
        { text: "Evening", traits: { "20s": 2 } },
        { text: "Early morning", traits: { "50+": 2 } },
      ],
    },
    {
      question: "When shopping, you usually:",
      multiple: true,
      options: [
        { text: "Look for trendy outfits", traits: { "20s": 2 } },
        { text: "Grab fun, random things", traits: { teen: 2 } },
        { text: "Invest in long-lasting items", traits: { "30s": 2 } },
        { text: "Buy only what’s needed", traits: { "50+": 2 } },
      ],
    },
    {
      question: "Pick a TV genre:",
      multiple: false,
      options: [
        { text: "Anime", traits: { teen: 2 } },
        { text: "Documentaries", traits: { "50+": 2 } },
        { text: "Reality shows", traits: { "20s": 2 } },
        { text: "Drama", traits: { "30s": 2 } },
      ],
    },
    {
      question: "Which drink sounds best?",
      multiple: false,
      options: [
        { text: "Bubble tea", traits: { teen: 2 } },
        { text: "Iced matcha latte", traits: { "20s": 2 } },
        { text: "Herbal tea", traits: { "50+": 2 } },
        { text: "Black coffee", traits: { "30s": 2 } },
      ],
    },
    {
      question: "How do you take notes?",
      multiple: true,
      options: [
        { text: "Just remember it", traits: { teen: 2 } },
        { text: "Notebook or planner", traits: { "30s": 2 } },
        { text: "Pen and paper", traits: { "50+": 2 } },
        { text: "Notes app on phone", traits: { "20s": 2 } },
      ],
    },
    {
      question: "What motivates you the most?",
      multiple: true,
      options: [
        { text: "Growth and career", traits: { "30s": 2 } },
        { text: "Freedom and fun", traits: { "20s": 2 } },
        { text: "Stability and comfort", traits: { "50+": 2 } },
        { text: "Attention and praise", traits: { teen: 2 } },
      ],
    },
    {
      question: "You describe your music taste as:",
      multiple: true,
      options: [
        { text: "Trendy & chaotic", traits: { teen: 2 } },
        { text: "Classical and calm", traits: { "50+": 2 } },
        { text: "Upbeat pop", traits: { "20s": 2 } },
        { text: "Alternative or chill", traits: { "30s": 2 } },
      ],
    },
    {
      question: "Your social circle is:",
      multiple: true,
      options: [
        { text: "Online and ever-changing", traits: { teen: 2 } },
        { text: "Professional and strong", traits: { "30s": 2 } },
        { text: "Small and meaningful", traits: { "50+": 2 } },
        { text: "Fun and wide", traits: { "20s": 2 } },
      ],
    },
    {
      question: "Which outfit feels most 'you'?",
      multiple: false,
      options: [
        { text: "Stylish neutral-toned layers", traits: { "30s": 2 } },
        { text: "Something colorful and mismatched", traits: { teen: 2 } },
        { text: "Trendy crop top and jeans", traits: { "20s": 2 } },
        { text: "Cozy cardigan and slacks", traits: { "50+": 2 } },
      ],
    },
    {
      question: "Which word best describes your vibe?",
      multiple: false,
      options: [
        { text: "Playful", traits: { teen: 2 } },
        { text: "Wise", traits: { "50+": 2 } },
        { text: "Energetic", traits: { "20s": 2 } },
        { text: "Balanced", traits: { "30s": 2 } },
      ],
    },
    {
      question: "In a group project, you're the one who:",
      multiple: true,
      options: [
        { text: "Distracts everyone", traits: { teen: 2 } },
        { text: "Organizes everything", traits: { "50+": 2 } },
        { text: "Adds creativity", traits: { "20s": 2 } },
        { text: "Leads with logic", traits: { "30s": 2 } },
      ],
    },
    {
      question: "Which color palette attracts you most?",
      multiple: false,
      options: [
        { text: "Neutrals and sleek tones", traits: { "30s": 2 } },
        { text: "Neon and rainbow", traits: { teen: 2 } },
        { text: "Earth tones", traits: { "50+": 2 } },
        { text: "Bright summer shades", traits: { "20s": 2 } },
      ],
    },
    {
      question: "You believe love is:",
      multiple: false,
      options: [
        { text: "Fun and exciting", traits: { "20s": 2 } },
        { text: "A steady flame", traits: { "50+": 2 } },
        { text: "A movie plot", traits: { teen: 2 } },
        { text: "Mutual respect", traits: { "30s": 2 } },
      ],
    },
    {
      question: "How do you usually feel on your birthday?",
      multiple: true,
      options: [
        { text: "Reflective and calm", traits: { "30s": 2 } },
        { text: "Screaming with excitement", traits: { teen: 2 } },
        { text: "Grateful for memories", traits: { "50+": 2 } },
        { text: "Hyped for the party", traits: { "20s": 2 } },
      ],
    },
  ],
  // How empathetic are you?
  14: [
    {
      question: "You see someone crying on the street. What do you do?",
      multiple: true,
      options: [
        { text: "Offer help and ask what's wrong", traits: { high: 2 } },
        { text: "Feel emotional but stay silent", traits: { medium: 2 } },
        { text: "Look away, it's not your business", traits: { low: 2 } },
        { text: "Get overwhelmed and walk off", traits: { low: 1 } },
      ],
    },
    {
      question: "A friend is venting. You usually:",
      multiple: true,
      options: [
        { text: "Listen and comfort them", traits: { high: 2 } },
        { text: "Give quick advice", traits: { medium: 2 } },
        { text: "Change the topic", traits: { low: 2 } },
        { text: "Feel bored or drained", traits: { low: 1 } },
      ],
    },
    {
      question: "When watching a sad movie, you...",
      multiple: true,
      options: [
        { text: "Cry easily", traits: { high: 2 } },
        { text: "Feel something but hold it in", traits: { medium: 2 } },
        { text: "Rarely feel anything", traits: { low: 2 } },
        { text: "Zone out", traits: { low: 1 } },
      ],
    },
    {
      question: "Someone gets angry at you unfairly. You...",
      multiple: true,
      options: [
        { text: "Try to understand their side", traits: { high: 2 } },
        { text: "Get defensive", traits: { medium: 2 } },
        { text: "Ignore them", traits: { low: 2 } },
        { text: "Hold a grudge", traits: { low: 1 } },
      ],
    },
    {
      question: "Do you absorb others’ emotions?",
      multiple: true,
      options: [
        { text: "Yes, like a sponge", traits: { high: 2 } },
        { text: "Sometimes", traits: { medium: 2 } },
        { text: "Rarely", traits: { low: 2 } },
        { text: "Never, I stay detached", traits: { low: 1 } },
      ],
    },
    {
      question: "You hear a sad story from a stranger. You:",
      multiple: true,
      options: [
        { text: "Tear up and offer support", traits: { high: 2 } },
        { text: "Nod and feel bad", traits: { medium: 2 } },
        { text: "Think it's exaggerated", traits: { low: 2 } },
        { text: "Don’t react much", traits: { low: 1 } },
      ],
    },
    {
      question:
        "Your friend is excited about something you don't care about. You:",
      multiple: true,
      options: [
        { text: "Act supportive anyway", traits: { high: 2 } },
        { text: "Smile and move on", traits: { medium: 2 } },
        { text: "Say 'why does that matter?'", traits: { low: 2 } },
        { text: "Complain about your own issues", traits: { low: 1 } },
      ],
    },
    {
      question: "Do you feel guilt easily?",
      multiple: true,
      options: [
        { text: "Yes, even for small things", traits: { high: 2 } },
        { text: "Sometimes", traits: { medium: 2 } },
        { text: "Only when I really mess up", traits: { low: 2 } },
        { text: "Almost never", traits: { low: 1 } },
      ],
    },
    {
      question: "When someone is sad around you, you...",
      multiple: true,
      options: [
        { text: "Feel it deeply", traits: { high: 2 } },
        { text: "Notice but don’t react much", traits: { medium: 2 } },
        { text: "Avoid them", traits: { low: 2 } },
        { text: "Get annoyed", traits: { low: 1 } },
      ],
    },
    {
      question: "In conflicts, you often...",
      multiple: true,
      options: [
        { text: "Seek to resolve and understand", traits: { high: 2 } },
        { text: "State your point calmly", traits: { medium: 2 } },
        { text: "Insist you're right", traits: { low: 2 } },
        { text: "Leave the conversation", traits: { low: 1 } },
      ],
    },
    {
      question: "How do you react to someone else's success?",
      multiple: true,
      options: [
        { text: "Genuinely happy", traits: { high: 2 } },
        { text: "Happy but also compare yourself", traits: { medium: 2 } },
        { text: "Jealous", traits: { low: 2 } },
        { text: "Dismissive", traits: { low: 1 } },
      ],
    },
    {
      question: "Do animals make you emotional?",
      multiple: true,
      options: [
        { text: "Yes, deeply", traits: { high: 2 } },
        { text: "Sometimes", traits: { medium: 2 } },
        { text: "Not really", traits: { low: 2 } },
        { text: "They're just animals", traits: { low: 1 } },
      ],
    },
    {
      question: "You accidentally hurt someone’s feelings. You...",
      multiple: true,
      options: [
        { text: "Apologize and feel bad", traits: { high: 2 } },
        { text: "Say sorry but don’t dwell", traits: { medium: 2 } },
        { text: "Blame them for overreacting", traits: { low: 2 } },
        { text: "Ignore it", traits: { low: 1 } },
      ],
    },
    {
      question: "Are you often described as ‘too sensitive’?",
      multiple: true,
      options: [
        { text: "Yes, and I accept it", traits: { high: 2 } },
        { text: "Sometimes", traits: { medium: 2 } },
        { text: "Rarely", traits: { low: 2 } },
        { text: "Never, I’m rational", traits: { low: 1 } },
      ],
    },
    {
      question: "Can you tell when someone’s faking a smile?",
      multiple: true,
      options: [
        { text: "Yes, always", traits: { high: 2 } },
        { text: "Sometimes", traits: { medium: 2 } },
        { text: "Depends", traits: { low: 2 } },
        { text: "No, I don’t notice", traits: { low: 1 } },
      ],
    },
    {
      question: "You see a child in distress. You...",
      multiple: true,
      options: [
        { text: "Rush to help", traits: { high: 2 } },
        { text: "Find someone who can help", traits: { medium: 2 } },
        { text: "Watch but don’t act", traits: { low: 2 } },
        { text: "Avoid the scene", traits: { low: 1 } },
      ],
    },
    {
      question: "Do you often check on your friends?",
      multiple: true,
      options: [
        { text: "Yes, regularly", traits: { high: 2 } },
        { text: "Sometimes", traits: { medium: 2 } },
        { text: "Rarely", traits: { low: 2 } },
        { text: "Only when I need something", traits: { low: 1 } },
      ],
    },
    {
      question: "Your friend cancels plans because they’re sad. You...",
      multiple: true,
      options: [
        { text: "Understand and offer support", traits: { high: 2 } },
        {
          text: "Say it's okay, but feel a little hurt",
          traits: { medium: 2 },
        },
        { text: "Get annoyed", traits: { low: 2 } },
        { text: "Complain", traits: { low: 1 } },
      ],
    },
    {
      question: "How do you react to world problems?",
      multiple: true,
      options: [
        { text: "They really affect me emotionally", traits: { high: 2 } },
        { text: "I care, but not deeply", traits: { medium: 2 } },
        { text: "They don’t affect me", traits: { low: 2 } },
        { text: "I avoid all news", traits: { low: 1 } },
      ],
    },
    {
      question: "Do you understand people’s pain without them speaking?",
      multiple: true,
      options: [
        { text: "Yes, often", traits: { high: 2 } },
        { text: "Sometimes", traits: { medium: 2 } },
        { text: "Rarely", traits: { low: 2 } },
        { text: "No, that’s not my skill", traits: { low: 1 } },
      ],
    },
  ],
  // Are you more introverted or extroverted?
  15: [
    {
      question: "How do you feel at parties?",
      multiple: true,
      options: [
        { text: "Energized and excited", traits: { extrovert: 2 } },
        { text: "Comfortable, depends on the people", traits: { ambivert: 2 } },
        { text: "Drained and awkward", traits: { introvert: 2 } },
        { text: "Prefer to stay at home", traits: { introvert: 1 } },
      ],
    },
    {
      question: "When making decisions, you rely on...",
      multiple: true,
      options: [
        { text: "Talking it out loud with others", traits: { extrovert: 2 } },
        {
          text: "A mix of internal thought and some advice",
          traits: { ambivert: 2 },
        },
        { text: "Deep inner reflection", traits: { introvert: 2 } },
        { text: "I avoid decisions altogether", traits: { introvert: 1 } },
      ],
    },
    {
      question: "How do you recharge?",
      multiple: true,
      options: [
        { text: "Being around people", traits: { extrovert: 2 } },
        { text: "Depends on mood", traits: { ambivert: 2 } },
        { text: "Spending time alone", traits: { introvert: 2 } },
        { text: "Sleeping it off", traits: { introvert: 1 } },
      ],
    },
    {
      question: "Do you enjoy small talk?",
      multiple: true,
      options: [
        { text: "Yes, I thrive in it", traits: { extrovert: 2 } },
        { text: "If I’m in the mood", traits: { ambivert: 2 } },
        { text: "I dread it", traits: { introvert: 2 } },
        { text: "I avoid it completely", traits: { introvert: 1 } },
      ],
    },
    {
      question: "How big is your social circle?",
      multiple: true,
      options: [
        { text: "Large and active", traits: { extrovert: 2 } },
        { text: "A balanced group", traits: { ambivert: 2 } },
        { text: "A few close friends", traits: { introvert: 2 } },
        { text: "Just me and maybe my cat", traits: { introvert: 1 } },
      ],
    },
    {
      question: "You’re invited to a weekend trip with strangers. You feel...",
      multiple: true,
      options: [
        { text: "Excited to meet new people", traits: { extrovert: 2 } },
        { text: "Open, but cautious", traits: { ambivert: 2 } },
        { text: "Nervous and unsure", traits: { introvert: 2 } },
        { text: "Already planning an excuse", traits: { introvert: 1 } },
      ],
    },
    {
      question: "How do you handle silence in conversations?",
      multiple: true,
      options: [
        { text: "I fill it immediately", traits: { extrovert: 2 } },
        { text: "Depends on the context", traits: { ambivert: 2 } },
        { text: "I’m comfortable with it", traits: { introvert: 2 } },
        { text: "I disappear before it happens", traits: { introvert: 1 } },
      ],
    },
    {
      question: "In group work, you tend to...",
      multiple: true,
      options: [
        { text: "Take charge and speak up", traits: { extrovert: 2 } },
        { text: "Participate when needed", traits: { ambivert: 2 } },
        { text: "Do the work quietly", traits: { introvert: 2 } },
        { text: "Avoid speaking", traits: { introvert: 1 } },
      ],
    },
    {
      question: "When you meet someone new, you...",
      multiple: true,
      options: [
        { text: "Start the conversation", traits: { extrovert: 2 } },
        { text: "Talk if they talk first", traits: { ambivert: 2 } },
        { text: "Say hi and go quiet", traits: { introvert: 2 } },
        { text: "Hide behind someone", traits: { introvert: 1 } },
      ],
    },
    {
      question: "Your ideal weekend?",
      multiple: true,
      options: [
        { text: "Out with friends", traits: { extrovert: 2 } },
        { text: "One night out, one night in", traits: { ambivert: 2 } },
        { text: "Home with a book or movie", traits: { introvert: 2 } },
        { text: "Avoiding any plans", traits: { introvert: 1 } },
      ],
    },
    {
      question: "How do you feel after social events?",
      multiple: true,
      options: [
        { text: "Energized and happy", traits: { extrovert: 2 } },
        { text: "Depends on the people", traits: { ambivert: 2 } },
        { text: "Drained", traits: { introvert: 2 } },
        { text: "Exhausted and anxious", traits: { introvert: 1 } },
      ],
    },
    {
      question: "In class or meetings, you...",
      multiple: true,
      options: [
        { text: "Speak often", traits: { extrovert: 2 } },
        { text: "Speak if I have something to say", traits: { ambivert: 2 } },
        { text: "Prefer not to talk", traits: { introvert: 2 } },
        { text: "Pray I don’t get called", traits: { introvert: 1 } },
      ],
    },
    {
      question: "How do you handle being alone?",
      multiple: true,
      options: [
        { text: "I get bored quickly", traits: { extrovert: 2 } },
        { text: "Some alone time is nice", traits: { ambivert: 2 } },
        { text: "I love solitude", traits: { introvert: 2 } },
        { text: "Alone is my default", traits: { introvert: 1 } },
      ],
    },
    {
      question: "How fast do you trust people?",
      multiple: true,
      options: [
        { text: "Very easily", traits: { extrovert: 2 } },
        { text: "With time", traits: { ambivert: 2 } },
        { text: "Takes a while", traits: { introvert: 2 } },
        { text: "I don’t really trust anyone", traits: { introvert: 1 } },
      ],
    },
    {
      question: "Do you like being the center of attention?",
      multiple: true,
      options: [
        { text: "Yes, I enjoy it", traits: { extrovert: 2 } },
        { text: "Sometimes", traits: { ambivert: 2 } },
        { text: "Not really", traits: { introvert: 2 } },
        { text: "Absolutely not", traits: { introvert: 1 } },
      ],
    },
    {
      question: "How do you start your day?",
      multiple: true,
      options: [
        { text: "Chatting with people", traits: { extrovert: 2 } },
        { text: "Quick social check-ins", traits: { ambivert: 2 } },
        { text: "Quiet time for myself", traits: { introvert: 2 } },
        { text: "Avoid everyone", traits: { introvert: 1 } },
      ],
    },
    {
      question: "What kind of conversations do you enjoy?",
      multiple: true,
      options: [
        { text: "Any! I love to talk", traits: { extrovert: 2 } },
        { text: "Deep ones mostly", traits: { ambivert: 2 } },
        { text: "Few, but meaningful", traits: { introvert: 2 } },
        { text: "Almost none", traits: { introvert: 1 } },
      ],
    },
    {
      question: "How do you feel about public speaking?",
      multiple: true,
      options: [
        { text: "Love it!", traits: { extrovert: 2 } },
        { text: "I manage okay", traits: { ambivert: 2 } },
        { text: "Not my thing", traits: { introvert: 2 } },
        { text: "I avoid it at all costs", traits: { introvert: 1 } },
      ],
    },
    {
      question: "Your friends describe you as...",
      multiple: true,
      options: [
        { text: "Loud and social", traits: { extrovert: 2 } },
        { text: "Balanced and thoughtful", traits: { ambivert: 2 } },
        { text: "Quiet and deep", traits: { introvert: 2 } },
        { text: "Hard to read", traits: { introvert: 1 } },
      ],
    },
    {
      question: "At a group dinner, you...",
      multiple: true,
      options: [
        { text: "Tell stories and jokes", traits: { extrovert: 2 } },
        { text: "Chat with a few", traits: { ambivert: 2 } },
        { text: "Listen mostly", traits: { introvert: 2 } },
        { text: "Hope it ends soon", traits: { introvert: 1 } },
      ],
    },
  ],
  // What kind of leader are you?
  16: [
    {
      question: "How do you make decisions?",
      multiple: true,
      options: [
        { text: "Based on a clear vision", traits: { visionary: 2 } },
        { text: "After consulting the team", traits: { democratic: 2 } },
        {
          text: "By thinking of others’ well-being",
          traits: { supportive: 2 },
        },
        { text: "I decide quickly and firmly", traits: { directive: 2 } },
      ],
    },
    {
      question: "Your team is unmotivated. What do you do?",
      multiple: true,
      options: [
        {
          text: "Inspire them with the bigger picture",
          traits: { visionary: 2 },
        },
        { text: "Ask for their input and adjust", traits: { democratic: 2 } },
        { text: "Have one-on-one check-ins", traits: { supportive: 2 } },
        {
          text: "Give clear orders and tighten discipline",
          traits: { directive: 2 },
        },
      ],
    },
    {
      question: "How do you handle conflict?",
      multiple: true,
      options: [
        { text: "Bring the group together to talk", traits: { democratic: 2 } },
        { text: "Empathize and listen", traits: { supportive: 2 } },
        { text: "Refocus everyone on the goal", traits: { visionary: 2 } },
        { text: "Step in and assert authority", traits: { directive: 2 } },
      ],
    },
    {
      question: "What’s your leadership strength?",
      multiple: true,
      options: [
        { text: "Inspiring and future-focused", traits: { visionary: 2 } },
        { text: "Inclusive and collaborative", traits: { democratic: 2 } },
        {
          text: "Caring and emotionally intelligent",
          traits: { supportive: 2 },
        },
        { text: "Decisive and commanding", traits: { directive: 2 } },
      ],
    },
    {
      question: "How do you delegate tasks?",
      multiple: true,
      options: [
        { text: "Give people autonomy to innovate", traits: { visionary: 2 } },
        {
          text: "Distribute based on group consensus",
          traits: { democratic: 2 },
        },
        { text: "Assign based on individual needs", traits: { supportive: 2 } },
        {
          text: "Directly assign with clear expectations",
          traits: { directive: 2 },
        },
      ],
    },
    {
      question: "How do you open meetings?",
      multiple: true,
      options: [
        { text: "Share a motivating message", traits: { visionary: 2 } },
        { text: "Start by asking for thoughts", traits: { democratic: 2 } },
        {
          text: "Check in on how everyone is doing",
          traits: { supportive: 2 },
        },
        {
          text: "Outline the agenda and expectations",
          traits: { directive: 2 },
        },
      ],
    },
    {
      question: "When deadlines are tight, you...",
      multiple: true,
      options: [
        { text: "Rally everyone with a vision", traits: { visionary: 2 } },
        { text: "Discuss priorities with the team", traits: { democratic: 2 } },
        {
          text: "Support everyone’s emotional state",
          traits: { supportive: 2 },
        },
        {
          text: "Take control and push things forward",
          traits: { directive: 2 },
        },
      ],
    },
    {
      question: "How do you give feedback?",
      multiple: true,
      options: [
        {
          text: "Frame it in terms of future potential",
          traits: { visionary: 2 },
        },
        { text: "Ask them to reflect first", traits: { democratic: 2 } },
        { text: "Use empathy and encouragement", traits: { supportive: 2 } },
        { text: "Be direct and to the point", traits: { directive: 2 } },
      ],
    },
    {
      question: "Your leadership style is shaped most by...",
      multiple: true,
      options: [
        { text: "My goals and vision", traits: { visionary: 2 } },
        { text: "The voices of my team", traits: { democratic: 2 } },
        { text: "The emotions in the room", traits: { supportive: 2 } },
        { text: "My need for efficiency", traits: { directive: 2 } },
      ],
    },
    {
      question: "In team brainstorming, you usually...",
      multiple: true,
      options: [
        { text: "Offer a bold direction to explore", traits: { visionary: 2 } },
        {
          text: "Let everyone speak and build on each other",
          traits: { democratic: 2 },
        },
        { text: "Check who feels left out", traits: { supportive: 2 } },
        { text: "Keep the group focused", traits: { directive: 2 } },
      ],
    },
    {
      question: "When under pressure, you...",
      multiple: true,
      options: [
        { text: "Focus on long-term strategy", traits: { visionary: 2 } },
        { text: "Pause to check the team’s view", traits: { democratic: 2 } },
        { text: "Help people stay calm", traits: { supportive: 2 } },
        { text: "Act quickly and firmly", traits: { directive: 2 } },
      ],
    },
    {
      question: "How do you want to be remembered as a leader?",
      multiple: true,
      options: [
        { text: "A visionary who changed things", traits: { visionary: 2 } },
        { text: "A leader who valued everyone", traits: { democratic: 2 } },
        { text: "A mentor who cared deeply", traits: { supportive: 2 } },
        {
          text: "A strong and reliable decision-maker",
          traits: { directive: 2 },
        },
      ],
    },
    {
      question: "How do you handle team mistakes?",
      multiple: true,
      options: [
        { text: "Relate them to a bigger goal", traits: { visionary: 2 } },
        { text: "Ask the group what happened", traits: { democratic: 2 } },
        { text: "Reassure and encourage growth", traits: { supportive: 2 } },
        {
          text: "Point out errors and give solutions",
          traits: { directive: 2 },
        },
      ],
    },
    {
      question: "Which best describes your leadership role?",
      multiple: true,
      options: [
        { text: "A visionary guide", traits: { visionary: 2 } },
        { text: "A democratic facilitator", traits: { democratic: 2 } },
        { text: "A supportive coach", traits: { supportive: 2 } },
        { text: "A firm captain", traits: { directive: 2 } },
      ],
    },
    {
      question: "When someone is struggling, you...",
      multiple: true,
      options: [
        {
          text: "Encourage them with future possibilities",
          traits: { visionary: 2 },
        },
        { text: "Involve the team to support", traits: { democratic: 2 } },
        { text: "Offer emotional support", traits: { supportive: 2 } },
        { text: "Push them to act anyway", traits: { directive: 2 } },
      ],
    },
    {
      question: "In a crisis, your instinct is to...",
      multiple: true,
      options: [
        {
          text: "Reframe it in terms of opportunity",
          traits: { visionary: 2 },
        },
        {
          text: "Ask for group input before acting",
          traits: { democratic: 2 },
        },
        { text: "Check on everyone emotionally", traits: { supportive: 2 } },
        { text: "Take charge immediately", traits: { directive: 2 } },
      ],
    },
    {
      question: "What motivates your leadership?",
      multiple: true,
      options: [
        { text: "The dream of impact", traits: { visionary: 2 } },
        { text: "Helping the group thrive", traits: { democratic: 2 } },
        { text: "Helping people feel seen", traits: { supportive: 2 } },
        { text: "Achieving clear results", traits: { directive: 2 } },
      ],
    },
    {
      question: "What frustrates you in others?",
      multiple: true,
      options: [
        { text: "Lack of vision", traits: { visionary: 2 } },
        { text: "Not listening to each other", traits: { democratic: 2 } },
        { text: "Coldness or insensitivity", traits: { supportive: 2 } },
        { text: "Lack of discipline", traits: { directive: 2 } },
      ],
    },
    {
      question: "Which compliment means the most?",
      multiple: true,
      options: [
        { text: "You inspired me", traits: { visionary: 2 } },
        { text: "You made us feel heard", traits: { democratic: 2 } },
        { text: "You were always there for me", traits: { supportive: 2 } },
        { text: "You always got things done", traits: { directive: 2 } },
      ],
    },
    {
      question: "One word to describe your leadership?",
      multiple: true,
      options: [
        { text: "Visionary", traits: { visionary: 2 } },
        { text: "Collaborative", traits: { democratic: 2 } },
        { text: "Compassionate", traits: { supportive: 2 } },
        { text: "Assertive", traits: { directive: 2 } },
      ],
    },
  ],
  // What's your communication style?
  17: [
    {
      question: "How do you express disagreement?",
      multiple: true,
      options: [
        { text: "Confidently and respectfully", traits: { assertive: 2 } },
        { text: "I usually stay quiet", traits: { passive: 2 } },
        { text: "Directly and bluntly", traits: { aggressive: 2 } },
        { text: "I make sarcastic remarks", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "When you're upset, you...",
      multiple: true,
      options: [
        { text: "Explain calmly how you feel", traits: { assertive: 2 } },
        { text: "Keep it to yourself", traits: { passive: 2 } },
        { text: "Raise your voice", traits: { aggressive: 2 } },
        { text: "Give the silent treatment", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "How do you ask for help?",
      multiple: true,
      options: [
        { text: "Openly and without shame", traits: { assertive: 2 } },
        { text: "Only if I really have to", traits: { passive: 2 } },
        { text: "With a demanding tone", traits: { aggressive: 2 } },
        { text: "Hint around it", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "In a group discussion, you...",
      multiple: true,
      options: [
        { text: "Share your opinion clearly", traits: { assertive: 2 } },
        { text: "Avoid speaking up", traits: { passive: 2 } },
        { text: "Dominate the conversation", traits: { aggressive: 2 } },
        { text: "Make underhanded comments", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "If someone criticizes you, you...",
      multiple: true,
      options: [
        { text: "Listen and respond respectfully", traits: { assertive: 2 } },
        { text: "Take it silently", traits: { passive: 2 } },
        { text: "Get defensive", traits: { aggressive: 2 } },
        {
          text: "Act like it doesn’t bother you, but stay upset",
          traits: { passiveAggressive: 2 },
        },
      ],
    },
    {
      question: "When giving feedback, you...",
      multiple: true,
      options: [
        { text: "Balance honesty with kindness", traits: { assertive: 2 } },
        { text: "Avoid giving it", traits: { passive: 2 } },
        { text: "Point out flaws directly", traits: { aggressive: 2 } },
        {
          text: "Say something nice, but leave a sting",
          traits: { passiveAggressive: 2 },
        },
      ],
    },
    {
      question: "If a friend forgets your birthday, you...",
      multiple: true,
      options: [
        { text: "Tell them how you feel calmly", traits: { assertive: 2 } },
        {
          text: "Say it’s okay and hide your feelings",
          traits: { passive: 2 },
        },
        { text: "Confront them angrily", traits: { aggressive: 2 } },
        {
          text: "Pretend it’s fine but act distant",
          traits: { passiveAggressive: 2 },
        },
      ],
    },
    {
      question: "How do you respond to being interrupted?",
      multiple: true,
      options: [
        { text: "Ask to finish your thought", traits: { assertive: 2 } },
        { text: "Let them talk over you", traits: { passive: 2 } },
        { text: "Cut them off right back", traits: { aggressive: 2 } },
        { text: "Make a side comment", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "When someone hurts you, you...",
      multiple: true,
      options: [
        { text: "Express it directly and calmly", traits: { assertive: 2 } },
        { text: "Keep your distance silently", traits: { passive: 2 } },
        { text: "Let them know they messed up", traits: { aggressive: 2 } },
        {
          text: "Act cold but say 'I’m fine'",
          traits: { passiveAggressive: 2 },
        },
      ],
    },
    {
      question: "How do you handle compliments?",
      multiple: true,
      options: [
        { text: "Accept them graciously", traits: { assertive: 2 } },
        { text: "Deflect them", traits: { passive: 2 } },
        { text: "Say 'Obviously'", traits: { aggressive: 2 } },
        { text: "Roll your eyes but smile", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "What’s your texting style?",
      multiple: true,
      options: [
        { text: "Clear and direct", traits: { assertive: 2 } },
        { text: "Apologetic or hesitant", traits: { passive: 2 } },
        { text: "Short and blunt", traits: { aggressive: 2 } },
        { text: "Subtle and vague", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "If you don’t agree with a group decision...",
      multiple: true,
      options: [
        {
          text: "Voice your concerns constructively",
          traits: { assertive: 2 },
        },
        { text: "Go along with it", traits: { passive: 2 } },
        {
          text: "Try to convince them aggressively",
          traits: { aggressive: 2 },
        },
        {
          text: "Sabotage it later silently",
          traits: { passiveAggressive: 2 },
        },
      ],
    },
    {
      question: "At work, you're known for...",
      multiple: true,
      options: [
        { text: "Communicating openly and clearly", traits: { assertive: 2 } },
        { text: "Being quiet but kind", traits: { passive: 2 } },
        { text: "Being direct and tough", traits: { aggressive: 2 } },
        { text: "Making snarky jokes", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "When someone doesn't listen to you, you...",
      multiple: true,
      options: [
        { text: "Repeat yourself calmly", traits: { assertive: 2 } },
        { text: "Give up", traits: { passive: 2 } },
        { text: "Get louder", traits: { aggressive: 2 } },
        {
          text: "Say 'Whatever' and walk away",
          traits: { passiveAggressive: 2 },
        },
      ],
    },
    {
      question: "How do you handle being left out?",
      multiple: true,
      options: [
        { text: "Ask why directly", traits: { assertive: 2 } },
        { text: "Assume you're not wanted", traits: { passive: 2 } },
        { text: "Confront someone angrily", traits: { aggressive: 2 } },
        {
          text: "Make sarcastic remarks later",
          traits: { passiveAggressive: 2 },
        },
      ],
    },
    {
      question: "What’s your tone usually like?",
      multiple: true,
      options: [
        { text: "Confident and respectful", traits: { assertive: 2 } },
        { text: "Soft and unsure", traits: { passive: 2 } },
        { text: "Harsh and loud", traits: { aggressive: 2 } },
        { text: "Slightly mocking", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "In arguments, you...",
      multiple: true,
      options: [
        { text: "Stick to your point calmly", traits: { assertive: 2 } },
        { text: "Let the other person win", traits: { passive: 2 } },
        { text: "Argue to dominate", traits: { aggressive: 2 } },
        { text: "Throw in passive digs", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "How do you usually say no?",
      multiple: true,
      options: [
        { text: "Firmly but kindly", traits: { assertive: 2 } },
        { text: "I don’t", traits: { passive: 2 } },
        { text: "I snap 'No!'", traits: { aggressive: 2 } },
        { text: "Say yes, then avoid it", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "Which line sounds most like you?",
      multiple: true,
      options: [
        { text: "Let’s find a solution together", traits: { assertive: 2 } },
        { text: "It’s okay, I guess", traits: { passive: 2 } },
        { text: "You’re wrong", traits: { aggressive: 2 } },
        { text: "Fine. Whatever", traits: { passiveAggressive: 2 } },
      ],
    },
    {
      question: "People describe your communication as...",
      multiple: true,
      options: [
        { text: "Respectful and clear", traits: { assertive: 2 } },
        { text: "Quiet and shy", traits: { passive: 2 } },
        { text: "Bold and harsh", traits: { aggressive: 2 } },
        { text: "Sarcastic and vague", traits: { passiveAggressive: 2 } },
      ],
    },
  ],
  // How do you react under stress?
  18: [
    {
      question:
        "You're about to speak in public. What’s your immediate thought?",
      multiple: false,
      options: [
        { text: "I’ve got this, I’m prepared.", traits: { calm: 1 } },
        { text: "What if I forget everything?", traits: { anxious: 1 } },
        { text: "Let’s just wing it!", traits: { impulsive: 1 } },
        { text: "I start sweating and pacing.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "You receive unexpected criticism. You...",
      multiple: false,
      options: [
        { text: "Listen and reflect calmly.", traits: { calm: 1 } },
        { text: "Feel like crying or panicking.", traits: { anxious: 1 } },
        { text: "Snap back instantly.", traits: { impulsive: 1 } },
        { text: "Shut down emotionally.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "You're stuck in traffic and running late. You...",
      multiple: false,
      options: [
        { text: "Breathe and turn up some music.", traits: { calm: 1 } },
        {
          text: "Keep checking the clock and stressing.",
          traits: { anxious: 1 },
        },
        { text: "Honk or take risky shortcuts.", traits: { impulsive: 1 } },
        { text: "Call someone to complain.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "Deadline approaching and you're behind. What now?",
      multiple: false,
      options: [
        {
          text: "Prioritize and tackle things one by one.",
          traits: { calm: 1 },
        },
        { text: "Procrastinate and spiral in stress.", traits: { anxious: 1 } },
        { text: "Rush through without thinking.", traits: { impulsive: 1 } },
        { text: "Overthink instead of acting.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "Someone insults you. First reaction?",
      multiple: false,
      options: [
        { text: "Let it go—it’s not worth it.", traits: { calm: 1 } },
        { text: "Start doubting yourself.", traits: { anxious: 1 } },
        { text: "Clap back with a savage line.", traits: { impulsive: 1 } },
        { text: "Freeze and say nothing.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "Too many things happening at once. You...",
      multiple: false,
      options: [
        { text: "Take a break to ground yourself.", traits: { calm: 1 } },
        { text: "Feel overwhelmed and anxious.", traits: { anxious: 1 } },
        {
          text: "Jump from task to task with no plan.",
          traits: { impulsive: 1 },
        },
        { text: "Mentally shut down.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "Phone rings during a serious conversation. You...",
      multiple: false,
      options: [
        { text: "Ignore it and stay focused.", traits: { calm: 1 } },
        { text: "Feel torn and distracted.", traits: { anxious: 1 } },
        {
          text: "Answer immediately without thinking.",
          traits: { impulsive: 1 },
        },
        { text: "Get irritated fast.", traits: { impulsive: 1 } },
      ],
    },
    {
      question: "You made a mistake. What do you do?",
      multiple: false,
      options: [
        { text: "Admit it and fix it calmly.", traits: { calm: 1 } },
        { text: "Overthink it for hours.", traits: { anxious: 1 } },
        { text: "Deny or downplay it instantly.", traits: { impulsive: 1 } },
        {
          text: "Apologize repeatedly even if it wasn’t big.",
          traits: { anxious: 1 },
        },
      ],
    },
    {
      question: "Your plan fails last-minute. You...",
      multiple: false,
      options: [
        { text: "Quickly adapt and regroup.", traits: { calm: 1 } },
        { text: "Get anxious and blame yourself.", traits: { anxious: 1 } },
        { text: "Change the plan randomly.", traits: { impulsive: 1 } },
        { text: "Panic and freeze.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "Someone yells at you in public. You...",
      multiple: false,
      options: [
        { text: "Stay composed and remove yourself.", traits: { calm: 1 } },
        { text: "Feel paralyzed and humiliated.", traits: { anxious: 1 } },
        { text: "Yell right back, louder.", traits: { impulsive: 1 } },
        { text: "Walk away but feel shaky.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "You're blamed for something you didn’t do. You...",
      multiple: false,
      options: [
        { text: "Explain your side calmly.", traits: { calm: 1 } },
        { text: "Panic and feel misunderstood.", traits: { anxious: 1 } },
        { text: "Get defensive right away.", traits: { impulsive: 1 } },
        {
          text: "Over-apologize just to end the conflict.",
          traits: { anxious: 1 },
        },
      ],
    },
    {
      question: "A close friend stops replying. What’s your reaction?",
      multiple: false,
      options: [
        { text: "Give them space and stay calm.", traits: { calm: 1 } },
        { text: "Assume you did something wrong.", traits: { anxious: 1 } },
        { text: "Send a flood of messages.", traits: { impulsive: 1 } },
        { text: "Feel ignored and overthink it.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "You lose access to your phone for a day. You...",
      multiple: false,
      options: [
        { text: "Enjoy the break from screens.", traits: { calm: 1 } },
        { text: "Feel panicky about missing out.", traits: { anxious: 1 } },
        {
          text: "Rush to borrow someone else's phone.",
          traits: { impulsive: 1 },
        },
        {
          text: "Keep thinking about what you’re missing.",
          traits: { anxious: 1 },
        },
      ],
    },
    {
      question: "You’re misunderstood in a group chat. You...",
      multiple: false,
      options: [
        { text: "Clarify politely.", traits: { calm: 1 } },
        { text: "Feel embarrassed and exit the chat.", traits: { anxious: 1 } },
        { text: "Write in ALL CAPS to be heard.", traits: { impulsive: 1 } },
        { text: "Leave it and worry all day.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "Someone cancels on you last-minute. You...",
      multiple: false,
      options: [
        { text: "Understand and reschedule.", traits: { calm: 1 } },
        { text: "Feel unwanted and sad.", traits: { anxious: 1 } },
        { text: "Block them impulsively.", traits: { impulsive: 1 } },
        { text: "Pretend it’s fine but obsess later.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "You forgot something important. You...",
      multiple: false,
      options: [
        { text: "Fix what you can and stay calm.", traits: { calm: 1 } },
        { text: "Blame yourself harshly.", traits: { anxious: 1 } },
        { text: "Make excuses immediately.", traits: { impulsive: 1 } },
        { text: "Feel ashamed and avoid people.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "Unexpected change in plans. You...",
      multiple: false,
      options: [
        { text: "Adjust and go with the flow.", traits: { calm: 1 } },
        { text: "Get thrown off emotionally.", traits: { anxious: 1 } },
        {
          text: "Cancel everything out of frustration.",
          traits: { impulsive: 1 },
        },
        { text: "Feel like you lost control.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "You’re running late. How do you handle it?",
      multiple: false,
      options: [
        { text: "Inform them and stay calm.", traits: { calm: 1 } },
        { text: "Rush in panic and stress.", traits: { anxious: 1 } },
        { text: "Break traffic rules or run.", traits: { impulsive: 1 } },
        {
          text: "Apologize repeatedly the whole time.",
          traits: { anxious: 1 },
        },
      ],
    },
    {
      question: "Conflict between two friends. You...",
      multiple: false,
      options: [
        { text: "Stay neutral and mediate calmly.", traits: { calm: 1 } },
        { text: "Feel anxious and avoid both.", traits: { anxious: 1 } },
        { text: "Take a side impulsively.", traits: { impulsive: 1 } },
        { text: "Overthink your every word.", traits: { anxious: 1 } },
      ],
    },
    {
      question: "Multiple notifications appear while working. You...",
      multiple: false,
      options: [
        { text: "Ignore and finish the task.", traits: { calm: 1 } },
        { text: "Get distracted and overwhelmed.", traits: { anxious: 1 } },
        { text: "Drop everything to check them.", traits: { impulsive: 1 } },
        {
          text: "Feel you’re missing something urgent.",
          traits: { anxious: 1 },
        },
      ],
    },
  ],
  // What's your love language?
  19: [
    {
      question: "Which gestures make you feel most loved?",
      multiple: true,
      options: [
        { text: "A long warm hug", traits: { physicalTouch: 1 } },
        { text: "A thoughtful gift", traits: { receivingGifts: 1 } },
        {
          text: "Someone spending the whole day with you",
          traits: { qualityTime: 1 },
        },
        {
          text: "Hearing 'I’m proud of you'",
          traits: { wordsOfAffirmation: 1 },
        },
      ],
    },
    {
      question: "You’ve had a tough day. What comforts you most?",
      multiple: true,
      options: [
        { text: "A tight hug", traits: { physicalTouch: 1 } },
        {
          text: "Someone doing a small chore for you",
          traits: { actsOfService: 1 },
        },
        {
          text: "Being asked to talk about your day",
          traits: { qualityTime: 1 },
        },
        { text: "A loving message", traits: { wordsOfAffirmation: 1 } },
      ],
    },
    {
      question: "Which compliment would mean the most?",
      multiple: true,
      options: [
        {
          text: "You're amazing — I’m lucky to have you.",
          traits: { wordsOfAffirmation: 1 },
        },
        { text: "Let me help you with that.", traits: { actsOfService: 1 } },
        {
          text: "I cleared my day to be with you.",
          traits: { qualityTime: 1 },
        },
        {
          text: "This made me think of you *gives gift*",
          traits: { receivingGifts: 1 },
        },
      ],
    },
    {
      question: "In a relationship, what makes you feel closest?",
      multiple: true,
      options: [
        { text: "Holding hands or cuddling", traits: { physicalTouch: 1 } },
        { text: "Being heard and understood", traits: { qualityTime: 1 } },
        { text: "Surprises or small presents", traits: { receivingGifts: 1 } },
        {
          text: "Doing things together, like cooking",
          traits: { actsOfService: 1 },
        },
      ],
    },
    {
      question: "Your partner forgets your birthday. What hurts most?",
      multiple: true,
      options: [
        { text: "They didn’t get you anything", traits: { receivingGifts: 1 } },
        {
          text: "They didn’t say anything kind",
          traits: { wordsOfAffirmation: 1 },
        },
        { text: "They weren’t around", traits: { qualityTime: 1 } },
        { text: "No hug or affection", traits: { physicalTouch: 1 } },
      ],
    },
    {
      question: "What makes a date special?",
      multiple: true,
      options: [
        { text: "They touch your hand gently", traits: { physicalTouch: 1 } },
        {
          text: "They plan everything perfectly",
          traits: { actsOfService: 1 },
        },
        {
          text: "They say meaningful things",
          traits: { wordsOfAffirmation: 1 },
        },
        {
          text: "They surprise you with a small gift",
          traits: { receivingGifts: 1 },
        },
      ],
    },
    {
      question: "When you're upset, what helps?",
      multiple: true,
      options: [
        { text: "Being held", traits: { physicalTouch: 1 } },
        { text: "Someone showing up and staying", traits: { qualityTime: 1 } },
        { text: "A handwritten letter", traits: { wordsOfAffirmation: 1 } },
        { text: "Them cooking for you", traits: { actsOfService: 1 } },
      ],
    },
    {
      question: "Which moment warms your heart most?",
      multiple: true,
      options: [
        { text: "A kiss on the forehead", traits: { physicalTouch: 1 } },
        { text: "A surprise coffee delivery", traits: { receivingGifts: 1 } },
        { text: "A shared silent moment", traits: { qualityTime: 1 } },
        { text: "An honest 'I admire you'", traits: { wordsOfAffirmation: 1 } },
      ],
    },
    {
      question: "You're sick in bed. What makes you feel loved?",
      multiple: true,
      options: [
        { text: "Someone brings you soup", traits: { actsOfService: 1 } },
        { text: "They stay next to you", traits: { qualityTime: 1 } },
        { text: "They kiss your forehead", traits: { physicalTouch: 1 } },
        {
          text: "They text you loving words",
          traits: { wordsOfAffirmation: 1 },
        },
      ],
    },
    {
      question:
        "Your friend says: 'This reminded me of you.' What do you hope follows?",
      multiple: true,
      options: [
        { text: "A kind compliment", traits: { wordsOfAffirmation: 1 } },
        { text: "They brought you the item", traits: { receivingGifts: 1 } },
        { text: "They make time to call you", traits: { qualityTime: 1 } },
        { text: "They offer a warm hug", traits: { physicalTouch: 1 } },
      ],
    },
    {
      question: "A great morning starts with...",
      multiple: true,
      options: [
        { text: "A kiss or cuddle", traits: { physicalTouch: 1 } },
        {
          text: "A sweet good morning text",
          traits: { wordsOfAffirmation: 1 },
        },
        {
          text: "Someone making breakfast for you",
          traits: { actsOfService: 1 },
        },
        { text: "A slow coffee together", traits: { qualityTime: 1 } },
      ],
    },
    {
      question: "What gesture says 'I love you' the loudest?",
      multiple: true,
      options: [
        { text: "A hug from behind", traits: { physicalTouch: 1 } },
        {
          text: "A note left on your pillow",
          traits: { wordsOfAffirmation: 1 },
        },
        {
          text: "Cleaning your space without asking",
          traits: { actsOfService: 1 },
        },
        {
          text: "Your favorite snack bought randomly",
          traits: { receivingGifts: 1 },
        },
      ],
    },
    {
      question: "You're feeling distant. What fixes it?",
      multiple: true,
      options: [
        { text: "One-on-one time together", traits: { qualityTime: 1 } },
        { text: "An unexpected touch", traits: { physicalTouch: 1 } },
        { text: "Doing chores together", traits: { actsOfService: 1 } },
        { text: "A kind, deep message", traits: { wordsOfAffirmation: 1 } },
      ],
    },
    {
      question: "How do you express love the easiest?",
      multiple: true,
      options: [
        { text: "Through hugs and kisses", traits: { physicalTouch: 1 } },
        { text: "Doing things for others", traits: { actsOfService: 1 } },
        { text: "Buying meaningful gifts", traits: { receivingGifts: 1 } },
        { text: "Saying kind words", traits: { wordsOfAffirmation: 1 } },
      ],
    },
    {
      question: "You feel closest when...",
      multiple: true,
      options: [
        { text: "You're physically close", traits: { physicalTouch: 1 } },
        { text: "You're having a deep talk", traits: { qualityTime: 1 } },
        {
          text: "They help you without being asked",
          traits: { actsOfService: 1 },
        },
        {
          text: "They surprise you with something",
          traits: { receivingGifts: 1 },
        },
      ],
    },
    {
      question: "A gift is special because...",
      multiple: true,
      options: [
        { text: "It shows they know you", traits: { receivingGifts: 1 } },
        { text: "They thought about you", traits: { wordsOfAffirmation: 1 } },
        {
          text: "It comes with time spent together",
          traits: { qualityTime: 1 },
        },
        { text: "It came with a warm hug", traits: { physicalTouch: 1 } },
      ],
    },
    {
      question: "What do you need after a long day?",
      multiple: true,
      options: [
        { text: "Peaceful cuddles", traits: { physicalTouch: 1 } },
        { text: "Someone helping around", traits: { actsOfService: 1 } },
        { text: "A cozy chat", traits: { qualityTime: 1 } },
        { text: "Loving affirmations", traits: { wordsOfAffirmation: 1 } },
      ],
    },
    {
      question: "Which action brings you closer?",
      multiple: true,
      options: [
        { text: "Spending time without phones", traits: { qualityTime: 1 } },
        {
          text: "They do something *just* for you",
          traits: { actsOfService: 1 },
        },
        { text: "They hold your hand in public", traits: { physicalTouch: 1 } },
        {
          text: "They say they appreciate you",
          traits: { wordsOfAffirmation: 1 },
        },
      ],
    },
    {
      question: "What love language do you wish others used more with you?",
      multiple: true,
      options: [
        { text: "Physical affection", traits: { physicalTouch: 1 } },
        { text: "Thoughtful surprises", traits: { receivingGifts: 1 } },
        { text: "Quality, uninterrupted time", traits: { qualityTime: 1 } },
        { text: "Support through actions", traits: { actsOfService: 1 } },
      ],
    },
  ],
};
