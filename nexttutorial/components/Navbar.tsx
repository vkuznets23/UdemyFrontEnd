import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4">
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/actions">Actions</Link>
      <Link href="/tours">Tours</Link>
    </nav>
  )
}
