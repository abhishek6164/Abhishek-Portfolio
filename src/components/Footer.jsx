import { IconBrandLeetcode } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandTwitter } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 lg:gap-48 xl:gap-48 font-sans mb-8 sm-mx:mt-10 xs-mx:mt-0 ">
        {/* Phone Section */}
        <div className="text-center sm:text-left">
          <h1 className="font-extrabold text-2xl md:text-lg lg:text-xl text-[#3E362E]">
            Get in Touch
          </h1>
          <a
            className="text-[#A69080] hover:text-[#865D36] transition-colors"
            href="tel:+91-9322876164"
          >
            +91-9322876164
          </a>
        </div>

        {/* Email Section */}
        <div className="text-center sm:text-left">
          <h1 className="font-extrabold text-2xl md:text-lg lg:text-xl text-[#3E362E]">
            Drop a Line
          </h1>
          <a
            className="text-[#A69080] hover:text-[#865D36] transition-colors"
            href="mailto:abhishekpipriye2507@gmail.com"
          >
            abhishekpipriye2507@gmail.com
          </a>
        </div>

        {/* Follow Me Section */}
        <div className="text-center sm:text-left">
          <h1 className="font-extrabold text-2xl md:text-lg lg:text-xl text-[#3E362E]">
            Connect With Me
          </h1>
          <div className="flex justify-center sm:justify-start gap-6 text-[#93785B]">
            <a
              href="https://leetcode.com/u/Abhishek_Pipriye/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#865D36] transition-colors"
            >
              <IconBrandLeetcode size={28} stroke={2} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-pipriye/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#865D36] transition-colors"
            >
              <IconBrandLinkedin size={28} stroke={2} />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#865D36] transition-colors"
            >
              <IconBrandTwitter size={28} stroke={2} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center  py-4">
        <h1 className="text-base font-medium text-[#93785B]">
          Crafted with ❤️ by Abhishek Pipriye © 2025
        </h1>
      </div>
    </div>
  );
};

export default Footer;
