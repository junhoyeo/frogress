import Head from 'next/head'
import React from 'react'

import { GlobalStyle } from '../components/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❄️</text></svg>" />
        <title>Frogress</title>
        <meta name="description" content="❄️ The ultimate Line Progress Bar UI for React" />
        <meta property="og:title" content="Frogress" />
        <meta property="og:description" content="❄️ The ultimate Line Progress Bar UI for React" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
