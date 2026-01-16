/**
 * Fruits Vocabulary Data - 100 Vietnamese-English word pairs
 * Chủ đề: Trái cây
 */

const fruitImagePath = (fileName) => `images/fruits/${fileName}.jpg`;

const FruitsVocabulary = {
    name: 'Trái cây',
    icon: '🍎',
    words: [
        // Common fruits (Trái cây phổ biến)
        { term1: 'quả táo', term2: 'apple', image: fruitImagePath('apple') },
        { term1: 'quả chuối', term2: 'banana', image: fruitImagePath('banana') },
        { term1: 'quả cam', term2: 'orange', image: fruitImagePath('orange') },
        { term1: 'quả nho', term2: 'grape', image: fruitImagePath('grape') },
        { term1: 'quả dâu tây', term2: 'strawberry', image: fruitImagePath('strawberry') },
        { term1: 'quả dưa hấu', term2: 'watermelon', image: fruitImagePath('watermelon') },
        { term1: 'quả chanh', term2: 'lemon', image: fruitImagePath('lemon') },
        { term1: 'quả chanh vàng', term2: 'lime', image: fruitImagePath('lime') },
        { term1: 'quả anh đào', term2: 'cherry', image: fruitImagePath('cherry') },
        { term1: 'quả đào', term2: 'peach', image: fruitImagePath('peach') },
        { term1: 'quả lê', term2: 'pear', image: fruitImagePath('pear') },
        { term1: 'quả mận', term2: 'plum', image: fruitImagePath('plum') },
        { term1: 'quả kiwi', term2: 'kiwi', image: fruitImagePath('kiwi') },
        { term1: 'quả xoài', term2: 'mango', image: fruitImagePath('mango') },
        { term1: 'quả dứa', term2: 'pineapple', image: fruitImagePath('pineapple') },
        { term1: 'quả đu đủ', term2: 'papaya', image: fruitImagePath('papaya') },
        { term1: 'quả dừa', term2: 'coconut', image: fruitImagePath('coconut') },
        { term1: 'quả bơ', term2: 'avocado', image: fruitImagePath('avocado') },
        { term1: 'quả lựu', term2: 'pomegranate', image: fruitImagePath('pomegranate') },
        { term1: 'quả sung', term2: 'fig', image: fruitImagePath('date') },

        // Berries (Quả mọng)
        { term1: 'quả việt quất', term2: 'blueberry', image: fruitImagePath('blueberry') },
        { term1: 'quả mâm xôi', term2: 'raspberry', image: fruitImagePath('raspberry') },
        { term1: 'quả dâu đen', term2: 'blackberry', image: fruitImagePath('blackberry') },
        { term1: 'quả nam việt quất', term2: 'cranberry', image: fruitImagePath('cranberry') },
        { term1: 'quả nho khô', term2: 'raisin', image: fruitImagePath('raisin') },
        { term1: 'quả mọng', term2: 'berry', image: fruitImagePath('berry') },
        { term1: 'quả dâu tằm', term2: 'mulberry', image: fruitImagePath('blackberry') },
        { term1: 'quả goji', term2: 'goji berry', image: fruitImagePath('goji_berry') },

        // Citrus fruits (Họ cam quýt)
        { term1: 'quả bưởi', term2: 'grapefruit', image: fruitImagePath('grapefruit') },
        { term1: 'quả quýt', term2: 'mandarin', image: fruitImagePath('mandarin') },
        { term1: 'quả cam quýt', term2: 'tangerine', image: fruitImagePath('tangerine') },
        { term1: 'quả cam clementine', term2: 'clementine', image: fruitImagePath('clementine') },
        { term1: 'quả cam máu', term2: 'blood orange', image: fruitImagePath('blood_orange') },

        // Tropical fruits (Trái cây nhiệt đới)
        { term1: 'quả vải', term2: 'lychee', image: fruitImagePath('lychee') },
        { term1: 'quả chôm chôm', term2: 'rambutan', image: fruitImagePath('rambutan') },
        { term1: 'quả măng cụt', term2: 'mangosteen', image: fruitImagePath('cherimoya') },
        { term1: 'quả sầu riêng', term2: 'durian', image: fruitImagePath('durian') },
        { term1: 'quả long nhãn', term2: 'longan', image: fruitImagePath('longan') },
        { term1: 'quả thanh long', term2: 'dragon fruit', image: fruitImagePath('dragon_fruit') },
        { term1: 'quả nhãn', term2: 'logan', image: fruitImagePath('logan') },
        { term1: 'quả ổi', term2: 'guava', image: fruitImagePath('guava') },
        { term1: 'quả mãng cầu', term2: 'soursop', image: fruitImagePath('soursop') },
        { term1: 'quả na', term2: 'custard apple', image: fruitImagePath('custard_apple') },
        { term1: 'quả mít', term2: 'jackfruit', image: fruitImagePath('jackfruit') },
        { term1: 'quả chà là', term2: 'date', image: fruitImagePath('date') },
        { term1: 'quả passion fruit', term2: 'passion fruit', image: fruitImagePath('dragon_fruit') },
        { term1: 'quả chuối tiêu', term2: 'plantain', image: fruitImagePath('plantain') },
        { term1: 'quả sapoche', term2: 'sapodilla', image: fruitImagePath('sapodilla') },
        { term1: 'quả khế', term2: 'star fruit', image: fruitImagePath('star_fruit') },

        // Melons (Các loại dưa)
        { term1: 'quả dưa vàng', term2: 'cantaloupe', image: fruitImagePath('cantaloupe') },
        { term1: 'quả dưa lưới', term2: 'honeydew melon', image: fruitImagePath('honeydew_melon') },
        { term1: 'quả dưa gang', term2: 'muskmelon', image: fruitImagePath('cantaloupe') },
        { term1: 'quả dưa hấu không hạt', term2: 'seedless watermelon', image: fruitImagePath('seedless_watermelon') },

        // Stone fruits (Quả có hạt cứng)
        { term1: 'quả mơ', term2: 'apricot', image: fruitImagePath('apricot') },
        { term1: 'quả nectarine', term2: 'nectarine', image: fruitImagePath('peach') },
        { term1: 'quả mận khô', term2: 'prune', image: fruitImagePath('prune') },

        // Other fruits (Các loại khác)
        { term1: 'quả hồng', term2: 'persimmon', image: fruitImagePath('persimmon') },
        { term1: 'quả mâm xôi vàng', term2: 'golden raspberry', image: fruitImagePath('golden_raspberry') },
        { term1: 'quả cà chua', term2: 'tomato', image: fruitImagePath('tomato') },
        { term1: 'quả dâu tây trắng', term2: 'white strawberry', image: fruitImagePath('white_strawberry') },
        { term1: 'quả roi', term2: 'tamarind', image: fruitImagePath('tamarind') },
        { term1: 'quả lý chua', term2: 'plum', image: fruitImagePath('plum') },
        { term1: 'quả táo xanh', term2: 'green apple', image: fruitImagePath('green_apple') },
        { term1: 'quả táo đỏ', term2: 'red apple', image: fruitImagePath('red_apple') },
        { term1: 'quả nho xanh', term2: 'green grape', image: fruitImagePath('green_grape') },
        { term1: 'quả nho đỏ', term2: 'red grape', image: fruitImagePath('red_grape') },
        { term1: 'quả nho tím', term2: 'purple grape', image: fruitImagePath('purple_grape') },
        { term1: 'quả dưa chuột', term2: 'cucumber', image: fruitImagePath('cucumber') },

        // Nuts (also fruits botanically)
        { term1: 'quả hạnh nhân', term2: 'almond', image: fruitImagePath('almond') },
        { term1: 'quả óc chó', term2: 'walnut', image: fruitImagePath('walnut') },
        { term1: 'quả hạt dẻ', term2: 'chestnut', image: fruitImagePath('chestnut') },
        { term1: 'quả hạt phỉ', term2: 'hazelnut', image: fruitImagePath('hazelnut') },
        { term1: 'quả hạt điều', term2: 'cashew', image: fruitImagePath('cashew') },
        { term1: 'quả hạt hồ trăn', term2: 'macadamia', image: fruitImagePath('macadamia') },
        { term1: 'quả hạt bồ đào', term2: 'pecan', image: fruitImagePath('pecan') },
        { term1: 'quả hạt thông', term2: 'pine nut', image: fruitImagePath('pine_nut') },
        { term1: 'quả đậu phộng', term2: 'peanut', image: fruitImagePath('peanut') },
        { term1: 'quả hạt dẻ cười', term2: 'pistachio', image: fruitImagePath('pistachio') },

        // Exotic fruits (Trái cây kỳ lạ)
        { term1: 'quả pitaya', term2: 'pitaya', image: fruitImagePath('pitaya') },
        { term1: 'quả ác quỷ', term2: 'horned melon', image: fruitImagePath('cantaloupe') },
        { term1: 'quả bàn tay phật', term2: "buddha's hand", image: fruitImagePath('lemon') },
        { term1: 'quả miracle berry', term2: 'miracle berry', image: fruitImagePath('miracle_berry') },
        { term1: 'quả jabuticaba', term2: 'jabuticaba', image: fruitImagePath('jabuticaba') },
        { term1: 'quả rambai', term2: 'rambai', image: fruitImagePath('rambai') },
        { term1: 'quả salak', term2: 'salak', image: fruitImagePath('salak') },
        { term1: 'quả ackee', term2: 'ackee', image: fruitImagePath('ackee') },
        { term1: 'quả cherimoya', term2: 'cherimoya', image: fruitImagePath('cherimoya') },
        { term1: 'quả feijoa', term2: 'feijoa', image: fruitImagePath('feijoa') },

        // Additional common fruits
        { term1: 'quả dâu tây dại', term2: 'wild strawberry', image: fruitImagePath('strawberry') },
        { term1: 'quả mận vàng', term2: 'yellow plum', image: fruitImagePath('yellow_plum') },
        { term1: 'quả quả mọng đen', term2: 'blackcurrant', image: fruitImagePath('blackcurrant') },
        { term1: 'quả mọng đỏ', term2: 'redcurrant', image: fruitImagePath('redcurrant') },
        { term1: 'quả elder', term2: 'elderberry', image: fruitImagePath('blackberry') },
        { term1: 'quả dâu tây lớn', term2: 'giant strawberry', image: fruitImagePath('giant_strawberry') }
    ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FruitsVocabulary;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.FruitsVocabulary = FruitsVocabulary;
}
