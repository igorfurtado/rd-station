import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'

import { HtmlEvent } from '@/app/shared/html-event'
import { zodResolver } from '@hookform/resolvers/zod'

import { SelectedView } from '../../..'

export type FormType = {
  name: string
  email: string
  phone: string
}

type FormHook = {
  handleCurrentView: (view: SelectedView) => void
}

const defaultValues = {
  name: '',
  email: '',
  phone: ''
}

const useFormView = ({ handleCurrentView }: FormHook) => {
  const [formData, setFormData] = useState<FormType>(defaultValues)

  const dataSchema = z.object({
    name: z.string().nonempty('Informe o nome'),
    email: z
      .string()
      .nonempty('Informe um e-mail')
      .refine(
        email => {
          if (!email) return true
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          return emailRegex.test(email)
        },
        { message: 'Insira um e-mail válido' }
      ),
    phone: z
      .string()
      .nonempty('Informe o telefone')
      .refine(
        phone => {
          if (!phone) return true
          const phoneRegex =
            /^(?:(?:\+?55\s?)?(?:\(?\d{2}\)?\s?)?)?(?:9\d{4}|\d{4})[-\s]?\d{4}$/
          return phoneRegex.test(phone)
        },
        { message: 'Insira um telefone válido' }
      )
  })

  const methods = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(dataSchema)
  })

  const { control, handleSubmit, reset } = methods

  const onSubmit = (data: FormType, event: HtmlEvent) => {
    event!.preventDefault()
    setFormData(data)
    handleCurrentView('cardView')
  }

  const clearForm = () => reset()

  return { formData, control, clearForm, handleSubmit, onSubmit }
}

export default useFormView
