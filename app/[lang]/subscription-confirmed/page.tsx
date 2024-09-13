import { Metadata } from 'next'
import { WebPage, WithContext } from 'schema-dts'
import { PageProps } from '@/types'
import { LINKS } from '@/constants'
import { getDictionary } from '@/scripts'
import { generateAlternateLinks } from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import { Button, H1, P, Section } from '@/design-system'

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { page } = await getDictionary(lang)
  const languages = generateAlternateLinks(LINKS.subscriptionConfirmed)

  return {
    title: page.subscriptionConfirmed.metadata.title,
    description: page.subscriptionConfirmed.metadata.description,
    alternates: {
      canonical: LINKS.subscriptionConfirmed,
      languages
    },
    openGraph: {
      ...(await openGraph(lang)),
      title: page.subscriptionConfirmed.metadata.title,
      description: page.subscriptionConfirmed.metadata.description
    },
    twitter: {
      ...twitter(),
      title: page.subscriptionConfirmed.metadata.title,
      description: page.subscriptionConfirmed.metadata.description
    }
  }
}

export default async function SubscriptionConfirmed({
  params: { lang }
}: PageProps) {
  const { layout, page } = await getDictionary(lang)
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
        <Button>{page.subscriptionConfirmed.button}</Button>
      </Section>
    </>
  )
}
