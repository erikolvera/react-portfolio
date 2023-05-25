import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navBar">
      <div className="container px-4 mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <NavLink to="/" className="no-underline hover:opacity-75 text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">Erik O.</NavLink>
        </div>
        <div className="lg:flex flex-col lg:flex-row lg:items-center">
          <ul className="flex flex-col lg:flex-row lg:ml-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="ml-2 px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug hover:opacity-75 no-underline">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="ml-2 px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug hover:opacity-75 no-underline">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="ml-2 px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug hover:opacity-75 no-underline">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className="ml-2 px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug hover:opacity-75 no-underline">Resume</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
