import { Fira_Code, Lora, Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  weight: ['400', '500', '600'],
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-montserrat'
})

export const lora = Lora({
  weight: ['400', '500', '600'],
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lora'
})

export const firaCode = Fira_Code({
  weight: ['400', '500', '600'],
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fira-code'
})
