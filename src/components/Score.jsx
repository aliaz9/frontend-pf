import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Score.module.css'
import DetailScore from './DetailScore'
import { MessageContext } from './Modal'

export default function Score({
  count,
  countOpinion = 0,
  disabledStart = 0,
  disabledOpinion = 0,
  disabledNumber = 0,
  width = 1
}) {
  const colors = {
    orange: '#FFBB00',
    grey: '#d2e3da'
  }
  const stars = Array(5).fill(0)
  const countStart = count
  const [display, setDisplay] = useState(false)
  /* creacion de opinion */
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)

  const [number, setNumber] = useState(0)
  const sendMessage = useContext(MessageContext)

  const handleText = () => {
    switch (number) {
      case 1:
        return 'Insuficiente 🙁'
      case 2:
        return 'Aceptable 😐'
      case 3:
        return 'Normal 🙂'
      case 4:
        return 'Bueno 😀'
      case 5:
        return 'Excelente 🥳'
      default:
        return '¡Haga clic para puntuar!'
    }
  }

  const handleClick = (value) => {
    setCurrentValue(value)
    setNumber(value)
    sendMessage(value)
  }

  const handleMouseOver = (value) => {
    setHoverValue(value)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const handleDisplay = () => {
    setDisplay(!display)
  }

  return (
    <>
      <div className={styles.ContainerScore}>
        <div>
          {stars.map((_, index) => {
            return (
              <i
                className={`fa-solid fa-star fa-${width}x`}
                key={index}
                style={
                  disabledStart === 0
                    ? countStart > index
                      ? { color: colors.orange }
                      : { color: colors.grey }
                    : (currentValue || hoverValue) > index
                        ? { color: colors.orange }
                        : { color: colors.grey }
                }
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
              ></i>
            )
          })}
          <p className={`${disabledNumber === 0 ? styles.isVisibility : ''}`}>
            {handleText()}
          </p>
        </div>

        <Link
          className={`${disabledOpinion === 1 ? styles.isVisibility : ''}`}
          onClick={handleDisplay}
        >
          <b className={styles.titleScore} title="Ver Opiniones">
            {countOpinion} Opiniones
          </b>
        </Link>
      </div>
      {display && <DetailScore />}
    </>
  )
}
