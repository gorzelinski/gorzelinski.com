import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MetaImage } from '../meta-image'

describe('Meta image', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(
      <MetaImage theme="light" title="Meta title" subtitle="Meta subtitle" />
    )

    const logo = screen.getByRole('img')
    const title = screen.getByText('Meta title')
    const subtitle = screen.getByText('Meta subtitle')

    expect(logo).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })

  it('chooses correct colors for the light theme', () => {
    render(
      <MetaImage theme="light" title="Meta title" subtitle="Meta subtitle" />
    )

    const title = screen.getByText('Meta title')
    const subtitle = screen.getByText('Meta subtitle')
    const background = title.parentElement

    expect(title).toHaveStyle({
      color: 'hsl(208, 7%, 0%)'
    })
    expect(subtitle).toHaveStyle({
      color: 'hsl(208, 7%, 42%)'
    })
    expect(background).toHaveStyle({
      backgroundColor: 'hsl(208, 7%, 98%)'
    })
  })

  it('chooses correct colors for the dark theme', () => {
    render(
      <MetaImage theme="dark" title="Meta title" subtitle="Meta subtitle" />
    )

    const title = screen.getByText('Meta title')
    const subtitle = screen.getByText('Meta subtitle')
    const background = title.parentElement

    expect(title).toHaveStyle({
      color: 'hsl(208, 7%, 100%)'
    })
    expect(subtitle).toHaveStyle({
      color: 'hsl(208, 7%, 58%)'
    })
    expect(background).toHaveStyle({
      backgroundColor: 'hsl(208, 7%, 6%)'
    })
  })

  it('displays the background image if provided', () => {
    render(
      <MetaImage
        theme="light"
        title="Meta title"
        subtitle="Meta subtitle"
        backgroundURL="https://example.com/image.jpg"
      />
    )

    const background = screen.getByText('Meta title').parentElement
    const backgroundImage = background?.parentElement

    expect(background).toHaveStyle({
      background: 'hsl(208, 7%, 98%, .8)'
    })
    expect(backgroundImage).toHaveStyle({
      backgroundImage: 'url(https://example.com/image.jpg)'
    })
  })
})
