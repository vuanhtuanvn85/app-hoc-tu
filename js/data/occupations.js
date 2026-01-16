/**
 * Occupations Vocabulary Data - 100 Vietnamese-English word pairs
 * Chủ đề: Nghề nghiệp
 */

const OccupationsVocabulary = {
    name: 'Nghề nghiệp',
    icon: '👨‍💼',
    words: [
        // Medical professions (Ngành y tế)
        { term1: 'bác sĩ', term2: 'doctor' },
        { term1: 'y tá', term2: 'nurse' },
        { term1: 'nha sĩ', term2: 'dentist' },
        { term1: 'dược sĩ', term2: 'pharmacist' },
        { term1: 'bác sĩ phẫu thuật', term2: 'surgeon' },
        { term1: 'bác sĩ nhi khoa', term2: 'pediatrician' },
        { term1: 'nhà tâm lý học', term2: 'psychologist' },
        { term1: 'nhà trị liệu', term2: 'therapist' },
        { term1: 'bác sĩ thú y', term2: 'veterinarian' },
        { term1: 'hộ lý', term2: 'paramedic' },

        // Education (Giáo dục)
        { term1: 'giáo viên', term2: 'teacher' },
        { term1: 'giáo sư', term2: 'professor' },
        { term1: 'hiệu trưởng', term2: 'principal' },
        { term1: 'gia sư', term2: 'tutor' },
        { term1: 'thủ thư', term2: 'librarian' },
        { term1: 'giảng viên', term2: 'lecturer' },
        { term1: 'giáo viên mầm non', term2: 'kindergarten teacher' },

        // Engineering and technology (Kỹ thuật và công nghệ)
        { term1: 'kỹ sư', term2: 'engineer' },
        { term1: 'lập trình viên', term2: 'programmer' },
        { term1: 'nhà khoa học máy tính', term2: 'computer scientist' },
        { term1: 'kỹ thuật viên IT', term2: 'IT technician' },
        { term1: 'nhà phát triển web', term2: 'web developer' },
        { term1: 'kỹ sư phần mềm', term2: 'software engineer' },
        { term1: 'kỹ sư cơ khí', term2: 'mechanical engineer' },
        { term1: 'kỹ sư điện', term2: 'electrical engineer' },
        { term1: 'kiến trúc sư', term2: 'architect' },

        // Business and finance (Kinh doanh và tài chính)
        { term1: 'kế toán', term2: 'accountant' },
        { term1: 'ngân hàng viên', term2: 'banker' },
        { term1: 'nhà phân tích tài chính', term2: 'financial analyst' },
        { term1: 'nhà kinh tế', term2: 'economist' },
        { term1: 'nhân viên bán hàng', term2: 'salesperson' },
        { term1: 'giám đốc', term2: 'manager' },
        { term1: 'CEO', term2: 'CEO' },
        { term1: 'doanh nhân', term2: 'entrepreneur' },
        { term1: 'nhà đầu tư', term2: 'investor' },
        { term1: 'nhà môi giới', term2: 'broker' },

        // Creative arts (Nghệ thuật)
        { term1: 'nghệ sĩ', term2: 'artist' },
        { term1: 'nhạc sĩ', term2: 'musician' },
        { term1: 'ca sĩ', term2: 'singer' },
        { term1: 'vũ công', term2: 'dancer' },
        { term1: 'diễn viên', term2: 'actor' },
        { term1: 'đạo diễn', term2: 'director' },
        { term1: 'nhiếp ảnh gia', term2: 'photographer' },
        { term1: 'họa sĩ', term2: 'painter' },
        { term1: 'nhà điêu khắc', term2: 'sculptor' },
        { term1: 'nhà thiết kế', term2: 'designer' },

        // Service industry (Ngành dịch vụ)
        { term1: 'đầu bếp', term2: 'chef' },
        { term1: 'phục vụ bàn', term2: 'waiter' },
        { term1: 'thợ cắt tóc', term2: 'barber' },
        { term1: 'thợ làm móng', term2: 'manicurist' },
        { term1: 'tiếp viên hàng không', term2: 'flight attendant' },
        { term1: 'lễ tân', term2: 'receptionist' },
        { term1: 'hướng dẫn viên du lịch', term2: 'tour guide' },
        { term1: 'nhân viên khách sạn', term2: 'hotel staff' },

        // Law and public service (Luật và công vụ)
        { term1: 'luật sư', term2: 'lawyer' },
        { term1: 'thẩm phán', term2: 'judge' },
        { term1: 'cảnh sát', term2: 'police officer' },
        { term1: 'lính cứu hỏa', term2: 'firefighter' },
        { term1: 'quân nhân', term2: 'soldier' },
        { term1: 'chính trị gia', term2: 'politician' },
        { term1: 'nhà ngoại giao', term2: 'diplomat' },

        // Construction and trades (Xây dựng và thợ thủ công)
        { term1: 'thợ xây', term2: 'construction worker' },
        { term1: 'thợ điện', term2: 'electrician' },
        { term1: 'thợ sửa ống nước', term2: 'plumber' },
        { term1: 'thợ mộc', term2: 'carpenter' },
        { term1: 'thợ sơn', term2: 'painter' },
        { term1: 'thợ hàn', term2: 'welder' },
        { term1: 'thợ cơ khí', term2: 'mechanic' },

        // Transportation (Vận tải)
        { term1: 'phi công', term2: 'pilot' },
        { term1: 'tài xế', term2: 'driver' },
        { term1: 'lái xe buýt', term2: 'bus driver' },
        { term1: 'lái xe tải', term2: 'truck driver' },
        { term1: 'thuyền trưởng', term2: 'captain' },
        { term1: 'thủy thủ', term2: 'sailor' },

        // Agriculture and nature (Nông nghiệp và thiên nhiên)
        { term1: 'nông dân', term2: 'farmer' },
        { term1: 'người làm vườn', term2: 'gardener' },
        { term1: 'nhà sinh học', term2: 'biologist' },
        { term1: 'nhà khoa học môi trường', term2: 'environmental scientist' },
        { term1: 'kiểm lâm', term2: 'forest ranger' },

        // Media and communication (Truyền thông)
        { term1: 'nhà báo', term2: 'journalist' },
        { term1: 'phóng viên', term2: 'reporter' },
        { term1: 'biên tập viên', term2: 'editor' },
        { term1: 'người dẫn chương trình', term2: 'presenter' },
        { term1: 'nhà văn', term2: 'writer' },
        { term1: 'tác giả', term2: 'author' },
        { term1: 'blogger', term2: 'blogger' },

        // Science and research (Khoa học và nghiên cứu)
        { term1: 'nhà khoa học', term2: 'scientist' },
        { term1: 'nhà nghiên cứu', term2: 'researcher' },
        { term1: 'nhà vật lý', term2: 'physicist' },
        { term1: 'nhà hóa học', term2: 'chemist' },
        { term1: 'nhà thiên văn học', term2: 'astronomer' },
        { term1: 'nhà địa chất', term2: 'geologist' },

        // Sports and fitness (Thể thao)
        { term1: 'vận động viên', term2: 'athlete' },
        { term1: 'huấn luyện viên', term2: 'coach' },
        { term1: 'trọng tài', term2: 'referee' }
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
