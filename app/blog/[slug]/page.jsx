"use client";
import BlogCard from "@/app/components/BlogCard";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import Image from "next/image";
import { useEffect, useState } from "react";

// Contentful Client
const spaceId = "40tqaf4ju0j1";
const accessToken = "e5o2yBL-k4zh1m42osYo91o71Ch-NqCwXiD3Pls9diw";
const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

const Page = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const { items } = await client.getEntries({
          content_type: "blog",
          "fields.slug": params?.slug,
        });

        if (items && items.length > 0) {
          setBlog(items[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (params?.slug) {
      fetchBlogData();
    }
  }, [params?.slug]);
  useEffect(() => {
    if (!blog) return; // Ensure blog data is available before fetching

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
        content_type: 'blog', // Specify the content type
        'fields.category': blog.fields.category // Specify the category
    })
        .then(response => {
            // Remove the existing blog from the category items
            const filteredItems = response.items.filter(item => item.sys.id !== blog.sys.id);

            // Limit the number of category items to a maximum of 4
            const limitedItems = filteredItems.slice(0, 4);

            // Set the category items without the existing blog and limited to 4 items
            setCategoryItems(limitedItems);
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}, [blog]);

 // Depend on the blog data so that useEffect is re-executed when blog changes


  // Conditional rendering based on whether blog data is available
  if (!blog) {
    return null; // Render nothing until blog data is fetched
  }

    // Assuming the timestamp is in ISO 8601 format
const timestamp = blog.sys.createdAt;

// Create a Date object from the timestamp
const date = new Date(timestamp);

// Get the current date
const currentDate = new Date();

// Calculate the difference in milliseconds
const difference = currentDate.getTime() - date.getTime();

// Convert the difference to seconds
const secondsAgo = Math.floor(difference / 1000);

// Define time intervals in seconds
const minute = 60;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;

// Format the date based on the time elapsed
let formattedDate;

if (secondsAgo < minute) {
    formattedDate = `${secondsAgo} Second${secondsAgo === 1 ? '' : 's'} Ago`;
} else if (secondsAgo < hour) {
    const minutesAgo = Math.floor(secondsAgo / minute);
    formattedDate = `${minutesAgo} Minute${minutesAgo === 1 ? '' : 's'} Ago`;
} else if (secondsAgo < day) {
    const hoursAgo = Math.floor(secondsAgo / hour);
    formattedDate = `${hoursAgo} Hour${hoursAgo === 1 ? '' : 's'} Ago`;
} else if (secondsAgo < week) {
    const daysAgo = Math.floor(secondsAgo / day);
    formattedDate = `${daysAgo} Day${daysAgo === 1 ? '' : 's'} Ago`;
} else {
    const formattedDay = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[monthIndex];
    formattedDate = `${formattedDay} ${monthName} ${year}`;
}

// Output the formatted date
console.log(formattedDate);

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
      <div className="md:flex md:justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl overflow-y-auto format format-sm sm:format-base lg:format-lg format-blue">
          <header className="mb-4 lg:mb-6 not-format">
            <div className="inline-flex items-center mr-3 text-sm text-gray-900">
              <Image
                src={"https:" + blog.fields.authorImage.fields.file.url}
                className="mr-4 w-16 h-16 rounded-full"
                width={500}
                height={500}
                alt="blog"
              />
              <div>
                <div
                  className="text-xl font-bold text-gray-900"
                >
                  {blog.fields.authorName}
                </div>
                <div className="text-base text-gray-500">
                  {blog.fields.authorDesignation}
                </div>
                <div className="text-base text-gray-500">
                  <time
                    pubdate=""
                    dateTime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    {formattedDate}
                  </time>
                </div>
              </div>
            </div>

            <h1 className="my-4 text-3xl font-extrabold leading-tight text-gray-900 lg:my-6 lg:text-4xl">
              {blog.fields.blogTitle}
            </h1>
          </header>
          <Image
            src={"https:" + blog.fields.banner.fields.file.url}
            width={800}
            height={500}
            alt="blog"
          />
          <div className="my-8 text-justify rich-text">
            <style>{`
        /* Headings */
        .rich-text h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .rich-text h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.75rem;
        }
        
        .rich-text h3 {
          font-size: 1.75rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .rich-text h4 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .rich-text h5 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .rich-text h6 {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        /* Normal Text */
        .rich-text p {
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        
        /* Bold Text */
        .rich-text strong {
          font-weight: bold;
        }
        
        /* Italic Text */
        .rich-text em {
          font-style: italic;
        }
        
        /* Underlined Text */
        .rich-text u {
          text-decoration: underline;
        }
        
        /* Hyperlink */
        .rich-text a {
          color: blue;
          text-decoration: underline;
        }
        
        .rich-text a:hover {
          color: darkblue;
        }
        /* Unordered List */
        .rich-text ul {
        list-style-type: disc; /* Bullet style */
        margin-bottom: 1rem;
        margin-left: 1.5rem; /* Indentation */
      }

/* Ordered List */
.rich-text ol {
  list-style-type: decimal; /* Numbered style */
  margin-bottom: 1rem;
  margin-left: 1.5rem; /* Indentation */
}

/* List Items */
.rich-text li {
  margin-bottom: 0.5rem;
}

/* Nested Lists */
.rich-text ul ul,
.rich-text ol ol {
  margin-top: 0.5rem; /* Adjust spacing for nested lists */
}
/* Table */
.rich-text table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

/* Table Header */
.rich-text th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: left;
  padding: 0.5rem;
  border: 1px solid #dddddd;
}

/* Table Data */
.rich-text td {
  padding: 0.5rem;
  border: 1px solid #dddddd;
}

/* Alternating Row Background Color */
.rich-text tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Hover Effect */
.rich-text tr:hover {
  background-color: #f5f5f5;
}

        
            `}</style>
            {documentToReactComponents(blog.fields.description)}
          </div>
        </article>
        <aside
          aria-label="Related articles"
          className="py-8 lg:py-24"
        >
          <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Related articles
            </h2>
            {categoryItems.length === 0 ? (
    <p>No related blog found</p>
) : categoryItems.length > 0 ? (
    <div className="grid gap-12 grid-cols-1">
        {categoryItems.map((blog, index) => (
            <BlogCard key={index} blog={blog}/>
        ))}
    </div>
) : (
    <p>Loading...</p>
)}

          </div>
        </aside>
      </div>
    </main>
  );
};

// Export the page component as the default export
export default Page;
