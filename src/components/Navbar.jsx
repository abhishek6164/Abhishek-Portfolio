
const Navbar = () => {
  return (
    <nav className="bg-transparent font-mono text-3xl font-bold text-black shadow-none">
      <div className="container mx-auto px-4 py-4 flex ">
        <span className="flex items-center space-x-2">
          {/* Red Dot */}
          <span className="w-5 h-5 bg-red-500 rounded-full"></span>
          <span className="cursor-pointer">Abhishek</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
