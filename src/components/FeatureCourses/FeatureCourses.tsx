import React, { useState, useEffect, useRef } from 'react';
import { Users, CalendarCheck, Heart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface StatCard {
    id: number;
    icon: React.ReactNode;
    value: number;
    label: string;
    gradient: string;
}

const statCards: StatCard[] = [
    {
        id: 1,
        icon: <Users className="w-12 h-12" />,
        value: 5000,
        label: 'Học sinh tiếp cận',
        gradient: 'from-[#A5DAF1] to-[#E2F5D5]'
    },
    {
        id: 2,
        icon: <CalendarCheck className="w-12 h-12" />,
        value: 45,
        label: 'Sự kiện trường học',
        gradient: 'from-[#FFE780] to-[#A5DAF1]'
    },
    {
        id: 3,
        icon: <Heart className="w-12 h-12 fill-current" />,
        value: 120,
        label: 'Tình nguyện viên tích cực',
        gradient: 'from-[#E2F5D5] to-[#FFE780]'
    }
];

const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 80
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.4
        }
    }
};

const StatsSection: React.FC = () => {
    const [counts, setCounts] = useState<number[]>([0, 0, 0]);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
        }
    }, [isInView]);

    const animateCounters = () => {
        statCards.forEach((card, index) => {
            const duration = 2500;
            const steps = 80;
            const increment = card.value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= card.value) {
                    current = card.value;
                    clearInterval(timer);
                }
                setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.floor(current);
                    return newCounts;
                });
            }, duration / steps);
        });
    };

    return (
        <section
            id="stats"
            ref={sectionRef}
            className="py-24 dotted  bg-white relative overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'radial-gradient(circle, #2D5E4F 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <motion.div
                className="absolute top-20 left-10 w-40 h-40 bg-[#A5DAF1] rounded-full blur-3xl opacity-20"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-48 h-48 bg-[#FFE780] rounded-full blur-3xl opacity-20"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.25, 0.2]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1.4,
                            ease: [0.25, 0.1, 0.25, 1] as const
                        }
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl sm:text-5xl font-bold text-[#2D5E4F] text-center mb-16"
                    style={{ fontFamily: 'Pacifico, cursive' }}
                >
                    Thành tựu nổi bật
                </motion.h2>

                <motion.div
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {statCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            variants={fadeInUp}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                                transition: {
                                    duration: 0.5,
                                    ease: [0.25, 0.1, 0.25, 1] as const
                                }
                            }}
                            className={`text-center bg-gradient-to-br ${card.gradient} rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500`}
                        >
                            <motion.div
                                className="mb-6 flex justify-center"
                                animate={{
                                    y: [0, -8, 0]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    delay: index * 0.3,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="text-[#2D5E4F]">{card.icon}</div>
                            </motion.div>

                            <motion.div
                                className="text-5xl sm:text-6xl font-bold text-[#2D5E4F] mb-4 drop-shadow-lg"
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.5 + (index * 0.2),
                                        ease: [0.25, 0.1, 0.25, 1] as const
                                    }
                                }}
                                viewport={{ once: true }}
                            >
                                {counts[index].toLocaleString()}+
                            </motion.div>

                            <p className="text-lg sm:text-xl text-[#2D5E4F] font-medium">
                                {card.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;