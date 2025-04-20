// src/components/Navbar.tsx
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `relative px-2 py-1 transition duration-300 ${
      pathname === path ? "text-blue-600 font-semibold" : "text-gray-700"
    } hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:bg-blue-600`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow-sm z-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
      
        <div className="space-x-6 text-sm sm:text-base flex items-center">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/projects" className={linkClass("/projects")}>
            Projects
          </Link>
          <Link to="/more" className={linkClass("/more")}>
            More
          </Link>
        </div>
      </div>
    </nav>
  );
};
