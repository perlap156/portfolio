import React from "react";


const { useEffect, useState, useMemo } = React;
const useTypewriter = (text, speed = 20) => {
  const [index, setIndex] = useState(0);
  const displayText = useMemo(() => text.slice(0, index), [index, text]);

  useEffect(() => {
    if (index >= text.length)
      return;

    const timeoutId = setTimeout(() => {
      setIndex(i => i + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, text, speed]);

  return displayText;
};

const About = () => {
const text = useTypewriter("Web Developer - Dallas, Texas", 100);

  return (
    
    <section id="about" className="about container align--center">
        <h1 className="heading--xl">H<span className="flower">i</span> I'm Perla Orona<span className="color--accent">.</span></h1>
        <h2 className=" heading--sm color--accent3">{text}</h2>
        <p>
            Detail-oriented and innovative Web Developer with 5+ years of experience in front-end development, creating responsive and visually appealing websites. Excel at maintaining visual consistency across digital platforms, streamlining maintenance processes, and fostering accessibility. Well-versed in collaborating with cross-functional teams to meet project requirements and deadlines. Demonstrated ability to adapt to new technologies and programming languages to meet evolving project needs. Passionate about staying current with the latest web development trends and technologies.
        </p>
        <a href="../assets/Perla_Orona_Resume.pdf" className="btn btn-2 hover-slide-right" target="_blank" aria-label="View Resume PDF">
            <span>View Resume</span>
        </a>
    </section>
  );
};

export default About;
