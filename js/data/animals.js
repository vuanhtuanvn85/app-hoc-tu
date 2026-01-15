/**
 * Animal Vocabulary Data - 50 Vietnamese-English word pairs
 * Chủ đề: Động vật
 */

const AnimalVocabulary = {
    name: 'Động vật',
    icon: '🐾',
    words: [
        // Thú nuôi (Pets)
        { term1: 'con mèo', term2: 'cat' },
        { term1: 'con chó', term2: 'dog' },
        { term1: 'con thỏ', term2: 'rabbit' },
        { term1: 'con cá vàng', term2: 'goldfish' },
        { term1: 'con hamster', term2: 'hamster' },

        // Động vật hoang dã (Wild animals)
        { term1: 'con sư tử', term2: 'lion' },
        { term1: 'con hổ', term2: 'tiger' },
        { term1: 'con voi', term2: 'elephant' },
        { term1: 'con hươu cao cổ', term2: 'giraffe' },
        { term1: 'con ngựa vằn', term2: 'zebra' },
        { term1: 'con gấu', term2: 'bear' },
        { term1: 'con khỉ', term2: 'monkey' },
        { term1: 'con sóc', term2: 'squirrel' },
        { term1: 'con cáo', term2: 'fox' },
        { term1: 'con sói', term2: 'wolf' },
        { term1: 'con tê giác', term2: 'rhinoceros' },
        { term1: 'con hà mã', term2: 'hippopotamus' },
        { term1: 'con báo', term2: 'leopard' },
        { term1: 'con nai', term2: 'deer' },
        { term1: 'con kangaroo', term2: 'kangaroo' },

        // Chim (Birds)
        { term1: 'con chim', term2: 'bird' },
        { term1: 'con gà', term2: 'chicken' },
        { term1: 'con vịt', term2: 'duck' },
        { term1: 'con ngỗng', term2: 'goose' },
        { term1: 'con chim cánh cụt', term2: 'penguin' },
        { term1: 'con đại bàng', term2: 'eagle' },
        { term1: 'con cú', term2: 'owl' },
        { term1: 'con công', term2: 'peacock' },
        { term1: 'con vẹt', term2: 'parrot' },
        { term1: 'con chim ruồi', term2: 'hummingbird' },

        // Động vật biển (Sea animals)
        { term1: 'con cá', term2: 'fish' },
        { term1: 'con cá mập', term2: 'shark' },
        { term1: 'con cá heo', term2: 'dolphin' },
        { term1: 'con cá voi', term2: 'whale' },
        { term1: 'con bạch tuộc', term2: 'octopus' },
        { term1: 'con sứa', term2: 'jellyfish' },
        { term1: 'con cua', term2: 'crab' },
        { term1: 'con tôm', term2: 'shrimp' },
        { term1: 'con rùa biển', term2: 'sea turtle' },
        { term1: 'con sao biển', term2: 'starfish' },

        // Côn trùng và bò sát (Insects & Reptiles)
        { term1: 'con bướm', term2: 'butterfly' },
        { term1: 'con ong', term2: 'bee' },
        { term1: 'con kiến', term2: 'ant' },
        { term1: 'con nhện', term2: 'spider' },
        { term1: 'con rắn', term2: 'snake' },
        { term1: 'con thằn lằn', term2: 'lizard' },
        { term1: 'con cá sấu', term2: 'crocodile' },
        { term1: 'con ếch', term2: 'frog' },
        { term1: 'con châu chấu', term2: 'grasshopper' },
        { term1: 'con chuồn chuồn', term2: 'dragonfly' }
    ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimalVocabulary;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.AnimalVocabulary = AnimalVocabulary;
}
