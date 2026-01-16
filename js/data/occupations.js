/**
 * Occupations Vocabulary Data - 100 Vietnamese-English word pairs
 * Chủ đề: Nghề nghiệp
 */

const occupationImagePath = (fileName) => `images/occupations/${fileName}.jpg`;

const OccupationsVocabulary = {
    name: 'Nghề nghiệp',
    icon: '👨‍💼',
    words: [
        // Medical professions (Ngành y tế)
        { term1: 'bác sĩ', term2: 'doctor', image: occupationImagePath('surgeon') },
        { term1: 'y tá', term2: 'nurse', image: occupationImagePath('nurse') },
        { term1: 'nha sĩ', term2: 'dentist', image: occupationImagePath('dentist') },
        { term1: 'dược sĩ', term2: 'pharmacist', image: occupationImagePath('pharmacist') },
        { term1: 'bác sĩ phẫu thuật', term2: 'surgeon', image: occupationImagePath('surgeon') },
        { term1: 'bác sĩ nhi khoa', term2: 'pediatrician', image: occupationImagePath('pediatrician') },
        { term1: 'nhà tâm lý học', term2: 'psychologist', image: occupationImagePath('psychologist') },
        { term1: 'nhà trị liệu', term2: 'therapist', image: occupationImagePath('therapist') },
        { term1: 'bác sĩ thú y', term2: 'veterinarian', image: occupationImagePath('veterinarian') },
        { term1: 'hộ lý', term2: 'paramedic', image: occupationImagePath('paramedic') },

        // Education (Giáo dục)
        { term1: 'giáo viên', term2: 'teacher', image: occupationImagePath('teacher') },
        { term1: 'giáo sư', term2: 'professor', image: occupationImagePath('professor') },
        { term1: 'hiệu trưởng', term2: 'principal', image: occupationImagePath('principal') },
        { term1: 'gia sư', term2: 'tutor', image: occupationImagePath('tutor') },
        { term1: 'thủ thư', term2: 'librarian', image: occupationImagePath('librarian') },
        { term1: 'giảng viên', term2: 'lecturer', image: occupationImagePath('lecturer') },
        { term1: 'giáo viên mầm non', term2: 'kindergarten teacher', image: occupationImagePath('kindergarten_teacher') },

        // Engineering and technology (Kỹ thuật và công nghệ)
        { term1: 'kỹ sư', term2: 'engineer', image: occupationImagePath('engineer') },
        { term1: 'lập trình viên', term2: 'programmer', image: occupationImagePath('programmer') },
        { term1: 'nhà khoa học máy tính', term2: 'computer scientist', image: occupationImagePath('computer_scientist') },
        { term1: 'kỹ thuật viên IT', term2: 'IT technician', image: occupationImagePath('programmer') },
        { term1: 'nhà phát triển web', term2: 'web developer', image: occupationImagePath('web_developer') },
        { term1: 'kỹ sư phần mềm', term2: 'software engineer', image: occupationImagePath('programmer') },
        { term1: 'kỹ sư cơ khí', term2: 'mechanical engineer', image: occupationImagePath('mechanical_engineer') },
        { term1: 'kỹ sư điện', term2: 'electrical engineer', image: occupationImagePath('electrical_engineer') },
        { term1: 'kiến trúc sư', term2: 'architect', image: occupationImagePath('architect') },

        // Business and finance (Kinh doanh và tài chính)
        { term1: 'kế toán', term2: 'accountant', image: occupationImagePath('accountant') },
        { term1: 'ngân hàng viên', term2: 'banker', image: occupationImagePath('banker') },
        { term1: 'nhà phân tích tài chính', term2: 'financial analyst', image: occupationImagePath('economist') },
        { term1: 'nhà kinh tế', term2: 'economist', image: occupationImagePath('economist') },
        { term1: 'nhân viên bán hàng', term2: 'salesperson', image: occupationImagePath('salesperson') },
        { term1: 'giám đốc', term2: 'manager', image: occupationImagePath('manager') },
        { term1: 'CEO', term2: 'CEO', image: occupationImagePath('manager') },
        { term1: 'doanh nhân', term2: 'entrepreneur', image: occupationImagePath('entrepreneur') },
        { term1: 'nhà đầu tư', term2: 'investor', image: occupationImagePath('investor') },
        { term1: 'nhà môi giới', term2: 'broker', image: occupationImagePath('broker') },

        // Creative arts (Nghệ thuật)
        { term1: 'nghệ sĩ', term2: 'artist', image: occupationImagePath('artist') },
        { term1: 'nhạc sĩ', term2: 'musician', image: occupationImagePath('musician') },
        { term1: 'ca sĩ', term2: 'singer', image: occupationImagePath('singer') },
        { term1: 'vũ công', term2: 'dancer', image: occupationImagePath('dancer') },
        { term1: 'diễn viên', term2: 'actor', image: occupationImagePath('actor') },
        { term1: 'đạo diễn', term2: 'director', image: occupationImagePath('director') },
        { term1: 'nhiếp ảnh gia', term2: 'photographer', image: occupationImagePath('photographer') },
        { term1: 'họa sĩ', term2: 'painter', image: occupationImagePath('painter') },
        { term1: 'nhà điêu khắc', term2: 'sculptor', image: occupationImagePath('sculptor') },
        { term1: 'nhà thiết kế', term2: 'designer', image: occupationImagePath('designer') },

        // Service industry (Ngành dịch vụ)
        { term1: 'đầu bếp', term2: 'chef', image: occupationImagePath('chef') },
        { term1: 'phục vụ bàn', term2: 'waiter', image: occupationImagePath('waiter') },
        { term1: 'thợ cắt tóc', term2: 'barber', image: occupationImagePath('barber') },
        { term1: 'thợ làm móng', term2: 'manicurist', image: occupationImagePath('manicurist') },
        { term1: 'tiếp viên hàng không', term2: 'flight attendant', image: occupationImagePath('flight_attendant') },
        { term1: 'lễ tân', term2: 'receptionist', image: occupationImagePath('receptionist') },
        { term1: 'hướng dẫn viên du lịch', term2: 'tour guide', image: occupationImagePath('tour_guide') },
        { term1: 'nhân viên khách sạn', term2: 'hotel staff', image: occupationImagePath('hotel_staff') },

        // Law and public service (Luật và công vụ)
        { term1: 'luật sư', term2: 'lawyer', image: occupationImagePath('lawyer') },
        { term1: 'thẩm phán', term2: 'judge', image: occupationImagePath('judge') },
        { term1: 'cảnh sát', term2: 'police officer', image: occupationImagePath('police_officer') },
        { term1: 'lính cứu hỏa', term2: 'firefighter', image: occupationImagePath('firefighter') },
        { term1: 'quân nhân', term2: 'soldier', image: occupationImagePath('soldier') },
        { term1: 'chính trị gia', term2: 'politician', image: occupationImagePath('politician') },
        { term1: 'nhà ngoại giao', term2: 'diplomat', image: occupationImagePath('diplomat') },

        // Construction and trades (Xây dựng và thợ thủ công)
        { term1: 'thợ xây', term2: 'construction worker', image: occupationImagePath('construction_worker') },
        { term1: 'thợ điện', term2: 'electrician', image: occupationImagePath('electrician') },
        { term1: 'thợ sửa ống nước', term2: 'plumber', image: occupationImagePath('plumber') },
        { term1: 'thợ mộc', term2: 'carpenter', image: occupationImagePath('carpenter') },
        { term1: 'thợ sơn', term2: 'painter', image: occupationImagePath('painter') },
        { term1: 'thợ hàn', term2: 'welder', image: occupationImagePath('welder') },
        { term1: 'thợ cơ khí', term2: 'mechanic', image: occupationImagePath('mechanic') },

        // Transportation (Vận tải)
        { term1: 'phi công', term2: 'pilot', image: occupationImagePath('pilot') },
        { term1: 'tài xế', term2: 'driver', image: occupationImagePath('driver') },
        { term1: 'lái xe buýt', term2: 'bus driver', image: occupationImagePath('bus_driver') },
        { term1: 'lái xe tải', term2: 'truck driver', image: occupationImagePath('truck_driver') },
        { term1: 'thuyền trưởng', term2: 'captain', image: occupationImagePath('captain') },
        { term1: 'thủy thủ', term2: 'sailor', image: occupationImagePath('sailor') },

        // Agriculture and nature (Nông nghiệp và thiên nhiên)
        { term1: 'nông dân', term2: 'farmer', image: occupationImagePath('farmer') },
        { term1: 'người làm vườn', term2: 'gardener', image: occupationImagePath('gardener') },
        { term1: 'nhà sinh học', term2: 'biologist', image: occupationImagePath('biologist') },
        { term1: 'nhà khoa học môi trường', term2: 'environmental scientist', image: occupationImagePath('scientist') },
        { term1: 'kiểm lâm', term2: 'forest ranger', image: occupationImagePath('forest_ranger') },

        // Media and communication (Truyền thông)
        { term1: 'nhà báo', term2: 'journalist', image: occupationImagePath('journalist') },
        { term1: 'phóng viên', term2: 'reporter', image: occupationImagePath('reporter') },
        { term1: 'biên tập viên', term2: 'editor', image: occupationImagePath('editor') },
        { term1: 'người dẫn chương trình', term2: 'presenter', image: occupationImagePath('presenter') },
        { term1: 'nhà văn', term2: 'writer', image: occupationImagePath('writer') },
        { term1: 'tác giả', term2: 'author', image: occupationImagePath('author') },
        { term1: 'blogger', term2: 'blogger', image: occupationImagePath('blogger') },

        // Science and research (Khoa học và nghiên cứu)
        { term1: 'nhà khoa học', term2: 'scientist', image: occupationImagePath('scientist') },
        { term1: 'nhà nghiên cứu', term2: 'researcher', image: occupationImagePath('researcher') },
        { term1: 'nhà vật lý', term2: 'physicist', image: occupationImagePath('physicist') },
        { term1: 'nhà hóa học', term2: 'chemist', image: occupationImagePath('chemist') },
        { term1: 'nhà thiên văn học', term2: 'astronomer', image: occupationImagePath('astronomer') },
        { term1: 'nhà địa chất', term2: 'geologist', image: occupationImagePath('geologist') },

        // Sports and fitness (Thể thao)
        { term1: 'vận động viên', term2: 'athlete', image: occupationImagePath('athlete') },
        { term1: 'huấn luyện viên', term2: 'coach', image: occupationImagePath('coach') },
        { term1: 'trọng tài', term2: 'referee', image: occupationImagePath('referee') }
    ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OccupationsVocabulary;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.OccupationsVocabulary = OccupationsVocabulary;
}
