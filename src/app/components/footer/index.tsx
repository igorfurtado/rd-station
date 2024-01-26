import Typography from '../typography'
import { Container } from './styles'

const Footer = () => {
  return (
    <Container>
      <Typography type='bodySm' $decoration='underline'>
        Política de Privacidade
      </Typography>
      <Typography type='bodySm'>© 2023 Resultados Digitais</Typography>
    </Container>
  )
}

export default Footer
