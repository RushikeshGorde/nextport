"use client";
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description: "Expert in building dynamic and responsive web applications using React for frontend, .NET Web API for backend, and SQL Server (SSMS) for database management. Ensures robust architecture, seamless functionality, and optimal user experiences across platforms.",
    href: ""
  },
  {
    num: "02",
    title: "Cross-Platform App Development",
    description: "Developing high-performance, cross-platform mobile and web applications using Flutter. Combines efficient state management with GetX or Provider, robust backend integration via .NET Web API, and secure database connections using SQL Server.",
    href: ""
  },
  {
    num: "03",
    title: "UI/UX Design and Implementation",
    description: "Delivers user-centric designs with seamless integration into functional applications. Leverages tools like Figma and Adobe XD to craft intuitive interfaces, while ensuring compatibility with React and Flutter for smooth user interactions.",
    href: ""
  },
  {
    num: "04",
    title: "Backend Architecture and Database Solutions",
    description: "Specializes in creating scalable and secure backend systems with .NET Web API. Handles complex database management with SQL Server (SSMS) to ensure data integrity, security, and optimized performance for enterprise-level applications.",
    href: ""
  }
];



const Services = () => {
  return <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
    <div className='container mx-auto'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
        }}
        className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
      >
        {services.map((service, index) => {
          return (
            <div key={index}
              className='flex-1 flex flex-col justify-center gap-6 group'>

              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                <Link href={service.href} className='w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45'>
                  <BsArrowDownRight className='text-primary text-1xl' />
                </Link>
              </div>
              <h2 className='text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
              <p className='text-white/60'>{service.description}</p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
          );
        })}
      </motion.div>
    </div>
  </section>;
}

export default Services