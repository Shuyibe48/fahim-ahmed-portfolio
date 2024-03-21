import { useEffect, useRef, useState } from "react";
import SkillProgressBar from "./SkillProgressBar";
import Container from "../../utils/Container";
import SectionTitle from "../../utils/SectionTitle";

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const skillSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // When 50% of the element is visible
    );

    if (skillSectionRef.current) {
      observer.observe(skillSectionRef.current);
    }

    return () => {
      if (skillSectionRef.current) {
        observer.unobserve(skillSectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 70 },
    { name: "Vite", level: 70 },
    { name: "Next.js", level: 40 },
    { name: "Firebase", level: 65 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Bootstrap", level: 80 },
    { name: "MongoDB", level: 40 },
    { name: "Express.js", level: 40 },
  ];

  return (
    <Container>
      <SectionTitle
        title={"MY SKILLS"}
        description={"Crafting stories through design and innovation"}
      />
      <div ref={skillSectionRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          {skills.map((skill, index) => (
            <SkillProgressBar
              key={index}
              skill={skill.name}
              level={skill.level}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
