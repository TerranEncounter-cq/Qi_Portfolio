// app/page.js

export const metadata = {
  title: "Qi Chen's Portfolio",
  description: "Welcome to my personal portfolio",
};

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-darkBlue to-blue-900 text-lightGray">
      <Header />

      <main className="flex-grow flex flex-col justify-center items-center px-4 text-left space-y-6">
        <div className="max-w-lg text-left animate-fadeInUp">
          <p className="text-lightGreen mb-2 text-lg">Hi, my name is</p>
          <h1 className="text-6xl font-bold mb-4">Qi Chen.</h1>
          <h2 className="text-4xl font-bold text-lightGray mb-4">I build products with code</h2>
          <p className="text-lg mb-4">
            I'm a Software Engineer based in Los Angeles. I build modern web and mobile applications with the latest technologies. 
            I also have experience in backend engineering. Mostly React.js, Next.js & Node.js.
          </p>
          <a href="#contact" className="mt-6 px-4 py-2 border border-lightGreen text-lightGreen rounded-md hover:bg-lightGreen hover:text-darkBlue transition-colors duration-300">
            Contact Me
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
