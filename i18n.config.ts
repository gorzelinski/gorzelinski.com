export interface I18nConfig {
  defaultLocale: 'en'
  locales: ['en', 'pl']
  regions: ['US', 'PL']
  region: Record<Locale, Region>
}

export type Locale = I18nConfig['locales'][number]
export type Region = I18nConfig['regions'][number]

export const i18n: I18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'pl'],
  regions: ['US', 'PL'],
  region: {
    en: 'US',
    pl: 'PL'
  }
}
