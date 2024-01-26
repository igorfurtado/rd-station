import styled, { css } from 'styled-components'

import { colors, fonts } from '@/app/styles/references'

export const Container = styled.div<{
  disabled?: boolean
}>`
  display: flex;
  flex-direction: column;
  width: 100%;

  transition: 0.3s all ease-out;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        transform: scale(1.02);
      }
    `}
`

export const StyledButton = styled.button`
  position: relative;
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${colors.secondary};
  padding: 0.75rem 1.5rem;
  border: 1px solid ${colors['primary+1']};
  font-family: ${fonts.family.Nunito_Sans};
  text-align: center;
  font-size: 1rem;
  font-weight: 800;
  line-height: 150%;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  white-space: nowrap;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: unset;
      background-color: #e1e4e8;
      border: 1px solid #e1e4e8;
      color: #97a1ac;
    `}
`

export const Border = styled.div<{
  disabled?: boolean
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4px;
  background-color: transparent;
  z-index: 5;
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};

  div {
    z-index: 10;
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: ${({ disabled }) =>
        disabled ? '#97A1AC' : colors.dark};
    }

    &:before {
      left: 0;
      margin-left: 5px;
      transform: skewX(45deg);
      transform-origin: bottom left;
    }

    &:after {
      right: 0;
      margin-right: 5px;
      transform: skewX(-45deg);
      transform-origin: bottom right;
    }
  }
`
