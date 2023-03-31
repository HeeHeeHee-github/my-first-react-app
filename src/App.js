import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'
// import './App.css'

const appLogoSpin = keyframes` from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`

const Mydiv = styled.div`
  text-align: center;
`
const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Image = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${appLogoSpin} infinite 20s linear;
`
const P = styled.p``
const Link = styled.a`
  color: #61dafb;
`

function App() {
  return (
    <Mydiv className="App">
      <Header className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <P>
          Edit <code>src/App.js</code> and save to reload!!!!!!
        </P>
        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </Mydiv>
  )
}

export default App
