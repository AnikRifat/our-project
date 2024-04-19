'use client'
import { Tabs } from "flowbite-react";
import Link from "next/link";


const MilestonePay = () => {
    return (
        <div className="overflow-x-auto bg-white rounded-lg border border-gray-100 shadow p-4 xl:p-8">
      <Tabs aria-label="Full width tabs" style="fullWidth">
        <Tabs.Item active  title="Genesis">
        <div
        className="flex flex-col  mx-auto max-w-lg text-left text-gray-900"
      >
        <h3 className="mb-4 text-2xl font-semibold">Genesis</h3>
        <p className="font-light text-gray-500 sm:text-lg">Project Setup</p>
        <div className="flex justify-start items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">$600</span>
          {/* <span className="text-gray-500">/month</span> */}
        </div>
        {/* List */}
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Schedule a project kickoff call with the client to <span className="underline">discuss goals, timelines and deliverables.</span></span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span> Create the Shopify store and configure theme, plugins, customize store.</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span> Conduct keyword research and competitive analysis to identify target keywords.</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Develop on-page SEO strategy including title tags, meta descriptions and product details.</span>
          </li>
        </ul>
        <Link
        href="/pay-now"
        className="inline-flex justify-center items-center text-black bg-gradient-to-br from-yellow-300 to-yellow-400 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-400/40 font-semibold text-md px-16 py-3 rounded-lg hover:scale-105 transition duration-700 ease-in-out"
      >
        Pay Now
      </Link>
        </div>
        </Tabs.Item>
        <Tabs.Item title="Ascend">
        <div
        className="flex flex-col  mx-auto max-w-lg text-left text-gray-900"
      >
        <h3 className="mb-4 text-2xl font-semibold">Ascend</h3>
        <p className="font-light text-gray-500 sm:text-lg">Content Marketing</p>
        <div className="flex justify-start items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">$600</span>
          {/* <span className="text-gray-500">/month</span> */}
        </div>
        {/* List */}
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Write optimized product descriptions, category pages and blog content.(10)</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span> Curate high quality images for all products and blogs. (10)</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span> Schedule social media posts on Facebook, Instagram and Pinterest.(10)</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Submit sitemaps to Google Search Console and monitor indexing status.</span>
          </li>
        </ul>
        <Link
        href="/pay-now"
        className="inline-flex justify-center items-center text-black bg-gradient-to-br from-yellow-300 to-yellow-400 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-400/40 font-semibold text-md px-16 py-3 rounded-lg hover:scale-105 transition duration-700 ease-in-out"
      >
        Pay Now
      </Link>
        </div>
        </Tabs.Item>
        <Tabs.Item title="Illuminate">
        <div
        className="flex flex-col  mx-auto max-w-lg text-left text-gray-900"
      >
        <h3 className="mb-4 text-2xl font-semibold">Illuminate</h3>
        <p className="font-light text-gray-500 sm:text-lg">Paid Advertising</p>
        <div className="flex justify-start items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">$500</span>
          {/* <span className="text-gray-500">/month</span> */}
        </div>
        {/* List */}
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Configure pixel and track conversion events.</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span> Set up and optimize Facebook and Instagram ad campaigns. (10)</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span> Monitor ad performance using conversion tracking and adjust budgets accordingly. </span>
          </li>
        </ul>
        <Link
        href="/pay-now"
        className="inline-flex justify-center items-center text-black bg-gradient-to-br from-yellow-300 to-yellow-400 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-400/40 font-semibold text-md px-16 py-3 rounded-lg hover:scale-105 transition duration-700 ease-in-out"
      >
        Pay Now
      </Link>
        </div>
        </Tabs.Item>
        <Tabs.Item title="Enthrall">
        <div
        className="flex flex-col  mx-auto max-w-lg text-left text-gray-900"
      >
        <h3 className="mb-4 text-2xl font-semibold">Enthrall</h3>
        <p className="font-light text-gray-500 sm:text-lg">Email Marketing</p>
        <div className="flex justify-start items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">$900</span>
          {/* <span className="text-gray-500">/month</span> */}
        </div>
        {/* List */}
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Onboard subscribers to Klaviyo using signup and abandonment forms. </span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span> Create automated email journeys for new subscribers and past customers.</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span> Send promotional emails with featured products and timely offers. (10)</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Track email metrics like open rates, click through rates and unsubscribes.</span>
          </li>
        </ul>
        <Link
        href="/pay-now"
        className="inline-flex justify-center items-center text-black bg-gradient-to-br from-yellow-300 to-yellow-400 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-400/40 font-semibold text-md px-16 py-3 rounded-lg hover:scale-105 transition duration-700 ease-in-out"
      >
        Pay Now
      </Link>
        </div>
        </Tabs.Item>
        <Tabs.Item title="Insight">
        <div
        className="flex flex-col  mx-auto max-w-lg text-left text-gray-900"
      >
        <h3 className="mb-4 text-2xl font-semibold">Insight</h3>
        <p className="font-light text-gray-500 sm:text-lg">Reporting</p>
        <div className="flex justify-start items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">$500</span>
          {/* <span className="text-gray-500">/month</span> */}
        </div>
        {/* List */}
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Pull reports on key metrics like traffic, orders, revenue and ROI on a monthly basis.</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span> Conduct monthly business reviews with clients to discuss progress, goals and next steps.</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Ensure timely resolution of client issues or requests for changes.</span>
          </li>
        </ul>
        <Link
        href="/pay-now"
        className="inline-flex justify-center items-center text-black bg-gradient-to-br from-yellow-300 to-yellow-400 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-400/40 font-semibold text-md px-16 py-3 rounded-lg hover:scale-105 transition duration-700 ease-in-out"
      >
        Pay Now
      </Link>
        </div>
        </Tabs.Item>
      </Tabs>
    </div>
    );
};

export default MilestonePay;