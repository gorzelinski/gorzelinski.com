export type ScrollProgressSelector = 'article' | 'html'
export type ScrollDirection = 'up' | 'down'
export type ScrollState = {
  direction: ScrollDirection
  progress: number
}
