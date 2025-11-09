import React from 'react';
import { Users, Heart, ChevronDown } from 'lucide-react';
import Image from "next/image";

const VirusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor">
        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V43.5c0 49.9-60.3 74.9-95.6 39.6L120.2 75C107.7 62.5 87.5 62.5 75 75s-12.5 32.8 0 45.3l8.2 8.2C118.4 163.7 93.4 224 43.5 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H43.5c49.9 0 74.9 60.3 39.6 95.6L75 391.8c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V468.5c0-49.9 60.3-74.9 95.6-39.6l8.2 8.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-8.2-8.2c-35.3-35.3-10.3-95.6 39.6-95.6H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H468.5c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C348.3 118.4 288 93.4 288 43.5V32zM176 224a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </svg>
);

const HandHoldingHeartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 576 512" fill="currentColor">
        <path d="M148 76.6C148 34.3 182.3 0 224.6 0c20.3 0 39.8 8.1 54.1 22.4l9.3 9.3 9.3-9.3C311.6 8.1 331.1 0 351.4 0C393.7 0 428 34.3 428 76.6c0 20.3-8.1 39.8-22.4 54.1L302.1 234.1c-7.8 7.8-20.5 7.8-28.3 0L170.4 130.7C156.1 116.4 148 96.9 148 76.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
    </svg>
);

const HeroSection: React.FC = () => {
    const scrollToContent = () => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen dotted-bg bg-gradient-to-br from-[#A5DAF1] via-[#B8E5D9] to-[#E2F5D5] overflow-hidden pt-24 pb-12"
        >
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(45, 94, 79, 0.15) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="absolute top-20 left-10 w-16 h-16 bg-[#FFE780] rounded-full opacity-60 animate-float" />
            <div className="absolute top-30 right-10 w-[160px] h-[160px] animate-float">
                <Image
                    src="/khien.png"
                    alt="Đối tác Aura-right"
                    width={160}
                    height={160}
                    className="w-full h-full object-contain  "
                />
            </div>

            <div className="absolute bottom-32 left-32 w-20 h-20 bg-[#E2F5D5] rotate-45 opacity-50 animate-float-delay-2" />
            <div className="absolute top-1/2 right-10 w-12 h-12 bg-[#A5DAF1] rounded-full opacity-50 animate-float" />

            <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col items-center justify-center relative z-10 min-h-[calc(100vh-6rem)]">

                <div className="w-full max-w-5xl bg-[#2D5E4F] rounded-3xl p-8 sm:p-12 lg:p-16 mb-8 relative shadow-2xl animate-fade-in-up">

                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFE780] rounded-full animate-wiggle shadow-lg" />
                    <div className="absolute -bottom-12 -left-12 w-32 h-32 animate-wiggle-delay">
                        <Image
                            src="/viruss.png"
                            alt="Virus"
                            width={64}
                            height={64}
                            className="w-full h-full object-contain rounded-lg drop-shadow-lg"
                        />
                    </div>


                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center mb-4 sm:mb-6 drop-shadow-2xl"
                        style={{ fontFamily: 'Pacifico, cursive' }}>
                        HPV Wrong – Aura Right
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-[#E2F5D5] font-normal text-center mb-8 sm:mb-12">
                        Hiểu HPV – Bảo vệ sức khỏe tương lai
                    </p>

                    <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12">
                        <div className="animate-float">
                            <VirusIcon className="text-[#FFE780] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 animate-spin-slow" />
                        </div>
                        <div className="animate-float-delay">
                            <Users className="text-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                        </div>
                        <div className="animate-float-delay-2">
                            <HandHoldingHeartIcon className="text-[#A5DAF1] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                        </div>
                    </div>
                </div>

                <button
                    className="relative text-[#2D5E4F] font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-2xl bg-gradient-to-br from-[#A5DAF1] to-[#FFE780] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:from-[#FFE780] hover:to-[#E2F5D5] animate-pulse-glow"
                    onClick={scrollToContent}
                >
                    Tìm hiểu về HPV
                </button>

                <button
                    onClick={scrollToContent}
                    className="absolute bottom-8 animate-bounce-slow"
                    aria-label="Scroll to content"
                >
                    <ChevronDown className="text-[#2D5E4F] w-8 h-8 drop-shadow-lg" />
                </button>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 35px rgba(165, 218, 241, 0.7);
          }
          50% {
            box-shadow: 0 0 50px rgba(165, 218, 241, 0.9);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 3s ease-in-out infinite 0.5s;
        }

        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite 1s;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }

        .animate-wiggle-delay {
          animation: wiggle 1s ease-in-out infinite 0.3s;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 10s linear infinite;
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

export default HeroSection;