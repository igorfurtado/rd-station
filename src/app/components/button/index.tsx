import { ElementType } from 'react'

import { Border, Container, StyledButton } from './styles'

type ButtonProps = {
  title: string
  disabled?: boolean
  iconBefore?: ElementType | null
  iconAfter?: ElementType | null
}

const Button = ({
  title,
  disabled,
  iconBefore: IconBefore,
  iconAfter: IconAfter
}: ButtonProps) => {
  return (
    <Container disabled={disabled}>
      <StyledButton disabled={disabled}>
        {IconBefore && <IconBefore />}
        {title}
        {IconAfter && <IconAfter />}
      </StyledButton>
      <Border disabled={disabled}>
        <div />
      </Border>
    </Container>
  )
}

export default Button
