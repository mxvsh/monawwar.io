'use client'

import { NextUIProvider as Provider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const NextUIProvider = ({ children }: Props) => {
  return (
    <Provider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </Provider>
  )
}

export { NextUIProvider }
