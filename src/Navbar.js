import React, { useState } from "react";
import logo from "./assets/logo.svg";
import AccountDropdown from "./AccountDropdown";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img src={logo} alt="workaction" className="h-8" />
        </div>
        <div className="sm:hidden">
          <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none" onClick={() => setOpen(!isOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav className={`${isOpen ? "block" : "hidden"} px-2 pt-2 pb-4 sm:flex`}>
        <a href="#" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
          List your property
        </a>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Trips
        </a>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Messages
        </a>
        <AccountDropdown classname="ml-6" />
      </nav>
    </header>
  );
}
