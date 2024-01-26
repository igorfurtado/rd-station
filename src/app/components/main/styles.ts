import styled from 'styled-components'

import { colors } from '@/app/styles/references'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${colors['primary-1']};
  transition: 0.3s all ease-out;
`
