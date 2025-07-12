import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useNewsletter } from '../use-newsletter'

const FORM_URL_EN = 'https://app.convertkit.com/forms/3106682/subscriptions'
const FORM_URL_PL = 'https://app.convertkit.com/forms/3084916/subscriptions'
const CONFIRMATION_URL = 'https://example.com/confirm'

const createMockFormEvent = (
  form: HTMLFormElement
): React.FormEvent<HTMLFormElement> => ({
  preventDefault: vi.fn(),
  currentTarget: form,
  target: form,
  nativeEvent: {} as Event,
  bubbles: false,
  cancelable: false,
  defaultPrevented: false,
  eventPhase: 0,
  isTrusted: false,
  timeStamp: 0,
  type: 'submit',
  isDefaultPrevented: () => false,
  isPropagationStopped: () => false,
  persist: vi.fn(),
  stopPropagation: vi.fn()
})

vi.mock('@/design-system/sections/newsletter/newsletter.helpers', () => ({
  getFormURL: vi.fn((lang: string) =>
    lang === 'pl' ? FORM_URL_PL : FORM_URL_EN
  )
}))

describe('useNewsletter', () => {
  let mockFetch: any
  let mockWindowOpen: any

  beforeEach(() => {
    mockFetch = vi.fn()
    global.fetch = mockFetch

    mockWindowOpen = vi.fn()
    global.window.open = mockWindowOpen
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('initializes with idle state', () => {
    const { result } = renderHook(() => useNewsletter('en'))

    expect(result.current.state).toBe('idle')
    expect(result.current.FORM_URL).toBe(FORM_URL_EN)
  })

  it('uses correct form URL for Polish language', () => {
    const { result } = renderHook(() => useNewsletter('pl'))

    expect(result.current.FORM_URL).toBe(FORM_URL_PL)
  })

  it('handles successful form submission', async () => {
    const mockResponse = {
      json: vi.fn().mockResolvedValue({ status: 'success' })
    }

    mockFetch.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useNewsletter('en'))

    const mockForm = createMockFormEvent(document.createElement('form'))

    await act(async () => {
      await result.current.handleSubmit(mockForm)
    })

    expect(mockForm.preventDefault).toHaveBeenCalled()
    expect(mockFetch).toHaveBeenCalledWith(FORM_URL_EN, {
      method: 'post',
      body: expect.any(FormData),
      headers: {
        accept: 'application/json'
      }
    })

    expect(result.current.state).toBe('success')
  })

  it('handles quarantined status and opens popup', async () => {
    const mockResponse = {
      json: vi.fn().mockResolvedValue({
        status: 'quarantined',
        url: CONFIRMATION_URL
      })
    }
    mockFetch.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useNewsletter('en'))

    const mockForm = createMockFormEvent(document.createElement('form'))

    await act(async () => {
      await result.current.handleSubmit(mockForm)
    })

    expect(result.current.state).toBe('quarantined')
    expect(mockWindowOpen).toHaveBeenCalledWith(
      CONFIRMATION_URL,
      '_blank',
      'noopener,popup,height=512,width=512'
    )
  })

  it('handles error status', async () => {
    const mockResponse = {
      json: vi.fn().mockResolvedValue({ status: 'error' })
    }
    mockFetch.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useNewsletter('en'))

    const mockForm = createMockFormEvent(document.createElement('form'))

    await act(async () => {
      await result.current.handleSubmit(mockForm)
    })

    expect(result.current.state).toBe('error')
  })

  it('handles network errors', async () => {
    mockFetch.mockRejectedValue(new Error('Network error'))

    const { result } = renderHook(() => useNewsletter('en'))

    const mockForm = createMockFormEvent(document.createElement('form'))

    await act(async () => {
      await result.current.handleSubmit(mockForm)
    })

    expect(result.current.state).toBe('error')
  })

  it('allows manual state updates via setState', () => {
    const { result } = renderHook(() => useNewsletter('en'))

    expect(result.current.state).toBe('idle')

    act(() => {
      result.current.setState('loading')
    })

    expect(result.current.state).toBe('loading')

    act(() => {
      result.current.setState('success')
    })

    expect(result.current.state).toBe('success')
  })

  it('handles unknown response status', async () => {
    const mockResponse = {
      json: vi.fn().mockResolvedValue({ status: 'unknown' })
    }
    mockFetch.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useNewsletter('en'))

    const mockForm = createMockFormEvent(document.createElement('form'))

    await act(async () => {
      await result.current.handleSubmit(mockForm)
    })

    expect(result.current.state).toBe('error')
  })

  it('handles JSON parsing errors', async () => {
    const mockResponse = {
      json: vi.fn().mockRejectedValue(new Error('Invalid JSON'))
    }
    mockFetch.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useNewsletter('en'))

    const mockForm = createMockFormEvent(document.createElement('form'))

    await act(async () => {
      await result.current.handleSubmit(mockForm)
    })

    expect(result.current.state).toBe('error')
  })

  it('submits form data correctly', async () => {
    const mockResponse = {
      json: vi.fn().mockResolvedValue({ status: 'success' })
    }
    mockFetch.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useNewsletter('en'))

    const form = document.createElement('form')

    const emailInput = document.createElement('input')
    emailInput.name = 'email'
    emailInput.value = 'test@example.com'

    const nameInput = document.createElement('input')
    nameInput.name = 'name'
    nameInput.value = 'Test User'

    form.appendChild(emailInput)
    form.appendChild(nameInput)

    const mockForm = createMockFormEvent(form)

    await act(async () => {
      await result.current.handleSubmit(mockForm)
    })

    expect(mockFetch).toHaveBeenCalledWith(FORM_URL_EN, {
      method: 'post',
      body: expect.any(FormData),
      headers: {
        accept: 'application/json'
      }
    })
  })
})
