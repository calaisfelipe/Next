import React from "react";
import Link from "next/Link";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="p-4 flex bg-indigo-500 text-white sticky top-0 gap-1 justify-center items-center flex-col md:flex-row">
      <h3 className="grow font-bold">
        <Link href="/">WikiRocket</Link>
      </h3>

      <nav  className="gap-2 hidden">
        <Link href="/">Home</Link>
        <Link href="/">about</Link>
        <Link href="/">Talk to us</Link>
      </nav>
      <Search />
    </div>
  );
}
