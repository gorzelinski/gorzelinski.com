import React, { useEffect, useState } from "react"
import styled from "styled-components"

const StyledTypewriter = styled.span`
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  &:after {
    content: "|";
    animation: blink 1s step-start infinite;
    color: var(--color-primary-base);
  }
`

const Typewriter = ({
  strings,
  typingInterval = 75,
  pauseInterval = 500,
  deletingInterval = 50,
  loop = false,
}) => {
  const [phase, setPhase] = useState("typing")
  const [typedString, setTypedString] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    switch (phase) {
      case "typing": {
        const nextTypedString = strings[selectedIndex].slice(
          0,
          typedString.length + 1
        )

        if (nextTypedString === typedString) {
          setPhase("pausing")
          break
        }

        const timeout = setTimeout(() => {
          setTypedString(nextTypedString)
        }, typingInterval)

        return () => clearTimeout(timeout)
      }

      case "deleting": {
        const nextRemainingWord = strings[selectedIndex].slice(
          0,
          typedString.length - 1
        )

        if (!typedString) {
          const nextIndex = selectedIndex + 1
          setSelectedIndex(strings[nextIndex] ? nextIndex : 0)
          setPhase("typing")
          break
        }

        const timeout = setTimeout(() => {
          setTypedString(nextRemainingWord)
        }, deletingInterval)

        return () => clearTimeout(timeout)
      }

      case "pausing":
        if (loop === false && selectedIndex === strings.length - 1) break
      //falls through in loop mode

      default: {
        const timeout = setTimeout(() => {
          setPhase("deleting")
        }, pauseInterval)

        return () => clearTimeout(timeout)
      }
    }
  }, [
    strings,
    typedString,
    selectedIndex,
    phase,
    loop,
    pauseInterval,
    typingInterval,
    deletingInterval,
  ])

  return <StyledTypewriter aria-hidden="true">{typedString}</StyledTypewriter>
}

export default Typewriter
