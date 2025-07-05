import { useState, useEffect } from 'react'

export function useDocumentDimensions() {
  const [documentDimensions, setDocumentDimensions] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    setDocumentDimensions({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    })

    const handleResize = () => {
      setDocumentDimensions({
        width: document.body.clientWidth,
        height: document.body.clientHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return documentDimensions
}
