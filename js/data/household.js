/**
 * Household Items Vocabulary Data - 100 Vietnamese-English word pairs
 * Chủ đề: Đồ vật trong nhà
 */

const HouseholdVocabulary = {
    name: 'Đồ vật trong nhà',
    icon: '🏠',
    words: [
        // Living room (Phòng khách)
        { term1: 'ghế sofa', term2: 'sofa' },
        { term1: 'bàn cà phê', term2: 'coffee table' },
        { term1: 'ti vi', term2: 'television' },
        { term1: 'gối', term2: 'pillow' },
        { term1: 'thảm', term2: 'carpet' },
        { term1: 'đèn', term2: 'lamp' },
        { term1: 'rèm cửa', term2: 'curtain' },
        { term1: 'ghế bành', term2: 'armchair' },
        { term1: 'kệ sách', term2: 'bookshelf' },
        { term1: 'tranh', term2: 'painting' },

        // Bedroom (Phòng ngủ)
        { term1: 'giường', term2: 'bed' },
        { term1: 'chăn', term2: 'blanket' },
        { term1: 'ga trải giường', term2: 'bed sheet' },
        { term1: 'vỏ gối', term2: 'pillowcase' },
        { term1: 'tủ quần áo', term2: 'wardrobe' },
        { term1: 'gương', term2: 'mirror' },
        { term1: 'đồng hồ báo thức', term2: 'alarm clock' },
        { term1: 'bàn trang điểm', term2: 'dresser' },
        { term1: 'đèn ngủ', term2: 'night light' },
        { term1: 'móc treo quần áo', term2: 'coat hanger' },

        // Kitchen (Nhà bếp)
        { term1: 'tủ lạnh', term2: 'refrigerator' },
        { term1: 'bếp', term2: 'stove' },
        { term1: 'lò vi sóng', term2: 'microwave' },
        { term1: 'nồi', term2: 'pot' },
        { term1: 'chảo', term2: 'pan' },
        { term1: 'dao', term2: 'knife' },
        { term1: 'thìa', term2: 'spoon' },
        { term1: 'dĩa', term2: 'fork' },
        { term1: 'đĩa', term2: 'plate' },
        { term1: 'bát', term2: 'bowl' },
        { term1: 'cốc', term2: 'cup' },
        { term1: 'ly', term2: 'glass' },
        { term1: 'ấm đun nước', term2: 'kettle' },
        { term1: 'máy pha cà phê', term2: 'coffee maker' },
        { term1: 'máy nướng bánh mì', term2: 'toaster' },
        { term1: 'máy xay sinh tố', term2: 'blender' },
        { term1: 'thớt', term2: 'cutting board' },
        { term1: 'thùng rác', term2: 'trash can' },
        { term1: 'lò nướng', term2: 'oven' },
        { term1: 'máy rửa bát', term2: 'dishwasher' },

        // Bathroom (Phòng tắm)
        { term1: 'vòi sen', term2: 'shower' },
        { term1: 'bồn tắm', term2: 'bathtub' },
        { term1: 'bồn cầu', term2: 'toilet' },
        { term1: 'bồn rửa mặt', term2: 'sink' },
        { term1: 'khăn tắm', term2: 'towel' },
        { term1: 'xà phòng', term2: 'soap' },
        { term1: 'dầu gội', term2: 'shampoo' },
        { term1: 'kem đánh răng', term2: 'toothpaste' },
        { term1: 'bàn chải đánh răng', term2: 'toothbrush' },
        { term1: 'gương phòng tắm', term2: 'bathroom mirror' },
        { term1: 'giấy vệ sinh', term2: 'toilet paper' },
        { term1: 'máy sấy tóc', term2: 'hair dryer' },

        // Cleaning supplies (Đồ dọn dẹp)
        { term1: 'chổi', term2: 'broom' },
        { term1: 'hót rác', term2: 'dustpan' },
        { term1: 'máy hút bụi', term2: 'vacuum cleaner' },
        { term1: 'cây lau nhà', term2: 'mop' },
        { term1: 'xô', term2: 'bucket' },
        { term1: 'khăn lau', term2: 'cleaning cloth' },
        { term1: 'bọt biển', term2: 'sponge' },
        { term1: 'nước rửa chén', term2: 'dish soap' },
        { term1: 'chất tẩy rửa', term2: 'detergent' },
        { term1: 'bàn chải', term2: 'brush' },

        // Electronics (Đồ điện tử)
        { term1: 'máy tính', term2: 'computer' },
        { term1: 'máy tính xách tay', term2: 'laptop' },
        { term1: 'điện thoại', term2: 'phone' },
        { term1: 'máy in', term2: 'printer' },
        { term1: 'loa', term2: 'speaker' },
        { term1: 'quạt', term2: 'fan' },
        { term1: 'điều hòa', term2: 'air conditioner' },
        { term1: 'máy sưởi', term2: 'heater' },
        { term1: 'bàn là', term2: 'iron' },
        { term1: 'máy giặt', term2: 'washing machine' },
        { term1: 'máy sấy quần áo', term2: 'dryer' },

        // Furniture (Đồ nội thất)
        { term1: 'bàn', term2: 'table' },
        { term1: 'ghế', term2: 'chair' },
        { term1: 'tủ', term2: 'cabinet' },
        { term1: 'kệ', term2: 'shelf' },
        { term1: 'ngăn kéo', term2: 'drawer' },
        { term1: 'bàn làm việc', term2: 'desk' },
        { term1: 'ghế văn phòng', term2: 'office chair' },
        { term1: 'giá đỡ', term2: 'stand' },

        // Decor and accessories (Đồ trang trí)
        { term1: 'bình hoa', term2: 'vase' },
        { term1: 'khung ảnh', term2: 'picture frame' },
        { term1: 'nến', term2: 'candle' },
        { term1: 'đồng hồ treo tường', term2: 'wall clock' },
        { term1: 'chậu cây', term2: 'plant pot' },
        { term1: 'tượng trang trí', term2: 'figurine' },

        // Tools and utilities (Dụng cụ)
        { term1: 'kéo', term2: 'scissors' },
        { term1: 'búa', term2: 'hammer' },
        { term1: 'tuốc nơ vít', term2: 'screwdriver' },
        { term1: 'cờ lê', term2: 'wrench' },
        { term1: 'thước đo', term2: 'measuring tape' },
        { term1: 'mũi khoan', term2: 'drill' },
        { term1: 'cưa', term2: 'saw' },
        { term1: 'kìm', term2: 'pliers' },

        // Miscellaneous (Linh tinh)
        { term1: 'cửa', term2: 'door' },
        { term1: 'cửa sổ', term2: 'window' },
        { term1: 'chìa khóa', term2: 'key' },
        { term1: 'ổ khóa', term2: 'lock' }
    ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HouseholdVocabulary;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.HouseholdVocabulary = HouseholdVocabulary;
}
