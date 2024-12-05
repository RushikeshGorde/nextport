"use client";
import React from 'react'; // Ensure React is imported
import { FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiFlutter, SiMicrosoftsqlserver, SiDotnet } from "react-icons/si";
import { SiTailwindcss } from 'react-icons/si';

// Import motion from framer-motion with a fallback
import { motion } from 'framer-motion';

// Ensure Shadcn UI components are imported correctly
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

// Keep existing data objects (about, expreance, education, skills) here...

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] container flex items-center justify-center py-12 xl:py-0'
    >
      <Tabs
        defaultValue="expreance"
        className='flex flex-col xl:flex-row gap-[60px]'
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="expreance">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full">
          {/* Rest of the existing TabsContent components remain the same */}
          {/* Expreance, Education, Skills, About sections */}
        </div>
      </Tabs>
    </motion.div>
  );
}

export default Resume;