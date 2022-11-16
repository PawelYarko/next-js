import Link from 'next/link';
import s from './Navigation.module.css';

export function Navigation () {
    return (
        <>
        <nav className={s.navigation}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/posts'}>Posts</Link>
            <Link href={'/contacts'}>Contacts</Link>
        </nav>
        </>
    )
}