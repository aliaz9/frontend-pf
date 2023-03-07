import { useState } from 'react'
import style from '../styles/Form.module.css'
import { useForm } from 'react-hook-form'
import { createProducts } from '../redux/slices/thunksProducts'
import {
  functionPanels,
  functionBaterias,
  functionInversores,
  functionControladores,
  functionTodos
} from '../utils/funcionesFormulario'
const Form = () => {
  const { register, handleSubmit } = useForm()
  // const dispatch = useDispatch()
  const [image, setImage] = useState()
  const [document, setDocument] = useState()
  const [categoria, setCategoria] = useState('Otros')

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

  const formData = new FormData()

  const handlerfile = (event) => {
    const property = event.target.name
    const value = event.target.files[0]
    const extensionImg = /(.jpg|.jpeg|.png|.gif)$/i
    const vinculo = value.name
    if (property === 'image') {
      if (extensionImg.exec(vinculo)) setImage(value)
      else {
        alert('El archivo ingresado no es una imagen')
      }
    }
    if (property === 'document') {
      if (value.type === 'application/pdf') setDocument(value)
      else {
        alert('El archivo ingresado no es un .pdf')
      }
    }
  }

  const handleCategoria = (event) => {
    setCategoria(event.target.value)
  }

  const handlerSumit = async () => {
    for (const property in form) {
      form[property] && formData.append(property, form[property])
    }
    formData.append('image', image)
    formData.append('document', document)
    const result = await createProducts(formData)
  }

  const panelesSolares = functionPanels(form, inforHandeler)
  const baterias = functionBaterias(form, inforHandeler)
  const inversores = functionInversores(form, inforHandeler)
  const controladores = functionControladores(form, inforHandeler)
  const todos = functionTodos(form, inforHandeler)

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Crea un producto</h1>
      </div>
      <div className={style.contForm}>
        <form
          onSubmit={handleSubmit(handlerSumit)}
          className={style.formulario}
        >
          {/* Nombre del producto */}

          <label>
            <span>Nombre del Producto</span>
          </label>
          <input
            {...register('name', {
              required: true
            })}
            type="text"
            value={form.name}
            onChange={inforHandeler}
            name="name"
            placeholder="Nuevo producto"
            autoComplete="off"
          />

          <div className={style.inputDos}>
            {/* marca del producto */}
            <div>
              <label>
                <span>Marca del Producto</span>
              </label>
              <input
                {...register('brand', {
                  required: true
                })}
                type="text"
                value={form.brand}
                onChange={inforHandeler}
                name="brand"
                placeholder="Marca del producto"
                autoComplete="off"
              />
            </div>
            <div>
              {/* tipo de producto  */}
              <label>
                <span>Tipo de Producto</span>
              </label>
              <input
                {...register('type', {
                  required: true
                })}
                type="text"
                value={form.type}
                onChange={inforHandeler}
                name="type"
                placeholder="Tipo de producto"
                autoComplete="off"
              />
            </div>
          </div>

          <div className={style.inputDos}>
            {/* precio del producto */}
            <div>
              <label>
                <span>Precio del Producto</span>
              </label>
              <input
                {...register('price', {
                  required: true
                })}
                type="number"
                value={form.price}
                onChange={inforHandeler}
                name="price"
                placeholder="precio de venta"
                autoComplete="off"
              />
            </div>
            <div>
              {/* Garantia del producto */}

              <label>
                <span>Garantia del Producto</span>
              </label>
              <input
                {...register('warranty', {
                  required: true
                })}
                type="number"
                value={form.warranty}
                onChange={inforHandeler}
                name="warranty"
                placeholder="Años de garantia"
                autoComplete="off"
              />
            </div>
          </div>

          {/* descripción */}

          <label>
            <span>Descripción del Producto</span>
          </label>
          <textarea
            {...register('description', {
              required: true
            })}
            value={form.description}
            onChange={inforHandeler}
            name="description"
            placeholder="Descripcion del producto"
            autoComplete="off"
          ></textarea>

          <div className={style.inputDos}>
            {/* Imagen del producto */}
            <div className={style.file}>
              <label>
                <span>Imagen del Producto</span>
              </label>
              <input
                {...register('image', {
                  required: true
                })}
                // value={image}
                type="file"
                onChange={handlerfile}
                name="image"
                autoComplete="off"
              />
              {image && <img src={URL.createObjectURL(image)} />}
            </div>
            <div className={style.file}>
              {/* Documentacion del producto */}
              <label>
                <span>Documentación del Producto</span>
              </label>
              <input
                {...register('document', {
                  required: true
                })}
                type="file"
                // value={document}
                onChange={handlerfile}
                name="document"
                autoComplete="off"
              />
              {document && (
                <iframe src={URL.createObjectURL(document)}></iframe>
              )}
            </div>
          </div>

          {/* categoria del producto */}
          <div>
            <label>
              <span>Categoria del Producto</span>
              <select onChange={handleCategoria}>
                <option defaultChecked>Otros</option>
                <option>Paneles Solares</option>
                <option>Baterias</option>
                <option>Inversores</option>
                <option>Controladores</option>
              </select>
            </label>
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
