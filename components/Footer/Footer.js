import Link from 'next/link';
import Image from 'next/image';
import s from './Footer.module.css';

export function Footer () {
    const socialLinks = [
        {"title": "Telegram", "svgPath": "/social/telegram.svg", },
        {"title": "Viber", "svgPath": "/social/viber.svg", },
        {"title": "Phone", "svgPath": "/social/phone.svg", },
    ];

    return (
        <footer className={s.footer}>
        <nav className={s.navigation}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/posts'}>Posts</Link>
            <Link href={'/contacts'}>Contacts</Link>
        </nav>
        <div className={s.conatiner}>
            <div className={s.contacts}>
                {socialLinks.map(({title, svgPath}) => 
                    <Image src={svgPath} alt={title}  width="40" height="40" className={s.social}/>
                )}
                <div className={s.call}>
                    <Image src="/social/call.svg" alt="call"  width="28" height="28" className={s.callIcon}/>
                    <p className={s.phoneNumber}>8 800 600-61-91</p>
                </div>
            </div>
            <div className={s.time}>Время работы: с 9:00 до 20:00</div>
            <div className={s.time}>
                <Image src="/social/email.svg" alt="email"  width="28" height="28" className={s.emailIcon}/>
                <p className={s.email}>Hookah@gmail.com</p>
            </div>
        </div>
        </footer>
    )
}