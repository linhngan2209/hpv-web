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
            <section className="max-w-6xl mx-auto px-8 py-32">
                <ScrollReveal delay={0}>
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-normal text-gray-800 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                            Sứ Mệnh
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-700 mb-12">
                            AURA-RIGHT cam kết mang đến giáo dục toàn diện, chính xác và dễ tiếp cận về HPV, giúp học sinh THPT tự tin đưa ra quyết định về sức khỏe với kiến thức vững chắc và minh bạch.
                        </p>
                        <div className="w-24 h-px bg-teal-700 mx-auto"></div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Key Statement */}
            <section className="max-w-6xl mx-auto px-8 mb-20">
                <ScrollReveal delay={0}>
                    <div className="bg-white border-l-4 border-teal-700 p-12 rounded-r-lg shadow-sm">
                        <blockquote className="text-2xl md:text-3xl italic text-gray-800 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                            "Nâng cao nhận thức về HPV thông qua giáo dục rõ ràng, chính xác và gần gũi với giới trẻ, kết nối kiến thức y khoa với sự hiểu biết thực tiễn."
                        </blockquote>
                    </div>
                </ScrollReveal>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-8 mb-20 bg-white py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ScrollReveal delay={0}>
                        <div className="space-y-6">
                            <div className="text-xs uppercase tracking-widest text-teal-700 font-medium mb-4">Mục Đích</div>
                            <h2 className="text-3xl text-gray-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Về Aura-right</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Aura-right ra đời nhằm đưa tri thức khoa học đến gần hơn với tuổi trẻ, biến những kiến thức y học khô khan trở nên dễ hiểu và sinh động thông qua câu chuyện, hình ảnh, trò chơi và các tương tác gần gũi.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="lg:border-l lg:border-gray-200 lg:pl-16 space-y-6">
                            <div className="text-xs uppercase tracking-widest text-teal-700 font-medium mb-4">Đối Tác Tin Cậy</div>
                            <h2 className="text-3xl text-gray-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Hợp Tác Uy Tín</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Với sự bảo trợ truyền thông và chuyên môn từ Bệnh viện Phụ sản Hà Nội và HPV Việt Nam, chúng tôi đảm bảo mọi nội dung giáo dục đều chuẩn y khoa, dễ tiếp cận và phù hợp văn hóa Việt Nam.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-8 mb-20 py-16">
                <ScrollReveal delay={0}>
                    <div className="text-center mb-16">
                        <div className="text-xs uppercase tracking-widest text-teal-700 font-medium mb-4">Các chương trình</div>
                        <h2 className="text-4xl text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>Nổi Bật Trong Dự Án</h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Website & Blog',
                            desc: 'Nền tảng số toàn diện với các bài viết chuyên gia, cập nhật nghiên cứu và góc nhìn cộng đồng về giáo dục và phòng ngừa HPV.',
                        },
                        {
                            title: 'Chatbot AI "Hiểu HPV"',
                            desc: 'Trợ lý ảo thông minh trả lời tức thì, chính xác các câu hỏi về HPV với hướng dẫn cá nhân hóa.',
                        },
                        {
                            title: 'Quiz Lớp Học',
                            desc: 'Trò chơi kiểm tra kiến thức tương tác giúp học sinh củng cố và đánh giá hiểu biết về HPV.',
                        },
                        {
                            title: 'Talkshow THPT Đan Phượng',
                            desc: 'Diễn đàn trực tiếp với chuyên gia y tế, nhà giáo dục và cộng đồng chia sẻ kiến thức và kinh nghiệm.',
                        },
                        {
                            title: 'Workshop Giáo Dục',
                            desc: 'Các buổi học thực hành cho giáo viên, nhà cung cấp y tế và người hỗ trợ cộng đồng tập trung vào giao tiếp hiệu quả.',
                        },
                        {
                            title: 'Chuỗi Sự Kiện Truyền Thông',
                            desc: 'Các sáng kiến truyền thông nâng cao nhận thức và thúc đẩy giáo dục HPV trong cộng đồng đa dạng.',
                        },
                    ].map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className="bg-white border-2 border-gray-100 p-8 transition-all duration-300 hover:border-teal-700 hover:shadow-lg cursor-pointer h-full">
                                <h3 className="font-semibold text-xl text-gray-800 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Final Quote */}
            <section className="max-w-4xl mx-auto px-8 text-center py-16">
                <ScrollReveal delay={0}>
                    <div className="py-16">
                        <blockquote className="text-3xl md:text-4xl italic text-gray-800 leading-relaxed mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                            "Bởi khi chúng ta hiểu đúng, chúng ta sẽ mạnh mẽ hơn.
                            <br />
                            Và khi mạnh mẽ hơn, chúng ta sẽ biết yêu thương đúng cách."
                        </blockquote>
                        <div className="w-32 h-px bg-teal-700 mx-auto"></div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default MissionPage;
