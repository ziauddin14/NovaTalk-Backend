import mongoose from "mongoose";
import dotenv from "dotenv";
import ChatResponse from "./models/chatResponse.js";

dotenv.config();

const botResponses = {
  "hello": "Hi there! 👋 How can I assist you today?",
  "what is ai": "AI (Artificial Intelligence) is a branch of computer science that focuses on building machines capable of performing tasks that typically require human intelligence.",
  "thank you": "You're very welcome! 😊",
  "bye": "Goodbye! Have a wonderful day! 🌸",
  "how are you?": "I'm Fine ,what about you?",
      /* ---------------------- SPORTS ---------------------- */
      "who is virat kohli":
        "Virat Kohli is an Indian cricketer known for his consistency and aggressive style.\n• Former captain of the Indian team\n• Holds numerous records in ODI and T20 formats\n• Nicknamed 'Chase Master' for his run-chasing ability",

      "who is babar azam":
        "Babar Azam is a Pakistani cricketer and captain.\n• Known for his elegant batting technique\n• Ranked among the world’s top batsmen\n• Has consistent performance across all formats",

      "who is cristiano ronaldo":
        "Cristiano Ronaldo is a Portuguese footballer.\n• Plays as a forward for Al-Nassr and Portugal\n• Known for athleticism, goal-scoring, and leadership\n• Five-time Ballon d'Or winner",

      "who is lionel messi":
        "Lionel Messi is an Argentine footballer.\n• Considered one of the greatest players in history\n• Winner of multiple Ballon d’Or awards\n• Known for dribbling, creativity, and playmaking",

      "what is ipl":
        "The Indian Premier League (IPL) is a professional T20 cricket league.\n• Started in 2008 in India\n• Franchise-based teams like CSK, MI, RCB\n• Mix of sports and entertainment",

      "what is fifa world cup":
        "The FIFA World Cup is an international football tournament.\n• Organized every 4 years by FIFA\n• 32 national teams compete for the title\n• Most popular sporting event globally",

      "who is roger federer":
        "Roger Federer is a Swiss tennis legend.\n• Won 20 Grand Slam titles\n• Known for grace, technique, and sportsmanship\n• Retired in 2022 after a remarkable career",

      "who is serena williams":
        "Serena Williams is an American tennis player.\n• 23 Grand Slam singles titles\n• Symbol of power, determination, and success\n• Inspired millions across the world",

      "what is a hat trick":
        "In sports, a hat-trick means achieving something 3 times in a game.\n• In cricket: 3 wickets in 3 balls\n• In football: 3 goals in a match",

      "what is lbw":
        "LBW (Leg Before Wicket) is a cricket rule.\n• When the ball hits the batsman’s leg instead of the bat\n• And would have hit the stumps\n• Umpire gives ‘out’ if certain conditions meet",

      "what is offside in football":
        "Offside rule prevents unfair advantage.\n• A player is offside if they are closer to the opponent’s goal than the ball and defenders when the pass is made",

      "what is powerplay in cricket":
        "Powerplay is a phase in limited-overs cricket.\n• Fielding restrictions apply (fewer players outside the circle)\n• Encourages attacking batting early in the innings",

      "who is ms dhoni":
        "MS Dhoni is a former Indian captain.\n• Known for calm leadership and finishing skills\n• Led India to T20 (2007) and ODI (2011) World Cup wins\n• Captain of Chennai Super Kings (CSK)",

      "what is a century in cricket":
        "A century means scoring 100 runs in a single innings.\n• A major achievement for any batsman",

      "who is neymar":
        "Neymar Jr. is a Brazilian footballer.\n• Known for dribbling, speed, and creativity\n• Played for Barcelona, PSG, and Brazil",

      "what is nba":
        "NBA stands for National Basketball Association.\n• Premier basketball league in the USA\n• Famous players include Michael Jordan, LeBron James",

      "who is lebron james":
        "LeBron James is an American basketball player.\n• Plays for Los Angeles Lakers\n• Four-time NBA champion\n• Known for leadership and versatility",

      "what is olympics":
        "The Olympics is the world’s largest multi-sport event.\n• Held every 4 years\n• Brings athletes from all nations together",

      "who is imran khan (cricketer)":
        "Imran Khan is a former Pakistani cricketer and World Cup-winning captain.\n• Led Pakistan to victory in 1992\n• Later became Prime Minister of Pakistan",

      "what is t20 cricket":
        "T20 is a short format of cricket.\n• 20 overs per side\n• Known for fast pace, excitement, and entertainment",

      /* ----------------------  ARTIFICIAL INTELLIGENCE ---------------------- */
      "what is artificial intelligence":
        "AI is the simulation of human intelligence in machines.\n• Enables learning, reasoning, and problem-solving\n• Used in robotics, NLP, vision, and automation",

      "types of ai":
        "AI can be divided into:\n• Narrow AI (task-specific)\n• General AI (human-like)\n• Super AI (beyond human intelligence)",

      "difference between ai and ml":
        "AI is the broader concept of intelligent machines.\n• ML is a subset of AI that learns from data to improve performance.",

      "what is neural network":
        "Neural Network is a system inspired by the human brain.\n• Made up of neurons (nodes) in layers\n• Learns from data to recognize patterns",

      "what is deep learning":
        "Deep Learning uses multi-layer neural networks.\n• Helps solve complex tasks like image recognition, NLP\n• Requires large data and computational power",

      "what is nlp":
        "NLP (Natural Language Processing) enables computers to understand and process human language.\n• Used in chatbots, translators, voice assistants",

      "what is computer vision":
        "Computer Vision allows machines to interpret visual information.\n• Used in face recognition, self-driving cars, surveillance",

      "what is reinforcement learning":
        "Reinforcement Learning is training via rewards and penalties.\n• The system learns the best actions to maximize rewards.",

      "what is ai ethics":
        "AI ethics focuses on responsible AI development.\n• Includes fairness, accountability, and transparency\n• Prevents bias and misuse of technology",

      "who invented ai":
        "The term 'Artificial Intelligence' was coined by John McCarthy in 1956.\n• Known as the father of AI.",

      "what is turing test":
        "Turing Test checks if a machine can think like a human.\n• Proposed by Alan Turing in 1950.",

      "applications of ai":
        "AI is used in:\n• Healthcare\n• Finance\n• Education\n• E-commerce\n• Robotics and more",

      "what is ai in daily life":
        "Examples of AI:\n• Google Assistant\n• Netflix recommendations\n• Self-driving cars\n• Spam filters",

      "what is ai bias":
        "AI bias occurs when algorithms produce unfair outcomes.\n• Caused by unbalanced or flawed training data.",

      "what is narrow ai":
        "Narrow AI is designed for one task.\n• Example: Siri, ChatGPT, Google Translate",

      "what is general ai":
        "General AI can perform any intellectual task like humans.\n• Still theoretical, not yet achieved.",

      "what is super ai":
        "Super AI surpasses human intelligence.\n• A concept in advanced AI theory and fiction.",

      "can ai feel emotions":
        "No, AI can simulate emotions but does not actually feel them.",

      "what is expert system":
        "Expert System uses knowledge-based reasoning.\n• Mimics human decision-making in specific domains.",

      "what is ai future":
        "AI’s future involves automation, personalized services, and intelligent robotics — transforming industries worldwide.",

      /* ----------------------  MACHINE LEARNING ---------------------- */
      "what is machine learning":
        "Machine Learning enables computers to learn from data.\n• Improves performance without explicit programming.",

      "types of machine learning":
        "Three main types:\n• Supervised Learning\n• Unsupervised Learning\n• Reinforcement Learning",

      "what is supervised learning":
        "Supervised Learning uses labeled data.\n• The model learns input-output relationships.",

      "what is unsupervised learning":
        "Unsupervised Learning uses unlabeled data.\n• Finds hidden patterns or clusters.",

      "what is semi supervised learning":
        "Combination of labeled and unlabeled data.\n• Useful when labeling is expensive or limited.",

      "what is reinforcement learning in ml":
        "Reinforcement Learning involves agents learning through trial and error.\n• Rewards and penalties guide learning.",

      "what is overfitting":
        "Overfitting means the model learns training data too well.\n• Performs poorly on new data.",

      "what is underfitting":
        "Underfitting means the model is too simple.\n• Fails to capture patterns in data.",

      "what is bias variance tradeoff":
        "Tradeoff between model simplicity and complexity.\n• High bias = underfit, high variance = overfit.",

      "what is training and testing data":
        "Training data teaches the model.\nTesting data evaluates how well it performs on unseen examples.",

      "what is a dataset":
        "A dataset is a collection of data used for training ML models.",

      "what is feature engineering":
        "Feature Engineering means creating new features from raw data.\n• Improves model accuracy and understanding.",

      "what is linear regression":
        "Linear Regression predicts continuous values.\n• Fits a line showing relationship between variables.",

      "what is classification":
        "Classification assigns input data to specific categories.\n• Example: spam or not spam emails.",

      "what is clustering":
        "Clustering groups similar data points.\n• Example: customer segmentation, pattern discovery.",

      "what is confusion matrix":
        "Confusion Matrix shows performance of a classification model.\n• Displays True/False positives and negatives.",

      "what is accuracy in ml":
        "Accuracy = Correct predictions / Total predictions.",

      "what is precision and recall":
        "Precision: How many predicted positives are correct.\nRecall: How many actual positives are correctly found.",

      "what is model evaluation":
        "Evaluating models ensures reliability.\n• Metrics: accuracy, precision, recall, F1-score.",

      "what is neural network in ml":
        "Neural networks are models inspired by the brain.\n• Learn patterns from data for complex predictions.",
      /* ----------------------  WEB DEVELOPMENT ---------------------- */

      "what is web development":
        "Web development is the process of building and maintaining websites.\n• Includes front-end, back-end, and database management\n• Combines coding, design, and logic for online interaction",

      "what is front end development":
        "Front-end development focuses on what users see.\n• Uses HTML, CSS, and JavaScript\n• Frameworks: React, Angular, Vue.js",

      "what is back end development":
        "Back-end handles data, logic, and server operations.\n• Uses Node.js, Python, PHP, Java\n• Connects database with front-end",

      "what is full stack development":
        "Full-stack developers handle both front-end and back-end.\n• Example: MERN stack (MongoDB, Express, React, Node)",

      "what is html":
        "HTML (HyperText Markup Language) is used to structure web pages.\n• Defines elements like headings, paragraphs, links, and images.",

      "what is css":
        "CSS (Cascading Style Sheets) styles web pages.\n• Controls colors, layouts, and fonts.",

      "what is javascript":
        "JavaScript adds interactivity to websites.\n• Used for dynamic content and user interaction.",

      "what is react":
        "React is a front-end library by Facebook.\n• Used to build reusable UI components efficiently.",

      "what is nodejs":
        "Node.js allows JavaScript to run on the server side.\n• Enables full-stack development using a single language.",

      "what is expressjs":
        "Express.js is a web framework for Node.js.\n• Simplifies backend routing and middleware setup.",

      "what is mongodb":
        "MongoDB is a NoSQL database.\n• Stores data in flexible JSON-like documents.",

      "what is api":
        "API (Application Programming Interface) allows applications to communicate.\n• Example: weather app fetching real-time data from a server.",

      "what is rest api":
        "REST API uses HTTP methods (GET, POST, PUT, DELETE).\n• Enables communication between client and server in a standard way.",

      "what is json":
        "JSON (JavaScript Object Notation) is a lightweight data format.\n• Easy for humans to read and machines to parse.",

      "what is responsive design":
        "Responsive design ensures websites adapt to different screen sizes.\n• Achieved using media queries and flexible layouts.",

      "what is bootstrap":
        "Bootstrap is a CSS framework.\n• Provides pre-designed responsive components and grids.",

      "what is tailwind css":
        "Tailwind CSS is a utility-first CSS framework.\n• Speeds up styling with predefined classes.",

      "what is seo":
        "SEO (Search Engine Optimization) improves website visibility on Google.\n• Uses keywords, quality content, and backlinks.",

      "what is domain": "A domain is a website’s address (e.g., google.com).",

      "what is hosting":
        "Hosting is where your website’s files are stored and made accessible online.",

      /* ----------------------  PROGRAMMING LANGUAGES ---------------------- */

      "what is programming":
        "Programming is writing instructions that a computer can execute.\n• Involves logic, problem-solving, and creativity.",

      "what is python":
        "Python is a high-level, versatile language.\n• Easy syntax, great for AI, data science, and web apps.",

      "what is java":
        "Java is an object-oriented language.\n• Platform-independent through JVM\n• Used in enterprise systems and Android development.",

      "what is c language":
        "C is a foundational programming language.\n• Fast, efficient, and used for system-level programming.",

      "what is c++":
        "C++ extends C with object-oriented features.\n• Common in game engines, OS, and high-performance apps.",

      "what is javascript language":
        "JavaScript is the language of the web.\n• Runs in browsers for dynamic and interactive pages.",

      "what is typescript":
        "TypeScript is a superset of JavaScript.\n• Adds static typing and better code structure.",

      "what is php":
        "PHP is a server-side scripting language.\n• Commonly used for web development and CMS (like WordPress).",

      "what is sql":
        "SQL (Structured Query Language) manages data in databases.\n• Used to insert, update, and retrieve data.",

      "what is ruby":
        "Ruby is known for simplicity and productivity.\n• Popular framework: Ruby on Rails.",

      "what is go language":
        "Go (Golang) is a language by Google.\n• Designed for simplicity and concurrency.",

      "what is kotlin":
        "Kotlin is a modern language used for Android development.\n• Interoperable with Java.",

      "what is swift":
        "Swift is developed by Apple.\n• Used to build iOS and macOS applications.",

      "what is r language":
        "R is used for data analysis and visualization.\n• Common in statistics and data science.",

      "what is rust":
        "Rust is a memory-safe language.\n• Known for performance and safety in systems programming.",

      "what is shell scripting":
        "Shell scripting automates command-line tasks.\n• Used for managing system operations.",

      "what is oops":
        "OOP (Object-Oriented Programming) organizes code using objects and classes.\n• Key concepts: inheritance, encapsulation, polymorphism, abstraction.",

      "what is compiler":
        "A compiler converts code into machine language before execution.",

      "what is interpreter":
        "An interpreter executes code line by line without pre-compiling.",

      /* ----------------------  DATA SCIENCE ---------------------- */
      "what is data science":
        "Data Science extracts insights from data using scientific methods.\n• Combines statistics, programming, and domain knowledge.",

      "what does a data scientist do":
        "A data scientist analyzes data to solve problems.\n• Collects, cleans, visualizes, and models data for insights.",

      "what is big data":
        "Big Data refers to extremely large datasets.\n• Characterized by Volume, Variety, Velocity, and Veracity.",

      "what is data cleaning":
        "Data cleaning removes errors and inconsistencies.\n• Essential before analysis or modeling.",

      "what is data visualization":
        "Data visualization represents data using charts and graphs.\n• Tools: Tableau, Power BI, Matplotlib, Seaborn.",

      "what is data analysis":
        "Data analysis involves examining data to find useful information.\n• Types: Descriptive, Diagnostic, Predictive, Prescriptive.",

      "what is data mining":
        "Data mining discovers hidden patterns in data.\n• Used in marketing, fraud detection, and recommendation systems.",

      "what is machine learning in data science":
        "ML is a core part of Data Science.\n• Used to make predictions and automate decisions.",

      "what is regression analysis":
        "Regression shows relationships between variables.\n• Example: predicting sales based on advertising budget.",

      "what is classification in data science":
        "Classification assigns data into predefined labels.\n• Example: spam vs. non-spam emails.",

      "what is clustering in data science":
        "Clustering groups similar data points.\n• Example: customer segmentation in marketing.",

      "what is feature selection":
        "Feature selection chooses the most relevant data features.\n• Improves model performance and reduces complexity.",

      "what is data preprocessing":
        "Data preprocessing prepares raw data for modeling.\n• Steps include cleaning, normalization, encoding.",

      "what is correlation":
        "Correlation measures relationship between variables.\n• Ranges from -1 (negative) to +1 (positive).",

      "what is hypothesis testing":
        "Hypothesis testing checks statistical assumptions.\n• Helps validate findings from data.",

      "what is data pipeline":
        "A data pipeline automates the flow of data from source to analysis.",

      "what is data warehouse":
        "Data warehouse stores large volumes of historical data.\n• Optimized for queries and reports.",

      "what is predictive analytics":
        "Predictive analytics forecasts future trends using data models.",

      "what is ai vs data science":
        "AI builds intelligent systems, while Data Science focuses on data analysis and insight generation.",
      /* ----------------------  DATA STRUCTURES & ALGORITHMS (DSA) ---------------------- */
      "what is dsa":
        "DSA stands for Data Structures and Algorithms — the foundation of problem-solving in computer science. It helps in writing efficient and optimized code.",
      "what is array":
        "An array is a data structure that stores elements of the same type in a continuous memory location, accessed by an index.",
      "what is linked list":
        "A linked list is a linear data structure where elements are connected through pointers. Each node contains data and a reference to the next node.",
      "what is stack":
        "A stack is a Last In, First Out (LIFO) data structure. Operations: push (insert), pop (remove). Example: browser history.",
      "what is queue":
        "A queue is a First In, First Out (FIFO) structure. Operations: enqueue (add), dequeue (remove). Example: printer queue.",
      "what is tree":
        "A tree is a hierarchical data structure consisting of nodes with a parent-child relationship. Example: file system structure.",
      "what is binary tree":
        "A binary tree is a tree where each node has at most two children — left and right.",
      "what is binary search tree":
        "A BST is a binary tree where the left child < parent and the right child > parent. It allows efficient searching.",
      "what is graph":
        "A graph is a collection of nodes (vertices) connected by edges — used in networking, social media, etc.",
      "what is recursion":
        "Recursion is when a function calls itself to solve smaller subproblems until a base condition is met.",
      "what is sorting":
        "Sorting arranges data in a particular order (ascending or descending). Examples: Bubble sort, Merge sort, Quick sort.",
      "what is searching algorithm":
        "Searching algorithms find elements in data — like Linear Search and Binary Search.",
      "what is time complexity":
        "Time complexity measures the time an algorithm takes to run, based on input size (Big O notation).",
      "what is space complexity":
        "Space complexity measures how much memory an algorithm uses while executing.",
      "what is dynamic programming":
        "Dynamic Programming (DP) is a technique that stores subproblem results to avoid repeated work — used in optimization problems.",
      "what is greedy algorithm":
        "A greedy algorithm makes the locally optimal choice at each step hoping to find a global optimum — e.g., coin change problem.",
      "what is hash table":
        "A hash table stores key-value pairs and allows fast lookup using a hash function.",
      "what is heap":
        "A heap is a special tree-based structure used for priority queues. Types: Min Heap, Max Heap.",
      "what is bfs":
        "Breadth-First Search (BFS) is a graph traversal algorithm that explores all neighbors level by level.",
      "what is dfs":
        "Depth-First Search (DFS) explores as far as possible along each branch before backtracking.",
      /* ----------------------  POLITICS ---------------------- */
      "what is politics":
        "Politics refers to the activities associated with governance, decision-making, and power within a society or organization.",
      "who is the prime minister of pakistan":
        "As of 2025, the Prime Minister of Pakistan is Shehbaz Sharif.",
      "who is the president of usa":
        "As of 2025, the President of the United States is Joe Biden.",
      "who is the prime minister of india":
        "As of 2025, the Prime Minister of India is Narendra Modi.",
      "what is democracy":
        "Democracy is a system of government where citizens elect representatives to make decisions on their behalf.",
      "what is dictatorship":
        "A dictatorship is a government controlled by one person or a small group with absolute power, often without public consent.",
      "what is parliament":
        "Parliament is the legislative body of a government responsible for making and passing laws.",
      "what is constitution":
        "The constitution is a document that defines the fundamental laws, rights, and principles by which a country is governed.",
      "what is election":
        "An election is a process where citizens vote to choose their representatives.",
      "what is judiciary":
        "The judiciary is the branch of government responsible for interpreting laws and ensuring justice.",
      "what is political party":
        "A political party is an organization of people with shared beliefs and goals who seek to gain power through elections.",
      "who is imran khan":
        "Imran Khan is the former Prime Minister of Pakistan and the chairman of Pakistan Tehreek-e-Insaf (PTI).",
      "what is un":
        "The United Nations (UN) is an international organization formed in 1945 to promote peace, security, and cooperation among nations.",
      "what is nato":
        "NATO (North Atlantic Treaty Organization) is a military alliance between North American and European countries for mutual defense.",
      "what is g20":
        "G20 is a group of 19 countries and the European Union that works together on global economic issues.",
      "what is human rights":
        "Human rights are basic freedoms and protections that every person is entitled to, such as life, liberty, and equality.",
      "what is capitalism":
        "Capitalism is an economic system where private individuals own and control production and trade for profit.",
      "what is socialism":
        "Socialism is an economic system where the government or community owns and controls key industries and resources.",
      "what is communism":
        "Communism is a political and economic ideology aiming for a classless society with collective ownership of resources.",
      "what is international relations":
        "International relations study how countries interact with each other through diplomacy, trade, and politics.",
      /* ----------------------  TRADING ---------------------- */
      "what is trading":
        "Trading means buying and selling financial assets like stocks, forex, or crypto to make a profit.",
      "what is stock market":
        "The stock market is a marketplace where investors buy and sell company shares.",
      "what is forex":
        "Forex (Foreign Exchange) is a market where currencies are traded 24/7 — the largest financial market in the world.",
      "what is cryptocurrency":
        "Cryptocurrency is a digital currency that uses blockchain technology — e.g., Bitcoin, Ethereum.",
      "what is bitcoin":
        "Bitcoin is the first decentralized digital currency, created in 2009 by Satoshi Nakamoto.",
      "what is ethereum":
        "Ethereum is a blockchain platform that enables smart contracts and decentralized applications (dApps).",
      "what is nft":
        "NFT stands for Non-Fungible Token — a unique digital asset representing ownership of art, music, or collectibles.",
      "what is ipo":
        "IPO (Initial Public Offering) is when a private company offers its shares to the public for the first time.",
      "what is bull market":
        "A bull market is when prices are rising or expected to rise — showing investor optimism.",
      "what is bear market":
        "A bear market is when prices are falling or expected to fall — showing investor pessimism.",
      "what is candlestick chart":
        "A candlestick chart shows price movement of assets — each candle represents open, close, high, and low prices.",
      "what is technical analysis":
        "Technical Analysis studies price charts and indicators to predict future price movements.",
      "what is fundamental analysis":
        "Fundamental Analysis evaluates a company’s financial health, earnings, and growth potential to decide investments.",
      "what is risk management in trading":
        "Risk management involves strategies to minimize losses — like using stop-loss and portfolio diversification.",
      "what is stop loss":
        "A stop-loss is an automatic order to sell an asset when its price falls to a certain level, limiting loss.",
      "what is leverage":
        "Leverage allows traders to control large positions with a small amount of capital — increases both profit and risk.",
      "what is margin trading":
        "Margin trading means borrowing funds from a broker to trade larger positions.",
      "what is day trading":
        "Day trading involves buying and selling assets within the same day to profit from short-term movements.",
      "what is swing trading":
        "Swing trading focuses on capturing short- to medium-term price moves — usually held for a few days to weeks.",
      "what is long term investing":
        "Long-term investing involves holding assets for years based on company fundamentals and economic trends.",
      /* ---------------------- ISLAMIC QUESTIONS (SUNNI HANAFI BARELVI) ---------------------- */

      "who is allah":
        "🕋 **Allah** is the One and Only God — Creator of everything. He has no partners, no beginning, and no end. (📖 Surah Ikhlas: 'He begets not, nor is He begotten.')",
      "who is prophet muhammad":
        "🌙 **Prophet Muhammad ﷺ** is the last and final Messenger of Allah, born in Makkah in 570 CE. He delivered the message of Islam to all humanity. (📘 Seerah Ibn Hisham)",
      "what is islam":
        "☪️ **Islam** means submission to the will of Allah. It is the final and complete religion revealed through Prophet Muhammad ﷺ. (📖 Surah Al-Ma'idah 5:3)",
      "what are five pillars of islam":
        "🕌 1️⃣ Shahadah (Faith) 2️⃣ Salah (Prayer) 3️⃣ Zakat (Charity) 4️⃣ Sawm (Fasting in Ramadan) 5️⃣ Hajj (Pilgrimage to Makkah). (📘 Sahih Bukhari)",
      "what is quran":
        "📖 The **Qur’an** is the final revelation from Allah to Prophet Muhammad ﷺ — guidance for all mankind. (📘 Surah Al-Baqarah 2:2)",
      "what is hadith":
        "📜 **Hadith** are the sayings, actions, and approvals of Prophet Muhammad ﷺ recorded by his companions. (📘 Sahih Bukhari, Sahih Muslim)",
      "what is sunnah":
        "🌟 **Sunnah** refers to the practices and traditions of Prophet Muhammad ﷺ — the second source of Islamic law after the Qur’an.",
      "what is zakat":
        "💰 **Zakat** is an obligatory charity given to the poor (2.5% of wealth). It purifies wealth and helps the needy. (📖 Surah At-Tawbah 9:60)",
      "what is salah":
        "🕌 **Salah (Prayer)** is performed 5 times daily. It strengthens the connection between a Muslim and Allah. (📘 Sahih Bukhari)",
      "what is fasting":
        "🌙 **Sawm (Fasting)** during Ramadan means abstaining from food, drink, and sin from dawn till sunset. (📖 Surah Al-Baqarah 2:183)",
      "what is hajj":
        "🕋 **Hajj** is the pilgrimage to Makkah, performed once in a lifetime if one can afford it. (📘 Sahih Bukhari)",
      "who are sahaba":
        "🕌 **Sahaba** are the blessed companions of Prophet Muhammad ﷺ who learned directly from him and spread Islam.",
      "what is tasawwuf":
        "🌸 **Tasawwuf (Sufism)** is the inner, spiritual dimension of Islam focusing on purification of the heart and closeness to Allah.",
      "who is imam abu hanifa":
        "📘 **Imam Abu Hanifa (رحمه الله)** was the founder of the Hanafi school of Islamic jurisprudence — known for deep reasoning and knowledge.",
      "who is ala hazrat":
        "🌙 **Imam Ahmad Raza Khan Barelvi (رحمه الله)** was a great Sunni scholar of India who defended Ahl-e-Sunnat beliefs and wrote the famous 'Fatawa Razvia.'",
      "what is durood sharif":
        "💐 **Durood Sharif** is sending blessings upon Prophet Muhammad ﷺ — e.g., 'Allahumma salli ‘ala Sayyidina Muhammad.' (📘 Sahih Muslim)",
      "what is shirk":
        "🚫 **Shirk** means associating partners with Allah — the greatest sin in Islam. (📖 Surah Luqman 31:13)",
      "what is tawheed":
        "☝️ **Tawheed** means belief in the Oneness of Allah — He alone deserves worship. (📖 Surah Al-Ikhlas)",
      "what is barzakh":
        "⚰️ **Barzakh** is the life after death before the Day of Judgment. Souls wait there until resurrection. (📘 Tafsir Ibn Kathir)",
      "who are awliya allah":
        "🌹 **Awliya Allah (Friends of Allah)** are pious individuals close to Allah. Their lives inspire others towards faith. (📖 Surah Yunus 10:62–63)",

      /* ---------------------- 🕵️SECRET SOCIETIES ---------------------- */
      "what is illuminati":
        "The **Illuminati** is a secretive group said to influence world politics and economics. Originally formed in 1776 in Bavaria, it is often linked to conspiracy theories.",
      "what is freemasonry":
        "Freemasonry is one of the world’s oldest secret fraternities, focusing on brotherhood, charity, and moral philosophy — often surrounded by mystery and myths.",
      "what is skull and bones":
        "Skull and Bones is an elite secret society at Yale University, said to include powerful American leaders among its members.",
      "what is bilderberg group":
        "The Bilderberg Group is a private annual meeting of political and business elites discussing global issues, often criticized for lack of transparency.",
      "what is new world order":
        "The **New World Order (NWO)** is a theory suggesting a plan for global governance under a centralized authority.",
      "is illuminati real":
        "There is no solid evidence proving the Illuminati’s current existence; most claims are based on theories and speculation.",
      "what is rosicrucian order":
        "The Rosicrucian Order is a mystical society claiming ancient wisdom about the universe, blending science, philosophy, and spirituality.",
      "what is cfr":
        "The Council on Foreign Relations (CFR) is a U.S. think tank focusing on foreign policy — often mentioned in globalist theories.",
      "what is trilateral commission":
        "The Trilateral Commission was founded in 1973 to foster cooperation between North America, Europe, and Asia — often linked to global control theories.",
      "what is black nobility":
        "The 'Black Nobility' refers to powerful European families allegedly connected to ancient financial and political influence.",
      "what is deep state":
        "The Deep State refers to an alleged network of bureaucrats and elites controlling a government behind the scenes.",
      "what is mk ultra":
        "MK-Ultra was a real CIA mind-control program in the 1950s using drugs and hypnosis — declassified in 1973.",
      "what is bohemian grove":
        "Bohemian Grove is a private California camp where global elites meet annually — known for secrecy and rituals.",
      "what is secret society":
        "A secret society is an exclusive organization that keeps its activities, goals, and membership hidden from the public.",
      "what is order of the temple":
        "The Order of the Temple, or Knights Templar, was a medieval Christian military order founded during the Crusades.",
      "what is knights templar":
        "The Knights Templar were warrior monks formed in the 12th century to protect Christian pilgrims — later disbanded by the Pope.",
      "what is illuminati symbolism":
        "Illuminati symbolism includes the all-seeing eye, pyramid, and light — representing knowledge and control.",
      "what is jesuit order":
        "The Jesuit Order is a Catholic religious organization founded in 1540, known for education and missionary work.",
      "what is world economic forum":
        "The World Economic Forum (WEF) is an international organization where business and political leaders discuss global issues — often linked to elite agendas.",
      "what is agenda 2030":
        "Agenda 2030 is the United Nations’ plan for sustainable development, often misinterpreted in conspiracy theories as global control.",

      /* ---------------------- RELIGIONS (ISLAM, CHRISTIANITY, JUDAISM) ---------------------- */
      "what is christianity":
        "Christianity is a monotheistic religion based on the teachings of Jesus Christ (Peace be upon him), focusing on love, forgiveness, and salvation.",
      "who is jesus":
        "In Islam, **Prophet Isa (عليه السلام)** is a noble prophet and messenger of Allah, born miraculously to Maryam (عليها السلام). Christians regard him as the Son of God.",
      "what is bible":
        "The **Bible** is the holy book of Christians, consisting of the Old and New Testaments.",
      "what is judaism":
        "Judaism is one of the oldest monotheistic religions, based on the teachings of the Torah and belief in one God — Yahweh.",
      "what is torah":
        "The **Torah** is the holy scripture of Judaism, containing the laws and teachings given to Prophet Moses (Musa عليه السلام).",
      "what is hinduism":
        "Hinduism is a diverse religion from India with beliefs in multiple deities, karma, reincarnation, and moksha (liberation).",
      "what is sikhism":
        "Sikhism was founded by **Guru Nanak Dev Ji** in the 15th century in Punjab, teaching equality, service, and devotion to one God.",
      "what is buddhism":
        "Buddhism was founded by **Siddhartha Gautama (Buddha)** and emphasizes the path to enlightenment through meditation and mindfulness.",
      "what is atheism":
        "Atheism is the belief that there is no God or divine being — rejecting organized religion.",
      "what is islamic view of jesus":
        "In Islam, **Prophet Isa (عليه السلام)** was not crucified but raised to the heavens. He will return before the Day of Judgment. (📖 Surah An-Nisa 4:157–158)",
      "what is islamic view of mary":
        "**Maryam (عليها السلام)** is one of the most honored women in Islam, the mother of Prophet Isa (عليه السلام). (📖 Surah Maryam)",
      "what is day of judgment":
        "The **Day of Judgment (Qiyamah)** is when all souls will be resurrected and judged for their deeds. (📘 Sahih Muslim)",
      "what is heaven in islam":
        "🕌 **Jannah** is the eternal paradise for believers, filled with peace, beauty, and nearness to Allah. (📖 Surah Al-Imran 3:15)",
      "what is hell in islam":
        "🔥 **Jahannam** is the place of punishment for disbelievers and sinners until forgiven by Allah. (📖 Surah Al-Mulk 67:6–7)",
      "what is qibla":
        "🕋 **Qibla** is the direction Muslims face during prayer — towards the Holy Kaaba in Makkah.",
      "who are jews":
        "Jews follow **Judaism** and consider themselves descendants of Prophet Jacob (Yaqub عليه السلام). Their scripture is the Torah.",
      "what is trinity":
        "Trinity in Christianity refers to belief in the Father, Son (Jesus), and Holy Spirit — three in one God concept.",
      "what is islamic belief of god":
        "Islam teaches **Tawheed (Oneness of Allah)** — He has no partners, no children, and no equal. (📖 Surah Al-Ikhlas)",
      "what is difference between islam and christianity":
        "Islam teaches that Jesus is a Prophet of Allah, not the Son of God. Christianity believes Jesus is divine.",
      "what is islamic belief about previous prophets":
        "Muslims believe in all Prophets — Adam, Noah, Abraham, Moses, Jesus, and Muhammad ﷺ — as messengers of one God. (📖 Surah Al-Baqarah 2:285)",
      /* ----------------------HISTORY OF ISLAM ---------------------- */

      "what is islam":
        "Islam is a monotheistic Abrahamic religion revealed to Prophet Muhammad ﷺ in the 7th century.\n• Follows the Quran and Sunnah.\n• Core belief: There is no god but Allah, and Muhammad ﷺ is His Messenger.",

      "when did islam begin":
        "Islam began in the early 7th century CE in Mecca, Arabia.\n• Prophet Muhammad ﷺ received the first revelation in 610 CE.\n• The message spread across Arabia within 23 years.",

      "what is the quran":
        "The Quran is the holy book of Islam revealed to Prophet Muhammad ﷺ over 23 years.\n• It contains 114 chapters (Surahs).\n• Covers guidance for life, worship, ethics, and spirituality.",

      "what are the pillars of islam":
        "The five pillars of Islam are:\n• Shahadah (Faith)\n• Salah (Prayer)\n• Zakat (Charity)\n• Sawm (Fasting in Ramadan)\n• Hajj (Pilgrimage to Mecca)",

      "what is the kaaba":
        "The Kaaba is the holiest site in Islam located in Mecca.\n• Muslims face it during prayers.\n• Built by Prophet Ibrahim (Abraham) and his son Ismail (Ishmael).",

      "who were the rightly guided caliphs":
        "The first four caliphs after Prophet Muhammad ﷺ are called the 'Rightly Guided Caliphs'.\n• Abu Bakr (RA)\n• Umar (RA)\n• Uthman (RA)\n• Ali (RA)",

      "what is hijrah":
        "Hijrah refers to the migration of Prophet Muhammad ﷺ and his followers from Mecca to Medina in 622 CE.\n• Marks the beginning of the Islamic calendar.",

      "what is jihad":
        "Jihad means striving or struggling in the way of Allah.\n• It can be spiritual (against one's ego) or physical (defending Islam when necessary).",

      "what is madina":
        "Medina is the second holiest city in Islam.\n• The Prophet ﷺ migrated there and established the first Islamic state.\n• His blessed resting place is also in Medina.",

      "what is shariah":
        "Shariah is the Islamic law derived from the Quran and Sunnah.\n• Covers worship, morality, business, and personal conduct.",

      /* ---------------------- HISTORY OF THE WORLD ---------------------- */
      "what is world history":
        "World history is the study of major global events, civilizations, and human evolution across centuries.\n• It includes ancient, medieval, and modern eras.",

      "what was the first civilization":
        "The Sumerian civilization in Mesopotamia (modern Iraq) is considered the first civilization.\n• Known for writing, agriculture, and city-building (around 4000 BCE).",

      "what was the roman empire":
        "The Roman Empire (27 BCE – 476 CE) was one of the greatest empires in history.\n• Known for law, architecture, and military power.",

      "what caused world war 1":
        "World War I began in 1914 due to alliances, nationalism, and the assassination of Archduke Franz Ferdinand.\n• Ended in 1918 with millions of casualties.",

      "what caused world war 2":
        "World War II (1939–1945) began due to Nazi Germany’s aggression led by Adolf Hitler.\n• It involved global powers and ended with the defeat of the Axis.",

      "what was the industrial revolution":
        "The Industrial Revolution began in Britain in the 18th century.\n• Marked by the invention of machines, steam power, and urbanization.",

      "what was the cold war":
        "The Cold War (1947–1991) was a political and military tension between the USA and the Soviet Union.\n• Characterized by nuclear arms race and ideological rivalry.",

      "what is the renaissance":
        "The Renaissance was a cultural and intellectual movement in Europe (14th–17th century).\n• Focused on art, science, and humanism.",

      "who was napoleon bonaparte":
        "Napoleon Bonaparte was a French military leader and emperor.\n• Known for expanding the French Empire and introducing modern laws.",

      "what is globalization":
        "Globalization is the process of increasing interaction and integration among countries.\n• Driven by trade, communication, and technology.",

      /* ---------------------- 🐾 HISTORY OF ANIMALS ---------------------- */
      "what is the oldest animal species":
        "The horseshoe crab is among the oldest surviving species.\n• Has existed for over 450 million years.",

      "when did dinosaurs live":
        "Dinosaurs lived during the Mesozoic Era (around 230 to 65 million years ago).",

      "what caused the extinction of dinosaurs":
        "Most scientists believe an asteroid impact near Mexico caused the mass extinction of dinosaurs 65 million years ago.",

      "what is human evolution":
        "Humans evolved from primate ancestors.\n• Homo sapiens appeared around 300,000 years ago in Africa.",

      "what is domestication of animals":
        "Domestication is the process of taming animals for human use.\n• Dogs were the first domesticated animals (around 15,000 years ago).",

      "what is the largest land animal":
        "The African elephant is the largest land animal.\n• Can weigh up to 6,000 kilograms.",

      "what is the largest sea animal":
        "The blue whale is the largest animal ever known.\n• Can reach lengths over 30 meters.",

      "when did birds evolve":
        "Birds evolved from small carnivorous dinosaurs during the Jurassic period.",

      "what is animal extinction":
        "Animal extinction occurs when a species completely disappears.\n• Causes include habitat loss, hunting, and climate change.",

      "what is wildlife conservation":
        "Wildlife conservation involves protecting animal species and habitats.\n• Helps maintain biodiversity and ecological balance.",

      /* ---------------------- 🇵🇰 HISTORY OF PAKISTAN ---------------------- */
      "when was pakistan formed":
        "Pakistan was formed on August 14, 1947.\n• Created as a separate homeland for Muslims of the Indian subcontinent.",

      "who founded pakistan":
        "Pakistan was founded by Quaid-e-Azam Muhammad Ali Jinnah.\n• He was the leader of the All India Muslim League.",

      "what was the lahore resolution":
        "The Lahore Resolution (1940) demanded independent states for Muslims.\n• Later became the foundation for Pakistan’s creation.",

      "who was allama iqbal":
        "Allama Iqbal was a philosopher, poet, and politician.\n• He envisioned the idea of a separate Muslim homeland in South Asia.",

      "what was the partition of india":
        "The Partition of India in 1947 divided British India into India and Pakistan.\n• Resulted in large-scale migration and violence.",

      "who was liaquat ali khan":
        "Liaquat Ali Khan was Pakistan’s first Prime Minister.\n• Known for the Objectives Resolution and early nation-building.",

      "what is the constitution of pakistan":
        "The Constitution of Pakistan was adopted in 1973.\n• Declares Pakistan an Islamic Republic.",

      "who was zulfikar ali bhutto":
        "Zulfikar Ali Bhutto was Pakistan’s Prime Minister (1973–1977).\n• Introduced major reforms and founded the PPP.",

      "what is the green revolution in pakistan":
        "The Green Revolution introduced modern agricultural techniques in the 1960s.\n• Helped increase food production and reduce hunger.",

      "what is cpec":
        "CPEC (China-Pakistan Economic Corridor) is a major infrastructure project.\n• Connects Gwadar Port with China for trade and energy cooperation.",

      /* ----------------------  HISTORY OF PROPHET MUHAMMAD ﷺ ---------------------- */
      "when was prophet muhammad born":
        "Prophet Muhammad ﷺ was born in 570 CE in Mecca, Arabia.\n• Known as the Year of the Elephant.",

      "who were prophet muhammad’s parents":
        "His father was Abdullah ibn Abdul-Muttalib and his mother was Amina bint Wahb.",

      "who raised prophet muhammad":
        "After his parents passed away, he was raised by his grandfather Abdul-Muttalib, then by his uncle Abu Talib.",

      "what was the first revelation":
        "The first revelation was 'Read in the name of your Lord' (Surah Al-Alaq) in the Cave of Hira at age 40.",

      "who was khadijah":
        "Khadijah (RA) was the first wife of Prophet Muhammad ﷺ.\n• She was the first person to accept Islam.",

      "what was the miraj":
        "Miraj was the night journey of Prophet Muhammad ﷺ from Mecca to Jerusalem and then to the heavens.\n• Mentioned in the Quran (Surah Al-Isra).",

      "when did the prophet migrate to medina":
        "The Prophet ﷺ migrated to Medina in 622 CE.\n• This marks the start of the Islamic calendar.",

      "what was the battle of badr":
        "The Battle of Badr took place in 624 CE.\n• Muslims achieved a decisive victory against the Quraysh.",

      "when did prophet muhammad pass away":
        "Prophet Muhammad ﷺ passed away in 632 CE in Medina at the age of 63.",

      "where is prophet muhammad buried":
        "He is buried in Masjid an-Nabawi, Medina.\n• His resting place is visited by millions of Muslims each year.",
      /* ----------------------  ENTERTAINMENT & MOVIES ---------------------- */

      "what is hollywood":
        "Hollywood is the center of the American film industry.\n• Located in Los Angeles, California\n• Known for producing global blockbuster movies",

      "what is bollywood":
        "Bollywood is the Hindi-language film industry based in Mumbai, India.\n• One of the largest film industries in the world\n• Known for music, dance, and drama-rich storytelling",

      "who is iron man":
        "Iron Man is a fictional superhero from Marvel Comics.\n• Real name: Tony Stark\n• Played by Robert Downey Jr. in the Marvel Cinematic Universe (MCU)",

      "what is the marvel cinematic universe":
        "The MCU is a series of interconnected superhero films produced by Marvel Studios.\n• Includes Iron Man, Captain America, Thor, Avengers, etc.",

      "who is the highest paid actor":
        "As of recent years, Dwayne Johnson (The Rock) and Tom Cruise are among the highest paid actors in Hollywood.",

      "what is the oscars":
        "The Oscars, also called the Academy Awards, honor outstanding achievements in film.\n• Organized by the Academy of Motion Picture Arts and Sciences.",

      "who is leonardo dicaprio":
        "Leonardo DiCaprio is an American actor and environmentalist.\n• Known for movies like Titanic, Inception, and The Revenant.",

      "what is netflix":
        "Netflix is a global streaming platform for movies, shows, and documentaries.\n• Offers both original and licensed content.",

      "who is shah rukh khan":
        "Shah Rukh Khan is a legendary Indian actor, known as the 'King of Bollywood.'\n• Famous for films like DDLJ, Chennai Express, and Pathaan.",

      "what is animation":
        "Animation is the art of making objects or drawings appear to move.\n• Used in films, games, and digital content creation.",

      "who is james cameron":
        "James Cameron is a Canadian filmmaker known for directing Titanic and Avatar.\n• Famous for pushing cinematic technology forward.",

      "what is a documentary":
        "A documentary is a non-fictional film presenting facts or real-life stories.\n• Aims to educate or inform the audience.",

      "what is imdb":
        "IMDb (Internet Movie Database) is an online platform listing details of movies, shows, and actors.\n• Provides ratings, reviews, and trivia.",

      "what is a film director":
        "A film director oversees the creative aspects of a movie.\n• Responsible for guiding actors, camera angles, and storytelling.",

      "what is the difference between series and movie":
        "A movie is a single, complete story, while a series consists of multiple episodes continuing a storyline.",

      /* ---------------------- TECHNOLOGY & GADGETS ---------------------- */
      "what is technology":
        "Technology is the application of scientific knowledge for practical purposes.\n• Includes electronics, software, and machinery.",

      "who invented the internet":
        "The internet was developed by scientists including Vint Cerf and Bob Kahn in the 1970s.\n• Originally called ARPANET.",

      "what is artificial intelligence":
        "Artificial Intelligence (AI) is the simulation of human intelligence in machines.\n• Used in speech recognition, robotics, and automation.",

      "what is a smartphone":
        "A smartphone is a handheld electronic device combining phone, internet, and computer functions.\n• Examples: iPhone, Samsung Galaxy.",

      "what is 5g":
        "5G is the fifth generation of mobile networks.\n• Provides faster internet speed and low latency for modern devices.",

      "what is blockchain":
        "Blockchain is a digital ledger system used to record transactions securely.\n• Commonly used in cryptocurrencies like Bitcoin.",

      "who invented the iphone":
        "The iPhone was invented by Apple Inc. under Steve Jobs’ leadership.\n• First released in 2007.",

      "what is cloud computing":
        "Cloud computing provides online access to data storage and services.\n• Examples: Google Cloud, AWS, Microsoft Azure.",

      "what is virtual reality":
        "Virtual Reality (VR) immerses users in a simulated digital environment.\n• Used in gaming, training, and education.",

      "what is robotics":
        "Robotics involves designing and programming robots to perform tasks.\n• Used in manufacturing, healthcare, and space exploration.",

      "what is iot":
        "IoT (Internet of Things) connects physical devices through the internet.\n• Examples: Smart home devices, wearable tech.",

      "what is cyber security":
        "Cyber security protects systems and networks from digital attacks.\n• Focuses on data privacy and safe online practices.",

      "what is artificial neural network":
        "An ANN is a computational model inspired by the human brain.\n• Used in AI for pattern recognition and machine learning.",

      "what is metaverse":
        "The Metaverse is a virtual shared digital world.\n• Combines AR, VR, and social interactions.",

      "what is a gadget":
        "A gadget is a small electronic device designed for a specific function.\n• Examples: Smartwatch, tablet, camera.",

      /* ---------------------- CAREER & EDUCATION ---------------------- */
      "what is freelancing":
        "Freelancing means offering your skills to clients independently.\n• Popular platforms: Upwork, Fiverr, Freelancer.",

      "how to prepare for an interview":
        "To prepare for an interview:\n• Research the company\n• Practice common questions\n• Review your resume\n• Stay confident and clear.",

      "what is a resume":
        "A resume is a document showcasing your education, skills, and experience.\n• Used to apply for jobs or internships.",

      "what is linkedin":
        "LinkedIn is a professional networking platform.\n• Used for job searching, career growth, and professional connections.",

      "what is a cover letter":
        "A cover letter introduces you to employers and explains why you fit the job.\n• Attached along with a resume.",

      "what are soft skills":
        "Soft skills are personal attributes like communication, teamwork, and problem-solving.\n• Essential for workplace success.",

      "what are technical skills":
        "Technical skills are job-specific abilities.\n• Examples: coding, data analysis, graphic design.",

      "how to choose a career":
        "To choose a career:\n• Understand your interests\n• Evaluate your strengths\n• Research job markets\n• Seek mentorship.",

      "what is internship":
        "An internship is short-term work experience.\n• Helps students learn practical industry skills.",

      "what is time management":
        "Time management means organizing your schedule effectively.\n• Helps improve productivity and reduce stress.",

      "how to study effectively":
        "Effective study tips:\n• Make a routine\n• Take breaks\n• Revise regularly\n• Use active learning techniques.",

      "what is remote work":
        "Remote work allows employees to work from home using technology.\n• Became common after COVID-19.",

      "what are communication skills":
        "Communication skills involve expressing ideas clearly.\n• Includes listening, speaking, and writing effectively.",

      "how to handle failure":
        "Handle failure by:\n• Learning from mistakes\n• Staying positive\n• Setting new goals\n• Maintaining consistency.",

      "what are top skills to learn in 2025":
        "Top skills in 2025:\n• AI & Data Analysis\n• Web Development\n• Cyber Security\n• Cloud Computing\n• Communication & Leadership.",
      /* ----------------------  MOTIVATIONAL QUOTES & POSITIVE MINDSET ---------------------- */

      "give me a motivational quote":
        "“Don’t watch the clock; do what it does. Keep going.” ⏰",
      "how to stay positive":
        "Focus on progress, not perfection.\n• Start your day with gratitude.\n• Surround yourself with positive people.\n• Avoid overthinking — everything takes time.",
      "what is success":
        "Success is not final; failure is not fatal. It is the courage to continue that counts. 💪",
      "how to overcome failure":
        "Treat failure as feedback, not defeat.\n• Learn from mistakes.\n• Adjust your approach.\n• Never give up — every setback builds strength.",
      "how to stay motivated":
        "Remind yourself why you started.\n• Break big goals into small steps.\n• Reward yourself after progress.\n• Stay consistent, not perfect.",
      "what is the key to success":
        "Discipline beats motivation.\n• Consistency + Patience = Success 🌱",
      "how to achieve goals":
        "Write them down.\n• Visualize success daily.\n• Take small actions every day.\n• Believe in your vision before others do.",
      "give me a quote about hard work":
        "“There is no substitute for hard work.” — Thomas Edison ⚡",
      "give me a quote about life":
        "“Life is 10% what happens to us and 90% how we react to it.” — Charles R. Swindoll 🌅",
      "give me a quote about success":
        "“Success doesn’t come from what you do occasionally, it comes from what you do consistently.”",
      "how to deal with stress":
        "Breathe. Relax. Reset.\n• Focus on what you can control.\n• Take a short break and reflect.\n• Remember — it’s just a moment, not your life.",
      "how to build self confidence":
        "Start by keeping promises to yourself.\n• Speak kindly to yourself.\n• Face your fears step by step.\n• Confidence grows from action.",
      "give me a quote about dreams":
        "“All our dreams can come true if we have the courage to pursue them.” — Walt Disney ✨",
      "give me a quote about courage":
        "“Courage doesn’t mean you don’t get afraid. Courage means you don’t let fear stop you.” 🦁",
      "how to never give up":
        "Remind yourself why you started.\n• Every winner was once a beginner.\n• Quitting guarantees failure — trying keeps hope alive 🌟",
   
};

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await ChatResponse.deleteMany();
    await ChatResponse.insertMany(
      Object.entries(botResponses).map(([question, answer]) => ({ question, answer }))
    );
    console.log("✅ Data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
