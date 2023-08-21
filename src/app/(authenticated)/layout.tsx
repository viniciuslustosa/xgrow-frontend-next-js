import { Navbar } from '@/components/Navbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500'
})
export const metadata: Metadata = {
  title: 'XGrow Frontend',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true} className={`dark bg-black text-white min-h-screen`}>
        <Navbar></Navbar>
        <main className="py-5 p-4 h-full">
          {children}
        </main>
      </body>
    </html>
  )
}
