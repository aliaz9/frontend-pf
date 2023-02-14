import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../actions";
import Card from "../card/card";
import '../cards/cards.css';

export default function Cards() {

    let products = useSelector((state) => state.products);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div>
            <h1>Our Products</h1>

            <div className='container'>
                {products.map(p => 
                    <Card key={p.id} title={p.title} image={p.image} price={p.price} score={p.score} />
                )}
            </div>
        
        </div>
    )

} 