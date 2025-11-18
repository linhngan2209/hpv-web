'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface StudentAvatarProps {
  color: string;
  icon: React.ReactNode;
}

interface CourseCardProps {
  _id: string;
  studentCount?: number;
  courseName?: string;
  description?: string;
  price?: number;
  priceUSD?: number; // Add USD price prop
  imageUrl?: string;
  imageAlt?: string;
  onEnroll?: () => void;
  isActive?: boolean;
}

const StudentAvatar: React.FC<StudentAvatarProps> = ({ color, icon }) => (
  <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-white text-sm`}>
    {icon}
  </div>
);

const CourseCard: React.FC<CourseCardProps> = ({
  _id,
  studentCount = 40,
  courseName = 'Standard Package',
  description = 'Unlock unlimited access to all lessons, receive AI-powered feedback, and join interactive practice groups to enhance your Vietnamese learning experience like never before!',
  imageUrl = '/basic-course.png',
  imageAlt = 'Course',
  onEnroll = (id: string) => { },
  isActive = false,
  price = 0,
  priceUSD = 0, // Default USD price
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    if (isActive) {
      router.push('/courses');
    }
  };

  const formatPriceVND = (amount: number) =>
    amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    });

  const formatPriceUSD = (amount: number) =>
    amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });

  const displayPriceUSD = priceUSD > 0 ? priceUSD : Math.round(price / 24000);

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-300"
      style={{ width: '100%', height: '500px' }}
    >
      <div className="relative h-2/5">
        <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
      </div>

      <div className="px-6 -mt-4 relative z-10">
        <div className="bg-white rounded-full shadow-sm px-3 py-2 inline-flex items-center">
          <div className="flex -space-x-2">
            <StudentAvatar color="bg-blue-500" icon="👨" />
            <StudentAvatar color="bg-purple-500" icon="👩" />
            <StudentAvatar color="bg-orange-500" icon="👨" />
            <StudentAvatar color="bg-green-500" icon="👩" />
            <StudentAvatar color="bg-pink-500" icon="👨" />
          </div>
          <span className="text-gray-600 text-sm ml-2">+ {studentCount} students</span>
        </div>
      </div>

      <div className="px-6 py-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{courseName}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="mt-auto pt-4 pb-2" style={{ marginBottom: '10px' }}>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              {isActive && price > 0 && (
                <>
                  <div className="text-2xl font-bold text-orange-600">
                    {formatPriceVND(price)}
                  </div>
                  <div className="text-base font-medium text-gray-700 mt-1 flex items-center">
                    <span className="text-green-600">≈ {formatPriceUSD(displayPriceUSD)}</span>
                    <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">USD</span>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onEnroll(_id);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-white ${isActive ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-400 cursor-not-allowed'
                }`}
            >
              {isActive ? (price > 0 ? 'Pay Now' : 'Enroll for Free') : 'Coming Soon'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;