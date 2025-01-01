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
    <div className="">
      <div className="mt-6 gap-5  flex justify-center items-center lg-mx:mr-28 lg-mx:flex-row sm-mx:items-center sm-mx:justify-center sm-mx:ml-24 sm-mx:mb-20  xs-mx:mb-3  xsm-mx:mb-0">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex justify-center items-center"
          >
            <span
              className={`flex justify-center items-center ${item.color} hover:bg-white hover:text-black text-white text-xl font-semibold w-40 h-40 rounded-full border border-gray shadow-lg hover:shadow-xl transition-colors duration-300  lg-mx:text-sm lg-mx:w-24 lg-mx:h-24 lg-mx:rounded-full  `}
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
