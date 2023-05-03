'use client'

import React, {useState} from "react";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const [menu , setMenu] = useState(false)

  function goToScroll(top){
    setMenu(false)
    window.scrollTo({
      top: top,
      left:0,
      behavior: 'smooth'

    })
  }
  

  return (
    <>

    { menu ? <div onClick={() =>setMenu(false)} className="min-h-screen min-w-screen bg-black grid place-content-center">

    <ul className="flex flex-col gap-3 text-white">
        <li><button onClick={() => goToScroll(600)}>Our Rockets</button></li>
        <li><button onClick={() => goToScroll(1400)}>Testimonials</button></li>
        <li><button onClick={() => goToScroll(2100)}>ContactUs</button></li>
      </ul>


    </div> : null}



    <nav className="flex p-4 bg-teal-700 text-white sm:justify-evenly justify-between ">
      <h3 className="text-xl font-bold"> &#x1F680; Acme Rockets</h3>

      <ul className="sm:flex gap-3 hidden">
        <li><button onClick={() => goToScroll(500)}>Our Rockets</button></li>
        <li><button onClick={() => goToScroll(1100)}>Testimonials</button></li>
        <li><button onClick={() => goToScroll(1900)}>ContactUs</button></li>
      </ul>

      <button 
      onClick={() => setMenu(!menu)}
      
      className="sm:hidden text-3xl">
        <BiMenu />
      </button>
    </nav>
    </>
  );
}
