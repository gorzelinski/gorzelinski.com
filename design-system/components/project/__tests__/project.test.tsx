import { render, screen } from '@testing-library/react'
import { Project } from '../project'
import dictionary from '@/dictionaries/en.json'

describe('Project', () => {
  it('renders correctly', () => {
    render(
      <Project
        lang="en"
        dictionary={dictionary.component.project}
        slug="project/"
        image={{
          src: 'image.jpg',
          alt: 'Image alt'
        }}
        title="Title"
        description="Description"
        deliverables={['Deliverable 1', 'Deliverable 2']}
      />
    )

    const project = screen.getByRole('article')
    const image = screen.getByRole('img')
    const deliverables = screen.getByText('Deliverable 1, Deliverable 2')
    const description = screen.getByText('Description')
    const title = screen.getByRole('heading', { level: 3 })
    const button = screen.getByRole('link')

    expect(project).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(deliverables).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toHaveAttribute('href', `project/`)
  })
})
