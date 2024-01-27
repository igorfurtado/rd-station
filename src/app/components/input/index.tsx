import { InputHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'

import { phoneMask } from '@/app/utils/phone-mask'

import { FormType } from '../main/components/formView/hooks/use-form-view'
import Typography from '../typography'
import { Container, Label, StyledInput } from './styles'

type InputProps = {
  name: 'name' | 'email' | 'phone'
  $control: Control<FormType, any>
  label: string
  required?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ name, label, $control, required, ...props }: InputProps) => {
  return (
    <Container>
      <Label htmlFor={label}>{`${label} ${required ? '*' : ''}`}</Label>
      <Controller
        name={name}
        control={$control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <StyledInput
              id={label}
              value={value}
              required={required}
              {...props}
              onChange={e => {
                name === 'phone' ? onChange(phoneMask(e.target.value)) : onChange(e.target.value)
              }}
            />
            <Typography type='subtitleXs' color='secondary' $size='12px'>
              {error?.message}
            </Typography>
          </>
        )}
      ></Controller>
    </Container>
  )
}

export default Input
