const Resume = () => {
  // Resume data containing Work Experience, Education, and Skills & Expertise
  const data = [
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
        "HTML, ",
        "CSS, ",
        "JavaScript, ",
        "React_JS, ",
        "Tailwind_CSS, ",
        "Bootstrap ",
      ],
      backEnd: ["Node.js ,  ", "Express , ", "MongoDB , ", "RESTful APIs , "],
      tools: ["Git , ", "VS Code , ", "Postman , ", "Heroku , ", "Netlify"],
      system_Administrator: [
        "Windows Server , ",
        "Linux , ",
        "Active Directory , ",
        "DNS , ",
        "DHCP , ",
        "Server Management , ",
        "Network Administration , ",
        "System Monitoring , ",
        "Backup & Recovery , ",
        "Virtualization , ",
        "User Management , ",
        "Security Management",
      ],
    },
  ];

  return (
    <div className="font-mono">
      {/* Resume Header Section */}
      <div className="w-4/5 mx-auto my-14  p-6 ">
        <h1 className="font-bold text-gray-600 text-2xl mb-6">Resume</h1>

        {/* Work Experience Section */}
        <div className="mt-24">
          {data.map((section, index) =>
            section.topic === "Work Experience" ? (
              <div key={index} className="flex flex-row justify-between my-8">
                {/* Section Title */}
                <h1 className="text-xl text-gray-600 font-semibold">
                  {section.topic}
                </h1>

                {/* Section Content */}
                <div className="flex flex-row gap-5 max-w-3xl text-gray-700">
                  <div>
                    {section.company && (
                      <div>
                        <h4 className="text-lm text-gray-600 font-medium">
                          {section.duration}
                        </h4>
                      </div>
                    )}
                  </div>
                  <div className="w-[70%]">
                    <h3 className="text-lg text-gray-600 font-bold">
                      {section.company}
                    </h3>
                    {section.role && (
                      <h4 className="text-lg text-gray-600 font-semibold">
                        {section.role}
                      </h4>
                    )}
                    {section.description && (
                      <p className="text-sm text-gray-500 w-96">
                        {section.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-[90%] mx-auto border-t-2 border-gray-300 my-2"></div>

      {/* Education Section */}
      <div className="w-4/5 mx-auto p-6">
        {data.map((section, index) =>
          section.topic === "Education" ? (
            <div
              key={index}
              className="flex text-gray-600 flex-row justify-between my-8"
            >
              {/* Section Title */}
              <h1 className="text-xl  font-semibold">{section.topic}</h1>

              {/* Section Content */}
              <div className="flex flex-row gap-2 max-w-3xl text-gray-700">
                <div>
                  <div>
                    <h4 className="text-lm text-gray-600">
                      {section.duration}
                    </h4>
                  </div>
                </div>
                <div className="w-[70%]">
                  <h3 className="text-lg text-gray-600 font-bold">
                    {section.degree}
                  </h3>
                  {section.college && (
                    <h4 className="text-lg text-gray-600  font-semibold">
                      {section.college}
                    </h4>
                  )}
                  {section.percentage && (
                    <h4 className="text-sm text-gray-600">
                      {section.percentage}
                    </h4>
                  )}
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* Horizontal Line */}
      <div className="w-[90%] mx-auto border-t-2 border-gray-300 my-2"></div>

      {/* Skills & Expertise Section */}
      <div className="w-4/5 text-gray-600 mx-auto p-6">
        {data.map((section, index) =>
          section.topic === "Skills & Expertise" ? (
            <div
              key={index}
              className="flex flex-row justify-between my-8 gap-96"
            >
              {/* Section Title */}
              <h1 className="text-xl  font-semibold">{section.topic}</h1>

              {/* Section Content */}
              <div className="w-4/5 max-w-3xl p-6">
                <div className="text-gray-700">
                  {/* Front-End Skills */}
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">Front-End:</h3>
                    <p className="text-sm">{section.frontEnd.join("")}</p>
                  </div>

                  {/* Back-End Skills */}
                  <div className="mb-4">
                    <h3 className="font-bold  text-lg">Back-End:</h3>
                    <p className="text-sm">{section.backEnd.join("")}</p>
                  </div>

                  {/* Tools */}
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">Tools:</h3>
                    <p className="text-sm">{section.tools.join("")}</p>
                  </div>

                  {/* System Administrator Skills */}
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">System Administrator:</h3>
                    <p className="text-sm">
                      {section.system_Administrator.join("")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* Horizontal Line */}
      <div className="w-[90%] mx-auto border-t-2 border-gray-300 my-2"></div>
    </div>
  );
};

export default Resume;
