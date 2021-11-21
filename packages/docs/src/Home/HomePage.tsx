import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

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

export const HomePage = () => {
  const amplitudeRef = useRef<any>()

  useEffect(() => {
    if (typeof window?.navigator !== 'undefined') {
      const init = async () => {
        const amplitude = await import('amplitude-js')
        amplitude.init('2cd1c11ac9ebecba5cc30de1ef118e39', null, {
          includeReferrer: true,
          includeUtm: true,
          includeGclid: true,
        })
        amplitude.setUserProperties({
          is_debug: process.env.NODE_ENV !== 'production',
        })
        amplitude.setVersionName('Web')
        amplitude.logEvent('view_landing_page')

        amplitudeRef.current = amplitude.getInstance()
      }

      init()
    }
  }, [])

  return (
    <Container>
      <Header
        onEvent={() =>
          amplitudeRef.current?.logEvent('click_github_button', {
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
          amplitudeRef.current?.logEvent('click_author_link', {
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
