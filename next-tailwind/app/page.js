'use client'
import { useContext } from "react";
import { menuContext} from "@/lib/menuContext";
import Image from "next/image";
import mainImage from "../public/rocketdab.png";
import explorerImage from "../public/rocketman.png";
import adventurerImage from "../public/rocketride.png";
import infinityImage from "../public/rocketlaunch.png";
import Testimonial from "./components/Testimonial";
import ProductCard from "./components/ProductCard";
import Divider from "./components/Divider";
//import MenuMobile from "./components/MenuMobile";

export default function Home() {
    const menu = useContext(menuContext)

  return (
    <main
      className="
    bg-black min-h-screen  grid  
    sm:justify-center sm:pt-20
    place-content-start p-4 relative "
    >
      {/*<MenuMobile menu={menu}/>*/}

      <section
        className="text-white flex 

      xl:max-w-2xl xl:max-h-2xl 
      sm:max-h-xl sm:max-w-xl sm:flex-row
      flex-col-reverse max-h-sm max-w-sm justify-center items-center 
      py-10
      "
      >
        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start">
          <h2 className="text-3xl font-bold">We Boldy Go</h2>
          <h2 className="text-3xl font-bold text-slate-400">Where No Rocket</h2>
          <h2 className="text-3xl font-bold">Has Gone</h2>
          <h2 className="text-3xl font-bold">Before...</h2>
          <p
            className="font-extralight text-sm text-gray-300
          text-center sm:text-justify pt-1
          "
          >
            We're building rockets for the next century today. From the moon to
            Mars, Jupiter and beyond...
          </p>
          <p className="font-extralight text-sm text-gray-300 pt-1">
            Think Acme Rockets
          </p>
        </div>
        <div>
          <Image
            className="w-48 h-48 sm:w-auto sm:h-auto"
            src={mainImage}
            alt="main rocket"
          />
        </div>
      </section>

      <Divider />

      <section className="text-white grid place-content-center py-20">
        <h2 className="text-2xl font-bold pb-5 text-center">Our Rockets</h2>

        <div className="flex gap-5 sm:flex-row flex-col">
          <ProductCard
            src={explorerImage}
            alt="Explorer picture"
            width={80}
            height={80}
            title="Explorer"
            prize="$"
          />

          <ProductCard
            src={adventurerImage}
            alt="Explorer picture"
            width={80}
            height={80}
            title="Adventurer"
            prize="$$"
          />

          <ProductCard
            src={infinityImage}
            alt="Explorer picture"
            width={80}
            height={80}
            title="Infinity"
            prize="$$$"
          />
        </div>
      </section>

      <Divider />

      <section className="text-white grid place-content-center py-20">
        <h2 id="testimonials" className="text-3xl font-bold pb-5 text-center ">
          Testimonials
        </h2>

        <Testimonial
          author="-Wile E.Coyote, Genius"
          text="Acme has always been for me. Their Explorer rocket arrived in a
            wooden crate as expected. Life-long customer! A++ shopping
            experience."
        />

        <Testimonial
          author="-Marvin The Martian & k-9"
          text="The Acme Adventurer Rocket has thwarted mu iludium Q036 explosive Space Modulator on several occassions. This Makes me very, very angry! nevertheless, K-9 and i have awarded Acme the Martian contract for space exploration rockets based on Acmes quality and sturdy designs"
        />

        <Testimonial
          author="-Buzz Lightyear"
          text='I knew i not only wanted - i needes - Acmes infinity rocket for my mission in space. Acme delivered in one day! Nothing says "take me to your leader" like Acme infinity Rocket! 
          &#x1F4AF;'
        />
      </section>

      <Divider />

      <section className="min-w-md">
        <h2 className="text-3xl font-bold pb-5 text-center text-white ">
          Contact Us
        </h2>

        <form className="text-white flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="subjectInput">Subject:</label>
            <input
              type="text"
              className="p-2 text-black rounded-xl"
              placeholder="Your Subject"
              name="subjectInput"
              id="subjectInput"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="messageInput">Message:</label>
            <textarea
              className="p-2 text-black rounded-xl"
              placeholder="Your Message"
              name="messageInput"
              id="messageInput"
              rows="10"
              cols="30"
            />
          </div>

          <div>
            <button className="bg-teal-700 text-white p-2 rounded-xl ">
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
    
  
  );
}
