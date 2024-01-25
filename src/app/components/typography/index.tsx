import { ReactNode } from 'react'

import { fontsReferences } from '../../styles/references'
import { BaseText } from './styles'
import { DefaultFonts, FontFamily, TypographyBaseProps } from './types'

type TypographyProps = {
  type: keyof typeof DefaultFonts
  children: ReactNode
  mobile?: boolean
  role?: keyof JSX.IntrinsicElements
} & TypographyBaseProps

const Typography = ({
  type,
  mobile = false,
  role = 'span',
  children,
  ...rest
}: TypographyProps) => {
  const defaultStyles = fontsReferences({ type, mobile })

  return (
    <BaseText
      as={role}
      $family={defaultStyles.fontFamily as FontFamily}
      $size={defaultStyles.fontSize}
      $lineheight={defaultStyles.lineHeight}
      $weight={defaultStyles.fontWeight}
      {...rest}
    >
      {children}
    </BaseText>
  )
}

export default Typography
