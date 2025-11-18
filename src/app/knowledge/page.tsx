'use client'
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, CheckCircle, ArrowRight, Syringe, Microscope, ShieldHalf, HeartPulse, Calendar, TestTube, Beaker, UserCheck } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const VenusIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
        <path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z" />
    </svg>
);

const MarsIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor">
        <path d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8H424c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
    </svg>
);

const PeopleArrowsIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 640 512" fill="currentColor">
        <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64z" />
    </svg>
);

const BabyIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor">
        <path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9z" />
    </svg>
);

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay }}
        >
            {children}
        </motion.div>
    );
};

export default function HPVKnowledgePage() {
    const [expandedMyth, setExpandedMyth] = useState<number | null>(null);
    const searchParams = useSearchParams();
    const defaultSection = searchParams?.get ? searchParams.get('section') : 'diseases';
    const [activeSection, setActiveSection] = useState(defaultSection || 'diseases');
    const sections = [
        { id: 'diseases', label: 'HPV là gì?' },
        { id: 'transmission', label: 'Lây truyền' },
        { id: 'risks', label: 'Nguy cơ' },
        { id: 'prevention', label: 'Phòng ngừa' },
        { id: 'screening', label: 'Tầm soát' },
        { id: 'myths', label: 'Hiểu lầm' }
    ];

    const myths = [
        {
            myth: 'HPV chỉ lây qua quan hệ tình dục hoàn toàn?',
            truth: 'HPV có thể lây qua tiếp xúc da kề da vùng sinh dục, kể cả khi không quan hệ thâm nhập hoặc quan hệ bằng miệng.'
        },
        {
            myth: 'Chỉ phụ nữ mới có thể mắc HPV?',
            truth: 'Cả nam và nữ đều có nguy cơ nhiễm HPV. Virus có thể gây ung thư dương vật, hậu môn, miệng – họng ở nam giới và ung thư cổ tử cung, âm hộ ở nữ giới.'
        },
        {
            myth: 'Người bị nhiễm HPV chắc chắn có triệu chứng?',
            truth: 'Phần lớn người nhiễm HPV không có triệu chứng. Dù không biểu hiện ra ngoài, họ vẫn có khả năng lây cho bạn tình.'
        },
        {
            myth: 'Triệu chứng HPV sẽ xuất hiện trong vài tuần sau khi nhiễm?',
            truth: 'Triệu chứng (nếu có) thường xuất hiện sau nhiều năm. HPV có thời gian ủ bệnh rất dài và âm thầm.'
        },
        {
            myth: 'Không cần tiêm vắc-xin HPV nếu xét nghiệm Pap thường xuyên?',
            truth: 'Xét nghiệm Pap giúp phát hiện bất thường, nhưng vắc-xin HPV ngăn ngừa nguy cơ này ngay từ đầu. Hai phương pháp bổ sung cho nhau chứ không thay thế.'
        },
        {
            myth: 'Nhiễm HPV có thể chữa khỏi hoàn toàn?',
            truth: 'Hiện chưa có cách chữa khỏi HPV, nhưng các bệnh do HPV gây ra như mụn cóc sinh dục, tổn thương tiền ung thư hoàn toàn có thể điều trị hiệu quả nếu phát hiện sớm.'
        },
        {
            myth: 'Nhiễm HPV đồng nghĩa với việc sẽ bị ung thư?',
            truth: 'Hầu hết nhiễm HPV tự khỏi trong 1–2 năm. Chỉ một số ít trường hợp nhiễm lâu dài mới dẫn tới ung thư, đặc biệt là các chủng nguy cơ cao.'
        },
        {
            myth: 'Vắc-xin HPV có tác dụng phụ nguy hiểm?',
            truth: 'Vắc-xin HPV đã được chứng minh an toàn qua nhiều nghiên cứu. Tác dụng phụ chỉ ở mức nhẹ như đau chỗ tiêm hoặc mệt mỏi thoáng qua.'
        },
        {
            myth: 'Vắc-xin HPV gây vô sinh?',
            truth: 'Không. CDC khẳng định vắc-xin HPV không ảnh hưởng khả năng sinh sản, thậm chí còn giúp ngăn các bệnh có thể gây vô sinh nếu không điều trị.'
        }
    ];


    return (
        <div className="min-h-screen bg-gradient-to-b from-[#C8E3D8] to-white">
            <div className="bg-white  shadow-sm px-4 pt-36 pb-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#2D5E4F] mb-3" style={{ fontFamily: 'Pacifico, cursive' }}>
                            Kiến thức về HPV
                        </h2>
                        <p className="text-gray-600 text-sm">Thông tin quan trọng về virus HPV</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-6">
                        {[
                            { percent: '90%', label: 'Mụn cóc sinh dục (HPV 6–11)', delay: 0 },
                            { percent: '88%', label: 'Ung thư hậu môn', delay: 0.1 },
                            { percent: '50%', label: 'Ung thư dương vật', delay: 0.2 },
                            { percent: '70%', label: 'Ung thư hầu họng', delay: 0.3 },
                            { percent: '100%', label: 'Ung thư cổ tử cung', delay: 0.4 },
                            { percent: '78%', label: 'Ung thư âm đạo', delay: 0.5 }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: stat.delay }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-[#2D5E4F] rounded-2xl p-6 text-center shadow-lg cursor-pointer"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: stat.delay + 0.2, type: "spring" }}
                                    className="text-[#FFE780] text-5xl font-bold mb-2"
                                >
                                    {stat.percent}
                                </motion.div>
                                <p className="text-white text-lg">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex overflow-x-auto gap-6 py-4 scrollbar-hide">
                        {sections.map((section) => (
                            <motion.button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`whitespace-nowrap pb-3 px-2 font-semibold transition-colors border-b-3 ${activeSection === section.id
                                    ? 'text-[#2D5E4F] border-[#2D5E4F]'
                                    : 'text-gray-500 font-medium border-transparent hover:text-[#2D5E4F]'
                                    }`}
                            >
                                {section.label}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </nav>

            <main className="py-8 px-4 max-w-7xl mx-auto">
                {activeSection === 'diseases' && (
                    <div className="space-y-6">
                        <ScrollReveal delay={0}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                            >
                                <div className="bg-[#F4A261] px-6 py-4">
                                    <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                                        🦠
                                        HPV là gì?
                                    </h3>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-700 leading-relaxed">
                                        <strong>HPV (Human Papillomavirus)</strong> là một nhóm gồm hơn
                                        <strong> 200 loại virus</strong>, lây truyền chủ yếu qua tiếp xúc da – da vùng sinh dục
                                        và quan hệ tình dục.
                                    </p>

                                    <ul className="mt-4 space-y-3 text-gray-700">
                                        {[
                                            'Khoảng 80% người trưởng thành nhiễm HPV ít nhất một lần.',
                                            'Phần lớn tự khỏi mà không có triệu chứng.',
                                            'Một số chủng nguy cơ cao (như HPV 16, 18) có thể gây ung thư.',
                                            'Chủng nguy cơ thấp (HPV 6, 11) thường gây mụn cóc sinh dục.',
                                            'Tiêm vắc xin HPV là cách phòng bệnh hiệu quả nhất.'
                                        ].map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle className="w-5 h-5 text-[#F4A261] mt-1 flex-shrink-0" />
                                                <span>{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ScrollReveal delay={0}>
                                <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                                    <div className="bg-[#6BB1E3] px-6 py-4">
                                        <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                                            <VenusIcon />
                                            Nữ giới
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="font-semibold text-lg text-[#2D5E4F] mb-3">Bệnh do HPV gây ra:</h4>
                                        <ul className="space-y-3">
                                            {['Ung thư cổ tử cung', 'Ung thư âm đạo và âm hộ', 'Ung thư hậu môn', 'Ung thư họng và miệng', 'Mụn cóc sinh dục'].map((item, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle className="w-5 h-5 text-[#6BB1E3] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                                    <div className="bg-[#2D5E4F] px-6 py-4">
                                        <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                                            <MarsIcon />
                                            Nam giới
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="font-semibold text-lg text-[#2D5E4F] mb-3">Bệnh do HPV gây ra:</h4>
                                        <ul className="space-y-3">
                                            {['Ung thư dương vật', 'Ung thư hậu môn', 'Ung thư họng và miệng', 'Mụn cóc sinh dục'].map((item, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle className="w-5 h-5 text-[#2D5E4F] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        </div>
                    </div>
                )}


                {activeSection === 'transmission' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ScrollReveal delay={0}>
                            <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl p-6 shadow-lg h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-[#C8E3D8] rounded-xl flex items-center justify-center">
                                        <PeopleArrowsIcon />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#2D5E4F]">Quan hệ tình dục</h3>
                                </div>
                                <ul className="space-y-3 text-gray-700">
                                    {['Lây truyền qua tiếp xúc da với da', 'Không cần quan hệ hoàn toàn', 'Bao cao su giảm nhưng không loại bỏ hoàn toàn', 'Có thể lây từ người không có triệu chứng'].map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <ArrowRight className="w-5 h-5 text-[#6BB1E3] mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl p-6 shadow-lg h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-[#C8E3D8] rounded-xl flex items-center justify-center">
                                        <BabyIcon />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#2D5E4F]">Lây từ mẹ sang con</h3>
                                </div>
                                <ul className="space-y-3 text-gray-700">
                                    {['Trong quá trình sinh nở', 'Hiếm gặp nhưng có thể xảy ra', 'Gây u nhú đường hô hấp ở trẻ', 'Tầm soát thai kỳ quan trọng'].map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <ArrowRight className="w-5 h-5 text-[#6BB1E3] mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </ScrollReveal>
                    </div>
                )}

                {activeSection === 'risks' && (
                    <ScrollReveal>
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-[#2D5E4F] mb-6">Nguy cơ ung thư do HPV</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Ung thư cổ tử cung', tags: ['60% do tuýp 16', '15% do tuýp 18'], desc: '99% trường hợp ung thư cổ tử cung do HPV gây ra. Tầm soát định kỳ giúp phát hiện sớm.' },
                                    { title: 'Ung thư họng', tags: ['70% do HPV'], desc: 'Tỷ lệ ung thư họng do HPV tăng nhanh ở cả nam và nữ trong những năm gần đây.' },
                                    { title: 'Ung thư hậu môn', tags: ['90% do HPV'], desc: 'Nguy cơ cao hơn ở những người có hệ miễn dịch yếu hoặc HIV dương tính.' },
                                    { title: 'Các ung thư khác', tags: ['Âm đạo, âm hộ'], desc: 'HPV cũng gây ung thư âm đạo, âm hộ và dương vật với tỷ lệ thấp hơn.' }
                                ].map((cancer, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="border-2 border-[#C8E3D8] rounded-xl p-6 cursor-pointer"
                                    >
                                        <h3 className="text-xl font-bold text-[#2D5E4F] mb-4">{cancer.title}</h3>
                                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                                            {cancer.tags.map((tag, i) => (
                                                <span key={i} className="bg-[#FFE780] px-4 py-2 rounded-full text-[#2D5E4F] font-semibold text-sm">{tag}</span>
                                            ))}
                                        </div>
                                        <p className="text-gray-700">{cancer.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                )}

                {activeSection === 'prevention' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Syringe, title: 'Vắc-xin HPV', items: ['Tiêm từ 9-26 tuổi', 'Hiệu quả 99%', '2-3 mũi tiêm', 'An toàn lâu dài'], bg: 'bg-[#2D5E4F]' },
                            { icon: Microscope, title: 'Tầm soát định kỳ', items: ['Pap test định kỳ', 'HPV test từ 30 tuổi', 'Phát hiện sớm', 'Điều trị kịp thời'], bg: 'bg-[#6BB1E3]' },
                            { icon: ShieldHalf, title: 'Quan hệ an toàn', items: ['Sử dụng bao cao su', 'Giảm số bạn tình', 'Trung thành một bạn', 'Kiểm tra sức khỏe'], bg: 'bg-[#2D5E4F]' },
                            { icon: HeartPulse, title: 'Lối sống lành mạnh', items: ['Không hút thuốc', 'Ăn uống cân bằng', 'Tăng cường miễn dịch', 'Giảm stress'], bg: 'bg-[#6BB1E3]' }
                        ].map((method, idx) => {
                            const Icon = method.icon;
                            return (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <motion.div whileHover={{ scale: 1.05, y: -5 }} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                                        <div className={`w-16 h-16 ${method.bg} rounded-xl flex items-center justify-center mb-4`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#2D5E4F] mb-3">{method.title}</h3>
                                        <ul className="space-y-2 text-gray-700 text-sm">
                                            {method.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#2D5E4F] mt-1 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                )}

                {activeSection === 'screening' && (
                    <div className="space-y-6">
                        <ScrollReveal delay={0}>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="bg-[#6BB1E3] text-white px-6 py-3 rounded-xl mb-4 inline-block">
                                    <h3 className="text-xl font-bold">21-29 tuổi</h3>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Calendar className="text-[#6BB1E3] w-8 h-8 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg text-[#2D5E4F] mb-2">Pap test</h4>
                                        <p className="text-gray-700">Thực hiện mỗi 3 năm một lần để kiểm tra tế bào bất thường ở cổ tử cung.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="bg-[#2D5E4F] text-white px-6 py-3 rounded-xl mb-4 inline-block">
                                    <h3 className="text-xl font-bold">30-65 tuổi</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4">
                                        <TestTube className="text-[#2D5E4F] w-8 h-8 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-lg text-[#2D5E4F] mb-2">Pap test + HPV test</h4>
                                            <p className="text-gray-700">Kết hợp cả hai xét nghiệm mỗi 5 năm (khuyến nghị)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Beaker className="text-[#2D5E4F] w-8 h-8 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-lg text-[#2D5E4F] mb-2">Chỉ Pap test</h4>
                                            <p className="text-gray-700">Hoặc chỉ làm Pap test mỗi 3 năm một lần</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="bg-[#6BB1E3] text-white px-6 py-3 rounded-xl mb-4 inline-block">
                                    <h3 className="text-xl font-bold">Trên 65 tuổi</h3>
                                </div>
                                <div className="flex items-start gap-4">
                                    <UserCheck className="text-[#6BB1E3] w-8 h-8 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg text-[#2D5E4F] mb-2">Có thể ngừng tầm soát</h4>
                                        <p className="text-gray-700">Nếu đã có kết quả âm tính liên tục trong 10 năm qua và không có yếu tố nguy cơ cao.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                )}

                {activeSection === 'myths' && (
                    <div className="space-y-4">
                        {myths.map((item, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                    <motion.button
                                        whileHover={{ backgroundColor: '#f9fafb' }}
                                        onClick={() => setExpandedMyth(expandedMyth === idx ? null : idx)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-lg font-semibold text-[#2D5E4F]">{item.myth}</span>
                                        <motion.div
                                            animate={{ rotate: expandedMyth === idx ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="text-[#2D5E4F] w-6 h-6 flex-shrink-0" />
                                        </motion.div>
                                    </motion.button>

                                    {expandedMyth === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6">
                                                <motion.div
                                                    initial={{ y: -10 }}
                                                    animate={{ y: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.1 }}
                                                    className="bg-green-50 border-l-4 border-[#2D5E4F] p-4 rounded-lg"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <CheckCircle className="text-[#2D5E4F] w-6 h-6 mt-1 flex-shrink-0" />
                                                        <div>
                                                            <h4 className="font-semibold text-[#2D5E4F] mb-2">Sự thật:</h4>
                                                            <p className="text-gray-700">{item.truth}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </main>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .border-b-3 {
                    border-bottom-width: 3px;
                }
            `}</style>
        </div>
    );
}