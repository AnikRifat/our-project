import FAQ from '../components/FAQ';
import PriceList from '../components/PriceList';
import Testimonial from '../components/Testimonial';
import TrustedPartners from '../components/TrustedPartners';

const page = () => {
    return (
        <div>
            <PriceList/>
            <TrustedPartners/>
            <Testimonial />
            <FAQ/>
        </div>
    );
};

export default page;