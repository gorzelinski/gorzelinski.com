'use client'
import { useState } from 'react'
import ConfettiComponent from 'react-confetti'
import { useDocumentDimensions } from '@/hooks'
import { ConfettiProps } from './confetti.types'
import { Button } from '../../elements'

export const Confetti = ({ start, stop, more }: ConfettiProps) => {
  const { width, height } = useDocumentDimensions()
  const [recycle, setRecycle] = useState(false)
  const [clicks, setClicks] = useState(0)
  const [numberOfPieces, setNumberOfPieces] = useState(200)

  return (
    <>
      <ConfettiComponent
        width={width}
        height={height}
        recycle={recycle}
        numberOfPieces={numberOfPieces}
        colors={['#0466c8', '#47a3ff', '#ffbe0a', '#157f1f', '#c92c4e']}
      />
      <Button
        onClick={() => {
          setRecycle(!recycle)
          setClicks(clicks + 1)

          if (clicks > 11) {
            setNumberOfPieces(1000)
            setClicks(-1)
            return
          }

          setNumberOfPieces(200)
        }}
      >
        {clicks > 11 ? more : recycle ? stop : start}
      </Button>
    </>
  )
}
