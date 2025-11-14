import React from 'react';
import { CircleHelp, ArrowLeftRight, TriangleAlert, ShieldCheck, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface KnowledgeCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  iconDelay: number;
}

const knowledgeCards: KnowledgeCard[] = [
  {
    id: 1,
    icon: <CircleHelp className="w-10 h-10" />,
    title: 'HPV là gì?',
    description: 'Hiểu về virus và ảnh hưởng của nó đến sức khỏe.',
    bgColor: 'bg-[#FFE780]',
    iconColor: 'text-[#2D5E4F]',
    iconDelay: 0
  },
  {
    id: 2,
    icon: <ArrowLeftRight className="w-10 h-10" />,
    title: 'Con đường lây truyền',
    description: 'Cách HPV lây lan và các yếu tố nguy cơ cần biết.',
    bgColor: 'bg-[#6BB1E3]',
    iconColor: 'text-white',
    iconDelay: 0.3
  },
  {
    id: 3,
    icon: <TriangleAlert className="w-10 h-10" />,
    title: 'Nguy cơ sức khỏe',
    description: 'Các biến chứng tiềm ẩn và mối quan tâm sức khỏe liên quan.',
    bgColor: 'bg-[#E2F5D5]',
    iconColor: 'text-[#2D5E4F]',
    iconDelay: 0.6
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-10 h-10" />,
    title: 'Phòng ngừa',
    description: 'Thông tin về tiêm chủng và các biện pháp bảo vệ hiện có.',
    bgColor: 'bg-[#FFE780]',
    iconColor: 'text-[#2D5E4F]',
    iconDelay: 0.9
  },
  {
    id: 5,
    icon: <Stethoscope className="w-10 h-10" />,
    title: 'Tầm soát',
    description: 'Kiểm tra định kỳ và các phương pháp phát hiện sớm.',
    bgColor: 'bg-[#6BB1E3]',
    iconColor: 'text-white',
    iconDelay: 1.2
  },
  {
    id: 6,
    icon: <CircleHelp className="w-10 h-10" />,
    title: 'Những hiểu lầm về HPV',
    description: 'Phá bỏ các quan niệm sai lầm phổ biến về virus và tiêm chủng.',
    bgColor: 'bg-[#FFE780]',
    iconColor: 'text-[#2D5E4F]',
    iconDelay: 1.5
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const KnowledgeSection: React.FC = () => {
  const router = useRouter();
  return (
    <section
      id="knowledge"
      className="py-24 bg-gradient-to-br from-[#C8E3D8] to-[#6BB1E3] relative overflow-hidden"
    >
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-white opacity-20 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 bg-[#FFE780] opacity-20 rotate-45"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 0.7, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] as const } }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-5xl font-bold text-[#2D5E4F] text-center mb-16"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          Kho kiến thức về HPV
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {knowledgeCards.map((card) => (
            <motion.div
              key={card.id}
              onClick={() => router.push("/knowledge")}
              variants={fadeInUp}
              whileHover={{
                scale: 1.08,
                y: -10,
                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
              }}
              className="chalkboard rounded-2xl p-6 sm:p-8 text-center cursor-pointer shadow-xl"
            >
              <motion.div
                className={`w-20 h-20 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: card.iconDelay, ease: "easeInOut" }}
              >
                <div className={card.iconColor}>{card.icon}</div>
              </motion.div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-[#E2F5D5] text-xs sm:text-sm font-medium leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .chalkboard {
          background: linear-gradient(135deg, rgba(45, 94, 79, 0.95), rgba(45, 94, 79, 0.85));
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }
        .chalkboard:hover {
          border-color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default KnowledgeSection;
