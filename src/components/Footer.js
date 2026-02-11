import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-0 w-full bg-black pt-22 pb-24 text-white overflow-hidden">

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="text-3xl font-bold tracking-tight cursor-pointer"
            >
              bikash<span className="text-red-600">.io</span>
            </a>
          </div>

          {/* Text Links */}
          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <p className="hover:text-white transition-colors">Terms & Conditions</p>
            <p className="hover:text-white transition-colors">Privacy Policy</p>
            <p className="hover:text-white transition-colors">Refund & Cancellation</p>
          </div>

          {/* Social + Copyright */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-4">
              {/* LeetCode */}
              <a
                href="https://www.leetcode.com/bikash_09"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
                  alt="LeetCode"
                  className="h-8 w-8 object-contain"
                />
              </a>

              {/* CodeChef */}
              <a
                href="https://www.codechef.com/users/bikash_09"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/CodeChef_Logo.svg"
                  alt="CodeChef"
                  className="h-8 w-8 object-contain"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/bikashdalapati09"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="LinkedIn"
                  className="h-8 w-8 object-contain"
                />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/bikashdalapati"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                  alt="Twitter"
                  className="h-8 w-8 object-contain"
                />
              </a>
            </div>

            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} bikash.io. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background faded text */}
      <h1
        className="
          pointer-events-none
          absolute bottom-0 left-1/2
          -translate-x-1/2
          select-none
          font-extrabold
          leading-none
          whitespace-nowrap
          text-transparent
          bg-clip-text
          bg-gradient-to-t
          from-black
          via-[#1f1f1f]
          to-[#9a9a9a]
          text-[10rem]
          sm:text-[12rem]
          md:text-[14rem]
          lg:text-[16rem]
          xl:text-[18rem]
          z-0
        "
      >
        bikash.io
      </h1>

    </footer>
  );
};

export default Footer;
