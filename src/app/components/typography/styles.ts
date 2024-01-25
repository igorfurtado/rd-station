import styled from 'styled-components'

import { colors } from '@/app/styles/references'

import { TypographyBaseProps } from './types'

export const BaseText = styled.span<TypographyBaseProps>`
  color: ${({ color }) => (color ? colors[color] : colors.dark)};
  text-align: ${({ align }) => align || 'left'};
  margin-top: ${({ mt }) => mt || 0};
  margin-right: ${({ mr }) => mr || 0};
  margin-bottom: ${({ mb }) => mb || 0};
  margin-left: ${({ ml }) => ml || 0};
  opacity: ${({ opacity }) => opacity || 1};
`
