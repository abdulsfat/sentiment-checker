import { useState } from "react";
import { navLinks } from "../../constants/navlinks";
import { Link, useLocation } from "react-router-dom";
import { memo } from "../../constants/memo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mainMemo = memo.find((item) => item.value === "main");
  const videoSrc = mainMemo ? mainMemo.src : "";

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="relative flex items-center justify-between h-20 mx-6 lg:mx-20 mt-14">
        {/* video memoji kiri */}
        <div className="w-32 h-32 bg-white/80 rounded-3xl">
          <video
            className="object-cover h-40 pb-1"
            muted
            loop={true}
            autoPlay
            src={videoSrc}
            alt=""
          />
        </div>
        {/* navbar kanan */}
        <div className="px-2 shadow-lg max-w-7xl isolate rounded-xl bg-white/40 ring-1 ring-black/5">
          <div className="relative flex items-center justify-between py-2">
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-blue-900 rounded-md bg-white/40 ring-1 ring-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "" : "hidden"
              } sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-between`}
            >
              <div className="hidden my-auto sm:block">
                <div className="flex space-x-4">
                  {navLinks.map((nav, index) => (
                    <Link
                      to={nav.link}
                      key={nav.id}
                      className={`${
                        location.pathname === nav.link
                          ? "text-slate-900"
                          : "text-slate-700"
                      } ${
                        index === navLinks.length - 1
                          ? "bg-white/80 shadow-sm transition duration-300 ease-in-out hover:drop-shadow-xl"
                          : ""
                      } block rounded-lg px-3 py-2 text-sm`}
                      aria-current={
                        location.pathname === nav.link ? "page" : undefined
                      }
                    >
                      {nav.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`sm:hidden absolute right-0 rounded-md w-max px-5 mt-2 bg-white/50 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu"
          >
            <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((nav, index) => (
                <Link
                  to={nav.link}
                  key={nav.id}
                  className={`${
                    location.pathname === nav.link
                      ? "text-slate-900"
                      : "text-slate-700"
                  } ${
                    index === navLinks.length - 1
                      ? "bg-white/80 shadow-sm transition duration-300 w-max ease-in-out hover:drop-shadow-xl"
                      : ""
                  } block rounded-lg px-3 py-2 text-sm`}
                  aria-current={
                    location.pathname === nav.link ? "page" : undefined
                  }
                >
                  {nav.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
