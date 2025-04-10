import Card from './components/Card'
import Buttons from './components/Buttons'
import styles from './css/App.module.css'

function App() {
  const user = {
    name: '너님',
    color: 'var(--blue-dark)',
  }
  const computer = {
    name: '컴퓨터',
    color: 'var(--orange-dark)',
  }
  return (
    <div className={styles.App}>
      <h1>가위바위보 게임</h1>
      <main>
        <Card user={user} />
        <Buttons />
        <Card user={computer} />
      </main>
      <footer>
        버튼을 클릭하여 가위,바위,보 중 하나를 선택하세요.
        <br /> 컴퓨터는 랜덤으로 선택합니다.
      </footer>
    </div>
  )
}

export default App
