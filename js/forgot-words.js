document.addEventListener('DOMContentLoaded', () => {
    loadForgotWords();
});

function loadForgotWords() {
    const topics = StorageManager.getTopics();
    const container = document.getElementById('forgot-words-container');
    const emptyState = document.getElementById('empty-state');
    const totalCount = document.getElementById('total-count');

    const topicSections = [];
    let totalWords = 0;

    topics.forEach(topic => {
        // Handle parent topics with sub-topics
        if (topic.isParent && topic.subTopics && topic.subTopics.length > 0) {
            topic.subTopics.forEach(subTopic => {
                const section = createTopicSection(subTopic, topic);
                if (section) {
                    const wordCount = section.wordCount;
                    totalWords += wordCount;
                    topicSections.push(section.element);
                }
            });
        } else if (topic.words && topic.words.length > 0) {
            // Handle regular topics
            const section = createTopicSection(topic);
            if (section) {
                const wordCount = section.wordCount;
                totalWords += wordCount;
                topicSections.push(section.element);
            }
        }
    });

    totalCount.textContent = `${totalWords} từ`;

    if (topicSections.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    container.innerHTML = '';
    topicSections.forEach(s => container.appendChild(s));
}

function createTopicSection(topic, parentTopic = null) {
    const stats = StorageManager.getForgotStats(topic.id);
    const progress = StorageManager.getProgress(topic.id);

    // Get all words that have EVER been marked as forgotten
    const items = topic.words
        .filter(word => stats[word.id] !== undefined)
        .map(word => ({
            ...word,
            maxForgot: stats[word.id],
            currentScore: progress[word.id] !== undefined ? progress[word.id] : 0,
            isMastered: progress[word.id] !== undefined && progress[word.id] < 0
        }))
        .sort((a, b) => b.maxForgot - a.maxForgot);

    if (items.length === 0) return null;

    const section = document.createElement('div');
    section.className = 'topic-section';

    const header = document.createElement('div');
    header.className = 'topic-header';

    // Show parent topic if it exists
    const topicTitle = parentTopic
        ? `${parentTopic.icon} ${escapeHtml(parentTopic.name)} → ${topic.icon} ${escapeHtml(topic.name)}`
        : `${topic.icon} ${escapeHtml(topic.name)}`;

    header.innerHTML = `
        <h3>${topicTitle}</h3>
        <span class="count-badge">${items.length} từ</span>
    `;

    const list = document.createElement('div');
    list.className = 'topics-list';

    items.forEach(word => {
        const row = document.createElement('div');
        row.className = 'topic-item';

        // Add mastered class if word is mastered
        if (word.isMastered) {
            row.classList.add('mastered-word');
        }

        const info = document.createElement('div');
        info.className = 'topic-item-info';

        const statusIcon = word.isMastered ? '✅' : '⏳';

        const name = document.createElement('span');
        name.className = 'topic-item-name';
        name.textContent = `${statusIcon} ${word.term1} - ${word.term2}`;

        const right = document.createElement('span');
        right.className = 'forgot-max';
        right.innerHTML = `(Hiện tại: <span class="forgot-current-number">${escapeHtml(String(word.currentScore))}</span> | Tối đa: <span class="forgot-max-number">${escapeHtml(String(word.maxForgot))}</span>)`;

        info.appendChild(name);
        info.appendChild(right);

        row.appendChild(info);
        list.appendChild(row);
    });

    section.appendChild(header);
    section.appendChild(list);

    return { element: section, wordCount: items.length };
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
