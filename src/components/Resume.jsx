const Resume = () => {
  // Move data outside component to prevent recreation on each render
  const RESUME_DATA = [
    {
      topic: "Work Experience",
      company: "Wipro",
      role: "System Administrator", 
      duration: "June 2022 - Oct 2024",
      description:
        "With 2.5 years of experience as a System Administrator, I have developed strong expertise in managing and maintaining IT infrastructure. My role involved configuring and troubleshooting servers, networks, and systems to ensure seamless operations. I have extensive experience in monitoring system performance, managing backups, and ensuring security protocols are in place. My responsibilities also included supporting user requests, performing system upgrades, and maintaining documentation of network configurations. I collaborated with IT teams to implement solutions that enhanced system efficiency and minimized downtime.",
    },
    {
      topic: "Education",
      college: "Deogiri Institute of Management Technology",
      degree: "Bachelor of Computer Application (BCA)",
      duration: "June 2019 - May 2022",
      percentage: "7.3 CGPA",
    },
    {
      topic: "Skills & Expertise",
      topic1: "Front-End",
      topic2: "Back-End",
      topic3: "Tools", 
      topic4: "System Administrator",
      frontEnd: [
        "HTML",
        "CSS",
        "JavaScript",
        "React_JS",
        "Tailwind_CSS",
        "Bootstrap",
      ],
      backEnd: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
      tools: ["Git", "VS Code", "Postman", "Heroku", "Netlify"],
      system_Administrator: [
        "Windows Server",
        "Linux",
        "Active Directory",
        "DNS",
        "DHCP", 
        "Server Management",
        "Network Administration",
        "System Monitoring",
        "Backup & Recovery",
        "Virtualization",
        "User Management",
        "Security Management",
      ],
    },
  ];

  // Enhanced responsive classes with new styling
  const sectionClasses = `
    flex flex-col gap-5
    sm:flex-row sm:justify-between sm:gap-8 
    lg:gap-10 xl:gap-12
    my-6 sm:my-8 md:my-10 lg:my-12
  `;

  const sectionTitleClasses = `
    text-xl sm:text-2xl md:text-3xl lg:text-4xl
    bg-gradient-to-r from-[#865D36] to-[#3E362E]
    bg-clip-text text-transparent
    font-bold
    mb-3 sm:mb-0
    transition-all duration-300
  `;

  const contentContainerClasses = `
    flex flex-col gap-4
    sm:flex-row sm:gap-6
    md:gap-7 lg:gap-8
    w-full sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl
    text-[#3E362E]
    transition-all duration-300
  `;

  const horizontalLineClasses = `
    w-[85%] sm:w-[80%] md:w-[75%]
    mx-auto
    border-t-2 border-[#A69080]
    my-6 sm:my-8 md:my-10 lg:my-12
    transition-all duration-300
  `;

  // Enhanced responsive helper function with new styling
  const renderSkillSection = (title, skills) => (
    <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-7 transition-all duration-300">
      <h3 className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 text-[#865D36]">
        {title}:
      </h3>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-loose text-[#3E362E]">
        {skills.join(" • ")}
      </p>
    </div>
  );

  return (
    <div className="font-sans min-h-screen scroll-smooth bg-[#F5F5F5]">
      <div className="w-[95%] sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto p-6 sm:p-8 md:p-10 lg:p-12">
        <h1 className="font-extrabold bg-gradient-to-r from-[#865D36] via-[#93785B] to-[#AC8968] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-10 transition-all duration-300 scroll-mt-16">
          Resume
        </h1>

        {/* Work Experience Section */}
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 scroll-mt-16">
          {RESUME_DATA.map(
            (section, index) =>
              section.topic === "Work Experience" && (
                <div key={index} className={sectionClasses}>
                  <h1 className={sectionTitleClasses}>{section.topic}</h1>
                  <div className={contentContainerClasses}>
                    <div className="sm:w-1/4">
                      {section.duration && (
                        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#93785B] font-semibold">
                          {section.duration}
                        </h4>
                      )}
                    </div>
                    <div className="w-full sm:w-3/4">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#865D36] font-bold">
                        {section.company}
                      </h3>
                      {section.role && (
                        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#93785B] font-bold">
                          {section.role}
                        </h4>
                      )}
                      {section.description && (
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#3E362E] mt-3 sm:mt-4 md:mt-5 leading-relaxed">
                          {section.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className={horizontalLineClasses} />

      {/* Education Section */}
      <div className="w-[95%] sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto p-6 sm:p-8 md:p-10 lg:p-12 scroll-mt-16">
        {RESUME_DATA.map(
          (section, index) =>
            section.topic === "Education" && (
              <div key={index} className={sectionClasses}>
                <h1 className={sectionTitleClasses}>{section.topic}</h1>
                <div className={contentContainerClasses}>
                  <div className="sm:w-1/4">
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#93785B] font-semibold">
                      {section.duration}
                    </h4>
                  </div>
                  <div className="w-full sm:w-3/4">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#865D36] font-bold">
                      {section.degree}
                    </h3>
                    {section.college && (
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#93785B] font-bold">
                        {section.college}
                      </h4>
                    )}
                    {section.percentage && (
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl text-[#3E362E] mt-2 sm:mt-3 font-medium">
                        {section.percentage}
                      </h4>
                    )}
                  </div>
                </div>
              </div>
            )
        )}
      </div>

      <div className={horizontalLineClasses} />

      {/* Skills Section */}
      <div className="w-[95%] sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto p-6 sm:p-8 md:p-10 lg:p-12 scroll-mt-16">
        {RESUME_DATA.map(
          (section, index) =>
            section.topic === "Skills & Expertise" && (
              <div
                key={index}
                className={`${sectionClasses} gap-5 sm:gap-8 md:gap-10 lg:gap-12`}
              >
                <h1 className={sectionTitleClasses}>{section.topic}</h1>
                <div className="w-full sm:w-4/5 max-w-4xl lg:max-w-5xl xl:max-w-6xl p-4 sm:p-6 md:p-8 lg:p-10">
                  <div className="text-[#3E362E] space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                    {renderSkillSection("Front-End", section.frontEnd)}
                    {renderSkillSection("Back-End", section.backEnd)}
                    {renderSkillSection("Tools", section.tools)}
                    {renderSkillSection(
                      "System Administrator",
                      section.system_Administrator
                    )}
                  </div>
                </div>
              </div>
            )
        )}
      </div>

      <div className={horizontalLineClasses} />
    </div>
  );
};

export default Resume;
