// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { recoverPassword } from '../redux/slices/thunksUsers.js'

// export default function RecoverPassword () {
//   const params = useParams()
//   const dispatch = useDispatch()
//   const { msg } = useSelector(state => state.users.message)
//   const { email } = params
//   useEffect(() => {
//     dispatch(recoverPassword(email))
//   }, [])
//   return (
//     <div>
//       {msg && <h1>{msg}</h1>}
//     </div>
//   )
// }
