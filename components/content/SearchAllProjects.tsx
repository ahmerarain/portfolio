'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: 'SDG Database',
    des: 'SDG Tracker presents data across all available indicators from our database, using official  statistics from all registered organizations. It tracks national progress towards the SDGs and allows people around Pakistan to hold their government accountable to achieving the agreed goals.',
    category: 'React - Redux - Express js - Sequelize - MySQL',
    repo: null,
    link: null
  },
  {
    id: '2',
    title: 'HR System',
    des: 'HR system designed to streamline and enhance the hiring process, leveraging advanced technologies to create an efficient and user-friendly experience for both candidates and HR personnel. As the Technical Lead and Point of Contact (POC) for this project, I was responsible for overseeing the technical aspects, integrating various technologies, and ensuring successful deployment on AWS Lightsail.',
    category:
      'React - React-query - Express js - Sequelize - MySQL - Socket.io - Zoom - CHATGPT',
    repo: null,
    link: null
  },
  {
    id: '3',
    title: 'Inventory Management System',
    des: `Development of a customized Inventory Management System for E-Citrate, optimizing their operations. Key features included a real-time dashboard for insights, detailed reports for decision-making, efficient customer and vendor management, streamlined transactions, and a user-friendly design. The system reduced operational inefficiencies, empowered data-driven decisions, enhanced customer service, nurtured vendor relationships, and paved the way for strategic growth. As the Technical Team Lead, I ensured seamless integration, resulting in a transformation tool that fortified E-Citrate's competitive edge.`,
    category:
      'React - React-Query - Express js - Sequelize - MySQL - AWS - Mantine ui ·',
    repo: null,
    link: null
  },
  {
    id: '4',
    title: 'LivestreamYard',
    des: `The entire point of this application is to make it easier to see all the VOD’s from your 
    favourite streamers in a single sport, similar to the “Youtube Subscriptions“ page. Currently on Twitch, 
    when you follow someone, you can get notifications when they go live, but once the video is over and it 
    converts to a VOD (video on demand, a recording of the previous stream), you don’t get a notification. 
    The only way to view the VOD’s is to click on the specific streamers channel, then video, then VOD’s. 
    That means if you are following 20 different streamers and want to see all their past VODs (for example, 
    maybe you are trying to decide what stream to watch from last night), currently you’d have to check 
    each channel manually, which is tedious and not a good user experience. Our goal is to make a 
    platform/page where you can sync your twitch followers to our system, and we will display a list of all 
    VOD’s from all channels on a single page, so the user can easily see what new vods there is`,
    category:
      'React - Redux - Express js - Sequelize - MySQL -MongoDB -Mongoose - GITLAB - BOOTSTRAP ·',
    repo: null,
    link: 'https://viewers.livestreamyard.com'
  },
  {
    id: '5',
    title: 'School Management System',
    des: `SMS is a comprehensive software solution that offers a range of modules to manage different aspects of the school operations. The system comprises modules for students, teachers, inventory, parents, dashboard, classes & sections,etc`,
    category: 'React - Redux - Express js - Sequelize - MySQL',
    repo: null,
    link: null
  },
  {
    id: '6',
    title: 'Email Marketing Web Application',
    des: `Send cold emails, automate follow-ups, and get real responses. Increase your reply rate x2 by landing in the inbox and not spam.`,
    category: 'React - STRipe-React-Query - Express js - Sequelize - MySQL',
    repo: null,
    link: null
  },

  {
    id: '7',
    title: 'Student Exam Preparation Web App',
    des: `The Student Exam Preparation Web App is a versatile platform that empowers students to excel in their exams and enhance their learning. With features like quizzes, note management, flashcards, a digital notebook, and a personalized dashboard, it offers a comprehensive and convenient solution for effective study and progress tracking. This user-friendly web app supports active learning, efficient note organization, and flexible study options, making it an invaluable tool for students aiming to succeed academically.`,
    category:
      'React - React-Query - Express js - Sequelize - MySQL - OCI - Moyasar',
    repo: null,
    link: null
  },
  {
    id: '8',
    title: 'Repair and Maintenance service provider',
    des: `Developed a backend microservice using Node.js and Express.js to create a marketplace for repair and maintenance services. This platform connects clients with service providers such as plumbers, electricians, and more. Key features include user authentication, service categorization, search and filtering, booking and scheduling, reviews and ratings, payment integration, real-time notifications, messaging, and scalability. The platform is designed for security and ease of use, with an admin panel to manage users and services, ensuring a seamless and secure experience for all users.`,
    category:
      'Express js - STRipe - Sequelize - POstgresSQL - rabbitmq - microservice',
    repo: null,
    link: null
  },
  {
    id: '9',
    title: 'Team Collaboration Platform',
    des: `Created a collaborative platform using React, Redux, Express.js, and Node.js. This platform offers various features including MySpace for personal file storage, Task management for team collaboration, TeamChat for organization-wide communication, and Knowledgebase for creating and editing shared pages. Implemented user authentication, real-time chat functionality, and CRUD operations for files and tasks. Used MySQL as the database and integrated responsive design using Bootstrap and Material-UI`,
    category: 'React - Redux - Express js - Sequelize - MySQL - Socket.io',
    repo: null,
    link: null
  }
];

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter((project) =>
    project.category.includes(projectSearch.toLowerCase())
  );

  return (
    <>
      <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {resultSearch.map(({ id, title, des, category, repo, link }) => (
          <CardProject
            key={id}
            title={title}
            des={des}
            category={category}
            repo={repo}
            link={link}
          />
        ))}
      </article>
    </>
  );
};

export default SearchAllProjects;
