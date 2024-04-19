import Image from "next/image";

const Resources = () => { return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            If You’re Broke (Or Cheap) Steal Our Resources
          </h2>
          <p className="font-light text-gray-500 sm:text-xl">
            {" "} Dive into Our Treasure Trove of Resources!{" "}
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <a
            href="#"
            className="bg-gray-100 flex p-2 flex-col  items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200"
          >
            <Image
              src="/images/Images/B-2.png"
              className="object-cover w-56 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far
              </p>
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
              src="/images/Images/B-2.png"
              className="object-cover w-56 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far
              </p>
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
    ); }; export default Resources;