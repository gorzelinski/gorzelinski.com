import type { Metadata } from 'next'
import { PageProps } from '@/types'
import { LINKS } from '@/constants'
import { Locale, i18n } from '@/i18n.config'
import { setInitialTheme } from '@/lib'
import { getDictionary } from '@/scripts'
import { montserrat, lora, firaCode } from '@/theme/fonts'
import { Background, Footer, Main, Navbar } from '@/design-system'
import './globals.css'

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { layout } = await getDictionary(lang)

  return {
    metadataBase: new URL(LINKS.siteUrl),
    title: {
      template: `%s | ${layout.root.metadata.title}`,
      default: layout.root.metadata.title
    }
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const { lang } = params
  const dictionary = await getDictionary(lang)

  return (
    <html
      suppressHydrationWarning
      className={`${montserrat.variable} ${lora.variable} ${firaCode.variable}`}
      lang={lang}
    >
      <body>
        <script
          key="set-initial-theme"
          dangerouslySetInnerHTML={{
            __html: setInitialTheme
          }}
        ></script>
        <Background>
          <Navbar lang={lang} dictionary={dictionary} />
          <Main>{children}</Main>
          <Footer lang={lang} dictionary={dictionary} />
        </Background>
      </body>
    </html>
  )
}
