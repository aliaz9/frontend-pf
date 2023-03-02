import { useState } from 'react'
import styles from './../styles/Search.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setOrder, setType } from '../redux/slices/productsSlice.js'
import { getProducts } from '../redux/slices/thunksProducts.js'
import Select from 'react-select'

export default function BarStuff() {
  const dispatch = useDispatch()
  const { types } = useSelector((state) => state.products)
  const [search, setSearch] = useState('')
  function handleTypeChange(type) {
    if (!type) {
      dispatch(setType({ value: '', label: '' }))
      dispatch(getProducts())
      return
    }
    dispatch(setType(type))
    dispatch(getProducts())
  }

  const onChange = (e) => {
    setSearch(e.target.value)
    if (e.target.value === '') {
      // dispatch(cleanSearch())
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(getByName(search))
  }

  function handleOrder(order) {
    if (!order) {
      dispatch(setOrder({ value: '', label: '' }))
      dispatch(getProducts())
      return
    }
    dispatch(setOrder(order))
    dispatch(getProducts())
  }

  const optionsOrder = [
    { value: 'asc', label: 'asc' },
    { value: 'desc', label: 'desc' }
  ]
  return (
    <>
      <div className={styles.container}>
        <input
          type="search"
          value={search}
          onChange={onChange}
          placeholder="Buscar.."
          className={styles.button}
        />
        <i
          onClick={(e) => handleSubmit(e)}
          className="fa-solid fa-magnifying-glass"
        />
        <div className={styles.filters}>
          <Select options={types} onChange={handleTypeChange} isClearable />
          <Select options={optionsOrder} onChange={handleOrder} isClearable />
        </div>
      </div>
    </>
  )
}
