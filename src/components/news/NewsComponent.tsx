import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface NewsCard {
    id: number;
    image: string;
    category: string;
    categoryColor: string;
    title: string;
    description: string;
    date: string;
    delay: number;
}

const newsCards: NewsCard[] = [
    {
        id: 1,
        image: "/talkshow.jpg",
        category: "Talkshow",
        categoryColor: "bg-[#FFD4A3] text-[#2D5E4F]",
        title: "Talkshow: “HPV Wrong – Aura Right” tại THPT Đan Phượng",
        description: "Talkshow “Hiểu đúng – Hành động đúng” lan tỏa năng lượng tích cực tới hơn 1.000 học sinh THPT Đan Phượng.",
        date: "3 tháng 11, 2025",
        delay: 0.3
    },
    {
        id: 2,
        image: "/dance_title.png",
        category: "Sự kiện",
        categoryColor: "bg-[#E2F5D5] text-[#2D5E4F]",
        title: "Aura Right Dance Challenge: Những màn trình diễn bùng nổ",
        description: "Dance Challenge của Aura Right với những màn trình diễn bùng nổ và đầy sáng tạo của các thí sinh.",
        date: "03 tháng 11, 2025",
        delay: 0.3,
    }
    ,

    {
        id: 3,
        image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/51a437da97-782a5629271a06b7b7c9.png",
        category: "Buổi trò chuyện sức khỏe",
        categoryColor: "bg-[#A5DAF1] text-white",
        title: "Hội Thảo Chuyên Gia",
        description: "Các chuyên gia y tế chia sẻ kiến thức về phòng ngừa HPV và các phương pháp điều trị.",
        date: "28 tháng 2, 2024",
        delay: 0.3
    }
];

const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const } }
};

const NewsSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section
            id="news"
            ref={ref}
            className="py-24 bg-gradient-to-br from-[#A5DAF1] to-white dotted-bg overflow-hidden"
        >
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="text-5xl font-bold text-[#2D5E4F] text-center mb-16 font-pacifico"
                >
                    Tin Tức & Hoạt Động
                </motion.h2>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {newsCards.map((card) => (
                        <Link key={card.id} href={`/blog/${card.id}`}>
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: card.delay }}
                                whileHover={{
                                    y: -5,
                                    scale: 1.03,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                                className="bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={400}
                                        height={192}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className={`inline-block ${card.categoryColor} text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                                        {card.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-[#2D5E4F] mb-3">{card.title}</h3>
                                    <p className="text-gray-600 mb-4">{card.description}</p>
                                    <p className="text-sm text-gray-500">{card.date}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
