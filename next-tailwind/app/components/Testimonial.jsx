import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Testimonial({author,text}) {
  return (
    <>
    <div className="max-w-lg flex flex-col justify-center pb-10">
          <div>
            <ImQuotesLeft className="text-3xl text-gray-600"/>
          </div>
          <p className="font-light">
            {text}
          </p>
          <div className="self-end">
            <ImQuotesRight className="text-3xl text-gray-600" />
          </div>
          <p className="text-end font-extralight italic">{author}</p>
        </div>
    </>
  )
}
