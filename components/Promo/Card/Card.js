import { useState } from 'react';
import Image from 'next/image';
import promoimg from '../../../public/promoimg.jpg';
import s from './Card.module.css';


export function Card () {
    const [hit, setHit] = useState();
    return (
        <div className={s.card}>
            <div className={s.thumb}>
                <Image src={promoimg} alt="img"/>
            </div>
            <div className={s.desc}>
                <p className={s.title}>Foxxx Kitsune Mini Black Vintage RCA</p>
                <p className={s.cost}>6 000 $</p>
            </div>
        </div>
    )
}