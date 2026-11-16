import { FaYelp } from "react-icons/fa";
import Link from "next/link";
import { CLINIC_INFO, GOOGLE_MAPS_URL, YELP_URL } from "@/src/lib/seo";

export default function Footer() {
  return (
    <footer className="bg-[#303030] text-white text-center w-full py-20 px-4 md:px-0">
      <nav aria-label="Footer Navigation">
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
      <h2 className="font-normal tracking-[0.1rem] text-[2rem] mt-12 text-white">
        <Link
          href="/"
          className="font-berkshire text-white no-underline transition duration-300 hover:text-[#e08942]"
        >
          Sun Wellness Acupuncture
        </Link>
      </h2>
      <p className="font-ubuntu font-normal text-[1rem] mb-[1em] text-white">
        Chinese Acupuncture &amp; Herbal Clinic
      </p>
      <address className="font-baloo font-normal italic leading-[1.6rem] pt-8 text-white">
        <a
          className="text-white no-underline transition duration-300 hover:text-[#e08942]"
          href={CLINIC_INFO.phoneHref}
        >
          {CLINIC_INFO.phoneDisplay}
        </a>
        <br />
        <a
          className="text-white no-underline transition duration-300 hover:text-[#e08942]"
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          3053 W. Olympic Blvd. Suite 309
          <br />
          Los Angeles, CA 90006
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <p className="not-italic text-white/80 text-sm mt-2">
          {CLINIC_INFO.hoursDisplay}
        </p>
      </address>
      <a
        href={YELP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sun Wellness Acupuncture on Yelp (opens in a new tab)"
        className="inline-flex items-center justify-center min-w-11 min-h-11 mt-4 rounded-full text-white hover:text-[#e08942] transition-colors"
      >
        <FaYelp aria-hidden="true" className="w-5 h-5" />
      </a>
    </footer>
  );
}
