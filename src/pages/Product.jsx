/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Score from '../components/Score.jsx'
import Style from './../styles/ProductDetail.module.css'
import { getProductsDetails } from '../redux/slices/thunksProducts.js'
import { addCart, addCartBack } from '../redux/slices/thunksUsers.js'
import 'react-toastify/dist/ReactToastify.css'

export default function ProductPage() {
  const productInfo = useSelector((state) => state.products.product)
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.users.auth)
  const params = useParams()

  function handleAddCart() {
    const productToAdd = {
      id: productInfo.id,
      title: productInfo.title,
      image: productInfo.image,
      description: productInfo.description,
      unit_price: productInfo.unit_price,
      quantity: 1,
      type: productInfo.typeName,
      brand: productInfo.brandName
    }
    dispatch(addCart(productToAdd))
    if (auth.name) {
      dispatch(addCartBack(productInfo.id))
    }
  }
  const { id } = params
  useEffect(() => {
    dispatch(getProductsDetails(id))
  }, [dispatch, id])

  return (

    <div className={Style.containerAll} key={productInfo.id}>

        <div className={Style.container} key={productInfo.id}>



        <div className={Style.containerImg}>
          <img src={productInfo.image} alt={productInfo.title} className={Style.Img} />
        </div>


        <div className={Style.productContent}>
          <h1 className={Style.title}>{productInfo.title}</h1>

          <p className={Style.precioexc}>Precio Exclusivo Online</p>
          <p className={Style.price}>{productInfo.price}</p>

          <button className={Style.hola} onClick={() => handleAddCart()}>
            Agregar Al Carrito
          </button>

          <p className={Style.description}>{productInfo.description}</p>
          <p className={Style.sinestilo}>{productInfo.type}</p>
          <p className={Style.sinestilo}>{productInfo.brand}</p>


        </div>

        

      </div>

      <div>
        <Score
            count={5}
            disabledStart={0}
            disabledOpinion={0}
            disabledNumber={0}
          />
        </div>

    </div>

  )
}
