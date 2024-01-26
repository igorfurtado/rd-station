import styled from 'styled-components'

import { colors } from '@/app/styles/references'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  gap: 1rem;
  flex-shrink: 0;
  padding: 1.5rem;
  background-color: ${colors['light+1']};

  span {
    color: #636e7c;
    white-space: nowrap;

    @media (max-width: 375px) {
      font-size: 0.75rem;
    }
  }
`
