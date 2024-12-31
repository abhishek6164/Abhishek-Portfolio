const Others = () => {
  const items = [
    {
      name: "Resume",
      color: "bg-yellow-300",
      link: "/resume", // Resume link
    },
    {
      name: "Projects",
      color: "bg-red-300",
      link: "/projects", // Projects link
    },
    {
      name: "Contact",
      color: "bg-blue-300",
      link: "/contact", // Contact link
    },
  ];

  return (
    <div className="flex flex-row font-mono overflow-auto scrollbar-hide justify-center items-center">
      <div className="mt-6 gap-5 flex justify-center items-center">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex justify-center items-center"
          >
            <span
              className={`flex justify-center items-center ${item.color} hover:bg-white hover:text-black text-white text-xl font-semibold w-40 h-40 rounded-full border border-gray shadow-lg hover:shadow-xl transition-colors duration-300`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Others;
