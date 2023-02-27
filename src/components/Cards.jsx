import Card from './Card.jsx'
import '../styles/Cards.css'
import { useSelector } from 'react-redux'

export default function Cards() {
  const { search } = useSelector((state) => state.products)
  const { products } = useSelector((state) => state.products)

  const mapProducts = (products) => {
    return products.map((product) => (
      <Card key={product.id} product={product} />
    ))
  }

  if (search.length) {
    return <>{mapProducts(search)}</>
  }

  return (
    <>
      <div className="container">{mapProducts(products)}</div>
    </>
  )
}
