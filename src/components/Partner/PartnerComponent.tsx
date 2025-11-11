import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Partner {
    id: number;
    logo: string;
    name: string;
    gradient: string;
    delay: number;
}

const partners: Partner[] = [
    {
        id: 1,
        logo: "/fpt_logo.png",
        name: "Đại học FPT",
        gradient: "from-[#88CFFF] to-[#CFEFFF]",
        delay: 0,
    },
    {
        id: 2,
        logo: "/hospital.png",
        name: "Bệnh viện Phụ sản Hà Nội",
        gradient: "from-[#FFE780] to-[#88CFFF]",
        delay: 0.2,
    },
    {
        id: 3,
        logo: "/aura_logo.png",
        name: "Đội ngũ Aura-right",
        gradient: "from-[#E2F5D5] to-[#FFE780]",
        delay: 0.4,
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
};

const PartnersSection: React.FC = () => {
    return (
        <section id="partners" className="py-24 bg-white relative notebook-bg overflow-hidden">
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
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] as const }}
                    className="text-4xl sm:text-5xl font-bold text-[#2D5E4F] text-center mb-16"
                    style={{ fontFamily: 'Pacifico, cursive' }}
                >
                    Đồng Hành Cùng Chúng Tôi
                </motion.h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-12 items-center"
                >
                    {partners.map((partner) => (
                        <motion.div
                            key={partner.id}
                            variants={fadeInUp}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
                            }}
                            className="text-center"
                        >
                            <motion.div
                                className={`bg-gradient-to-br ${partner.gradient} w-40 h-40 rounded-2xl flex items-center justify-center mx-auto shadow-lg p-8 overflow-hidden`}
                                animate={{ y: [0, -12, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5,
                                    delay: partner.delay,
                                    ease: [0.25, 0.1, 0.25, 1] as const,
                                }}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain drop-shadow-lg"
                                        sizes="(max-width: 768px) 100vw, 160px"
                                    />
                                </div>
                            </motion.div>

                            <p className="mt-6 font-bold text-[#2D5E4F] text-lg">{partner.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative Background Elements */}
            <motion.div
                className="absolute top-20 left-10 w-32 h-32 bg-[#A5DAF1] rounded-full blur-3xl opacity-20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ repeat: Infinity, duration: 6, ease: [0.25, 0.1, 0.25, 1] as const }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-40 h-40 bg-[#FFE780] rounded-full blur-3xl opacity-20"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.25, 0.2] }}
                transition={{
                    repeat: Infinity,
                    duration: 7,
                    delay: 1,
                    ease: [0.25, 0.1, 0.25, 1] as const,
                }}
            />
        </section>
    );
};

export default PartnersSection;