import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { headerData } from "../../data/headerData";
import resume from "../../assets/pdf/Anu_Pratap_Singh_Resume.pdf";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      className: "nav-link home",
    },
    {
      id: 2,
      link: "about",
      className: "nav-link about",
    },
    {
      id: 3,
      link: "project",
      className: "nav-link projects",
    },
    {
      id: 4,
      link: "skills",
      className: "nav-link skills",
    },
    {
      id: 5,
      link: "contact",
      className: "nav-link contact",
    },
    {
      id: 6,
      link: "Github Stats",
    },
  ];

  return (
    <div id="nav-menu" className="flex justify-between items-center w-full h-20 px-2 text-white bg-gradient-to-l from-white to-blue-800 sticky top-0 z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2"></h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(
          ({ id, link, className }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200"
            >
              <Link to={link} smooth duration={500} className={className}>
                {link}
              </Link>
            </li>
          )
          // console.log("=>", link)
        )}
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200">
          <a href={resume} download="Anu_Pratap_Singh_Resume">
          <button id="resume-button-1">Resume</button>
          </a>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-white to-blue-800 text-white">
          {links.map(({ id, link, resume }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-black"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
               
                smooth
                duration={500}
                // href={resume}
              >
                {link}
              </Link>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-black">
            <a href={resume} download="Anu_Pratap_Singh_Resume">
            <button id="resume-button-1">Resume</button>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
