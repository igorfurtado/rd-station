import { useState } from 'react'

import FormView from './components/formView'
import { Container } from './styles'

export type SelectedView = 'formView' | 'cardView'

const MainContent = () => {
  const [currentView, setCurrentView] = useState<SelectedView>('formView')

  return (
    <Container>
      <FormView
        show={currentView === 'formView'}
        handleCurrentView={() => setCurrentView('cardView')}
      />

      {/* <CardView
        show={currentView === 'cardView'}
        handleCurrentView={() => setCurrentView('formView')}
      /> */}
    </Container>
  )
}

export default MainContent
