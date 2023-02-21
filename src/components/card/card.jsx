import React from "react";
import { Link } from 'react-router-dom';
import Style from "./card.module.css"
export default function Card({ title, price, image, score, id }) {
    console.log(id)
    return (
        <div key={id} className={Style.card}>
            <img src={image} alt={title} className={Style.image} />
            <h1 className={Style.title}>{title}</h1>
            <p className={Style.price}>${price}</p>
            {/* <img src={score} alt="Rating" className={Style.score} /> */}
            <div className={Style.stars}>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
            <Link to={`/product/${id}`}>Detalle</Link>
        </div>
    )

};