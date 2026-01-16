/**
 * Main App - Homepage functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // Auto-load all sample vocabularies if no topics exist
    const topics = StorageManager.getTopics();
    if (topics.length === 0) {
        const sampleVocabs = [
            window.AnimalVocabulary,
            window.FruitsVocabulary,
            window.VegetablesVocabulary,
            window.HouseholdVocabulary,
            window.OccupationsVocabulary,
            window.ColorsShapesVocabulary
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
        const progress = StorageManager.getProgress(topic.id);
        const masteredCount = countMastered(topic.words, progress);
        const totalWords = topic.words.length;
        const progressPercent = totalWords > 0 ? (masteredCount / totalWords) * 100 : 0;

        return `
            <a href="learn.html?topic=${topic.id}" class="topic-card">
                <div class="topic-card-header">
                    <div class="topic-icon">${topic.icon}</div>
                    <div class="topic-info">
                        <div class="topic-name">${escapeHtml(topic.name)}</div>
                        <div class="topic-count">${totalWords} từ</div>
                    </div>
                </div>
                <div class="topic-progress">
                    <div class="topic-progress-fill" style="width: ${progressPercent}%"></div>
                </div>
            </a>
        `;
    }).join('');
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
