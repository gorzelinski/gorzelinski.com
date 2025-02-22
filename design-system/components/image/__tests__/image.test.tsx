import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Image } from '../image'

describe('Image', () => {
  it('renders correctly', () => {
    render(
      <Image
        width={300}
        height={300}
        quality={80}
        borderRadius="rounded"
        alt="Alt text"
        src="/public/images/image.png"
      />
    )

    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('width', '300')
    expect(image).toHaveAttribute('height', '300')
    expect(image).toHaveClass('rounded_l')
    expect(image).toHaveAttribute('alt', 'Alt text')
    expect(image).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fpublic%2Fimages%2Fimage.png&w=640&q=80'
    )
  })
})
