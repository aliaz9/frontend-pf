
import Swal from 'sweetalert2'
const isNumber = /\d/
const isEspecial = /^[a-zA-Z0-9]+$/
// verificar si al menos una letra es mayuscula
export const verifyUppercase = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (!(isNumber.test(value[i]) || !(isEspecial.test(value[i])))) {
      if (value[i].toUpperCase() === value[i]) {
        return true
      }
    }
  }
  return false
}

// verificar si al menos una letra es minuscula
export const verifyLowercase = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (!(isNumber.test(value[i]) || !(isEspecial.test(value[i])))) {
      if (value[i].toLowerCase() === value[i]) {
        return true
      }
    }
  }
  return false
}

// aletar sweet alert
export const alertMsg = (title, text, icon) => {
  Swal.fire({
    title,
    text,
    icon
  })
}
