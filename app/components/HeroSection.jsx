import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
const HeroSection = async () =>
{ const user = await currentUser(); console.log(user); return (
<section className="bg-center bg-no-repeat bg-[url('https://i.postimg.cc/Y2T2yzBj/Untitled-design-56.png')]  bg-blend-multiply">
  <div
    className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
  >
    <Link
      href="/update"
      className="inline-flex justify-between items-center text-black border border-yellow-300 hover:border-yellow-400 rounded-2xl font-medium text-xs px-2 sm:px-5 py-1 text-center me-2 mb-2"
      role="alert"
    >
      <span
        className="text-black border border-yellow-400 rounded-xl focus:ring-4 focus:outline-none focus:ring-yellow-600 font-medium text-sm px-2 sm:px-5 py-0.5 text-center mr-3"
      >
        New
      </span>
      <span className="text-sm font-medium">
        ScalifyCommerce is out ! See what&apos;s new
      </span>
      <svg
        className="ml-2 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
    <h1
      className="mb-4 mt-8 text-4xl font-extrabold tracking-tight leading-none text-black cursor-default md:text-5xl lg:text-6xl"
    >
      Dominate the Market. 10X Your Revenue with ScalifyCommerce !
    </h1>
    <div className="space-y-4 my-10">
      <Link
        href="/free-trial"
        className="inline-flex items-center text-black bg-gradient-to-br from-yellow-300 to-yellow-400 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-400/40 font-semibold text-md px-16 py-3 rounded-lg hover:scale-105 transition duration-700 ease-in-out"
      >
        Start Dominating Now - Free
        <svg
          className="animate-pulse w-4 h-4 ml-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        ><path
            d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
          /></svg>

      </Link>

      <div className="py-2 gap-2 flex justify-center">
        <div>
          <span
            className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-yellow-800 bg-yellow-100 rounded-full"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              animate-ping=""
            >
              <path
                fill="currentColor"
                d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
              />
              <path
                fill="#fff"
                d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </span>
          <span className="text-xs">14 days free email marketing</span>
        </div>
        <div>
          <span
            className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-yellow-800 bg-yellow-100 rounded-full"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
              />
              <path
                fill="#fff"
                d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </span>
          <span className="text-xs">Get premium shopify theme</span>
        </div>
      </div>
    </div>
  </div>
</section>
); }; export default HeroSection;