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
            className="fixed z-0 opacity-50 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-left-[45%] rotate-12"
            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
          >
            <Image
              src="/gradient.png"
              alt="right background"
              className="relative shadow-none rounded-large user-select-none"
              draggable={false}
            />
          </div>
          <div className="relative z-10">{children}</div>
        </NextUIProvider>
      </body>
    </html>
  )
}
