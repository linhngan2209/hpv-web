import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const HPVSurveyModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    knewHPV: '',
    ageGroup: ''
  });

  useEffect(() => {
    const hasAnsweredInSession = sessionStorage.getItem('hpv_survey_completed');
    if (!hasAnsweredInSession) {
      setTimeout(() => setShowModal(true), 500);
    }
  }, []);

  const handleAnswer = (question: any, answer: any) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
    
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      const surveyData = {
        ...answers,
        [question]: answer,
        timestamp: new Date().toISOString()
      };
      
      sessionStorage.setItem('hpv_survey_completed', 'true');
      
     

      setShowModal(false);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden animate-slideUp">
        
        {/* Header với gradient */}
        <div className="bg-gradient-to-br from-[#2D5E4F] to-[#5196db] p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">
              {currentStep === 1 ? '👋 Xin chào!' : '🎂 Thông tin về bạn'}
            </h2>
            <p className="text-white/90">
              {currentStep === 1 
                ? 'Trước khi bắt đầu, hãy cho chúng tôi biết một chút về bạn nhé!'
                : 'Câu hỏi cuối cùng để giúp chúng tôi hiểu bạn hơn'}
            </p>
          </div>

          <div className="flex gap-2 mt-6 relative z-10">
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              currentStep >= 1 ? 'bg-white' : 'bg-white/30'
            }`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              currentStep >= 2 ? 'bg-white' : 'bg-white/30'
            }`} />
          </div>
        </div>

        <div className="p-8">
          {currentStep === 1 ? (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Bạn đã biết về HPV trước đây chưa?
              </h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => handleAnswer('knewHPV', 'yes')}
                  className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-[#2D5E4F] hover:bg-[#2D5E4F]/5 transition-all duration-300 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D5E4F] to-[#5196db] flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">Đã biết</p>
                      <p className="text-sm text-gray-500">Tôi đã từng nghe về HPV</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleAnswer('knewHPV', 'no')}
                  className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-[#5196db] hover:bg-[#5196db]/5 transition-all duration-300 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5196db] to-[#ffd166] flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                      ?
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">Chưa biết</p>
                      <p className="text-sm text-gray-500">HPV là gì vậy?</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Bạn ở độ tuổi nào?
              </h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => handleAnswer('ageGroup', '9-12')}
                  className="w-full p-5 border-2 border-gray-200 rounded-2xl hover:border-[#2D5E4F] hover:bg-[#2D5E4F]/5 transition-all duration-300 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">👶</span>
                      <span className="text-lg font-semibold text-gray-800">9-12 tuổi</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#2D5E4F] group-hover:bg-[#2D5E4F] transition-all flex items-center justify-center">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleAnswer('ageGroup', '13-19')}
                  className="w-full p-5 border-2 border-gray-200 rounded-2xl hover:border-[#2D5E4F] hover:bg-[#2D5E4F]/5 transition-all duration-300 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">🧒</span>
                      <span className="text-lg font-semibold text-gray-800">13-19 tuổi</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#2D5E4F] group-hover:bg-[#2D5E4F] transition-all flex items-center justify-center">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleAnswer('ageGroup', '19+')}
                  className="w-full p-5 border-2 border-gray-200 rounded-2xl hover:border-[#2D5E4F] hover:bg-[#2D5E4F]/5 transition-all duration-300 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">👨</span>
                      <span className="text-lg font-semibold text-gray-800">19 tuổi trở lên</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#2D5E4F] group-hover:bg-[#2D5E4F] transition-all flex items-center justify-center">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              🔒 Thông tin của bạn được bảo mật và chỉ dùng để cải thiện trải nghiệm
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HPVSurveyModal;