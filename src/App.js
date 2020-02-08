import React from "react";
import download from "./assets/download.jpg";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
function App() {
  return (
    <div id="app" className="antialiased text-gray-900">
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <LoginForm />
      </div>
    </div>
  );
}

export const Card = () => (
  <div className="rounded-lg overflow-hidden border shadow-lg">
    <img src={download} alt="view" className="object-cover w-full overflow-hidden" />
    <div className="bg-white p-1">
      <div className="text-lg font-semibold mb-1">Title beautiful view</div>
      <div className="flex items-baseline">
        <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wider">new</span>
        <span className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wider">5 bedrooms &bull; 3 toitlets</span>
      </div>
      <p className="text-xs mb-4 mt-4 ml-2 leading-0 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis natus rem eaque sed aliquid, impedit, ipsam quis iusto quibusdam ex
        molestias, reprehenderit doloremque quos exercitationem modi itaque maiores temporibus?
      </p>
      <div className="mt-2 flex center">
        {[1, 2, 3, 4, 5].map(i => (
          <svg viewBox="0 0 24 24" className={`${i < 4 ? "text-teal-500" : "text-gray-600"} h-4 w-4 fill-current`}>
            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
          </svg>
        ))}
      </div>
    </div>
  </div>
);
export default App;
