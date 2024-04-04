"use client"
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

const Page = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
      // Replace 'SPACE_ID' and 'ACCESS_TOKEN' with your actual Contentful space ID and access token
      const spaceId = '40tqaf4ju0j1';
      const accessToken = 'e5o2yBL-k4zh1m42osYo91o71Ch-NqCwXiD3Pls9diw';

      // Create Contentful client
      const client = createClient({
        space: spaceId,
        accessToken: accessToken
      });

      // Fetch content from Contentful
      client.getEntries()
        .then(response => {
          setContent(response.items);
        })
        .catch(error => {
          console.error('Error fetching content:', error);
        });
    }, []); // Empty dependency array to fetch data only once when component mounts
    console.log(content);
    return (
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
        {content ? (
             <div
             className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
           >
             {content.map((blog, index) => (
                <BlogCard key={index} blog={blog}/>
             ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
      </div>
    </section>
    );
};

export default Page;