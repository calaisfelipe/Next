"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function Feedback() {
  const [feedback, setFeedback] = useState(initialState);
  const router = useRouter();

  function handleChange(e) {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  }

  async function sendForm(e) {
    e.preventDefault();
    setFeedback(initialState);
    const { name, email, message } = feedback;

    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await res.json();

    console.log(result);

    router.push("/thank-you");
  }

  return (
    <div className="p-2 max-w-xl mx-auto bg-slate-500">
      <h2 className="text-3xl font-bold text-center mb-3">Give us your Feedback</h2>

      <form onSubmit={sendForm} className="flex flex-col gap-2">
        <input
          className="p-2 text-xl "
          type="text"
          name="name"
          value={feedback.name}
          onChange={handleChange}
          placeholder="Insert your name"
          required
        />
        <input
          className="p-2 text-xl"
          type="email"
          name="email"
          value={feedback.email}
          onChange={handleChange}
          placeholder="Insert your email"
          required
        />

        <textarea
          className="p-2 text-xl"
          name="message"
          cols="15"
          rows="5"
          value={feedback.message}
          onChange={handleChange}
          placeholder="White your message"
          required
        ></textarea>

        <button className="hover:bg-gray-800 bg-gray-500 text-white" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
