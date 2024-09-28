import React from "react";
import { Link } from "react-router-dom";

const GitHubModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex gap-2 items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.68-.103-.253-.447-1.27.098-2.645 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.8c.85.004 1.705.114 2.504.335 1.91-1.294 2.748-1.025 2.748-1.025.547 1.375.203 2.392.1 2.645.642.697 1.03 1.589 1.03 2.68 0 3.841-2.339 4.687-4.566 4.933.359.31.678.923.678 1.86 0 1.343-.012 2.427-.012 2.756 0 .269.18.579.688.48A10.01 10.01 0 0 0 22 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h2 className="text-lg font-semibold">Github Profile</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">MubashirAhmad33</h2>

          <p className="mb-4  ">
            MERN Stack and Full Stack Developer at Alright Tech as well in
            Alphinex sol, specializing in crafting dynamic web applications.
            <span className="text-blue-600  italic ">
              Proficient in MongoDB, Express.js, TypeScript,React.js,Node.js and
              Taliwind CSS
            </span>
            . Committed to optimizing performance and ensuring scalable code for
            impactful digital solutions.
          </p>
          <p>
            <span className="font-bold text-lg mr-2">Check Out : </span>
            <a
              href="https://github.com/MubashirAhmad33"
              target="_blank"
              rel="noopener noreferrer"
              className="italic"
            >
              https://github.com/MubashirAhmad33
            </a>
          </p>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-start p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-500-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GitHubModal;
