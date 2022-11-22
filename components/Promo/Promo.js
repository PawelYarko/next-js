import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from './Card/Card';
import { Button } from '../../common/Button/Button'
import s from './Promo.module.css';

const sections = [
    {"title": "Хиты продаж", "id": "1"},
    {"title": "Самые популярные", "id": "2"},
    {"title": "Новые поступления", "id": "3"},
    {"title": "Акционные товары", "id": "4"},
];

export function Promo () {
    const [current, setCurrent] = useState(false); 

    // const handleCurrentElem = (e) =>{
    //     const currId = e.currentTarget.id;

    //     sections.find(({id}) =>{ 
    //         currId === id ? setCurrent(true) : setCurrent(false);
    //     })
    // }

    return (
        <>
            <section className={s.container}>
                <ul className={s.titleContainer}>
                    {sections.map(({title, id}) => 
                        <li>
                            <Link href={'/'} 
                                className={s.title} 
                                // onClick={handleCurrentElem} 
                                key={id} 
                                id={id}>
                                    {title}
                            </Link>
                        {/* {current && <Image src="/line.svg" alt="img" className={s.line} width="272" height="2"/>} */}
                        </li>
                    )}  
                </ul> 
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