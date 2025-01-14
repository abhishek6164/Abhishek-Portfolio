import { useState } from "react";
import Others from "./Others";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const showResume = () => {
    window.open("./public/images/Abhishek_pipriye.pdf", "_blank");
  };

  // Responsive class names with mobile-first approach
  const mainSectionClasses = `
    min-h-screen w-full 
    flex flex-col items-center justify-center
    md:flex-row md:gap-8 lg:gap-12
    ${isLoaded ? "opacity-100" : "opacity-0"}
    transition-opacity duration-500
    scroll-smooth
    bg-[#F5F5F5]
  `;

  const imageClasses = `
    w-64 h-64 
    sm:w-72 sm:h-72
    md:w-80 md:h-80 
    lg:w-96 lg:h-96
    rounded-full object-cover
    mb-8 md:mb-0
    ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}
    transition-all duration-500
    shadow-[0_0_30px_rgba(172,137,104,0.3)]
    hover:shadow-[0_0_40px_rgba(172,137,104,0.5)]
  `;

  const contentSectionClasses = `
    w-full max-w-xl
    px-4 mt-10
    md:px-8
    flex flex-col gap-4
    ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
    transition-all duration-1000
  `;

  return (
    <div className="w-full overflow-x-hidden scroll-smooth">
      <div className={mainSectionClasses}>
        <div className="flex justify-center">
          <img
            className={imageClasses}
            src="/images/Person.jpg"
            alt="Abhishek"
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        <div className={contentSectionClasses}>
          <h1 className="text-4xl sm:text-5xl font-black font-sans text-center md:text-left text-[#3E362E] tracking-tight">
            Welcome!
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-center md:text-left text-[#865D36]">
            Let Me Introduce Myself
          </h2>

          <div className="text-[#3E362E] space-y-4">
            <p className="text-xl sm:text-2xl font-sans font-bold text-[#93785B]">
              Hey there, I&apos;m Abhishek Pipariye
            </p>

            <p className="text-base font-sans sm:text-lg leading-relaxed tracking-normal text-[#AC8968]">
              I&apos;m a passionate web developer with a unique journey -
              transitioning from the world of system administration to creative
              web development. During my time at Wipro, I mastered IT
              infrastructure management, which gave me a solid foundation in
              technical problem-solving. Now, I channel that expertise into
              crafting beautiful, functional websites. My toolkit includes HTML,
              CSS, JavaScript, and Node.js, allowing me to build both stunning
              frontends and robust backends. I love combining my system
              administration background with modern web development to create
              seamless, efficient applications.
            </p>

            <div className="text-center md:text-left font-sans">
              <span className="text-lg font-medium text-[#A69080]">
                Interested in my work? Check out my{" "}
              </span>
              <button
                className="font-bold text-lg text-[#93785B] hover:text-[#865D36] transition-colors underline decoration-2"
                onClick={showResume}
              >
                Resume
              </button>
            </div>
          </div>

          <Others />
        </div>
      </div>

      <div className="w-[90%] mx-auto my-8 border-t-2 border-[#93785B]"></div>
    </div>
  );
};

export default About;
