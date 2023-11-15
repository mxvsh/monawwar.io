import './globals.css'

import { Poppins } from 'next/font/google'
import React from 'react'

import { NextUIProvider } from '@/providers/next-ui'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Monawwar Abdullah',
  description: 'Passionate Software Enginner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
