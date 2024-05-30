import styled from 'styled-components'
import {Button as Btn} from 'carbon-components-react'

export const Button = styled(Btn)`
  z-index: 2;

  ${p=>p.grey && `
  background: #f4f4f4;
  color: #4d4d4d;
  `}
  
  ${p=>p.black && `
  background: #000000;
  color: #ffffff;
  `}
`

export const BackButton = styled(Btn)`
  background: #f4f4f4;
  color: #4d4d4d;
`