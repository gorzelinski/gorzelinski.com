import type { Post } from '@/types'
import type { StaticImageData } from 'next/image'

export const mockPost: Post = {
  slug: 'test-post',
  title: 'Test Post Title',
  description: 'Test post description',
  date: new Date('2024-01-01'),
  updated: new Date('2024-01-15'),
  readingTime: {
    minutes: 5,
    text: '5 min read',
    time: 300000,
    words: 1000
  },
  image: {
    src: 'test-image.png',
    alt: 'Test image',
    caption: 'Test image caption'
  },
  categories: ['Technology'],
  tags: ['testing', 'react'],
  type: 'post'
}

export const mockAvatar: StaticImageData = {
  src: '/_next/static/media/logo.691d1d29.png',
  height: 512,
  width: 512,
  blurDataURL:
    '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.691d1d29.png&w=8&q=70',
  blurWidth: 8,
  blurHeight: 8
}
