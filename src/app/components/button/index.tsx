import { Border, Container, StyledButton } from './styles'

type ButtonProps = {
  title: string
  disabled?: boolean
}

const Button = ({ title, disabled }: ButtonProps) => {
  return (
    <Container disabled={disabled}>
      <StyledButton disabled={disabled}>{title}</StyledButton>
      <Border disabled={disabled}>
        <div />
      </Border>
    </Container>
  )
}

export default Button
