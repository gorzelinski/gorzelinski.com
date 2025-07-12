import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { setCookie, hasCookie } from 'cookies-next'
import { renderHook, act } from '@testing-library/react'
import { getThemeAttribute, setThemeAttribute } from '@/lib'
import { useTheme } from '../use-theme'

const COOKIE_OPTIONS = { sameSite: 'lax' } as const
const THEME_COOKIE_NAME = 'theme'

vi.mock('cookies-next', () => ({
  setCookie: vi.fn(),
  hasCookie: vi.fn(() => false)
}))

vi.mock('@/lib', () => ({
  getThemeAttribute: vi.fn(() => 'dark'),
  setThemeAttribute: vi.fn()
}))

vi.mock('@/constants', () => ({
  COOKIES: { theme: 'theme' },
  THEME: { osMedia: '(prefers-color-scheme: light)' }
}))

const createMatchMediaMock = (
  listeners: Record<string, Function[]>,
  removeEventListenerMock = vi.fn()
) => {
  return vi.fn().mockImplementation((query: string) => ({
    matches: true,
    media: query,
    addEventListener: (event: string, cb: Function) => {
      listeners[event].push(cb)
    },
    removeEventListener: removeEventListenerMock
  }))
}

const triggerThemeChange = (
  listeners: Record<string, Function[]>,
  matches: boolean
) => {
  act(() => {
    listeners.change.forEach((cb) => cb({ matches }))
  })
}

describe('useTheme', () => {
  let matchMediaMock: ReturnType<typeof vi.fn>
  let listeners: Record<string, Function[]>

  beforeEach(() => {
    listeners = { change: [] }

    matchMediaMock = createMatchMediaMock(listeners)
    vi.stubGlobal('matchMedia', matchMediaMock)
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns theme from getThemeAttribute on mount', () => {
    vi.mocked(getThemeAttribute).mockReturnValue('dark')

    const { result } = renderHook(() => useTheme())

    expect(result.current.theme).toBe('dark')
  })

  it('sets cookie if not present', () => {
    vi.mocked(hasCookie).mockReturnValue(false)

    renderHook(() => useTheme())

    expect(setCookie).toHaveBeenCalledWith(
      THEME_COOKIE_NAME,
      'dark',
      COOKIE_OPTIONS
    )
  })

  it('does not set cookie if already present', () => {
    vi.mocked(hasCookie).mockReturnValue(true)

    renderHook(() => useTheme())

    expect(setCookie).not.toHaveBeenCalledWith(
      THEME_COOKIE_NAME,
      'dark',
      COOKIE_OPTIONS
    )
  })

  it('toggles theme and sets attribute/cookie', () => {
    const { result } = renderHook(() => useTheme())

    act(() => {
      result.current.toggleTheme('light')
    })

    expect(result.current.theme).toBe('dark')
    expect(setThemeAttribute).toHaveBeenCalledWith('dark')
    expect(setCookie).toHaveBeenCalledWith(
      THEME_COOKIE_NAME,
      'dark',
      COOKIE_OPTIONS
    )

    act(() => {
      result.current.toggleTheme('dark')
    })

    expect(result.current.theme).toBe('light')
    expect(setThemeAttribute).toHaveBeenCalledWith('light')
    expect(setCookie).toHaveBeenCalledWith(
      THEME_COOKIE_NAME,
      'light',
      COOKIE_OPTIONS
    )
  })

  it('updates theme on OS theme change event', () => {
    const { result } = renderHook(() => useTheme())

    triggerThemeChange(listeners, true)

    expect(result.current.theme).toBe('light')

    triggerThemeChange(listeners, false)

    expect(result.current.theme).toBe('dark')
  })

  it('removes event listener on unmount', () => {
    const removeEventListenerMock = vi.fn()
    const customMatchMediaMock = createMatchMediaMock(
      listeners,
      removeEventListenerMock
    )
    vi.stubGlobal('matchMedia', customMatchMediaMock)

    const { unmount } = renderHook(() => useTheme())

    expect(removeEventListenerMock).not.toHaveBeenCalled()

    unmount()

    expect(removeEventListenerMock).toHaveBeenCalled()
  })
})
