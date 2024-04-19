import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import FreeTrialTC from "../components/FreeTrialTC";

const page = async () => {
    const user = await currentUser();
    return (
        <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center">
    <div
      className="inline-flex justify-between items-center text-black border border-yellow-300 hover:border-yellow-400 rounded-2xl font-medium text-xs px-2 sm:px-5 py-1 text-center me-2 mb-2"
      role="alert"
    >
      <span className="text-sm font-medium">
        Congratulations! {user.firstName} 🎉
      </span>
    </div>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
      Start Your Ecommerce Journey Today! - Free Trial
      </h2>
      <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
        Try Email Marketing for 14 days & Premium Shopify Theme In Just 2 Step.
      </p>
      <div className="flex flex-col mb-4 lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="https://api.whatsapp.com/send/?phone=8801951815814&text&type=phone_number&app_absent=0"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black from-yellow-400 to-yellow-300 bg-gradient-to-r hover:bg-gradient-to-l focus:ring-4 focus:ring-yellow-200 rounded-lg hover:scale-105 transition duration-700 ease-in-out" rel="noreferrer"
          >
        <svg className="mr-2 -ml-1 w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
        </svg>        
           
            
            1. Book Your Strategy Session
          </Link>
          <Link
            href="/consultation"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg border border-black  hover:text-white hover:border-gradient-to-r from-gray-900 to-gray-700 hover:bg-gradient-to-r focus:ring-4 focus:ring-gray-200 hover:scale-105 transition duration-700 ease-in-out" rel="noreferrer"
          >
             <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
            2. Start Your Onboarding Process
          </Link>
        </div>
    </div>
    <div
          className="py-2 px-6 mx-auto max-w-screen-md text-center lg:py-4 lg:px-12"
        >
          <Image
              src="/images/Images/success of ftrial.png"
              className="h-auto max-w-xl mx-auto rounded-xl hover:scale-105 transition duration-700 ease-in-out"
              width={500}
              height={500}
              alt="Picture of the author"
            />
        </div>
    <div className="flex justify-center">
    <FreeTrialTC/>
    </div>
  </div>
</section>

    );
};

export default page;