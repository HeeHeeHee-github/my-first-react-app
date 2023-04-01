import './App.css'
import FancyBorder from './components/FancyBorder'
function App() {
  console.log('zzz')
  return (
    <div className="App">
      <FancyBorder color="pink">
        <h1>Hello, props.children</h1>
        <p>이건 매우 유용한 기술입니다.</p>
      </FancyBorder>
    </div>
  )
}

export default App
