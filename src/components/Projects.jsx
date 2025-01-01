// import ECommerceImage from "../../public/images/ECommerce.jpg";
// import VedicHeritageImage from "../../public/images/Vedas.jpg";
// import WeatherImage from "../../public/images/Weather.png";
// import EMSImage from "../../public/images/EMS.png";
const Projects = () => {
  // Project Data
  const data = [
    {
      Bio: "The Employee Management System is a dynamic web application designed to streamline employee task distribution and management within an organization...",
      topic: "Employee Management System",
      image: "/images/EMS.png", // Updated path
      github: "https://github.com/abhishek6164/employee-task-distribution",
    },
    {
      Bio: "A responsive and user-friendly e-commerce platform built with React.js and Tailwind CSS...",
      topic: "E-Commerce Platform",
      image: "/images/ECommerce.jpg", // Updated path
      github: "https://github.com/abhishek6164/next-inline",
    },
    {
      Bio: "A web application dedicated to exploring and preserving the ancient heritage of Vedic culture...",
      topic: "Vedic Heritage Platform",
      image: "/images/Vedas.jpg", // Updated path
      github: "https://github.com/abhishek6164/",
    },
    {
      Bio: "A real-time weather forecasting application offering detailed updates on weather conditions...",
      topic: "Weather Forecasting App",
      image: "/images/Weather.png", // Updated path
      github: "https://github.com/abhishek6164/weather-app",
    },
  ];

  return (
    <div className="font-mono">
      {/* Projects Header */}
      <div className="w-4/5 mx-auto my-8  p-6">
        <h1 className="font-bold text-gray-600 text-4xl ">Projects</h1>

        {/* Projects Section */}
        <div className="mt-10">
          {data.map((section, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row mt-40 justify-between my-8"
            >
              {/* Project Details */}
              <div className="md:w-1/2">
                <h1 className="text-2xl text-gray-600 font-semibold">
                  {section.topic}
                </h1>
                <p className="text-sm text-gray-600 mt-2">
                  {section.Bio.length > 350
                    ? section.Bio.slice(0, 350) + "..."
                    : section.Bio}
                </p>
                <a
                  href={section.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded hover:bg-yellow-600 inline-block"
                >
                  View GitHub
                </a>
              </div>

              {/* Project Image */}
              <div className="mt-4 md:mt-0 md:w-1/3">
                <img
                  className="rounded-2xl w-[100%] h-56 shadow-xl"
                  src={section.image}
                  alt={`Image of ${section.topic}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-[90%] mx-auto border-t-2 border-gray-300 my-2"></div>
    </div>
  );
};

export default Projects;
