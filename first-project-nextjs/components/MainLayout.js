import Link from 'next/link';
import Head from 'next/head';
import s from './MainLayout.module.css';

export function MainLayout ({children, title = "Home page"}) {
    return (
        <>
        <Head>
        <title>{title} | Hookah Shop</title>
            <meta name="keywords" content="hookah, e-hookah" />
            <meta name="description" content="hookah descr" />
            <meta charSet="utf-8"/>
        </Head>
        <nav className={s.navigation}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/posts'}>Posts</Link>
            <Link href={'/contacts'}>Contacts</Link>
        </nav>
        <main>{children}</main>
        </>
    )
}