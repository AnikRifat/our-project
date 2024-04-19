import Image from "next/image";
import ButtonPair from "./ButtonPair";

const OverviewItems = () => { return (
    <section>
      <div
        className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
      >
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            {" "} All-in-One Ecommerce Growth That Drives Sales{" "}
          </h2>
          <p className="mb-4 text-gray-500 sm:text-xl">
            {" "} Turn website visitors into loyal customers with our proven
            process.
          </p>
          <div className="mb-8 lg:mb-16">
            <ButtonPair/>
          </div>
        </div>
        <div
          className="mx-auto max-w-screen-md grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-700 ease-in-out"
          >
            <div className="flex justify-center">
              <Image
                src="/images/svg icons/tnw.png"
                className="h-12 w-auto"
                width={500}
                height={500}
                alt="case-study"
              />
            </div>
            <h5
              className="mb-0.5 text-xl font-semibold tracking-tight text-gray-800"
            >
              Top Notch Website
            </h5>
            <p className="mb-3 font-normal text-teal-600">
              With high converting theme.
            </p>
          </div>
          <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-700 ease-in-out"
          >
            <div className="flex justify-center">
              <Image
                src="/images/svg icons/features.png"
                className="h-12 w-auto"
                width={500}
                height={500}
                alt="case-study"
              />
            </div>
            <h5
              className="mb-0.5 text-xl font-semibold tracking-tight text-gray-800"
            >
              Powerfull Apps
            </h5>
            <p className="mb-3 font-normal text-teal-600">Boost sales.</p>
          </div>
          <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-700 ease-in-out"
          >
            <div className="flex justify-center">
              <Image
                src="/images/svg icons/sales funnel.png"
                className="h-12 w-auto"
                width={500}
                height={500}
                alt="case-study"
              />
            </div>
            <h5
              className="mb-0.5 text-xl font-semibold tracking-tight text-gray-800"
            >
              Sales Funnels{" "}
            </h5>
            <p className="mb-3 font-normal text-teal-600">
              Boost profits with proven funnels.
            </p>
          </div>
          <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-700 ease-in-out"
          >
            <div className="flex justify-center">
              <Image
                src="/images/svg icons/Email template.png"
                className="h-12 w-auto"
                width={500}
                height={500}
                alt="case-study"
              />
            </div>
            <h5
              className="mb-0.5 text-xl font-semibold tracking-tight text-gray-800"
            >
              Email Template{" "}
            </h5>
            <p className="mb-3 font-normal text-teal-600">
              Elevate Your Outreach.
            </p>
          </div>
          <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-700 ease-in-out"
          >
            <div className="flex justify-center">
              <Image
                src="/images/svg icons/automation.png"
                className="h-12 w-auto"
                width={500}
                height={500}
                alt="case-study"
              />
            </div>
            <h5
              className="mb-0.5 text-xl font-semibold tracking-tight text-gray-800"
            >
              Automation{" "}
            </h5>
            <p className="mb-3 font-normal text-teal-600">
              Save time &amp; money with automation.
            </p>
          </div>
          <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-700 ease-in-out"
          >
            <div className="flex justify-center">
              <Image
                src="/images/svg icons/campaign.png"
                className="h-12 w-auto"
                width={500}
                height={500}
                alt="case-study"
              />
            </div>
            <h5
              className="mb-0.5 text-xl font-semibold tracking-tight text-gray-800"
            >
              Drip Campaigns{" "}
            </h5>
            <p className="mb-3 font-normal text-teal-600">
              Turn traffic into sales.
            </p>
          </div>
        </div>
      </div>
    </section>
    ); }; export default OverviewItems;