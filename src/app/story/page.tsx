'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Quote } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  preview: string;
  content: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: "Minh Anh",
    subtitle: "Lần đầu nghe về HPV",
    category: "Khám phá",
    preview: "Từ người thờ ơ đến người tiên phong trong việc tiêm ngừa HPV tại trường.",
    content: `Minh Anh, học sinh lớp 10, luôn nghĩ rằng sức khỏe sinh sản là chuyện "người lớn". Cô chỉ quan tâm đến bài kiểm tra, nhóm nhạc yêu thích, và các buổi hẹn bạn.

Một ngày nọ, trong giờ sinh học, cô giáo chiếu một đoạn video nói về virus HPV và ung thư cổ tử cung. Minh Anh nghe loáng thoáng, thấy lạ: "Ủa, cái này liên quan gì tới mình đâu?". Nhưng buổi tối hôm đó, cô vô tình đọc được bài viết về chị gái của một người bạn bị tổn thương cổ tử cung do HPV, và cô bàng hoàng: "Người đó mới 24 tuổi thôi mà…".

Từ đó, Minh Anh bắt đầu tìm hiểu thêm, hỏi mẹ về vắc-xin HPV, và quyết định chủ động đi tiêm. Cô còn rủ nhóm bạn cùng lớp cùng đăng ký, khiến cả lớp trở thành "nhóm tiên phong" của trường trong việc tiêm ngừa.`
  },
  {
    id: 2,
    title: "Bảo",
    subtitle: "Cậu con trai từng ngại nói về HPV",
    category: "Thay đổi",
    preview: "HPV không chỉ là chuyện của con gái, mà còn ảnh hưởng đến nam giới.",
    content: `Bảo, học sinh lớp 11, từng thấy mấy buổi tuyên truyền ở trường chỉ dành cho "con gái". Cậu ngồi cuối lớp, cắm tai nghe, chẳng mấy quan tâm.

Nhưng hôm đó, cô y tế mời một bác sĩ trẻ đến nói chuyện. Ông nói: "HPV không chỉ ảnh hưởng đến nữ, mà còn có thể gây ung thư họng, hậu môn, dương vật ở nam giới. Và con trai chính là nguồn lây lan thầm lặng."

Cả lớp im phăng phắc. Bảo bắt đầu chú ý. Về nhà, cậu thử tìm hiểu và bất ngờ khi biết nam giới cũng nên tiêm HPV trước 26 tuổi. Cậu kể lại với nhóm bạn thân — ban đầu ai cũng cười: "Mấy cái đó của con gái mà mày!". Nhưng sau khi Bảo gửi link bài báo của Bộ Y tế, cả nhóm mới im lặng. Một tuần sau, hai người bạn của Bảo cũng đến trung tâm y tế đăng ký tiêm.`
  },
  {
    id: 3,
    title: "Lan và Mai",
    subtitle: "Quyết định sau giờ tan học",
    category: "Tình bạn",
    preview: "Hai cô bạn thân cùng nhau vượt qua nỗi sợ kim tiêm và bảo vệ sức khỏe.",
    content: `Lan và Mai là đôi bạn thân học lớp 12. Một hôm, trên đường về nhà, Mai thấy tờ áp phích "Tiêm HPV – Bảo vệ tương lai bạn gái" trước trạm y tế.

"Ê Lan, nghe lạ không? HPV là gì vậy?" - "Không biết, chắc bệnh gì đó của người lớn."

Nhưng hôm sau, cô y tế vào trường nói chuyện về ung thư cổ tử cung và vắc-xin phòng ngừa. Cả hai bắt đầu chú ý hơn. Dù vậy, Mai vẫn ngại: "Tao sợ kim tiêm lắm…". Lan cười: "Thì đi chung, tao nắm tay mày cho."

Tuần sau, hai cô bạn cùng đến trung tâm tiêm chủng. Lúc chờ đến lượt, Mai run như cầy sấy, còn Lan giả vờ kể chuyện cười để Mai quên đi. Sau khi tiêm xong, họ cùng đi ăn kem, nói đùa: "Giờ tụi mình có siêu năng lực bảo vệ bản thân rồi đó!"`
  },
  {
    id: 4,
    title: "Thảo",
    subtitle: "Lớp trưởng và hành trình vượt định kiến",
    category: "Can đảm",
    preview: "Tiêm vắc-xin là để bảo vệ sức khỏe, không phải để đánh giá con người.",
    content: `Thảo là lớp trưởng năng nổ, học giỏi, luôn được bạn bè quý mến. Một hôm, trong giờ sinh hoạt, cô giáo nhắc về chương trình tiêm vắc-xin HPV cho học sinh nữ.

Khi cô giáo hỏi: "Ai đăng ký tiêm?", chỉ có vài cánh tay giơ lên — Thảo cũng im lặng. Không phải vì cô không hiểu, mà vì sợ... mọi người nghĩ "những người tiêm HPV là đã có bạn trai".

Buổi chiều hôm đó, Thảo về nhà kể chuyện với mẹ. Mẹ cô nói nhẹ: "Ngày xưa mẹ cũng từng xấu hổ khi nói về chuyện này, nên mẹ hiểu. Nhưng con à, tiêm vắc-xin là để bảo vệ sức khỏe, không phải để đánh giá con người."

Hôm sau, Thảo là người đầu tiên giơ tay đăng ký. Cô còn đứng lên chia sẻ với lớp: "Tụi mình học để thi, để biết, vậy tại sao không học để bảo vệ chính mình?" Cả lớp vỗ tay. Tuần sau, danh sách đăng ký đã tăng gấp đôi.`
  },
  {
    id: 5,
    title: "Linh",
    subtitle: "Nỗi sợ kim tiêm và bước trưởng thành",
    category: "Vượt khó",
    preview: "Hóa ra bảo vệ bản thân đôi khi chỉ là vượt qua một cú chích nhỏ.",
    content: `Linh sợ tiêm từ nhỏ. Chỉ cần nghe tiếng bật nắp kim là nước mắt chực rơi.

Khi trường triển khai tiêm HPV, Linh giấu mẹ, không đăng ký. Nhưng cô bạn thân – Hân – rủ rê mãi: "Đi đi Linh, tao đi chung với mày, không sao đâu."

Hôm tiêm, Linh run lẩy bẩy. Cô y tá mỉm cười: "Nhắm mắt lại, hít sâu, chỉ một giây thôi." Kim tiêm chạm nhẹ. Xong rồi. Linh mở mắt, ngạc nhiên. Cô bật cười, nước mắt chảy vì... nhẹ nhõm.

Về nhà, Linh viết trong nhật ký: "Hôm nay tôi làm được điều mình từng sợ. Hóa ra bảo vệ bản thân đôi khi chỉ là vượt qua một cú chích nhỏ."`
  },
  {
    id: 6,
    title: "Hương",
    subtitle: "Câu chuyện của cô y tá trẻ",
    category: "Cảm hứng",
    preview: "Từ người từng nhiễm HPV đến người truyền cảm hứng cho hàng trăm bạn trẻ.",
    content: `Hương, 27 tuổi, làm y tá ở trung tâm y tế quận. Cô từng nhiễm HPV type 16 năm 23 tuổi, phát hiện khi đi khám sức khỏe định kỳ.

Cô may mắn phát hiện sớm, điều trị ổn, nhưng ám ảnh không quên. Vì thế, khi có chiến dịch tiêm cho học sinh, Hương luôn là người nói chuyện với các em bằng sự đồng cảm thật lòng.

"Cô cũng từng chủ quan như các em. Cô muốn các em biết rằng việc tiêm sớm là một món quà cho tương lai."

Sau mỗi buổi nói chuyện, có hàng chục em gái – và cả mấy cậu con trai – đến hỏi thêm. Hương nhìn họ mà thấy lòng nhẹ nhõm.`
  }
];

