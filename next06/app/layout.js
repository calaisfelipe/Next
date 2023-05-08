import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Teste velocidade Digitação',
  description: 'Criado por Felipe Calais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br"  >
      <body className={`${inter.className} dark:bg-gray-800`}>
        
        {children}</body>
    </html>
  )
}
