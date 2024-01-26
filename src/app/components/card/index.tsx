import Image from 'next/image'

import { AnimatePresence, motion } from 'framer-motion'

import logo from '../../../../public/logo.svg'
import Button from '../button'
import DownLoad from '../icons/download'
import ReturnArrow from '../icons/return-arrow'
import Typography from '../typography'
import { Container, Content } from './styles'

type CardProps = {
  show: boolean
}

const Card = ({ show }: CardProps) => {
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
            transition: { duration: 2, delay: 0.2 }
          }}
          exit={{
            opacity: 0,
            x: '1000px',
            transition: { duration: 2, ease: [0.4, 0.0, 0.2, 1.0] }
          }}
        >
          <button>
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
                Nome e Sobrenome
              </Typography>
              <Typography type='bodySm' $size='20px'>
                (00) 00000-0000
              </Typography>
              <Typography type='bodySm' $size='20px'>
                meuemail@email.com
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
