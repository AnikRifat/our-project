import { Protect } from "@clerk/nextjs";
import Image from "next/image";

const page = () => { return (
    
    <Protect
      role="org:member"
      fallback={<p>Only a member of the Billing department can access this content.</p>}
    >
      <section className="text-center">
      <div
        className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-lg xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
      >
        <div className="text-left mt-4 md:mt-0">
          <h2
            className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900"
          >We’re changing the way people connect.</h2>
          <p
            className="mb-6 font-light text-gray-500 md:text-lg"
          >Flowbite helps you connect with friends and communities of people who
            share your interests. Connecting with your friends and family as well as
            discovering new ones is easy with features like Groups.</p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ><path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              /></svg>
          </a>
        </div>
        <Image
      src="/images/Images/about-us.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
        
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-lg xl:gap-16">
      <div
        className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
      >
        <dl
          className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3"
        >
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
            <dd
              className="font-light text-gray-500"
            >developers</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
            <dd
              className="font-light text-gray-500"
            >contributors</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
            <dd
              className="font-light text-gray-500"
            >organizations</dd>
          </div>
        </dl>
      </div>
      <div>
      <Image
      src="/images/Images/about-us-2.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </div>
      </div>
      
    </section>
    </Protect>
    ); }; export default page;