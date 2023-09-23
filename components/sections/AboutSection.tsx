import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
// import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            I have a solid foundation in web development and software
            engineering principles. I am proficient in a range of technologies
            including MERN stack, JavaScript, React, Redux, Express.js, and
            more, and I continuously expand my skills to embrace new challenges
            and opportunities. As a Full Stack Web Developer , a leading
            provider of cloud-based solutions, I work with a team of talented
            developers to deliver high-quality and scalable web applications for
            various clients. I have contributed to the design, development,
            testing, and deployment of several projects, such as a chatbot
            platform using Amazon Lex and ChatGPT, a video conferencing app
            using Zoom API, and a data visualization dashboard using Chart.js. I
            am passionate about innovation and growth, and I strive to create
            user-friendly and responsive interfaces, optimize performance and
            security, and implement best practices and standards. I also have
            experience in leading technical teams, implementing libraries, and
            deploying applications on the cloud.
          </p>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills & Tools
          </h2>

          <p className="text-base text-gray-400">
            A look at all the programming languages, libraries, and tools I've
            worked with, I started programming about 4 years ago. I have tried a
            few programming languages and technology stack, both Backend and
            Frontend.
          </p>

          {/* <p className="text-base text-gray-400">
            Event though the scope of web development is wide, I was very
            interested and focused on Frontend development.
          </p> */}

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">
                  {title}
                </h3>

                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>

        {/* <ProcessWork /> */}

        {/* <AnimationContainer customClassName="w-full flex flex-col gap-5">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Interests & Goals
          </h2>

          <p className="text-base text-gray-400">
            I am interested in learning Backend with other language like Java,
            Go or with Python. I also want to know how to make a video game with
            Unity or other and I am very interested in being a content creator
            whether programming or something else.
          </p>

          <p className="text-base text-gray-400">
            For now I'm learning how to make applications with real time
            communication such as a chat using Socket.IO, I'm also starting to
            learn the way to be Devops using Docker, Kubernetes, AWS or others.
          </p>

          <p className="text-base text-gray-400">
            I am also interested in learning other things besides programming
            such as 3D design with Blender and video editing with Davinci
            Resolve (these last two I would take as a hobby).
          </p>
        </AnimationContainer> */}
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
