import { css } from '../styled-system/css'
import { H1, H2, H3, H4 } from '@/components'

export default function Home() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'xl',
        height: 'xl',
        margin: 'xl',
        backgroundColor: 'gray.800',
        borderRadius: 'l',
        border: 'subtle',
        shadow: 'neumorphism.close'
      })}
    >
      <H1>Hello 🐼!</H1>
      <H2>Hello 🐼!</H2>
      <H3>Hello 🐼!</H3>
      <H4>Hello 🐼!</H4>
    </div>
  )
}
