import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marta Klisowska - Zarządzanie projektami',
  description: 'Strona Marty Klisowskiej prowadzącej działalność gospodarczą polegającą na zarządzaniu projektami',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} dark h-screen bg-orange-900 flex justify-center items-center content-center`} >
        
        {children}
        </body>
    </html>
  )
}
