/**
 * Learning Module - Core learning algorithm
 */

let currentTopic = null;
let wordQueue = [];
let currentWord = null;
let progress = {};

document.addEventListener('DOMContentLoaded', () => {
    initLearning();
    setupEventListeners();
});

/**
 * Initialize learning session
 */
function initLearning() {
    const urlParams = new URLSearchParams(window.location.search);
    const topicId = urlParams.get('topic');

    if (!topicId) {
        window.location.href = 'index.html';
        return;
    }

    currentTopic = StorageManager.getTopic(topicId);
    if (!currentTopic) {
        window.location.href = 'index.html';
        return;
    }

    // Set topic title
    document.getElementById('topic-title').textContent = `${currentTopic.icon} ${currentTopic.name}`;

    // Load progress
    progress = StorageManager.getProgress(topicId);

    // Initialize word queue with non-mastered words
    initializeQueue();

    // Show first word
    showNextWord();
}

/**
 * Initialize the word queue with non-mastered words
 */
function initializeQueue() {
    wordQueue = [];

    currentTopic.words.forEach(word => {
        const score = progress[word.id];
        // Include word if not mastered (score >= 0 or undefined)
        if (score === undefined || score >= 0) {
            wordQueue.push({
                ...word,
                score: score !== undefined ? score : 0
            });
        }
    });

    // Shuffle the queue for variety
    shuffleArray(wordQueue);
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Know button (green)
    document.getElementById('btn-know').addEventListener('click', () => {
        handleAnswer(true);
    });

    // Forgot button (red)
    document.getElementById('btn-forgot').addEventListener('click', () => {
        handleAnswer(false);
    });

    // Review button (learn from beginning)
    document.getElementById('btn-review').addEventListener('click', () => {
        resetAndReview();
    });

    // Answer reveal (click on overlay to show answer AND speak the word)
    document.getElementById('term2-container').addEventListener('click', () => {
        revealAnswer();
        speakWord(); // Automatically speak when revealing answer
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Enter') {
            handleAnswer(true);
        } else if (e.key === 'ArrowLeft') {
            handleAnswer(false);
        } else if (e.key === ' ') {
            e.preventDefault();
            revealAnswer();
            speakWord(); // Also speak when using spacebar
        }
    });
}

/**
 * Reveal the hidden answer
 */
function revealAnswer() {
    const answerContent = document.getElementById('answer-content');
    const overlay = document.getElementById('answer-overlay');

    answerContent.classList.remove('hidden-answer');
    answerContent.classList.add('shown-answer');
    overlay.classList.add('revealed');
}

/**
 * Hide the answer for next word
 */
function hideAnswer() {
    const answerContent = document.getElementById('answer-content');
    const overlay = document.getElementById('answer-overlay');

    answerContent.classList.add('hidden-answer');
    answerContent.classList.remove('shown-answer');
    overlay.classList.remove('revealed');
}

/**
 * Handle user's answer
 * @param {boolean} known - true if user knows the word, false otherwise
 */
function handleAnswer(known) {
    if (!currentWord) return;

    if (known) {
        // Green button: decrease score
        currentWord.score--;

        if (currentWord.score < 0) {
            // Word is mastered, remove from queue
            progress[currentWord.id] = currentWord.score;
        } else {
            // Keep in queue but move to later position
            progress[currentWord.id] = currentWord.score;
            // Add back to end of queue
            wordQueue.push(currentWord);
        }
    } else {
        // Red button: increase score and add to priority position (after 3 words)
        currentWord.score++;
        progress[currentWord.id] = currentWord.score;

        // Insert after 3 words (or at end if queue is shorter)
        const insertPosition = Math.min(3, wordQueue.length);
        wordQueue.splice(insertPosition, 0, currentWord);
    }

    // Save progress
    StorageManager.saveProgress(currentTopic.id, progress);

    // Show next word or completion
    showNextWord();
}

/**
 * Show the next word in queue
 */
function showNextWord() {
    updateProgress();

    if (wordQueue.length === 0) {
        showCompletion();
        return;
    }

    currentWord = wordQueue.shift();

    // Hide answer for the new word
    hideAnswer();

    // Animate card
    const card = document.getElementById('word-card');
    card.style.animation = 'none';
    card.offsetHeight; // Trigger reflow
    card.style.animation = 'fadeIn 0.3s ease';

    document.getElementById('word-term1').textContent = currentWord.term1;
    document.getElementById('word-term2').textContent = currentWord.term2;

    // Display image if available
    const wordImage = document.getElementById('word-image');
    if (currentWord.image) {
        wordImage.src = currentWord.image;
        wordImage.alt = currentWord.term2;
        wordImage.classList.remove('hidden');
    } else {
        wordImage.classList.add('hidden');
        wordImage.src = '';
    }
}

/**
 * Update progress display
 */
function updateProgress() {
    const totalWords = currentTopic.words.length;
    const masteredCount = Object.values(progress).filter(score => score < 0).length;
    const remainingCount = wordQueue.length + (currentWord ? 1 : 0);

    const progressPercent = (masteredCount / totalWords) * 100;

    document.getElementById('progress-fill').style.width = `${progressPercent}%`;
    document.getElementById('progress-text').textContent = `Còn lại: ${wordQueue.length}`;
    document.getElementById('mastered-count').textContent = `Đã thuộc: ${masteredCount}/${totalWords}`;
}

/**
 * Show completion screen
 */
function showCompletion() {
    document.getElementById('word-card').classList.add('hidden');
    document.querySelector('.action-buttons').classList.add('hidden');
    document.getElementById('completion-screen').classList.remove('hidden');
}

/**
 * Reset progress and review from start (Ôn lại)
 */
function resetAndReview() {
    // Reset all progress for this topic
    progress = {};
    StorageManager.resetProgress(currentTopic.id);

    // Reinitialize queue with all words
    initializeQueue();

    // Hide completion screen, show learning UI
    document.getElementById('completion-screen').classList.add('hidden');
    document.getElementById('word-card').classList.remove('hidden');
    document.querySelector('.action-buttons').classList.remove('hidden');

    // Show first word
    showNextWord();
}

/**
 * Speak the current word using Web Speech API
 */
function speakWord() {
    if (!currentWord) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Speak the English word (term2)
    const utterance = new SpeechSynthesisUtterance(currentWord.term2);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for learning

    window.speechSynthesis.speak(utterance);
}

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
