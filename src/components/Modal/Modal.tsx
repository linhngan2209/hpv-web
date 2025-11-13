import React, { useState, useEffect } from 'react';

const HPVSurveyModal = () => {
  const [showModal, setShowModal] = useState(false);
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

  const handleSubmit = () => {
    if (answers.knewHPV && answers.ageGroup) {
      const surveyData = {
        ...answers,
        timestamp: new Date().toISOString()
      };
      
      sessionStorage.setItem('hpv_survey_completed', 'true');
      console.log('Survey data:', surveyData);
      setShowModal(false);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn p-4">
      <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden animate-slideUp">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2D5E4F] to-[#5196db] p-6 text-white">
          <h2 className="text-xl font-bold mb-1">Khảo sát nhanh</h2>
          <p className="text-sm text-white/90">Vui lòng cho chúng tôi biết một số thông tin</p>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              Bạn đã biết về HPV trước đây chưa?
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setAnswers(prev => ({ ...prev, knewHPV: 'yes' }))}
                className={`p-4 border-2 rounded-xl transition-all ${
                  answers.knewHPV === 'yes'
                    ? 'border-[#2D5E4F] bg-[#2D5E4F]/10'
                    : 'border-gray-200 hover:border-[#2D5E4F]/50'
                }`}
              >
                <p className="text-sm font-semibold text-gray-800">Đã biết</p>
                <p className="text-xs text-gray-500 mt-1">Tôi đã nghe về HPV</p>
              </button>

              <button
                onClick={() => setAnswers(prev => ({ ...prev, knewHPV: 'no' }))}
                className={`p-4 border-2 rounded-xl transition-all ${
                  answers.knewHPV === 'no'
                    ? 'border-[#5196db] bg-[#5196db]/10'
                    : 'border-gray-200 hover:border-[#5196db]/50'
                }`}
              >
                <p className="text-sm font-semibold text-gray-800">Chưa biết</p>
                <p className="text-xs text-gray-500 mt-1">Lần đầu nghe về HPV</p>
              </button>
            </div>
          </div>

          {/* Câu hỏi 2 */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              Bạn ở độ tuổi nào?
            </h3>
            <div className="space-y-2">
              {[
                { value: '9-12', label: '9-12 tuổi' },
                { value: '13-19', label: '13-19 tuổi' },
                { value: '19+', label: '19 tuổi trở lên' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => setAnswers(prev => ({ ...prev, ageGroup: option.value }))}
                  className={`w-full p-3 border-2 rounded-xl transition-all text-left flex items-center justify-between ${
                    answers.ageGroup === option.value
                      ? 'border-[#2D5E4F] bg-[#2D5E4F]/10'
                      : 'border-gray-200 hover:border-[#2D5E4F]/50'
                  }`}
                >
                  <span className="text-sm font-semibold text-gray-800">{option.label}</span>
                  {answers.ageGroup === option.value && (
                    <div className="w-5 h-5 rounded-full bg-[#2D5E4F] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!answers.knewHPV || !answers.ageGroup}
            className={`w-full py-3 rounded-xl font-semibold transition-all ${
              answers.knewHPV && answers.ageGroup
                ? 'bg-gradient-to-r from-[#2D5E4F] to-[#5196db] text-white hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Bắt đầu
          </button>

          {/* Footer */}
          <p className="text-xs text-gray-400 text-center pt-2">
            Thông tin được bảo mật và chỉ phục vụ mục đích nghiên cứu
          </p>
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