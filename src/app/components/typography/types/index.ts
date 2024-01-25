import { CSSProperties } from 'react'

import { colors, fonts } from '@/app/styles/references'

export enum DefaultFonts {
  headingLg = 'headingLg',
  headingMd = 'headingMd',
  headingSm = 'headingSm',
  headingXs = 'headingXs',
  subtitleSm = 'subtitleSm',
  subtitleXs = 'subtitleXs',
  bodyLg = 'bodyLg',
  bodyMd = 'bodyMd',
  bodySm = 'bodySm'
}

export type FontStyle = {
  fontFamily: string
  fontSize: string
  lineHeight: string
  fontWeight: string
}

export type Color = keyof typeof colors
export type FontFamily = keyof typeof fonts.family

export type TypographyBaseProps = {
  color?: Color
  align?: CSSProperties['textAlign']
  mr?: CSSProperties['marginRight']
  ml?: CSSProperties['marginLeft']
  mt?: CSSProperties['marginTop']
  mb?: CSSProperties['marginBottom']
  opacity?: CSSProperties['opacity']
}
