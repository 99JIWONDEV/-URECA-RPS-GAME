import Card from './components/Card'
import Buttons from './components/Buttons'
import styles from './css/App.module.css'
import { useState } from 'react'

function App() {
  // 사용자와 컴퓨터의 정보를 담은 객체
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
  const [isDisabled, setIsDisabled] = useState(false)

  // 사용자가 선택한 것을 받아오고, 컴퓨터는 랜덤함수로 가위바위보 중 하나를 정해서 비교해서 결과를 내는, 결국 메인 기능 함수
  const play = userPick => {
    if (isDisabled) return
    const randomPick = options[Math.floor(Math.random() * 3)]
    setUserChoice(userPick)
    setComputerChoice(randomPick)
    const winner = getWinner(userPick, randomPick)
    setResult(winner)
    // 버튼을 클릭했을 때 1초간 비활성화 되도록 하는 함수
    setIsDisabled(true)
    setTimeout(() => {
      setIsDisabled(false)
    }, 1000)

    if (winner === '비겼습니다') {
      setUserResult('비겼습니다')
      setComputerResult('비겼습니다')
      setUserBgColor(null)
      setComputerBgColor(null)
    } else if (winner === '너님이 이겼습니다') {
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

  // 누가 이겼는지 확인하는 함수 (play 함수에서 호출되어서 사용됨)
  const getWinner = (user, computer) => {
    if (user === computer) return '비겼습니다'
    if (
      (user === '가위' && computer === '보') ||
      (user === '바위' && computer === '가위') ||
      (user === '보' && computer === '바위')
    ) {
      return '너님이 이겼습니다'
    }
    return '컴퓨터가 이겼습니다'
  }

  // 다시하기 버튼을 눌렀을 때 초기화 되도록 하는 함수
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
        <Buttons onClick={play} onReset={resetGame} isDisabled={isDisabled} />
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
