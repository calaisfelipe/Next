import '../globals.css'
import React from 'react'

export default function MenuMobile({menu}) {

    function goToScroll(top) {
        menu.setMenu(false);
        window.scrollTo({
          top: top,
          left: 0,
          behavior: "smooth",
        });
      }


  return (
        <div
          onClick={() => menu.setMenu(false)}
          className={!menu.menu ? "min-w-full bg-black grid place-content-center z-10 topHidden absolute " : "min-w-full bg-black grid place-content-center z-10 topShow absolute " }
        >
          <ul className="flex flex-col gap-5 text-white text-center ">
            <li className="text-4xl font-bold opacity-80 hover:opacity-100">
              <button onClick={() => goToScroll(600)}>Our Rockets</button>
            </li>
            <li className="text-4xl font-bold opacity-80 hover:opacity-100">
              <button onClick={() => goToScroll(1400)}>Testimonials</button>
            </li>
            <li className="text-4xl font-bold opacity-80 hover:opacity-100">
              <button onClick={() => goToScroll(2100)}>ContactUs</button>
            </li>
          </ul>
        </div>
      
  )
}
