/**
 * B1 Level Vocabulary - Main Topic
 * This is a container for all B1 level sub-topics
 */

const B1Vocabulary = {
    id: 'b1_main',
    name: 'B1 Vocabulary',
    icon: '📚',
    isParent: true,  // Indicates this is a parent topic with sub-topics
    subTopics: []    // Will be populated after all sub-topic scripts are loaded
};

// Function to initialize B1 sub-topics after all scripts are loaded
function initB1SubTopics() {
    B1Vocabulary.subTopics = [
        window.B1_01_PersonalInfo,
        // Add more sub-topics here as they are created
    ].filter(t => t !== undefined);
}

// Make it available globally
window.B1Vocabulary = B1Vocabulary;
window.initB1SubTopics = initB1SubTopics;
