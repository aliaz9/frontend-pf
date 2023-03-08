import { Button } from 'bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { confirmUser } from '../redux/slices/thunksUsers.js'

export default function ConfirmUser() {
  const params = useParams()
  const dispatch = useDispatch()
  const { msg } = useSelector((state) => state.users.message)
  const { token } = params

  useEffect(() => {
    dispatch(confirmUser(token))
  }, [])

  return (
    <div>
      {msg && <h1 style={{ color: 'green', textAlign: 'center' }}>{msg}</h1>}
      <div style={{ textAlign: 'center' }}>
        <Link to="/log-in">
          <button style={{ marginTop: '10px' }}>Iniciar Sesión</button>
        </Link>
      </div>
    </div>
  )
}
