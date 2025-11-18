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
        gradient: "from-[#A5DAF1] to-[#CFEFFF]",
        delay: 0,
    },
    {
        id: 2,
        logo: "/hospital.png",
        name: "Bệnh viện Phụ sản Hà Nội",
        gradient: "from-[#FFE780] to-[#FFEFBD]",
        delay: 0.2,
    },
    {
        id: 3,
        logo: "/hpv_vietnam.png",
        name: "HPV Việt Nam",
        gradient: "from-[#E2F5D5] to-[#A5DAF1]",
        delay: 0.4,
    },
    {
        id: 4,
        logo: "/aura_logo.png",
        name: "Đội ngũ Aura-right",
        gradient: "from-[#FFE780] to-[#E2F5D5]",
        delay: 0.6,
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } as const,
};

const PartnersSection: React.FC = () => {
    return (
        <section id="partners" className="py-24 bg-white relative overflow-hidden">

            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #2D5E4F 1px, transparent 1px),
            linear-gradient(to bottom, #2D5E4F 1px, transparent 1px)
          `,
                    backgroundSize: "30px 30px"
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="text-4xl sm:text-5xl font-bold text-[#2D5E4F] text-center mb-20"
                    style={{ fontFamily: "Pacifico, cursive" }}
                >
                    Đồng Hành Cùng Chúng Tôi
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12"
                >
                    {partners.map((p) => (
                        <motion.div
                            key={p.id}
                            variants={fadeIn}
                            whileHover={{
                                y: -10,
                                scale: 1.07,
                                transition: { duration: 0.35 }
                            }}
                            className="text-center"
                        >
                            <motion.div
                                className={`bg-gradient-to-br ${p.gradient} w-32 h-32 sm:w-36 sm:h-36 rounded-2xl flex items-center justify-center mx-auto shadow-lg p-6`}
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                    delay: p.delay,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={p.logo}
                                        alt={p.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 240px"
                                        className="object-contain drop-shadow-md"
                                    />
                                </div>
                            </motion.div>

                            <p className="mt-5 font-semibold text-[#2D5E4F] text-lg">
                                {p.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="absolute top-24 left-10 w-32 h-32 bg-[#A5DAF1] rounded-full blur-3xl opacity-20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <motion.div
                className="absolute bottom-24 right-10 w-40 h-40 bg-[#FFE780] rounded-full blur-3xl opacity-20"
                animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.25, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            />
        </section>
    );
};

export default PartnersSection;
