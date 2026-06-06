import type { ScrollDirection, ScrollProgressSelector } from '@/types'

export function getScrollDirection(
  currentScrollY: number,
  lastScrollY: number
): ScrollDirection {
  return currentScrollY > lastScrollY ? 'down' : 'up'
}

export function getScrollProgress(selector: ScrollProgressSelector) {
  const root = document.documentElement
  const element = document.querySelector(selector)

  if (!element) return 0

  const scrollableHeight = element.scrollHeight - window.innerHeight
  const currentScrollY = root.scrollTop - element.offsetTop
  const progress = (currentScrollY / scrollableHeight) * 100

  if (progress < 0) return 0
  if (progress > 100) return 100
  return progress
}
