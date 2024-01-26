import styled from 'styled-components'

import { colors } from '@/app/styles/references'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50px;
  height: 50px;
  background-color: ${colors.light};
`
