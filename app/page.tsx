import Image from "next/image";
import ParallaxHero from "@/src/components/HeroBanner";
import TestimonialSlider from "@/src/components/TestimonialSlider";

export default function Home() {
  return (
    <main>
      <ParallaxHero />

      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto text-[#303030] py-8 md:py-16">
          <h3 className="font-ubuntu font-bold text-center text-[2rem] md:text-[3rem] min-[913px]:text-[4rem] my-[1em]">
            Why Acupuncture?
          </h3>
          <h4 className="font-ubuntu font-bold text-center text-[1rem] md:text-[1.75rem] min-[913px]:text-[2rem] my-[1.33em]">
            Natural, Safe, Effective, Drug-Free
          </h4>
          <p className="font-baloo text-[1.25rem] leading-[1.5rem] text-justify md:text-left my-[1em]">
            Acupuncture is a form of treatment therapy that activates the
            body&apos;s own healing ability to rebalance &amp; restore itself
            naturally. Dr. Kim has over 20 years of experience and uses a
            time-honored, safe, medically substantiated method to help
            patients beccome pain-free, achieve healthy weight, heal and
            rejuvenate their system. Acupuncture has been known to
            successfully treat many acute &amp; chronic illnesses that Western
            medicine has trouble treating effectively.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto text-[#303030] pb-8 pt-0 md:pb-16 min-[913px]:pt-16 block min-[913px]:grid min-[913px]:grid-cols-[1fr_2fr] min-[913px]:gap-8">
          <div className="text-center flex flex-col-reverse items-center min-[913px]:block">
            <h3 className="font-ubuntu font-bold text-center mt-4 mb-0 text-[1rem] md:text-[1.75rem] min-[913px]:text-[2rem] min-[913px]:mb-20">
              Acupuncture can help with:
            </h3>
            <Image
              src="/images/healing.webp"
              alt="Healing icon"
              width={500}
              height={500}
              className="w-1/4 min-[913px]:w-1/2 h-auto mx-auto"
            />
          </div>
          <ul className="list-disc font-baloo text-left leading-[2rem] text-[1.25rem] pl-6 [word-spacing:0.2rem] my-[1em] [&_li]:pb-6 [&_li:last-child]:pb-0">
            <li>
              <strong>Pain Management:</strong> Headaches, Back pain, Neck
              Pain, Shoulder Pain, Knee Pain, Neuralgia, Injury, Fibromyalgia,
              Sciatica
            </li>
            <li>
              <strong>Women&apos;s Health:</strong> Infertility, PMS, Cramps,
              Menopause, Morning Sickness, Menstrual Irregularities, Heavy
              Bleeding, Pregnancy/IVF Support
            </li>
            <li>
              <strong>Digestion:</strong> IBS, IBD, Ulcerative Colitis,
              Crohn&apos;s Disease, Constipation, Diarrhea, Ulcers, GERD
            </li>
            <li>
              <strong>Hormones:</strong> Thyroid disorders, Weight changes,
              Lupus, Lyme Disease
            </li>
            <li>
              <strong>Respiratory:</strong> Allergies, Colds, Flu, Asthma
            </li>
            <li>
              <strong>Circulatory:</strong> Hypertension, Hypotension
            </li>
            <li>
              <strong>Addiction:</strong> Cigarette smoking, Alcoholism, Drug
              abuse
            </li>
            <li>
              <strong>Mental Health:</strong> Depression, Anxiety, Stress
              managment
            </li>
            <li>
              <strong>Chemotherapy Side Effects:</strong> Nausea, Vomiting
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto text-[#303030] text-center border-y border-[lightgray] max-w-full py-8 md:pt-0 md:pb-16">
          <h3 className="font-ubuntu font-bold text-center text-[2rem] md:text-[3rem] my-[1em]">
            Services
          </h3>
          <div className="block md:grid md:grid-cols-3 md:gap-3 min-[913px]:gap-0 max-w-[1920px] mx-auto">
            <div className="md:ml-auto">
              <div className="relative w-[90vw] h-[90vw] md:w-[20vw] md:h-[20vw] min-[913px]:w-[23vw] min-[913px]:h-[23vw] overflow-hidden mx-auto rounded-[1rem]">
                <Image
                  src="/images/acupuncturist.webp"
                  alt="Picture of acupuncturist treating patient"
                  fill
                  unoptimized
                  className="object-cover object-left"
                />
              </div>
              <div className="w-[90vw] pb-4 md:w-[20vw] md:pb-0 min-[913px]:w-[20vw] mx-auto">
                <h5 className="font-ubuntu font-bold text-[1.5rem] m-8 text-center">
                  Acupuncture
                </h5>
                <p className="font-baloo [word-spacing:0.2rem] leading-[1.5rem] text-[1.25rem] text-center min-[913px]:text-justify my-[1em]">
                  Acupuncture is a medical practice that entails stimulating
                  certain points on the body, most often with a needle
                  penetrating the skin, to alleviate pain or to help treat
                  various health conditions.
                </p>
              </div>
            </div>

            <div>
              <div className="relative w-[90vw] h-[90vw] md:w-[20vw] md:h-[20vw] min-[913px]:w-[23vw] min-[913px]:h-[23vw] overflow-hidden mx-auto rounded-[1rem]">
                <Image
                  src="/images/cupping.webp"
                  alt="Picture of patient receiving cupping treatment"
                  fill
                  unoptimized
                  className="object-cover object-left"
                />
              </div>
              <div className="w-[90vw] pb-4 md:w-[20vw] md:pb-0 min-[913px]:w-[23vw] mx-auto">
                <h5 className="font-ubuntu font-bold text-[1.5rem] m-8 text-center">
                  Cupping
                </h5>
                <p className="font-baloo [word-spacing:0.2rem] leading-[1.5rem] text-[1.25rem] text-center min-[913px]:text-justify my-[1em]">
                  Cupping therapy is a form of body work in which a therapist
                  puts special cups on your skin for a few minutes to create
                  suction. People use it to help with inflammation, blood
                  flow, relaxation and well-being, and as a type of
                  deep-tissue massage.
                </p>
              </div>
            </div>

            <div className="md:mr-auto">
              <div className="relative w-[90vw] h-[90vw] md:w-[20vw] md:h-[20vw] min-[913px]:w-[23vw] min-[913px]:h-[23vw] overflow-hidden mx-auto rounded-[1rem]">
                <Image
                  src="/images/chinese-herbal-medicine.webp"
                  alt="Picture of traditional chinese herbal medicine ingredients"
                  fill
                  unoptimized
                  className="object-cover object-left"
                />
              </div>
              <div className="w-[90vw] pb-4 md:w-[20vw] md:pb-0 min-[913px]:w-[23vw] mx-auto">
                <h5 className="font-ubuntu font-bold text-[1.5rem] m-8 text-center">
                  Chinese Herbal Medicine
                </h5>
                <p className="font-baloo [word-spacing:0.2rem] leading-[1.5rem] text-[1.25rem] text-center min-[913px]:text-justify my-[1em]">
                  Chinese herbal medicines are mainly plant based, but some
                  preparations include minerals or animal products. Different
                  herbs have different properties and can balance particular
                  parts of the body.
                </p>
              </div>
            </div>
          </div>

          <a href="services.html">
            <button className="bg-[#e08942] rounded-[2rem] py-4 px-8 border-2 border-[#e08942] text-white uppercase font-baloo [word-spacing:0.2rem] mt-4 mb-8 md:mt-12 md:mb-0 cursor-pointer transition duration-300 hover:bg-white hover:text-[#e08942]">
              View All Services
            </button>
          </a>
        </div>
      </section>

      <TestimonialSlider />

      <section className="w-full border-y border-[lightgray]">
        <div className="mx-auto text-[#303030] text-center max-w-[1200px] py-8 md:pt-0 md:pb-16">
          <h3 className="font-ubuntu font-bold text-[2rem] md:text-[3rem] my-[1em]">
            PPO Health Insurance Accepted
          </h3>
          <p className="text-[1.25rem]">
            Please contact us if you are not sure of your coverage. We will be
            happy to verify your benefits for you.
          </p>
          <p className="text-[1.25rem]">
            Please provide your <strong>Insurance ID number, Insured Person&apos;s Name, Insured Person&apos;s Date of Birth</strong> and a copy of your <strong>Health Insurance card (both front and back side).</strong>
          </p>
          <a href="contact.html">
            <button className="bg-[#e08942] rounded-[2rem] py-4 px-8 border-2 border-[#e08942] text-white uppercase font-baloo [word-spacing:0.2rem] mt-4 mb-8 md:mt-12 md:mb-0 cursor-pointer transition duration-300 hover:bg-white hover:text-[#e08942]">
              Contact Us
            </button>
          </a>
        </div>
      </section>

    </main>
  );
}
