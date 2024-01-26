import Image from 'next/image'

import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Button from '@/app/components/button'
import Card from '@/app/components/card'
import Arrow from '@/app/components/icons/arrow'
import Input from '@/app/components/input'
import Typography from '@/app/components/typography'
import { phoneMask } from '@/app/utils/phone-mask'

import { SelectedView } from '../..'
import image from '../../../../../../public/img.svg'
import {
  AdditionalInformation,
  Container,
  Content,
  Description,
  TransitionBox
} from './styles'

type FormViewProps = {
  show: boolean
  handleCurrentView: (view: SelectedView) => void
}

const FormView = ({ show, handleCurrentView }: FormViewProps) => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  return (
    <Container>
      <div className='wrapper'>
        <Description
          as={motion.div}
          key='description'
          initial={{
            opacity: 1,
            marginTop: show ? 0 : '-100px'
          }}
          animate={{
            opacity: show ? 1 : 0,
            marginTop: show ? 0 : '-100px',
            transition: { duration: 0.35 }
          }}
          exit={{
            opacity: 0,
            marginTop: '-100px',
            transition: { duration: 0.35 }
          }}
        >
          <Typography
            type='headingMd'
            role='h1'
            color='light'
            $weight='700'
            $family='Red_Hat_Display'
          >
            Gerador de Cartão de Visita
          </Typography>
          <Typography
            type='subtitleXs'
            role='p'
            color='light'
            $align='center'
            $size='20px'
          >
            Crie grátis seu cartão de visita em passos rápidos! Você o insere no{' '}
            <br />
            Instagram e demais canais digitais.
          </Typography>
        </Description>

        <Content>
          <Image
            priority
            src={image}
            alt='Landing Page Image'
            width={471}
            height={347}
          />
          <TransitionBox>
            <AnimatePresence>
              {show ? (
                <motion.form
                  onSubmit={event => {
                    event.preventDefault()
                    handleCurrentView('cardView')
                  }}
                  key='form'
                  initial={{
                    opacity: 1,
                    x: 0
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 1 }
                  }}
                  exit={{
                    opacity: 0,
                    x: '1000px',
                    transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1.0] }
                  }}
                >
                  <Input
                    label='Nome'
                    placeholder='Seu Nome'
                    required
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                  <div className='row'>
                    <Input
                      label='Telefone'
                      placeholder='(00) 00000-0000'
                      required
                      value={phone}
                      onChange={event =>
                        setPhone(phoneMask(event.target.value))
                      }
                      type='tel'
                      maxLength={15}
                    />

                    <Input
                      label='E-mail'
                      placeholder='nome@email.com'
                      required
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                      type='email'
                    />
                  </div>

                  <AdditionalInformation>
                    <div>
                      <Typography
                        type='subtitleXs'
                        color='light'
                        $size='12px'
                        $lineheight='150%'
                      >
                        • Ao preencher o formulário, concordo * em receber
                        comunicações de acordo com meus interesses.
                      </Typography>
                      <br />
                      <Typography
                        type='subtitleXs'
                        color='light'
                        $size='12px'
                        $lineheight='150%'
                      >
                        • Ao informar meus dados, eu concordo com a{' '}
                        <span className='underline'>
                          Política de privacidade.
                        </span>
                      </Typography>
                    </div>

                    <Typography
                      type='subtitleXs'
                      color='light'
                      $size='12px'
                      $lineheight='150%'
                    >
                      * Você pode alterar suas permissões de comunicação a
                      qualquer tempo.
                    </Typography>
                  </AdditionalInformation>

                  <Button title='Gerar cartão grátis' iconAfter={Arrow} />
                </motion.form>
              ) : (
                <Card show={show} />
              )}
            </AnimatePresence>
          </TransitionBox>
        </Content>
      </div>
    </Container>
  )
}

export default FormView
