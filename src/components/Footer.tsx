import { FaYelp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#303030] text-white text-center w-full py-20 px-4 md:px-0">
      <nav>
        <ul className="list-none pl-0 m-0 mx-auto uppercase w-full block leading-[3rem] md:flex md:justify-between md:w-[25rem] md:leading-normal">
          <li>
            <Link
              href="/services"
              className="text-white no-underline font-baloo transition duration-300 hover:text-[#e08942]"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/testimonials"
              className="text-white no-underline font-baloo transition duration-300 hover:text-[#e08942]"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white no-underline font-baloo transition duration-300 hover:text-[#e08942]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white no-underline font-baloo transition duration-300 hover:text-[#e08942]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <h2 className="font-berkshire font-normal tracking-[0.1rem] text-[2rem] mt-12 mb-4 text-white">
        Sun Wellness Acupuncture
      </h2>
      <h3 className="font-ubuntu font-normal text-[1rem] my-[1em] text-white">
        Chinese Acupuncture &amp; Herbal Clinic
      </h3>
      <address className="font-baloo font-normal italic leading-[1.5rem] pt-8 text-white">
        <a
          className="text-white no-underline transition duration-300 hover:text-[#e08942]"
          href="tel:+13239331212"
        >
          (323) 933-1212
        </a>
        <br />
        <a
          className="text-white no-underline transition duration-300 hover:text-[#e08942]"
          href="https://www.google.com/maps/place/3053+W+Olympic+Blvd,+Los+Angeles,+CA+90006/@34.0529052,-118.3042934,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2b87fd043ec0b:0x960a5de1071b4f5!8m2!3d34.0529052!4d-118.3017185!16s%2Fg%2F11b8v613f3?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          3053 W. Olympic Blvd. Suite 309
          <br />
          Los Angeles, CA 90006
        </a>
      </address>
      <a
        href="https://www.yelp.com/biz/sun-wellness-acupuncture-los-angeles"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Yelp"
        className="inline-block p-2 mt-4 text-[red]"
      >
        <FaYelp />
      </a>
    </footer>
  );
}