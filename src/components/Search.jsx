import { useState } from 'react'
import styles from "../styles/Search.module.css"
export default function Search () {
  const [search, setSearch] = useState('')

  const onChange = (e) => {
    setSearch(e.target.value)
    if (e.target.value === '') {
      // dispatch(cleanSearch())
    }
  }

  const handleSubmit = (e) => {
    console.log(search)
    e.preventDefault()
    // dispatch(getByName(search))
  }
  return (
    <>
      <div>
        <input
          type='search'
          value={search}
          onChange={onChange}
          placeholder='Buscar..'
          className={styles.button}
        />
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <i onClick={ (e) => handleSubmit(e)} className='fa-solid fa-magnifying-glass'/>
      </div>
    </>
  )
}
