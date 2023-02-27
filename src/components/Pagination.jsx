import { useDispatch, useSelector } from 'react-redux'
import { setPageCurrent } from '../redux/slices/productsSlice.js'
import { getProducts } from '../redux/slices/thunksProducts.js'
export default function Pagination() {
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
  const pageNumber = []
  for (let i = 0; i < numberOfpages; i++) {
    pageNumber.push(i + 1)
  }
  const changePage = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    dispatch(setPageCurrent(e.target.value))
    dispatch(getProducts())
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => previusPage()}
        disabled={pageCurrent === 1}
        // className={styles.Pagination}
      >
        {' '}
        ←
      </button>
      {pageNumber &&
        pageNumber.map((i, key) => (
          <button
            // className={styles.button}
            key={key}
            value={i}
            onClick={changePage}
          >
            {i}
          </button>
        ))}
      <button
        type="button"
        onClick={() => nextPage()}
        disabled={pageCurrent === numberOfpages}
        // className={styles.Pagination}
      >
        →
      </button>
    </div>
  )
}
