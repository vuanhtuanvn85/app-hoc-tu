/**
 * Admin Module - Topic and word management
 */

document.addEventListener('DOMContentLoaded', () => {
    loadTopicsList();
    setupEventListeners();
});

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Add topic button
    document.getElementById('btn-add-topic').addEventListener('click', addTopic);

    // Load sample data
    document.getElementById('btn-load-sample').addEventListener('click', loadSampleData);

    // Export data
    document.getElementById('btn-export').addEventListener('click', exportData);

    // Import data
    document.getElementById('btn-import').addEventListener('click', () => {
        document.getElementById('file-import').click();
    });
    document.getElementById('file-import').addEventListener('change', importData);

    // Clear all data
    document.getElementById('btn-clear-all').addEventListener('click', clearAllData);
}

/**
 * Add a new topic with words
 */
function addTopic() {
    const nameInput = document.getElementById('topic-name');
    const iconInput = document.getElementById('topic-icon');
    const wordsInput = document.getElementById('words-input');
    const messageDiv = document.getElementById('add-message');

    const name = nameInput.value.trim();
    const icon = iconInput.value.trim() || '📚';
    const wordsText = wordsInput.value.trim();

    // Validation
    if (!name) {
        showMessage(messageDiv, 'Vui lòng nhập tên chủ đề!', 'error');
        return;
    }

    if (!wordsText) {
        showMessage(messageDiv, 'Vui lòng nhập danh sách từ vựng!', 'error');
        return;
    }

    // Parse words (every 2 lines = 1 word pair)
    const lines = wordsText.split('\n').map(line => line.trim()).filter(line => line);

    if (lines.length < 2) {
        showMessage(messageDiv, 'Cần ít nhất 1 cặp từ (2 dòng)!', 'error');
        return;
    }

    if (lines.length % 2 !== 0) {
        showMessage(messageDiv, 'Số dòng phải là số chẵn (mỗi cặp từ gồm 2 dòng)!', 'error');
        return;
    }

    const words = [];
    for (let i = 0; i < lines.length; i += 2) {
        words.push({
            term1: lines[i],
            term2: lines[i + 1]
        });
    }

    // Create topic
    const topic = StorageManager.addTopic({
        name,
        icon,
        words
    });

    // Clear form
    nameInput.value = '';
    iconInput.value = '';
    wordsInput.value = '';

    // Show success message
    showMessage(messageDiv, `Đã thêm chủ đề "${name}" với ${words.length} cặp từ!`, 'success');

    // Reload topics list
    loadTopicsList();
}

/**
 * Load and display topics list
 */
function loadTopicsList() {
    const topics = StorageManager.getTopics();
    const container = document.getElementById('topics-list');
    const noTopics = document.getElementById('no-topics');

    if (topics.length === 0) {
        container.classList.add('hidden');
        noTopics.classList.remove('hidden');
        return;
    }

    container.classList.remove('hidden');
    noTopics.classList.add('hidden');

    container.innerHTML = topics.map(topic => `
        <div class="topic-item" data-id="${topic.id}">
            <div class="topic-item-info">
                <span class="topic-item-icon">${topic.icon}</span>
                <span class="topic-item-name">${escapeHtml(topic.name)}</span>
                <span class="topic-item-count">(${topic.words.length} từ)</span>
            </div>
            <div class="topic-item-actions">
                <button class="btn-icon-small btn-delete" onclick="deleteTopic('${topic.id}')" title="Xóa">
                    🗑️
                </button>
            </div>
        </div>
    `).join('');
}

/**
 * Delete a topic
 */
function deleteTopic(topicId) {
    if (!confirm('Bạn có chắc muốn xóa chủ đề này? Tiến độ học cũng sẽ bị xóa.')) {
        return;
    }

    StorageManager.deleteTopic(topicId);
    loadTopicsList();
}

/**
 * Load sample data
 */
function loadSampleData() {
    if (StorageManager.getTopics().length > 0) {
        if (!confirm('Dữ liệu mẫu sẽ được thêm vào danh sách hiện có. Tiếp tục?')) {
            return;
        }
    }

    const count = StorageManager.loadSampleData();
    alert(`Đã tải ${count} chủ đề mẫu!`);
    loadTopicsList();
}

/**
 * Export all data as JSON file
 */
function exportData() {
    const data = StorageManager.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `vocab-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Import data from JSON file
 */
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const success = StorageManager.importData(e.target.result);
        if (success) {
            alert('Đã nhập dữ liệu thành công!');
            loadTopicsList();
        } else {
            alert('Lỗi khi nhập dữ liệu. Vui lòng kiểm tra định dạng file.');
        }
    };
    reader.readAsText(file);

    // Reset file input
    event.target.value = '';
}

/**
 * Clear all data
 */
function clearAllData() {
    if (!confirm('Bạn có chắc muốn xóa TẤT CẢ dữ liệu? Hành động này không thể hoàn tác!')) {
        return;
    }

    StorageManager.clearAll();
    alert('Đã xóa tất cả dữ liệu!');
    loadTopicsList();
}

/**
 * Show message
 */
function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `message ${type}`;
    element.classList.remove('hidden');

    setTimeout(() => {
        element.classList.add('hidden');
    }, 5000);
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make deleteTopic available globally
window.deleteTopic = deleteTopic;
