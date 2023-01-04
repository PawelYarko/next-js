import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useGetGalleryQuery from '../../redux/gallery/gallerySelectors';
import { Card } from './Card/Card';
import { Button } from '../../common/Button/Button'
import s from './Promo.module.css';



const sections = [
    {"title": "Хиты продаж", "id": "1"},
    {"title": "Самые популярные", "id": "2"},
    {"title": "Новые поступления", "id": "3"},
    {"title": "Акционные товары", "id": "4"},
];

const cardList = [
    {"id": "1", "productName" : "Foxxx Kitsune Mini Black Vintage RCA", "cost": "6 000 $", "img": "/promoimg.jpg", "imgAlt": "imgName"},
    {"id": "2", "productName" : "Foxxx Kitsune Mini Black Vintage RCA", "cost": "6 000 $", "img": "/promoimg.jpg", "imgAlt": "imgName"},
    {"id": "3", "productName" : "Foxxx Kitsune Mini Black Vintage RCA", "cost": "6 000 $", "img": "/promoimg.jpg", "imgAlt": "imgName"},
    {"id": "4", "productName" : "Foxxx Kitsune Mini Black Vintage RCA", "cost": "6 000 $", "img": "/promoimg.jpg", "imgAlt": "imgName"},
    {"id": "5", "productName" : "Foxxx Kitsune Mini Black Vintage RCA", "cost": "6 000 $", "img": "/promoimg.jpg", "imgAlt": "imgName"},
    {"id": "6", "productName" : "Foxxx Kitsune Mini Black Vintage RCA", "cost": "6 000 $", "img": "/promoimg.jpg", "imgAlt": "imgName"},
]

export function Promo () {
    const [current, setCurrent] = useState(false); 

    const handleCurrentElem = (e) =>{
        const currId = e.currentTarget.id;

        sections.find(({id}) =>{ 
            // console.log(currId === id)
        })
    }

    return (
        <>
            <section className={s.container}>
                <ul className={s.titleContainer}>
                    {sections.map(({title, id}) => 
                        <li>
                            <Link href={'/'} 
                                className={s.title} 
                                onClick={handleCurrentElem} 
                                key={id} 
                                id={id}>
                                    {title}
                            </Link>
                        </li>
                    )}  
                </ul> 
                    <ul className={s.wrapper}>
                        {cardList.map(({id, productName, cost, img, imgAlt})=>(
                            <li key={id}>
                                <Card id={id} productName={productName} cost={cost} img={img} imgAlt={imgAlt}/> 
                            </li>
                        ))} 
                    </ul>  
                    <Button/>   
            </section>
        </>
    )
}