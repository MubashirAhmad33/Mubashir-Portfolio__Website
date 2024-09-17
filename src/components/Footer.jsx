import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
          {/* Right section: Social Media Links */}

          <div className=" text-center text-gray-400">
            <p>&copy; 2024 PortFolio. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M24 4.56v14.88c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zm-8.09-.44h-2.31c-1.64 0-2.15.78-2.15 2.07v1.95h4.29l-.56 4.14h-3.73v10.62h-4.46V12.3H5.31V8.16h3.49V5.48c0-3.47 2.13-5.37 5.24-5.37 1.49 0 2.77.11 3.14.16v3.67z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M23.49 4.64c-.86.39-1.77.65-2.74.77 1.01-.61 1.78-1.58 2.15-2.73-.94.56-1.99.98-3.1 1.2-.89-.94-2.14-1.53-3.53-1.53-2.67 0-4.84 2.17-4.84 4.84 0 .38.04.75.13 1.1-4.02-.2-7.58-2.13-9.96-5.06-.42.71-.66 1.54-.66 2.42 0 1.67.85 3.15 2.14 4.01-.79-.03-1.53-.24-2.17-.61v.06c0 2.34 1.67 4.29 3.89 4.73-.4.11-.83.17-1.27.17-.31 0-.61-.03-.9-.08.61 1.91 2.39 3.31 4.5 3.35-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.78-.02-1.17-.07 2.14 1.37 4.67 2.17 7.39 2.17 8.87 0 13.73-7.35 13.73-13.73 0-.21 0-.43-.01-.64.94-.68 1.76-1.53 2.41-2.5z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M12 2.04c5.49 0 9.96 4.47 9.96 9.96 0 5.49-4.47 9.96-9.96 9.96-5.49 0-9.96-4.47-9.96-9.96 0-5.49 4.47-9.96 9.96-9.96zM7.54 8.56h-.03c-.1-.02-.2-.05-.29-.05-.19 0-.35.05-.47.13-.12.09-.22.21-.29.36-.06.14-.09.31-.09.5v4.68c0 .19.03.35.09.5.07.15.17.27.29.36.12.09.28.13.47.13.1 0 .19-.01.29-.05h.03l5.42-2.73c.15-.08.26-.18.35-.3.08-.13.13-.29.13-.46s-.05-.33-.13-.46c-.08-.12-.2-.22-.35-.3l-5.42-2.73z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom section: Copyright */}
      </div>
    </footer>
  );
};

export default Footer;
