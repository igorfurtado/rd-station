import styled from 'styled-components'

import { colors } from '@/app/styles/references'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  background-color: ${colors['primary-1']};
  gap: 2.75rem;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 11.875rem;

  img {
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1.5rem;

    div {
      &.row {
        display: flex;
        flex-direction: row;
        gap: 2.5rem;
      }
    }
  }
`

export const AdditionalInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  div {
    margin-left: 0.5rem;
  }

  span {
    &.underline {
      text-decoration: underline;
    }
  }
`
