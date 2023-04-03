import React from 'react'
import styled from 'styled-components'

const Mydiv = styled.div`
  background-color: ${(props) => props.color};
`

export default function PropsStyle({ color = 'blue' }) {
  return <Mydiv color={color}>PropsStyle</Mydiv>
}
