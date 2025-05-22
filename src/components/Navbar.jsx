import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex justify-items-start space-x-3 rtl:space-x-reverse"
          >
            <img src="../src/assets/logo.png" className="h-8 " alt="Logo" />
          </a>
          <div className=" flex items-center space-x-6 ">
            <nav>
              <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                  <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline"
                      >
                        Programs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline"
                      >
                        Coaches
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline"
                      >
                        Amenities
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline"
                      >
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline"
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline"
                      >
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};
