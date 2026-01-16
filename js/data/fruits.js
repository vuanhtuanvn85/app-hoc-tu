/**
 * Fruits Vocabulary Data - 100 Vietnamese-English word pairs
 * Chủ đề: Trái cây
 */

const FruitsVocabulary = {
    name: 'Trái cây',
    icon: '🍎',
    words: [
        // Common fruits (Trái cây phổ biến)
        { term1: 'quả táo', term2: 'apple' },
        { term1: 'quả chuối', term2: 'banana' },
        { term1: 'quả cam', term2: 'orange' },
        { term1: 'quả nho', term2: 'grape' },
        { term1: 'quả dâu tây', term2: 'strawberry' },
        { term1: 'quả dưa hấu', term2: 'watermelon' },
        { term1: 'quả chanh', term2: 'lemon' },
        { term1: 'quả chanh vàng', term2: 'lime' },
        { term1: 'quả anh đào', term2: 'cherry' },
        { term1: 'quả đào', term2: 'peach' },
        { term1: 'quả lê', term2: 'pear' },
        { term1: 'quả mận', term2: 'plum' },
        { term1: 'quả kiwi', term2: 'kiwi' },
        { term1: 'quả xoài', term2: 'mango' },
        { term1: 'quả dứa', term2: 'pineapple' },
        { term1: 'quả đu đủ', term2: 'papaya' },
        { term1: 'quả dừa', term2: 'coconut' },
        { term1: 'quả bơ', term2: 'avocado' },
        { term1: 'quả lựu', term2: 'pomegranate' },
        { term1: 'quả sung', term2: 'fig' },

        // Berries (Quả mọng)
        { term1: 'quả việt quất', term2: 'blueberry' },
        { term1: 'quả mâm xôi', term2: 'raspberry' },
        { term1: 'quả dâu đen', term2: 'blackberry' },
        { term1: 'quả nam việt quất', term2: 'cranberry' },
        { term1: 'quả nho khô', term2: 'raisin' },
        { term1: 'quả mọng', term2: 'berry' },
        { term1: 'quả dâu tằm', term2: 'mulberry' },
        { term1: 'quả goji', term2: 'goji berry' },

        // Citrus fruits (Họ cam quýt)
        { term1: 'quả bưởi', term2: 'grapefruit' },
        { term1: 'quả quýt', term2: 'mandarin' },
        { term1: 'quả cam quýt', term2: 'tangerine' },
        { term1: 'quả cam clementine', term2: 'clementine' },
        { term1: 'quả cam máu', term2: 'blood orange' },

        // Tropical fruits (Trái cây nhiệt đới)
        { term1: 'quả vải', term2: 'lychee' },
        { term1: 'quả chôm chôm', term2: 'rambutan' },
        { term1: 'quả măng cụt', term2: 'mangosteen' },
        { term1: 'quả sầu riêng', term2: 'durian' },
        { term1: 'quả long nhãn', term2: 'longan' },
        { term1: 'quả thanh long', term2: 'dragon fruit' },
        { term1: 'quả nhãn', term2: 'logan' },
        { term1: 'quả ổi', term2: 'guava' },
        { term1: 'quả mãng cầu', term2: 'soursop' },
        { term1: 'quả na', term2: 'custard apple' },
        { term1: 'quả mít', term2: 'jackfruit' },
        { term1: 'quả chà là', term2: 'date' },
        { term1: 'quả passion fruit', term2: 'passion fruit' },
        { term1: 'quả chuối tiêu', term2: 'plantain' },
        { term1: 'quả sapoche', term2: 'sapodilla' },
        { term1: 'quả khế', term2: 'star fruit' },

        // Melons (Các loại dưa)
        { term1: 'quả dưa vàng', term2: 'cantaloupe' },
        { term1: 'quả dưa lưới', term2: 'honeydew melon' },
        { term1: 'quả dưa gang', term2: 'muskmelon' },
        { term1: 'quả dưa hấu không hạt', term2: 'seedless watermelon' },

        // Stone fruits (Quả có hạt cứng)
        { term1: 'quả mơ', term2: 'apricot' },
        { term1: 'quả nectarine', term2: 'nectarine' },
        { term1: 'quả mận khô', term2: 'prune' },

        // Other fruits (Các loại khác)
        { term1: 'quả hồng', term2: 'persimmon' },
        { term1: 'quả mâm xôi vàng', term2: 'golden raspberry' },
        { term1: 'quả cà chua', term2: 'tomato' },
        { term1: 'quả dâu tây trắng', term2: 'white strawberry' },
        { term1: 'quả roi', term2: 'tamarind' },
        { term1: 'quả lý chua', term2: 'plum' },
        { term1: 'quả táo xanh', term2: 'green apple' },
        { term1: 'quả táo đỏ', term2: 'red apple' },
        { term1: 'quả nho xanh', term2: 'green grape' },
        { term1: 'quả nho đỏ', term2: 'red grape' },
        { term1: 'quả nho tím', term2: 'purple grape' },
        { term1: 'quả dưa chuột', term2: 'cucumber' },

        // Nuts (also fruits botanically)
        { term1: 'quả hạnh nhân', term2: 'almond' },
        { term1: 'quả óc chó', term2: 'walnut' },
        { term1: 'quả hạt dẻ', term2: 'chestnut' },
        { term1: 'quả hạt phỉ', term2: 'hazelnut' },
        { term1: 'quả hạt điều', term2: 'cashew' },
        { term1: 'quả hạt hồ trăn', term2: 'macadamia' },
        { term1: 'quả hạt bồ đào', term2: 'pecan' },
        { term1: 'quả hạt thông', term2: 'pine nut' },
        { term1: 'quả đậu phộng', term2: 'peanut' },
        { term1: 'quả hạt dẻ cười', term2: 'pistachio' },

        // Exotic fruits (Trái cây kỳ lạ)
        { term1: 'quả pitaya', term2: 'pitaya' },
        { term1: 'quả ác quỷ', term2: 'horned melon' },
        { term1: 'quả bàn tay phật', term2: "buddha's hand" },
        { term1: 'quả miracle berry', term2: 'miracle berry' },
        { term1: 'quả jabuticaba', term2: 'jabuticaba' },
        { term1: 'quả rambai', term2: 'rambai' },
        { term1: 'quả salak', term2: 'salak' },
        { term1: 'quả ackee', term2: 'ackee' },
        { term1: 'quả cherimoya', term2: 'cherimoya' },
        { term1: 'quả feijoa', term2: 'feijoa' },

        // Additional common fruits
        { term1: 'quả dâu tây dại', term2: 'wild strawberry' },
        { term1: 'quả mận vàng', term2: 'yellow plum' },
        { term1: 'quả quả mọng đen', term2: 'blackcurrant' },
        { term1: 'quả mọng đỏ', term2: 'redcurrant' },
        { term1: 'quả elder', term2: 'elderberry' },
        { term1: 'quả dâu tây lớn', term2: 'giant strawberry' }
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
