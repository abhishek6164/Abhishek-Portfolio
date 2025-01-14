const Navbar = () => {
  return (
    <nav className="bg-[#F5F5F5] font-sans text-[#3E362E] shadow-none">
      <div className="container mx-auto px-4 py-4 flex">
        <span className="flex items-center space-x-3">
          {/* Gradient Dot */}
          <span
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-r from-[#865D36] to-[#93785B] rounded-full"
            aria-hidden="true"
          ></span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-[#AC8968] to-[#A69080] bg-clip-text text-transparent hover:from-[#93785B] hover:to-[#865D36] transition-all duration-300 cursor-pointer">
            AP Portfolio
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