const StoriesBlock: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header - Minimal & Professional */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const } }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold tracking-wider text-[#2D5E4F] uppercase mb-4">
            Câu chuyện thật
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hành trình của những<br />người đi trước
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Những trải nghiệm thực tế từ các bạn trẻ trong hành trình tìm hiểu và bảo vệ sức khỏe sinh sản.
          </p>
        </motion.div>

        {/* Stories Grid - Clean Cards */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setSelectedStory(story)}
              className="group cursor-pointer"
            >
              <div className="bg-white border border-gray-200 hover:border-[#2D5E4F] rounded-2xl p-8 transition-all duration-500 hover:shadow-xl">
                {/* Category */}
                <span className="inline-block text-xs font-semibold tracking-wider text-[#2D5E4F] uppercase mb-4">
                  {story.category}
                </span>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#2D5E4F] transition-colors">
                  {story.title}
                </h3>
                <p className="text-base text-gray-600 font-medium mb-4">
                  {story.subtitle}
                </p>

                {/* Preview */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {story.preview}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-[#2D5E4F] font-semibold group-hover:gap-3 transition-all">
                  <span>Đọc thêm</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Story Modal - Professional Design */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              {/* Header */}
              <div className="mb-10">
                <span className="inline-block text-xs font-semibold tracking-wider text-[#2D5E4F] uppercase mb-4">
                  {selectedStory.category}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  {selectedStory.title}
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  {selectedStory.subtitle}
                </p>
              </div>

              {/* Quote Icon */}
              <div className="mb-8">
                <Quote className="w-12 h-12 text-[#2D5E4F]/20" />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {selectedStory.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 italic">
                  Chia sẻ từ chiến dịch Aura-right
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StoriesBlock;