"use client";

import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import {IoClose} from 'react-icons/io5'

export default function Navbar({menu}) {
 // const [menu, setMenu] = useState(false);

  function goToScroll(top) {
    menu.setMenu(false);
    window.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      

      <nav className="flex p-4 bg-teal-700 text-white sm:justify-evenly justify-between ">
        <a href="#">
          <h3 className="text-xl font-bold"> &#x1F680; Acme Rockets</h3>
        </a>

        <ul className="sm:flex gap-3 hidden ">
          <li className="opacity-80 hover:opacity-100">
            <button onClick={() => goToScroll(500)}>Our Rockets</button>
          </li>
          <li>
            <button onClick={() => goToScroll(1100)}>Testimonials</button>
          </li>
          <li>
            <button onClick={() => goToScroll(1900)}>ContactUs</button>
          </li>
        </ul>

        <button onClick={() => menu.setMenu(!menu.menu)} className="sm:hidden text-3xl">
          { !menu.menu ? <BiMenu /> : <IoClose />}
        </button>
      </nav>
    </>
  );
}
