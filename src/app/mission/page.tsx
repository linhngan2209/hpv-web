'use client';
import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};

const MissionPage: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 font-sans">
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-20 left-10 w-72 h-72 bg-[#2D5E4F] rounded-full blur-3xl"
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="absolute bottom-20 right-10 w-96 h-96 bg-[#5196db] rounded-full blur-3xl"
                    />
                </div>

                <div className="container mx-auto px-6 py-20 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6"
                    >
                        <p className="text-sm font-semibold text-gray-700">SỨ MỆNH HPV</p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-[#2D5E4F] to-[#5196db] bg-clip-text text-transparent" style={{ fontFamily: 'Pacifico, cursive' }}>
                            AURA-RIGHT
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed italic"
                    >
                        "Nâng cao nhận thức về HPV, đồng thời mang lại nguồn kiến thức chính xác giúp các em học sinh THPT tránh những hiểu lầm."
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg text-gray-500 mt-4 font-medium"
                    >
                        HPV Wrong – Aura Right
                    </motion.p>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollReveal delay={0}>
                        <p className="text-xl leading-relaxed text-gray-700 mb-6">
                            <strong className="text-[#2D5E4F]">Aura-right</strong> ra đời với mong muốn mang tri thức khoa học đến gần hơn với tuổi trẻ — nơi những kiến thức y học tưởng chừng khô khan được biến hóa thành ngôn ngữ dễ hiểu, sinh động, qua những câu chuyện, hình ảnh, trò chơi và tương tác gần gũi.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="text-xl leading-relaxed text-gray-700 mb-6">
                            Với sự bảo trợ truyền thông và chuyên môn nội dung từ <strong className="text-[#5196db]">Bệnh viện Phụ sản Hà Nội</strong> và <strong className="text-[#5196db]">HPV Việt Nam</strong>, chúng tôi tin rằng tri thức đúng không chỉ nên được đọc, mà cần được trải nghiệm và cảm nhận.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <p className="text-xl leading-relaxed text-gray-700 mb-8">
                            Vì thế, Aura-right không dừng lại ở việc chia sẻ thông tin, mà mở ra một không gian đối thoại cởi mở, an toàn – nơi học sinh có thể hỏi, chia sẻ và thấu hiểu.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Website & Blog',
                            desc: 'Nền tảng kiến thức toàn diện về HPV với ngôn ngữ dễ hiểu, phù hợp với học sinh THPT',
                        },
                        {
                            title: 'Chatbot AI "Hiểu HPV"',
                            desc: 'Trợ lý thông minh giải đáp mọi thắc mắc về HPV một cách nhanh chóng và chính xác',
                        },
                        {
                            title: 'Quiz Lớp Học',
                            desc: 'Trò chơi tương tác giúp học sinh kiểm tra và củng cố kiến thức về HPV',
                        },
                        {
                            title: 'Talkshow THPT Đan Phượng',
                            desc: 'Sự kiện giao lưu trực tiếp đầu tiên, mở ra không gian đối thoại cởi mở và an toàn',
                        },
                        {
                            title: 'Workshop Giáo Dục',
                            desc: 'Các buổi workshop trực tuyến giúp học sinh và giáo viên hiểu đúng về HPV',
                        },
                        {
                            title: 'Chuỗi Sự Kiện Truyền Thông',
                            desc: 'Các sự kiện truyền thông giúp lan tỏa kiến thức đúng về HPV đến học sinh và cộng đồng',
                        },
                    ].map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                transition={{ duration: 0.3 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer h-full"
                            >
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 text-center">
                        <ScrollReveal delay={0}>
                    <div className="max-w-3xl mx-auto px-6 py-6 border-l-4 border-[#3d7e6a] bg-white/50 backdrop-blur-sm rounded-md shadow-sm">
                        <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed text-left">
                            “Bởi khi chúng ta hiểu đúng, chúng ta sẽ mạnh mẽ hơn.
                            <br />
                            Và khi mạnh mẽ hơn, chúng ta sẽ biết yêu thương đúng cách.”
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default MissionPage;