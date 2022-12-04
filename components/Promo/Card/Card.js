import { useState } from 'react';
import Image from 'next/image';
import { HoverComponents } from './HoverComponents/HoverComponents';
import s from './Card.module.css';


export function Card ({id, productName, cost, img, imgAlt}) {
    const [hover, setHover] = useState(false);
    const [like, setLike] = useState(false);


    console.log(id, productName, cost, img, imgAlt)
    const onLikeClick = () =>{
        setLike(!like)
    }
    
    return (
    <div className={s.container}>
        {hover ?
            <div className={s.card , s.hoverCard}
            onMouseEnter={()=>{
                setHover(true);
            }}
            onMouseLeave={()=>{
                setHover(false);
            }}
            >
                <div className={s.thumb}>
                    <Image src="/cardSvg/new.svg" alt="img" className={s.new} width="150" height="29"/>
                    <Image src={img} alt={imgAlt} width="289" height="228"/>
                    <Image src={like ? '/cardSvg/likeHover.svg' : '/cardSvg/like.svg'} alt="img" className={s.like} width="28" height="28" onClick={onLikeClick}/>
                </div>
                <div className={s.desc}>
                    <p className={s.title}>{productName}</p>
                    <p className={s.cost}>{cost}</p>
                </div>
                <HoverComponents/>
            </div> 
         :
         <div className={s.card}
            onMouseEnter={()=>{
                setHover(true);
            }}
            onMouseLeave={()=>{
                setHover(false);
            }}
        >
            <div className={s.thumb}>
                <Image src="/cardSvg/new.svg" alt="img" className={s.new} width="150" height="29"/>
                <Image src={img} alt={imgAlt} width="289" height="228"/>
                <Image src={like ? '/cardSvg/likeHover.svg' : '/cardSvg/like.svg'} alt="img" className={s.like} width="28" height="28" onClick={onLikeClick}/>
            </div>
            <div className={s.desc}>
                <p className={s.title}>{productName}</p>
                <p className={s.cost}>{cost}</p>
            </div>
        </div>}
    </div>
    )
}