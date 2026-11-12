import Image from "next/image";
import ParallaxBanner from "@/src/components/ParallaxBanner";

export default function Services() {
  return (
    <>
      <ParallaxBanner 
        title="Services"
        imageSrc="/images/candle.webp"
      />

      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto text-[#303030] py-8 px-4 md:py-16 md:px-20">
          <div className="block md:grid md:grid-cols-[1fr_3fr] md:gap-8 border-b border-[lightgray] py-4">
            <div className="flex flex-col items-center">
              <h3 className="font-ubuntu font-bold text-center mt-4 mb-[1em] text-[1.5rem]">
                Acupuncture
              </h3>
              <Image
                className="w-24 h-auto mt-0 md:mt-16"
                src="/images/icon-acupuncture.webp"
                alt="acupuncture icon"
                width={96}
                height={96}
              />
            </div>
            <p className="font-baloo [word-spacing:0.15rem] leading-[1.75rem] my-[1em]">
              Acupuncture is a safe, natural, drug-free and effective form of
              treatment.<br />
              <br />
              Acupuncture helps relieve the symptoms of a variety of health
              problems as well as help uncover the underlying root of various
              medical problems. Acupuncture is the practice of inserting thin
              needles into specific points on the body in order to direct the
              Qi to allow healing to take place. It can be used to reduce
              pain, reduce inflammation, increase blood flow, increase range
              of motion, decrease the side effects of medication-induced
              nausea, decrease anxiety, and reduce muscle spasms. Also,
              auricular therapy treats addiction, obesity and pain using
              sticky seeds on the ear.<br />
              <br />
              Please wear loose and comfortable clothing for easy access to
              acupuncture points and do not eat a large meal before a
              treatment session. An acupuncture session generally lasts 45
              min. to an hour, although your first session can be 1 1/2 to 2
              hours long.
            </p>
          </div>
          <div className="block md:grid md:grid-cols-[1fr_3fr] md:gap-8 border-b border-[lightgray] py-4">
            <div className="flex flex-col items-center">
              <h3 className="font-ubuntu font-bold text-center mt-4 mb-[1em] text-[1.5rem]">
                Cosmetic Acupuncture
              </h3>
              <Image
                className="w-24 h-auto mt-0 md:mt-16"
                src="/images/icon-cosmetic-acupuncture.webp"
                alt="cosmetic acupuncture icon"
                width={96}
                height={96}
              />
            </div>
            <div>
              <p className="font-baloo [word-spacing:0.15rem] leading-[1.75rem] my-[1em]">
                Each facial point is connected to a specific internal organ.
                <br />
                As the Qi moves and circulates, it strengthens the function of
                that particular organ. It will improve blood and energy
                circulation, nourish the skin with vital nutrients and
                increase collagen production to diminish the appearance of
                fine lines, winkles, sagging and dull skin.
                <br />
                It&apos;s a natural and non-invasive procedure.<br />
                It helps you look younger and feel more vibrant inside and
                out.<br />
                No side-effects.<br />
              </p>
              <ul className="list-disc pl-10 font-baloo [word-spacing:0.15rem] leading-[1.75rem] my-[1em]">
                <li>Helps heal sun-damaged skin.</li>
                <li>Minimizes lines and wrinkles.</li>
                <li>Stimulates collagen and elastin production.</li>
                <li>Brightens skin tone.</li>
                <li>Helps diminish blemishes.</li>
              </ul>
            </div>
          </div>
          <div className="block md:grid md:grid-cols-[1fr_3fr] md:gap-8 border-b border-[lightgray] py-4">
            <div className="flex flex-col items-center">
              <h3 className="font-ubuntu font-bold text-center mt-4 mb-[1em] text-[1.5rem]">
                Acupressure
              </h3>
              <Image
                className="w-24 h-auto mt-0 pb-4"
                src="/images/icon-acupressure.webp"
                alt="acupressure icon"
                width={96}
                height={96}
              />
            </div>
            <p className="font-baloo [word-spacing:0.15rem] leading-[1.75rem] my-[1em]">
              The practice of applying pressure on specific points on the body
              using the finger in order to promote healing in the body. It
              uses acupuncture points without the use of needles.
            </p>
          </div>
          <div className="block md:grid md:grid-cols-[1fr_3fr] md:gap-8 border-b border-[lightgray] py-4">
            <div className="flex flex-col items-center">
              <h3 className="font-ubuntu font-bold text-center mt-4 mb-[1em] text-[1.5rem]">
                Gua Sha
              </h3>
              <Image
                className="w-24 h-auto mt-0 pb-4"
                src="/images/icon-gua-sha.webp"
                alt="gua sha icon"
                width={96}
                height={96}
              />
            </div>
            <p className="font-baloo [word-spacing:0.15rem] leading-[1.75rem] my-[1em]">
              The practice of repeated pressured strokes over the skin with a
              smooth edge, such as a water buffalo horn or jade, in order to
              increase blood circulation. It often results in blemishes of the
              skin, which goes away in 2-4 days.
            </p>
          </div>
          <div className="block md:grid md:grid-cols-[1fr_3fr] md:gap-8 border-b border-[lightgray] py-4">
            <div className="flex flex-col items-center">
              <h3 className="font-ubuntu font-bold text-center mt-4 mb-[1em] text-[1.5rem]">
                Herbal Medicine
              </h3>
              <Image
                className="w-24 h-auto mt-0 pb-4"
                src="/images/icon-herbal.webp"
                alt="herbal medicine icon"
                width={96}
                height={96}
              />
            </div>
            <p className="font-baloo [word-spacing:0.15rem] leading-[1.75rem] my-[1em]">
              The use of natural herbs in order to promote the body&apos;s own
              healing process. Each prescription is a combination of many
              herbs and minerals tailored to the patient&apos;s needs and is
              prepared as a tea or decoction. Different herbs have different
              properties and can balance particular parts of the body.
            </p>
          </div>
          <div className="block md:grid md:grid-cols-[1fr_3fr] md:gap-8 border-b border-[lightgray] py-4">
            <div className="flex flex-col items-center">
              <h3 className="font-ubuntu font-bold text-center mt-4 mb-[1em] text-[1.5rem]">
                Cupping
              </h3>
              <Image
                className="w-24 h-auto mt-0 pb-4"
                src="/images/icon-cupping.webp"
                alt="cupping icon"
                width={96}
                height={96}
              />
            </div>
            <p className="font-baloo [word-spacing:0.15rem] leading-[1.75rem] my-[1em]">
              The use of heated suction cups in specific areas of the body to
              promote greater blood circulation. The skin under the cup often
              turns discolored, signifying a blockage of the Qi, correlating
              to the problematic and congested areas. The discoloration goes
              away within a few days. It is often used to treat pain,
              inflammation, improve blood flow, promote relaxation and
              well-being, and as a type of deep-tissue massage.
            </p>
          </div>
          <div className="block md:grid md:grid-cols-[1fr_3fr] md:gap-8 border-b border-[lightgray] py-4">
            <div className="flex flex-col items-center">
              <h3 className="font-ubuntu font-bold text-center mt-4 mb-[1em] text-[1.5rem]">
                Moxibustion
              </h3>
              <Image
                className="w-12 h-auto mt-0 pb-4"
                src="/images/icon-moxibustion.webp"
                alt="moxibustion icon"
                width={48}
                height={48}
              />
            </div>
            <p className="font-baloo [word-spacing:0.15rem] leading-[1.75rem] my-[1em]">
              The practice of applying indirect heat over a single point or
              large surface area on the body through the burning an herb
              called Artimesiae Vulgaris. It expels cold and warms the
              meridians, while promoting blood circulation. Moxibustion is
              used most often to treat patients experiencing cold or stagnant
              conditions.
            </p>
          </div>
          <div className="block md:grid md:grid-cols-[1fr_3fr] md:gap-8 py-4">
            <div className="flex flex-col items-center">
              <h3 className="font-ubuntu font-bold text-center mt-4 mb-[1em] text-[1.5rem]">
                Tui Na (Meridian Massage)
              </h3>
              <Image
                className="w-24 h-auto mt-0 pb-4"
                src="/images/icon-massage.webp"
                alt="tui na/massage icon"
                width={96}
                height={96}
              />
            </div>
            <p className="font-baloo [word-spacing:0.15rem] leading-[1.75rem] my-[1em]">
              A form of therapeutic massage with an emphasis on grasping and
              pulling of the skin to stimulate the flow of blood, lymph,
              bodily fluids, and break up scar tissues and/or adhesions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

