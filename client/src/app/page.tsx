"use client"

import '@s/main.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Hello World, this is Andi Dev</h1>
      <Link href="/dashboard">Go to Dashboard</Link>
      <Link href="/login">Go to Login</Link>
    </>
  )
}