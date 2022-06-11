const isBrowser = typeof window !== 'undefined'
const AMPLITUDE_API_KEY = '2cd1c11ac9ebecba5cc30de1ef118e39'

const getAmplitude = async () => {
  if (isBrowser) {
    const amplitude = await import('amplitude-js')
    return amplitude.default.getInstance()
  }
  return null
}

const initialize = async () => {
  const amplitude = await getAmplitude()
  if (!amplitude) {
    return
  }
  amplitude.init(AMPLITUDE_API_KEY)
  amplitude.setUserProperties({
    is_debug: process.env.NODE_ENV !== 'production',
  })
  amplitude.setVersionName('Web')
}

type AnalyticsEvent = {
  view_landing_page: undefined
  click_github_button: {
    title: string
  }
  click_author_link: {
    title: string
  }
}

async function logEvent<TName extends keyof AnalyticsEvent>(
  name: TName,
  properties: AnalyticsEvent[TName],
) {
  const eventProperties = {
    referrer: document.referrer || undefined,
    ...(properties as unknown as object),
  }
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Analytics]', name, eventProperties)
  }
  const amplitude = await getAmplitude()
  amplitude?.logEvent(name, eventProperties)
}

export const Analytics = {
  initialize,
  getAmplitude,
  logEvent,
}
