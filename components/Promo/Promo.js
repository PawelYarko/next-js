import { useState } from 'react';
import Link from 'next/link';
import { Card } from './Card/Card';
import { Button } from '../../common/Button/Button'
import s from './Promo.module.css';


export function Promo () {
    const [hit, setHit] = useState();
    return (
        <>
            <section className={s.container}>
                <div className={s.titleContainer}>   
                    <Link href={'/'} className={s.title}>Хиты продаж</Link>
                    <Link href={'/'} className={s.title}>Самые популярные</Link>
                    <Link href={'/'} className={s.title}>Новые поступления</Link>
                    <Link href={'/'} className={s.title}>Акционные товары</Link>
                </div>
                <div className={s.wrapper}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>  
                </div>
                    <Button/>
            </section>
        </>
    )
}