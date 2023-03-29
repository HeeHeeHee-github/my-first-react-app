import React, { useRef, useState } from 'react'

export default function ExampleUseRef() {
  const [rand1, setRand1] = useState(Math.floor(Math.random() * 10)) // 첫번째 랜덤 숫자
  const [rand2, setRand2] = useState(Math.floor(Math.random() * 10)) // 두번째 랜덤 숫자
  const operator = ['+', '-', '*'] // 연산자
  const opRand = operator[Math.floor(Math.random() * operator.length)] // 랜덤 연산자

  const inputEl = useRef()

  // 정답일때
  const correctRandom = () => {
    alert('정답')
    inputEl.current.value = ''
    setRand1(Math.floor(Math.random() * 10))
    setRand2(Math.floor(Math.random() * 10))
  }

  // 오답일때
  const wrongRandom = () => {
    alert('틀림')
    inputEl.current.value = ''
  }

  // 정답 제출
  const buttonEvent = () => {
    if (opRand === '+' && parseInt(inputEl.current.value) === rand1 + rand2) {
      correctRandom()
    } else if (
      opRand === '-' &&
      parseInt(inputEl.current.value) === rand1 - rand2
    ) {
      correctRandom()
    } else if (
      opRand === '*' &&
      parseInt(inputEl.current.value) === rand1 * rand2
    ) {
      correctRandom()
    } else {
      wrongRandom()
    }
  }

  return (
    <div>
      <h1>
        {rand1} {opRand} {rand2}
      </h1>
      <input type="text" ref={inputEl} />
      <button onClick={buttonEvent}>정답 제출</button>
    </div>
  )
}
