import './globals.css'

import { NextUIProvider } from '@/providers/next-ui'
import { Image } from '@nextui-org/react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600'],
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
        <NextUIProvider>
          <div
            aria-hidden="true"
            className="fixed opacity-50 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-left-[45%] z-0 rotate-12"
          >
            <Image
              src="/gradient.png"
              alt="right background"
              className="relative z-10 shadow-none rounded-large"
            />
          </div>
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}
