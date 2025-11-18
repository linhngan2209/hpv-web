import { QuizSet } from "@/components/Quizzes/QuizzLevel";

export const quizSets: QuizSet[] = [
    {
        id: 1,
        title: "Bạn biết gì về HPV?",
        subtitle: "Kiểm tra nhận thức cơ bản của bạn",
        color: "#FFE780",
        gradient: "from-[#FFE780] to-[#A5DAF1]",
        questions: [
            {
                id: 1,
                question: "HPV là viết tắt của cụm từ nào?",
                options: ["Human Papillomavirus", "Hepatitis Virus", "Human Protein Value"],
                correctAnswer: 0,
                explanation: "HPV là virus gây u nhú ở người – rất phổ biến."
            },
            {
                id: 2,
                question: "HPV lây truyền qua con đường nào?",
                options: ["Tiếp xúc da kề da vùng nhạy cảm", "Qua ăn uống", "Qua hô hấp"],
                correctAnswer: 0,
                explanation: "HPV lây qua tiếp xúc da – đặc biệt vùng sinh dục."
            },
            {
                id: 3,
                question: "HPV chỉ ảnh hưởng đến nữ giới?",
                options: ["Đúng", "Sai"],
                correctAnswer: 1,
                explanation: "HPV có thể gây bệnh cho cả nam và nữ nhé!"
            },
            {
                id: 4,
                question: "HPV có gây ung thư cổ tử cung không?",
                options: ["Có", "Không"],
                correctAnswer: 0,
                explanation: "Hơn 95% ca ung thư cổ tử cung do HPV gây ra."
            },
            {
                id: 5,
                question: "HPV có thể tự khỏi mà không gây hại?",
                options: ["Có", "Không"],
                correctAnswer: 0,
                explanation: "Đa số tự khỏi sau 1–2 năm, nhưng có chủng gây ung thư."
            },
            {
                id: 6,
                question: "HPV có triệu chứng rõ ràng ngay sau khi nhiễm?",
                options: ["Có", "Không"],
                correctAnswer: 1,
                explanation: "HPV thường 'ẩn mình', không có dấu hiệu rõ rệt."
            },
            {
                id: 7,
                question: "Độ tuổi nào được khuyến nghị tiêm vắc-xin HPV?",
                options: ["9–18 tuổi", "20–30 tuổi", "30+"],
                correctAnswer: 0,
                explanation: "Tiêm sớm giúp tạo kháng thể mạnh nhất!"
            },
            {
                id: 8,
                question: "Tiêm vắc-xin HPV giúp bảo vệ khỏi bệnh nào sau đây?",
                options: ["Ung thư cổ tử cung", "Cảm cúm", "Viêm gan B"],
                correctAnswer: 0,
                explanation: "Vắc-xin HPV giúp phòng ngừa nhiều bệnh ung thư liên quan."
            },
            {
                id: 9,
                question: "Có cần kiểm tra sức khỏe trước khi tiêm HPV không?",
                options: ["Có, nên hỏi bác sĩ", "Không cần"],
                correctAnswer: 0,
                explanation: "Kiểm tra giúp đảm bảo tiêm đúng liều, an toàn."
            },
            {
                id: 10,
                question: "HPV có phổ biến không?",
                options: ["Có, rất phổ biến", "Hiếm gặp"],
                correctAnswer: 0,
                explanation: "8/10 người từng nhiễm HPV ít nhất 1 lần trong đời!"
            }

        ]
    },
    {
        id: 2,
        title: "Đập tan hiểu lầm về HPV!",
        subtitle: "Sửa nhận thức sai, tạo wow moment",
        color: "#E2F5D5",
        gradient: "from-[#E2F5D5] to-[#A5DAF1]",
        questions: [
            {
                id: 1,
                question: "HPV chỉ lây khi có quan hệ tình dục?",
                options: ["Đúng", "Sai"],
                correctAnswer: 1,
                explanation: "HPV có thể lây qua tiếp xúc da kề da vùng nhạy cảm."
            },
            {
                id: 2,
                question: "Ôm hôn có lây HPV không?",
                options: ["Có", "Không"],
                correctAnswer: 1,
                explanation: "Ôm hôn không phải đường lây chính của HPV."
            },
            {
                id: 3,
                question: "Tiêm HPV chỉ dành cho con gái?",
                options: ["Đúng", "Sai"],
                correctAnswer: 1,
                explanation: "Nam cũng cần tiêm – HPV không phân biệt giới tính."
            },
            {
                id: 4,
                question: "Tiêm vắc-xin rồi thì khỏi cần đi khám?",
                options: ["Đúng", "Sai"],
                correctAnswer: 1,
                explanation: "Tiêm giảm rủi ro, nhưng vẫn cần khám định kỳ."
            },
            {
                id: 5,
                question: "HPV chỉ gây ung thư cổ tử cung?",
                options: ["Đúng", "Sai"],
                correctAnswer: 1,
                explanation: "HPV còn gây ung thư hầu họng, dương vật, hậu môn…"
            },
            {
                id: 6,
                question: "Tiêm HPV có nguy hiểm không?",
                options: ["Có", "Không"],
                correctAnswer: 1,
                explanation: "Vắc-xin an toàn, tác dụng phụ nhẹ như đau chỗ tiêm."
            },
            {
                id: 7,
                question: "HPV hiếm gặp ở Việt Nam?",
                options: ["Đúng", "Sai"],
                correctAnswer: 1,
                explanation: "Việt Nam có hơn 4.000 ca ung thư cổ tử cung mỗi năm do HPV."
            },
            {
                id: 8,
                question: "HPV tự khỏi thì không cần tiêm?",
                options: ["Đúng", "Sai"],
                correctAnswer: 1,
                explanation: "Không ai biết chắc chủng nào sẽ gây bệnh – nên phòng vẫn hơn."
            },
            {
                id: 9,
                question: "Tiêm càng sớm càng tốt?",
                options: ["Đúng", "Sai"],
                correctAnswer: 0,
                explanation: "Giai đoạn vàng là 9–14 tuổi theo WHO."
            },
            {
                id: 10,
                question: "Nếu người yêu tiêm rồi, mình không cần?",
                options: ["Đúng", "Sai"],
                correctAnswer: 1,
                explanation: "Cả hai nên tiêm để bảo vệ lẫn nhau."
            },
            {
                id: 11,
                question: "HPV chỉ có ở nước ngoài, không đáng lo ở Việt Nam?",
                options: ["Đúng", "Sai"],
                correctAnswer: 1,
                explanation: "Việt Nam nằm trong nhóm có tỷ lệ HPV cao ở châu Á."
            },
            {
                id: 12,
                question: "HPV chỉ xảy ra với người 'không sạch sẽ'?",
                options: ["Đúng", "Sai"],
                correctAnswer: 1,
                explanation: "HPV không phân biệt ai, chỉ cần tiếp xúc da kề da."
            }

        ]
    },
    {
        id: 3,
        title: "Team Aura-right hay Aura-wrong?",
        subtitle: "Củng cố kiến thức, tổng kết chiến dịch",
        color: "#A5DAF1",
        gradient: "from-[#A5DAF1] to-[#FFE780]",
        questions: [
            {
                id: 1,
                question: "HPV là nguyên nhân hàng đầu của bệnh nào?",
                options: ["Ung thư cổ tử cung", "Cảm cúm", "Tiểu đường"],
                correctAnswer: 0,
                explanation: "95% ca ung thư cổ tử cung có liên quan đến HPV."
            },
            {
                id: 2,
                question: "Ở Việt Nam, mỗi năm có bao nhiêu ca ung thư cổ tử cung mới?",
                options: ["500", "4.000", "10.000"],
                correctAnswer: 1,
                explanation: "Theo Globocan 2022, khoảng 4.132 ca/năm."
            },
            {
                id: 3,
                question: "Ai nên tiêm HPV?",
                options: ["Chỉ nữ", "Nam và nữ"],
                correctAnswer: 1,
                explanation: "Cả hai giới đều có nguy cơ nhiễm HPV."
            },
            {
                id: 4,
                question: "HPV có thể gây bệnh ở nam giới không?",
                options: ["Có", "Không"],
                correctAnswer: 0,
                explanation: "HPV có thể gây ung thư dương vật, hậu môn, hầu họng."
            },
            {
                id: 5,
                question: "Khi nào là thời điểm tiêm HPV hiệu quả nhất?",
                options: ["Trước 18 tuổi", "Sau khi kết hôn"],
                correctAnswer: 0,
                explanation: "WHO khuyến cáo 9–14 tuổi là giai đoạn vàng."
            },
            {
                id: 6,
                question: "HPV lây qua máu hay nước bọt không?",
                options: ["Có", "Không"],
                correctAnswer: 1,
                explanation: "HPV chủ yếu lây qua da vùng nhạy cảm, không qua máu."
            },
            {
                id: 7,
                question: "Có bao nhiêu loại HPV được xem là 'nguy cơ cao'?",
                options: ["5", "10", "Hơn 12"],
                correctAnswer: 2,
                explanation: "Khoảng 14 chủng HPV có nguy cơ cao gây ung thư."
            },
            {
                id: 8,
                question: "Tiêm vắc-xin HPV bao nhiêu liều là đủ (với 9–14 tuổi)?",
                options: ["1 hoặc 2", "3"],
                correctAnswer: 0,
                explanation: "WHO 2022 cho phép 1 liều duy nhất vẫn hiệu quả cao."
            },
            {
                id: 9,
                question: "Vắc-xin HPV bảo vệ suốt đời?",
                options: ["Gần như", "Chỉ 3 năm"],
                correctAnswer: 0,
                explanation: "Hiệu quả lâu dài, ít nhất 15 năm theo CDC."
            },
            {
                id: 10,
                question: "Học sinh có thể hỏi về HPV ở đâu?",
                options: ["Ở Aura-right", "Không nơi nào"],
                correctAnswer: 0,
                explanation: "Chatbot Aura-right luôn sẵn sàng giải đáp!"
            },
            {
                id: 11,
                question: "Kiến thức về HPV có nên dạy ở trường?",
                options: ["Có", "Không"],
                correctAnswer: 0,
                explanation: "Kiến thức đúng giúp bảo vệ sức khỏe tuổi teen."
            },
            {
                id: 12,
                question: "Bạn đã sẵn sàng 'Aura-right' chưa?",
                options: ["Rồi", "Chưa"],
                correctAnswer: 0,
                explanation: "Chủ động hiểu – chủ động bảo vệ 💪"
            }

        ]
    }
];