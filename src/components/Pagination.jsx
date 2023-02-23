import { useDispatch, useSelector } from 'react-redux'
import { setPageCurrent } from '../redux/slices/productsSlice.js'
import { getProducts } from '../redux/slices/thunksProducts.js'
export default function Pagination () {
  const { pageCurrent } = useSelector((state) => state.products)
  // const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()
  const { numberOfpages } = useSelector((state) => state.products)
  const nextPage = () => {
    dispatch(setPageCurrent(pageCurrent + 1))
    dispatch(getProducts())
  }
  const previusPage = () => {
    dispatch(setPageCurrent(pageCurrent - 1))
    dispatch(getProducts())
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => previusPage()}
        disabled={pageCurrent === 1}
      >
        {' '}
        Prev
      </button>
      <button
        type="button"
        onClick={() => nextPage()}
        disabled={pageCurrent === numberOfpages}
      >
        Next
      </button>
    </div>
  )
}
