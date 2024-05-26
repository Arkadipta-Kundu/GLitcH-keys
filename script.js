const words = [
    "dangerous", "stuck", "state", "sudden", "starting", "carried", "scent", "class",
    "the", "to", "i", "and", "of", "he", "was", "you", "her", "not", "it", "in", "she",
    "his", "that", "is", "my", "with", "me", "had", "on", "as", "for", "but", "at", "him",
    "have", "do", "be", "what", "would", "said", "out", "they", "we", "up", "this", "from",
    "did", "are", "could", "so", "were", "all", "if", "back", "like", "one", "there", "no",
    "into", "will", "just", "when", "about", "then", "them", "been", "know", "am", "your",
    "over", "down", "an", "or", "time", "eyes", "now", "by", "more", "get", "how", "can",
    "who", "their", "before", "around", "even", "way", "going", "see", "head", "us", "here",
    "right", "only", "want", "off", "through", "looked", "go", "think", "hand", "some",
    "again", "away", "too", "still", "something", "than", "face", "other", "never", "asked",
    "after", "thought", "man", "where", "let", "good", "look", "made", "well", "much", "two",
    "why", "because", "knew", "got", "little", "door", "our", "any", "come", "room", "take",
    "make", "say", "first", "long", "its", "felt", "took", "wanted", "turned", "need", "tell",
    "hands", "really", "sure", "against", "voice", "should", "has", "left", "very", "told",
    "came", "another", "people", "which", "while", "last", "few", "life", "anything", "body",
    "cannot", "behind", "night", "nothing", "being", "enough", "went", "feel", "does", "thing",
    "side", "might", "day", "saw", "until", "things", "though", "those", "yes", "maybe", "put",
    "find", "own", "every", "ever", "once", "hair", "moment", "both", "always", "love", "next",
    "looking", "mind", "place", "inside", "help", "front", "without", "found", "hard", "house",
    "keep", "same", "mouth", "most", "himself", "someone", "everything", "toward", "home",
    "woman", "trying", "heard", "pulled", "open", "arms", "better", "each", "between", "give",
    "seemed", "new", "old", "smile", "across", "work", "myself", "since", "already", "started",
    "bed", "small", "gave", "father", "almost", "stood", "years", "done", "mother", "heart",
    "doing", "okay", "tried", "lips", "under", "walked", "else", "stop", "words", "three",
    "nodded", "feet", "together", "must", "dark", "mean", "held", "seen", "many", "sat",
    "world", "men", "girl", "arm", "black", "light", "blood", "close", "breath", "far", "hear",
    "car", "says", "yet", "leave", "smiled", "talk", "gone", "herself", "kind", "end", "fingers",
    "call", "began", "needed", "floor", "also", "shook", "getting", "name", "air", "table",
    "lot", "yeah", "finally", "water", "called", "course", "coming", "part", "probably", "such",
    "big", "least", "moved", "happened", "along", "past", "deep", "second", "reached", "believe",
    "best", "sorry", "stopped", "later", "phone", "bit", "feeling", "sound", "making", "opened",
    "soon", "ask", "anyone", "used", "set", "great", "everyone", "idea", "family", "bad",
    "taking", "dead", "shoulder", "move", "kept", "forward", "skin", "care", "morning", "quickly",
    "white", "days", "stay", "rest", "try", "slowly", "able", "onto", "wall", "alone", "remember",
    "turn", "having", "thinking", "closed", "stared", "ground", "wrong", "ready", "mine",
    "please", "talking", "red", "watched", "either", "ran", "minutes", "hurt", "neck", "outside",
    "actually", "top", "suddenly", "friend", "pain", "fine", "hold", "understand", "lost", "fact",
    "gaze", "matter", "run", "point", "standing", "real", "wait", "boy", "caught", "times",
    "pretty", "whole", "full", "dad", "word", "instead", "laughed", "answer", "waiting",
    "chapter", "fire", "may", "friends", "taken", "others", "half", "ago", "different", "looks",
    "use", "legs", "whispered", "glanced", "cold", "young", "hit", "brother", "met", "brought",
    "high", "king", "fell", "throat", "question", "whatever", "window", "blue", "reason", "start",
    "meant", "holding", "stepped", "exactly", "kiss", "death", "leaned", "quite", "sitting",
    "watching", "large", "walk", "realized", "school", "hope", "happy", "touch", "show",
    "followed", "running", "thank", "person", "sense", "guess", "closer", "hours", "several",
    "grabbed", "continued", "replied", "chair", "watch", "power", "true", "sleep", "beautiful",
    "attention", "pushed", "human", "longer", "beside", "hot", "saying", "nice", "shoulders",
    "four", "shot", "chance", "five", "eye", "tonight", "glass", "line", "today", "baby",
    "moving", "living", "given", "perhaps", "money", "change", "tears", "fear", "read", "pare",
    "job", "step", "dropped", "couple", "leaving", "known", "loved", "cut", "shut", "office",
    "kitchen", "above", "meet", "control", "live", "women", "seat", "stand", "fight", "decided",
    "near", "free", "sister", "soft", "case", "town", "city", "spoke", "rose", "anyway", "short",
    "passed", "clear", "less", "bring", "lifted", "completely", "ill", "silence", "raised",
    "stomach", "working", "street", "seeing", "truth", "filled", "staring", "fast", "rather",
    "corner", "safe", "walking", "guys", "year", "pull", "killed", "business", "within", "edge",
    "road", "happen", "shirt", "picked", "strong", "speak", "straight", "expression", "late",
    "nearly", "son", "child", "sighed", "teeth", "sent", "building", "yourself", "sit", "warm",
    "food", "knowing", "supposed", "makes", "girls", "sort", "entire", "towards", "ten", "upon",
    "afraid", "thoughts", "clothe", "quiet", "giving", "turning", "noticed", "miss", "possible",
    "low", "returned", "seem", "waited", "easy", "finger", "kissed", "worked", "beneath", "worry",
    "week", "green", "become", "rolled", "pressed", "shrugged", "perfect", "trust", "telling",
    "deal", "book", "thanks", "barely", "hour", "vampire", "sun", "wondered", "answered", "fall",
    "sometimes", "story", "surprised", "laugh", "break", "lay", "immediately", "tongue", "figure",
    "desk", "slid", "minute", "knows", "children", "hey", "problem", "pointed", "coffee", "during",
    "empty", "wife", "tight", "bag", "plan", "appeared", "changed", "wide", "play", "ear", "months",
    "although", "sky", "wearing", "sight", "pulling", "drink", "hall", "died", "however", "heavy",
    "simply", "quick", "anymore", "liked", "gun", "nose", "order", "steps", "number", "hers",
    "sounded", "conversation", "finished", "slightly", "knees", "became", "lady", "middle",
    "return", "covered", "cheek", "softly", "sir", "stone", "alive", "six", "except", "spent",
    "led", "wish", "strange", "sounds", "direction", "added", "important", "dress", "certain",
    "ahead", "none", "thick", "surprise", "somehow", "wants", "weeks", "reach", "tomorrow", "bar",
    "quietly", "tiny", "group", "touched", "space", "dinner", "hundred", "worse", "foot",
    "somewhere", "sweet", "gently", "tone", "broke", "stuff", "crazy", "trouble", "seconds",
    "ones", "kids", "headed", "darkness", "stairs", "wrapped", "eat", "broken", "remembered",
    "area", "slow", "doors", "beyond", "managed", "especially", "silent", "bedroom", "wonder",
    "worried", "paused", "threw", "questions", "walls", "means", "single", "anger", "trees",
    "seems", "placed", "information", "drive", "force", "huge", "heat", "follow", "gotten",
    "expected", "wind", "shaking", "daughter", "comes", "angry", "meeting", "distance", "lying",
    "doubt", "game", "bright", "catch", "police", "cool", "check", "crowd", "paper", "early",
    "piece", "smiling", "loud", "forced", "party", "smell", "glad", "promise", "listen", "serious",
    "tree", "news", "forget", "clearly", "agreed", "magic", "pocket", "snapped", "guard", "save",
    "pick", "often", "box", "grin", "keeping", "choice", "below", "tired", "lip", "whether",
    "takes", "hung", "brown", "tall", "using", "playing", "boys", "earlier", "calm", "pleasure",
    "slipped", "grinned", "chin", "obviously", "further", "fun", "locked", "war", "evening",
    "letting", "sign", "hate", "arrived", "asking", "situation", "bottom", "lie", "crossed",
    "jumped", "ship", "form", "frowned", "apartment", "lights", "pay", "rock", "muttered",
    "bathroom", "carefully", "sword", "hoping", "cheeks", "explain", "kid", "dream", "showed",
    "realize", "normal", "lived", "shed", "hoped", "glance", "ring", "certainly", "breathing",
    "themselves", "waist", "lose", "imagine", "grew", "center", "position", "dressed", "laughing",
    "picture", "husband", "wet", "ears", "wore", "spot", "secret", "cell", "despite", "offered",
    "definitely", "land", "strength", "talked", "scared", "usually", "sharp", "clean", "dog",
    "future", "besides", "leg", "easily", "attack", "hide", "jaw", "doctor", "view", "lives",
    "shouted", "helped", "path", "queen", "allowed", "stayed", "stare", "entered", "remained",
    "handle", "memory", "fighting", "handed", "cry", "itself", "forehead", "soul", "beginning",
    "forever", "pair", "music", "needs", "neither", "knife", "cried", "sick", "missed", "metal",
    "truck", "simple", "gets", "grace", "aside", "send", "vampires", "company", "beat", "protect",
    "apart", "twenty", "ice", "round", "captain", "notice", "older", "falling", "sigh", "brain",
    "energy", "jeans", "familiar", "explained", "asks", "cover", "following", "married", "weight",
    "hated", "pale", "wanting", "team", "moments", "thin", "afternoon", "learned", "spread",
    "couch", "putting", "push", "shock", "silver", "hospital", "flesh", "drove", "drop", "relief",
    "goes", "shake", "turns", "pass", "wondering", "opening", "wolf", "settled", "gold", "age",
    "noise", "likely", "understood"
];


