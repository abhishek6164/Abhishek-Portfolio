import { useState } from "react";
import Others from "./Others";

const About = () => {
  // State to manage the loading effect
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to open the resume in a new tab
  const showResume = () => {
    window.open("./public/Abhishek_pipriye.pdf", "_blank");
  };

  return (
    <div className="overflow-auto scrollbar-hide">
      {/* Main Section: Wrapper for content */}
      <div
        className={`flex flex-row justify-center items-center h-screen gap-5 transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Image Section */}
        <div>
          <img
            className={`w-[480px] h-[480px] object-cover rounded-full transition-all duration-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            src="./public/Person.jpg"
            alt="Abhishek"
            onLoad={() => setIsLoaded(true)} // Set isLoaded to true when the image is loaded
          />
        </div>

        {/* About Text Section */}
        <div
          className={`flex flex-col mt-28 ml-8 justify-center items-center h-screen gap-5`}
        >
          {/* Introduction Section */}
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-1" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Greeting and About Me */}
            <h1 className="text-4xl font-bold mb-2 font-mono ">Hello</h1>
            <h2 className="text-2xl font-bold font-mono mb-1">
              A Bit About Me
            </h2>
            <p className="text-gray-700 font-mono leading-relaxed max-w-md">
              <span className="font-semibold text-xl">
                I’m Abhishek Pipariye,
              </span>
              <br />A web developer transitioning from a strong background in
              system administration. With hands-on experience at Wipro managing
              IT infrastructures, I’ve developed a passion for building
              functional, responsive websites. Skilled in HTML, CSS, JavaScript,
              and Node.js, I bring a unique perspective by combining my
              technical expertise in backend systems with front-end development.
              I’m excited to create user-friendly web applications and explore
              new web technologies.
            </p>

            {/* Resume Link */}
            <h2 className="font-mono font-semibold">
              Click here to see my{" "}
              <button className="font-bold text-red-500" onClick={showResume}>
                Resume
              </button>
            </h2>
          </div>

          {/* Others Component Section */}
          <div className="h-18 w-18">
            <Others />
          </div>
        </div>
      </div>

      {/* Horizontal Line for Section Break */}
      <div className="w-[90%] mx-auto my-8 mt-36 border-t-2 border-x-gray-500"></div>
    </div>
  );
};

export default About;
