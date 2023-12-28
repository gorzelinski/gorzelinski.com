import { ButtonLink, H1 } from '@/components'
import { Locale } from '@/i18n.config'

export default function About({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
  return (
    <div>
      <H1>About page</H1>
      <ButtonLink style="text" href={lang === 'en' ? '/' : `/${lang}`}>
        Home {lang}
      </ButtonLink>
    </div>
  )
}