let sentence = "";
let startTime;
let interval;
let timerStarted = false;

document.getElementById('start-test').addEventListener('click', startTest);
document.getElementById('typing-input').addEventListener('input', checkInput);
document.getElementById('restart-test').addEventListener('click', () => location.reload());
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

function startTest() {
    const sentenceLength = document.getElementById('sentence-length').value || 10;
    sentence = generateSentence(sentenceLength);
    document.getElementById('display-text').textContent = '';
    document.getElementById('sentence').innerHTML = sentence.split('').map(char => `<span>${char}</span>`).join('') + '<span class="cursor"></span>';
    document.getElementById('test-container').classList.remove('hidden');
    document.getElementById('typing-input').value = '';
    document.getElementById('typing-input').disabled = false;
    document.getElementById('timer').textContent = '0';
    document.getElementById('speed').textContent = '0';
    document.getElementById('accuracy').textContent = '0';
    document.getElementById('completion-time').classList.add('hidden');
    document.getElementById('restart-test').classList.add('hidden');
    document.getElementById('settings-container').classList.add('hidden');
    document.getElementById('start-test').classList.add('hidden');
    timerStarted = false; // Reset the timer flag
}

function generateSentence(length) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(words[Math.floor(Math.random() * words.length)]);
    }
    return result.join(' ');
}

