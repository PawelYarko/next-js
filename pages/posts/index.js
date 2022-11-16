import Link from 'next/link';
import {useState, useEffect} from 'react';
import {MainLayout} from '../../components/MainLayout/MainLayout';

export default function Posts({ posts: serverPosts }){
    const [posts, setPosts] = useState(serverPosts);
    useEffect(()=>{
        async function load(){
           const res = await fetch(`${process.env.API_URL}/posts`);
           const data = await res.json();
           setPosts(data)
        }
        if(!serverPosts){
            load();
        }
        
    },[])

    if(!posts){
        return(
          <MainLayout>
              <p>Loading...</p>
          </MainLayout>  
        )
    }

    return(
    <MainLayout>
    <h1>Posts Page</h1>
        <ul>
            {posts.map(post =>(
                <li key={post.id}>
                    <Link href={'/post/[id]'} as={`/post/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </MainLayout>)
}

// Posts.getInitialProps = async ({req}) => {
//     if(!req){
//         return {posts: null};
//     }
//     const res = await fetch(`${process.env.API_URL}/posts`);
//     const posts = await res.json();
//     return {posts};
//  }

export async function getServerSideProps({ req }){
    const res = await fetch(`${process.env.API_URL}/posts`);
    const posts = await res.json();
    return {props:{posts}};
} 