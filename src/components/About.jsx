import { useState } from "react";
import Others from "./Others";

const About = () => {
  // State to manage the loading effect
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to open the resume in a new tab
  const showResume = () => {
    window.open("/images/Abhishek_pipriye.pdf", "_blank"); // Updated path
  };


  return (
    <div className="overflow-auto scrollbar-hide  xsm-mx:overflow-auto xsm-mx:scrollbar-hide ">
      {/* Main Section: Wrapper for content */}
      <div
        className={`flex flex-row justify-center items-center h-screen gap-5 bs-mx:gap-1 transition-opacity duration-500 sm-mx:flex sm-mx:flex-col sm-mx:mt-36 sm-mx:justify-center sm-mx:items-center  xsm-mx:  ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Image Section */}
        <div>
          <img
            className={`w-[480px] h-[480px] object-cover rounded-full transition-all duration-500 xl-mx:ml-20 lg-mx:w-[340px] lg-mx:h-[340px] lg-mx:ml-6 bs-mx:ml-5 bs-mx:w-[300px] bs-mx:h-[300px] xsm-mx:mt-0 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            src="/images/Person.jpg" // Updated path
            alt="Abhishek"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        {/* About Text Section */}
        <div
          className={`flex flex-col mt-28 sm-mx:mt-10  ml-8 sm-mx:justify-center sm-mx:items-center gap-5  `}
        >
          {/* Introduction Section */}
          <div
            className={`transform transition-all duration-1000   ${
              isLoaded ? "translate-y-0 opacity-1" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Greeting and About Me */}
            <h1 className="text-4xl lg-mx:text-2xl bs-mx:text-2xl font-bold mb-2 font-mono sm-mx:text-center sm-mx:text-4xl">
              Hello
            </h1>
            <h2 className="text-2xl lg-mx:text-xl font-bold font-mono mb-1 sm-mx:text-center sm-mx:text-2xl">
              A Bit About Me
            </h2>
            <p className="text-gray-700 lg-mx:text-sm bs-mx:mr-5 xs-mx:w-80   font-mono leading-relaxed max-w-md">
              <span className="font-semibold32 sm-mx:ml-10 sm-mx:text-3xl lg-mx:text-xl text-xl xs-mx:text-lg xs-ms sm-mx:text-center sm-mx:justify-center">
                I’m Abhishek Pipariye,
              </span>
              <br />A web developer transitioning from a strong background in
              system administration. With hands-on experience at Wipro managing
              IT infrastructures, I’ve developed a passion for building and
              functional, responsive websites. Skilled in HTML, CSS, JavaScript,
              and Node.js, I bring a unique perspective by combining my
              technical expertise in backend systems with front-end development.
              I’m excited to create user-friendly web applications and explore
              new web technologies.
            </p>

            {/* Resume Link */}
            <h2
              className=" sm-mx:text-center font-mono font-semibold lg-mx:text-sm
            "
            >
              Click here to see my{" "}
              <button
                className="font-bold font-mono text-red-500 lg-mx:text-sm"
                onClick={showResume}
              >
                Resume
              </button>
            </h2>
          </div>

          {/* Others Component Section */}
          <div>
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
