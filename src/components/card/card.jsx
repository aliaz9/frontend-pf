import React from "react";
import '../card/card.css';

export default function Card( { title, price, image, score, id } ) {

    return (
        <div key={id} className="card">
            <img src={image} className="card-image"/>
            <h1 className="card-title">{title}</h1>
            <p className="card-price">{price}</p>
            <img src={score} className="card-score"/>
        </div>
    )

};