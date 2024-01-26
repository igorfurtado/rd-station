import { AnimatePresence, motion } from 'framer-motion'

import { Container } from './styles'

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
            transition: { duration: 2, delay: 0.4 }
          }}
          exit={{
            opacity: 0,
            x: '1000px',
            transition: { duration: 2, ease: [0.4, 0.0, 0.2, 1.0] }
          }}
        >
          {/* <Typography>Gerar outro cartão</Typography> */}
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Card
