import { useDispatch, useSelector } from 'react-redux'
import {
  setBrand,
  setType
} from '../redux/slices/productsSlice.js'
import { getProducts } from '../redux/slices/thunks.js'
import Select from 'react-select'
// import { useState } from 'react'

export default function FilterAndOrder () {
  const dispatch = useDispatch()
  const { types } = useSelector((state) => state.products)
  const { brands } = useSelector((state) => state.products)

  function handleBrandChange (brand) {
    console.log(brand)
    if (!brand) {
      dispatch(setBrand({ value: '', label: '' }))
      dispatch(getProducts())
      return
    }
    dispatch(setBrand(brand))
    dispatch(getProducts())
  }
  function handleTypeChange (type) {
    if (!type) {
      dispatch(setType({ value: '', label: '' }))
      dispatch(getProducts())
      return
    }
    dispatch(setType(type))
    dispatch(getProducts())
  }

  return (
    <div>
      <Select
        options={brands}
        onChange={handleBrandChange}
        isClearable
        // defaultValue={brands[0]}
      />

       <Select
        options={types}
        onChange={handleTypeChange}
        isClearable
        // defaultValue={''}
      />
      <select>
        <option label="Seleccione un orden" value={''} />
        <option label="asc" value={'asc'} />
        <option label="desc" value={'desc'} />
      </select>
    </div>
  )
}
