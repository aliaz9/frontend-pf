import React from 'react'
import Style from '../styles/someCards.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from './Card.jsx'


export default function SomeCards () {
    const { search } = useSelector(state => state.products)
    const { products } = useSelector(state => state.products)
  
    const mapProducts = (products) => {
      return products.slice(0,3).map((product) => (
      <Card
        key={product.id}
        product = {product}
      />
    ))
    }
    return (
        <>
        
          <div className={Style.container}>
          <img
            src={
              'https://res.cloudinary.com/daieynebb/image/upload/v1677494844/Images/wave_1_zmvymm.png'
            }
            alt="img-panelSolar"
            className={Style.imgWave}
          />


            <div className={Style.container1}>     
              
              <h3 className={Style.title}>Algunos De Nuestros Productos</h3>

              <div className={Style.cardContainer}>
                {mapProducts(products)}
              </div>

            </div>

          </div>

        </>
        )
    }