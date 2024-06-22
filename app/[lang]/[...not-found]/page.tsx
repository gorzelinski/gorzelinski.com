import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageProps } from '@/types'
import { getDictionary } from '@/scripts'

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { page } = await getDictionary(lang)

  return {
    title: page.notFound.metadata.title,
    description: page.notFound.metadata.description
  }
}

export default function CatchAllPage() {
  notFound()
}
