
import '../globals.css'
import React from 'react'

export default function Navbar() {
  return (
    <header className='bg-slate-800 text-white flex justify-between items-center p-5'>
        <h2 className='text-2xl font-bold'>Personal Gpt</h2>

    <nav>
        <div className='menu sm:hidden'> 
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className='sm:flex gap-3 hidden'>
            <li>Home</li>
            <li>About it</li>
            <li>Api Informations</li>
        </ul>
    </nav>

    </header>
  )
}
