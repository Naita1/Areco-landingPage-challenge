import { SiteHeader } from './components/landing/site-header'
import { Hero } from './components/landing/hero'
import { Problem } from './components/landing/problem'
import { ValueProps } from './components/landing/value-props'
import { HowItWorks } from './components/landing/how-it-works'
import { Features } from './components/landing/features'
import { Showcase } from './components/landing/showcase'
import { Differentiators } from './components/landing/differentiators'
import { FinalCta } from './components/landing/final-cta'
import { SiteFooter } from './components/landing/site-footer'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <ValueProps />
        <HowItWorks />
        <Features />
        <Showcase />
        <Differentiators />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}

export default App