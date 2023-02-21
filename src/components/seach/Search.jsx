import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cleanSearch, getByName } from '../../actions/index.js'

export default function Search() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const onChange = (e) => {
    setSearch(e.target.value)
    if(e.target.value === ''){
      dispatch(cleanSearch())
    }
  }

  
  const handleSubmit  = (e) => {
    console.log(search)
    e.preventDefault()
    dispatch(getByName(search))
  }
  return (
    <>
      <div>
        <input
          type='search'
          value={search}
          onChange={onChange}
          placeholder='Buscar..'
        ></input>
        <i onClick={ (e) =>handleSubmit(e)} class='fa-solid fa-magnifying-glass'></i>
      </div>
    </>
  )
}
