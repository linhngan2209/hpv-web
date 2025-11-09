import React from 'react';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-12 bg-gradient-to-r from-[#A5DAF1] via-[#E2F5D5] to-[#FFE780] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full blur-3xl animate-float-delay-2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8">

          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-[#2D5E4F]" fill="currentColor" viewBox="0 0 512 512">
                <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM144 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#2D5E4F]" style={{ fontFamily: 'Pacifico, cursive' }}>
              Aura-right
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-[#2D5E4F] animate-fade-in">
            <a href="#about" className="hover:opacity-75 transition-opacity font-medium">Về Chúng Tôi</a>
            <a href="#programs" className="hover:opacity-75 transition-opacity font-medium">Chương Trình</a>
            <a href="#resources" className="hover:opacity-75 transition-opacity font-medium">Tài Nguyên</a>
            <a href="#contact" className="hover:opacity-75 transition-opacity font-medium">Liên Hệ</a>
            <a href="#privacy" className="hover:opacity-75 transition-opacity font-medium">Chính Sách Bảo Mật</a>
          </nav>

          <div className="flex items-center space-x-6 animate-fade-in">
            <a
              href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 text-[#2D5E4F]" fill="currentColor" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 text-[#2D5E4F]" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 text-[#2D5E4F]" fill="currentColor" viewBox="0 0 448 512">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </a>
          </div>

          <p className="text-[#2D5E4F] text-center animate-fade-in">
            Được tạo với <span className="text-red-500 inline-block animate-pulse">💙</span> bởi nhóm Aura-right
          </p>

          <p className="text-sm text-[#2D5E4F] opacity-75 text-center animate-fade-in">
            © 2025 Aura-right. Nâng cao nhận thức thanh thiếu niên qua giáo dục sức khỏe.
          </p>
        </div>
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
