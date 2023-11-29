import { css } from '../styled-system/css'

export default function Home() {
  return (
    <div
      className={css({
        width: 'xl',
        height: 'xl',
        margin: 'xl',
        backgroundColor: 'gray.800',
        borderRadius: 'l',
        border: 'subtle',
        shadow: 'neumorphism.close'
      })}
    >
      <h1
        className={css({
          fontFamily: 'heading',
          fontSize: '4xl',
          fontWeight: 'bold',
          letterSpacing: 'packed',
          lineHeight: '4xl',
          color: 'primary.400'
        })}
      >
        Hello 🐼!
      </h1>
    </div>
  )
}
