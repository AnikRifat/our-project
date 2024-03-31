import Testimonial from '../components/Testimonial';
import YouCanBookMeWidget from '../components/YouCanBookMeWidget';

const page = () => {
    return (
        <div>
            <div className="mx-auto max-w-screen-sm text-center mt-8">
            <p className="text-xl text-yellow-400 font-bold mb-4 animate-bounce">
            Book A Call
          </p>
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900">
          Find a Time That Works For You
          </h2>
          </div>
            <YouCanBookMeWidget/>
            <Testimonial />
        </div>
    );
};

export default page;