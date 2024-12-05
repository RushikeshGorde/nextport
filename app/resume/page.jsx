"use client";
import React from 'react';
import { FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiFlutter, SiMicrosoftsqlserver, SiDotnet } from "react-icons/si";
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

// About Data
const about = {
  title: 'About me',
  description: "I'm a Full Stack Web Developer with extensive knowledge of front-end and back-end technologies including HTML5, CSS3, Bootstrap, JavaScript, React, Next.js, Node.js, Java, Spring Boot, and more. Experienced in Agile Methodology.",
  info: [
    { filedName: "Name: ", filedValue: "Rushikesh Gorde" },
    { filedName: "Phone: ", filedValue: "(+91) 7820879747" },
    { filedName: "Experience: ", filedValue: "1+ Years" },
    { filedName: "Skype: ", filedValue: "Rushikesh Gorde" },
    { filedName: "Nationality: ", filedValue: "Indian" },
    { filedName: "Email: ", filedValue: "rushikeshgorde1145@gmail.com" },
    { filedName: "Status: ", filedValue: "Open To Work" },
    { filedName: "Language: ", filedValue: "English, Hindi, Marathi" },
  ]
};

// Experience Data
const expreance = {
  title: 'My Experience',
  description: "Worked as a software developer trainee at Numetry Technologies for 4 months, completing 5+ front-end projects and 1 full-stack MERN project.",
  items: [
    {
      company: "Aadi Technology",
      position: "Flutter Full Stack Developer",
      duration: "Oct 2024 - Present"
    },
    {
      company: "Numetry Technologies",
      position: "Software Developer Trainee",
      duration: "Jan 2024 - May 2024"
    },
    {
      company: "Coding Sikho",
      position: "Software Developer Intern",
      duration: "2024 - Present"
    },
  ],
};

// Education Data
const education = {
  title: 'My Education',
  description: "Comprehensive educational background in computer science and software development.",
  items: [
    {
      institution: "Coding Sikho Institute",
      degree: "Software Developer",
      duration: "2023 - Present",
    },
    {
      institution: "Envision Computer Training Institute, Pune",
      degree: "Java Full Stack Web App Developer",
      duration: "2022 - 2023",
    },
    {
      institution: "Padmashri Vikhe Patil College",
      degree: "BCS (Bachelor of Computer Science)",
      duration: "2019 - 2022",
    },
    {
      institution: "New English School & Junior College",
      degree: "HSC",
      duration: "2018 - 2019",
    },
    {
      institution: "New English School & Junior College",
      degree: "SSC",
      duration: "2016 - 2017",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description: "Proficient in a wide range of web and mobile development technologies.",
  skillsList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiMicrosoftsqlserver />, name: "SSMS" },
    { icon: <SiDotnet />, name: ".NET Web API" },
  ],
};

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
          {/* Experience Tab */}
          <TabsContent value="expreance" className="w-full">
            <div className='flex flex-col gap-[20] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{expreance.title}</h3>
              <p className='max-w-[900px] text-white/60 mx-auto xl:mx-0'>{expreance.description}</p>
              <ScrollArea className="h-[350px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {expreance.items.map((item, index) => (
                    <li 
                      key={index} 
                      className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start'
                    >
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[20] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education.title}</h3>
              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[20px]'>
                  {education.items.map((item, index) => (
                    <li 
                      key={index} 
                      className='bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start'
                    >
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <p className='text-white/60'>{item.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30] text-center xl:text-left">
              <div>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[900px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
              </div>
              <ul className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                {skills.skillsList.map((skill, index) => (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-full h-[150px] bg-[#2b2b38] rounded-xl flex justify-center items-center group'>
                          <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className='capitalize'>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <p className='max-w-[900px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                {about.info.map((item, index) => (
                  <li 
                    key={index} 
                    className='flex items-center justify-center xl:justify-start gap-4'
                  >
                    <span className='text-white/60'>{item.filedName}</span>
                    <span className='text-xl'>{item.filedValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
}

export default Resume;