import styled from 'styled-components'

import { colors, fonts } from '@/app/styles/references'

import { TypographyBaseProps } from './types'

export const BaseText = styled.span<TypographyBaseProps>`
  font-family: ${({ $family }) =>
    $family ? fonts.family[$family] : fonts.family.Nunito_Sans};
  font-weight: ${({ $weight }) => $weight || '400'};
  line-height: ${({ $lineheight }) => $lineheight || '110%'};
  font-size: ${({ $size }) => $size || '1rem'};
  color: ${({ color }) => (color ? colors[color] : colors.dark)};
  text-align: ${({ $align }) => $align || 'initial'};
  margin-top: ${({ $mt }) => $mt || 0};
  margin-right: ${({ $mr }) => $mr || 0};
  margin-bottom: ${({ $mb }) => $mb || 0};
  margin-left: ${({ $ml }) => $ml || 0};
  opacity: ${({ $opacity }) => $opacity || 1};
  text-decoration: ${({ $decoration }) => $decoration || 'initial'};
`
