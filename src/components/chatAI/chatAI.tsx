import React from "react";
import Image from "next/image";

interface RobotButtonProps {
    onClick?: () => void;
}

const RobotButton: React.FC<RobotButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-8 right-8 z-50 group"
            title="Chat với AI Assistant"
            aria-label="Mở AI Assistant"
        >
            <Image
                src="/robotAi.png" 
                alt="Robot AI"
                width={120}
                height={120}
                className="rounded-full cursor-pointer"
            />

            <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 px-3 py-2 bg-[#2D5E4F] text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Hỏi AI về HPV
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#2D5E4F]"></div>
            </div>
        </button>
    );
};

export default RobotButton;
