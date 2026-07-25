import logo from "../assets/Kavya/LOGONK.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <img className="w-10 rounded-full" src={logo} alt="Kavya Logo" />
        <h1 className="text-2xl font-semibold tracking-wide">
          Kavya N K
        </h1>
      </div>

      <div className="flex items-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/nk-100420-kavi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/kavya-45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/tamil_ponnu_kavya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;