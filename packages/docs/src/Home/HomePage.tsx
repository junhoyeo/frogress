import { useEffect } from 'react'
import styled from 'styled-components'

import { Analytics } from '../utils/Analytics'
import { Footer } from './Footer'
import { Header } from './Header'
import { AnimationSection } from './sections/AnimationSection'
import { ColorSection } from './sections/ColorSection'
import { DirectionSection } from './sections/DirectionSection'
import { LabelSection } from './sections/LabelSection'
import { ProgressSection } from './sections/ProgressSection'
import { RoundingSection } from './sections/RoundingSection'
import { SizingSection } from './sections/SizingSection'
import { StripeSection } from './sections/StripeSection'

Analytics.initialize()

export const HomePage = () => {
  useEffect(() => {
    Analytics.logEvent('view_landing_page', undefined)
  }, [])

  return (
    <Container>
      <Header
        onEvent={() =>
          Analytics.logEvent('click_github_button', {
            title: 'View on GitHub',
          })
        }
      />
      <ProgressSection />
      <ColorSection />
      <RoundingSection />
      <StripeSection />
      <SizingSection />
      <DirectionSection />
      <LabelSection />
      <AnimationSection />
      <Footer
        onEvent={() =>
          Analytics.logEvent('click_author_link', {
            title: 'Made by @junhoyeo',
          })
        }
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
