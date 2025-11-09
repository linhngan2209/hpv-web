import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  quoteColor: string;
  topDecor: {
    color: string;
    rotation: string;
  };
  bottomDecor: {
    color: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Tham gia Aura-right đã mở rộng tầm mắt của tôi về tầm quan trọng của giáo dục sức khỏe sinh sản. Tôi cảm thấy có năng lực để chia sẻ kiến thức này với bạn bè.",
    name: "Minh Anh",
    role: "Tình nguyện viên sinh viên FPT",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    quoteColor: "text-[#A5DAF1]",
    topDecor: { color: "bg-[#FFE780]", rotation: "rotate-12" },
    bottomDecor: { color: "bg-[#A5DAF1]" }
  },
  {
    id: 2,
    quote: "Các buổi workshop vô cùng bổ ích và lôi cuốn. Tôi đã học được nhiều điều chưa từng biết về HPV và cách bảo vệ bản thân.",
    name: "Tuấn Anh",
    role: "Người tham dự workshop",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    quoteColor: "text-[#FFE780]",
    topDecor: { color: "bg-[#E2F5D5]", rotation: "-rotate-12" },
    bottomDecor: { color: "bg-[#FFE780]" }
  },
  {
    id: 3,
    quote: "Tham gia chiến dịch này thực sự mang lại nhiều giá trị. Chúng tôi đang tạo ra sự khác biệt thật sự trong cộng đồng.",
    name: "Thu Hà",
    role: "Ban tổ chức chiến dịch",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    quoteColor: "text-[#E2F5D5]",
    topDecor: { color: "bg-[#A5DAF1]", rotation: "rotate-12" },
    bottomDecor: { color: "bg-[#E2F5D5]" }
  },
  {
    id: 4,
    quote: "Năng lượng và nhiệt huyết của đội Aura-right thật truyền cảm hứng. Họ làm cho việc tìm hiểu về sức khỏe trở nên thú vị và dễ tiếp cận.",
    name: "Hoàng Long",
    role: "Người tham dự sự kiện",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
    quoteColor: "text-[#2D5E4F]",
    topDecor: { color: "bg-[#FFE780]", rotation: "-rotate-12" },
    bottomDecor: { color: "bg-[#A5DAF1]" }
  }
];

// Animation variants
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
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const StoriesSection: React.FC = () => {
  return (
    <section
      id="stories"
      className="py-24 bg-gray-50 relative notebook-bg overflow-hidden"
    >
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

      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-[#A5DAF1] rounded-full blur-3xl opacity-20"
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
        className="absolute bottom-20 left-10 w-48 h-48 bg-[#FFE780] rounded-full blur-3xl opacity-20"
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
          Câu Chuyện & Hoạt Động
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1] as const
                }
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 relative"
            >
              <motion.div
                className={`absolute -top-3 -right-3 w-16 h-16 ${testimonial.topDecor.color} rounded-lg ${testimonial.topDecor.rotation} shadow-md`}
                animate={{
                  rotate: [
                    testimonial.topDecor.rotation === 'rotate-12' ? 7 : -7,
                    testimonial.topDecor.rotation === 'rotate-12' ? 17 : -17,
                    testimonial.topDecor.rotation === 'rotate-12' ? 7 : -7
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className={`absolute -bottom-2 -left-2 w-12 h-12 ${testimonial.bottomDecor.color} rounded-full shadow-md`}
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    delay: 0.5 + (index * 0.15),
                    ease: [0.25, 0.1, 0.25, 1] as const
                  }
                }}
                viewport={{ once: true }}
              >
                <Quote className={`${testimonial.quoteColor} w-8 h-8 mb-4`} />
              </motion.div>

              <p className="text-gray-700 text-base sm:text-lg mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.7 + (index * 0.15),
                    ease: [0.25, 0.1, 0.25, 1] as const
                  }
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
                <div>
                  <p className="font-bold text-[#2D5E4F]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StoriesSection;