'use client';

import { Topic } from "@/types/topic";

interface TopicCardProps {
  topics: Topic[];
  selectedTopics: string[];
  onTopicToggle: (topicId: string) => void;
  onStartQuiz: () => void;
  isStartEnabled: boolean;
}

export const TopicCard = ({
  topics,
  selectedTopics,
  onTopicToggle,
  onStartQuiz,
  isStartEnabled
}: TopicCardProps) => {
  return (
    <div className="bg-white/95 rounded-3xl shadow-2xl px-6 py-8 max-w-5xl w-full mx-auto relative backdrop-blur-md border border-white/20">
      <div className="absolute inset-0 bg-white/30 rounded-3xl backdrop-blur-lg -z-10" />

      <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-thin transition-colors">
        ×
      </button>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Choose your favorite topic
        </h2>
        <p className="text-lg text-gray-600">
          Select more than 3 topics to start quiz
        </p>
      </div>

      <div className="space-y-8 mb-8">
        {[0, 5, 10].map((startIdx, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex justify-center flex-wrap items-center gap-5 mt-4 ${
              rowIdx === 1 ? 'ml-6' : rowIdx === 2 ? 'ml-12' : 'ml-0'
            }`}
          >
            {topics.slice(startIdx, startIdx + 5).map((topic, i) => (
              <button
                key={topic._id}
                onClick={() => onTopicToggle(topic._id)}
                className={`py-2 px-6 rounded-full text-base font-medium transition-all duration-200 transform hover:scale-105 min-w-[100px] ${
                  selectedTopics.includes(topic._id)
                    ? 'bg-orange-400 text-white shadow-md scale-105'
                    : 'bg-gray-200/80 text-gray-700 hover:bg-gray-300/80'
                }`}
                style={{
                  animationDelay: `${(startIdx + i) * 0.05}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {topic.name}
              </button>
            ))}
          </div>
        ))}
      </div>

      

      <div className="text-right">
        <button
          onClick={onStartQuiz}
          disabled={!isStartEnabled}
          className={`py-3 px-7 rounded-xl text-sm font-semibold transition-all duration-200 transform hover:scale-105 ${
            isStartEnabled
              ? 'bg-[#F48C06] hover:bg-orange-400 text-white shadow-md hover:shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Start Quiz
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
