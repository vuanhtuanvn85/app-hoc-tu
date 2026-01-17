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
    const newWords = [];
    const forgotWords = [];

    currentTopic.words.forEach(word => {
        const score = progress[word.id];
        // Include word if not mastered (score >= 0 or undefined)
        if (score === undefined || score >= 0) {
            const wordWithScore = {
                ...word,
                score: score !== undefined ? score : 0
            };

            if (score > 0) {
                // This is a forgot word (has positive score)
                forgotWords.push(wordWithScore);
            } else {
                // New word or neutral word
                newWords.push(wordWithScore);
            }
        }
    });

    // Shuffle new words for variety
    shuffleArray(newWords);

    // Sort forgot words by score (highest first) for priority
    forgotWords.sort((a, b) => b.score - a.score);

    // Build the queue: start with new words, then insert forgot words strategically
    wordQueue = [...newWords];

    // Process forgot words in reverse order (lowest score first) 
    // so higher priority words end up closer to the front
    for (let i = forgotWords.length - 1; i >= 0; i--) {
        const word = forgotWords[i];

        // Number of repetitions = score
        // First insertion at position 0 (highest priority)
        wordQueue.unshift({ ...word });

        // Add repetitions at positions: 2, 5, 8, 11, 14, 17, 20...
        // Pattern: position = 3*j - 1 (where j = 1, 2, 3, ...)
        // Score 6 means 5 more repetitions (total 6 including position 0)
        for (let j = 1; j < word.score; j++) {
            const targetPos = 3 * j - 1; // Positions: 2, 5, 8, 11, 14, 17...
            const insertPos = Math.min(targetPos, wordQueue.length);
            wordQueue.splice(insertPos, 0, { ...word });
        }
    }
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

    // Report button (report problematic image)
    document.getElementById('btn-report').addEventListener('click', () => {
        handleReportImage();
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
            // Word is mastered, remove from queue and delete all duplicates
            progress[currentWord.id] = currentWord.score;

            // Remove all instances of this word from the queue
            wordQueue = wordQueue.filter(w => w.id !== currentWord.id);
        } else {
            // Keep in queue but update score for all instances
            progress[currentWord.id] = currentWord.score;

            // Update score for all duplicate instances in the queue
            wordQueue.forEach(w => {
                if (w.id === currentWord.id) {
                    w.score = currentWord.score;
                }
            });

            // Add back to end of queue
            wordQueue.push(currentWord);
        }
    } else {
        // Red button: increase score by 3 and insert word at 3 positions for spaced repetition
        currentWord.score += 3;
        progress[currentWord.id] = currentWord.score;

        StorageManager.recordForgot(currentTopic.id, currentWord.id, currentWord.score);

        // Update score for all existing instances in the queue
        wordQueue.forEach(w => {
            if (w.id === currentWord.id) {
                w.score = currentWord.score;
            }
        });

        // Insert the word at 3 positions: after 2, 5, and 8 words
        // This ensures the user encounters it 3 times for better retention
        const positions = [2, 5, 8];

        // Insert from largest position to smallest to maintain correct positions
        for (let i = positions.length - 1; i >= 0; i--) {
            const position = Math.min(positions[i], wordQueue.length);
            // Create a copy of the word for each insertion
            wordQueue.splice(position, 0, { ...currentWord });
        }
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

    // Display image if available, otherwise show extra info (IPA, example)
    const wordImage = document.getElementById('word-image');
    const extraInfo = document.getElementById('word-extra-info');

    if (currentWord.image) {
        // Has image: show image, hide extra info
        wordImage.src = currentWord.image;
        wordImage.alt = currentWord.term2;
        wordImage.classList.remove('hidden');
        if (extraInfo) extraInfo.classList.add('hidden');
    } else {
        // No image: hide image, show extra info if available
        wordImage.classList.add('hidden');
        wordImage.src = '';

        // Show IPA and example if available
        if (extraInfo) {
            const hasIpa = currentWord.ipa && currentWord.ipa.trim();
            const hasExample = currentWord.example && currentWord.example.trim();

            if (hasIpa || hasExample) {
                let extraHtml = '';
                if (hasIpa) {
                    extraHtml += `<div class="word-ipa">${escapeHtml(currentWord.ipa)}</div>`;
                }
                if (hasExample) {
                    extraHtml += `<div class="word-example">${escapeHtml(currentWord.example)}</div>`;
                }
                extraInfo.innerHTML = extraHtml;
                extraInfo.classList.remove('hidden');
            } else {
                extraInfo.classList.add('hidden');
            }
        }
    }
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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
 * Handle reporting problematic image
 */
function handleReportImage() {
    if (!currentWord) return;

    const success = StorageManager.reportImage(
        currentTopic.id,
        currentTopic.name,
        currentTopic.icon,
        currentWord
    );

    if (success) {
        // Show success notification
        showNotification('✅ Đã báo cáo hình ảnh có vấn đề!', 'success');
    } else {
        // Already reported
        showNotification('ℹ️ Hình ảnh này đã được báo cáo trước đó', 'info');
    }

    // Continue with the current word (don't remove from queue)
    // Just show next word without changing score
    showNextWord();
}

/**
 * Show notification message
 * @param {string} message Message to display
 * @param {string} type Notification type ('success', 'info', 'error')
 */
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
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
