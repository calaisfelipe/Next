//'use client'
//import { useState } from 'react'
import { menuContext } from '@/lib/menuContext'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Acme Rockets',
  description: 'Created by dave Gray',
}

export default function RootLayout({ children }) {
    //const [menuMobile, setMenuMobile] = useState(false)


  return (
    <html lang="pt-br" className='sm:scroll-smooth'>
      <body className={inter.className}>
      {children}
       {/* <Navbar menu={{menu: menuMobile, setMenu:setMenuMobile}}/>   
        <menuContext.Provider value={{menu: menuMobile, setMenu:setMenuMobile}}>
        
        </menuContext.Provider>
      */}

        <Footer />

        </body>
    </html>
  )
}
