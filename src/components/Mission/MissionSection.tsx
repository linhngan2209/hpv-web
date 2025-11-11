import React from 'react';
import { Heart, BookOpen, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface MissionCard {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    iconDelay: number;
    cardDelay: number;
}

const missionCards: MissionCard[] = [
    {
        id: 1,
        icon: <Heart className="text-white w-8 h-8 fill-current" />,
        title: 'Nâng cao sức khỏe',
        description: 'Trao quyền cho giới trẻ với kiến thức về sức khỏe sinh sản và phòng ngừa HPV.',
        gradient: 'from-[#A5DAF1] to-[#74C4FF]',
        iconDelay: 0,
        cardDelay: 0.2
    },
    {
        id: 2,
        icon: <BookOpen className="text-white w-8 h-8" />,
        title: 'Giáo dục ưu tiên',
        description: 'Cung cấp thông tin chính xác và dễ tiếp cận thông qua các hội thảo và chiến dịch.',
        gradient: 'from-[#7EC8E3] to-[#69BFFF]',
        iconDelay: 0.5,
        cardDelay: 0.4
    },
    {
        id: 3,
        icon: <Users className="text-white w-8 h-8" />,
        title: 'Xây dựng cộng đồng',
        description: 'Tạo ra một cộng đồng hỗ trợ, nơi giới trẻ am hiểu và quan tâm đến sức khỏe.',
        gradient: 'from-[#66ACFF] to-[#88D6FF]',
        iconDelay: 1,
        cardDelay: 0.6
    }
];





const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.4 } }
};

const MissionSection: React.FC = () => {
    return (
        <section id="mission" className="py-24 bg-white notebook-bg relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #2D5E4F 1px, transparent 1px),
                        linear-gradient(to bottom, #2D5E4F 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 60 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] as const } }
                        }}
                        className="text-4xl sm:text-5xl font-bold text-[#2D5E4F] mb-6"
                        style={{ fontFamily: 'Pacifico, cursive' }}
                    >
                        Sứ mệnh của chúng tôi
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1.3, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } }
                        }}
                        className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-12 px-4"
                    >
                        Aura-right là một chiến dịch do sinh viên FPT khởi xướng, nhằm nâng cao nhận thức về HPV và thúc đẩy giáo dục sức khỏe sinh sản. Chúng tôi trao quyền cho giới trẻ với kiến thức để đưa ra những quyết định thông minh về sức khỏe và tương lai của bản thân.
                    </motion.p>

                    <motion.div
                        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {missionCards.map((card) => (
                            <motion.div
                                key={card.id}
                                variants={fadeInUp}
                                whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } }}
                                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
                            >
                                <motion.div
                                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${card.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, delay: card.iconDelay, ease: "easeInOut" }}
                                >
                                    {card.icon}
                                </motion.div>

                                <h3 className="text-xl sm:text-2xl font-bold text-[#2D5E4F] mb-4">{card.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{card.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="absolute top-20 left-10 w-32 h-32 bg-[#A5DAF1] rounded-full blur-3xl opacity-20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-40 h-40 bg-[#FFE780] rounded-full blur-3xl opacity-20"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.25, 0.2] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            />
        </section>
    );
};

export default MissionSection;
