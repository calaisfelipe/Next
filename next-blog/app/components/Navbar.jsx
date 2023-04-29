import Link from "next/Link"
import {GrInstagram, GrGithub, GrTwitter, GrFacebook } from 'react-icons/gr'

export default function Navbar() {

  return (
    <nav className="p-3 flex items-center justify-center bg-emerald-950 text-white flex-col sm:flex-row gap-2 shadow-2xl" >
        <h2 className="grow text-xl"><Link href='/'>Calais Blog</Link></h2>

        <ul className="flex gap-3 ">
            <li className="text-3xl hover:text-gray-500">
                <Link href='https://www.instagram.com/calaisfelipe/' target='_blank'><GrInstagram /></Link>
            </li>
            <li className="text-3xl hover:text-gray-500">
                <Link href='https://github.com/calaisfelipe' target='_blank'><GrGithub /></Link>
            </li>
            <li className="text-3xl hover:text-gray-500">
                <Link href='https://www.facebook.com/felipe.calais.7/' target='_blank'><GrFacebook /></Link>
            </li>
            <li className="text-3xl hover:text-gray-500">
                <Link href='https://github.com/calaisfelipe' target='_blank'><GrTwitter /></Link>
            </li>

        </ul>


    </nav>
  )
}
