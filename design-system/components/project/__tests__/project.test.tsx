import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import dictionary from '@/dictionaries/en.json'
import { Project } from '../project'
import { mockProject } from './project.mock'

describe('Project', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(
      <Project
        lang="en"
        frontmatter={mockProject}
        dictionary={dictionary.component.project}
      />
    )

    const project = screen.getByRole('article')
    const image = screen.getByRole('img')
    const deliverables = screen.getByText('Website, Brand Identity')
    const description = screen.getByText('Test project description')
    const title = screen.getByRole('heading', { level: 3 })
    const button = screen.getByRole('link')

    expect(project).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(deliverables).toBeInTheDocument()
    expect(title).toHaveTextContent('Test Project Title')
    expect(description).toBeInTheDocument()
    expect(button).toHaveAttribute('href', mockProject.slug)
  })
})
