import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 3000);
    };

    return (
        <section
            id="contact"
            className="py-24 bg-gradient-to-br dotted-bg from-[#A5DAF1] to-white  relative overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle, #2D5E4F 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <motion.div
                className="absolute top-20 left-10 w-24 h-24 bg-white opacity-20 rounded-full"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-32 h-32 bg-[#FFE780] opacity-20 rotate-45"
                animate={{ y: [0, -25, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    delay: 0.5,
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    className="text-4xl sm:text-5xl font-bold text-[#2D5E4F] text-center mb-6"
                    style={{ fontFamily: 'Pacifico, cursive' }}
                >
                    Liên Hệ Với Chúng Tôi
                </motion.h2>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                delay: 0.2,
                                ease: [0.25, 0.1, 0.25, 1] as const,
                            },
                        },
                    }}
                    className="text-lg sm:text-xl text-[#2D5E4F] text-center mb-16"
                >
                    Hãy cùng chúng tôi lan tỏa nhận thức và tạo nên sự khác biệt
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-12"
                >
                    <div className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-[#2D5E4F] font-semibold mb-2"
                            >
                                Họ và Tên
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 text-black dark:text-black rounded-xl border-2 border-gray-200 focus:border-[#A5DAF1] focus:outline-none focus:ring-2 focus:ring-[#A5DAF1] focus:ring-opacity-50 transition-all"
                                placeholder="Nhập họ và tên của bạn"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-[#2D5E4F] font-semibold mb-2"
                            >
                                Địa chỉ Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 text-black dark:text-black rounded-xl border-2 border-gray-200 focus:border-[#A5DAF1] focus:outline-none focus:ring-2 focus:ring-[#A5DAF1] focus:ring-opacity-50 transition-all"
                                placeholder="email@example.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-[#2D5E4F] font-semibold mb-2"
                            >
                                Tin nhắn
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-6 py-4 rounded-xl text-black dark:text-black border-2 border-gray-200 focus:border-[#A5DAF1] focus:outline-none focus:ring-2 focus:ring-[#A5DAF1] focus:ring-opacity-50 transition-all resize-none"
                                placeholder="Hãy viết điều mà bạn muốn chia sẻ hay tâm sự với AuraRight"
                            />
                        </div>

                        <motion.button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting || isSubmitted}
                            whileHover={!isSubmitting && !isSubmitted ? { y: -5, scale: 1.03 } : {}}
                            whileTap={!isSubmitting && !isSubmitted ? { scale: 0.97 } : {}}
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
                            className="w-full text-[#2D5E4F] font-bold text-xl px-12 py-5 rounded-full shadow-xl transition-all duration-400 disabled:opacity-70 disabled:cursor-not-allowed"
                            style={{
                                background: "linear-gradient(135deg, #66ACFF, #FFE780)",
                            }}
                        >
                            <span className="flex items-center justify-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Đang gửi...
                                    </>
                                ) : isSubmitted ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        Đã gửi thành công!
                                    </>
                                ) : (
                                    <>
                                        Gửi tin nhắn
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </section>
    );
};

export default ContactSection;