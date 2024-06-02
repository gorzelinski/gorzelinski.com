import type { Metadata } from 'next'
import { PageProps } from '@/types'
import { HANDLES, LINKS } from '@/constants'
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
  const locale = new Intl.Locale(lang, { region: i18n.region[lang] })

  return {
    title: {
      template: `%s | ${layout.root.metadata.title}`,
      default: layout.root.metadata.title
    },
    generator: 'Next.js',
    applicationName: 'gorzelinski.com',
    authors: {
      name: layout.root.metadata.title,
      url: LINKS.siteUrl
    },
    creator: layout.root.metadata.title,
    publisher: layout.root.metadata.title,
    metadataBase: new URL(LINKS.siteUrl),
    openGraph: {
      locale: locale.baseName.replace('-', '_'),
      siteName: layout.root.metadata.title
    },
    twitter: {
      card: 'summary_large_image',
      site: `@${HANDLES.twitter}`,
      creator: `@${HANDLES.twitter}`
    },
    appleWebApp: {
      title: layout.root.metadata.title,
      statusBarStyle: 'black',
      capable: true,
      startupImage: '/public/images/logo.png'
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
