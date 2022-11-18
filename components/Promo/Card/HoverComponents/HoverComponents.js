import svg1 from '../../public/cardSvg/1.svg';
import svg2 from '../../public/cardSvg/2.svg';
import svg3 from '../../public/cardSvg/3.svg';
import Image from 'next/image';
import s from './HoverComponents.module.css';


export function HoverComponents () {
    return (
        <div className={s.container}>
            <Image src={svg1} alt="img" className={s.img1}/>
            <Image src={svg2} alt="img" className={s.img2}/>
            <Image src={svg3} alt="img" className={s.img3}/>
        </div>
    )
}