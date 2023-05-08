'use client'

import Image from 'next/image'
import chatbot from '../public/chatbot.svg'
import { useState } from "react";
import { postToApi } from "@/lib/postToApi";

export default function Home() {
  const [message, setMessage] = useState('')
  const [resultMessage, setResultMessage] = useState(null)

 const sendPostToApi = async (post) =>{

    const result = await postToApi(post)
    setResultMessage(result)
 }

  

  return (
    <main className="flex min-h-lg flex-row items-start justify-center xl:justify-evenly p-12 gap-5" >

    <article>
      <Image className=' xl:block hidden'
      
      src={chatbot} width={500} height={600}/>
    </article>
      <section className="border border-black rounded-md p-4 flex flex-col gap-4 shadow-2xl">
        <h1 className="text-3xl font-bold">Streaming OpenAI</h1>
        <div id="resultContainer" className="h-48 overflow-y-auto">
          <p className="text-gray-500 text-sm mb-2">Generated send...</p>
          <p id="resultText" className='break-words w-96  '>{resultMessage && JSON.stringify(resultMessage)}</p>
        </div>

        <input
          className="p-2 bg-gray-300"
          type="text"
          placeholder="Enter prompt..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          /*onKeyUp={(e) => {if(e.key === 'Enter'){
            sendPostToApi(message)
            }}}*/
        />

        <div className="flex p-2 justify-evenly">
          <button 
          className="rounded-xl p-2 bg-black text-white"
          onClick={() => sendPostToApi(message)}
          >
            Generate
          </button>
          <button className="rounded-xl p-2 bg-white text-black border border-black w-24"
          //onClick={stopGenerate}
          >
            Stop
          </button>
        </div>
      </section>
    </main>
  );
}
