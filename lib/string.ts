import { ReactNode } from 'react'

export function capitalize(string: string): string {
  return string[0].toUpperCase() + string.slice(1)
}

export function getTextFromChildren(children: ReactNode): string {
  let text = ''

  if (typeof children === 'string') {
    text += children
  }

  if (
    typeof children === 'object' &&
    children !== null &&
    'props' in children &&
    children.props &&
    typeof children.props === 'object' &&
    'children' in children.props
  ) {
    text += getTextFromChildren(children.props.children as ReactNode)
  }

  if (Array.isArray(children)) {
    children.forEach((child) => {
      text += getTextFromChildren(child)
    })
  }

  return text
}

export function slugify(string: string): string {
  return string
    .toLowerCase()
    .replace(/\u0142/g, 'l')
    .normalize('NFD')
    .replace(/\./g, ' ')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
