"use client";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-color-background text-color-foreground p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-color-foreground focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-color-background md:bg-transparent p-4 md:p-0`}
        >
          <li>
            <a href="#" className="block py-2 hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
