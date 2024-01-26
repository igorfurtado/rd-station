import { useState } from 'react'

import Footer from '../footer'
import Header from '../header'
import FormView from './components/formView'
import { Container } from './styles'

export type SelectedView = 'formView' | 'cardView'

const MainContent = () => {
  const [currentView, setCurrentView] = useState<SelectedView>('formView')

  return (
    <Container>
      <Header />
      <FormView
        show={currentView === 'formView'}
        handleCurrentView={() => setCurrentView('cardView')}
      />
      <Footer />
    </Container>
  )
}

export default MainContent
