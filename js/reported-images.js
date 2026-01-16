/**
 * Reported Images Module - Display and manage reported images
 */

document.addEventListener('DOMContentLoaded', () => {
    loadReportedImages();
    setupEventListeners();
});

/**
 * Setup event listeners
 */
function setupEventListeners() {
    document.getElementById('btn-clear-all').addEventListener('click', () => {
        if (confirm('Bạn có chắc muốn xóa tất cả hình ảnh được báo cáo?')) {
            StorageManager.clearReportedImages();
            loadReportedImages();
            showNotification('✅ Đã xóa tất cả hình ảnh được báo cáo', 'success');
        }
    });
}

/**
 * Load and display all reported images
 */
function loadReportedImages() {
    const reportedImages = StorageManager.getReportedImages();
    const container = document.getElementById('reports-container');
    const emptyState = document.getElementById('empty-state');
    const totalCount = document.getElementById('total-count');

    // Update count
    totalCount.textContent = `${reportedImages.length} hình`;

    if (reportedImages.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    // Group by topic
    const groupedByTopic = {};
    reportedImages.forEach(report => {
        if (!groupedByTopic[report.topicId]) {
            groupedByTopic[report.topicId] = {
                name: report.topicName,
                icon: report.topicIcon,
                reports: []
            };
        }
        groupedByTopic[report.topicId].reports.push(report);
    });

    // Render grouped reports
    container.innerHTML = '';
    Object.keys(groupedByTopic).forEach(topicId => {
        const topic = groupedByTopic[topicId];
        const topicSection = createTopicSection(topicId, topic);
        container.appendChild(topicSection);
    });
}

/**
 * Create a topic section with its reported images
 * @param {string} topicId Topic ID
 * @param {Object} topic Topic data with name, icon, and reports
 * @returns {HTMLElement} Topic section element
 */
function createTopicSection(topicId, topic) {
    const section = document.createElement('div');
    section.className = 'topic-section';

    const header = document.createElement('div');
    header.className = 'topic-header';
    header.innerHTML = `
        <h3>${topic.icon} ${topic.name}</h3>
        <span class="topic-count">${topic.reports.length} hình</span>
    `;

    const grid = document.createElement('div');
    grid.className = 'reported-images-grid';

    topic.reports.forEach(report => {
        const card = createReportCard(report);
        grid.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(grid);

    return section;
}

/**
 * Create a report card
 * @param {Object} report Report data
 * @returns {HTMLElement} Report card element
 */
function createReportCard(report) {
    const card = document.createElement('div');
    card.className = 'report-card';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'report-image-container';

    if (report.image) {
        const img = document.createElement('img');
        img.src = report.image;
        img.alt = report.term2;
        img.className = 'report-image';
        imageContainer.appendChild(img);

        // Add warning badge on top of image
        const badge = document.createElement('div');
        badge.className = 'warning-badge';
        badge.textContent = '⚠️ Có vấn đề';
        imageContainer.appendChild(badge);
    } else {
        const noImage = document.createElement('div');
        noImage.className = 'no-image';
        noImage.textContent = '🖼️ Không có hình';
        imageContainer.appendChild(noImage);
    }

    const content = document.createElement('div');
    content.className = 'report-content';
    content.innerHTML = `
        <div class="report-words">
            <div class="report-term1">${report.term1}</div>
            <div class="report-term2">${report.term2}</div>
        </div>
        <div class="report-date">${formatDate(report.reportedAt)}</div>
    `;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete-report';
    deleteBtn.title = 'Xóa khỏi danh sách';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.onclick = () => handleDeleteReport(report.id);

    card.appendChild(imageContainer);
    card.appendChild(content);
    card.appendChild(deleteBtn);

    return card;
}

/**
 * Handle deleting a report
 * @param {string} reportId Report ID
 */
function handleDeleteReport(reportId) {
    const success = StorageManager.removeReportedImage(reportId);

    if (success) {
        loadReportedImages();
        showNotification('✅ Đã xóa khỏi danh sách', 'success');
    } else {
        showNotification('❌ Có lỗi xảy ra', 'error');
    }
}

/**
 * Format date string
 * @param {string} isoDate ISO date string
 * @returns {string} Formatted date
 */
function formatDate(isoDate) {
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Vừa xong';
    if (diffMins < 60) return `${diffMins} phút trước`;
    if (diffHours < 24) return `${diffHours} giờ trước`;
    if (diffDays < 7) return `${diffDays} ngày trước`;

    return date.toLocaleDateString('vi-VN');
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
