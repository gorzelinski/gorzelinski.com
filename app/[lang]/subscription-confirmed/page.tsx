import { Metadata } from 'next'
import { PageProps } from '@/types'
import { LINKS } from '@/constants'
import { getDictionary } from '@/scripts'
import { generateAlternateLinks } from '@/lib'
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
    }
  }
}

export default async function SubscriptionConfirmed({
  params: { lang }
}: PageProps) {
  const { page } = await getDictionary(lang)

  return (
    <Section variant="hero" justifyItems="start">
      <H1>{page.subscriptionConfirmed.heading}</H1>
      <P size="xl" color="subtle">
        {page.subscriptionConfirmed.description}
      </P>
      <Button>{page.subscriptionConfirmed.button}</Button>
    </Section>
  )
}
