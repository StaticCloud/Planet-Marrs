import './globals.css'
import Header from './components/Header';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Planet Marrs',
  description: 'Fast, responsive, and professional websites for individuals and businesses alike.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
