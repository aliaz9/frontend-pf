import React from "react";
import { Link } from 'react-router-dom';
import '../card/card.css';

export default function Card({ title, price, image, score, id }) {
    console.log(id)
    return (
        <div key={id} className="card">
            <img src={image} alt={title} className="card-image" />
            <h1 className="card-title">{title}</h1>
            <p className="card-price">{price}</p>
            <img src={score} alt="Rating" className="card-score" />
            <Link to={`/product/${id}`}>Detalle</Link>
        </div>
    )

};