
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaGithub, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Projects } from "./components/Projects";
import { Navbar } from "./components/Navbar";
import { AnimatedIntro } from './components/AnimatedIntro';

import './App.css'


function HomePage() {
  return (
    <>
      {/* Hero Section with Background + Overlay Text */}
      <div className="relative w-full h-[300px]">
        <img
          src="/background_img.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        
          <h2 className="mt-2 text-xl md:text-2xl">Huy Khang Pham</h2>
          <p className="mt-4 max-w-xl text-gray-200">
            Data Analyst & Software Developer
          </p>
        </div>
      </div>
      <AnimatedIntro />
      <main className="pt-10 max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
        {/* Grid Section */}
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="md:border-r md:border-gray-200 md:pr-8">
              <h2 className="text-2xl font-semibold mb-4 font-serif">Education</h2>
              <div>
                <p className="font-medium">Seneca Polytechnic</p>
                <p className="text-gray-500">
                  Honours Bachelor of Technology – Software Development | 2024
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="md:border-r md:border-gray-200 md:pr-8">
              <h2 className="text-2xl font-semibold mb-4 font-serif">Experience</h2>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Aucan Immigration and Education, Inc.</p>
                  <p className="text-gray-500">
                    Marketing Analyst Intern | Sep 2024 - Jan 2025
                  </p>
                </li>
                <li>
                  <p className="font-medium">Sagavape</p>
                  <p className="text-gray-500">
                    E-commerce Associate | Jan 2024 - Aug 2024
                  </p>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center text-center space-y-4 text-gray-700 text-sm">
  <h2 className="text-2xl font-semibold mb-4 font-serif">Links</h2>

              <a
                href="https://github.com/hkpham"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-black"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>

              <a
                href="tel:+0966470126"
                className="flex items-center space-x-2 hover:text-green-600"
              >
                <FaPhone className="text-xl" />
                <span>Phone</span>
              </a>

              <a
                href="mailto:hkhang1880@gmail.com"
                className="flex items-center space-x-2 hover:text-red-500"
              >
                <FaEnvelope className="text-xl" />
                <span>Gmail</span>
              </a>

              <a
                href="https://wa.me/14372585798"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-green-500"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        

        {/* Footer */}
        <footer className="pt-16 text-sm text-gray-400 border-t mt-16">
          &copy; {new Date().getFullYear()} Huy Khang Pham. All rights reserved.
        </footer>
      </main>
    </>
  );
}



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
