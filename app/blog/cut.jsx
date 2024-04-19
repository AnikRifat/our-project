import { createClient } from 'contentful';
export async function getStaticProps(){
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    });

    const res = await client.getEntries({content_type:'blog'});
    return{
        props:{
            blogs:res.items
        }
    }

}
const page = ({blogs}) => {
    console.log(blogs);
    return (
        <div>
            <h1>Blog Details</h1>
        </div>
    );
};

export default page;