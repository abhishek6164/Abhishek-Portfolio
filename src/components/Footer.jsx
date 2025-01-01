import { IconBrandLeetcode } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandTwitter } from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 lg:gap-48 xl:gap-48 font-mono mb-8 sm-mx:mt-10 xs-mx:mt-0">
        {/* Phone Section */}
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-xl md:text-sm lg:text-lg">Phone</h1>
          <a className="text-gray-500" href="tel:+91-9322876164">
            +91-9322876164
          </a>
        </div>

        {/* Email Section */}
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-xl md:text-sm lg:text-lg">Email</h1>
          <a
            className="text-gray-500"
            href="mailto:abhishekpipriye2507@gmail.com"
          >
            abhishekpipriye2507@gmail.com
          </a>
        </div>

        {/* Follow Me Section */}
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-xl md:text-sm lg:text-lg">Follow Me</h1>
          <div className="flex justify-center sm:justify-start gap-4 text-gray-500">
            <a
              href="https://leetcode.com/u/Abhishek_Pipriye/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLeetcode size={24} stroke={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-pipriye/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin size={24} stroke={1.5} />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandTwitter size={24} stroke={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center">
        <h1 className="text-sm">© 2025 By Abhishek Pipriye.</h1>
      </div>
    </>
  );
};

export default Footer;
