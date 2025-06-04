import Navbar from '@/components/Navbar'
import './globals.css'
import React from 'react'
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'], weight: '600' })

export default function Rootlayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={baloo.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  )
}
