import type { Metadata } from 'next'

import StyledComponentsRegistry from './lib/registry'
import { GlobalStyles } from './styles/global'

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
      <body suppressHydrationWarning={true}>
        <link rel='mask-icon' href='/logo.svg' color='#FFFFFF' />
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
