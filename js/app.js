/**
 * Main App - Homepage functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize B1 sub-topics
    if (typeof window.initB1SubTopics === 'function') {
        window.initB1SubTopics();
    }

    // Auto-load all sample vocabularies if no topics exist
    const topics = StorageManager.getTopics();
    if (topics.length === 0) {
        const sampleVocabs = [
            window.AnimalVocabulary,
            window.FruitsVocabulary,
            window.VegetablesVocabulary,
            window.HouseholdVocabulary,
            window.OccupationsVocabulary,
            window.ColorsShapesVocabulary,
            window.B1Vocabulary  // Add B1 parent topic
        ];

        sampleVocabs.forEach(vocab => {
            if (vocab) {
                StorageManager.addTopic(vocab);
            }
        });
    }
    loadTopics();
});

/**
 * Load and display all topics
 */
function loadTopics() {
    const topics = StorageManager.getTopics();
    const container = document.getElementById('topics-container');
    const emptyState = document.getElementById('empty-state');

    if (topics.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    container.classList.remove('hidden');
    emptyState.classList.add('hidden');

    container.innerHTML = topics.map(topic => {
        // Check if this is a parent topic with sub-topics
        if (topic.isParent && topic.subTopics && topic.subTopics.length > 0) {
            return renderParentTopic(topic);
        } else {
            return renderSingleTopic(topic);
        }
    }).join('');
}

/**
 * Render a single topic card
 */
function renderSingleTopic(topic, isSubTopic = false) {
    const progress = StorageManager.getProgress(topic.id);
    const masteredCount = countMastered(topic.words, progress);
    const totalWords = topic.words.length;
    const remainingCount = Math.max(0, totalWords - masteredCount);
    const progressPercent = totalWords > 0 ? (masteredCount / totalWords) * 100 : 0;
    const subTopicClass = isSubTopic ? 'sub-topic' : '';

    return `
        <a href="learn.html?topic=${topic.id}" class="topic-card ${subTopicClass}">
            <div class="topic-card-header">
                <div class="topic-icon">${topic.icon}</div>
                <div class="topic-info">
                    <div class="topic-name">${escapeHtml(topic.name)}</div>
                    <div class="topic-count">${totalWords} từ • Còn lại: ${remainingCount}</div>
                </div>
            </div>
            <div class="topic-progress">
                <div class="topic-progress-fill" style="width: ${progressPercent}%"></div>
            </div>
        </a>
    `;
}

/**
 * Render a parent topic card (clickable to go to subtopics page)
 */
function renderParentTopic(topic) {
    // Calculate total words across all sub-topics
    const totalSubTopics = topic.subTopics.length;
    const totalWords = topic.subTopics.reduce((sum, st) => sum + (st.words ? st.words.length : 0), 0);

    return `
        <a href="subtopics.html?parent=${topic.id}" class="topic-card parent-topic-card">
            <div class="topic-card-header">
                <div class="topic-icon">${topic.icon}</div>
                <div class="topic-info">
                    <div class="topic-name">${escapeHtml(topic.name)}</div>
                    <div class="topic-count">${totalSubTopics} chủ đề con • ${totalWords} từ</div>
                </div>
            </div>
            <div class="parent-badge">
                <span>📂 Nhấn để xem chủ đề con</span>
            </div>
        </a>
    `;
}

/**
 * Count mastered words in a topic
 */
function countMastered(words, progress) {
    return words.filter(word => {
        const score = progress[word.id];
        return score !== undefined && score < 0;
    }).length;
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
