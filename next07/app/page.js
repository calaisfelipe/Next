"use client";

import Image from "next/image";
import chatbot from "../public/chatbotpic.jpg";
import { useState } from "react";
import { postToApi } from "@/lib/postToApi";
import MessageField from "./components/MessageField";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messagesArray, setMessagesArray] = useState([]);
  const [loading , setLoading] = useState(false)

  const sendPostToApi = async (post) => {
    const result = await postToApi(post);
   
    if(result.choices[0].message.content){
    setMessagesArray([
      ...messagesArray,
      post,
      result.choices[0].message.content,
    ]);}else{
      console.log('ERR: Resposta não encontrada')
      setLoading(false)
      return
    }
    
    setLoading(false)

    /* const newArray = [...messagesArray, result.choices[0].message.content]
      setMessagesArray(newArray)*/
  };

  const generate = async (message) => {
    setLoading(true)
    setMessage("");
    await sendPostToApi(message);
    
  };

  const stopChat = () => {
    setMessagesArray([])
    setMessage('')
  }

  return (
    <main className="
    xl:justify-evenly xl:items-start
    sm:flex-row sm:p-12 
    flex flex-col min-h-xl gap-5 justify-center items-center p-4">
      <article className="md:block hidden" >
        <Image
          src={chatbot}
          width={500}
          height={600}
          alt="ChatBot image"
        />
      </article>
      <section className="border border-black rounded-md p-4 flex flex-col gap-4 shadow-2xl " >
        <h1 className="text-3xl font-bold">Streaming OpenAI</h1>

        {loading ? <p className="text-gray-500 text-sm mb-2">Generating...</p> : <p className="text-gray-500 text-sm mb-2">Generated send...</p>}

        <div id="resultContainer" className="overflow-y-auto sm:h-64 ">

        

          <div id="resultText" className="sm:w-96  w-auto flex flex-col gap-3 self-stretch sm:h-auto h-56">

            {messagesArray.length >= 1 &&
              messagesArray.map((message, index) => (
                <MessageField
                  key={index}
                  message={message}
                  type={index % 2 === 0 ? "user" : "AI"}
                />
              ))}

          </div>
        </div>

        <input
          className="p-2 bg-gray-300"
          type="text"
          placeholder="Enter prompt..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(e) => {if(e.key === 'Enter'){
            generate(message)
            }}}
        />

        <div className="flex p-2 justify-evenly">
          <button
            className="rounded-xl p-2 bg-black text-white"
            onClick={() => generate(message)}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
          <button
            className="rounded-xl p-2 bg-white text-black border border-black w-24"
            onClick={stopChat}
          >
            Stop
          </button>
        </div>
      </section>
    </main>
  );
}
