/**
 * Colors and Shapes Vocabulary Data - 100 Vietnamese-English word pairs
 * Chủ đề: Màu sắc và Hình dạng
 */

const colorShapeImagePath = (fileName) => `images/colors-shapes/${fileName}.jpg`;

const ColorsShapesVocabulary = {
    name: 'Màu sắc và Hình dạng',
    icon: '🎨',
    words: [
        // Basic colors (Màu cơ bản)
        { term1: 'màu đỏ', term2: 'red', image: colorShapeImagePath('red') },
        { term1: 'màu xanh dương', term2: 'blue', image: colorShapeImagePath('blue') },
        { term1: 'màu vàng', term2: 'yellow', image: colorShapeImagePath('yellow') },
        { term1: 'màu xanh lá', term2: 'green', image: colorShapeImagePath('green') },
        { term1: 'màu cam', term2: 'orange', image: colorShapeImagePath('orange') },
        { term1: 'màu tím', term2: 'purple', image: colorShapeImagePath('purple') },
        { term1: 'màu hồng', term2: 'pink', image: colorShapeImagePath('pink') },
        { term1: 'màu đen', term2: 'black', image: colorShapeImagePath('black') },
        { term1: 'màu trắng', term2: 'white', image: colorShapeImagePath('white') },
        { term1: 'màu xám', term2: 'gray', image: colorShapeImagePath('gray') },
        { term1: 'màu nâu', term2: 'brown', image: colorShapeImagePath('brown') },

        // Extended colors (Màu mở rộng)
        { term1: 'màu đỏ thẫm', term2: 'dark red', image: colorShapeImagePath('dark_red') },
        { term1: 'màu đỏ tươi', term2: 'bright red', image: colorShapeImagePath('bright_red') },
        { term1: 'màu đỏ nhạt', term2: 'light red', image: colorShapeImagePath('light_red') },
        { term1: 'màu đỏ thẩm', term2: 'maroon', image: colorShapeImagePath('maroon') },
        { term1: 'màu đỏ son', term2: 'crimson', image: colorShapeImagePath('crimson') },
        { term1: 'màu đỏ gạch', term2: 'brick red', image: colorShapeImagePath('brick_red') },
        { term1: 'màu xanh navy', term2: 'navy blue', image: colorShapeImagePath('navy_blue') },
        { term1: 'màu xanh da trời', term2: 'sky blue', image: colorShapeImagePath('sky_blue') },
        { term1: 'màu xanh cyan', term2: 'cyan', image: colorShapeImagePath('cyan') },
        { term1: 'màu xanh ngọc', term2: 'turquoise', image: colorShapeImagePath('turquoise') },
        { term1: 'màu xanh lam', term2: 'indigo', image: colorShapeImagePath('indigo') },
        { term1: 'màu xanh biển', term2: 'sea blue', image: colorShapeImagePath('sea_blue') },
        { term1: 'màu xanh lá cây', term2: 'tree green', image: colorShapeImagePath('tree_green') },
        { term1: 'màu xanh lá nhạt', term2: 'light green', image: colorShapeImagePath('light_green') },
        { term1: 'màu xanh ô liu', term2: 'olive green', image: colorShapeImagePath('olive_green') },
        { term1: 'màu xanh lục', term2: 'emerald green', image: colorShapeImagePath('emerald_green') },
        { term1: 'màu xanh bạc hà', term2: 'mint green', image: colorShapeImagePath('mint_green') },
        { term1: 'màu vàng chanh', term2: 'lemon yellow', image: colorShapeImagePath('lemon_yellow') },
        { term1: 'màu vàng kim', term2: 'golden', image: colorShapeImagePath('golden') },
        { term1: 'màu vàng kem', term2: 'cream', image: colorShapeImagePath('cream') },
        { term1: 'màu cam đậm', term2: 'dark orange', image: colorShapeImagePath('dark_orange') },
        { term1: 'màu cam đào', term2: 'peach', image: colorShapeImagePath('peach') },
        { term1: 'màu tím hoa cà', term2: 'violet', image: colorShapeImagePath('violet') },
        { term1: 'màu tím lavender', term2: 'lavender', image: colorShapeImagePath('lavender') },
        { term1: 'màu tím nhạt', term2: 'light purple', image: colorShapeImagePath('light_purple') },
        { term1: 'màu hồng đậm', term2: 'hot pink', image: colorShapeImagePath('hot_pink') },
        { term1: 'màu hồng phấn', term2: 'pastel pink', image: colorShapeImagePath('pastel_pink') },
        { term1: 'màu xám bạc', term2: 'silver', image: colorShapeImagePath('silver') },
        { term1: 'màu xám khói', term2: 'smoke gray', image: colorShapeImagePath('smoke_gray') },
        { term1: 'màu nâu đậm', term2: 'dark brown', image: colorShapeImagePath('dark_brown') },
        { term1: 'màu nâu sô cô la', term2: 'chocolate brown', image: colorShapeImagePath('chocolate_brown') },
        { term1: 'màu be', term2: 'beige', image: colorShapeImagePath('beige') },
        { term1: 'màu nâu tan', term2: 'tan', image: colorShapeImagePath('tan') },
        { term1: 'màu vàng đồng', term2: 'bronze', image: colorShapeImagePath('bronze') },

        // Special colors (Màu đặc biệt)
        { term1: 'màu bạc', term2: 'silver', image: colorShapeImagePath('silver') },
        { term1: 'màu vàng kim loại', term2: 'metallic gold', image: colorShapeImagePath('metallic_gold') },
        { term1: 'màu trong suốt', term2: 'transparent', image: colorShapeImagePath('transparent') },
        { term1: 'màu sắc cầu vồng', term2: 'rainbow colors', image: colorShapeImagePath('rainbow_colors') },

        // Basic shapes (Hình dạng cơ bản)
        { term1: 'hình tròn', term2: 'circle', image: colorShapeImagePath('circle') },
        { term1: 'hình vuông', term2: 'square', image: colorShapeImagePath('square') },
        { term1: 'hình chữ nhật', term2: 'rectangle', image: colorShapeImagePath('rectangle') },
        { term1: 'hình tam giác', term2: 'triangle', image: colorShapeImagePath('triangle') },
        { term1: 'hình oval', term2: 'oval', image: colorShapeImagePath('oval') },
        { term1: 'hình ngôi sao', term2: 'star', image: colorShapeImagePath('star') },
        { term1: 'hình trái tim', term2: 'heart', image: colorShapeImagePath('heart') },
        { term1: 'hình thoi', term2: 'diamond', image: colorShapeImagePath('diamond') },
        { term1: 'hình ngũ giác', term2: 'pentagon', image: colorShapeImagePath('pentagon') },
        { term1: 'hình lục giác', term2: 'hexagon', image: colorShapeImagePath('hexagon') },

        // 3D shapes (Hình khối)
        { term1: 'hình cầu', term2: 'sphere', image: colorShapeImagePath('sphere') },
        { term1: 'hình lập phương', term2: 'cube', image: colorShapeImagePath('cube') },
        { term1: 'hình hộp chữ nhật', term2: 'rectangular prism', image: colorShapeImagePath('rectangular_prism') },
        { term1: 'hình trụ', term2: 'cylinder', image: colorShapeImagePath('cylinder') },
        { term1: 'hình nón', term2: 'cone', image: colorShapeImagePath('cone') },
        { term1: 'hình chóp', term2: 'pyramid', image: colorShapeImagePath('pyramid') },
        { term1: 'hình bầu dục', term2: 'ellipsoid', image: colorShapeImagePath('ellipsoid') },

        // Complex shapes (Hình phức tạp)
        { term1: 'hình bát giác', term2: 'octagon', image: colorShapeImagePath('octagon') },
        { term1: 'hình thất giác', term2: 'heptagon', image: colorShapeImagePath('heptagon') },
        { term1: 'hình mười giác', term2: 'decagon', image: colorShapeImagePath('decagon') },
        { term1: 'hình bình hành', term2: 'parallelogram', image: colorShapeImagePath('parallelogram') },
        { term1: 'hình thang', term2: 'trapezoid', image: colorShapeImagePath('trapezoid') },
        { term1: 'hình mũi tên', term2: 'arrow', image: colorShapeImagePath('arrow') },
        { term1: 'hình thánh giá', term2: 'cross', image: colorShapeImagePath('cross') },
        { term1: 'hình vòng cung', term2: 'crescent', image: colorShapeImagePath('crescent') },

        // Color descriptions (Mô tả màu)
        { term1: 'màu sáng', term2: 'bright color', image: colorShapeImagePath('bright_color') },
        { term1: 'màu tối', term2: 'dark color', image: colorShapeImagePath('dark_color') },
        { term1: 'màu nhạt', term2: 'light color', image: colorShapeImagePath('light_color') },
        { term1: 'màu đậm', term2: 'deep color', image: colorShapeImagePath('deep_color') },
        { term1: 'màu pastel', term2: 'pastel color', image: colorShapeImagePath('pastel_color') },
        { term1: 'màu neon', term2: 'neon color', image: colorShapeImagePath('neon_color') },
        { term1: 'màu kim loại', term2: 'metallic color', image: colorShapeImagePath('metallic_color') },
        { term1: 'màu đất', term2: 'earth tone', image: colorShapeImagePath('earth_tone') },
        { term1: 'màu trung tính', term2: 'neutral color', image: colorShapeImagePath('neutral_color') },
        { term1: 'màu ấm', term2: 'warm color', image: colorShapeImagePath('warm_color') },
        { term1: 'màu lạnh', term2: 'cool color', image: colorShapeImagePath('cool_color') },

        // Shape properties (Tính chất hình dạng)
        { term1: 'góc', term2: 'angle', image: colorShapeImagePath('angle') },
        { term1: 'cạnh', term2: 'edge', image: colorShapeImagePath('edge') },
        { term1: 'đỉnh', term2: 'vertex', image: colorShapeImagePath('vertex') },
        { term1: 'đường thẳng', term2: 'straight line', image: colorShapeImagePath('straight_line') },
        { term1: 'đường cong', term2: 'curved line', image: colorShapeImagePath('curved_line') },
        { term1: 'đường chéo', term2: 'diagonal', image: colorShapeImagePath('diagonal') },
        { term1: 'chu vi', term2: 'perimeter', image: colorShapeImagePath('perimeter') },
        { term1: 'diện tích', term2: 'area', image: colorShapeImagePath('area') },
        { term1: 'đối xứng', term2: 'symmetrical', image: colorShapeImagePath('symmetrical') },
        { term1: 'không đối xứng', term2: 'asymmetrical', image: colorShapeImagePath('asymmetrical') }
    ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ColorsShapesVocabulary;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.ColorsShapesVocabulary = ColorsShapesVocabulary;
}
