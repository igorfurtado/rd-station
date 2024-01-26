import styled from 'styled-components'

import { colors } from '@/app/styles/references'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 31.875rem;
  height: 100%;
  overflow: hidden;
  flex: 1;
  gap: 1rem;

  > button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  div {
    &.textWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }

    &.centerText {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.imageWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    &.divisor {
      background-color: #d8d9fd;
      width: 0.1875rem;
      height: 100%;
      display: flex;
    }
  }
`

export const Content = styled.div`
  display: flex;
  height: 15.4375rem;
  width: 31.875rem;
  gap: 1.25rem;
  background-color: ${colors.light};
  border-radius: 1.5rem;
  padding: 2rem 4.5rem;
`
