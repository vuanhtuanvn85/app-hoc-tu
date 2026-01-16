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
        window.B1_02_Feelings,
        window.B1_03_Appearance_Personality,
        window.B1_04_Health_Fitness,
        window.B1_05_Food_Drink,
        window.B1_06_Education_Learning,
        window.B1_07_Work_Career,
        window.B1_08_Hobbies_Leisure_Entertainment,
        window.B1_09_Travel_Transport,
        window.B1_10_Transportation,
        window.B1_11_House_Home,
        window.B1_12_Shopping,
        window.B1_13_Entertainment_Media,
        window.B1_14_Social_Issues,
        window.B1_15_Environmental_Issues,
        window.B1_16_Science_Technology,
        window.B1_17_Money_Finance,
        window.B1_18_Clothing_Fashion,
        window.B1_19_Crime_Law,
        window.B1_20_Government_Politics,
        window.B1_21_Business_Finance,
        window.B1_22_Science_Research,
        window.B1_23_Arts_Culture,
        window.B1_24_History_Historical_Events,
        window.B1_25_Daily_Routines,
        window.B1_26_Phrasal_Verbs_Daily_Life,
        window.B1_27_Phrasal_Verbs_Work_Study,
        window.B1_28_Adjectives_Experiences,
        window.B1_29_Adverbs_of_Manner,
        window.B1_30_Linking_Words_Connectors,
        window.B1_31_City_Countryside,
        window.B1_32_Tools_Equipment,
        window.B1_33_Materials,
        window.B1_34_Shapes_Measurements,
        window.B1_35_At_the_Restaurant,
        window.B1_36_Books_Literature,
        window.B1_37_Describing_Places,
        window.B1_38_In_the_Office,
        window.B1_39_Making_Plans_Arrangements,
        window.B1_40_Giving_Opinions_Debating,
        window.B1_41_Problems_Solutions,
        window.B1_42_On_the_Phone,
        window.B1_43_Celebrations_Festivals,
        window.B1_44_The_Human_Body,
        window.B1_45_Crime_Punishment,
        window.B1_46_Global_Issues,
        window.B1_47_Media_Communications,
        window.B1_48_Science_Technology,
        window.B1_49_Law_Society
    ].filter(t => t !== undefined);
}

// Make it available globally
window.B1Vocabulary = B1Vocabulary;
window.initB1SubTopics = initB1SubTopics;
