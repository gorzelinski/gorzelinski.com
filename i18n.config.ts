export interface I18nConfig {
  defaultLocale: 'en'
  locales: ['en', 'pl']
}

export type Locale = I18nConfig['locales'][number]

export const i18n: I18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'pl']
}
