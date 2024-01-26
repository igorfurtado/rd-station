import styled from 'styled-components'

import { colors, fonts } from '@/app/styles/references'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`

export const StyledInput = styled.input`
  display: flex;
  width: 100%;
  height: 2.25rem;
  padding: 0.5rem 0.75rem;
  align-items: center;
  justify-content: center;
  background-color: ${colors.light};
  font-family: ${fonts.family.Nunito_Sans};
  font-weight: 400;
  line-height: 140%;
  font-size: 14px;
  color: #636e7c;
  border: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${colors.secondary};
  }
`

export const Label = styled.label`
  font-family: ${fonts.family.Nunito_Sans};
  font-weight: 700;
  line-height: 100%;
  font-size: 14px;
  color: ${colors.light};
  white-space: nowrap;
`
