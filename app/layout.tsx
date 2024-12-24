import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Final Countdown',
  description: 'Countdown to important exams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${inter.className} antialiased h-full flex flex-col`}>
        <main className="flex-grow">{children}</main>
        <footer className="p-2">
          <div className="text-white opacity-70 text-xs sm:text-sm text-right">
            github/mafwbh
          </div>
        </footer>
      </body>
    </html>
  )
}

