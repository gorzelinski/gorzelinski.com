import type { Project } from '@/types'

export const mockProject: Project = {
  slug: 'test-project',
  title: 'Test Project Title',
  description: 'Test project description',
  date: new Date('2024-01-01'),
  updated: new Date('2024-01-15'),
  readingTime: {
    minutes: 3,
    text: '3 min read',
    time: 180000,
    words: 600
  },
  image: {
    src: 'test-project-image.jpg',
    alt: 'Test project image',
    caption: 'Test project caption'
  },
  client: 'Test Client',
  services: ['Design', 'Development'],
  deliverables: ['Website', 'Brand Identity'],
  links: [{ text: 'View Project', href: 'https://example.com' }],
  type: 'project'
}
