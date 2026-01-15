/**
 * Animal Vocabulary Data - 50 Vietnamese-English word pairs with animated GIFs
 * Chủ đề: Động vật
 */

const AnimalVocabulary = {
    name: 'Động vật',
    icon: '🐾',
    words: [
        // Thú nuôi (Pets)
        { term1: 'con mèo', term2: 'cat', image: 'images/animals/cat.gif' },
        { term1: 'con chó', term2: 'dog', image: 'images/animals/dog.gif' },
        { term1: 'con thỏ', term2: 'rabbit', image: 'images/animals/rabbit.gif' },
        { term1: 'con cá vàng', term2: 'goldfish', image: 'images/animals/goldfish.gif' },
        { term1: 'con hamster', term2: 'hamster', image: 'images/animals/hamster.gif' },

        // Động vật hoang dã (Wild animals)
        { term1: 'con sư tử', term2: 'lion', image: 'images/animals/lion.gif' },
        { term1: 'con hổ', term2: 'tiger', image: 'images/animals/tiger.gif' },
        { term1: 'con voi', term2: 'elephant', image: 'images/animals/elephant.gif' },
        { term1: 'con hươu cao cổ', term2: 'giraffe', image: 'images/animals/giraffe.gif' },
        { term1: 'con ngựa vằn', term2: 'zebra', image: 'images/animals/zebra.gif' },
        { term1: 'con gấu', term2: 'bear', image: 'images/animals/bear.gif' },
        { term1: 'con khỉ', term2: 'monkey', image: 'images/animals/monkey.gif' },
        { term1: 'con sóc', term2: 'squirrel', image: 'images/animals/squirrel.gif' },
        { term1: 'con cáo', term2: 'fox', image: 'images/animals/fox.gif' },
        { term1: 'con sói', term2: 'wolf', image: 'images/animals/wolf.gif' },
        { term1: 'con tê giác', term2: 'rhinoceros', image: 'images/animals/rhinoceros.gif' },
        { term1: 'con hà mã', term2: 'hippopotamus', image: 'images/animals/hippopotamus.gif' },
        { term1: 'con báo', term2: 'leopard', image: 'images/animals/leopard.gif' },
        { term1: 'con nai', term2: 'deer', image: 'images/animals/deer.gif' },
        { term1: 'con kangaroo', term2: 'kangaroo', image: 'images/animals/kangaroo.gif' },

        // Chim (Birds)
        { term1: 'con chim', term2: 'bird', image: 'images/animals/bird.gif' },
        { term1: 'con gà', term2: 'chicken', image: 'images/animals/chicken.gif' },
        { term1: 'con vịt', term2: 'duck', image: 'images/animals/duck.gif' },
        { term1: 'con ngỗng', term2: 'goose', image: 'images/animals/goose.gif' },
        { term1: 'con chim cánh cụt', term2: 'penguin', image: 'images/animals/penguin.gif' },
        { term1: 'con đại bàng', term2: 'eagle', image: 'images/animals/eagle.gif' },
        { term1: 'con cú', term2: 'owl', image: 'images/animals/owl.gif' },
        { term1: 'con công', term2: 'peacock', image: 'images/animals/peacock.gif' },
        { term1: 'con vẹt', term2: 'parrot', image: 'images/animals/parrot.gif' },
        { term1: 'con chim ruồi', term2: 'hummingbird', image: 'images/animals/hummingbird.gif' },

        // Động vật biển (Sea animals)
        { term1: 'con cá', term2: 'fish', image: 'images/animals/fish.gif' },
        { term1: 'con cá mập', term2: 'shark', image: 'images/animals/shark.gif' },
        { term1: 'con cá heo', term2: 'dolphin', image: 'images/animals/dolphin.gif' },
        { term1: 'con cá voi', term2: 'whale', image: 'images/animals/whale.gif' },
        { term1: 'con bạch tuộc', term2: 'octopus', image: 'images/animals/octopus.gif' },
        { term1: 'con sứa', term2: 'jellyfish', image: 'images/animals/jellyfish.gif' },
        { term1: 'con cua', term2: 'crab', image: 'images/animals/crab.gif' },
        { term1: 'con tôm', term2: 'shrimp', image: 'images/animals/shrimp.gif' },
        { term1: 'con rùa biển', term2: 'sea turtle', image: 'images/animals/sea_turtle.gif' },
        { term1: 'con sao biển', term2: 'starfish', image: 'images/animals/starfish.gif' },

        // Côn trùng và bò sát (Insects & Reptiles)
        { term1: 'con bướm', term2: 'butterfly', image: 'images/animals/butterfly.gif' },
        { term1: 'con ong', term2: 'bee', image: 'images/animals/bee.gif' },
        { term1: 'con kiến', term2: 'ant', image: 'images/animals/ant.gif' },
        { term1: 'con nhện', term2: 'spider', image: 'images/animals/spider.gif' },
        { term1: 'con rắn', term2: 'snake', image: 'images/animals/snake.gif' },
        { term1: 'con thằn lằn', term2: 'lizard', image: 'images/animals/lizard.gif' },
        { term1: 'con cá sấu', term2: 'crocodile', image: 'images/animals/crocodile.gif' },
        { term1: 'con ếch', term2: 'frog', image: 'images/animals/frog.gif' },
        { term1: 'con châu chấu', term2: 'grasshopper', image: 'images/animals/grasshopper.gif' },
        { term1: 'con chuồn chuồn', term2: 'dragonfly', image: 'images/animals/dragonfly.gif' }
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
