import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import StyledComponentsRegistry from './libs/styled-components-registry'

const nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RD Station',
  description: 'Tech Challenge',
  icons: {
    icon: '/logo.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={nunito.className} suppressHydrationWarning={true}>
        <link rel='mask-icon' href='/logo.svg' color='#FFFFFF' />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
