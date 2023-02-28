import React from 'react'
import { useState } from 'react'
import style from '../styles/Form.module.css'
import { useForm } from 'react-hook-form'
import { createProducts } from '../redux/slices/thunksProducts'
import { useDispatch } from 'react-redux'

const Form = () => {
  const { register, handleSubmit } = useForm()
  const [image, setImage] = useState()
  const [document, setDocument] = useState()
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: '',
    type: '',
    description: '',
    brand: '',
    price: '',
    pmax: '',
    vmax: '',
    voc: '',
    isc: '',
    efficiency: '',
    warranty: '',
    dimensions: '',
    weight: '',
    RatedVoltage: '',
    RatedCurrent: '',
    tecnology: '',
    powerOutput: '',
    peakPower: '',
    outputVoltage: '',
    voltageRecovery: '',
    overloadVoltage: ''
  })

  const inforHandeler = (event) => {
    const property = event.target.name
    const value = event.target.value
    setForm({
      ...form,
      [property]: value
    })
  }

  const handlerfile = (event) => {
    const property = event.target.name
    const value = event.target.files[0]
    if (property === 'image') setImage(value)
    if (property === 'document') setDocument(value)
  }

  const formData = new FormData()

  const handlerSumit = async () => {
    for (const property in form) {
      form[property] && formData.append(property, form[property])
    }
    formData.append('image', image)
    formData.append('document', document)
    const result = await createProducts(formData)
  }

  return (
    <div className={style.container}>
      <div className={style.title}></div>
      <div className={style.contForm}>
        <form
          onSubmit={handleSubmit(handlerSumit)}
          className={style.formulario}
        >
          {/* Nombre del producto */}
          <div>
            <label>
              <span>Nombre del Producto</span>
            </label>
            <input
              // {...register('name', { required: true })}
              type="text"
              value={form.name}
              onChange={inforHandeler}
              name="name"
              autoComplete="off"
            />
          </div>
          {/* descripción */}
          <div>
            <label>
              <span>Descripción del Producto</span>
            </label>
            <textarea
              value={form.description}
              onChange={inforHandeler}
              name="description"
            ></textarea>
          </div>
          {/* marca del producto */}
          <div>
            <label>
              <span>Marca del Producto</span>
            </label>
            <input
              type="text"
              value={form.brand}
              onChange={inforHandeler}
              name="brand"
            />
          </div>
          {/* precio del producto */}
          <div>
            <label>
              <span>Precio del Producto</span>
            </label>
            <input
              type="number"
              value={form.price}
              onChange={inforHandeler}
              name="price"
            />
          </div>
          {/* Garantia del producto */}
          <div>
            <label>
              <span>Garantia del Producto</span>
            </label>
            <input
              type="number"
              value={form.warranty}
              onChange={inforHandeler}
              name="warranty"
            />
          </div>
          {/* Imagen del producto */}
          <div>
            <label>
              <span>Imagen del Producto</span>
            </label>
            <input
              type="file"
              // value={form.image}
              onChange={handlerfile}
              name="image"
            />
          </div>
          {/* Documentacion del producto */}
          <div>
            <label>
              <span>Documentación del Producto</span>
            </label>
            <input
              type="file"
              // value={form.document}
              onChange={handlerfile}
              name="document"
            />
          </div>
          {/* categoria del producto */}
          <div>
            <label>
              <span>Categoria del Producto</span>
            </label>
            <select onChange={handleCategoria}>
              <option defaultChecked>Otros</option>
              <option>Paneles Solares</option>
              <option>Baterias</option>
              <option>Inversores</option>
              <option>Controladores</option>
            </select>
          </div>

          {categoria === 'Paneles Solares' && panelesSolares}
          {categoria === 'Baterias' && baterias}
          {categoria === 'Inversores' && inversores}
          {categoria === 'Controladores' && controladores}
          {categoria !== 'Otros' && todos}
          <div>
            <button>
              <span>Crear Producto</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
