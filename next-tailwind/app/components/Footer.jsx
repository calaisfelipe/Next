'use client'


export default function Footer() {
  function goToScroll(top) {
    window.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="p-4 bg-teal-700 flex justify-evenly text-white ">
      <p className="font-extralight text-sm">
        Acme Rocket: Powered Products
        <br />
        555 Astro way <br />
        Fairfield, new Jersey 12345-5555
        <br /> Email: inquiris@acmeRockets.com <br />
        Phone: (555) 555-555
      </p>

      <ul className="sm:flex flex-col gap-3 hidden">
        <li>
          <button onClick={() => goToScroll(500)}>Our Rockets</button>
        </li>
        <li>
          <button onClick={() => goToScroll(1000)}>Testimonials</button>
        </li>
        <li>
          <button onClick={() => goToScroll(1900)}>ContactUs</button>
        </li>
      </ul>

      <div>
        <p> Copyright ₢ 2022</p>
        <p>All rights Reserved</p>
      </div>
    </footer>
  );
}
