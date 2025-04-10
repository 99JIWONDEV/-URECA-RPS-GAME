import style from '../css/Card.module.css'
import React from 'react'
import paper from '../assets/paper.png'
import rock from '../assets/rock.png'
import scissors from '../assets/scissors.png'
import question from '../assets/questionmark.png'

const Card = ({ user }) => {
  return (
    <div className={style.card} style={{ '--user-color': user.color }}>
      <h2>{user.name}</h2>
      <img src={paper} alt="RPSimg" />
      <p>선택하세요</p>
    </div>
  )
}

export default Card
