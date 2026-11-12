import ParallaxBanner from "@/src/components/ParallaxBanner";

export default function Contact() {
  return (
    <>
      <ParallaxBanner
        title="Contact Us"
        imageSrc="/images/medicine-label.webp"
      />

      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto text-[#303030] py-8 px-4 md:py-16 md:px-20">
          <div className="block pt-0 my-8 text-center min-[913px]:grid min-[913px]:grid-cols-[1fr_2fr] min-[913px]:gap-8 min-[913px]:my-0 min-[913px]:text-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.649052993397!2d-118.30392378396171!3d34.05287242514279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b88d28a220f9%3A0x7daa8d2f7b528932!2zU3VuIFdlbGxuZXNzIEFjdXB1bmN0dXJlICjshKAg7ZWc67CpLu2BtOumrOuLiSk!5e0!3m2!1sen!2sus!4v1651624877883!5m2!1sen!2sus"
              width={450}
              height={450}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[40vh] md:w-[450px] md:h-[450px] mx-auto min-[913px]:mx-0 border-0"
            />
            <div className="flex flex-col justify-between text-left w-full md:w-3/4 mx-auto min-[913px]:w-full min-[913px]:mx-0">
              <h3 className="font-ubuntu font-bold text-left text-[1.5rem] mt-8 mb-4 min-[913px]:m-0">
                We are located in Koreatown in the heart of Los Angeles.
              </h3>
              <div>
                <h4 className="font-ubuntu font-bold text-left text-[1rem] mt-[1.33em] mb-0">
                  Address
                </h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://goo.gl/maps/pLzWe9BEjFib3RLM6"
                  className="font-baloo text-[1.25rem] text-[#303030] border-b border-[#303030] leading-[2.3rem] no-underline text-left"
                >
                  3053 W. Olympic Blvd. Suite 309
                  <br />
                  Los Angeles, CA 90006
                </a>
              </div>
              <div>
                <h4 className="font-ubuntu font-bold text-left text-[1rem] mt-[1.33em] mb-0">
                  E-Mail
                </h4>
                <a
                  href="mailto:sun.acubeauty@gmail.com"
                  className="font-baloo text-[1.25rem] text-[#303030] border-b border-[#303030] leading-[2.3rem] no-underline text-left"
                >
                  sun.acubeauty@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-ubuntu font-bold text-left text-[1rem] mt-[1.33em] mb-0">
                  Phone
                </h4>
                <a
                  href="tel:+13239331212"
                  className="font-baloo text-[1.25rem] text-[#303030] border-b border-[#303030] leading-[2.3rem] no-underline text-left"
                >
                  (323) 933-1212
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
