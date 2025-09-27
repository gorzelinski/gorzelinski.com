import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next/server'
import { WebPage, WithContext } from 'schema-dts'
import { PageProps, Theme } from '@/types'
import { COOKIES, LINKS } from '@/constants'
import { getDictionary } from '@/scripts'
import { generateAlternateLinks, getMetaImage, localizePath } from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import { Confetti, H1, P, Section } from '@/design-system'

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params

  const { lang } = params

  const { layout, page } = await getDictionary(lang)
  const languages = generateAlternateLinks(LINKS.subscriptionConfirmed)
  const canonical = localizePath(LINKS.subscriptionConfirmed, lang)
  const metaImageParams = {
    theme: (await getCookie(COOKIES.theme, { cookies })) as Theme,
    title: page.subscriptionConfirmed.metadata.title,
    subtitle: layout.root.metadata.title,
    alt: page.subscriptionConfirmed.metadata.image.alt
  }

  return {
    title: page.subscriptionConfirmed.metadata.title,
    description: page.subscriptionConfirmed.metadata.description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      ...(await openGraph(lang)),
      title: page.subscriptionConfirmed.metadata.title,
      description: page.subscriptionConfirmed.metadata.description,
      images: getMetaImage('og', lang, metaImageParams)
    },
    twitter: {
      ...twitter(),
      title: page.subscriptionConfirmed.metadata.title,
      description: page.subscriptionConfirmed.metadata.description,
      images: getMetaImage('twitter', lang, metaImageParams)
    }
  }
}

export default async function SubscriptionConfirmed(props: PageProps) {
  const params = await props.params

  const { lang } = params

  const { layout, page, component } = await getDictionary(lang)
  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: lang,
    name: page.subscriptionConfirmed.metadata.title,
    description: page.subscriptionConfirmed.metadata.description,
    author: {
      '@type': 'Person',
      name: layout.root.metadata.author
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section variant="hero" justifyItems="start">
        <H1>{page.subscriptionConfirmed.heading}</H1>
        <P size="xl" color="subtle">
          {page.subscriptionConfirmed.description}
        </P>
        <Confetti
          start={component.confetti.start}
          stop={component.confetti.stop}
          more={component.confetti.more}
        />
      </Section>
    </>
  )
}
