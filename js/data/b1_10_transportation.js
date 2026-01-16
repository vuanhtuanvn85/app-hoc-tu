// b1_10_transportation.js
// B1.10 Transportation
const B1_10_Transportation = {
    id: 'b1_10_transportation',
    name: 'Transportation',
    icon: '🚗',
    isParent: false,
    words: [
        {
            "term1": "sân bay",
            "term2": "airport",
            "ipa": "/ˈeəpɔːt/",
            "example": "We need to be at the airport three hours before our flight."
        },
        {
            "term1": "sự đến nơi",
            "term2": "arrival",
            "ipa": "/əˈraɪvl/",
            "example": "The screen shows the arrival times for all flights."
        },
        {
            "term1": "đại lộ",
            "term2": "avenue",
            "ipa": "/ˈævənjuː/",
            "example": "The hotel is located on a wide avenue with many trees."
        },
        {
            "term1": "xe đạp",
            "term2": "bicycle / bike",
            "ipa": "/ˈbaɪsɪkl/ /baɪk/",
            "example": "I ride my bicycle to school every day."
        },
        {
            "term1": "thuyền",
            "term2": "boat",
            "ipa": "/bəʊt/",
            "example": "We took a boat trip around the island."
        },
        {
            "term1": "cây cầu",
            "term2": "bridge",
            "ipa": "/brɪdʒ/",
            "example": "The city is famous for its beautiful old bridge."
        },
        {
            "term1": "xe buýt",
            "term2": "bus",
            "ipa": "/bʌs/",
            "example": "I take the bus to work in the morning."
        },
        {
            "term1": "trạm xe buýt",
            "term2": "bus stop",
            "ipa": "/bʌs stɒp/",
            "example": "Is there a bus stop near here?"
        },
        {
            "term1": "xe ô tô",
            "term2": "car",
            "ipa": "/kɑː(r)/",
            "example": "My family bought a new car last month."
        },
        {
            "term1": "đi lại (giữa nhà và nơi làm)",
            "term2": "commute",
            "ipa": "/kəˈmjuːt/",
            "example": "My daily commute takes about 45 minutes."
        },
        {
            "term1": "ngã tư",
            "term2": "crossroads",
            "ipa": "/ˈkrɒsrəʊdz/",
            "example": "Turn left at the next crossroads."
        },
        {
            "term1": "đông đúc",
            "term2": "crowded",
            "ipa": "/ˈkraʊdɪd/",
            "example": "The train was very crowded this morning."
        },
        {
            "term1": "sự trì hoãn",
            "term2": "delay",
            "ipa": "/dɪˈleɪ/",
            "example": "Our flight had a two-hour delay."
        },
        {
            "term1": "sự khởi hành",
            "term2": "departure",
            "ipa": "/dɪˈpɑːtʃə(r)/",
            "example": "The departure time is 9:00 AM."
        },
        {
            "term1": "lái xe",
            "term2": "drive",
            "ipa": "/draɪv/",
            "example": "Can you drive me to the station?"
        },
        {
            "term1": "tài xế",
            "term2": "driver",
            "ipa": "/ˈdraɪvə(r)/",
            "example": "The taxi driver was very friendly."
        },
        {
            "term1": "động cơ",
            "term2": "engine",
            "ipa": "/ˈendʒɪn/",
            "example": "There's something wrong with the car's engine."
        },
        {
            "term1": "giá vé (xe buýt, taxi...)",
            "term2": "fare",
            "ipa": "/feə(r)/",
            "example": "What's the bus fare to the city center?"
        },
        {
            "term1": "bay",
            "term2": "fly",
            "ipa": "/flaɪ/",
            "example": "We are going to fly to Singapore for our holiday."
        },
        {
            "term1": "ga-ra, tiệm sửa xe",
            "term2": "garage",
            "ipa": "/ˈɡærɑːʒ/",
            "example": "I took my car to the garage to be repaired."
        },
        {
            "term1": "lên (xe)",
            "term2": "get on",
            "ipa": "/ɡet ɒn/",
            "example": "We need to get on the bus quickly."
        },
        {
            "term1": "xuống (xe)",
            "term2": "get off",
            "ipa": "/ɡet ɒf/",
            "example": "I get off at the next stop."
        },
        {
            "term1": "xa lộ",
            "term2": "highway",
            "ipa": "/ˈhaɪweɪ/",
            "example": "We drove along the highway to get to the next town."
        },
        {
            "term1": "hành trình",
            "term2": "journey",
            "ipa": "/ˈdʒɜːni/",
            "example": "How long is the journey by train?"
        },
        {
            "term1": "bằng lái",
            "term2": "license",
            "ipa": "/ˈlaɪsns/",
            "example": "You need a driver's license to drive a car."
        },
        {
            "term1": "tuyến (tàu điện)",
            "term2": "line",
            "ipa": "/laɪn/",
            "example": "Which line do I take to get to the museum?"
        },
        {
            "term1": "đường cao tốc",
            "term2": "motorway",
            "ipa": "/ˈməʊtəweɪ/",
            "example": "The speed limit on the motorway is 120 km/h."
        },
        {
            "term1": "xe máy",
            "term2": "motorcycle",
            "ipa": "/ˈməʊtəsaɪkl/",
            "example": "He rides his motorcycle to work."
        },
        {
            "term1": "đỗ xe",
            "term2": "park",
            "ipa": "/pɑːk/",
            "example": "It's difficult to park in the city center."
        },
        {
            "term1": "hành khách",
            "term2": "passenger",
            "ipa": "/ˈpæsɪndʒə(r)/",
            "example": "All passengers must show their tickets."
        },
        {
            "term1": "lối mòn, đường nhỏ",
            "term2": "path",
            "ipa": "/pɑːθ/",
            "example": "There's a beautiful path through the forest."
        },
        {
            "term1": "trạm xăng",
            "term2": "petrol station",
            "ipa": "/ˈpetrəl steɪʃn/",
            "example": "I need to stop at a petrol station to fill up the car."
        },
        {
            "term1": "phi công",
            "term2": "pilot",
            "ipa": "/ˈpaɪlət/",
            "example": "The pilot announced we would be landing soon."
        },
        {
            "term1": "sân ga",
            "term2": "platform",
            "ipa": "/ˈplætfɔːm/",
            "example": "The train for London is on platform 2."
        },
        {
            "term1": "phương tiện công cộng",
            "term2": "public transport",
            "ipa": "/ˌpʌblɪk ˈtrænspɔːt/",
            "example": "I prefer using public transport to driving."
        },
        {
            "term1": "đường sắt",
            "term2": "railway",
            "ipa": "/ˈreɪlweɪ/",
            "example": "The railway connects all the major cities."
        },
        {
            "term1": "đi xe (đạp, máy) / chuyến đi",
            "term2": "ride",
            "ipa": "/raɪd/",
            "example": "Let's go for a bike ride this afternoon."
        },
        {
            "term1": "con đường",
            "term2": "road",
            "ipa": "/rəʊd/",
            "example": "Be careful when you cross the road."
        },
        {
            "term1": "vòng xuyến",
            "term2": "roundabout",
            "ipa": "/ˈraʊndəbaʊt/",
            "example": "Take the third exit at the roundabout."
        },
        {
            "term1": "tuyến đường, lộ trình",
            "term2": "route",
            "ipa": "/ruːt/",
            "example": "What's the best route to the airport?"
        },
        {
            "term1": "giờ cao điểm",
            "term2": "rush hour",
            "ipa": "/ˈrʌʃ aʊə(r)/",
            "example": "The traffic is always bad during rush hour."
        },
        {
            "term1": "dây an toàn",
            "term2": "seatbelt",
            "ipa": "/ˈsiːtbelt/",
            "example": "You must wear your seatbelt at all times."
        },
        {
            "term1": "tàu thủy",
            "term2": "ship",
            "ipa": "/ʃɪp/",
            "example": "The goods were transported by ship."
        },
        {
            "term1": "giới hạn tốc độ",
            "term2": "speed limit",
            "ipa": "/spiːd ˈlɪmɪt/",
            "example": "The speed limit in this area is 50 km/h."
        },
        {
            "term1": "nhà ga",
            "term2": "station",
            "ipa": "/ˈsteɪʃn/",
            "example": "I'll meet you at the train station."
        },
        {
            "term1": "đường phố",
            "term2": "street",
            "ipa": "/striːt/",
            "example": "My house is at the end of this street."
        },
        {
            "term1": "tàu điện ngầm",
            "term2": "subway",
            "ipa": "/ˈsʌbweɪ/",
            "example": "Let's take the subway; it's faster."
        },
        {
            "term1": "xe taxi",
            "term2": "taxi",
            "ipa": "/ˈtæksi/",
            "example": "We took a taxi from the airport to our hotel."
        },
        {
            "term1": "vé",
            "term2": "ticket",
            "ipa": "/ˈtɪkɪt/",
            "example": "I bought a return ticket to Paris."
        },
        {
            "term1": "tắc đường",
            "term2": "traffic jam",
            "ipa": "/ˈtræfɪk dʒæm/",
            "example": "We were stuck in a traffic jam for an hour."
        }
    ]
};

// Make it available globally
window.B1_10_Transportation = B1_10_Transportation;