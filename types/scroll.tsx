export type ScrollProgressSelector = 'article' | 'html'
export type ScrollDirection = 'up' | 'down'
export type ScrollState = {
  direction: ScrollDirection
  progress: number
}
export type ScrollContextValue = {
  direction: ScrollDirection
  progress: Record<ScrollProgressSelector, number>
}
