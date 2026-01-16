/**
 * Sub-topics Page - Display sub-topics of a parent topic
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize B1 sub-topics
    if (typeof window.initB1SubTopics === 'function') {
        window.initB1SubTopics();
    }

    loadSubTopics();
});

/**
 * Load and display sub-topics of the parent topic
 */
function loadSubTopics() {
    const urlParams = new URLSearchParams(window.location.search);
    const parentId = urlParams.get('parent');

    if (!parentId) {
        showError('Không tìm thấy chủ đề.');
        return;
    }

    // Find the parent topic
    const parentTopic = StorageManager.getTopic(parentId);

    if (!parentTopic) {
        showError('Không tìm thấy chủ đề.');
        return;
    }

    if (!parentTopic.isParent || !parentTopic.subTopics) {
        // Not a parent topic, redirect to learn page
        window.location.href = `learn.html?topic=${parentId}`;
        return;
    }

    // Update page title
    document.getElementById('parent-topic-title').textContent = `${parentTopic.icon} ${parentTopic.name}`;
    document.getElementById('hero-title').textContent = `${parentTopic.icon} ${parentTopic.name}`;
    document.getElementById('hero-subtitle').textContent = `${parentTopic.subTopics.length} chủ đề con`;
    document.title = `${parentTopic.name} - Học Từ Vựng`;

    // Render sub-topics
    const container = document.getElementById('subtopics-container');
    const emptyState = document.getElementById('empty-state');

    if (parentTopic.subTopics.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    container.classList.remove('hidden');
    emptyState.classList.add('hidden');

    container.innerHTML = parentTopic.subTopics.map(subTopic => {
        const progress = StorageManager.getProgress(subTopic.id);
        const masteredCount = countMastered(subTopic.words, progress);
        const totalWords = subTopic.words.length;
        const remainingCount = Math.max(0, totalWords - masteredCount);
        const progressPercent = totalWords > 0 ? (masteredCount / totalWords) * 100 : 0;

        return `
            <a href="learn.html?topic=${subTopic.id}" class="topic-card sub-topic">
                <div class="topic-card-header">
                    <div class="topic-icon">${subTopic.icon}</div>
                    <div class="topic-info">
                        <div class="topic-name">${escapeHtml(subTopic.name)}</div>
                        <div class="topic-count">${totalWords} từ • Còn lại: ${remainingCount}</div>
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
 * Show error state
 */
function showError(message) {
    const container = document.getElementById('subtopics-container');
    const emptyState = document.getElementById('empty-state');

    container.classList.add('hidden');
    emptyState.classList.remove('hidden');
    emptyState.querySelector('p').textContent = message;
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
