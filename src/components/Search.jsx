import { useState } from 'react'
import {
  cleanSearch,
  setBrand,
  setType
} from '../redux/slices/productsSlice.js'
import { getByNames, getProducts } from '../redux/slices/thunksProducts.js'
import Style from './../styles/Search.module.css'

import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'

export default function Search() {
  const dispatch = useDispatch()
  const { types } = useSelector((state) => state.products)

  function handleTypeChange(type) {
    if (!type) {
      dispatch(setType({ value: '', label: '' }))
      dispatch(getProducts())
      return
    }
    dispatch(setType(type))
    dispatch(getProducts())
  }
  const [search, setSearch] = useState('')
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
          <select>
            <option label="Seleccione un orden" value={''} />
            <option label="asc" value={'asc'} />
            <option label="desc" value={'desc'} />
          </select>
        </div>
      </div>
    </>
  )
}
