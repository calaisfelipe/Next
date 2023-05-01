import React from "react";
import Link from "next/Link";

export default function page() {
  return (
    <div className="min-h-screen min-w-screen 
    flex justify-start items-center flex-col gap-3 pt-5 bg-slate-500 text-white">
      <h2 className="text-3xl font-bold">Thank you for your feedback!!</h2>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
}
