import Link from 'next/Link'


export default function RootLayout({children}) {

  return (
    <>
    <div style={{display:'flex', gap: '1em'}}>
        <Link href='/'>Home</Link>
        <Link href='/users'>Users</Link>
    </div>

    {children}
    
    
    </>
  )
}

