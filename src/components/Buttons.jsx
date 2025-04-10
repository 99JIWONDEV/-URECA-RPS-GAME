import React from 'react'
import style from '../css/Buttons.module.css'
import Button from './Button'

import paper from '../assets/paper.png'
import rock from '../assets/rock.png'
import scissors from '../assets/scissors.png'

const Buttons = () => {
  const buttonData = [
    { img: scissors, name: '가위', color: 'var(--green)' },
    { img: rock, name: '바위', color: 'var(--blue-dark)' },
    { img: paper, name: '보', color: 'var(--yellow)' },
  ]

  return (
    <div className={style.buttons}>
      {buttonData.map((btn, idx) => (
        <Button key={idx} img={btn.img} name={btn.name} color={btn.color} />
      ))}
      <button>다시하기</button>
    </div>
  )
}

export default Buttons
