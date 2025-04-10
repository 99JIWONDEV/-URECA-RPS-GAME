import React from 'react'
import style from '../css/Button.module.css'

const Button = ({ img, name, color, isDisabled }) => {
  const btnDisabled = `${style.button} ${isDisabled ? style.disabled : ''}`
  return (
    <div className={btnDisabled} style={{ '--btn-color': color }} isDisabled>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Button
