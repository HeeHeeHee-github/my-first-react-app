import React from 'react'
import dogImg from '../images/yu-ato.jpg'

export default function ImgComponents2() {
  return (
    <>
      <h1>Public 폴더</h1>
      <img src="/images/yu-ato.jpg" alt="퍼블릭 유아토" />
      <h1>SRC 폴더</h1>
      <img src={dogImg} alt="소스 유아토" />
    </>
  )
}
