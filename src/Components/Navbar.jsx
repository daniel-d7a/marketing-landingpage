import { useState } from "react";
import dots_9 from "../assets/dots-9-svgrepo-com.svg";
import logo from "../assets/gradient-mm-logo-design/Asset 4.svg";
import search from "../assets/search-svgrepo-com.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full flex p-2 px-4 justify-between items-center z-50">
      <img
        src={logo}
        className="w-8"
        onClick={() => {
          document
            .querySelector("#home")
            .scrollIntoView({ behavior: "smooth" });
        }}
      />
      <img
        src={dots_9}
        className="w-8 md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />

      <ul className="text-sky-900 capitalize font-bold flex gap-4 text-lg">
        <li className="text-center border-transparent border-b-2 transition-all p-2 hover:border-sky-900">
          <a href="#home">Home</a>
        </li>
        <li className="text-center border-transparent border-b-2 transition-all p-2 hover:border-sky-900">
          <a href="#service">services</a>
        </li>
        <li className="text-center border-transparent border-b-2 transition-all p-2 hover:border-sky-900">
          <a href="#about">about us</a>
        </li>
        <li className="text-center border-transparent border-b-2 transition-all p-2 hover:border-sky-900">
          <a href="#us">our team</a>
        </li>
        <li className="text-center border-transparent border-b-2 transition-all p-2 hover:border-sky-900">
          <a href="#client">clients</a>
        </li>
        <li className="text-center border-transparent border-b-2 transition-all p-2 hover:border-sky-900">
          <a href="#news">news</a>
        </li>
      </ul>
      <img src={search} className="w-8" />

      <ul
        className={`absolute capitalize w-full top-12 left-0 bg-white text-sky-900 font-bold flex flex-col justify-center items-center ${
          isOpen ? "" : "hidden"
        } `}
      >
        <li className="w-3/4 text-center px-8 py-4 border-b-2 border-sky-900">
          <a href="#home">Home</a>
        </li>
        <li className="w-3/4 text-center px-8 py-4 border-b-2 border-sky-900">
          <a href="#service">services</a>
        </li>
        <li className="w-3/4 text-center px-8 py-4 border-b-2 border-sky-900">
          <a href="#about">about us</a>
        </li>
        <li className="w-3/4 text-center px-8 py-4 border-b-2 border-sky-900">
          <a href="#us">our team</a>
        </li>
        <li className="w-3/4 text-center px-8 py-4 border-b-2 border-sky-900">
          <a href="#client">clients</a>
        </li>
        <li className="w-3/4 text-center px-8 py-4 border-b-2 border-sky-900">
          <a href="#news">news</a>
        </li>
      </ul>
    </nav>
  );
}
