'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          {' '}
          Full Stack Web Developer | Jan. 2022 - Ongoing |{' '}
          <a
            href="https://www.cwaret.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline transition-all ease"
          >
            CWare Technologies
          </a>
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          I am a seasoned Full Stack Web Developer with experience as a
          Technical Team Lead. Over the years, I have contributed to a variety
          of business products, showcasing my proficiency in implementing
          diverse libraries. Additionally, I have a strong track record of
          successfully deploying applications on cloud platforms, ensuring
          scalability and accessibility.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent active>
        <TimelineEvent.Title>
          Freelance | Jan. 2022 - Ongoing
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and development of web pages applying agile methodologies,
          clean architecture, SOLID principles and pixel perfect in all
          projects, I have developed almost all types of projects from Landing
          pages, stores, blogs and dashboards.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Business Development Internee | Aug. 2021 - Dec. 2021 |{' '}
          <a
            href="https://rozzario.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline transition-all ease"
          >
            Rozzario Digital Agency Malaysia
          </a>
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          To boost business through sales, engage clients effectively.
          Understand their needs, create tailored proposals/invoices, and
          maintain CRM. Seek feedback, adapt, and ensure continuous training for
          your sales team.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          SPARK PROGRAM(REACT.js) Internee | 2021 |{' '}
          <a
            href=" https://interns.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline transition-all ease"
          >
            INTERNS
          </a>
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Gained fundamental knowledge of React.js and have hands-on experience
          with both Functional and Class-based components. This practical
          exposure has equipped me to create interactive user interfaces and
          effectively manage state in React applications. Additionally, I've
          developed five mini projects using React, which have solidified my
          skills in building responsive and dynamic web applications.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          Web Developer Internee | 2021 |{' '}
          <a
            href="https://gbsinn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline transition-all ease"
          >
            GHANI BUSINESS SOLUTIONS
          </a>
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          I have acquired proficiency in HTML, CSS, JavaScript, and PHP,
          enabling me to excel in both front-end and back-end web development.
          My experience includes developing projects using Core PHP and the
          Codeigniter Framework, demonstrating my ability to build robust and
          efficient web applications.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
