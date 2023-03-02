import style from '../styles/Form.module.css'

//ADICIONALES EN EL FORMULARIO

export const functionPanels = (form, inforHandeler) => {
  let panelesSolares = (
    <div className={style.formulario}>
      {' '}
      {/* propiedades opcionales segun el producto */}
      {/* paneles solares */}
      <div className={style.inputDos}>
        {/*Maxima potencia  */}
        <div>
          <label>
            <span>Potencia Maxima</span>
          </label>
          <input
            type="number"
            value={form.pmax}
            onChange={inforHandeler}
            name="pmax"
            autoComplete="off"
          />
        </div>

        <div>
          {/* Tension Maxima */}
          <label>
            <span>Voltaje Maxima</span>
          </label>
          <input
            type="number"
            value={form.vmax}
            onChange={inforHandeler}
            name="vmax"
            autoComplete="off"
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
            autoComplete="off"
          />
        </div>
        <div>
          {/* Intencvaluead en corto-circuito */}
          <label>
            <span>Corriente en Corto-Circuito</span>
          </label>
          <input
            type="number"
            value={form.isc}
            onChange={inforHandeler}
            name="isc"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  )
  return panelesSolares
}

const functionTree = (form, inforHandeler) => {
  let invBatCont = (
    <div className={style.inputDos}>
      {/* PARA INVERSORES, BATERIAS Y CONTROLADORES */}
      {/* Voltaje Nominal */}
      {/* <div className={style.inputDos}> */}
      <div>
        <label>
          <span>Voltaje Nominal</span>
        </label>
        <input
          type="number"
          value={form.RatedVoltage}
          onChange={inforHandeler}
          name="RatedVoltage"
          autoComplete="off"
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
          autoComplete="off"
        />
      </div>
      {/* </div> */}
    </div>
  )
  return invBatCont
}

export const functionBaterias = (form, inforHandeler) => {
  const invBatCont = functionTree(form, inforHandeler)
  let baterias = (
    <div className={style.formulario}>
      {/* Para Baterias */}
      {/* <div className={style.inputDos}> */} {/* Tecnologia */}
      <div className={style.divSolo}>
        <label>
          <span>Tecnologia de la Bateria</span>
        </label>
        <input
          type="text"
          value={form.tecnology}
          onChange={inforHandeler}
          name="tecnology"
          autoComplete="off"
        />
      </div>
      {invBatCont}
      {/* </div> */}
    </div>
  )
  return baterias
}

export const functionInversores = (form, inforHandeler) => {
  const invBatCont = functionTree(form, inforHandeler)
  let inversores = (
    <div className={style.formulario}>
      {/* Para Inversores */}
      {/* Potencia de Salvaluea */}
      <div className={style.inputDos}>
        <div>
          <label>
            <span>Potencia de Salvaluea</span>
          </label>
          <input
            type="number"
            value={form.powerOutput}
            onChange={inforHandeler}
            name="powerOutput"
            autoComplete="off"
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
            autoComplete="off"
          />
        </div>
      </div>

      {invBatCont}
    </div>
  )
  return inversores
}

export const functionControladores = (form, inforHandeler) => {
  const invBatCont = functionTree(form, inforHandeler)
  let controladores = (
    <div className={style.formulario}>
      {/* PARA CONTROLADORES */}
      {/* Voltaje de Recuperación */}
      <div className={style.inputDos}>
        <div>
          <label>
            <span>Voltaje de Recuperación</span>
          </label>
          <input
            type="number"
            value={form.voltageRecovery}
            onChange={inforHandeler}
            name="voltageRecovery"
            autoComplete="off"
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
            autoComplete="off"
          />
        </div>
      </div>

      {invBatCont}
    </div>
  )
  return controladores
}
export const functionTodos = (form, inforHandeler) => {
  let todos = (
    <div className={style.formulario}>
      {/* Para las 4 categorias */}
      {/* Eficiencia en porcentaje */}
      <div className={style.inputDos}>
        <div>
          <label>
            <span>Eficiencia del Producto</span>
          </label>
          <input
            type="number"
            value={form.efficiency}
            onChange={inforHandeler}
            name="efficiency"
            autoComplete="off"
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
            autoComplete="off"
          />
        </div>
      </div>

      {/* Peso */}
      <div className={style.divSolo}>
        <label>
          <span>Peso del Producto</span>
        </label>
        <input
          type="number"
          value={form.weight}
          onChange={inforHandeler}
          name="weight"
          autoComplete="off"
        />
      </div>
    </div>
  )
  return todos
}
