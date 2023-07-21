import type { Metadata } from 'next'
import { raleway }       from '@c/fonts'

export const metadata: Metadata = {
  title: 'Crazy Shop',
  description: 'E-Commerce test for Crazy Imagine Dev application - Developed by Andi Dev',
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