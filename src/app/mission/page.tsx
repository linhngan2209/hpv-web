'use client';
import React, { useEffect } from "react";

const MissionPage: React.FC = () => {

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100");
                }
            });
        }, observerOptions);

        const targets = document.querySelectorAll(".animate-fade-in-up, .animate-fade-in");
        targets.forEach((el) => {
            el.classList.add("opacity-0");
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 font-sans">

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#2D5E4F] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5196db] rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 py-20 relative z-10 text-center">
                    <div className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 opacity-0 animate-fade-in">
                        <p className="text-sm font-semibold text-gray-700">SỨ MỆNH HPV</p>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in">
                        <span className="bg-gradient-to-r from-[#2D5E4F] to-[#5196db] bg-clip-text text-transparent" >
                            AURA-RIGHT
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed italic opacity-0 animate-fade-in">
                        "Nâng cao nhận thức về HPV, đồng thời mang lại nguồn kiến thức chính xác giúp các em học sinh THPT tránh những hiểu lầm."
                    </p>
                    <p className="text-lg text-gray-500 mt-4 font-medium opacity-0 animate-fade-in">
                        HPV Wrong – Aura Right
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <p className="text-xl leading-relaxed text-gray-700 mb-6 opacity-0 animate-fade-in-up">
                        <strong className="text-[#2D5E4F]">Aura-right</strong> ra đời với mong muốn mang tri thức khoa học đến gần hơn với tuổi trẻ — nơi những kiến thức y học tưởng chừng khô khan được biến hóa thành ngôn ngữ dễ hiểu, sinh động, qua những câu chuyện, hình ảnh, trò chơi và tương tác gần gũi.
                    </p>
                    <p className="text-xl leading-relaxed text-gray-700 mb-6 opacity-0 animate-fade-in-up delay-100">
                        Với sự bảo trợ truyền thông và chuyên môn nội dung từ <strong className="text-[#5196db]">Bệnh viện Phụ sản Hà Nội</strong> và <strong className="text-[#5196db]">HPV Việt Nam</strong>, chúng tôi tin rằng tri thức đúng không chỉ nên được đọc, mà cần được trải nghiệm và cảm nhận.
                    </p>
                    <p className="text-xl leading-relaxed text-gray-700 mb-8 opacity-0 animate-fade-in-up delay-200">
                        Vì thế, Aura-right không dừng lại ở việc chia sẻ thông tin, mà mở ra một không gian đối thoại cởi mở, an toàn – nơi học sinh có thể hỏi, chia sẻ và thấu hiểu.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: 'Website & Blog',
      desc: 'Nền tảng kiến thức toàn diện về HPV với ngôn ngữ dễ hiểu, phù hợp với học sinh THPT',
    },
    {
      title: 'Chatbot AI "Hiểu HPV"',
      desc: 'Trợ lý thông minh giải đáp mọi thắc mắc về HPV một cách nhanh chóng và chính xác',
    },
    {
      title: 'Quiz Lớp Học',
      desc: 'Trò chơi tương tác giúp học sinh kiểm tra và củng cố kiến thức về HPV',
    },
    {
      title: 'Talkshow THPT Đan Phượng',
      desc: 'Sự kiện giao lưu trực tiếp đầu tiên, mở ra không gian đối thoại cởi mở và an toàn',
    },
    {
      title: 'Workshop Giáo Dục',
      desc: 'Các buổi workshop trực tuyến giúp học sinh và giáo viên hiểu đúng về HPV',
    },
    {
      title: 'Chuỗi Sự Kiện Truyền Thông',
      desc: 'Các sự kiện truyền thông giúp lan tỏa kiến thức đúng về HPV đến học sinh và cộng đồng',
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className="mission-card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
    >
      <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
    </div>
  ))}
</div>

            </section>

            <section className="py-20 bg-white text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 opacity-0 animate-fade-in-up">
                    <span className="bg-gradient-to-r from-[#2D5E4F] to-[#5196db] bg-clip-text text-transparent">
                        Bởi khi chúng ta hiểu đúng, chúng ta sẽ mạnh mẽ hơn.
                    </span>
                </h2>
                <p className="text-2xl text-gray-700 mb-12 opacity-0 animate-fade-in-up delay-100">
                    Và khi mạnh mẽ hơn, chúng ta sẽ biết yêu thương đúng cách.
                </p>
                <a href="#" className="inline-block px-8 py-4 bg-gradient-to-r from-[#2D5E4F] to-[#5196db] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 opacity-0 animate-fade-in-up delay-200">
                    Tìm hiểu thêm về chúng tôi
                </a>
            </section>

        </div>
    );
};

export default MissionPage;
