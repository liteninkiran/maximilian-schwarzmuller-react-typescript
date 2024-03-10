import { useEffect, useState } from 'react';
import { type ReactNode } from 'react';
import { get } from './util/http';
import BlogPosts, { BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

type RawDataBlogPosts = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

function App() {
    const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);

            try {
                const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPosts[];
                const blogPosts: BlogPost[] = data.map(post => ({
                    id: post.id,
                    title: post.title,
                    text: post.body,
                }));
                setFetchedPosts(blogPosts);
            } catch (error) {
                if (error instanceof Error) {
                    setError((error).message);
                }
            }
            setIsFetching(false);
        }
        fetchPosts();
    }, []);

    let content: ReactNode;

    if (error) {
        content = (<ErrorMessage text={error} />);
    }

    if (fetchedPosts) {
        content = (<BlogPosts posts={fetchedPosts} />);
    }

    if (isFetching) {
        content = (<p id='loading-fallback'>Fetching Posts...</p>);
    }

    return (
        <main>
            <img src={fetchingImg} alt="An abstract image depicting a data fetching process." />
            {content}
        </main>
    );
}

export default App;
