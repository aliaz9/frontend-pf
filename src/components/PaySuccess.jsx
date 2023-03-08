import { useEffect } from 'react'

const PaySuccess = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  useEffect(() => {
    fetch('http://localhost:4000/api/payment/paypal/drop-cart', config)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }, [])
  return <div>Gracias por tu combra</div>
}

export default PaySuccess
