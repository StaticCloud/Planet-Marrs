import './globals.css'
import Header from './components/Header';
import type { Metadata } from 'next'
import { urbanist } from './fonts'; 

export const metadata: Metadata = {
  title: 'Planet Marrs',
  description: 'Fast, responsive, and professional websites for individuals and businesses alike.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className={urbanist.className}>
          {children}
        </main>
      </body>
    </html>
  )
}
