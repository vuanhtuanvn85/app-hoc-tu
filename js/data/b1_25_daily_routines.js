// b1_25_daily_routines.js
// B1.25 Daily Routines
const B1_25_Daily_Routines = {
    id: 'b1_25_daily_routines',
    name: 'Daily Routines',
    icon: '📅',
    isParent: false,
    words: [
        {
            "term1": "thức dậy",
            "term2": "wake up",
            "ipa": "/weɪk ʌp/",
            "example": "I usually wake up at 6 AM every morning."
        },
        {
            "term1": "rời giường",
            "term2": "get up",
            "ipa": "/ɡet ʌp/",
            "example": "It's hard to get up on cold winter mornings."
        },
        {
            "term1": "đánh răng",
            "term2": "brush your teeth",
            "ipa": "/brʌʃ jɔːr tiːθ/",
            "example": "You should brush your teeth at least twice a day."
        },
        {
            "term1": "rửa mặt",
            "term2": "wash your face",
            "ipa": "/wɒʃ jɔːr feɪs/",
            "example": "I wash my face with cold water to feel more awake."
        },
        {
            "term1": "tắm vòi sen",
            "term2": "take a shower",
            "ipa": "/teɪk ə ˈʃaʊə(r)/",
            "example": "I always take a shower after my morning workout."
        },
        {
            "term1": "tắm bồn",
            "term2": "take a bath",
            "ipa": "/teɪk ə bɑːθ/",
            "example": "She likes to take a warm bath to relax before bed."
        },
        {
            "term1": "mặc quần áo",
            "term2": "get dressed",
            "ipa": "/ɡet drest/",
            "example": "He got dressed quickly because he was late for work."
        },
        {
            "term1": "chải tóc",
            "term2": "comb/brush your hair",
            "ipa": "/kəʊm/ /brʌʃ jɔːr heə(r)/",
            "example": "She spent ten minutes brushing her long hair."
        },
        {
            "term1": "ăn sáng",
            "term2": "have breakfast",
            "ipa": "/hæv ˈbrekfəst/",
            "example": "I usually have breakfast with my family."
        },
        {
            "term1": "đi làm",
            "term2": "go to work",
            "ipa": "/ɡəʊ tu wɜːrk/",
            "example": "I go to work by bus every day."
        },
        {
            "term1": "đi học",
            "term2": "go to school",
            "ipa": "/ɡəʊ tu skuːl/",
            "example": "The children go to school at 7:30 AM."
        },
        {
            "term1": "bắt đầu công việc",
            "term2": "start work",
            "ipa": "/stɑːrt wɜːrk/",
            "example": "I start work at 8:30 in the morning."
        },
        {
            "term1": "ăn trưa",
            "term2": "have lunch",
            "ipa": "/hæv lʌntʃ/",
            "example": "We usually have lunch in the office canteen."
        },
        {
            "term1": "kết thúc công việc",
            "term2": "finish work",
            "ipa": "/ˈfɪnɪʃ wɜːrk/",
            "example": "I usually finish work at 5 PM."
        },
        {
            "term1": "về nhà",
            "term2": "go home",
            "ipa": "/ɡəʊ həʊm/",
            "example": "I'm tired and I want to go home now."
        },
        {
            "term1": "nấu bữa tối",
            "term2": "cook dinner",
            "ipa": "/kʊk ˈdɪnə(r)/",
            "example": "My father often cooks dinner on weekends."
        },
        {
            "term1": "ăn tối",
            "term2": "have dinner",
            "ipa": "/hæv ˈdɪnə(r)/",
            "example": "We have dinner together at 7 PM."
        },
        {
            "term1": "xem TV",
            "term2": "watch TV",
            "ipa": "/wɒtʃ ˌtiː ˈviː/",
            "example": "I watch TV for an hour before going to bed."
        },
        {
            "term1": "đọc sách",
            "term2": "read a book",
            "ipa": "/riːd ə bʊk/",
            "example": "Reading a book helps me fall asleep faster."
        },
        {
            "term1": "đi ngủ",
            "term2": "go to bed",
            "ipa": "/ɡəʊ tu bed/",
            "example": "It's time to go to bed now."
        },
        {
            "term1": "ngủ",
            "term2": "sleep",
            "ipa": "/sliːp/",
            "example": "I need at least eight hours of sleep to feel good."
        },
        {
            "term1": "ngủ gật",
            "term2": "fall asleep",
            "ipa": "/fɔːl əˈsliːp/",
            "example": "I fell asleep while watching the movie."
        },
        {
            "term1": "làm việc nhà",
            "term2": "do housework",
            "ipa": "/du ˈhaʊswɜːrk/",
            "example": "I usually do housework on Saturday mornings."
        },
        {
            "term1": "đi mua sắm đồ ăn",
            "term2": "go grocery shopping",
            "ipa": "/ɡəʊ ˈɡrəʊsəri ˈʃɒpɪŋ/",
            "example": "We go grocery shopping once a week."
        },
        {
            "term1": "ủi quần áo",
            "term2": "iron the clothes",
            "ipa": "/ˈaɪən ðə kləʊðz/",
            "example": "I hate ironing the clothes; it's so boring."
        },
        {
            "term1": "giặt quần áo",
            "term2": "do the laundry",
            "ipa": "/du ðə ˈlɔːndri/",
            "example": "I do the laundry every Sunday."
        },
        {
            "term1": "rửa bát",
            "term2": "wash the dishes",
            "ipa": "/wɒʃ ðə dɪʃɪz/",
            "example": "It's your turn to wash the dishes tonight."
        },
        {
            "term1": "dọn dẹp",
            "term2": "tidy up",
            "ipa": "/ˈtaɪdi ʌp/",
            "example": "I need to tidy up my room; it's a mess."
        },
        {
            "term1": "tập thể dục",
            "term2": "do exercise",
            "ipa": "/du ˈeksəsaɪz/",
            "example": "Doing exercise regularly is good for your health."
        },
        {
            "term1": "đi dạo",
            "term2": "go for a walk",
            "ipa": "/ɡəʊ fɔːr ə wɔːk/",
            "example": "Let's go for a walk in the park."
        },
        {
            "term1": "dắt chó đi dạo",
            "term2": "walk the dog",
            "ipa": "/wɔːk ðə dɒɡ/",
            "example": "He walks the dog every morning before breakfast."
        },
        {
            "term1": "kiểm tra email",
            "term2": "check email",
            "ipa": "/tʃek ˈiːmeɪl/",
            "example": "The first thing I do at work is check my email."
        },
        {
            "term1": "lướt internet",
            "term2": "surf the internet",
            "ipa": "/sɜːrf ðə ˈɪntənet/",
            "example": "I spend too much time surfing the internet."
        },
        {
            "term1": "nghe nhạc",
            "term2": "listen to music",
            "ipa": "/ˈlɪsn tu ˈmjuːzɪk/",
            "example": "Listening to music helps me concentrate while I work."
        }
    ]
};

// Make it available globally
window.B1_25_Daily_Routines = B1_25_Daily_Routines;