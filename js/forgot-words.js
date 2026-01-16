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
        const stats = StorageManager.getForgotStats(topic.id);

        const items = topic.words
            .filter(word => stats[word.id] !== undefined && stats[word.id] > 0)
            .map(word => ({
                ...word,
                maxForgot: stats[word.id]
            }))
            .sort((a, b) => b.maxForgot - a.maxForgot);

        if (items.length === 0) return;

        totalWords += items.length;

        const section = document.createElement('div');
        section.className = 'topic-section';

        const header = document.createElement('div');
        header.className = 'topic-header';
        header.innerHTML = `
            <h3>${topic.icon} ${escapeHtml(topic.name)}</h3>
            <span class="count-badge">${items.length} từ</span>
        `;

        const list = document.createElement('div');
        list.className = 'topics-list';

        items.forEach(word => {
            const row = document.createElement('div');
            row.className = 'topic-item';

            const info = document.createElement('div');
            info.className = 'topic-item-info';

            const name = document.createElement('span');
            name.className = 'topic-item-name';
            name.textContent = `${word.term1} - ${word.term2}`;

            const right = document.createElement('span');
            right.className = 'forgot-max';
            right.innerHTML = `(Chưa thuộc nhiều nhất: <span class="forgot-max-number">${escapeHtml(String(word.maxForgot))}</span>)`;

            info.appendChild(name);
            info.appendChild(right);

            row.appendChild(info);
            list.appendChild(row);
        });

        section.appendChild(header);
        section.appendChild(list);

        topicSections.push(section);
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

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
