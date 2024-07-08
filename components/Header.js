import Link from 'next/link';

const Header = () => (
  <header className="flex justify-between items-center p-5 bg-darkBlue text-lightGray">
    <div className="text-lg font-bold text-lightGreen">Qi</div>
    <nav>
      <a href="/resume.pdf" className="mx-2 px-3 py-1 border border-lightGreen rounded hover:bg-lightGreen hover:text-darkBlue transition-colors duration-300">Resume</a>
      <a href="/blog" className="mx-2 hover:text-lightGreen transition-colors duration-300">Blog</a>
    </nav>
  </header>
);

export default Header;
