import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="flex justify-center p-5 bg-darkBlue text-lightGray space-x-4">
    <a href="https://github.com/TerranEncounter-cq" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-lightGreen transition-colors duration-300">
      <FaGithub size={24} />
    </a>
    <a href="https://www.linkedin.com/in/robbychen/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-lightGreen transition-colors duration-300">
      <FaLinkedin size={24} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-lightGreen transition-colors duration-300">
      <FaTwitter size={24} />
    </a>
  </footer>
);

export default Footer;
