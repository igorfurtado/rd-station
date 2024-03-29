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
  $family?: FontFamily
  $weight?: string
  $lineheight?: string
  $size?: string
  color?: Color
  $align?: CSSProperties['textAlign']
  $decoration?: CSSProperties['textDecoration']
  $transform?: CSSProperties['textTransform']
  $mr?: CSSProperties['marginRight']
  $ml?: CSSProperties['marginLeft']
  $mt?: CSSProperties['marginTop']
  $mb?: CSSProperties['marginBottom']
  $opacity?: CSSProperties['opacity']
}
