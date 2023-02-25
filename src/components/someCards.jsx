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
            <div className={Style.cardContainer}>
            {mapProducts(products)}
            </div>
        </>
        )
    }