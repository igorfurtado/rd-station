import { useCallback, useState } from 'react'

import Footer from '../footer'
import Header from '../header'
import FormView from './components/formView'
import { Container } from './styles'

export type SelectedView = 'formView' | 'cardView'

const MainContent = () => {
  const [currentView, setCurrentView] = useState<SelectedView>('formView')

  const handleCurrentView = useCallback((view: SelectedView) => {
    setCurrentView(view)
  }, [])

  return (
    <Container>
      <Header />
      <FormView
        show={currentView === 'formView'}
        handleCurrentView={handleCurrentView}
      />
      <Footer />
    </Container>
  )
}

export default MainContent
