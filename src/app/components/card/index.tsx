import Image from 'next/image'

import { AnimatePresence, motion } from 'framer-motion'

import logo from '../../../../public/logo.svg'
import Button from '../button'
import DownLoad from '../icons/download'
import ReturnArrow from '../icons/return-arrow'
import { FormType } from '../main/components/formView/hooks/use-form-view'
import Typography from '../typography'
import { Container, Content } from './styles'

type CardProps = {
  formData: FormType
  show: boolean
  onClick: () => void
}

const Card = ({ formData, show, onClick }: CardProps) => {
  return (
    <AnimatePresence>
      {!show && (
        <Container
          as={motion.div}
          key='card'
          initial={{
            opacity: 0,
            x: '1000px'
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.8, delay: 0.2 }
          }}
          exit={{
            opacity: 0,
            x: '1000px',
            transition: { duration: 1.8, ease: [0.4, 0.0, 0.2, 1.0] }
          }}
        >
          <button onClick={onClick}>
            <ReturnArrow />
            <Typography type='bodyLg' color='light' $ml='8px'>
              Gerar outro cartão
            </Typography>
          </button>
          <Content>
            <div className='imageWrapper'>
              <Image src={logo} alt='Logo' width={70} height={60} />
            </div>
            <div className='divisor' />
            <div className='textWrapper'>
              <Typography type='bodySm' $size='20px'>
                {formData.name}
              </Typography>
              <Typography type='bodySm' $size='20px'>
                {formData.phone}
              </Typography>
              <Typography type='bodySm' $size='20px'>
                {formData.email}
              </Typography>
            </div>
          </Content>
          <Button title='Baixar Cartão' iconBefore={DownLoad} disabled />
          <div className='centerText'>
            <Typography
              type='bodyLg'
              $align='center'
              color='light'
              $size='16px'
              $weight='800'
              $transform='uppercase'
            >
              Fazer um teste grátis do RD Station Marketing
            </Typography>
          </div>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Card
