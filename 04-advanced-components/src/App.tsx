import { useEffect, useState } from 'react';
import { type ReactNode } from 'react';
import { get } from './util/http';
import BlogPosts, { BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';
import { z } from 'zod';

const rawDataBlogPostSchema = z.object({
    id: z.number(),
    userId: z.number(),
    title: z.string(),
    body: z.string(),
});
const expectedResponseDataSchema = z.array(rawDataBlogPostSchema);

function App() {
    const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await get('https://jsonplaceholder.typicode.com/posts', z.array(rawDataBlogPostSchema));
                const parsedData = expectedResponseDataSchema.parse(data);
                const blogPosts: BlogPost[] = parsedData.map((rawPost) => ({
                    id: rawPost.id,
                    title: rawPost.title,
                    text: rawPost.body,
                }));
                setFetchedPosts(blogPosts);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                }
            }
        }

        fetchPosts();
    }, []);

    let content: ReactNode;

    if (fetchedPosts) {
        content = (<BlogPosts posts={fetchedPosts} />);
    }

    return (
        <main>
            <img src={fetchingImg} alt="An abstract image depicting a data fetching process." />
            {content}
        </main>
    );
}

export default App;
