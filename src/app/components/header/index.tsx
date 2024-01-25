import Image from 'next/image'

import logo from '../../../../public/logo-with-description.svg'
import Typography from '../typography'
import { Container, StyledImage } from './styles'

const Header = () => {
  return (
    <Container>
      <StyledImage
        priority
        as={Image}
        src={logo}
        alt='Resultados Digitais'
        width={147}
        height={36}
      />
      <Typography type='headingXs' role='b'>
        Gerador de Cartão de Visita
      </Typography>
    </Container>
  )
}

export default Header
