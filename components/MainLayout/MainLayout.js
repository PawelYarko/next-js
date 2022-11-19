import Head from 'next/head';
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';
import s from '../../common/container.module.scss';


export function MainLayout ({children, title = "Home page"}) {
    return (
        <>
        <Head>
        <title>{title} | Hookah Shop</title>
            <meta name="keywords" content="hookah, e-hookah" />
            <meta name="description" content="hookah descr" />
            <meta charSet="utf-8"/>
        </Head>
        <Navigation/>
        <main className={s.container}>{children}</main>
        <Footer/>
        </>
    )
}