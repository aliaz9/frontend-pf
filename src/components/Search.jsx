import { useState } from 'react'
import {
  cleanSearch,
  setBrand,
  setOrder,
  setType
} from '../redux/slices/productsSlice.js'
import { getByNames, getProducts } from '../redux/slices/thunksProducts.js'
import Style from './../styles/Search.module.css'

import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'

export default function Search() {
  const dispatch = useDispatch()
  const { types } = useSelector((state) => state.products)
  const [search, setSearch] = useState('')
  // search
  const onChange = (e) => {
    setSearch(e.target.value)
    if (e.target.value === '') {
      dispatch(cleanSearch())
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getByNames(search))
  }

  // filter by types
  function handleTypeChange(type) {
    if (!type) {
      dispatch(setType({ value: '', label: '' }))
      dispatch(getProducts())
      return
    }
    dispatch(setType(type))
    dispatch(getProducts())
  }

  function handleOrder(e) {
    dispatch(setOrder(e.target.value))
    dispatch(getProducts())
  }
  return (
    <>
      <div className={Style.container}>
        <input
          type="search"
          value={search}
          onChange={onChange}
          placeholder="Buscar.."
        />
        <i
          onClick={(e) => handleSubmit(e)}
          className="fa-solid fa-magnifying-glass"
        />

        <div className={Style.filters}>
          <Select options={types} onChange={handleTypeChange} isClearable />
          <select onChange={handleOrder}>
            <option label="Seleccione un orden" value={''} />
            <option label="asc" value={'asc'} />
            <option label="desc" value={'desc'} />
          </select>
        </div>
      </div>
    </>
  )
}
