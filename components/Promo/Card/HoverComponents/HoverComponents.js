import { useState } from 'react';
import Image from 'next/image';
import s from './HoverComponents.module.css';


export function HoverComponents () {
    const [hover, setHover] = useState(false);
    return (
        <div className={s.container}
            onMouseEnter={()=>{
                setHover(true);
            }}
            onMouseLeave={()=>{
                setHover(false);
            }}
        >
            {hover ? 
                <Image src='/cardSvg/btnCardHover.svg' alt="img" className={s.btnCard} width="259" height="50"/>
                :
                <Image src='/cardSvg/btnCard.svg' alt="img" className={s.btnCard} width="259" height="50"/>
                }
        </div>
    )
}