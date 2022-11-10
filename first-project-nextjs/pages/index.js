import Head from 'next/head';
import Link from 'next/link';
import {MainLayout} from '../components/MainLayout';

export default function Home() {
  return (
    <>
    <MainLayout>
      <Head>
        <title>Hookah Shop</title>
        <meta name="keywords" content="hookah, e-hookah" />
        <meta name="description" content="hookah descr" />
        <meta charSet="utf-8"/>
      </Head>
      <h1>Main page</h1>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/posts">About</Link></p>
    </MainLayout>
    </>
  )
}
