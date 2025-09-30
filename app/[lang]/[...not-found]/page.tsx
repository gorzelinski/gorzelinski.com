import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageProps } from '@/types'
import { getDictionary } from '@/scripts'

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { lang } = await props.params
  const { page } = await getDictionary(lang)

  return {
    title: page.notFound.metadata.title,
    description: page.notFound.metadata.description
  }
}

export default function CatchAllPage() {
  notFound()
}
