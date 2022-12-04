import Image from 'next/image';
import s from './Catalog.module.css';

export function Catalog (){
    return(
        <section className={s.container}>
        <h2 className={s.title}>Каталог</h2>
        <div className={s.wrapper}>
            <div className={s.row1}>
                <Image src="/catalog/1.jpg" alt="img" className={s.item} width="494" height="350"/>
                <Image src="/catalog/2.jpg" alt="img" className={s.item} width="701" height="350"/>
            </div>
            <div className={s.row2}>
                <Image src="/catalog/3.jpg" alt="img" className={s.item} width="342" height="350"/>
                <Image src="/catalog/4.jpg" alt="img" className={s.item} width="493" height="350"/>
                <Image src="/catalog/5.jpg" alt="img" className={s.item} width="341" height="350"/>
            </div>
            <div className={s.row3}>
                <Image src="/catalog/6.jpg" alt="img" className={s.item} width="495" height="350"/>
                <Image src="/catalog/7.jpg" alt="img" className={s.item} width="341" height="350"/>
                <Image src="/catalog/8.jpg" alt="img" className={s.item} width="341" height="350"/>
            </div>
            <div className={s.row4}>
                <Image src="/catalog/9.jpg" alt="img" className={s.item} width="340" height="350"/>
                <Image src="/catalog/10.jpg" alt="img" className={s.item} width="340" height="350"/>
                <Image src="/catalog/11.jpg" alt="img" className={s.item} width="495" height="350"/>
            </div>
        </div>
        </section>
    )
}