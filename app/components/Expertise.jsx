import Image from "next/image";

const Expertise = () => { return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Unlock Your Potential with Our Expertise
          </h2>
          <p className="font-light text-gray-500 sm:text-xl">
            {" "} Achieve more than you ever thought possible{" "}
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <a
            href="#"
            className="bg-gray-100 flex p-2 flex-col  items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200"
          >
            <Image
                src="/images/Images/8.png"
                className="object-cover w-56 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                width={500}
                height={500}
                alt="case-study"
              />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Shopify E-Commerce Store{" "}
              </h5>
              <ul className="mb-2 max-w-md space-y-1 text-gray-500 list-inside">
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                    />
                  </svg>{" "} Craft &amp; optimize your Shopify store for growth.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-gray-500 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                    />
                  </svg>{" "} Drive traffic, conversions, and revenue with
                  data-driven strategies.
                </li>
              </ul>
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2 me-2 mb-2"
              >
                Learn More
              </button>
            </div>
          </a>
          <a
            href="#"
            className="bg-gray-100 flex p-2 flex-col  items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200"
          >
            <Image
                src="/images/Images/9.png"
                className="object-cover w-56 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                width={500}
                height={500}
                alt="case-study"
              />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Klaviyo Email Marketing
              </h5>
              <ul className="max-w-md space-y-1 text-gray-500 list-inside">
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                    />
                  </svg>{" "} Design &amp; automate personalized email automation
                  &amp; campaigns for Klaviyo.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-gray-500 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                    />
                  </svg>{" "} Nurture leads, engage customers, and grow your
                  business.
                </li>
              </ul>
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2 me-2 mb-2"
              >
                Learn More
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
    ); }; export default Expertise;