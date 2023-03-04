import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { confirmUser } from '../redux/slices/thunksUsers.js'

export default function ConfirmUser () {
  const params = useParams()
  const dispatch = useDispatch()
  const { msg } = useSelector(state => state.users.message)
  const { token } = params
  useEffect(() => {
    dispatch(confirmUser(token))
  }, [])
  return (
    <div>
      {msg && <h1>{msg}</h1>}
    </div>
  )
}
