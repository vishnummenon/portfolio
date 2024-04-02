'use client'

import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";

import { sections } from "../constants/sections";
import Sidebar from "./Sidebar";

const Navbar: FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const [isSticky, setIsSticky] = useState(true);

      const handleScroll = useCallback(() => {
        setIsSticky(window.scrollY > 0);
    }, []);
    
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle state on circle click
      };

  return (
    <nav
      className={`flex items-center justify-between h-16 bg-cyan-600 px-4 ${isSticky ? 'sticky top-0' : ''}`}
      id="navbar"
    >
      <div className="flex items-center cursor-pointer" onClick={handleSidebarToggle}>
        <div className="circle bg-white text-cyan-800 font-bold text-xl flex items-center justify-center rounded-full h-10 w-10 mr-4 font-mono">
          VM
        </div>
      </div>
      <div className="flex space-x-4">
      {sections.map((section, index) => (
        <Link
          key={section.key}
          className={`hover:text-gray-200 font-mono border-white pr-2 ${index !== (sections.length-1) ? 'border-r-2' : ''}`}
          href={`#${section.key}`}
        >
          {section.value}
        </Link>
      ))}
      </div>
      <Sidebar isOPen={isSidebarOpen} handleClose={handleSidebarToggle} />
    </nav>
  );
};

export default Navbar;
