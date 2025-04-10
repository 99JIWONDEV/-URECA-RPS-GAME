import style from '../css/Card.module.css'
import React from 'react'
import paper from '../assets/paper.png'
import rock from '../assets/rock.png'
import scissors from '../assets/scissors.png'
import question from '../assets/questionmark.png'

const Card = ({ user, result }) => {
  // 선택에 따라 이미지 반환
  const getImage = choice => {
    switch (choice) {
      case '가위':
        return scissors
      case '바위':
        return rock
      case '보':
        return paper
      default:
        return question
    }
  }

  const resultClass =
    result === '이겼습니다' ? style.winner : result === '졌습니다' ? style.loser : ''

  return (
    <div
      className={`${style.card} ${resultClass}`}
      style={{
        '--user-color': user.color,
        '--bg-color': user.bgColor,
      }}
    >
      <h2>{user.name}</h2>
      <img src={getImage(user.choice)} alt="결과" />
      <p>{result || '선택하세요'}</p>
    </div>
  )
}

export default Card
