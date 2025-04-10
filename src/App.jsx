import Card from './components/Card'
import Buttons from './components/Buttons'
import styles from './css/App.module.css'
import { useState } from 'react'

function App() {
  const user = {
    name: '너님',
    color: 'var(--blue-dark)',
    bgColor: '#d6e7f6',
  }
  const computer = {
    name: '컴퓨터',
    color: 'var(--orange-dark)',
    bgColor: '#f2dfd3',
  }

  const options = ['가위', '바위', '보']
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState('')
  const [userResult, setUserResult] = useState('')
  const [computerResult, setComputerResult] = useState('')
  const [userBgColor, setUserBgColor] = useState(null)
  const [computerBgColor, setComputerBgColor] = useState(null)

  const play = userPick => {
    const randomPick = options[Math.floor(Math.random() * 3)]
    setUserChoice(userPick)
    setComputerChoice(randomPick)
    const winner = getWinner(userPick, randomPick)
    setResult(winner)

    if (winner === '비겼습니다!') {
      setUserResult('비겼습니다')
      setComputerResult('비겼습니다')
      setUserBgColor(null)
      setComputerBgColor(null)
    } else if (winner === '너님이 이겼습니다!') {
      setUserResult('이겼습니다')
      setComputerResult('졌습니다')
      setUserBgColor('#d6e7f6')
      setComputerBgColor(null)
    } else {
      setUserResult('졌습니다')
      setComputerResult('이겼습니다')
      setComputerBgColor('#f2dfd3')
      setUserBgColor(null)
    }
  }

  const getWinner = (user, computer) => {
    if (user === computer) return '비겼습니다!'
    if (
      (user === '가위' && computer === '보') ||
      (user === '바위' && computer === '가위') ||
      (user === '보' && computer === '바위')
    ) {
      return '너님이 이겼습니다!'
    }
    return '컴퓨터가 이겼습니다!'
  }

  const resetGame = () => {
    setUserChoice(null)
    setComputerChoice(null)
    setResult('')
    setUserResult('')
    setComputerResult('')
    setUserBgColor(null)
    setComputerBgColor(null)
  }

  return (
    <div className={styles.App}>
      <h1>가위바위보 게임</h1>
      <main>
        <Card user={{ ...user, choice: userChoice, bgColor: userBgColor }} result={userResult} />
        <Buttons onClick={play} onReset={resetGame} />
        <Card
          user={{ ...computer, choice: computerChoice, bgColor: computerBgColor }}
          result={computerResult}
        />
      </main>
      <footer>
        버튼을 클릭하여 가위,바위,보 중 하나를 선택하세요.
        <br /> 컴퓨터는 랜덤으로 선택합니다.
      </footer>
    </div>
  )
}

export default App
