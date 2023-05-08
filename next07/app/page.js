export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">

      <section className="border border-black rounded-md p-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Streaming OpenAI</h1>
        <div>Generated send...</div>
        <input 
        className="p-2 bg-gray-300"
        type='text'
        placeholder="Enter prompt..."/>
        
        <div className="flex p-2 justify-evenly">
          <button className="rounded-xl p-2 bg-black text-white ">Generate</button>
          <button className="rounded-xl p-2 bg-white text-black border border-black w-24">Stop</button>
        </div>
      </section>






    </main>
  );
}
