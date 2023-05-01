import Link from 'next/Link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500 text-white">

      <Link href='/feedback'>Go to Feedback</Link>
      
    </main>
  )
}
