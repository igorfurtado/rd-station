import { InputHTMLAttributes } from 'react'

import { Container, Label, StyledInput } from './styles'

type InputProps = {
  label: string
  required?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, required, ...props }: InputProps) => {
  return (
    <Container>
      <Label htmlFor={label}>{`${label} ${required ? '*' : ''}`}</Label>
      <StyledInput id={label} required={required} {...props} />
    </Container>
  )
}

export default Input
