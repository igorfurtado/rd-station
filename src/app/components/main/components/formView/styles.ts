import styled from 'styled-components'

import { colors } from '@/app/styles/references'

export const Container = styled.section<{
  $show: boolean
}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  background-color: ${colors['primary-1']};
  gap: 2.75rem;

  div {
    &.wrapper {
      gap: 2rem;
      display: flex;
      width: 100%;
      flex-direction: column;

      @media (max-width: 1100px) {
        gap: ${({ $show }) => ($show ? '2rem' : '0')};
      }
    }
  }

  @media (max-width: 1440px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 1100px) {
    justify-content: ${({ $show }) => ($show ? 'center' : 'flex-start')};
  }

  @media (max-width: 480px) {
    padding: ${({ $show }) => ($show ? '3.375rem 1.5rem' : '2.25rem 1.5rem')};
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h1 {
    @media (max-width: 700px) {
      font-size: 1.8rem;
    }

    @media (max-width: 580px) {
      font-size: 1.5rem;
    }

    @media (max-width: 370px) {
      font-size: 1.25rem;
    }
  }

  p {
    @media (max-width: 700px) {
      font-size: 1rem;
    }

    @media (max-width: 370px) {
      font-size: 0.875rem;
    }
  }
`

export const Content = styled.div<{
  $show: boolean
}>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 11.875rem;

  > img {
    max-width: 471px;
    max-height: 347px;

    @media (max-width: 1440px) {
      max-width: 400px;
      max-height: 232px;
    }

    @media (max-width: 1100px) {
      display: ${({ $show }) => ($show ? 'flex' : 'none')};
    }

    @media (max-width: 580px) {
      max-width: 268px;
      max-height: 198px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 1.5rem;

    div {
      &.row {
        display: flex;
        flex-direction: row;
        gap: 2.5rem;

        @media (max-width: 1100px) {
          flex-direction: column;
          gap: 1.5rem;
        }
      }
    }

    @media (max-width: 1100px) {
      justify-content: flex-start;
    }
  }

  @media (max-width: 1440px) {
    gap: 8rem;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 3rem;
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

export const TransitionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 24.8rem;
  overflow: hidden;
  gap: 1.5rem;

  @media (max-width: 1100px) {
    max-height: 35rem;
  }
`