function checkInput() {
    if (!timerStarted) {
        startTime = new Date().getTime();
        interval = setInterval(updateTimer, 1000);
        timerStarted = true;
    }

    const input = document.getElementById('typing-input').value;
    const timeTaken = (new Date().getTime() - startTime) / 1000;
    const wordsTyped = input.split(' ').length;
    const accuracy = calculateAccuracy(input, sentence);
    const speed = Math.round((wordsTyped / timeTaken) * 60);

    document.getElementById('speed').textContent = speed;
    document.getElementById('accuracy').textContent = accuracy;

    const sentenceChars = document.getElementById('sentence').querySelectorAll('span');
    for (let i = 0; i < sentence.length; i++) {
        if (input[i] === undefined) {
            sentenceChars[i].classList.remove('mistake');
        } else if (input[i] !== sentence[i]) {
            sentenceChars[i].classList.add('mistake');
        } else {
            sentenceChars[i].classList.remove('mistake');
        }
    }

    // Move the cursor
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${input.length * 8.5}px`; // Adjust 8.5px if necessary

    if (input === sentence) {
        clearInterval(interval);
        document.getElementById('typing-input').disabled = true;
        document.getElementById('completion-time').textContent = `Completed in ${timeTaken.toFixed(2)} seconds`;
        document.getElementById('completion-time').classList.remove('hidden');
        document.getElementById('restart-test').classList.remove('hidden');
    }
}

function calculateAccuracy(input, sentence) {
    const inputWords = input.split(' ');
    const sentenceWords = sentence.split(' ');
    let correctWords = 0;
    inputWords.forEach((word, index) => {
        if (word === sentenceWords[index]) {
            correctWords++;
        }
    });
    return Math.round((correctWords / sentenceWords.length) * 100);
}

function updateTimer() {
    const timeTaken = Math.floor((new Date().getTime() - startTime) / 1000);
    document.getElementById('timer').textContent = timeTaken;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

// Initialize dark mode based on user's preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
}
