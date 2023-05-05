import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Acme Rockets',
  description: 'Created by dave Gray',
}

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br" className='sm:scroll-smooth'>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
