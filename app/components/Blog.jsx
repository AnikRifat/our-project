"use client"
import { createClient } from 'contentful';
<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> origin/main
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';


const Blog = () => { 
  const [latestItems, setLatestItems] = useState([]);

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
        client.getEntries({
            order: '-sys.createdAt', // Sort by creation date in descending order
            limit: 3 // Limit to only 3 items
        })
            .then(response => {
                // Set the latest items
                setLatestItems(response.items);
            })
            .catch(error => {
                console.error('Error fetching content:', error);
            });
    }, []); // Empty dependency array to fetch data only once when component mounts

  return (
    <section className="antialiased">
    <div className="max-w-screen-lg px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
            <h2
                className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl"
            >
                Latest Blog Posts
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl">
                Insights, Inspiration, and Expertise for the Curious Mind
            </p>
        </div>
        {latestItems.length > 0 ? (
            <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {latestItems.map((blog, index) => (
                    <BlogCard key={index} blog={blog}/>
                ))}
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
<<<<<<< HEAD
=======
    <div className="text-center mt-2">
          <Link
            href="/blog"
            className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Show more...
          </Link>
        </div>
>>>>>>> origin/main
</section>
    ); }; export default Blog;