'use client';

import React from 'react';
import type { NextPage } from 'next';

import ChatSupportWidget from '@/components/Chat/Chat';
import HeroSection from '@/components/HeroComponents/HeroSection';
import CoursesFeatureUI from '@/components/FeatureCourses/FeatureCourses';
import RobotButton from '@/components/chatAI/chatAI';
import NewsSection from '@/components/news/NewsComponent';
import PartnersSection from '@/components/Partner/PartnerComponent';
import ContactSection from '@/components/Contact/Contact';
import MissionSection from '@/components/Mission/MissionSection';
import KnowledgeSection from '@/components/Knowledge/KnowledgeComponent';
import StoriesSection from '@/components/Story/StoryComponent';
import HPVSurveyModal from '@/components/Modal/Modal';

const Home: NextPage = () => {
  const [showChat, setShowChat] = React.useState(false);

  const handleChatOpen = () => setShowChat(true);
  const handleChatClose = () => setShowChat(false);

  return (
    <div className="relative">

      <HPVSurveyModal />
      <HeroSection />
      <MissionSection />
      <KnowledgeSection />
      <CoursesFeatureUI />
      <StoriesSection />
      <NewsSection />
      <PartnersSection />
      <ContactSection />
      {!showChat && (
        <div
          role="button"
          aria-label="Open chat support"
          onClick={handleChatOpen}
        >
          <RobotButton />
        </div>
      )}

      {showChat && (
        <div className="fixed bottom-10 right-5 z-[9999]">
          <ChatSupportWidget open={showChat} onClose={handleChatClose} />
        </div>
      )}
    </div>
  );
};

export default Home;
