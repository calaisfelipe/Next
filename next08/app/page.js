import Link from "next/link"

export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold" >Route handler</h1>

      <Link href='/feedback'>Go to Feedback</Link>




      
    </main>
  )
}
