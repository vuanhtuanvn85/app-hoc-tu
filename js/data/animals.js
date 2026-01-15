/**
 * Animal Vocabulary Data - 50 Vietnamese-English word pairs with static images
 * Chủ đề: Động vật
 */

const imagePath = (fileName) => `images/animals/${fileName}.jpg`;

const AnimalVocabulary = {
    name: 'Động vật',
    icon: '🐾',
    words: [
        // Thú nuôi (Pets)
        { term1: 'con mèo', term2: 'cat', image: imagePath('cat') },
        { term1: 'con chó', term2: 'dog', image: imagePath('dog') },
        { term1: 'con thỏ', term2: 'rabbit', image: imagePath('rabbit') },
        { term1: 'con cá vàng', term2: 'goldfish', image: imagePath('goldfish') },
        { term1: 'con hamster', term2: 'hamster', image: imagePath('hamster') },

        // Động vật hoang dã (Wild animals)
        { term1: 'con sư tử', term2: 'lion', image: imagePath('lion') },
        { term1: 'con hổ', term2: 'tiger', image: imagePath('tiger') },
        { term1: 'con voi', term2: 'elephant', image: imagePath('elephant') },
        { term1: 'con hươu cao cổ', term2: 'giraffe', image: imagePath('giraffe') },
        { term1: 'con ngựa vằn', term2: 'zebra', image: imagePath('zebra') },
        { term1: 'con gấu', term2: 'bear', image: imagePath('bear') },
        { term1: 'con khỉ', term2: 'monkey', image: imagePath('monkey') },
        { term1: 'con sóc', term2: 'squirrel', image: imagePath('squirrel') },
        { term1: 'con cáo', term2: 'fox', image: imagePath('fox') },
        { term1: 'con sói', term2: 'wolf', image: imagePath('wolf') },
        { term1: 'con tê giác', term2: 'rhinoceros', image: imagePath('rhinoceros') },
        { term1: 'con hà mã', term2: 'hippopotamus', image: imagePath('hippopotamus') },
        { term1: 'con báo', term2: 'leopard', image: imagePath('leopard') },
        { term1: 'con nai', term2: 'deer', image: imagePath('deer') },
        { term1: 'con kangaroo', term2: 'kangaroo', image: imagePath('kangaroo') },

        // Chim (Birds)
        { term1: 'con chim', term2: 'bird', image: imagePath('bird') },
        { term1: 'con gà', term2: 'chicken', image: imagePath('chicken') },
        { term1: 'con vịt', term2: 'duck', image: imagePath('duck') },
        { term1: 'con ngỗng', term2: 'goose', image: imagePath('goose') },
        { term1: 'con chim cánh cụt', term2: 'penguin', image: imagePath('penguin') },
        { term1: 'con đại bàng', term2: 'eagle', image: imagePath('eagle') },
        { term1: 'con cú', term2: 'owl', image: imagePath('owl') },
        { term1: 'con công', term2: 'peacock', image: imagePath('peacock') },
        { term1: 'con vẹt', term2: 'parrot', image: imagePath('parrot') },
        { term1: 'con chim ruồi', term2: 'hummingbird', image: imagePath('hummingbird') },

        // Động vật biển (Sea animals)
        { term1: 'con cá', term2: 'fish', image: imagePath('fish') },
        { term1: 'con cá mập', term2: 'shark', image: imagePath('shark') },
        { term1: 'con cá heo', term2: 'dolphin', image: imagePath('dolphin') },
        { term1: 'con cá voi', term2: 'whale', image: imagePath('whale') },
        { term1: 'con bạch tuộc', term2: 'octopus', image: imagePath('octopus') },
        { term1: 'con sứa', term2: 'jellyfish', image: imagePath('jellyfish') },
        { term1: 'con cua', term2: 'crab', image: imagePath('crab') },
        { term1: 'con tôm', term2: 'shrimp', image: imagePath('shrimp') },
        { term1: 'con rùa biển', term2: 'sea turtle', image: imagePath('sea_turtle') },
        { term1: 'con sao biển', term2: 'starfish', image: imagePath('starfish') },

        // Côn trùng và bò sát (Insects & Reptiles)
        { term1: 'con bướm', term2: 'butterfly', image: imagePath('butterfly') },
        { term1: 'con ong', term2: 'bee', image: imagePath('bee') },
        { term1: 'con kiến', term2: 'ant', image: imagePath('ant') },
        { term1: 'con nhện', term2: 'spider', image: imagePath('spider') },
        { term1: 'con rắn', term2: 'snake', image: imagePath('snake') },
        { term1: 'con thằn lằn', term2: 'lizard', image: imagePath('lizard') },
        { term1: 'con cá sấu', term2: 'crocodile', image: imagePath('crocodile') },
        { term1: 'con ếch', term2: 'frog', image: imagePath('frog') },
        { term1: 'con châu chấu', term2: 'grasshopper', image: imagePath('grasshopper') },
        { term1: 'con chuồn chuồn', term2: 'dragonfly', image: imagePath('dragonfly') }
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
