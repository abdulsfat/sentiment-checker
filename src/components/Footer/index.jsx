import { navLinks } from "../../constants/navlinks";

const Footer = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-r from-indigo-700 to-indigo-600 lg:p-0">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-between sm:flex-row lg:h-full h-28">
          <div className="flex items-center flex-shrink-0">
            <div className="pt-10 ml-2 ">
              <h1 className="text-4xl  font-medium text-white lg:text-[3rem]">
                Unveiling meaning
              </h1>
              <h1 className="text-4xl mt-2 font-medium text-white lg:text-[3rem]">
                behind words 🪄
              </h1>
              <h2 className="mb-20 text-xl text-white lg:text-xl mt-7">
                Sentiment Cheker
              </h2>
            </div>
          </div>
          <div className="flex space-x-4">
            {navLinks.map((nav, index) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={`${
                  index === 0
                    ? "text-white hover:text-indigo-200"
                    : "text-white hover:text-indigo-200"
                } text-md font-semibold`}
                aria-current="page"
              >
                {nav.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
