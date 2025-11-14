import React from 'react';
import { Users, ChevronDown } from 'lucide-react';
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
  const scrollToContent = (): void => {
    const aboutSection = document.getElementById('knowledge');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#A5DAF1] to-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 209, 102, 0.2) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="absolute top-24 left-4 w-10 h-10 bg-[#ffd166] rounded-full opacity-50 animate-float" />
      <div className="absolute top-32 right-4 w-28 h-28 animate-float-delay">
        <Image
          src="/khien.png"
          alt="Shield"
          width={96}
          height={96}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-32 right-8 w-8 h-8 bg-[#5196db] rounded-full opacity-50 animate-float-delay-2" />

      <div className="container mx-auto px-6 min-h-screen flex flex-col items-center justify-center py-20">
        
        <div className="w-full max-w-md bg-[#2D5E4F] rounded-2xl p-8 mb-28 relative shadow-2xl animate-fade-in-up">
          
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#ffd166] rounded-full animate-wiggle shadow-lg" />
          <div className="absolute -bottom-10 -left-6 w-24 h-24 animate-wiggle-delay">
            <Image
              src="/viruss.png"
              alt="Virus"
              width={96}
              height={96}
              className="w-full h-full object-contain rounded-lg drop-shadow-lg"
            />
          </div>

          <h1 
            className="text-3xl sm:text-4xl text-white text-center mb-3 drop-shadow-lg leading-tight"
            style={{ fontFamily: 'Pacifico, cursive' }}
          >
            HPV Wrong – Aura Right
          </h1>

          <p className="text-base sm:text-lg text-[#E2F5D5] font-normal text-center mb-6">
            Hiểu HPV – Bảo vệ sức khỏe tương lai
          </p>

          <div className="flex items-center justify-center gap-6 mb-2">
            <div className="animate-float">
              <VirusIcon className="text-[#FFD166] w-12 h-12 animate-spin-slow" />
            </div>
            <div className="animate-float-delay">
              <Users className="text-white w-12 h-12" />
            </div>
            <div className="animate-float-delay-2">
              <HandHoldingHeartIcon className="text-[#5196db] w-12 h-12" />
            </div>
          </div>
        </div>

        <button
          className="relative text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-xl bg-gradient-to-br from-[#2D5E4F] to-[#5196db] transition-all duration-300 active:scale-95 hover:shadow-2xl animate-pulse-glow w-full max-w-xs"
          onClick={scrollToContent}
        >
          Tìm hiểu về HPV
        </button>

      
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(81, 150, 219, 0.5); }
          50% { box-shadow: 0 0 35px rgba(81, 150, 219, 0.8); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delay { animation: float 3s ease-in-out infinite 0.5s; }
        .animate-float-delay-2 { animation: float 3s ease-in-out infinite 1s; }
        .animate-wiggle { animation: wiggle 1s ease-in-out infinite; }
        .animate-wiggle-delay { animation: wiggle 1s ease-in-out infinite 0.3s; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
        .animate-bounce-slow { animation: bounceSlow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 10s linear infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;