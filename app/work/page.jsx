"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import Link from "next/link";;
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: "frontend",
    title: "project 1",
    description: " An online educational platform offering a wide range of courses and resources designed to enhance learning experiences. Tailored for students of all levels, it provides interactive lessons, quizzes, and personalized feedback to support academic growth. Visit Super School for more details.",
    stack: [{ name: "Html " }, { name: "Css " }, { name: "Bootstrap" }, { name: "React" }, { name: "JavaScript" },],
    image: '/assets/Work/super.png',
    live: 'https://super-school.vercel.app/',
    github: "https://github.com/RushikeshGorde/Super-School",
  },
  {
    num: '02',
    category: "frontend",
    title: "project 2",
    description: "Users can access a variety of books and engage in interactive reading sessions. The platform provides features like bookmarking, highlighting, and note-taking to enhance the reading experience. With a user-friendly interface, it aims to promote a love for reading and facilitate easy access to literary works for users of all ages.",
    stack: [{ name: "React" }, { name: "JavaScript" }, { name: " API Integration" },],
    image: '/assets/Work/port.png',
    live: 'http://portfolios.ecti.co.in/RushikeshG/Projects/bookreading/index.html',
    github: "https://github.com/RushikeshGorde/BookReading",
  },
  {
    num: '03',
    category: "frontend",
    title: "project 3",
    description: "It serves as an online resume, showcasing the skills, projects, and experience. It likely features responsive design, allowing visitors to view the content seamlessly across different devices. The project might include sections such as About Me, Skills, Projects, Contact Information, and possibly a blog or other personalized content.",
    stack: [{ name: "Html " }, { name: "Css " }, { name: "Bootstrap" }, { name: "React" }, { name: "JavaScript" },],
    image: '/assets/Work/react.png',
    live: 'https://nextport-sepia.vercel.app/',
    github: "https://github.com/RushikeshGorde/nextport",
  },
  {
    num: '04',
    category: "MERN",
    title: "project 04",
    description: "Developing a comprehensive tourism web app featuring destination search, accommodation booking, itinerary creation, and user reviews. Utilizes HTML, CSS, JavaScript, React.js/Vue.js for front-end, and Node.js, Express.js for back-end. Data is managed with MongoDB/MySQL, and third-party APIs enhance travel data and booking services. ",
    stack: [{ name: "Tailwind.css" }, { name: "React" }, { name: "SpringBoot" }, { name: "MySQL" },],
    image: '/assets/Work/tour.png',
    live: 'https://bharat-tour.vercel.app/',
    github: "",
  },
  {
    num: '05',
    category: "Frontend",
    title: "project 05",
    description: "Developed a comprehensive IT service website featuring client testimonials, service pages, and contact forms. Utilized HTML, CSS, JavaScript, Next.js for the front-end, and Node.js, Express.js for the back-end. Data managed with MongoDB. Integrated animations and responsive design for seamless user experience. ",
    stack: [{ name: "Tailwind.css" }, { name: "React" }, { name: "SpringBoot" }, { name: "MySQL" },],
    image: '/assets/Work/company.png',
    live: 'https://tech-logic.vercel.app/',
    github: "",
  },
  {
    num: "06",
    category: "Flutter Full Stack",
    title: "Time Attendance System",
    description: "Developed for a hardware company, this project is a time attendance system for tracking employee attendance. Built using Flutter for the front-end and integrated with SSMS and ASP.NET for backend functionality. The project followed Agile methodologies for efficient project management.",
    stack: [
      { "name": "Flutter" },
      { "name": "SSMS" },
      { "name": "ASP.NET" }
    ],
    image: "/assets/Work/flutter.png",
    live: "https://aaditechnology.vercel.app/",
    github: ""
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    // setProject(projects[currentIndex]);
    setProject(projects[currentIndex]);
  }

  return <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {
    delay:2.4, duration:0.4, ease: "easeIn"
  } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
    <div className="container mx-auto">
      <div className=" flex flex-col xl:flex-row xl:gap-[20px]">
        <div className="w-full xl:w-[50%] xl:h-[350px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[20px] h-[50%] xl:h-[460px]">
            {/* outline numbeer  */}
            <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            {/* pro category  */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
            </h2>
            {/* project description  */}
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index}
                    className="text-accent"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            {/* border  */}
            <div className="border border-white/20"></div>
            {/* buttons */}
            <div>
              <div className="flex items-center gap-4">

                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"
                        />
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent"
                        />
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[320px] mb-12"
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => {
              return <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] group relative justify-center items-center bg-pink-50/20">
                  {/* overlay  */}
                  <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                  {/* image  */}
                  <div className="relative w-full h-full">
                    <Image src={project.image} fill className="object-cover" alt=""/>
                  </div>
                </div>
              </SwiperSlide>
            })}
            {/* slide buttons  */}
            <WorkSliderBtns
             containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
             btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
            />
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>;

};

export default Work