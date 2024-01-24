import React from 'react'

export type FeaturedProps = {
  children: React.ReactNode
  heading: string
  link: {
    href: string
    text: string
  }
}
