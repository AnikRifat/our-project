import Image from "next/image";
import ButtonPair from "./ButtonPair";

const Testimonial = () => { return (
    <section>
      <div
        className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
      >
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            {" "} See How We Helped Businesses Like Yours
          </h2>
          <p className="mb-4 text-gray-500 sm:text-xl">
            {" "} Customer reviews act as a digital word-of-mouth.{" "}
          </p>
          <div className="mb-8 lg:mb-16">
          <ButtonPair/>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <figure
            className="flex flex-col justify-center items-start px-6 py-2 text-left bg-white border border-white hover:border-yellow-300 rounded-lg md:px-8"
          >
            <blockquote className="mx-auto mb-2 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
              Highly recommend!
              </h3>
              <p className="my-2">
              Shopify store wasn&apos;t growing. Enter Scalify Commerce! They rebuilt my Facebook Ads and Klaviyo, leading to a surge in traffic, sales, and revenue within months. Their knowledgeable and supportive team truly gets e-commerce. Highly recommend!
              </p>
            </blockquote>
            <figcaption className="flex justify-start items-center space-x-3">
            <Image
      src="/Images/clients/Travis m.jpg"
      width={36}
      height={36}
      className="w-9 h-9 rounded-full"
      alt="Travis M"
    />
              <div className="space-y-0.5 font-medium">
                <div>Travis M</div>
                <div className="text-sm font-light text-gray-500">
                  {" "} Founder of a clothing brand.
                </div>
              </div>
            </figcaption>
          </figure>
          <figure
            className="flex flex-col justify-center items-start p-8 text-left bg-white border border-white hover:border-yellow-300 rounded-lg md:p-12"
          >
            <blockquote className="mx-auto mb-2 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
              Secret Weapon.
              </h3>
              <p className="my-2">
              Great product? Not enough. Scalify Commerce became my secret weapon. Their full-funnel approach (Facebook Ads, Shopify, Klaviyo) skyrocketed sales. Targeted ads, personalized journeys. Look no further!
              </p>
            </blockquote>
            <figcaption className="flex justify-start items-center space-x-3">
            <Image
      src="/Images/clients/jamil w.jpg"
      width={36}
      height={36}
      className="w-9 h-9 rounded-full"
      alt="Travis M"
    />
              <div className="space-y-0.5 font-medium">
                <div>Josiah Tersieff</div>
                <div className="text-sm font-light text-gray-500">
                  Jewellery Brand Owner
                </div>
              </div>
            </figcaption>
          </figure>
          <figure
            className="flex flex-col justify-center items-start p-8 text-left bg-white border border-white hover:border-yellow-300 rounded-lg md:p-12"
          >
            <blockquote className="mx-auto mb-2 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
              Scalify Commerce 👌
              </h3>
              <p className="my-2">
              Drowning in marketing tactics, I went nowhere. Scalify Commerce was my lifeline.  Their data-driven approach transformed Facebook Ads and Klaviyo, boosting sales, and engagement, and giving me marketing control.
              </p>
            </blockquote>
            <figcaption className="flex justify-start items-center space-x-3">
            <Image
      src="/Images/clients/Jake Prusher.jpg"
      width={36}
      height={36}
      className="w-9 h-9 rounded-full"
      alt="Travis M"
    />
              <div className="space-y-0.5 font-medium text-left">
                <div>Jake Prusher</div>
                <div className="text-sm font-light text-gray-500">
                Apparel Manufacturer
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="text-center mt-6">
          <a
            href="#"
            className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Show more...
          </a>
        </div>
      </div>
    </section>
    ); }; export default Testimonial;