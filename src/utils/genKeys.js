
import crypto from 'crypto'
export default function generateHash () {
  const hash = crypto.randomBytes(20).toString('hex')
  return hash
}
