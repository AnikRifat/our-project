import Image from 'next/image';
import Link from 'next/link';




const BlogCard = ({blog}) => {
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
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 transition duration-700 ease-in-out"
          >
            <Link href={'/blog/'+ blog.fields.slug}>
              <Image
                src={'https:'+ blog.fields.banner.fields.file.url}
                className="rounded-t-lg"
                width={500}
                height={500}
                alt="blog"
              />
            </Link>
            <div className="p-5 text-left">
              <div className='flex justify-between mb-4'>
              <p>{formattedDate}</p>
              <p>{blog.fields.readingTime} min</p>
              </div>
              <p>{blog.fields.category}</p>
              <Link href={'/blog/'+ blog.fields.slug}>
                <h5
                  className="mb-2 text-lg font-medium tracking-tight text-gray-900 hover:underline"
                >
                  {blog.fields.blogTitle}
                </h5>
              </Link>
            </div>
          </div>
    );
};

export default BlogCard;