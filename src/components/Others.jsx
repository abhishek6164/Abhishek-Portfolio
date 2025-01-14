const Others = () => {
  const items = [
    {
      name: "View My CV",
      color: "bg-gradient-to-br from-[#AC8968] to-[#93785B]",
      link: "/resume",
    },
    {
      name: "My Work",
      color: "bg-gradient-to-br from-[#AC8968] to-[#93785B]",
      link: "/projects",
    },
    {
      name: "Let's Talk",
      color: "bg-gradient-to-br from-[#AC8968] to-[#93785B]",
      link: "/contact",
    },
  ];

  // Extract common classes to avoid repetition
  const containerClasses = `
    mt-6 
    flex flex-col gap-5
    items-center justify-center
    sm:flex-row sm:gap-8
    md:gap-10
    lg:gap-12
  `;

  const itemClasses = "flex justify-center items-center";

  const spanBaseClasses = `
    flex justify-center items-center
    text-[#3E362E] font-bold
    w-28 h-28
    sm:w-32 sm:h-32
    md:w-36 md:h-36
    lg:w-40 lg:h-40
    text-sm uppercase tracking-wider
    sm:text-base
    md:text-lg
    rounded-full
    border-2 border-[#3E362E]/20
    shadow-lg hover:shadow-xl
    transition-all duration-300
    hover:bg-[#F5F5F5] hover:text-[#3E362E]
    transform hover:scale-105
    font-sans
  `;

  return (
    <div className="w-full px-4">
      <div className={containerClasses}>
        {items.map(({ name, color, link }, index) => (
          <a key={name} href={link} className={itemClasses}>
            <span className={`${spanBaseClasses} ${color}`}>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Others;
