/**
 * Storage Manager - Handles all localStorage operations
 */

const StorageManager = {
    KEYS: {
        TOPICS: 'vocab_topics',
        PROGRESS: 'vocab_progress',
        REPORTED_IMAGES: 'vocab_reported_images',
        FORGOT_STATS: 'vocab_forgot_stats'
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
        this.deleteForgotStats(topicId);
        return true;
    },

    getForgotStats(topicId) {
        try {
            const data = localStorage.getItem(this.KEYS.FORGOT_STATS);
            const allStats = data ? JSON.parse(data) : {};
            return allStats[topicId] || {};
        } catch (e) {
            console.error('Error reading forgot stats:', e);
            return {};
        }
    },

    saveForgotStats(topicId, stats) {
        try {
            const data = localStorage.getItem(this.KEYS.FORGOT_STATS);
            const allStats = data ? JSON.parse(data) : {};
            allStats[topicId] = stats;
            localStorage.setItem(this.KEYS.FORGOT_STATS, JSON.stringify(allStats));
        } catch (e) {
            console.error('Error saving forgot stats:', e);
        }
    },

    recordForgot(topicId, wordId, score) {
        const stats = this.getForgotStats(topicId);
        const currentMax = stats[wordId] || 0;
        const nextMax = Math.max(currentMax, score);
        if (nextMax !== currentMax) {
            stats[wordId] = nextMax;
            this.saveForgotStats(topicId, stats);
        }
    },

    deleteForgotStats(topicId) {
        try {
            const data = localStorage.getItem(this.KEYS.FORGOT_STATS);
            if (!data) return;
            const allStats = JSON.parse(data);
            delete allStats[topicId];
            localStorage.setItem(this.KEYS.FORGOT_STATS, JSON.stringify(allStats));
        } catch (e) {
            console.error('Error deleting forgot stats:', e);
        }
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
            forgotStats: JSON.parse(localStorage.getItem(this.KEYS.FORGOT_STATS) || '{}'),
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
            if (data.forgotStats) {
                localStorage.setItem(this.KEYS.FORGOT_STATS, JSON.stringify(data.forgotStats));
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
        localStorage.removeItem(this.KEYS.FORGOT_STATS);
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
     * Get all reported images
     * @returns {Array} Array of reported image objects
     */
    getReportedImages() {
        try {
            const data = localStorage.getItem(this.KEYS.REPORTED_IMAGES);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error reading reported images:', e);
            return [];
        }
    },

    /**
     * Report an image as problematic
     * @param {string} topicId Topic ID
     * @param {string} topicName Topic name
     * @param {string} topicIcon Topic icon
     * @param {Object} word Word object with id, term1, term2, image
     * @returns {boolean} Success status
     */
    reportImage(topicId, topicName, topicIcon, word) {
        try {
            const reportedImages = this.getReportedImages();

            // Check if already reported
            const alreadyReported = reportedImages.some(
                item => item.topicId === topicId && item.wordId === word.id
            );

            if (alreadyReported) {
                return false; // Already reported
            }

            reportedImages.push({
                id: this.generateId(),
                topicId,
                topicName,
                topicIcon,
                wordId: word.id,
                term1: word.term1,
                term2: word.term2,
                image: word.image,
                reportedAt: new Date().toISOString()
            });

            localStorage.setItem(this.KEYS.REPORTED_IMAGES, JSON.stringify(reportedImages));
            return true;
        } catch (e) {
            console.error('Error reporting image:', e);
            return false;
        }
    },

    /**
     * Remove a reported image from the list
     * @param {string} reportId Report ID
     * @returns {boolean} Success status
     */
    removeReportedImage(reportId) {
        try {
            const reportedImages = this.getReportedImages();
            const filtered = reportedImages.filter(item => item.id !== reportId);

            if (filtered.length === reportedImages.length) {
                return false; // Not found
            }

            localStorage.setItem(this.KEYS.REPORTED_IMAGES, JSON.stringify(filtered));
            return true;
        } catch (e) {
            console.error('Error removing reported image:', e);
            return false;
        }
    },

    /**
     * Clear all reported images
     */
    clearReportedImages() {
        localStorage.removeItem(this.KEYS.REPORTED_IMAGES);
    },

    /**
     * Load sample data
     */
    loadSampleData() {
        let count = 0;

        // Load all available sample vocabularies
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
                this.addTopic(vocab);
                count++;
            }
        });

        return count;
    }
};

// Make it available globally
window.StorageManager = StorageManager;
