import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="flex justify-center p-5 bg-darkBlue text-lightGray space-x-4">
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-lightGreen transition-colors duration-300">
      <FaGithub size={24} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-lightGreen transition-colors duration-300">
      <FaLinkedin size={24} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-lightGreen transition-colors duration-300">
      <FaTwitter size={24} />
    </a>
  </footer>
);

export default Footer;
