import React from 'react'
import { Suspense } from 'react'



export default function RootLayout({children}) {


  return (
    <div className='bg-slate-300 min-h-screen flex justify-center' >

    <Suspense fallback={<h2 className='font-bold mt-5 text-xl'>Pesquisando...</h2>}>
        {children}
    </Suspense>


    </div>
  )
}
