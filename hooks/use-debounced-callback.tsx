import { useCallback, useRef } from 'react'

type AnyFunction = (...args: any[]) => any

export function useDebouncedCallback<T extends AnyFunction>(
  func: T,
  wait: number = 300
): (...args: Parameters<T>) => void {
  const timeout = useRef<NodeJS.Timeout>()

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => {
        func(...args)
      }, wait)
    },
    [func, wait]
  )
}
