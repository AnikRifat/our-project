import Image from "next/image";
import ButtonPair from "./ButtonPair";

const Graph = () => { return (
    <section className="text-center">
      <div
        className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
      >
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            {" "} Your Sales Wizardry at Work!
          </h2>
          <p className="mb-4 text-gray-500 sm:text-xl">
            {" "} Witness Your Selling Magic Unfold!{" "}
          </p>
          <div className="mb-8 lg:mb-16">
           <ButtonPair/>
          </div>
        </div>
        <div
          className="py-2 px-6 mx-auto max-w-screen-md text-center lg:py-4 lg:px-12"
        >
          <Image
                src="/images/Images/sales-graph.png"
                className="w-4/5 mx-auto h-auto rounded-xl hover:scale-105 transition duration-700 ease-in-out"
                width={500}
                height={500}
                alt="case-study"
              />
        </div>
      </div>
    </section>
    ); }; export default Graph;