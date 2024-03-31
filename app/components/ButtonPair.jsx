import Link from 'next/link';

const ButtonPair = () => {
    return (
          <>
            <Link href="/apply"
              className="inline-flex items-center text-black bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-lg"
            >
              Apply To Work With Us
              
            </Link>
            
            <Link
              href="/pricing"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center"
            >
              View Pricing
            </Link>

          </>
    );
};

export default ButtonPair;