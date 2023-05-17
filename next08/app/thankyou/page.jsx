import Link from "next/link"


export const metadata = {
    title: 'Thank You'
}


export default function ThankYouPage() {
  return (
    <div className="p-2 grid place-content-center min-h-screen gap-3">
        <h2 className="text-3xl text-black font-bold">Thank You for your feedback!!</h2>
        <Link 
        className="underline text-center"
        href='/'>Go to Home</Link>


    </div>
  )
}
