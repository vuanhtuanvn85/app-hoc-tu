/**
 * Household Items Vocabulary Data - 100 Vietnamese-English word pairs
 * Chủ đề: Đồ vật trong nhà
 */

const householdImagePath = (fileName) => `images/household/${fileName}.jpg`;

const HouseholdVocabulary = {
    name: 'Đồ vật trong nhà',
    icon: '🏠',
    words: [
        // Living room (Phòng khách)
        { term1: 'ghế sofa', term2: 'sofa', image: householdImagePath('sofa') },
        { term1: 'bàn cà phê', term2: 'coffee table', image: householdImagePath('coffee_table') },
        { term1: 'ti vi', term2: 'television', image: householdImagePath('television') },
        { term1: 'gối', term2: 'pillow', image: householdImagePath('pillow') },
        { term1: 'thảm', term2: 'carpet', image: householdImagePath('carpet') },
        { term1: 'đèn', term2: 'lamp', image: householdImagePath('lamp') },
        { term1: 'rèm cửa', term2: 'curtain', image: householdImagePath('curtain') },
        { term1: 'ghế bành', term2: 'armchair', image: householdImagePath('armchair') },
        { term1: 'kệ sách', term2: 'bookshelf', image: householdImagePath('bookshelf') },
        { term1: 'tranh', term2: 'painting', image: householdImagePath('painting') },

        // Bedroom (Phòng ngủ)
        { term1: 'giường', term2: 'bed', image: householdImagePath('bed') },
        { term1: 'chăn', term2: 'blanket', image: householdImagePath('blanket') },
        { term1: 'ga trải giường', term2: 'bed sheet', image: householdImagePath('bed_sheet') },
        { term1: 'vỏ gối', term2: 'pillowcase', image: householdImagePath('pillowcase') },
        { term1: 'tủ quần áo', term2: 'wardrobe', image: householdImagePath('wardrobe') },
        { term1: 'gương', term2: 'mirror', image: householdImagePath('mirror') },
        { term1: 'đồng hồ báo thức', term2: 'alarm clock', image: householdImagePath('alarm_clock') },
        { term1: 'bàn trang điểm', term2: 'dresser', image: householdImagePath('drawer') },
        { term1: 'đèn ngủ', term2: 'night light', image: householdImagePath('night_light') },
        { term1: 'móc treo quần áo', term2: 'coat hanger', image: householdImagePath('coat_hanger') },

        // Kitchen (Nhà bếp)
        { term1: 'tủ lạnh', term2: 'refrigerator', image: householdImagePath('refrigerator') },
        { term1: 'bếp', term2: 'stove', image: householdImagePath('stove') },
        { term1: 'lò vi sóng', term2: 'microwave', image: householdImagePath('microwave') },
        { term1: 'nồi', term2: 'pot', image: householdImagePath('pot') },
        { term1: 'chảo', term2: 'pan', image: householdImagePath('pan') },
        { term1: 'dao', term2: 'knife', image: householdImagePath('knife') },
        { term1: 'thìa', term2: 'spoon', image: householdImagePath('spoon') },
        { term1: 'dĩa', term2: 'fork', image: householdImagePath('fork') },
        { term1: 'đĩa', term2: 'plate', image: householdImagePath('plate') },
        { term1: 'bát', term2: 'bowl', image: householdImagePath('pot') },
        { term1: 'cốc', term2: 'cup', image: householdImagePath('cup') },
        { term1: 'ly', term2: 'glass', image: householdImagePath('glass') },
        { term1: 'ấm đun nước', term2: 'kettle', image: householdImagePath('kettle') },
        { term1: 'máy pha cà phê', term2: 'coffee maker', image: householdImagePath('coffee_maker') },
        { term1: 'máy nướng bánh mì', term2: 'toaster', image: householdImagePath('toaster') },
        { term1: 'máy xay sinh tố', term2: 'blender', image: householdImagePath('blender') },
        { term1: 'thớt', term2: 'cutting board', image: householdImagePath('cutting_board') },
        { term1: 'thùng rác', term2: 'trash can', image: householdImagePath('trash_can') },
        { term1: 'lò nướng', term2: 'oven', image: householdImagePath('oven') },
        { term1: 'máy rửa bát', term2: 'dishwasher', image: householdImagePath('dishwasher') },

        // Bathroom (Phòng tắm)
        { term1: 'vòi sen', term2: 'shower', image: householdImagePath('shower') },
        { term1: 'bồn tắm', term2: 'bathtub', image: householdImagePath('bathtub') },
        { term1: 'bồn cầu', term2: 'toilet', image: householdImagePath('toilet') },
        { term1: 'bồn rửa mặt', term2: 'sink', image: householdImagePath('sink') },
        { term1: 'khăn tắm', term2: 'towel', image: householdImagePath('towel') },
        { term1: 'xà phòng', term2: 'soap', image: householdImagePath('soap') },
        { term1: 'dầu gội', term2: 'shampoo', image: householdImagePath('shampoo') },
        { term1: 'kem đánh răng', term2: 'toothpaste', image: householdImagePath('toothpaste') },
        { term1: 'bàn chải đánh răng', term2: 'toothbrush', image: householdImagePath('toothbrush') },
        { term1: 'gương phòng tắm', term2: 'bathroom mirror', image: householdImagePath('bathroom_mirror') },
        { term1: 'giấy vệ sinh', term2: 'toilet paper', image: householdImagePath('toilet_paper') },
        { term1: 'máy sấy tóc', term2: 'hair dryer', image: householdImagePath('hair_dryer') },

        // Cleaning supplies (Đồ dọn dẹp)
        { term1: 'chổi', term2: 'broom', image: householdImagePath('broom') },
        { term1: 'hót rác', term2: 'dustpan', image: householdImagePath('dustpan') },
        { term1: 'máy hút bụi', term2: 'vacuum cleaner', image: householdImagePath('vacuum_cleaner') },
        { term1: 'cây lau nhà', term2: 'mop', image: householdImagePath('mop') },
        { term1: 'xô', term2: 'bucket', image: householdImagePath('bucket') },
        { term1: 'khăn lau', term2: 'cleaning cloth', image: householdImagePath('cleaning_cloth') },
        { term1: 'bọt biển', term2: 'sponge', image: householdImagePath('sponge') },
        { term1: 'nước rửa chén', term2: 'dish soap', image: householdImagePath('dish_soap') },
        { term1: 'chất tẩy rửa', term2: 'detergent', image: householdImagePath('detergent') },
        { term1: 'bàn chải', term2: 'brush', image: householdImagePath('brush') },

        // Electronics (Đồ điện tử)
        { term1: 'máy tính', term2: 'computer', image: householdImagePath('computer') },
        { term1: 'máy tính xách tay', term2: 'laptop', image: householdImagePath('laptop') },
        { term1: 'điện thoại', term2: 'phone', image: householdImagePath('phone') },
        { term1: 'máy in', term2: 'printer', image: householdImagePath('printer') },
        { term1: 'loa', term2: 'speaker', image: householdImagePath('speaker') },
        { term1: 'quạt', term2: 'fan', image: householdImagePath('fan') },
        { term1: 'điều hòa', term2: 'air conditioner', image: householdImagePath('air_conditioner') },
        { term1: 'máy sưởi', term2: 'heater', image: householdImagePath('heater') },
        { term1: 'bàn là', term2: 'iron', image: householdImagePath('iron') },
        { term1: 'máy giặt', term2: 'washing machine', image: householdImagePath('washing_machine') },
        { term1: 'máy sấy quần áo', term2: 'dryer', image: householdImagePath('dryer') },

        // Furniture (Đồ nội thất)
        { term1: 'bàn', term2: 'table', image: householdImagePath('table') },
        { term1: 'ghế', term2: 'chair', image: householdImagePath('chair') },
        { term1: 'tủ', term2: 'cabinet', image: householdImagePath('cabinet') },
        { term1: 'kệ', term2: 'shelf', image: householdImagePath('shelf') },
        { term1: 'ngăn kéo', term2: 'drawer', image: householdImagePath('drawer') },
        { term1: 'bàn làm việc', term2: 'desk', image: householdImagePath('desk') },
        { term1: 'ghế văn phòng', term2: 'office chair', image: householdImagePath('office_chair') },
        { term1: 'giá đỡ', term2: 'stand', image: householdImagePath('stand') },

        // Decor and accessories (Đồ trang trí)
        { term1: 'bình hoa', term2: 'vase', image: householdImagePath('vase') },
        { term1: 'khung ảnh', term2: 'picture frame', image: householdImagePath('picture_frame') },
        { term1: 'nến', term2: 'candle', image: householdImagePath('candle') },
        { term1: 'đồng hồ treo tường', term2: 'wall clock', image: householdImagePath('wall_clock') },
        { term1: 'chậu cây', term2: 'plant pot', image: householdImagePath('plant_pot') },
        { term1: 'tượng trang trí', term2: 'figurine', image: householdImagePath('figurine') },

        // Tools and utilities (Dụng cụ)
        { term1: 'kéo', term2: 'scissors', image: householdImagePath('scissors') },
        { term1: 'búa', term2: 'hammer', image: householdImagePath('hammer') },
        { term1: 'tuốc nơ vít', term2: 'screwdriver', image: householdImagePath('screwdriver') },
        { term1: 'cờ lê', term2: 'wrench', image: householdImagePath('wrench') },
        { term1: 'thước đo', term2: 'measuring tape', image: householdImagePath('measuring_tape') },
        { term1: 'mũi khoan', term2: 'drill', image: householdImagePath('drill') },
        { term1: 'cưa', term2: 'saw', image: householdImagePath('saw') },
        { term1: 'kìm', term2: 'pliers', image: householdImagePath('pliers') },

        // Miscellaneous (Linh tinh)
        { term1: 'cửa', term2: 'door', image: householdImagePath('cabinet') },
        { term1: 'cửa sổ', term2: 'window', image: householdImagePath('window') },
        { term1: 'chìa khóa', term2: 'key', image: householdImagePath('lock') },
        { term1: 'ổ khóa', term2: 'lock', image: householdImagePath('lock') }
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
