import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
