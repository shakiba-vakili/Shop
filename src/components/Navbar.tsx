"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './Container'

function Navbar() {
    const pathname = usePathname()
  const navLinks = [
    { href: '/', title: 'خانه' },
    { href: '/store', title: 'فروشگاه' },
  ]

  return (
    <nav className='shadow p-4'>
        <Container>
        <div className="flex flex-row-reverse">
      {navLinks.map((item) => (
        <Link key={item.href} className={`mr-4 ${pathname === item.href ? "text-sky-500" : ""}`} href={item.href}>
          {item.title}
        </Link>
      ))}
      </div>
      </Container>
    </nav>
  )
}

export default Navbar
