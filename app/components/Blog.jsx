import Image from "next/image";

const Blog = () => { return (
    <section className="antialiased">
      <div className="max-w-screen-lg px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl"
          >
            In the Know: Explore Our Blog
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl">
          Insights, Inspiration, and Expertise for the Curious Mind
          </p>
        </div>
        <div
          className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-700 ease-in-out"
          >
            <a href="#">
              <Image
                src="/images/Blog/blog-1.png"
                className="rounded-t-lg"
                width={500}
                height={500}
                alt="blog"
              />
            </a>
            <div className="p-5 text-left">
              <a href="#">
                <h5
                  className="mb-2 text-lg font-medium tracking-tight text-gray-900 hover:underline"
                >
                  How to make a Shopify store that can generate 6 figures.
                </h5>
              </a>
            </div>
          </div>
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-700 ease-in-out"
          >
            <a href="#">
              <Image
                src="/images/Blog/blog-2.png"
                className="rounded-t-lg"
                width={500}
                height={500}
                alt="blog"
              />
            </a>
            <div className="p-5 text-left">
              <a href="#">
                <h5
                  className="mb-2 text-lg font-medium tracking-tight text-gray-900 hover:underline"
                >
                  5 Ways to Turn Window Shoppers into Loyal Fans
                </h5>
              </a>
            </div>
          </div>
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-700 ease-in-out"
          >
            <a href="#">
              <Image
                src="/images/Blog/blog-3.png"
                className="rounded-t-lg"
                width={500}
                height={500}
                alt="blog"
              />
            </a>
            <div className="p-5 text-left">
              <a href="#">
                <h5
                  className="mb-2 text-lg font-medium tracking-tight text-gray-900 hover:underline"
                >
                  Starting a clothing brand step-by-step training
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    ); }; export default Blog;