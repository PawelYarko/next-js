import ButtonShow from '../../public/icons/buttonShow.svg';
import Image from 'next/image';
import s from './Button.module.css';


export function Button () {
    return (
        <button className={s.button}>
            <Image src={ButtonShow} alt="img" className={s.img}/>
            <p className={s.text}>Показать ещё</p>
        </button>
    )
}