import React from 'react';
import { Container } from './components/styles/app.styles'
import { Header } from './components/Header'
import { SubHeader } from './components/SubHeader'
import FrequencyModal from './components/FrequencyModal'
import LowerLimitModal from './components/LowerLimitModal'
import UpperLimitModal from './components/UpperLimitModal'

const App = () => {



    return (
        <Container>
            {/* Header content */}
            <Header />
            {/* SubHeader content */}
            <SubHeader />
            <FrequencyModal />
            <LowerLimitModal />
            <UpperLimitModal />
            {/* Dashboard content */}
            
        </Container>

    )
}

export default App