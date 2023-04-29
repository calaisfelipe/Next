import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WikiRocket',
  description: 'Teached by Dave Gray',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-300`}>
        <Navbar />
        {children}</body>
    </html>
  )
}
