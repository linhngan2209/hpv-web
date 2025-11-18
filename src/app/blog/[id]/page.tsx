'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Calendar,
    Clock,
    User,
    Share2,
    Facebook,
    Twitter,
    Mail,
    ChevronRight,
} from 'lucide-react';
import { dataNews } from '@/data/news';

interface NewsDetail {
    id: number;
    image: string;
    category: string;
    title: string;
    description: string;
    date: string;
    author: string;
    readTime: string;
    content: string[];
    galleryImages: { url: string; caption: string }[];
    tags: string[];
}

const NewsDetailPage: React.FC = () => {
    const params = useParams();
    const newsId = Number(params?.id);
    const newsDetail: NewsDetail | undefined = dataNews.find(
        (news) => news.id === newsId
    );

    if (!newsDetail) {
        return (
            <div className="text-center py-20">
                <p className="text-xl text-gray-600">Bài viết không tồn tại</p>
                <Link
                    href="/#news"
                    className="inline-block mt-6 bg-gradient-to-r from-[#A5DAF1] to-[#FFE780] text-[#2D5E4F] font-bold px-6 py-3 rounded-full"
                >
                    Quay lại danh sách
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white h-full min-h-screen">
            <div className="h-20" /> 

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative h-[70vh] w-full"
            >
                <Image
                    src={newsDetail.image}
                    alt={newsDetail.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </motion.div>

            <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16"
                >
                    <Link
                        href="/#news"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2D5E4F] mb-8 text-sm font-medium transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Tin tức
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="bg-[#FFE780] text-[#2D5E4F] text-xs font-bold px-4 py-1.5 rounded-full">
                            {newsDetail.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            {newsDetail.date}
                        </div>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Clock className="w-4 h-4" />
                            {newsDetail.readTime}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {newsDetail.title}
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed mb-8 pb-8 border-b border-gray-200">
                        {newsDetail.description}
                    </p>

                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#A5DAF1] to-[#FFE780] rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">{newsDetail.author}</p>
                            <p className="text-sm text-gray-500">Đội ngũ truyền thông</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none mb-12">
                        {newsDetail.content.map((paragraph, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-gray-700 leading-relaxed mb-6"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    {/* Gallery */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Hình ảnh sự kiện</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {newsDetail.galleryImages.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
                                >
                                    <Image
                                        src={img.url}
                                        alt={img.caption}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white text-sm font-medium">{img.caption}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Tags & Share */}
                    <div className="pt-8 border-t border-gray-200">
                        <div className="flex flex-wrap gap-3 mb-8">
                            {newsDetail.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#E2F5D5] transition-colors cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-gray-600 font-medium">Chia sẻ bài viết</p>
                            <div className="flex gap-3">
                                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors">
                                    <Mail className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Back to list */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 mb-20 text-center"
                >
                    <Link
                        href="/#news"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#A5DAF1] to-[#FFE780] text-[#2D5E4F] font-bold px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                        Xem thêm tin tức
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NewsDetailPage;
