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
    <nav className="bg-gradient-to-r from-gray-800 via-purple-900 to-black shadow-md py-4">
      <Container>
        <div className="flex flex-row-reverse items-center">
          {navLinks.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`ml-6 text-white font-medium transition-colors duration-300 hover:text-purple-400 ${
                  isActive ? 'text-purple-500 underline underline-offset-4' : ''
                }`}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
