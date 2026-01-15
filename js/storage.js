/**
 * Storage Manager - Handles all localStorage operations
 */

const StorageManager = {
    KEYS: {
        TOPICS: 'vocab_topics',
        PROGRESS: 'vocab_progress'
    },

    /**
     * Get all topics
     * @returns {Array} Array of topic objects
     */
    getTopics() {
        try {
            const data = localStorage.getItem(this.KEYS.TOPICS);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error reading topics:', e);
            return [];
        }
    },

    /**
     * Save all topics
     * @param {Array} topics Array of topic objects
     */
    saveTopics(topics) {
        try {
            localStorage.setItem(this.KEYS.TOPICS, JSON.stringify(topics));
        } catch (e) {
            console.error('Error saving topics:', e);
        }
    },

    /**
     * Get a single topic by ID
     * @param {string} topicId Topic ID
     * @returns {Object|null} Topic object or null
     */
    getTopic(topicId) {
        const topics = this.getTopics();
        return topics.find(t => t.id === topicId) || null;
    },

    /**
     * Add a new topic
     * @param {Object} topic Topic object with name, icon, and words
     * @returns {Object} Created topic with ID
     */
    addTopic(topic) {
        const topics = this.getTopics();
        const newTopic = {
            id: this.generateId(),
            name: topic.name,
            icon: topic.icon || '📚',
            words: topic.words.map((word, index) => ({
                id: `${Date.now()}-${index}`,
                term1: word.term1,
                term2: word.term2,
                image: word.image || null
            })),
            createdAt: new Date().toISOString()
        };
        topics.push(newTopic);
        this.saveTopics(topics);
        return newTopic;
    },

    /**
     * Update a topic
     * @param {string} topicId Topic ID
     * @param {Object} updates Partial topic object with updates
     * @returns {boolean} Success status
     */
    updateTopic(topicId, updates) {
        const topics = this.getTopics();
        const index = topics.findIndex(t => t.id === topicId);
        if (index === -1) return false;

        topics[index] = { ...topics[index], ...updates };
        this.saveTopics(topics);
        return true;
    },

    /**
     * Delete a topic and its progress
     * @param {string} topicId Topic ID
     * @returns {boolean} Success status
     */
    deleteTopic(topicId) {
        const topics = this.getTopics();
        const filtered = topics.filter(t => t.id !== topicId);
        if (filtered.length === topics.length) return false;

        this.saveTopics(filtered);
        this.deleteProgress(topicId);
        return true;
    },

    /**
     * Get progress for a topic
     * @param {string} topicId Topic ID
     * @returns {Object} Progress object with word scores
     */
    getProgress(topicId) {
        try {
            const data = localStorage.getItem(this.KEYS.PROGRESS);
            const allProgress = data ? JSON.parse(data) : {};
            return allProgress[topicId] || {};
        } catch (e) {
            console.error('Error reading progress:', e);
            return {};
        }
    },

    /**
     * Save progress for a topic
     * @param {string} topicId Topic ID
     * @param {Object} progress Progress object with word scores
     */
    saveProgress(topicId, progress) {
        try {
            const data = localStorage.getItem(this.KEYS.PROGRESS);
            const allProgress = data ? JSON.parse(data) : {};
            allProgress[topicId] = progress;
            localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(allProgress));
        } catch (e) {
            console.error('Error saving progress:', e);
        }
    },

    /**
     * Delete progress for a topic
     * @param {string} topicId Topic ID
     */
    deleteProgress(topicId) {
        try {
            const data = localStorage.getItem(this.KEYS.PROGRESS);
            if (!data) return;
            const allProgress = JSON.parse(data);
            delete allProgress[topicId];
            localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(allProgress));
        } catch (e) {
            console.error('Error deleting progress:', e);
        }
    },

    /**
     * Reset progress for a topic
     * @param {string} topicId Topic ID
     */
    resetProgress(topicId) {
        this.saveProgress(topicId, {});
    },

    /**
     * Export all data as JSON
     * @returns {string} JSON string of all data
     */
    exportData() {
        return JSON.stringify({
            topics: this.getTopics(),
            progress: JSON.parse(localStorage.getItem(this.KEYS.PROGRESS) || '{}'),
            exportedAt: new Date().toISOString()
        }, null, 2);
    },

    /**
     * Import data from JSON
     * @param {string} jsonString JSON string of data
     * @returns {boolean} Success status
     */
    importData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (data.topics) {
                this.saveTopics(data.topics);
            }
            if (data.progress) {
                localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(data.progress));
            }
            return true;
        } catch (e) {
            console.error('Error importing data:', e);
            return false;
        }
    },

    /**
     * Clear all data
     */
    clearAll() {
        localStorage.removeItem(this.KEYS.TOPICS);
        localStorage.removeItem(this.KEYS.PROGRESS);
    },

    /**
     * Reset entire application storage
     */
    resetApp() {
        this.clearAll();
    },

    /**
     * Generate unique ID
     * @returns {string} Unique ID
     */
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    /**
     * Load sample data
     */
    loadSampleData() {
        const sampleTopics = [
            {
                name: 'Trái cây',
                icon: '🍎',
                words: [
                    { term1: 'quả táo', term2: 'apple' },
                    { term1: 'quả cam', term2: 'orange' },
                    { term1: 'quả chuối', term2: 'banana' },
                    { term1: 'quả nho', term2: 'grape' },
                    { term1: 'quả dâu', term2: 'strawberry' },
                    { term1: 'quả xoài', term2: 'mango' },
                    { term1: 'quả dưa hấu', term2: 'watermelon' },
                    { term1: 'quả lê', term2: 'pear' },
                    { term1: 'quả đào', term2: 'peach' },
                    { term1: 'quả dứa', term2: 'pineapple' }
                ]
            },
            {
                name: 'Động vật',
                icon: '🐱',
                words: [
                    { term1: 'con mèo', term2: 'cat' },
                    { term1: 'con chó', term2: 'dog' },
                    { term1: 'con chim', term2: 'bird' },
                    { term1: 'con cá', term2: 'fish' },
                    { term1: 'con voi', term2: 'elephant' },
                    { term1: 'con sư tử', term2: 'lion' },
                    { term1: 'con khỉ', term2: 'monkey' },
                    { term1: 'con thỏ', term2: 'rabbit' },
                    { term1: 'con gấu', term2: 'bear' },
                    { term1: 'con hổ', term2: 'tiger' }
                ]
            },
            {
                name: 'Màu sắc',
                icon: '🎨',
                words: [
                    { term1: 'màu đỏ', term2: 'red' },
                    { term1: 'màu xanh lá', term2: 'green' },
                    { term1: 'màu xanh dương', term2: 'blue' },
                    { term1: 'màu vàng', term2: 'yellow' },
                    { term1: 'màu cam', term2: 'orange' },
                    { term1: 'màu tím', term2: 'purple' },
                    { term1: 'màu hồng', term2: 'pink' },
                    { term1: 'màu trắng', term2: 'white' },
                    { term1: 'màu đen', term2: 'black' },
                    { term1: 'màu nâu', term2: 'brown' }
                ]
            }
        ];

        sampleTopics.forEach(topic => this.addTopic(topic));
        return sampleTopics.length;
    }
};

// Make it available globally
window.StorageManager = StorageManager;
