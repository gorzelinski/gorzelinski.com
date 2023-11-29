import { css } from '../styled-system/css'

export default function Home() {
  return (
    <h1
      className={css({
        fontSize: 'xxx-large',
        fontWeight: 'bold',
        color: 'primary.400'
      })}
    >
      Hello 🐼!
    </h1>
  )
}
