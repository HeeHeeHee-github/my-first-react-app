import React, { useState } from 'react'
import PracticeOne from './PracticeOne'
import PracticeTwo from './PracticeTwo'

export default function PracticeConditional() {
  const [condition, setCondition] = useState('1번')
  const onChange = () => {
    condition === '1번' ? setCondition('2번') : setCondition('1번')
  }
  return (
    <div className="App">
      {condition === '1번' ? (
        <PracticeOne text={condition} />
      ) : (
        <PracticeTwo text={condition} />
      )}
      <button onClick={onChange}>컴포넌트 변경</button>
    </div>
  )
}
