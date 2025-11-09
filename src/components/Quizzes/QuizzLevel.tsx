import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizSet {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  gradient: string;
  questions: Question[];
}

const quizSets: QuizSet[] = [
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
        question: "Tiêm HPV chỉ dành cho con gái?",
        options: ["Đúng", "Sai"],
        correctAnswer: 1,
        explanation: "Nam cũng cần tiêm – HPV không phân biệt giới tính."
      },
      {
        id: 3,
        question: "HPV chỉ gây ung thư cổ tử cung?",
        options: ["Đúng", "Sai"],
        correctAnswer: 1,
        explanation: "Còn gây ung thư hầu họng, dương vật, hậu môn…"
      },
      {
        id: 4,
        question: "Tiêm HPV có nguy hiểm không?",
        options: ["Có", "Không"],
        correctAnswer: 1,
        explanation: "Vắc-xin an toàn, tác dụng phụ nhẹ như đau chỗ tiêm."
      },
      {
        id: 5,
        question: "Tiêm càng sớm càng tốt?",
        options: ["Đúng", "Sai"],
        correctAnswer: 0,
        explanation: "Giai đoạn vàng là 9–14 tuổi theo WHO."
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
        explanation: "Theo Globocan 2022, ~4.132 ca/năm."
      },
      {
        id: 3,
        question: "Ai nên tiêm HPV?",
        options: ["Chỉ nữ", "Nam và nữ"],
        correctAnswer: 1,
        explanation: "Cả hai giới đều có nguy cơ nhiễm."
      },
      {
        id: 4,
        question: "Khi nào là thời điểm tiêm HPV hiệu quả nhất?",
        options: ["Trước 18 tuổi", "Sau khi kết hôn"],
        correctAnswer: 0,
        explanation: "WHO khuyến cáo 9–14 tuổi là giai đoạn vàng."
      },
      {
        id: 5,
        question: "Bạn đã sẵn sàng 'Aura-right' chưa?",
        options: ["Rồi", "Chưa"],
        correctAnswer: 0,
        explanation: "Chủ động hiểu – chủ động bảo vệ 💪"
      }
    ]
  }
];

const QuizSection: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuizSet = selectedQuiz !== null ? quizSets[selectedQuiz] : null;
  const currentQ = currentQuizSet?.questions[currentQuestion];

  const handleQuizSelect = (index: number) => {
    setSelectedQuiz(index);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === currentQ?.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < (currentQuizSet?.questions.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setShowResults(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <section id="quiz" className="py-24  relative overflow-hidden">
     
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] as const } }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-5xl font-bold text-[#2D5E4F] text-center mb-4"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          Kiểm tra kiến thức của bạn
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const } }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-16 text-lg"
        >
          Chọn một quiz để bắt đầu hành trình tìm hiểu về HPV
        </motion.p>

        <AnimatePresence mode="wait">
          {selectedQuiz === null ? (
            <motion.div
              key="quiz-selection"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {quizSets.map((quiz, index) => (
                <motion.div
                  key={quiz.id}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => handleQuizSelect(index)}
                  className={`bg-gradient-to-br ${quiz.gradient} rounded-3xl p-8 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-500`}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-[#2D5E4F]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D5E4F] text-center mb-3">
                    Quiz {quiz.id}
                  </h3>
                  <p className="text-xl font-semibold text-[#2D5E4F] text-center mb-2">
                    {quiz.title}
                  </p>
                  <p className="text-sm text-[#2D5E4F]/80 text-center mb-6">
                    {quiz.subtitle}
                  </p>
                  <div className="flex items-center justify-center">
                    <span className="text-[#2D5E4F] font-medium flex items-center gap-2">
                      Bắt đầu <ChevronRight className="w-5 h-5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : !showResults ? (
            <motion.div
              key="quiz-question"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Câu hỏi {currentQuestion + 1}/{currentQuizSet?.questions.length}
                    </span>
                    <span className="text-sm font-medium text-[#2D5E4F]">
                      Điểm: {score}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#A5DAF1] to-[#2D5E4F]"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / (currentQuizSet?.questions.length || 1)) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2D5E4F] mb-8">
                  {currentQ?.question}
                </h3>

                {/* Options */}
                <div className="space-y-4 mb-8">
                  {currentQ?.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === currentQ.correctAnswer;
                    const showResult = showExplanation;

                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showExplanation}
                        whileHover={!showExplanation ? { scale: 1.02, x: 10 } : {}}
                        whileTap={!showExplanation ? { scale: 0.98 } : {}}
                        className={`w-full p-5 rounded-2xl text-left font-medium transition-all duration-300 flex items-center justify-between ${
                          showResult
                            ? isCorrect
                              ? 'bg-green-100 border-2 border-green-500 text-green-800'
                              : isSelected
                              ? 'bg-red-100 border-2 border-red-500 text-red-800'
                              : 'bg-gray-100 text-gray-600'
                            : isSelected
                            ? 'bg-[#A5DAF1] border-2 border-[#2D5E4F] text-[#2D5E4F]'
                            : 'bg-gray-50 border-2 border-gray-200 hover:border-[#A5DAF1] text-gray-700'
                        }`}
                      >
                        <span>{option}</span>
                        {showResult && isCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                        {showResult && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-600" />}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-6 rounded-2xl mb-6 ${
                        selectedAnswer === currentQ?.correctAnswer
                          ? 'bg-green-50 border-2 border-green-200'
                          : 'bg-yellow-50 border-2 border-yellow-200'
                      }`}
                    >
                      <p className="text-lg font-medium text-gray-800 mb-2">
                        {selectedAnswer === currentQ?.correctAnswer ? '✅ Chính xác!' : '💡 Giải thích:'}
                      </p>
                      <p className="text-gray-700">{currentQ?.explanation}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Next Button */}
                {showExplanation && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={handleNextQuestion}
                    className="w-full bg-gradient-to-r from-[#2D5E4F] to-[#A5DAF1] text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {currentQuestion < (currentQuizSet?.questions.length || 0) - 1 ? (
                      <>Câu tiếp theo <ChevronRight /></>
                    ) : (
                      <>Xem kết quả <Trophy /></>
                    )}
                  </motion.button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="quiz-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-3xl p-12 shadow-2xl text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-32 h-32 bg-gradient-to-br from-[#FFE780] to-[#A5DAF1] rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <Trophy className="w-16 h-16 text-[#2D5E4F]" />
                </motion.div>

                <h3 className="text-4xl font-bold text-[#2D5E4F] mb-4">
                  Hoàn thành!
                </h3>

                <p className="text-6xl font-bold text-[#2D5E4F] mb-2">
                  {score}/{currentQuizSet?.questions.length}
                </p>

                <p className="text-xl text-gray-600 mb-8">
                  {score === currentQuizSet?.questions.length
                    ? '🎉 Xuất sắc! Bạn là chuyên gia về HPV!'
                    : score >= (currentQuizSet?.questions.length || 0) / 2
                    ? '👍 Tốt lắm! Bạn đã nắm được nhiều kiến thức.'
                    : '💪 Cố gắng lên! Hãy tìm hiểu thêm về HPV nhé.'}
                </p>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={handleRestart}
                    className="px-8 py-4 bg-gradient-to-r from-[#2D5E4F] to-[#A5DAF1] text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" /> Làm lại
                  </button>
                  <button
                    onClick={() => setSelectedQuiz(null)}
                    className="px-8 py-4 bg-gray-200 text-[#2D5E4F] rounded-2xl font-bold hover:bg-gray-300 transition-all duration-300"
                  >
                    Chọn quiz khác
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuizSection;