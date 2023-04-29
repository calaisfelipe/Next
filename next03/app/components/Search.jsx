"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");



  const handleSubmit = async (e) => {
    console.log(search)
    e.preventDefault()
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form
      className="w-50 mx-2 flex gap-1 justify-center items-center md:justify-between "
      onSubmit={handleSubmit}
    >
      <input
        className="rounded-xl text-xl w-36 md:w-80 text-black p-2 "
        type="text"
        name=""
        id=""
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Pesquisar..."
      />

      <button className="p-2 text-xl " type="submit">
        <BiSearch />
      </button>
    </form>
  );
}
