import React, { useRef } from 'react'

export default function RefDomControl() {
  const pickEl = useRef()
  const blueEl = useRef()
  const inputEl = useRef()

  const adjustCss = () => {
    pickEl.current.style.backgroundColor = 'lightpink'
    blueEl.current.style.backgroundColor = 'lightblue'
  }

  const clearInput = () => {
    inputEl.current.value = ''
  }
  return (
    <div>
      <h1 ref={pickEl}>핑크</h1>
      <h1 ref={blueEl}>블루</h1>
      <input type="text" ref={inputEl} />
      <br />
      <button onClick={adjustCss}>CSS 적용</button>
      <button onClick={clearInput}>input 초기화</button>
    </div>
  )
}
