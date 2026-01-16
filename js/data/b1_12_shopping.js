// b1_12_shopping.js
// B1.12 Shopping
const B1_12_Shopping = {
    id: 'b1_12_shopping',
    name: 'Shopping',
    icon: '🛒',
    isParent: false,
    words: [
        {
            "term1": "quảng cáo",
            "term2": "advertisement",
            "ipa": "/ədˈvɜːtɪsmənt/",
            "example": "I saw an advertisement for the new smartphone on TV."
        },
        {
            "term1": "giá cả phải chăng",
            "term2": "affordable",
            "ipa": "/əˈfɔːdəbl/",
            "example": "The shop offers high-quality clothes at affordable prices."
        },
        {
            "term1": "mặc cả",
            "term2": "bargain",
            "ipa": "/ˈbɑːɡən/",
            "example": "I got a real bargain at the market today."
        },
        {
            "term1": "hóa đơn",
            "term2": "bill",
            "ipa": "/bɪl/",
            "example": "Can I have the bill for these items, please?"
        },
        {
            "term1": "nhãn hiệu",
            "term2": "brand",
            "ipa": "/brænd/",
            "example": "This is my favorite brand of shoes."
        },
        {
            "term1": "tiền mặt",
            "term2": "cash",
            "ipa": "/kæʃ/",
            "example": "Would you like to pay by cash or credit card?"
        },
        {
            "term1": "quầy thu ngân",
            "term2": "cashier",
            "ipa": "/kæˈʃɪə(r)/",
            "example": "The cashier gave me the wrong change."
        },
        {
            "term1": "tiền lẻ, tiền thối lại",
            "term2": "change",
            "ipa": "/tʃeɪndʒ/",
            "example": "Don't forget your change!"
        },
        {
            "term1": "rẻ",
            "term2": "cheap",
            "ipa": "/tʃiːp/",
            "example": "I'm looking for a cheap pair of sunglasses."
        },
        {
            "term1": "phàn nàn",
            "term2": "complain",
            "ipa": "/kəmˈpleɪn/",
            "example": "I'm going to complain about the poor service."
        },
        {
            "term1": "chi phí",
            "term2": "cost",
            "ipa": "/kɒst/",
            "example": "How much does this laptop cost?"
        },
        {
            "term1": "thẻ tín dụng",
            "term2": "credit card",
            "ipa": "/ˈkredɪt kɑːd/",
            "example": "I prefer paying by credit card."
        },
        {
            "term1": "khách hàng",
            "term2": "customer",
            "ipa": "/ˈkʌstəmə(r)/",
            "example": "The shop was full of customers during the sale."
        },
        {
            "term1": "giảm giá",
            "term2": "discount",
            "ipa": "/ˈdɪskaʊnt/",
            "example": "Students get a 10% discount at this store."
        },
        {
            "term1": "đổi (hàng)",
            "term2": "exchange",
            "ipa": "/ɪksˈtʃeɪndʒ/",
            "example": "Can I exchange this shirt for a larger size?"
        },
        {
            "term1": "đắt",
            "term2": "expensive",
            "ipa": "/ɪkˈspensɪv/",
            "example": "That watch is too expensive for me."
        },
        {
            "term1": "phòng thử đồ",
            "term2": "fitting room",
            "ipa": "/ˈfɪtɪŋ ruːm/",
            "example": "The fitting rooms are at the back of the store."
        },
        {
            "term1": "miễn phí",
            "term2": "free",
            "ipa": "/friː/",
            "example": "Buy one, get one free!"
        },
        {
            "term1": "hàng hóa",
            "term2": "goods",
            "ipa": "/ɡʊdz/",
            "example": "The store sells a variety of household goods."
        },
        {
            "term1": "nhãn (giá)",
            "term2": "label",
            "ipa": "/ˈleɪbl/",
            "example": "Check the label for washing instructions."
        },
        {
            "term1": "thị trường / chợ",
            "term2": "market",
            "ipa": "/ˈmɑːkɪt/",
            "example": "We buy fresh vegetables at the local market."
        },
        {
            "term1": "trực tuyến",
            "term2": "online",
            "ipa": "/ˌɒnˈlaɪn/",
            "example": "I do most of my shopping online."
        },
        {
            "term1": "thanh toán",
            "term2": "pay",
            "ipa": "/peɪ/",
            "example": "Where do I pay for these items?"
        },
        {
            "term1": "giá",
            "term2": "price",
            "ipa": "/praɪs/",
            "example": "The price of petrol has gone up again."
        },
        {
            "term1": "biên lai",
            "term2": "receipt",
            "ipa": "/rɪˈsiːt/",
            "example": "Keep your receipt in case you want to return the item."
        },
        {
            "term1": "hoàn tiền",
            "term2": "refund",
            "ipa": "/ˈriːfʌnd/",
            "example": "I'd like a refund, please. This camera doesn't work."
        },
        {
            "term1": "đợt giảm giá",
            "term2": "sale",
            "ipa": "/seɪl/",
            "example": "I bought this dress in the January sales."
        },
        {
            "term1": "người bán hàng",
            "term2": "shop assistant",
            "ipa": "/ˈʃɒp əˌsɪstənt/",
            "example": "The shop assistant was very helpful."
        },
        {
            "term1": "trung tâm thương mại",
            "term2": "shopping center",
            "ipa": "/ˈʃɒpɪŋ ˌsentə(r)/",
            "example": "The new shopping center has over 200 stores."
        },
        {
            "term1": "chi tiêu",
            "term2": "spend",
            "ipa": "/spend/",
            "example": "How much did you spend on your new car?"
        },
        {
            "term1": "siêu thị",
            "term2": "supermarket",
            "ipa": "/ˈsuːpəmɑːkɪt/",
            "example": "I need to go to the supermarket to buy some milk."
        },
        {
            "term1": "thử (đồ)",
            "term2": "try on",
            "ipa": "/traɪ ɒn/",
            "example": "You should try on the jeans before you buy them."
        },
        {
            "term1": "ví (nam)",
            "term2": "wallet",
            "ipa": "/ˈwɒlɪt/",
            "example": "I forgot my wallet at home."
        }
    ]
};

// Make it available globally
window.B1_12_Shopping = B1_12_Shopping;