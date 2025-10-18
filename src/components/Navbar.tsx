"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './Container'

function Navbar() {
    const pathname = usePathname()
  const navLinks = [
    { href: '/', title: 'Home' },
    { href: '/store', title: 'Store' },
  ]

  return (
    <nav className='shadow p-4'>
        <Container>
      {navLinks.map((item) => (
        <Link key={item.href} className={`mr-4 ${pathname === item.href ? "text-sky-500" : ""}`} href={item.href}>
          {item.title}
        </Link>
      ))}
      </Container>
    </nav>
  )
}

export default Navbar
