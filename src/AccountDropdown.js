import React, { useState } from "react";
import { useKeyPress } from "./useKeyPress";

export default function Dropdown({ classname }) {
  const [isOpen, setOpen] = useState(false);
  const escKeyPress = useKeyPress("H");
  if (escKeyPress) console.log("escape");
  return (
    <div className={`relative ${classname}`}>
      {escKeyPress && "👀👀👀👀"}
      <button
        className="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:border-white focus:outline-none "
        onClick={() => setOpen(!isOpen)}
      >
        <img
          className="relative h-full w-full object-cover z-10"
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
          alt="Your avatar"
        />
      </button>
      {isOpen && (
        <button tabIndex={-1} className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default" onClick={() => setOpen(false)}>
          A
        </button>
      )}

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl ">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
            Account Settings
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
            Support
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
            Sign out
          </a>
        </div>
      )}
    </div>
  );
}
