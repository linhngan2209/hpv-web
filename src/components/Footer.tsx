import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-12 bg-gradient-to-r from-[#A5DAF1] via-[#E2F5D5] to-[#FFE780] relative overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full blur-3xl animate-float-delay-2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8">

          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in">
            <Image src="/logo_new.png" alt="Aura-right Logo" width={50} height={50} className="w-30 h-30 object-contain" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-[#2D5E4F] animate-fade-in">
            <a href="/#about" className="hover:opacity-75 transition-opacity font-medium">Về Chúng Tôi</a>
            <a href="/quizzes" className="hover:opacity-75 transition-opacity font-medium">Game</a>
            <a href="/story" className="hover:opacity-75 transition-opacity font-medium">Câu chuyện</a>
            <a href="/#contact" className="hover:opacity-75 transition-opacity font-medium">Liên Hệ</a>
            <a href="/#privacy" className="hover:opacity-75 transition-opacity font-medium">Chính Sách Bảo Mật</a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-6 animate-fade-in">
            <a
              href="https://www.facebook.com/profile.php?id=61581779634283"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 text-[#2D5E4F]" fill="currentColor" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@aura_right"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 text-[#2D5E4F]" fill="currentColor" viewBox="0 0 448 512">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </a>
          </div>

          {/* Đồng hành cùng HPV Việt Nam */}
          <div className="flex flex-col items-center space-y-2 animate-fade-in mt-6">
            <p className="text-[#2D5E4F] font-medium text-center">
              Đồng hành cùng: <span className="font-bold">HPV Việt Nam</span>
            </p>
            <p className="text-[#2D5E4F] text-sm text-center">
              Email: <a href="mailto:lienhe.hpvvietnam@gmail.com" className="underline">lienhe.hpvvietnam@gmail.com</a> | Zalo: 0972.744.560
            </p>
            <p className="text-[#2D5E4F] text-sm text-center">
              Địa chỉ: Tòa nhà Techcombank, số 101 Láng Hạ
            </p>
          </div>

          {/* Footer Bottom */}
          <p className="text-[#2D5E4F] text-center animate-fade-in mt-4">
            Được tạo với <span className="text-red-500 inline-block animate-pulse">💙</span> bởi nhóm Aura-right
          </p>
          <p className="text-sm text-[#2D5E4F] opacity-75 text-center animate-fade-in">
            © 2025 Aura-right. Nâng cao nhận thức thanh thiếu niên qua giáo dục sức khỏe.
          </p>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 6s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-delay-2 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </footer>
  );
}
