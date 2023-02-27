import React from 'react'
import { useState } from 'react'
import style from '../styles/Form.module.css'
import { useForm } from 'react-hook-form'
import { createProducts } from '../redux/slices/thunksProducts'
import { useDispatch } from 'react-redux'

const Form = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
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
    // formData.append(property, value)
    if (property === 'image') setImage(value)
    if (property === 'document') setDocument(value)
  }
  const handleCategoria = (event) => {
    console.log(event.target.value)
    setCategoria(event.target.value)
  }

  const handlerSumit = async () => {
    for (const property in form) {
      form[property] && formData.append(property, form[property])
    }
    formData.append('image', image)
    formData.append('document', document)
    const result = await createProducts(formData)
    console.log(result)
  }

  let panelesSolares = (
    <div className={style.adicional}>
      {' '}
      {/* propiedades opcionales segun el producto */}
      {/* paneles solares */}
      {/*Maxima potencia  */}
      <div className={style.inputDos}>
        <div>
          <label>
            <span>Potencia Maxima</span>
          </label>
          <input
            type="number"
            value={form.pmax}
            onChange={inforHandeler}
            name="pmax"
          />
        </div>
        {/* Tension Maxima */}
        <div>
          <label>
            <span>Voltaje Maxima</span>
          </label>
          <input
            type="number"
            value={form.vmax}
            onChange={inforHandeler}
            name="vmax"
          />
        </div>
      </div>
      <div className={style.inputDos}>
        {/* Voltaje en circuito abierto */}
        <div>
          <label>
            <span>Voltaje en Circuito-Abierto</span>
          </label>
          <input
            type="number"
            value={form.voc}
            onChange={inforHandeler}
            name="voc"
          />
        </div>
        {/* Intencvaluead en corto-circuito */}
        <div>
          <label>
            <span>Corriente en Corto-Circuito</span>
          </label>
          <input
            type="number"
            value={form.isc}
            onChange={inforHandeler}
            name="isc"
          />
        </div>
      </div>
    </div>
  )

  let invBatCont = (
    <div className={style.adicional}>
      {/* PARA INVERSORES, BATERIAS Y CONTROLADORES */}
      {/* Voltaje Nominal */}
      <div>
        <label>
          <span>Voltaje Nominal</span>
        </label>
        <input
          type="number"
          value={form.RatedVoltage}
          onChange={inforHandeler}
          name="RatedVoltage"
        />
      </div>
      {/* Corriente nominal */}
      <div>
        <label>
          <span>Corriente Nominal</span>
        </label>
        <input
          type="number"
          value={form.RatedCurrent}
          onChange={inforHandeler}
          name="RatedCurrent"
        />
      </div>
    </div>
  )

  let baterias = (
    <div className={style.adicional}>
      {/* Para Baterias */}
      {/* Tecnologia */}
      <div>
        <label>
          <span>Tecnologia de la Bateria</span>
        </label>
        <input
          type="number"
          value={form.tecnology}
          onChange={inforHandeler}
          name="tecnology"
        />
      </div>
      {invBatCont}
    </div>
  )
  let inversores = (
    <div className={style.adicional}>
      {/* Para Inversores */}
      {/* Potencia de Salvaluea */}
      <div>
        <label>
          <span>Potencia de Salvaluea</span>
        </label>
        <input
          type="number"
          value={form.powerOutput}
          onChange={inforHandeler}
          name="powerOutput"
        />
      </div>
      {/* Pico de potencia */}
      <div>
        <label>
          <span>Pico de Potencia</span>
        </label>
        <input
          type="number"
          value={form.peakPower}
          onChange={inforHandeler}
          name="peakPower"
        />
      </div>
      {invBatCont}
    </div>
  )

  let controladores = (
    <div className={style.adicional}>
      {/* PARA CONTROLADORES */}
      {/* Voltaje de Recuperación */}
      <div>
        <label>
          <span>Voltaje de Recuperación</span>
        </label>
        <input
          type="number"
          value={form.voltageRecovery}
          onChange={inforHandeler}
          name="voltageRecovery"
        />
      </div>
      {/* Voltaje de Sobrecarga */}
      <div>
        <label>
          <span>Voltaje de Sobre-Carga</span>
        </label>
        <input
          type="number"
          value={form.overloadVoltage}
          onChange={inforHandeler}
          name="overloadVoltage"
        />
      </div>
      {invBatCont}
    </div>
  )

  let todos = (
    <div className={style.adicional}>
      {/* Para las 4 categorias */}
      {/* Eficiencia en porcentaje */}
      <div>
        <label>
          <span>Eficiencia del Producto</span>
        </label>
        <input
          type="number"
          value={form.efficiency}
          onChange={inforHandeler}
          name="efficiency"
        />
      </div>
      {/* Dimenciones */}
      <div>
        <label>
          <span>Dimensiones del Producto</span>
        </label>
        <input
          type="text"
          value={form.dimensions}
          onChange={inforHandeler}
          name="dimensions"
        />
      </div>
      {/* Peso */}
      <div>
        <label>
          <span>Peso del Producto</span>
        </label>
        <input
          type="number"
          value={form.weight}
          onChange={inforHandeler}
          name="weight"
        />
      </div>
    </div>
  )

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
            // {...register('name', { required: true })}
            type="text"
            value={form.name}
            onChange={inforHandeler}
            name="name"
            placeholder="Nuevo producto"
          />

          <div className={style.inputDos}>
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
                placeholder="Marca del producto"
              />
            </div>
            <div>
              {/* tipo de producto  */}
              <label>
                <span>Tipo de Producto</span>
              </label>
              <input
                type="text"
                value={form.type}
                onChange={inforHandeler}
                name="type"
                placeholder="Tipo de producto"
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
                type="number"
                value={form.price}
                onChange={inforHandeler}
                name="price"
                placeholder="precio de venta"
              />
            </div>
            <div>
              {/* Garantia del producto */}

              <label>
                <span>Garantia del Producto</span>
              </label>
              <input
                type="number"
                value={form.warranty}
                onChange={inforHandeler}
                name="warranty"
                placeholder="Años de garantia"
              />
            </div>
          </div>

          {/* descripción */}

          <label>
            <span>Descripción del Producto</span>
          </label>
          <textarea
            value={form.description}
            onChange={inforHandeler}
            name="description"
            placeholder="Descripcion del producto"
          ></textarea>

          <div className={style.inputDos}>
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
            <div>
              {/* Documentacion del producto */}

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
