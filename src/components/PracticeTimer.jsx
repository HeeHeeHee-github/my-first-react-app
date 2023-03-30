import React, { useEffect, useRef, useState } from 'react'

export default function PracticeTimer() {
  // eslint-disable-next-line no-unused-vars
  const [render, setRender] = useState(false) // 컴포넌트 리렌더 시키는 걸로 useState 사용
  const time = useRef(0)

  // 1초에 한 번식 time.current 1씩 증가
  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1
      console.log(time.current)
    }, 1000)

    return () => {
      clearInterval(timer)
      console.log('타이머 종료')
    }
  }, [])

  return (
    <div>
      <h1>{time.current}</h1>
      {/* 클릭이 되었을때만 실행되게끔 () 익명함수 추가 */}
      {/* 안 그러면 리액트가 코드를 읽을 때 자동으로 실행하게 됨 */}
      <button onClick={() => setRender((cur) => !cur)}>시간</button>
    </div>
  )
}
