import React from 'react'
import styled from 'styled-components'

const Mydiv = styled.div`
  background-color: orange;
`

const MyHeading = styled.h1`
  color: blue;
`

const MySpan = styled.span`
  background-color: orange;
  font-weight: 700;
`

export default function TestStyled() {
  return (
    <Mydiv>
      <MyHeading>h1 태그입니다.</MyHeading>
      <MySpan>span 태그입니다.</MySpan>
    </Mydiv>
  )
}
