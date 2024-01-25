import { ReactNode } from 'react'

import { fontsReferences } from '../../styles/references'
import { BaseText } from './styles'
import { DefaultFonts, TypographyBaseProps } from './types'

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
    <BaseText as={role} style={defaultStyles} {...rest}>
      {children}
    </BaseText>
  )
}

export default Typography
