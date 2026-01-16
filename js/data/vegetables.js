/**
 * Vegetables Vocabulary Data - 100 Vietnamese-English word pairs
 * Chủ đề: Rau củ
 */

const vegetableImagePath = (fileName) => `images/vegetables/${fileName}.jpg`;

const VegetablesVocabulary = {
    name: 'Rau củ',
    icon: '🥕',
    words: [
        // Leafy vegetables (Rau lá)
        { term1: 'rau cải', term2: 'cabbage', image: vegetableImagePath('cabbage') },
        { term1: 'rau diếp', term2: 'lettuce', image: vegetableImagePath('lettuce') },
        { term1: 'rau bina', term2: 'spinach', image: vegetableImagePath('spinach') },
        { term1: 'cải xoăn', term2: 'kale', image: vegetableImagePath('kale') },
        { term1: 'rau cải thảo', term2: 'bok choy', image: vegetableImagePath('bok_choy') },
        { term1: 'rau arugula', term2: 'arugula', image: vegetableImagePath('arugula') },
        { term1: 'rau endive', term2: 'endive', image: vegetableImagePath('endive') },
        { term1: 'rau radicchio', term2: 'radicchio', image: vegetableImagePath('radicchio') },
        { term1: 'rau xà lách romaine', term2: 'romaine lettuce', image: vegetableImagePath('romaine_lettuce') },
        { term1: 'rau cải Brussels', term2: 'brussels sprouts', image: vegetableImagePath('brussels_sprouts') },
        { term1: 'rau mùi tây', term2: 'parsley', image: vegetableImagePath('parsley') },
        { term1: 'rau húng quế', term2: 'basil', image: vegetableImagePath('basil') },
        { term1: 'rau thì là', term2: 'dill', image: vegetableImagePath('dill') },
        { term1: 'rau rau mùi', term2: 'cilantro', image: vegetableImagePath('cilantro') },
        { term1: 'lá bạc hà', term2: 'mint', image: vegetableImagePath('mint') },

        // Root vegetables (Củ)
        { term1: 'củ cà rốt', term2: 'carrot', image: vegetableImagePath('carrot') },
        { term1: 'củ khoai tây', term2: 'potato', image: vegetableImagePath('potato') },
        { term1: 'củ khoai lang', term2: 'sweet potato', image: vegetableImagePath('sweet_potato') },
        { term1: 'củ cải trắng', term2: 'radish', image: vegetableImagePath('radish') },
        { term1: 'củ cải đường', term2: 'beet', image: vegetableImagePath('beet') },
        { term1: 'củ gừng', term2: 'ginger', image: vegetableImagePath('ginger') },
        { term1: 'củ tỏi', term2: 'garlic', image: vegetableImagePath('garlic') },
        { term1: 'củ hành tây', term2: 'onion', image: vegetableImagePath('onion') },
        { term1: 'củ hành tím', term2: 'shallot', image: vegetableImagePath('shallot') },
        { term1: 'củ su hào', term2: 'turnip', image: vegetableImagePath('turnip') },
        { term1: 'củ cải đỏ', term2: 'beetroot', image: vegetableImagePath('beetroot') },
        { term1: 'củ cần tây', term2: 'celery root', image: vegetableImagePath('celery_root') },
        { term1: 'củ nghệ', term2: 'turmeric', image: vegetableImagePath('turmeric') },
        { term1: 'củ đậu', term2: 'jicama', image: vegetableImagePath('jicama') },
        { term1: 'củ cải đen', term2: 'black radish', image: vegetableImagePath('black_radish') },

        // Cruciferous vegetables (Họ cải)
        { term1: 'súp lơ xanh', term2: 'broccoli', image: vegetableImagePath('broccoli') },
        { term1: 'súp lơ trắng', term2: 'cauliflower', image: vegetableImagePath('cauliflower') },
        { term1: 'cải bruxen', term2: 'brussels sprout', image: vegetableImagePath('brussels_sprouts') },
        { term1: 'cải bắp tím', term2: 'red cabbage', image: vegetableImagePath('red_cabbage') },
        { term1: 'cải xanh', term2: 'collard greens', image: vegetableImagePath('collard_greens') },

        // Squash and gourds (Bầu bí)
        { term1: 'bí ngô', term2: 'pumpkin', image: vegetableImagePath('pumpkin') },
        { term1: 'bí đao', term2: 'winter melon', image: vegetableImagePath('winter_melon') },
        { term1: 'bí xanh', term2: 'zucchini', image: vegetableImagePath('zucchini') },
        { term1: 'bí đỏ', term2: 'butternut squash', image: vegetableImagePath('butternut_squash') },
        { term1: 'bí acorn', term2: 'acorn squash', image: vegetableImagePath('acorn_squash') },
        { term1: 'bí spaghetti', term2: 'spaghetti squash', image: vegetableImagePath('spaghetti_squash') },
        { term1: 'mướp', term2: 'loofah', image: vegetableImagePath('loofah') },
        { term1: 'mướp hương', term2: 'bitter melon', image: vegetableImagePath('bitter_melon') },

        // Legumes (Đậu)
        { term1: 'đậu Hà Lan', term2: 'pea', image: vegetableImagePath('pea') },
        { term1: 'đậu que', term2: 'green bean', image: vegetableImagePath('green_bean') },
        { term1: 'đậu cove', term2: 'snow pea', image: vegetableImagePath('snow_pea') },
        { term1: 'đậu Lima', term2: 'lima bean', image: vegetableImagePath('lima_bean') },
        { term1: 'đậu đen', term2: 'black bean', image: vegetableImagePath('black_bean') },
        { term1: 'đậu gà', term2: 'chickpea', image: vegetableImagePath('chickpea') },
        { term1: 'đậu lăng', term2: 'lentil', image: vegetableImagePath('lentil') },
        { term1: 'đậu đỏ', term2: 'kidney bean', image: vegetableImagePath('kidney_bean') },
        { term1: 'đậu nành', term2: 'soybean', image: vegetableImagePath('soybean') },
        { term1: 'đậu xanh', term2: 'mung bean', image: vegetableImagePath('mung_bean') },

        // Nightshades (Họ cà)
        { term1: 'cà chua', term2: 'tomato', image: vegetableImagePath('tomato') },
        { term1: 'cà tím', term2: 'eggplant', image: vegetableImagePath('eggplant') },
        { term1: 'ớt chuông', term2: 'bell pepper', image: vegetableImagePath('bell_pepper') },
        { term1: 'ớt', term2: 'chili pepper', image: vegetableImagePath('chili_pepper') },
        { term1: 'cà chua bi', term2: 'cherry tomato', image: vegetableImagePath('cherry_tomato') },
        { term1: 'ớt jalapeño', term2: 'jalapeño', image: vegetableImagePath('jalapeno') },

        // Stalks and stems (Thân cây)
        { term1: 'cần tây', term2: 'celery', image: vegetableImagePath('celery') },
        { term1: 'măng tây', term2: 'asparagus', image: vegetableImagePath('asparagus') },
        { term1: 'măng', term2: 'bamboo shoot', image: vegetableImagePath('bamboo_shoot') },
        { term1: 'cọng rau cần', term2: 'celery stalk', image: vegetableImagePath('celery_stalk') },
        { term1: 'rau đại hoàng', term2: 'rhubarb', image: vegetableImagePath('rhubarb') },

        // Mushrooms (Nấm)
        { term1: 'nấm', term2: 'mushroom', image: vegetableImagePath('mushroom') },
        { term1: 'nấm hương', term2: 'shiitake mushroom', image: vegetableImagePath('shiitake_mushroom') },
        { term1: 'nấm kim châm', term2: 'enoki mushroom', image: vegetableImagePath('enoki_mushroom') },
        { term1: 'nấm rơm', term2: 'straw mushroom', image: vegetableImagePath('straw_mushroom') },
        { term1: 'nấm mỡ', term2: 'button mushroom', image: vegetableImagePath('button_mushroom') },
        { term1: 'nấm portobello', term2: 'portobello mushroom', image: vegetableImagePath('portobello_mushroom') },
        { term1: 'nấm oyster', term2: 'oyster mushroom', image: vegetableImagePath('mushroom') },
        { term1: 'nấm morel', term2: 'morel mushroom', image: vegetableImagePath('mushroom') },

        // Alliums (Họ hành)
        { term1: 'hành lá', term2: 'green onion', image: vegetableImagePath('onion') },
        { term1: 'tỏi tây', term2: 'leek', image: vegetableImagePath('leek') },
        { term1: 'hành tím', term2: 'red onion', image: vegetableImagePath('onion') },
        { term1: 'hành trắng', term2: 'white onion', image: vegetableImagePath('onion') },
        { term1: 'hành vàng', term2: 'yellow onion', image: vegetableImagePath('onion') },

        // Other common vegetables
        { term1: 'dưa chuột', term2: 'cucumber', image: vegetableImagePath('cucumber') },
        { term1: 'ngô', term2: 'corn', image: vegetableImagePath('corn') },
        { term1: 'rau diếp xoăn', term2: 'curly lettuce', image: vegetableImagePath('lettuce') },
        { term1: 'rau cải ngọt', term2: 'mustard greens', image: vegetableImagePath('collard_greens') },
        { term1: 'atiso', term2: 'artichoke', image: vegetableImagePath('artichoke') },
        { term1: 'rau dền', term2: 'amaranth', image: vegetableImagePath('amaranth') },
        { term1: 'rau muống', term2: 'water spinach', image: vegetableImagePath('spinach') },
        { term1: 'cải thìa', term2: 'napa cabbage', image: vegetableImagePath('cabbage') },
        { term1: 'ớt chuông đỏ', term2: 'red bell pepper', image: vegetableImagePath('bell_pepper') },
        { term1: 'ớt chuông vàng', term2: 'yellow bell pepper', image: vegetableImagePath('bell_pepper') },
        { term1: 'ớt chuông xanh', term2: 'green bell pepper', image: vegetableImagePath('bell_pepper') },
        { term1: 'dưa chua', term2: 'pickle', image: vegetableImagePath('pickle') },
        { term1: 'dưa leo', term2: 'gherkin', image: vegetableImagePath('gherkin') },
        { term1: 'rau sam', term2: 'purslane', image: vegetableImagePath('purslane') },
        { term1: 'rau má', term2: 'pennywort', image: vegetableImagePath('pennywort') },
        { term1: 'rau ngót', term2: 'Vietnamese spinach', image: vegetableImagePath('katuk') },
        { term1: 'rau răm', term2: 'Vietnamese coriander', image: vegetableImagePath('cilantro') }
    ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VegetablesVocabulary;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.VegetablesVocabulary = VegetablesVocabulary;
}
