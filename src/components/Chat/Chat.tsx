import React, { useState, useRef, useEffect } from 'react';
import { X, Send, User, Minimize2, Maximize2, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: string;
}

interface ChatSupportWidgetProps {
    open?: boolean;
    onClose?: () => void;
}

type ViewType = 'chat' | 'contact';

const ChatSupportWidget: React.FC<ChatSupportWidgetProps> = ({ open, onClose }) => {
    const [isOpen, setIsOpen] = useState<boolean>(open || false);
    const [isMinimized, setIsMinimized] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Xin chào! Tôi là trợ lý AI của Aura-right. Tôi có thể giúp bạn tìm hiểu về HPV và cách phòng ngừa. Bạn cần hỗ trợ gì? 😊",
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputMessage, setInputMessage] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [currentView, setCurrentView] = useState<ViewType>('chat');

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleClose = (): void => {
        setIsOpen(false);
        if (onClose) onClose();
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && !isMinimized && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen, isMinimized, currentView]);

    const handleSendMessage = (): void => {
        if (inputMessage.trim() === '') return;

        const newMessage: Message = {
            id: Date.now(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newMessage]);
        setInputMessage('');
        setIsTyping(true);

        setTimeout(() => {
            const botResponse: Message = {
                id: Date.now() + 1,
                text: getBotResponse(inputMessage),
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000 + Math.random() * 2000);
    };

    const getBotResponse = (userMessage: string): string => {
        const message = userMessage.toLowerCase();

        if (message.includes('hpv') || message.includes('virus')) {
            return "HPV (Human Papillomavirus) là một loại virus lây truyền qua đường tình dục. Có hơn 100 chủng HPV khác nhau, một số có thể gây ung thư cổ tử cung. Bạn muốn biết thêm về cách phòng ngừa không?";
        } else if (message.includes('vắc xin') || message.includes('vaccine') || message.includes('tiêm')) {
            return "Vắc xin HPV rất quan trọng! Độ tuổi khuyến nghị tiêm là 9-26 tuổi. Vắc xin giúp phòng ngừa 90% các ca ung thư liên quan đến HPV. Bạn có muốn biết địa điểm tiêm không?";
        } else if (message.includes('phòng ngừa') || message.includes('bảo vệ')) {
            return "Cách phòng ngừa HPV tốt nhất là: 1) Tiêm vắc xin HPV, 2) Quan hệ an toàn, 3) Khám sức khỏe định kỳ. Bạn cần thông tin chi tiết về điều nào?";
        } else if (message.includes('giá') || message.includes('chi phí')) {
            return "Tôi sẽ kết nối bạn với đội ngũ tư vấn để có thông tin chi phí cụ thể. Bạn có thể để lại thông tin liên hệ được không?";
        } else if (message.includes('cảm ơn') || message.includes('thanks')) {
            return "Rất vui được hỗ trợ bạn! Hãy nhớ chăm sóc sức khỏe và tiêm vắc xin HPV nhé. Nếu cần thêm thông tin, đừng ngần ngại liên hệ! 💙";
        } else {
            return "Tôi hiểu câu hỏi của bạn. Để được hỗ trợ tốt nhất, tôi sẽ chuyển cuộc trò chuyện này cho chuyên gia của chúng tôi. Vui lòng đợi trong giây lát...";
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleQuickAction = (action: string): void => {
        setInputMessage(action);
    };

    const handleViewChange = (view: ViewType): void => {
        setCurrentView(view);
    };

    const quickActions: string[] = [
        "HPV là gì?",
        "Vắc xin HPV ở đâu?",
        "Chi phí tiêm chủng",
        "Cách phòng ngừa"
    ];

    const contactItems = [
        {
            icon: Phone,
            title: "Hotline tư vấn",
            info: "0865 607 497 (24/7)",
            bgColor: "bg-[#A5DAF1]"
        },
        {
            icon: Mail,
            title: "Email",
            info: "auraright2025@gmail.com",
            bgColor: "bg-[#E2F5D5]"
        },
        {
            icon: Clock,
            title: "Giờ làm việc",
            info: ["T2-T6: 8:00-17:00", "T7-CN: Nghỉ"],
            bgColor: "bg-[#FFE780]"
        }
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-20 right-6 z-50">
            <div className={`bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'} `}>
                <div className="bg-gradient-to-br from-[#A5DAF1] to-[#E2F5D5] text-white p-4 rounded-t-2xl flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/robotAi.png"
                            alt="Aura Right AI"
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full bg-white p-1"
                        />
                        <div>
                            <h3 className="font-semibold text-[#2D5E4F]">Aura Right AI</h3>
                            <p className="text-xs text-[#2D5E4F] opacity-90">Trợ lý HPV • Luôn sẵn sàng</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setIsMinimized(!isMinimized)}
                            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                            aria-label={isMinimized ? 'Phóng to' : 'Thu nhỏ'}
                        >
                            {isMinimized ? <Maximize2 className="w-4 h-4 text-[#2D5E4F]" /> : <Minimize2 className="w-5 h-5 text-[#2D5E4F]" />}
                        </button>
                        <button
                            onClick={handleClose}
                            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                            aria-label="Đóng chat"
                        >
                            <X className="w-5 h-5 text-[#2D5E4F]" />
                        </button>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        {/* Tab Navigation */}
                        <div className="flex border-b border-gray-200">
                            {[
                                { key: 'chat' as ViewType, label: 'Trò chuyện' },
                                { key: 'contact' as ViewType, label: 'Liên hệ' }
                            ].map(({ key, label }) => (
                                <button
                                    key={key}
                                    onClick={() => handleViewChange(key)}
                                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${currentView === key
                                        ? 'text-[#2D5E4F] border-b-2 border-[#A5DAF1]'
                                        : 'text-gray-600 hover:text-gray-800'
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Chat View */}
                        {currentView === 'chat' && (
                            <>
                                <div className="flex-1 h-96 overflow-y-auto p-4 space-y-4">
                                    {messages.map((message) => (
                                        <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${message.sender === 'user' ? 'bg-[#A5DAF1]' : 'bg-white border border-gray-200'}`}>
                                                    {message.sender === 'user' ? <User className="w-5 h-5 text-white" /> : <Image src="/robotAi.png" alt="AI" width={40} height={40} className="w-10 h-10 p-1" />}
                                                </div>
                                                <div>
                                                    <div className={`p-3 rounded-2xl ${message.sender === 'user' ? 'bg-[#A5DAF1] text-white rounded-br-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'}`}>
                                                        <p className="text-sm">{message.text}</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500 mt-1 px-1">{message.timestamp}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                                                    <Image src="/robotAi.png" alt="AI" width={40} height={40} className="w-10 h-10 p-1" />
                                                </div>
                                                <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm">
                                                    <div className="flex space-x-1">
                                                        <div className="w-2 h-2 bg-[#A5DAF1] rounded-full animate-bounce"></div>
                                                        <div className="w-2 h-2 bg-[#A5DAF1] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                        <div className="w-2 h-2 bg-[#A5DAF1] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Quick Actions */}
                                <div className="px-4 py-2 border-t border-gray-100">
                                    <div className="flex flex-wrap gap-2">
                                        {quickActions.map((action, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleQuickAction(action)}
                                                className="text-xs bg-[#E2F5D5] hover:bg-[#A5DAF1] text-[#2D5E4F] px-3 py-1.5 rounded-full transition-colors"
                                            >
                                                {action}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Input */}
                                <div className="p-4 border-t border-gray-200">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={inputMessage}
                                            onChange={(e) => setInputMessage(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Nhập câu hỏi của bạn..."
                                            className="flex-1 border border-gray-200 rounded-full bg-white px-4 py-2 focus:outline-none focus:border-[#A5DAF1] text-sm"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={inputMessage.trim() === ''}
                                            className={`p-2 rounded-full transition-colors ${inputMessage.trim() !== '' ? 'bg-[#A5DAF1] hover:bg-[#8BC9E0] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                                            aria-label="Gửi tin nhắn"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Contact View */}
                        {currentView === 'contact' && (
                            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-[#2D5E4F] mb-2">Liên hệ với chúng tôi</h3>
                                    <p className="text-sm text-gray-600">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
                                </div>

                                <div className="space-y-4">
                                    {contactItems.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                            <div className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center`}>
                                                <item.icon className="w-5 h-5 text-[#2D5E4F]" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-[#2D5E4F]">{item.title}</p>
                                                {Array.isArray(item.info) ? item.info.map((line, idx) => <p key={idx} className="text-sm text-gray-600">{line}</p>) : <p className="text-sm text-gray-600">{item.info}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => handleViewChange('chat')}
                                    className="w-full bg-[#A5DAF1] hover:bg-[#8BC9E0] text-white py-3 rounded-xl font-medium transition-colors"
                                >
                                    Bắt đầu trò chuyện
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatSupportWidget;
