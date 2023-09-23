import AnimationContainer from '../utils/AnimationContainer';
import { skills } from '../utils/mySkills';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';

const SkillsSections = () => {
  return (
    <SectionContainer>
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

        <p className="text-base text-gray-400">
          Event though the scope of web development is wide, I was very
          interested and focused on Frontend development.
        </p>

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
    </SectionContainer>
  );
};

export default SkillsSections;
