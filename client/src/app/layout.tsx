import type { Metadata } from 'next'
import { raleway }       from '@c/fonts'

export const metadata: Metadata = {
  title: 'crazyTest',
  description: 'Test for Crazy Imagine Dev',
}

export default function RootLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        { children }
      </body>
    </html>
  )
}