import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useNewsletter } from '../use-newsletter'

const FORM_URL_EN = 'https://app.convertkit.com/forms/3106682/subscriptions'
const FORM_URL_PL = 'https://app.convertkit.com/forms/3084916/subscriptions'
const CONFIRMATION_URL = 'https://example.com/confirm'

function createFormData(entries: Record<string, string> = {}) {
  const formData = new FormData()
  for (const [key, value] of Object.entries(entries)) {
    formData.append(key, value)
  }
  return formData
}

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

    expect(result.current.state).toEqual({ status: 'idle' })
    expect(result.current.isPending).toBe(false)
  })

  it('returns a formAction function', () => {
    const { result } = renderHook(() => useNewsletter('en'))

    expect(typeof result.current.formAction).toBe('function')
  })

  it('handles successful form submission', async () => {
    const mockResponse = {
      json: vi.fn().mockResolvedValue({ status: 'success' })
    }
    mockFetch.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useNewsletter('en'))

    const formData = createFormData({ email_address: 'test@example.com' })

    await act(async () => {
      await result.current.formAction(formData)
    })

    expect(mockFetch).toHaveBeenCalledWith(FORM_URL_EN, {
      method: 'post',
      body: expect.any(FormData),
      headers: {
        accept: 'application/json'
      }
    })

    expect(result.current.state).toEqual({ status: 'success' })
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

    const formData = createFormData({ email_address: 'test@example.com' })

    await act(async () => {
      await result.current.formAction(formData)
    })

    expect(result.current.state).toEqual({
      status: 'quarantined',
      url: CONFIRMATION_URL
    })
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

    const formData = createFormData({ email_address: 'test@example.com' })

    await act(async () => {
      await result.current.formAction(formData)
    })

    expect(result.current.state).toEqual({ status: 'error' })
  })

  it('handles network errors', async () => {
    mockFetch.mockRejectedValue(new Error('Network error'))

    const { result } = renderHook(() => useNewsletter('en'))

    const formData = createFormData({ email_address: 'test@example.com' })

    await act(async () => {
      await result.current.formAction(formData)
    })

    expect(result.current.state).toEqual({ status: 'error' })
  })

  it('uses correct form URL for Polish language', async () => {
    const mockResponse = {
      json: vi.fn().mockResolvedValue({ status: 'success' })
    }
    mockFetch.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useNewsletter('pl'))

    const formData = createFormData({ email_address: 'test@example.com' })

    await act(async () => {
      await result.current.formAction(formData)
    })

    expect(mockFetch).toHaveBeenCalledWith(FORM_URL_PL, {
      method: 'post',
      body: expect.any(FormData),
      headers: {
        accept: 'application/json'
      }
    })
  })

  it('handles unknown response status', async () => {
    const mockResponse = {
      json: vi.fn().mockResolvedValue({ status: 'unknown' })
    }
    mockFetch.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useNewsletter('en'))

    const formData = createFormData({ email_address: 'test@example.com' })

    await act(async () => {
      await result.current.formAction(formData)
    })

    expect(result.current.state).toEqual({ status: 'error' })
  })

  it('handles JSON parsing errors', async () => {
    const mockResponse = {
      json: vi.fn().mockRejectedValue(new Error('Invalid JSON'))
    }
    mockFetch.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useNewsletter('en'))

    const formData = createFormData({ email_address: 'test@example.com' })

    await act(async () => {
      await result.current.formAction(formData)
    })

    expect(result.current.state).toEqual({ status: 'error' })
  })

  it('submits form data correctly', async () => {
    const mockResponse = {
      json: vi.fn().mockResolvedValue({ status: 'success' })
    }
    mockFetch.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useNewsletter('en'))

    const formData = createFormData({
      email: 'test@example.com',
      name: 'Test User'
    })

    await act(async () => {
      await result.current.formAction(formData)
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
