import { IconBrandLeetcode } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandTwitter } from "@tabler/icons-react";

const Footer = () => {
  return (
    <> 
      <div className="mt-14 ml-16   font-mono  flex flex-row gap-48 mb-32">
        <div>
          <h1 className="font-bold text-xl">Phone</h1>
          <a href="tel:+91-9322876164">+91-9322876164</a>
        </div>
        <div>
          <h1 className="font-bold text-xl">Email</h1>
          <a href="mailto:abhishekpipriye2507@gmail.com">
            abhishekpipriye2507@gmail.com
          </a>
        </div>
        <div>
          <h1 className="font-bold text-xl">Follow Me</h1>
          <div className="flex flex-row gap-4">
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
        <div>
          <h1 className="text-sm">© 2025 By Abhishek Pipriye.</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
