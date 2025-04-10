import React from 'react'
import style from '../css/Button.module.css'

const Button = ({ img, name, color }) => {
  return (
    <div className={style.button} style={{ '--btn-color': color }}>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Button
