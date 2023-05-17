"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function FeedbackPage() {
  const form = useForm({
    mode:'onBlur'
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting, isDirty, isValid } = formState;
  const router = useRouter();

  async function onSubmit(data) {
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("form submited", result);

    router.push("/thankyou");
  }
  return (
    <div className="p-2 flex flex-col justify-center items-center min-h-screen">
      <form
        className="flex flex-col gap-5 p-4 bg-gray-800 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className="text-3xl font-bold text-white self-center">
          Feedback Form
        </h2>

        <div className="flex flex-col gap-1 ">
          <label htmlFor="name" className="text-white font-bold">
            Name:
          </label>
          <input
            className="p-2 bg-gray-300 rounded-lg"
            type="text"
            id="name"
            placeholder="insert your name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /[a-zA-Z]/,
                message: "Only letters",
              },
            })}
          />
          <p className="text-sm text-red-500 ">{errors.name?.message}</p>
        </div>

        <div className="flex flex-col gap-1 ">
          <label className="text-white font-bold" htmlFor="email">
            Email:
          </label>
          <input
            className="p-2 bg-gray-300 rounded-lg"
            type="email"
            id="email"
            placeholder="insert your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
                message: "Invalid E-mail Format",
              },
            })}
          />
          <p className="text-sm text-red-500 ">{errors.email?.message}</p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white font-bold" htmlFor="feedback">
            Feedback:
          </label>
          <textarea
            className="p-2 bg-gray-300 rounded-lg"
            name="feedback"
            id="feedback"
            cols="30"
            rows="5"
            placeholder="insert your feedback..."
            {...register("feedback", {
              required: "feedback is required",
            })}
          />
          <p className="text-sm text-red-500 ">{errors.feedback?.message}</p>
        </div>

        <button
          className="bg-emerald-500 rounded-xl p-2 font-bold border-black w-48 self-center text-white hover:bg-emerald-700 disabled:bg-gray-500 disabled:opacity-70"
          type="submit"
          disabled={isSubmitting || !isValid}
        >
          Enviar Feedback
        </button>
      </form>
    </div>
  );
}
