// import React from "react";

// const Modal = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-white  ">
//       <div>
//         {/* Heading */}
//         <h1>Hi! </h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime
//           ipsam perferendis alias in eum reprehenderit et consequuntur officia
//           soluta ipsum porro eius perspiciatis quo, odio magnam aut odit vero?
//         </p>
//         <button onClick={onClose}>Close me!</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        {/* Modal Heading */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold mb-4">Profile info!</h1>
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

        <hr className="p-2" />

        {/* Modal Content */}
        <h1 className="text-xl mb-2 font-semibold"> it's Mubashir Ahmad</h1>
        <p className="mb-4 text-justify">
          MERN Stack + Full Stack Developer at Alright Tech as well in Alphinex
          sol, specializing in crafting dynamic web applications. Proficient in
          MongoDB, Express.js, React.js, and Node.js. Committed to optimizing
          performance and ensuring scalable code for impactful digital
          solutions.
        </p>
        <hr className="p-2" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-500-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
