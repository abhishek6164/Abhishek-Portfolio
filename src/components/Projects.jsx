import { memo } from "react";

const Projects = memo(() => {
  // Project Data - Moved outside component to avoid recreation on each render
  const PROJECTS_DATA = [
    {
      bio: "The Employee Management System is a dynamic web application designed to streamline employee task distribution and management within an organization...",
      topic: "Employee Management System",
      image: "/images/EMS.png",
      github: "https://github.com/abhishek6164/employee-task-distribution",
    },
    {
      bio: "A responsive and user-friendly e-commerce platform built with React.js and Tailwind CSS...",
      topic: "E-Commerce Platform UrbanCart",
      image: "/images/ECommerce.jpg",
      github: "https://github.com/abhishek6164/UrbanCart",
    },
    {
      bio: "A web application dedicated to exploring and preserving the ancient heritage of Vedic culture...",
      topic: "Vedic Heritage Platform",
      image: "/images/Vedas.jpg",
      github: "https://github.com/abhishek6164/Vedic-Wisdom-Website",
    },
    {
      bio: "A real-time weather forecasting application offering detailed updates on weather conditions...",
      topic: "Weather Forecasting App",
      image: "/images/Weather.png",
      github: "https://github.com/abhishek6164/WeatherApi",
    },
  ];

  // Extract common classes with responsive design
  const projectCardClasses = `
    flex flex-col gap-8
    sm:flex-row sm:justify-between sm:items-center
    my-16 sm:my-24 md:my-28 lg:my-32
    p-6 sm:p-8
    bg-[#F5F5F5] rounded-3xl
    shadow-xl hover:shadow-2xl
    transition-all duration-500
    scroll-mt-16
    scroll-behavior-smooth
  `;

  const projectDetailsClasses = `
    w-full
    sm:w-1/2 
    space-y-6
  `;

  const projectTitleClasses = `
    text-2xl sm:text-3xl md:text-4xl
    font-bold
    bg-gradient-to-r from-[#865D36] to-[#3E362E]
    bg-clip-text text-transparent
    leading-tight
  `;

  const projectDescriptionClasses = `
    text-base sm:text-lg
    text-[#3E362E]
    leading-relaxed
    font-light
    italic
  `;

  const projectLinkClasses = `
    inline-block
    bg-gradient-to-r from-[#AC8968] to-[#93785B]
    text-[#3E362E] font-bold
    px-6 py-3
    rounded-full
    text-sm sm:text-base
    hover:from-[#93785B] hover:to-[#865D36]
    transform hover:scale-105
    transition-all duration-300
    shadow-md
  `;

  const projectImageClasses = `
    w-full
    sm:w-2/5
    lg:w-1/3
  `;

  const imageClasses = `
    w-full
    h-52 sm:h-64 md:h-72 lg:h-80
    object-cover
    rounded-3xl
    shadow-2xl
    transform hover:scale-105
    transition-all duration-500
    border-4 border-[#3E362E]
  `;

  // Helper function to truncate text with responsive limits
  const truncateText = (text, screenWidth) => {
    const limits = {
      sm: 180,
      md: 280,
      lg: 380,
    };
    const limit =
      screenWidth < 640 ? limits.sm : screenWidth < 768 ? limits.md : limits.lg;
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  return (
    <div className="font-sans min-h-screen scroll-smooth bg-[#F5F5F5]">
      <div className="w-[92%] sm:w-[88%] lg:w-[84%] mx-auto py-12 sm:py-16 scroll-smooth">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#865D36] via-[#93785B] to-[#AC8968] bg-clip-text text-transparent px-4 tracking-tight">
          My Projects
        </h1>

        <div className="mt-12 sm:mt-16">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.topic}
              className={projectCardClasses}
              id={project.topic.toLowerCase().replace(/\s+/g, "-")}
            >
              <div className={projectDetailsClasses}>
                <h1 className={projectTitleClasses}>{project.topic}</h1>
                <p className={projectDescriptionClasses}>
                  {truncateText(project.bio, window.innerWidth)}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={projectLinkClasses}
                >
                  Explore on GitHub →
                </a>
              </div>

              <div className={projectImageClasses}>
                <img
                  className={imageClasses}
                  src={project.image}
                  alt={`Image of ${project.topic}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[90%] sm:w-[85%] mx-auto border-t-2 border-[#3E362E] my-12"></div>
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
