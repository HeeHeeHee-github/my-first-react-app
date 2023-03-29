import React, { useRef } from 'react'

export default function ChangeFocus() {
  const input1 = useRef()
  const input2 = useRef()

  const changeFocusOne = () => {
    input1.current.focus()
  }
  const changeFocusTwo = () => {
    input2.current.focus()
  }
  return (
    <div>
      <input ref={input1} placeholder="1번" />
      <input ref={input2} placeholder="2번" />

      <br />
      <br />
      <button onClick={changeFocusOne}>1번 input으로 포커스 보내기</button>
      <button onClick={changeFocusTwo}>2번 input으로 포커스 보내기</button>
    </div>
  )
}
