import {
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center">
      
      <a
        href="https://github.dev/GVelasquez03/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7]"
        aria-label="Github"
      >
        <FaGithub className="h-7 w-7" />
      </a>

      <a
        href="https://www.instagram.com/gilbertorafaelvelasque/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7]"
        aria-label="Instagram"
      >
        <FaInstagram className="h-7 w-7" />
      </a>
    </div>
  );
};

export default SocialIcons;
