import { SignUp } from '@clerk/nextjs';

const page = () => {
    return (
        <div className='flex justify-center items-center my-8'>
            <SignUp/>
        </div>
        
    );
};

export default page;