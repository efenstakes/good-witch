import './globals.scss'

import { Bebas_Neue, Roboto } from 'next/font/google'
import clsx from 'clsx'

const roboto = Roboto({ weight: '500', subsets: ['latin'] })
const bebas = Bebas_Neue({ weight: "400", subsets: ['latin'] })

export const metadata = {
  title: 'Glitch',
  description: 'Welcome to the Glitch project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx([ bebas.className, roboto.className ])}>{children}</body>
    </html>
  )
}
