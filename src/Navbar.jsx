import React, { useState, useEffect } from 'react';
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import logo from './assets/logo.png'

const Navbar = () => {
  const sections = ['Home', 'About', 'Works', 'Blog', 'Contact'];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');


  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const sectionOffsets = {};
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionOffsets[section] = sectionElement.offsetTop;
      }
    });

    let currentSection = 'Home';
    sections.forEach((section) => {
      if (scrollPosition >= sectionOffsets[section] - windowHeight / 2) {
        currentSection = section;
      }
    });

    setActiveSection(currentSection);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsSidebarOpen(false);
      setActiveSection(id);
    }
  };

  const handleMenuItemClick = (id) => {
    scrollToSection(id);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  


  return (
    <>
      <nav className={`h-36 w-full p-20 flex items-center justify-between navbar text-black top-0 left-0 fixed bg-white ${activeSection !== 'Home' ? 'active' : ''}`}>
        <a href="#Home">
          <img className='h-[60px] w-[150px] bg-cover bg-center cursor-pointer logoImg' src={logo} alt="Logo" rel="noopener noreferrer" />
        </a>
        <div onClick={toggleSidebar}>
          <div className='sidebar cursor-pointer md:hidden text-3xl'>
            {isSidebarOpen ? <RxCross2 /> : <HiOutlineBars3 />}
          </div>
        </div>
        <ul className='h-16 items-center gap-8 text-lg font-medium transition-all navlist md:flex hidden'>
          {sections.map((section) => (
            <li key={section} onClick={() => handleMenuItemClick(section)} className={`cursor-pointer ${activeSection === section ? 'text-[rgb(66,172,173)]' : ''}`}>
              {section}
              {activeSection === section && <div className='h-[3px] w-[60%] bg-[rgb(66,172,173)] rounded-sm transition-all top-9 move'></div>}
            </li>
          ))}
        </ul>
      </nav>
      <div className={`fixed left-0 top-[120px] h-screen bg-white w-full sidebar transform ${isSidebarOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform `}>
        <ul  className='text-md text-[#3E3C56] '>
          {sections.map((section) => (
            <li key={section} onClick={() => handleMenuItemClick(section)} className='cursor-pointer py-4 px-5 border-b border-gray-200'>
              {section}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
