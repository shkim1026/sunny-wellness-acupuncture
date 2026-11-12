import Image from "next/image";
import ParallaxBanner from "@/src/components/ParallaxBanner";

export default function About() {
  return (
    <main>
      <ParallaxBanner 
        title="About"
        imageSrc="/images/chinese-text.webp"
      />

      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto text-[#303030] py-8 px-4 md:py-16 md:px-20">
          <div className="flex flex-col-reverse items-center text-center gap-0 md:gap-8 min-[913px]:grid min-[913px]:grid-cols-[1fr_2fr] min-[913px]:items-start min-[913px]:text-left">
            <Image
              src="/images/drkim.webp"
              alt="Photo of Dr. Kim"
              width={500}
              height={500}
              className="w-full my-8 md:my-0 min-[913px]:w-full h-auto rounded-[0.5rem]"
              unoptimized
            />
            <div>
              <h3 className="font-ubuntu font-bold text-[1.17rem] text-center mt-8 mb-[1em] min-[913px]:text-left min-[913px]:mt-0 [word-spacing:0.2rem]">
                Dr. Sunny Sun-Eui Kim
              </h3>
              <p className="font-baloo [word-spacing:0.15rem] leading-[1.75rem] text-justify min-[913px]:text-left my-[1em]">
                Sunny Sun Eui Kim, Ph.D./L. Ac., is an expert in Traditional
                Oriental Medicine. With over 20 years of experience, Dr. Kim
                has effectively treated patients with women&apos;s health issues
                such as infertility, miscarriages, menstrual disorders &amp;
                cramps, cystic ovaries, uterine fibroids, PMS and menopause
                symptoms, as well as, weight Loss.
                <br />
                <br />
                Dr. Kim is also a specialist in treating headache, shoulder
                pain, carpal tunnel syndrome, low back pain, knee pain and
                neck pain. She can help you restore, revitalize and maintain a
                healthy balance in your body in addition to improving your
                quality of life.
                <br />
                <br />
                Dr. Kim graduated with honors from Emperor&apos;s College of
                Traditional Oriental Medicine in Santa Monica, California and
                has been practicing Oriental Medicine in the Los Angeles area
                since 1998.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto text-[#303030] py-8 px-4 md:py-16 md:px-20 text-center font-baloo [word-spacing:0.2rem] border-t border-[lightgray]">
        <h3 className="font-ubuntu font-bold text-center text-[1.75rem] min-[913px]:text-[1.5rem] my-[1em]">
          We accept Cash, Checks, and Visa/Master Cards for patient fees and
          insurance co-pays.
        </h3>
        <h3 className="font-ubuntu font-bold text-center text-[1.75rem] min-[913px]:text-[1.5rem] my-[1em]">
          PPO Health Insurance Accepted.
        </h3>
        <p className="text-[1.05rem] md:text-[1rem] my-[1em]">
          Please contact us if you are not sure of your coverage. We will be
          happy to verify your benefits for you.
        </p>
        <p className="text-[1.05rem] md:text-[1rem] my-[1em]">
          Please provide your{" "}
          <strong>
            Insurance ID number, Insured Person&apos;s Name, Insured
            Person&apos;s Date of Birth
          </strong>{" "}
          and a copy of your{" "}
          <strong>Health Insurance card (both front and back side).</strong>
        </p>
        <a href="contact.html">
          <button className="py-4 px-8 rounded-[2rem] bg-[#303030] border-2 border-[#303030] text-white mt-8 mb-8 md:mb-0 cursor-pointer transition duration-300 tracking-[0.1rem] [word-spacing:0.2rem] uppercase hover:bg-[#e08942]">
            Contact Us
          </button>
        </a>
      </section>
    </main>
  );
}
