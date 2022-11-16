import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {MainLayout} from '../../components/MainLayout/MainLayout/MainLayout';

export default function Post( {post: serverPost} ){
    const [post, setPost] = useState(serverPost);
    const router = useRouter();

    useEffect(() =>{
        async function load(){
            const res = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
            const data = await res.json();
            setPost(data);
        }
        if(!serverPost){
            load();
        }
        
    },[])

    if(!post){
        return (<MainLayout>
            <p>Loading...</p>
        </MainLayout>)
    }

    return (
        <MainLayout>
            <h1>Post {post.title}</h1>
            <p>{post.desc}</p>
            <Link href="/posts">Go back</Link>
        </MainLayout>
    )
}

// Post.getInitialProps = async ({ query, req }) => {
//     if(!req){
//         return {post: null};
//     }
//     const res = await fetch(`${process.env.API_URL}/posts/${query.id}`);
//     const post = await res.json();
//     return {post};
//  }

export async function getServerSideProps({ query, req }){
    if(!req){
        return {post: null};
    }
    const res = await fetch(`${process.env.API_URL}/posts/${query.id}`);
    const post = await res.json();
    return {props:{post}};
} 