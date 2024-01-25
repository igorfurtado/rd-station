import styled from 'styled-components'

import { colors } from '@/app/styles/references'

export const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5.25rem;
  max-height: 5.25rem;
  background-color: ${colors.light};
  padding: 1.5rem 5rem 1.5rem 5rem;
  gap: 1rem;

  @media (max-width: 780px) {
    padding: 1.5rem;
  }

  @media (max-width: 520px) {
    height: 4.5rem;

    b {
      font-size: 1.125rem;
    }
  }

  @media (max-width: 375px) {
    b {
      font-size: 1rem;
    }
  }

  @media (max-width: 340px) {
    b {
      font-size: 0.875rem;
    }
  }
`

export const StyledImage = styled.img`
  @media (max-width: 520px) {
    width: 6.25rem;
    height: 1.5rem;
  }
`
