import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { ProjectHeader } from '../project-header'
import { mockProject } from './project.mock'
import dictionary from '@/dictionaries/en.json'

describe('ProjectHeader', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(
      <ProjectHeader
        slug={mockProject.slug}
        frontmatter={mockProject}
        dictionary={dictionary.component.project}
      />
    )

    const header = screen.getByRole('banner')
    const image = screen.getByRole('img')
    const title = screen.getByRole('heading', { level: 1 })
    const description = screen.getByText('Test project description')
    const servicesLabel = screen.getByText('Services')
    const services = screen.getByRole('heading', {
      level: 2,
      name: 'Design, Development'
    })
    const clientLabel = screen.getByText('Client')
    const client = screen.getByRole('heading', { level: 2, name: 'Test Client' })
    const deliverablesLabel = screen.getByText('Deliverables')
    const deliverables = screen.getByRole('heading', {
      level: 2,
      name: 'Website, Brand Identity'
    })
    const linksLabel = screen.getByText('Links')
    const link = screen.getByRole('link', { name: 'View Project' })

    expect(header).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'Test project image')
    expect(image).toHaveAttribute('src', expect.stringContaining('test-project-image.jpg'))
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Test Project Title')
    expect(description).toBeInTheDocument()
    expect(servicesLabel).toBeInTheDocument()
    expect(services).toBeInTheDocument()
    expect(clientLabel).toBeInTheDocument()
    expect(client).toBeInTheDocument()
    expect(deliverablesLabel).toBeInTheDocument()
    expect(deliverables).toBeInTheDocument()
    expect(linksLabel).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
