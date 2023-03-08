
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

// formato de fecha (dia-mes en letras-año)
export const formatDate = (date) => {
  const NewDate = new Date(date)

  // Obtener nombre del mes en letras
  const opcionesFecha = { month: 'long' }
  const newMonth = new Intl.DateTimeFormat('es-ES', opcionesFecha).format(NewDate)

  // Formatear la fecha con el nombre del mes
  const day = NewDate.getDate()
  const year = NewDate.getFullYear()

  return `${day + 1} ${newMonth} ${year}`
}

// verificar si el usuario segun endpoint de products
export const searchUser = (arr, element) => {
  let resultArr = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].userId === element) {
      // eslint-disable-next-line no-unused-vars
      resultArr++
    }
  }
  return resultArr
}
