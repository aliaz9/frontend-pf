import { useDispatch, useSelector } from 'react-redux'
import { setPageCurrent } from '../redux/slices/productsSlice.js'
import { getProducts } from '../redux/slices/thunksProducts.js'
import styles from '../styles/Pagination.module.css'

export default function Pagination() {
  const dispatch = useDispatch()
  const { pageCurrent } = useSelector((state) => state.products)
  const { numberOfpages } = useSelector((state) => state.products)
  const nextPage = () => {
    dispatch(setPageCurrent(pageCurrent + 1))
    dispatch(getProducts())
  }
  const previusPage = () => {
    dispatch(setPageCurrent(pageCurrent - 1))
    dispatch(getProducts())
  }
  const pagesNumber = []
  for (let i = 0; i < numberOfpages; i++) {
    pagesNumber.push(i + 1)
  }
  const changePage = (e) => {
    console.log(e.target.value)
    dispatch(setPageCurrent(parseInt(e.target.value)))
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
      {pagesNumber?.map((i, key) => (
        <button
          className={styles.button}
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
