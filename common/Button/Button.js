import { useState } from 'react';
import ButtonShow from '../../public/icons/buttonShow.svg';
import ButtonHover from '../../public/icons/buttonHover.svg';
import Image from 'next/image';
import s from './Button.module.css';


export function Button () {
    const [hover, setHover] = useState(false);
    return (
        <button className={s.button}
        onMouseEnter={()=>{
            setHover(true);
          }}
          onMouseLeave={()=>{
            setHover(false);
          }}>
            {hover ? 
                <Image src={ButtonShow} alt="img" className={s.img}/>
                :
                <Image src={ButtonHover} alt="img" className={s.img}/>
                }
                <p className={s.text}>Показать ещё</p>
        </button>
    )
}