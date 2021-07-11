import React from 'react'
import styled from 'styled-components'

import { Footer } from './Footer'
import { Header } from './Header'
import { ColorSection } from './sections/ColorSection'
import { DirectionSection } from './sections/DirectionSection'
import { LabelSection } from './sections/LabelSection'
import { ProgressSection } from './sections/ProgressSection'
import { RoundingSection } from './sections/RoundingSection'
import { SizingSection } from './sections/SizingSection'
import { StripeSection } from './sections/StripeSection'

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <ProgressSection />
      <ColorSection />
      <RoundingSection />
      <StripeSection />
      <SizingSection />
      <DirectionSection />
      <LabelSection />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
