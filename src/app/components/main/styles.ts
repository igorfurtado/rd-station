import styled from 'styled-components'

import { colors } from '@/app/styles/references'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${colors['primary-1']};
  padding-top: 5.25rem;
  transition: 0.3s all ease-out;

  @media (max-width: 520px) {
    padding-top: 4.5rem;
  }
`
