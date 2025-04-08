import React from 'react'
import logo from '../assets/logo.png';

const Navbar = () => {
  const scrollToTargetWorks = () => {
    const target = document.getElementById("working");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - window.innerHeight / 2 + target.offsetHeight / 2; // center it
    const duration = 1500; // ms
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    window.requestAnimationFrame(step);
  };
  const scrollToTargetServices = () => {
    const target = document.getElementById("sql-gen");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - window.innerHeight / 2 + target.offsetHeight / 2; // center it
    const duration = 1500; // ms
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    window.requestAnimationFrame(step);
  };
  const scrollToTargetContact = () => {
    const target = document.getElementById("contact");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - window.innerHeight / 2 + target.offsetHeight / 2; // center it
    const duration = 1500; // ms
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    window.requestAnimationFrame(step);
  };
  return (
    <>
    
      <nav  className='font-Inria-Sans fixed top-0 left-0 w-full h-25 z-50 shadow-sm'>
        <div className="sm:w-screen flex flex-wrap justify-between mx-auto p-4">
          <a href="/" className="flex space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-25 w-25 text-amber-50" alt="logo" />
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 p-1 m-5 border-solid border-amber-50 border-2 items-center justify-between text-center dark:hover:bg-gray-800 dark:focus:ring-blue-800"
            >
              Login / Sign Up
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-4xl md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-normal p-2  border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:text-lg text-gray-400">
              <li>
                <a
                  href="/"
                  className="py-2 md:py-3 md:px-5 md:mx-5 lg:mx-10 text-white bg-blue-700 md:bg-transparent md:text-gray-100  hover:bg-gray-800 rounded"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={scrollToTargetWorks}
                  className="py-2 md:py-3 md:px-5 md:mx-5 lg:mx-10 text-gray-900 md:hover:bg-transparent   dark:text-white dark:hover:bg-gray-700 hover:bg-gray-500 rounded"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={scrollToTargetServices}
                  className="py-2 md:py-3 md:px-5 md:mx-5 lg:mx-10 text-gray-900 md:hover:bg-transparent   dark:text-white dark:hover:bg-gray-700 hover:bg-gray-500/10 rounded"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={scrollToTargetContact}
                  className="py-2 md:py-3 md:px-5 md:mx-5 lg:mx-10 text-white bg-blue-700 md:bg-transparent  hover:bg-gray-800/40 rounded"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
