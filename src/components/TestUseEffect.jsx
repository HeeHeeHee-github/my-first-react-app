import React, { useEffect, useRef, useState } from 'react'

export default function TestUseEffect() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('입력하세요')
  const inputValue = useRef()

  const onBtnClick = () => {
    console.log('🖱️ 버튼 클릭')
    setCount((cur) => cur + 1)
  }
  const onInputChange = () => {
    console.log('💻 키 입력')
    setText(inputValue.current.value)
  }

  useEffect(() => {
    console.log('🎨 렌더링 할 때마다 실행되는 useEffect')
  })

  useEffect(() => {
    console.log('🎯 버튼 클릭 시에만 실행되는 useEffect')
  }, [count])

  useEffect(() => {
    console.log('🥊 인풋 입력 시에만 실행되는 useEffect')
  }, [text])

  useEffect(() => {
    console.log('🏀 최초 마운트 시에만 실행')
  }, [])

  // useEffect 는 return 부터 다 읽고!
  // 먼저 html 다 그린 다음임

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onBtnClick}>+1 버튼</button>
      <br />
      <br />
      <h1>{text}</h1>
      <input type="text" ref={inputValue} onChange={onInputChange} />
    </>
  )
}
