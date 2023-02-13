import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../actions";
import Card from "../card/card";
import '../cards/cards.css';

export default function Cards() {

    let products = useSelector((state) => state.products);

    let dispatch = useDispatch();

    let example = [{
        id: 1,
        title: "Panel Solar Fotovoltaico Policristalino Jinko Solar Eagle 72 celdas 335Wp",
        price: "$2000",
        score: "https://static.vecteezy.com/system/resources/previews/004/208/177/non_2x/stars-rating-review-set-of-black-stars-free-vector.jpg",
        image: "https://pansogal.com/wp-content/uploads/2019/07/funciona-panel-solar-con-nubes-1000x900.jpg",
    },
    {
        id: 2,
        title: "Panel Dos Fotovoltaico Policristalino Jinko Solar Eagle 72 celdas 335Wp",
        price: "$2000",
        score: "https://static.vecteezy.com/system/resources/previews/004/208/177/non_2x/stars-rating-review-set-of-black-stars-free-vector.jpg",
        image: "https://pansogal.com/wp-content/uploads/2019/07/funciona-panel-solar-con-nubes-1000x900.jpg",
    },
    {
        id: 3,
        title: "Panel Tres Fotovoltaico Policristalino Jinko Solar Eagle 72 celdas 335Wp",
        price: "$2000",
        score: "https://static.vecteezy.com/system/resources/previews/004/208/177/non_2x/stars-rating-review-set-of-black-stars-free-vector.jpg",
        image: "https://pansogal.com/wp-content/uploads/2019/07/funciona-panel-solar-con-nubes-1000x900.jpg",
    }]

    console.log(products);
    console.log(example);

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div>
            <h1>Todas las cards</h1>

            {/* <div className='container'>
                {products.map(p => 
                    <Card key={p.id} title={p.title} image={p.image} price={p.price} score={p.score} />
                )}
            </div> */}
        
        </div>
    )

} 